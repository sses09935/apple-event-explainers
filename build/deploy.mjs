import {checkVerification,checkDraftPreviewVerification,checkDraftHostingVerification} from './verification.mjs';
import {readFileSync,writeFileSync,mkdirSync,mkdtempSync,rmSync,existsSync} from 'node:fs';
import {join,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {randomBytes} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {ROOT,loadData,hash,releaseErrors} from './data.mjs';
import {checkPublic,debug,files} from './inspect.mjs';
import {inspectSourceTree} from './public-tree.mjs';
import {hostingConfig,productionErrors,checkBuildIdentity} from './publication.mjs';
export function deploymentErrors(config,options={}){
 const errors=[],project=config.deployment?.target_firebase_project,site=config.deployment?.target_firebase_site;
 for(const [key,value]of [['project',project],['site',site]]){
  if(!value)errors.push(`Deployment ${key} is unset; no account default is permitted.`);
  else if(!/^[a-z][a-z0-9-]{4,61}[a-z0-9]$/.test(value))errors.push(`Invalid Firebase ${key}`);
  if(/afm3/i.test(value||''))errors.push(`Original AFM3 ${key} is forbidden.`);
 }
 if(options.project&&options.project!==project||options.site&&options.site!==site)errors.push('Deployment target mismatch');
 if(!options.authorizeRemote||!options.authorizeDeploy)errors.push('Remote write and deployment are not authorized; explicit one-operation flags required.');
 return errors;
}
export function hostingPreflight(d,profile){
 const content_blockers=releaseErrors(d),errors=[];
 if(d.config.publication_status!=='release-ready')content_blockers.push('Content is not release-ready');
 const draft=profile==='preview'&&d.config.publication_status==='draft';
 const engineeringOnly=profile==='preview'&&['draft','published'].includes(d.config.publication_status);
 const verification_gate=engineeringOnly?'scaffold':profile==='production'?'production':'release';
 if(!['preview','production'].includes(profile))errors.push('Unknown Hosting output profile');
 if(d.config.deployment.allow_remote_write!==false||d.config.deployment.allow_deploy!==false)errors.push('Permanent deployment flags must remain false');
 if(engineeringOnly){
  if(d.semantic.input_digest!==d.digest)errors.push('Hosting requires a semantic review record matching the current input digest');
 }else{
  errors.push(...content_blockers);
  if(profile==='production')errors.push(...productionErrors(d));
 }
 return {draft,engineeringOnly,verification_gate,content_blockers,errors:[...new Set(errors)]};
}
export function bundle(root,hosting){
 const out=join(root,'dist/web'),entries=files(out).sort().map(path=>{const bytes=readFileSync(join(out,path));return {path,bytes:bytes.length,sha256:hash(bytes)};});
 return {entries,digest:hash(JSON.stringify({entries,hosting}))};
}
export function firebaseArgs(plan,config='firebase.json'){
 const common=['--project',plan.project,'--config',config,'--non-interactive'];
 return plan.channel==='live'?['deploy','--only','hosting',...common]:['hosting:channel:deploy',plan.channel,'--expires','7d','--no-authorized-domains',...common];
}
const deploymentHosting=(profile,site)=>{const h=hostingConfig(profile,{site});h.hosting.public='web';return h;};
const authorizationKeys=['schema_version','id','reason','authorized_at','expires_at','project','site','channel','profile','preview_ttl','input_digest','source_tree_digest','artifact_digest'];
const liveAuthorizationKeys=[...authorizationKeys.filter(k=>k!=='preview_ttl'),'kind','hosting_lifetime'];
const authorizationReceipt=(root,a)=>join(root,'dist/deploy-receipts',`${a.kind==='draft-live'?'draft-live':'draft'}-${a.id}.json`);
const authorizationClaim=(root,a)=>join(root,'dist/deploy-receipts',`draft-${a.id}.json`);
const authorizationConsumed=(root,a)=>['draft','draft-live'].some(prefix=>existsSync(join(root,'dist/deploy-receipts',`${prefix}-${a.id}.json`)));
function draftPreviewErrors(root,d,context,a){
 const errors=[];
 if(!a||typeof a!=='object'||Array.isArray(a)||JSON.stringify(Object.keys(a).sort())!==JSON.stringify([...authorizationKeys].sort()))return ['Invalid draft preview authorization fields'];
 if(a.schema_version!==1||!(/^[a-f0-9]{32}$/.test(a.id||''))||typeof a.reason!=='string'||!a.reason.trim())errors.push('Invalid draft preview authorization identity/reason');
 const utc=value=>typeof value==='string'&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value);
 const issued=Date.parse(a.authorized_at),until=Date.parse(a.expires_at),now=Date.now();
 if(!utc(a.authorized_at)||!utc(a.expires_at)||!Number.isFinite(issued)||!Number.isFinite(until)||issued>now||until<=now||until<=issued||until-issued>24*60*60*1000)errors.push('Draft preview authorization expired or invalid time window');
 if(context.channel==='live'||context.profile!=='preview'||a.profile!=='preview'||a.preview_ttl!=='7d')errors.push('Draft preview exception requires non-live preview profile and 7d expiration');
 if(d.config.publication_status!=='draft'||d.semantic.decision!=='pending'||d.semantic.input_digest!==d.digest)errors.push('Draft preview requires preserved draft/pending content and matching semantic digest');
 for(const key of ['project','site','channel','input_digest','source_tree_digest','artifact_digest'])if(a[key]!==context[key])errors.push(`Draft preview authorization ${key} mismatch`);
 for(const key of ['input_digest','source_tree_digest','artifact_digest'])if(!/^[a-f0-9]{64}$/.test(a[key]||''))errors.push(`Invalid draft preview authorization ${key}`);
 if(/^[a-f0-9]{32}$/.test(a.id||'')&&authorizationConsumed(root,a))errors.push('Draft preview authorization already consumed');
 return errors;
}
function draftLiveErrors(root,d,context,a){
 const errors=[];
 if(!a||typeof a!=='object'||Array.isArray(a)||JSON.stringify(Object.keys(a).sort())!==JSON.stringify([...liveAuthorizationKeys].sort()))return ['Invalid draft live authorization fields'];
 if(a.schema_version!==1||a.kind!=='draft-live'||typeof a.id!=='string'||!(/^[a-f0-9]{32}$/.test(a.id))||typeof a.reason!=='string'||!a.reason.trim())errors.push('Invalid draft live authorization identity/reason');
 const utc=value=>typeof value==='string'&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{3})?Z$/.test(value);
 const issued=Date.parse(a.authorized_at),until=Date.parse(a.expires_at),now=Date.now();
 if(!utc(a.authorized_at)||!utc(a.expires_at)||!Number.isFinite(issued)||!Number.isFinite(until)||issued>now||until<=now||until<=issued||until-issued>24*60*60*1000)errors.push('Draft live authorization expired or invalid time window');
 if(context.project!=='apple-event-explainers'||context.site!=='apple-event-explainers'||context.channel!=='live'||context.profile!=='preview'||a.profile!=='preview')errors.push('Draft live exception requires the dedicated apple-event-explainers project/site, live channel and preview profile');
 if(a.hosting_lifetime!=='until-replaced-or-removed')errors.push('Draft live authorization must acknowledge persistent Hosting without preview expiration');
 if(d.config.publication_status!=='draft'||d.semantic.decision!=='pending'||d.semantic.input_digest!==d.digest)errors.push('Draft live requires preserved draft/pending content and matching semantic digest');
 if(d.config.deployment.allow_remote_write!==false||d.config.deployment.allow_deploy!==false)errors.push('Draft live requires permanent deployment flags to remain false');
 for(const key of ['project','site','channel','input_digest','source_tree_digest','artifact_digest'])if(a[key]!==context[key])errors.push(`Draft live authorization ${key} mismatch`);
 for(const key of ['input_digest','source_tree_digest','artifact_digest'])if(!/^[a-f0-9]{64}$/.test(a[key]||''))errors.push(`Invalid draft live authorization ${key}`);
 if(/^[a-f0-9]{32}$/.test(a.id||'')&&authorizationConsumed(root,a))errors.push('Draft live authorization already consumed');
 return errors;
}
export function makePlan(root=ROOT,{channel,project,site,draftPreviewAuthorization=null,draftLiveAuthorization=null}={}){
 const d=loadData(root),errors=deploymentErrors(d.config,{project,site,authorizeRemote:true,authorizeDeploy:true});
 const hasPreview=draftPreviewAuthorization!==null,hasLive=draftLiveAuthorization!==null;
 if(hasPreview&&hasLive)errors.push('Draft preview and draft live authorizations are mutually exclusive');
 if(!channel||!(/^[a-z][a-z0-9-]{0,38}$/.test(channel)))errors.push('Explicit valid preview channel or live required');
 const info=JSON.parse(readFileSync(join(root,'dist/web/build-info.json'))),profile=info.profile;
 try{checkBuildIdentity(root,d.config,info);}catch(e){errors.push(e.message);}
 if(channel==='live'&&(info.source_revision?.commit?info.source_revision.dirty!==false:d.config.publication_status==='published'))errors.push('Live publication requires a clean committed checkout');
 const preflight=hostingPreflight(d,profile),contentBlockers=preflight.content_blockers;
 errors.push(...preflight.errors);
 if(channel==='live'&&profile!=='production'&&!preflight.engineeringOnly)errors.push('Live requires verified production output or an engineering-verified publication');
 // Hosting a disclosed draft requires complete engineering verification.
 // Its content blockers remain visible; optional historical authorizations
 // add their own restrictions and never replace these checks.
 let verificationGate=preflight.verification_gate;
 try{
  const check=preflight.engineeringOnly?(hasPreview||hasLive?checkDraftPreviewVerification:checkDraftHostingVerification):checkVerification;
  verificationGate=check(root,profile).gate;
 }catch(e){errors.push(e.code==='ENOENT'?'Complete verification record is missing':e.message);}
 let source=null;try{source=inspectSourceTree(root);checkPublic(join(root,'dist/web'),d);debug(join(root,'dist/web'),d);}catch(e){errors.push(e.message);}
 if(JSON.stringify(JSON.parse(readFileSync(join(root,'firebase.json'))))!==JSON.stringify(hostingConfig('preview')))errors.push('Root Firebase template differs from reviewed configuration');
 if(JSON.stringify(JSON.parse(readFileSync(join(root,'dist/hosting.json'))))!==JSON.stringify(hostingConfig(profile)))errors.push('Generated Hosting configuration is stale or changed');
 const hosting=deploymentHosting(profile,d.config.deployment.target_firebase_site),artifact=bundle(root,hosting);
 const context={project:d.config.deployment.target_firebase_project,site:d.config.deployment.target_firebase_site,channel,profile,input_digest:d.digest,source_tree_digest:source?.digest,artifact_digest:artifact.digest};
 if(hasPreview)errors.push(...draftPreviewErrors(root,d,context,draftPreviewAuthorization));
 if(hasLive)errors.push(...draftLiveErrors(root,d,context,draftLiveAuthorization));
 const created=Date.now();
 const plan={schema_version:1,created_at:new Date(created).toISOString(),expires_at:new Date(created+30*60*1000).toISOString(),nonce:randomBytes(16).toString('hex'),ready:!errors.length,errors:[...new Set(errors)],project:d.config.deployment.target_firebase_project,site:d.config.deployment.target_firebase_site,channel:channel||null,profile,verification_gate:verificationGate,version:info.version,source_revision:info.source_revision,output_directory:'dist/web',input_digest:d.digest,source_tree_digest:source?.digest||null,artifact,hosting,draft_preview_authorization:draftPreviewAuthorization,draft_live_authorization:draftLiveAuthorization,content_blockers:contentBlockers};
 plan.digest=hash(JSON.stringify(plan));return plan;
}
export const confirmationFor=p=>`${p.project}/${p.site}/${p.channel}:${p.nonce}:${p.digest}`;
export function executePlan(plan,options={},root=ROOT,run=spawnSync){
 const d=loadData(root),errors=deploymentErrors(d.config,options),{digest,...unsigned}=plan;
 const preview=plan.draft_preview_authorization??null,live=plan.draft_live_authorization??null,hasPreview=preview!==null,hasLive=live!==null,a=hasLive?live:preview;
 if(hasPreview&&hasLive||(options.draftPreviewAuthorization??null)!==null&&(options.draftLiveAuthorization??null)!==null)errors.push('Draft preview and draft live authorizations are mutually exclusive');
 if(JSON.stringify(options.draftPreviewAuthorization??null)!==JSON.stringify(preview))errors.push('Matching one-operation draft preview authorization required');
 if(JSON.stringify(options.draftLiveAuthorization??null)!==JSON.stringify(live))errors.push('Matching one-operation draft live authorization required');
 if(digest!==hash(JSON.stringify(unsigned)))errors.push('Deployment plan was altered');
 if(!plan.ready||plan.errors.length)errors.push('Preflight is blocked');
 if(!/^[a-z][a-z0-9-]{0,38}$/.test(plan.channel||''))errors.push('Invalid channel');
 if(Date.now()>Date.parse(plan.expires_at)||!Number.isFinite(Date.parse(plan.expires_at)))errors.push('Deployment plan expired');
 if(!Number.isFinite(Date.parse(plan.created_at))||Date.parse(plan.created_at)>Date.now()||Date.parse(plan.expires_at)<=Date.parse(plan.created_at)||Date.parse(plan.expires_at)-Date.parse(plan.created_at)>30*60*1000)errors.push('Invalid deployment plan time window');
 if(options.confirm!==confirmationFor(plan))errors.push('Exact one-time target/channel/artifact confirmation required');
 if(options.channel!==undefined&&options.channel!==plan.channel)errors.push('Deployment channel mismatch');
 if(plan.project!==d.config.deployment.target_firebase_project||plan.site!==d.config.deployment.target_firebase_site)errors.push('Target changed after preflight');
 const preflight=hostingPreflight(d,plan.profile);
 errors.push(...preflight.errors);
 if(JSON.stringify(plan.content_blockers)!==JSON.stringify(preflight.content_blockers))errors.push('Content blockers changed or omitted');
 if(plan.channel==='live'&&plan.profile!=='production'&&!preflight.engineeringOnly)errors.push('Live requires production output or an engineering-verified publication');
 if(plan.input_digest!==d.digest)errors.push('Content changed after preflight');
 const info=JSON.parse(readFileSync(join(root,'dist/web/build-info.json')));
 try{checkBuildIdentity(root,d.config,info);}catch(e){errors.push(e.message);}
 if(plan.channel==='live'&&(info.source_revision?.commit?info.source_revision.dirty!==false:d.config.publication_status==='published'))errors.push('Live publication requires a clean committed checkout');
 if(info.profile!==plan.profile||info.input_digest!==d.digest)errors.push('Output profile/content changed');
 if(plan.version!==info.version||JSON.stringify(plan.source_revision)!==JSON.stringify(info.source_revision))errors.push('Output version or source revision changed after preflight');
 if(JSON.stringify(bundle(root,plan.hosting))!==JSON.stringify(plan.artifact))errors.push('Artifact changed after preflight');
 if(inspectSourceTree(root).digest!==plan.source_tree_digest)errors.push('Source tree changed after preflight');
 checkPublic(join(root,'dist/web'),d);debug(join(root,'dist/web'),d);
 const check=preflight.engineeringOnly?(hasPreview||hasLive?checkDraftPreviewVerification:checkDraftHostingVerification):checkVerification;
 if(plan.verification_gate!==check(root,plan.profile).gate)errors.push('Hosting verification gate changed after preflight');
 const context={project:plan.project,site:plan.site,channel:plan.channel,profile:plan.profile,input_digest:d.digest,source_tree_digest:inspectSourceTree(root).digest,artifact_digest:bundle(root,plan.hosting).digest};
 if(hasPreview)errors.push(...draftPreviewErrors(root,d,context,preview));
 if(hasLive)errors.push(...draftLiveErrors(root,d,context,live));
 if(JSON.stringify(plan.hosting)!==JSON.stringify(deploymentHosting(plan.profile,plan.site)))errors.push('Unexpected Hosting configuration');
 const receipts=join(root,'dist/deploy-receipts');mkdirSync(receipts,{recursive:true});
 if(!/^[a-f0-9]{32}$/.test(plan.nonce))errors.push('Invalid nonce');
 if(errors.length)throw Error([...new Set(errors)].join('\n'));
 const receipt=join(receipts,plan.nonce+'.json');if(existsSync(receipt))throw Error('One-time confirmation already consumed');
 const stage=mkdtempSync(join(tmpdir(),'apple-event-deploy-'));
 try{
  for(const e of plan.artifact.entries){const dest=join(stage,'web',e.path);mkdirSync(dirname(dest),{recursive:true});const bytes=readFileSync(join(root,'dist/web',e.path));if(hash(bytes)!==e.sha256)throw Error('Artifact changed during staging');writeFileSync(dest,bytes);}
  writeFileSync(join(stage,'firebase.json'),JSON.stringify(plan.hosting,null,2)+'\n');
  // A failed or uncertain attempt also consumes approval. Never retry a write automatically.
  writeFileSync(receipt,JSON.stringify({digest:plan.digest,started_at:new Date().toISOString(),status:'attempted'}),{flag:'wx'});
  if(a){
   const attempt=JSON.stringify({authorization_id:a.id,plan_digest:plan.digest,project:plan.project,site:plan.site,channel:plan.channel,artifact_digest:plan.artifact.digest,started_at:new Date().toISOString(),status:'attempted'},null,2)+'\n';
   // Both draft kinds claim the same ID atomically before any remote command.
   // Keep the distinct live receipt for reporting, without a cross-kind race.
   writeFileSync(authorizationClaim(root,a),attempt,{flag:'wx'});
   if(authorizationReceipt(root,a)!==authorizationClaim(root,a))writeFileSync(authorizationReceipt(root,a),attempt,{flag:'wx'});
  }
  const result=run('firebase',firebaseArgs(plan),{cwd:stage,stdio:'inherit',shell:false});
  writeFileSync(receipt,JSON.stringify({digest:plan.digest,finished_at:new Date().toISOString(),exit_code:result.status,status:result.status===0?'cli-succeeded':'failed-or-uncertain'},null,2));
  if(a)writeFileSync(authorizationReceipt(root,a),JSON.stringify({authorization_id:a.id,plan_digest:plan.digest,project:plan.project,site:plan.site,channel:plan.channel,artifact_digest:plan.artifact.digest,finished_at:new Date().toISOString(),exit_code:result.status,status:result.status===0?'cli-succeeded':'failed-or-uncertain'},null,2)+'\n');
  if(result.status!==0)throw Error('Firebase CLI failed or outcome is uncertain; check remote state before another plan');
  return {status:'cli-succeeded',live_verified:false};
 }finally{rmSync(stage,{recursive:true,force:true});}
}
if(process.argv[1]===fileURLToPath(import.meta.url))try{
 const args=process.argv.slice(2),options={};let mode;
 for(let i=0;i<args.length;i++){const a=args[i];if(a==='--plan'||a==='--execute'){if(mode)throw Error('Choose exactly one mode');mode=a;}else if(a==='--allow-remote-write')options.authorizeRemote=true;else if(a==='--allow-deploy')options.authorizeDeploy=true;else if(['--channel','--project','--site','--confirm','--draft-preview-authorization','--draft-live-authorization'].includes(a)){if(!args[i+1]||args[i+1].startsWith('--'))throw Error('Missing argument');options[a.slice(2)]=args[++i];}else throw Error('Unknown deploy argument');}
 if(options['draft-preview-authorization']&&options['draft-live-authorization'])throw Error('Draft preview and draft live authorizations are mutually exclusive');
 if(options['draft-preview-authorization'])options.draftPreviewAuthorization=JSON.parse(readFileSync(options['draft-preview-authorization'],'utf8'));
 if(options['draft-live-authorization'])options.draftLiveAuthorization=JSON.parse(readFileSync(options['draft-live-authorization'],'utf8'));
 if(mode==='--plan'){const p=makePlan(ROOT,options);writeFileSync(join(ROOT,'dist/deploy-plan.json'),JSON.stringify(p,null,2)+'\n');console.log(JSON.stringify({...p,confirmation:p.ready?confirmationFor(p):null},null,2));if(!p.ready)process.exitCode=1;}
 else if(mode==='--execute'){const p=JSON.parse(readFileSync(join(ROOT,'dist/deploy-plan.json')));console.log(executePlan(p,options));}
 else throw Error(deploymentErrors(loadData().config).join('\n')+'\nUse --plan --channel CHANNEL for local preflight.');
}catch(e){console.error(e.message);process.exitCode=1;}
