import {writeVerification,requiredChecks,checkVerification,outputDigest} from '../build/verification.mjs';
// Synthetic local tests. No Firebase CLI or remote write is executed.
import test from 'node:test';
import assert from 'node:assert/strict';
import {join} from 'node:path';
import {mkdtempSync,cpSync,readFileSync,writeFileSync,existsSync,rmSync,mkdirSync,symlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {spawnSync} from 'node:child_process';
import {ROOT,loadData,hash,releaseErrors} from '../build/data.mjs';
import {build} from '../build/build.mjs';
import {debug,checkPublic} from '../build/inspect.mjs';
import {publicBase,hostingConfig,responseHeaders,CSP,gitStamp,buildIdentity} from '../build/publication.mjs';
import {textQuality,authorQualityErrors,exceptions} from '../build/quality.mjs';

test('official nonbreaking spaces preserve complete-name checks without excusing missing names',()=>{
 for(const space of ['\u00a0','\u202f']){
  const valid=['iPhone 18 Pro Max','iPhone Duo','Apple Watch Series 12','Apple Watch Ultra 4','AirPods 5'].join('、').replaceAll(' ',space);
  assert.deepEqual(textQuality(valid),[]);
  for(const invalid of ['Watch Ultra 4','Pro Max','Apple Watch Apple Watch'])assert.ok(textQuality(invalid.replaceAll(' ',space)).length);
 }
});

import {publicFiles,inspectSourceTree,exportPublic,sensitiveText} from '../build/public-tree.mjs';
import {makePlan,executePlan,confirmationFor,firebaseArgs,hostingPreflight} from '../build/deploy.mjs';
import {serve} from '../build/preview.mjs';
import {makeFixture} from './fixtures/make.mjs';
import {inspectEnvironment} from '../build/environment.mjs';
import {inspectStatus,reviewedSeconds} from '../build/status.mjs';

test('status counts reviewed interval unions separately from acquired audio and subtitles',()=>{
 const segments=[{start_seconds:1,end_seconds:5,visual_viewed:true,acquired:['audio']},{start_seconds:2,end_seconds:4,visual_viewed:true},{start_seconds:4,end_seconds:7,visual_viewed:true},{start_seconds:10,end_seconds:12,subtitles_read:true}];
 assert.equal(reviewedSeconds(segments,'visual_viewed'),6);
 assert.equal(reviewedSeconds(segments,'audio_checked'),0);
 assert.equal(reviewedSeconds(segments,'subtitles_read'),2);
});

test('status keeps blocked draft, historical delivery and absent remote observations separate',()=>{
 const f=draftPrepared();try{
  const before=readFileSync(join(f.root,'dist/verification.json'));
  writeFileSync(join(f.root,'dist/delivery.json'),JSON.stringify({live_verified:true,preview_verified:true}));
  const r=inspectStatus(f.root);
  assert.equal(r.verification.status,'current');assert.equal(r.release.verified,false);assert.equal(r.production.verified,false);
  assert.equal(r.release.content_preflight,'blocked');assert.equal(r.semantic.decision,'pending');assert.equal(r.content.scope_complete,false);
  assert.equal(r.hosting.local_preflight,'passed');assert.equal(r.hosting.engineering_verified,true);assert.deepEqual(r.hosting.blockers,[]);
  assert.equal(r.hosting.required_verification_gate,'scaffold');assert.equal(r.hosting.content_certification_required,false);
  assert.equal(r.hosting.channel,'live');assert.equal(r.hosting.remote_environment,'not-queried');assert.equal(r.hosting.authorization,'required-at-execution');assert.equal(r.hosting.requires_one_time_confirmation,true);
  assert.equal(r.remote.live_verified,null);assert.equal(r.remote.preview_verified,null);
  assert.deepEqual(readFileSync(join(f.root,'dist/verification.json')),before);
  assert.equal(existsSync(join(f.root,'dist/deploy-plan.json')),false);assert.equal(existsSync(join(f.root,'dist/deploy-receipts')),false);
 }finally{f.cleanup();}
});

test('status rejects stale source, changed output, missing and malformed verification',()=>fixture(f=>{
 assert.equal(inspectStatus(f.root).verification.status,'current');
 const original=readFileSync(join(f.root,'README.md'));writeFileSync(join(f.root,'README.md'),original+'\n');
 assert.equal(inspectStatus(f.root).verification.status,'stale-or-invalid');assert.equal(inspectStatus(f.root).hosting.engineering_verified,false);writeFileSync(join(f.root,'README.md'),original);
 writeFileSync(join(f.root,'dist/web/index.html'),'changed output');assert.equal(inspectStatus(f.root).verification.status,'stale-or-invalid');
 writeFileSync(join(f.root,'dist/verification.json'),'{');assert.equal(inspectStatus(f.root).verification.status,'stale-or-invalid');
 rmSync(join(f.root,'dist/verification.json'));assert.equal(inspectStatus(f.root).verification.status,'missing');
 assert.equal(inspectStatus(f.root).hosting.local_preflight,'blocked');assert.equal(inspectStatus(f.root).hosting.engineering_verified,false);
}));

test('status checks the real Hosting template and handles absent build output without certifying content',()=>{
 const f=draftPrepared();try{
  const generated=JSON.parse(readFileSync(join(f.root,'dist/hosting.json')));generated.hosting.public='unexpected';f.json('dist/hosting.json',generated);
  const r=inspectStatus(f.root);assert.equal(r.verification.status,'current');assert.equal(r.hosting.engineering_verified,true);assert.equal(r.hosting.local_preflight,'blocked');assert.match(r.hosting.blockers.join(' '),/Hosting configuration/);assert.equal(r.release.verified,false);
  rmSync(join(f.root,'dist/web'),{recursive:true});const missing=inspectStatus(f.root);assert.equal(missing.hosting.local_preflight,'blocked');assert.equal(missing.hosting.engineering_verified,false);assert.match(missing.hosting.blockers.join(' '),/missing/);
 }finally{f.cleanup();}
});

test('status clean rebuild must match current source and the complete command sequence',()=>fixture(f=>{
 const report={status:'passed',source:{digest:inspectSourceTree(f.root).digest},steps:['npm ci --ignore-scripts --no-audit --no-fund','npm run verify:scaffold','npm run test:release-fixture'].map(command=>({command,exit_code:0})),finished_at:'2026-01-01T00:00:00Z'};
 mkdirSync(join(f.root,'docs/qa'),{recursive:true});f.json('docs/qa/public-rebuild.json',report);
 assert.equal(inspectStatus(f.root).clean_rebuild.status,'current');
 report.steps.pop();f.json('docs/qa/public-rebuild.json',report);assert.equal(inspectStatus(f.root).clean_rebuild.status,'stale-or-invalid');
 report.source.digest='old';f.json('docs/qa/public-rebuild.json',report);assert.equal(inspectStatus(f.root).clean_rebuild.status,'stale-or-invalid');
}));

function assertContentPreflightPreservesEngineering(f,gate,reason){
 // Only the child CLI's read-only content preflight runs. Dependencies are
 // shared through an excluded temporary link; no install or network is used.
 symlinkSync(join(ROOT,'node_modules'),join(f.root,'node_modules'),'dir');
 const record=readFileSync(join(f.root,'dist/verification.json')),web=outputDigest(f.root),hosting=readFileSync(join(f.root,'dist/hosting.json'));
 const result=spawnSync(process.execPath,[join(f.root,'build/verify.mjs'),gate],{cwd:f.root,encoding:'utf8',timeout:20000});
 assert.equal(result.status,1,result.error?.message||result.stderr);assert.match(result.stderr,reason);
 assert.equal(result.stdout,'');
 assert.deepEqual(readFileSync(join(f.root,'dist/verification.json')),record);
 assert.equal(outputDigest(f.root),web);assert.deepEqual(readFileSync(join(f.root,'dist/hosting.json')),hosting);
 assert.equal(inspectStatus(f.root).verification.status,'current');
}

for(const gate of ['release','production'])test(`rejected ${gate} content preflight preserves current scaffold and web bytes`,()=>draftFixture(f=>{
 assertContentPreflightPreservesEngineering(f,gate,/coverage|semantic/i);
 assert.equal(makePlan(f.root,{channel:'live'}).ready,true);
}));

for(const [name,change,reason]of [
 ['publication status',c=>c.publication_status='draft',/publication_status must be release-ready/i],
 ['public origin',c=>c.output.public_base_url=null,/PUBLIC_BASE_URL is unset/]
])test(`rejected production ${name} preflight preserves current scaffold and web bytes`,()=>fixture(f=>{
 const config=loadData(f.root).config;change(config);f.json('project.config.json',config);refresh(f);build(f.root);stamp(f,'scaffold');
 assert.deepEqual(releaseErrors(loadData(f.root)),[]);
 assertContentPreflightPreservesEngineering(f,'production',reason);
}));

test('source chipset labels remain intact while mistaken model expansion and mixed script fail',()=>{
 for(const text of ['iPhone 17 Pro (A19 Pro)','iPhone 16 Pro (A18 Pro)','完整測試工作負載'])assert.deepEqual(textQuality(text),[]);
 for(const text of ['iPhone 17 Pro (A19 iPhone 18 Pro)','iPhone 16 Pro (A18 iPhone 18 Pro)','測試工作负載','A19 Pro；Pro Max'])assert.ok(textQuality(text).length,text);
});

test('source-qualified family names preserve footnote scope without exempting adjacent shorthand',()=>{
 for(const text of ['配備最新韌體的相容 AirPods','免持使用 Siri AI 適用於所有 AirPods','Apple Watch Series 6 與後續及所有 Apple Watch Ultra','Duo 雙面 FaceTime'])assert.deepEqual(textQuality(text),[]);
 for(const text of ['相容 AirPods；AirPods 的續航','所有 AirPods；Pro Max 的容量','所有 Apple Watch Ultra；Ultra 的重量','Duo 雙面 FaceTime；Duo 的相機','相容 AirPods 输入'])assert.ok(textQuality(text).length,text);
});

test('public source scan rejects OAuth credentials while allowing placeholders',()=>{
 for(const token of ['ya29.'+'x'.repeat(40),'1/'+'/'+'x'.repeat(40),'eyJ'+'x'.repeat(30)+'.'+'x'.repeat(30)+'.'+'x'.repeat(30)])assert.equal(sensitiveText(JSON.stringify({value:token})),true);
 for(const safe of ['access_token: [REDACTED_SECRET]','refresh_token: null','firebase login --reauth'])assert.equal(sensitiveText(safe),false);
});

test('environment probes are read-only and return only safe fields',()=>{
 const c=structuredClone(loadData().config);Object.assign(c.deployment,{github_repository:'https://github.com/test-owner/event-repo',target_firebase_project:'test-project',target_firebase_site:'test-site'});c.output.public_base_url='https://test-site.web.app';
 const calls=[],hidden='SYNTHETIC_PRIVATE_AUTH_DATA';
 const run=(command,args)=>{
  calls.push([command,...args]);let body;
  if(args[0]==='--version')return {status:0,stdout:{node:'v24.16.0',git:'git version 2.54.0',gh:'gh version 2.95.0',firebase:'15.21.0'}[command]};
  if(command==='gh'&&args[0]==='api')body={login:'test-owner',token:hidden};
  else if(command==='gh')body={nameWithOwner:'test-owner/event-repo',visibility:'PRIVATE',isEmpty:true,viewerPermission:'ADMIN',tokens:{refresh_token:hidden}};
  else if(args[0]==='projects:list')body={status:'success',result:[{projectId:'test-project',state:'ACTIVE',access_token:hidden}]};
  else body={status:'success',result:{sites:[{name:'projects/test-project/sites/test-site',defaultUrl:'https://test-site.web.app',secret:hidden}]}};
  return {status:0,stdout:JSON.stringify(body),stderr:hidden};
 };
 const r=inspectEnvironment(c,{online:true},run);assert.equal(r.status,'connected-targets-verified');assert.equal(r.github.visibility,'PRIVATE');assert.equal(r.firebase.site_verified,true);assert.equal(r.deploy_permission_tested,false);assert.equal(JSON.stringify(r).includes(hidden),false);
 assert.deepEqual(calls.filter(x=>x[0]==='firebase').at(-1),['firebase','hosting:sites:list','--project','test-project','--json','--non-interactive']);
 assert.ok(calls.every(x=>['--version','api','repo','projects:list','hosting:sites:list'].includes(x[1])));
});
test('environment failure does not echo credentials or misreport authentication',()=>{
 const c=loadData().config,hidden='SYNTHETIC_CREDENTIAL_IN_ERROR';
 const r=inspectEnvironment(c,{online:true},()=>({status:1,stdout:JSON.stringify({error:{message:hidden}}),stderr:hidden}));
 assert.equal(r.status,'needs-attention');assert.equal(r.github.login,null);assert.equal(JSON.stringify(r).includes(hidden),false);assert.equal(r.firebase.site_verified,false);
});
test('local environment inspection never contacts accounts or uses target defaults',()=>{
 const c=structuredClone(loadData().config);c.deployment.target_firebase_project=null;const calls=[];
 const r=inspectEnvironment(c,{},(command,args)=>{calls.push(args);return {status:1};});
 assert.ok(calls.every(args=>args[0]==='--version'));assert.equal(r.github,null);assert.equal(r.firebase,null);assert.match(r.errors.join(' '),/unset/);
});
function prepared(){
 const f=makeFixture();
 // Copy only reviewed public files; keep synthetic facts, drafts and metadata.
 for(const p of publicFiles(ROOT))if(!p.startsWith('content/')&&!p.startsWith('sources/')&&p!=='project.config.json'){mkdirSync(join(f.root,p,'..'),{recursive:true});cpSync(join(ROOT,p),join(f.root,p));}
 for(const p of ['content/knowledge-base.md','sources/event-manifest.json'])writeFileSync(join(f.root,p),readFileSync(join(f.root,p),'utf8').replaceAll('FIXTURE_ONLY','隔離合成測試'));
 const c=loadData(f.root).config;c.publication_status='release-ready';c.output={profile:'preview',public_base_url:'https://synthetic-publication-fixture.web.app'};Object.assign(c.deployment,{target_firebase_project:'synthetic-project',target_firebase_site:'synthetic-site'});f.json('project.config.json',c);
 refresh(f);build(f.root);stamp(f,'release');return f;
}
function stamp(f,gate){writeVerification(f.root,gate,requiredChecks.map(command=>({command,exit_code:0})));}
function refresh(f){const d=loadData(f.root);f.json('sources/semantic-review.json',{...d.semantic,input_digest:d.digest});}
function fixture(fn){const f=prepared();try{return fn(f);}finally{f.cleanup();}}
const options=p=>({project:p.project,site:p.site,authorizeRemote:true,authorizeDeploy:true,confirm:confirmationFor(p)});
const resign=p=>{delete p.digest;p.digest=hash(JSON.stringify(p));return p;};

// This fixture intentionally retains incomplete coverage and incomplete review.
// Its one-operation authorization never changes the content's release state.
function draftPrepared(){
 const f=prepared(),d=loadData(f.root);
 d.config.publication_status='draft';f.json('project.config.json',d.config);
 d.coverage.segments[0].end_seconds=30;f.json('sources/coverage.json',d.coverage);
 f.json('sources/semantic-review.json',{...d.semantic,decision:'pending'});
 refresh(f);build(f.root);stamp(f,'scaffold');return f;
}
function draftFixture(fn){const f=draftPrepared();try{return fn(f);}finally{f.cleanup();}}
function draftAuthorization(f,overrides={}){
 const p=makePlan(f.root,{channel:'draft-review'}),now=Date.now();
 return {schema_version:1,id:'d'.repeat(32),reason:'Explicit synthetic authorization for one temporary draft preview only.',authorized_at:new Date(now-1000).toISOString(),expires_at:new Date(now+60*60*1000).toISOString(),project:p.project,site:p.site,channel:p.channel,profile:'preview',preview_ttl:'7d',input_digest:p.input_digest,source_tree_digest:p.source_tree_digest,artifact_digest:p.artifact.digest,...overrides};
}
const draftPlan=(f,a)=>makePlan(f.root,{channel:'draft-review',draftPreviewAuthorization:a});
const draftOptions=p=>({...options(p),draftPreviewAuthorization:structuredClone(p.draft_preview_authorization)});
function assertBlockedPlan(fn,re,name){
 let p;try{p=fn();}catch(e){assert.match(e.message,re,name);return;}
 assert.equal(p.ready,false,name||'unsafe plan was ready');assert.match(p.errors.join('\n'),re,name);
}

test('zh-TW and full-name checks catch real regressions without single-character false positives',()=>{
 for(const s of ['不换框架','視覺检查','记录資訊','不确认','核对','输入','對应','區塊内','软件','视频','iPhone Pro','Pro Max','Duo','Series','Ultra','AirPods','iPhone 18 iPhone 18 Pro Max'])assert.ok(textQuality(s).length,s);
 for(const s of ['公里、核准、台灣、系統','iPhone 18 Pro 與 iPhone 18 Pro Max','iPhone Duo、Apple Watch Series 12、Apple Watch Ultra 4、AirPods 5','A20 Pro、ProRes RAW、ProRAW、ProMotion','`SomeAPI.Pro`','https://www.apple.com/tw/iphone-duo/specs/',...exceptions.map(e=>e.text)])assert.deepEqual(textQuality(s),[],s);
 assert.ok(textQuality(exceptions[0].text+' 輸入软件').length); // Exact quote does not exempt adjacent prose.
});
test('generated metadata and accessibility text are checked',()=>fixture(f=>{
 let d=loadData(f.root),out=join(f.root,'dist/web'),p=join(out,'dev.html');
 writeFileSync(p,readFileSync(p,'utf8').replace('<main','<span aria-label="输入"></span><main'));assert.throws(()=>debug(out,d),/zh-TW/);
 build(f.root);writeFileSync(p,readFileSync(p,'utf8').replace('<main','<img alt="Pro Max"><main'));assert.throws(()=>debug(out,d),/Incomplete specific product/);
}));
test('deployment/output settings do not substitute for semantic approval or alter content digest',()=>fixture(f=>{
 let d=loadData(f.root),digest=d.digest;d.config.output.profile='production';d.config.output.public_base_url='https://changed-fixture.web.app';d.config.deployment.target_firebase_site='another-fixture';f.json('project.config.json',d.config);assert.equal(loadData(f.root).digest,digest);
 d.semantic.decision='pending';f.json('sources/semantic-review.json',d.semantic);assert.throws(()=>build(f.root),/semantic/);
}));
test('valid origins require explicit public HTTPS and exclude reference domains',()=>{
 for(const v of [null,'http://real-domain.org','https://localhost','https://example.com','https://a.invalid','https://127.0.0.1','https://apple-afm3-explainers.web.app','https://user:pass@real-domain.org','https://real-domain.org/path','https://real-domain.org?x=1'])assert.throws(()=>publicBase(v),undefined,String(v));
 assert.equal(publicBase('https://synthetic-publication-fixture.web.app'),'https://synthetic-publication-fixture.web.app/');
});
test('preview and approved production have distinct complete metadata and six self-canonical pages',()=>fixture(f=>{
 const out=join(f.root,'dist/web');assert.match(readFileSync(join(out,'robots.txt'),'utf8'),/Disallow: \//);assert.equal(existsSync(join(out,'sitemap.xml')),false);
 assert.match(readFileSync(join(out,'dev.html'),'utf8'),/noindex/);
 const r=build(f.root,{profile:'production'});assert.equal(debug(out,r.data).pages,6);
 const titles=new Set(),descriptions=new Set();for(const p of r.data.config.pages){const html=readFileSync(join(out,p.file),'utf8');assert.ok(html.includes(`rel="canonical" href="https://synthetic-publication-fixture.web.app/${p.file}"`));assert.doesNotMatch(html,/草稿|noindex|og:image|hreflang/);assert.match(html,/property="og:title"/);titles.add(html.match(/<title>(.*?)<\/title>/)[1]);descriptions.add(html.match(/name="description" content="(.*?)"/)[1]);}
 assert.equal(titles.size,6);assert.equal(descriptions.size,6);assert.equal((readFileSync(join(out,'sitemap.xml'),'utf8').match(/<loc>/g)||[]).length,6);assert.match(readFileSync(join(out,'404.html'),'utf8'),/noindex/);assert.equal(gitStamp(f.root).commit,null);
}));
test('missing public origin prevents production and preserves previous output',()=>fixture(f=>{
 const p=join(f.root,'dist/web/index.html'),before=readFileSync(p);let d=loadData(f.root);d.config.output.public_base_url=null;f.json('project.config.json',d.config);assert.throws(()=>build(f.root,{profile:'production'}),/PUBLIC_BASE_URL/);assert.deepEqual(readFileSync(p),before);
}));
test('Hosting profile keeps fixed HTML URLs, conservative cache and scoped CSP',()=>{
 for(const profile of ['preview','production']){const h=hostingConfig(profile).hosting;assert.equal(h.public,'dist/web');assert.equal(h.cleanUrls,false);assert.equal(h.rewrites,undefined);assert.equal(h.redirects,undefined);let headers=responseHeaders(profile,'dev.html');assert.equal(headers['Content-Security-Policy'],CSP);assert.doesNotMatch(CSP,/unsafe-inline|unsafe-eval/);assert.match(CSP,/youtube-nocookie/);assert.match(headers['Cache-Control'],/must-revalidate/);assert.equal(headers['X-Robots-Tag'],profile==='preview'?'noindex, nofollow':undefined);assert.match(responseHeaders(profile,'404.html')['X-Robots-Tag'],/noindex/);}
});
test('loopback HTTP serves real 404 and profile headers without SPA fallback',async()=>{
 const f=prepared();let server;try{for(const profile of ['preview','production']){build(f.root,{profile});const s=await serve(join(f.root,'dist/web'));server=s.server;let r=await fetch(s.url+'/dev.html');assert.equal(r.status,200);assert.equal(r.headers.get('x-robots-tag'),profile==='preview'?'noindex, nofollow':null);assert.equal(r.headers.get('content-security-policy'),CSP);r=await fetch(s.url+'/nonexistent/nested-page');assert.equal(r.status,404);assert.match(r.headers.get('x-robots-tag'),/noindex/);assert.match(await r.text(),/找不到頁面/);await new Promise(resolve=>server.close(resolve));server=null;}}finally{if(server)await new Promise(resolve=>server.close(resolve));f.cleanup();}
});
test('public export excludes private media, node_modules, generated QA and host credentials',()=>fixture(f=>{
 for(const p of ['research/.private/original.mp4','node_modules/private.txt','docs/qa/screenshot.png','.firebaserc','.env.local']){mkdirSync(join(f.root,p,'..'),{recursive:true});writeFileSync(join(f.root,p),'private sentinel');}
 let r=inspectSourceTree(f.root);assert.equal(r.git.git,'not initialized');assert.ok(r.entries.some(e=>e.path.startsWith('.github/')));assert.ok(!r.entries.some(e=>/research|node_modules|docs\/qa|\.env|\.firebaserc/.test(e.path)));
 const parent=mkdtempSync(join(tmpdir(),'apple-event-export-test-'));try{const out=join(parent,'public');exportPublic(out,f.root);assert.equal(existsSync(join(out,'research')),false);assert.ok(existsSync(join(out,'package-lock.json')));assert.throws(()=>exportPublic(out,f.root),/must not exist/);}finally{rmSync(parent,{recursive:true,force:true});}
}));
test('public candidates reject secrets, private paths, symlinks and misplaced source media',()=>fixture(f=>{
 const p=join(f.root,'docs/accidental.txt');for(const text of ['ghp_'+'A'.repeat(36),'/'+['Users','synthetic-owner','private'].join('/')+'/file']){writeFileSync(p,text);assert.throws(()=>inspectSourceTree(f.root),/Credential|Private absolute/);rmSync(p);}
 writeFileSync(join(f.root,'docs/raw.mp4'),'raw');assert.throws(()=>inspectSourceTree(f.root),/Private file/);rmSync(join(f.root,'docs/raw.mp4'));
 symlinkSync(join(f.root,'README.md'),p);assert.throws(()=>inspectSourceTree(f.root),/Symlink/);
}));
for(const profile of ['preview','production'])test(`positive ${profile} preview plan stages exact approved bytes without Auth changes using injected mock only`,()=>fixture(f=>{
 if(profile==='production'){build(f.root,{profile});stamp(f,'production');}
 const p=makePlan(f.root,{channel:'review-one'});assert.equal(p.ready,true,p.errors.join('\n'));let called=0;
 const info=JSON.parse(readFileSync(join(f.root,'dist/web/build-info.json')));assert.equal(p.version,info.version);assert.deepEqual(p.source_revision,info.source_revision);assert.deepEqual(p.source_revision,{commit:null,dirty:null});
 const r=executePlan(p,options(p),f.root,(command,args,opts)=>{called++;assert.equal(command,'firebase');assert.deepEqual(args,['hosting:channel:deploy','review-one','--expires','7d','--no-authorized-domains','--project','synthetic-project','--config','firebase.json','--non-interactive']);assert.equal(opts.shell,false);assert.deepEqual(JSON.parse(readFileSync(join(opts.cwd,'firebase.json'))),p.hosting);for(const e of p.artifact.entries)assert.equal(hash(readFileSync(join(opts.cwd,'web',e.path))),e.sha256);return {status:0};});
 assert.equal(called,1);assert.deepEqual(r,{status:'cli-succeeded',live_verified:false});assert.throws(()=>executePlan(p,options(p),f.root,()=>{throw Error('must not call');}),/already consumed/);
}));
test('live requires a separate production plan and explicit confirmation',()=>fixture(f=>{
 assert.equal(makePlan(f.root,{channel:'live'}).ready,false);build(f.root,{profile:'production'});stamp(f,'production');const p=makePlan(f.root,{channel:'live'});assert.equal(p.ready,true,p.errors.join('\n'));assert.deepEqual(firebaseArgs(p),['deploy','--only','hosting','--project','synthetic-project','--config','firebase.json','--non-interactive']);
 let called=0;executePlan(p,options(p),f.root,(command,args)=>{called++;assert.equal(command,'firebase');assert.deepEqual(args,['deploy','--only','hosting','--project','synthetic-project','--config','firebase.json','--non-interactive']);return {status:0};});assert.equal(called,1);
}));
for(const [name,change,re]of [
 ['missing permission',(p,o)=>delete o.authorizeDeploy,/not authorized/],
 ['wrong project',(p,o)=>o.project='wrong-project',/mismatch/],
 ['wrong site',(p,o)=>o.site='wrong-site',/mismatch/],
 ['wrong confirmation',(p,o)=>o.confirm='no',/confirmation/],
 ['expired plan',(p,o)=>{p.expires_at='2020-01-01T00:00:00Z';resign(p);o.confirm=confirmationFor(p);},/expired/],
 ['altered plan',(p)=>p.channel='changed-channel',/altered/],
 ['forged version',(p,o)=>{p.version='99.0.0';resign(p);o.confirm=confirmationFor(p);},/version/],
 ['forged source revision',(p,o)=>{p.source_revision={commit:'a'.repeat(40),dirty:false};resign(p);o.confirm=confirmationFor(p);},/source revision/],
 ['forged artifact entries',(p,o)=>{p.artifact.entries[0].path='../escape';resign(p);o.confirm=confirmationFor(p);},/Artifact changed|Verification is stale/],
 ['changed artifact',(p,o,f)=>writeFileSync(join(f.root,'dist/web/assets/base.css'),'changed'),/Artifact changed|Verification is stale/],
 ['pending content',(p,o,f)=>f.json('sources/semantic-review.json',{...loadData(f.root).semantic,decision:'pending'}),/semantic|Source tree changed|Verification is stale/],
 ['changed source tree',(p,o,f)=>writeFileSync(join(f.root,'README.md'),'Changed public documentation'),/Source tree changed|Verification is stale/]
])test(`deployment refuses ${name} before invoking a CLI`,()=>fixture(f=>{let p=makePlan(f.root,{channel:'review-one'}),o=options(p),called=0;change(p,o,f);assert.throws(()=>executePlan(p,o,f.root,()=>{called++;return {status:0};}),re);assert.equal(called,0);}));
test('default, missing and protected Firebase targets block local plans',()=>fixture(f=>{
 for(const fields of [{target_firebase_project:null},{target_firebase_site:null},{target_firebase_project:'apple-afm3-explainers'},{target_firebase_site:'apple-afm3-explainers'}]){let d={config:JSON.parse(readFileSync(join(f.root,'project.config.json')))};Object.assign(d.config.deployment,{target_firebase_project:'synthetic-project',target_firebase_site:'synthetic-site'},fields);f.json('project.config.json',d.config);assert.throws(()=>{let p=makePlan(f.root,{channel:'review-one'});if(!p.ready)throw Error(p.errors.join('\n'));},/unset|AFM3|Original Firebase/);}
}));
test('failed or uncertain execution consumes confirmation and never auto-retries',()=>fixture(f=>{
 const p=makePlan(f.root,{channel:'review-one'});let called=0;assert.throws(()=>executePlan(p,options(p),f.root,()=>{called++;return {status:null};}),/uncertain/);assert.throws(()=>executePlan(p,options(p),f.root,()=>{called++;return {status:0};}),/already consumed/);assert.equal(called,1);
}));

test('preflight rejects missing or scaffold-only verification of the deployment artifact',()=>fixture(f=>{
 rmSync(join(f.root,'dist/verification.json'));assert.ok(makePlan(f.root,{channel:'review-one'}).errors.some(e=>e.includes('record is missing')));
 stamp(f,'scaffold');assert.ok(makePlan(f.root,{channel:'review-one'}).errors.some(e=>e.includes('verification')));
}));

test('public documentation cannot link to intentionally excluded local QA',()=>fixture(f=>{
 writeFileSync(join(f.root,'docs/broken.md'),'[Local evidence](qa/private-result.png)');assert.throws(()=>inspectSourceTree(f.root),/Missing public documentation link/);
}));

test('execution refuses a channel option which conflicts with the confirmed plan',()=>fixture(f=>{
 const p=makePlan(f.root,{channel:'review-one'});let called=0;
 assert.throws(()=>executePlan(p,{...options(p),channel:'live'},f.root,()=>{called++;return {status:0};}),/channel mismatch/);assert.equal(called,0);
}));
test('historical public documents retain the same full-name gate',()=>fixture(f=>{
 writeFileSync(join(f.root,'docs/history/name-regression.md'),'# 比較\n\nPro Max 的說明');assert.throws(()=>inspectSourceTree(f.root),/Incomplete specific product name/);
}));
test('public source allowlist excludes extensionless keys and original HTML snapshots',()=>fixture(f=>{
 for(const name of ['id_ed25519','source-snapshot.html','account.p12']){const p=join(f.root,'docs',name);writeFileSync(p,'test-only sentinel');assert.throws(()=>inspectSourceTree(f.root),/Unexpected public source file type/);rmSync(p);}
}));

test('one-operation draft preview keeps content blockers and stages only the tested noindex artifact',()=>draftFixture(f=>{
 const a=draftAuthorization(f),p=draftPlan(f,a),before=loadData(f.root);
 assert.equal(p.ready,true,p.errors.join('\n'));assert.equal(p.profile,'preview');assert.equal(p.channel,'draft-review');
 assert.deepEqual(p.draft_preview_authorization,a);
 for(const re of [/coverage/i,/Promised coverage/i,/semantic/i])assert.match(p.content_blockers.join('\n'),re);
 assert.match(p.hosting.hosting.headers[0].headers.find(h=>h.key==='X-Robots-Tag').value,/noindex/);
 assert.equal(p.hosting.hosting.headers[0].headers.find(h=>h.key==='Content-Security-Policy').value,CSP);
 let called=0;
 const result=executePlan(p,draftOptions(p),f.root,(command,args,opts)=>{
  called++;assert.equal(command,'firebase');assert.deepEqual(args,['hosting:channel:deploy','draft-review','--expires','7d','--no-authorized-domains','--project','synthetic-project','--config','firebase.json','--non-interactive']);assert.equal(opts.shell,false);
  assert.deepEqual(JSON.parse(readFileSync(join(opts.cwd,'firebase.json'))),p.hosting);
  assert.match(readFileSync(join(opts.cwd,'web/index.html'),'utf8'),/noindex/);
  for(const e of p.artifact.entries)assert.equal(hash(readFileSync(join(opts.cwd,'web',e.path))),e.sha256);
  return {status:0};
 });
 assert.equal(called,1);assert.deepEqual(result,{status:'cli-succeeded',live_verified:false});
 const after=loadData(f.root);assert.equal(after.digest,before.digest);assert.equal(after.config.publication_status,'draft');assert.equal(after.semantic.decision,'pending');assert.deepEqual(after.coverage.required_scope,before.coverage.required_scope);
 assert.ok(releaseErrors(after).length);assert.throws(()=>checkVerification(f.root,'preview'),/release verification/);
}));

test('optional legacy preview authority still forbids live and cannot certify production',()=>draftFixture(f=>{
 const a=draftAuthorization(f);
 assert.equal(makePlan(f.root,{channel:'draft-review'}).ready,true);
 assertBlockedPlan(()=>makePlan(f.root,{channel:'live',draftPreviewAuthorization:{...a,channel:'live'}}),/draft|preview|live/i);
 assert.throws(()=>build(f.root,{profile:'production'}),/coverage|semantic|release/i);
 const infoPath=join(f.root,'dist/web/build-info.json'),info=JSON.parse(readFileSync(infoPath));
 f.json('dist/web/build-info.json',{...info,profile:'production'});
 assertBlockedPlan(()=>draftPlan(f,a),/preview|production|artifact|verification/i);
}));

test('draft preview authorizations reject invalid identity, timing, targets and all three bound digests',()=>draftFixture(f=>{
 const a=draftAuthorization(f),later=n=>new Date(Date.now()+n).toISOString();
 for(const [name,patch]of [
  ['unknown schema',{schema_version:2}],['invalid id',{id:'../not-an-id'}],['empty reason',{reason:' '}],
  ['invalid issue time',{authorized_at:'not-an-ISO-time'}],['non-ISO issue time',{authorized_at:new Date(Date.now()-1000).toUTCString()}],['numeric issue time',{authorized_at:Date.now()-1000}],['offset issue time',{authorized_at:a.authorized_at.replace('Z','+00:00')}],['offset expiry',{expires_at:a.expires_at.replace('Z','+00:00')}],['future issue time',{authorized_at:later(60*60*1000)}],
  ['expired',{expires_at:'2020-01-01T00:00:00Z'}],['over 24 hours',{expires_at:later(25*60*60*1000)}],
  ['wrong project',{project:'another-project'}],['wrong site',{site:'another-site'}],['wrong channel',{channel:'another-review'}],['production profile',{profile:'production'}],['wrong preview lifetime',{preview_ttl:'30d'}],
  ['wrong input',{input_digest:'1'.repeat(64)}],['wrong source tree',{source_tree_digest:'2'.repeat(64)}],['wrong artifact',{artifact_digest:'3'.repeat(64)}],
  ['unknown authorization field',{allow_live:true}]
 ])assertBlockedPlan(()=>draftPlan(f,{...a,...patch}),/authorization|draft|bound|digest|expired|timing|time|schema|field|target|channel/i,name);
 const missing=structuredClone(a);delete missing.reason;assertBlockedPlan(()=>draftPlan(f,missing),/authorization fields/i,'missing required authorization field');
}));

test('draft exception cannot replace a stale semantic record or accept an approved/release-ready state',()=>{
 for(const patch of [{decision:'approved'},{input_digest:'4'.repeat(64)}])draftFixture(f=>{
  f.json('sources/semantic-review.json',{...loadData(f.root).semantic,...patch});build(f.root);stamp(f,'scaffold');
  assertBlockedPlan(()=>draftPlan(f,draftAuthorization(f)),/draft|pending|semantic/i);
 });
 fixture(f=>{stamp(f,'scaffold');assertBlockedPlan(()=>draftPlan(f,draftAuthorization(f)),/draft|pending/i);});
});

for(const [name,change,re]of [
 ['missing operation authorization',(p,o)=>delete o.draftPreviewAuthorization,/authorization/i],
 ['different operation authorization',(p,o)=>o.draftPreviewAuthorization.reason+=' changed',/authorization/i],
 ['missing remote flag',(p,o)=>o.authorizeRemote=false,/not authorized/i],
 ['missing deploy flag',(p,o)=>o.authorizeDeploy=false,/not authorized/i],
 ['wrong confirmation',(p,o)=>o.confirm='not-the-confirmed-plan',/confirmation/i],
 ['live channel option',(p,o)=>o.channel='live',/channel/i],
 ['expired authorization',(p,o)=>{p.draft_preview_authorization.expires_at='2020-01-01T00:00:00Z';resign(p);o.confirm=confirmationFor(p);o.draftPreviewAuthorization=structuredClone(p.draft_preview_authorization);},/authorization|expired/i],
 ['resigned extended plan lifetime',(p,o)=>{p.expires_at=new Date(Date.parse(p.created_at)+2*60*60*1000).toISOString();resign(p);o.confirm=confirmationFor(p);},/time|window|expiry|expiration|expired|30/i],
 ['resigned removal of content blockers',(p,o)=>{p.content_blockers=[];resign(p);o.confirm=confirmationFor(p);},/blocker/i],
 ['changed artifact',(p,o,f)=>writeFileSync(join(f.root,'dist/web/assets/base.css'),'changed'),/artifact|verification/i],
 ['changed public source',(p,o,f)=>writeFileSync(join(f.root,'README.md'),'Changed public documentation'),/source|verification|authorization/i],
 ['forged relaxed Hosting headers',(p,o)=>{p.hosting.hosting.headers[0].headers=p.hosting.hosting.headers[0].headers.filter(h=>h.key!=='X-Robots-Tag');resign(p);o.confirm=confirmationFor(p);},/Hosting|artifact|authorization/i]
])test(`draft preview refuses ${name} before invoking a CLI`,()=>draftFixture(f=>{
 const p=draftPlan(f,draftAuthorization(f));assert.equal(p.ready,true,p.errors.join('\n'));const o=draftOptions(p);let called=0;change(p,o,f);
 assert.throws(()=>executePlan(p,o,f.root,()=>{called++;return {status:0};}),re);assert.equal(called,0);
}));

test('draft preview still requires a complete current scaffold command and artifact record',()=>draftFixture(f=>{
 const path=join(f.root,'dist/verification.json'),valid=JSON.parse(readFileSync(path)),a=draftAuthorization(f);
 for(const patch of [{commands:valid.commands.slice(0,-1)},{commands:valid.commands.map((c,i)=>i?c:{...c,exit_code:1})},{gate:'release'},{input_digest:'1'.repeat(64)},{source_tree_digest:'2'.repeat(64)},{output_digest:'3'.repeat(64)}]){
  f.json('dist/verification.json',{...valid,...patch});assertBlockedPlan(()=>draftPlan(f,a),/verification|command|record/i);
 }
 rmSync(path);assertBlockedPlan(()=>draftPlan(f,a),/verification|record/i);
}));

for(const outcome of ['success','failure','uncertain','throw'])test(`draft preview authorization is consumed after ${outcome}, including across a new plan nonce`,()=>draftFixture(f=>{
 const a=draftAuthorization(f),p=draftPlan(f,a);assert.equal(p.ready,true,p.errors.join('\n'));let called=0;
 const run=()=>{called++;if(outcome==='throw')throw Error('Synthetic transport interruption');return {status:outcome==='success'?0:outcome==='failure'?1:null};};
 if(outcome==='success')executePlan(p,draftOptions(p),f.root,run);
 else assert.throws(()=>executePlan(p,draftOptions(p),f.root,run),/uncertain|Synthetic transport interruption/);
 assert.equal(called,1);
 // A newly generated nonce cannot evade the separate authorization receipt.
 const next=draftPlan(f,a);assert.notEqual(next.nonce,p.nonce);
 assert.throws(()=>executePlan(next,draftOptions(next),f.root,()=>{called++;return {status:0};}),/consumed|blocked|authorization/i);
 assert.equal(called,1);
}));

// The real target names below are only allowlist inputs in isolated synthetic
// fixtures. Every execution supplies a mock; no Firebase process is spawned.
function draftLivePrepared(){
 const f=draftPrepared(),c=loadData(f.root).config;
 Object.assign(c.deployment,{target_firebase_project:'apple-event-explainers',target_firebase_site:'apple-event-explainers'});
 c.output.public_base_url='https://apple-event-explainers.web.app';f.json('project.config.json',c);
 build(f.root);stamp(f,'scaffold');return f;
}
function draftLiveFixture(fn){const f=draftLivePrepared();try{return fn(f);}finally{f.cleanup();}}
function draftLiveAuthorization(f,overrides={}){
 const p=makePlan(f.root,{channel:'live'}),now=Date.now();
 return {schema_version:1,kind:'draft-live',id:'e'.repeat(32),reason:'Synthetic one-operation draft Hosting authorization; content release remains blocked.',authorized_at:new Date(now-1000).toISOString(),expires_at:new Date(now+60*60*1000).toISOString(),project:p.project,site:p.site,channel:'live',profile:'preview',hosting_lifetime:'until-replaced-or-removed',input_digest:p.input_digest,source_tree_digest:p.source_tree_digest,artifact_digest:p.artifact.digest,...overrides};
}
const draftLivePlan=(f,a)=>makePlan(f.root,{channel:'live',draftLiveAuthorization:a});
const draftLiveOptions=p=>({...options(p),draftLiveAuthorization:structuredClone(p.draft_live_authorization)});

test('one-operation draft live stages the verified noindex bytes without approving content',()=>draftLiveFixture(f=>{
 const a=draftLiveAuthorization(f),p=draftLivePlan(f,a),before=loadData(f.root);
 assert.equal(p.ready,true,p.errors.join('\n'));assert.equal(p.channel,'live');assert.equal(p.profile,'preview');
 assert.equal(p.draft_preview_authorization,null);assert.deepEqual(p.draft_live_authorization,a);
 assert.equal(a.hosting_lifetime,'until-replaced-or-removed');
 assert.deepEqual(p.content_blockers,[...releaseErrors(before),'Content is not release-ready']);
 let called=0;const result=executePlan(p,draftLiveOptions(p),f.root,(command,args,opts)=>{
  called++;assert.equal(command,'firebase');
  assert.deepEqual(args,['deploy','--only','hosting','--project','apple-event-explainers','--config','firebase.json','--non-interactive']);
  assert.equal(opts.shell,false);assert.deepEqual(JSON.parse(readFileSync(join(opts.cwd,'firebase.json'))),p.hosting);
  assert.equal(p.hosting.hosting.site,'apple-event-explainers');
  assert.equal(p.hosting.hosting.headers[0].headers.find(h=>h.key==='X-Robots-Tag').value,'noindex, nofollow');
  for(const e of p.artifact.entries)assert.equal(hash(readFileSync(join(opts.cwd,'web',e.path))),e.sha256);
  for(const page of before.config.pages)assert.match(readFileSync(join(opts.cwd,'web',page.file),'utf8'),/noindex/);
  assert.match(readFileSync(join(opts.cwd,'web/index.html'),'utf8'),/草稿/);
  assert.match(readFileSync(join(opts.cwd,'web/robots.txt'),'utf8'),/Disallow: \//);
  assert.equal(existsSync(join(opts.cwd,'web/sitemap.xml')),false);
  assert.equal(existsSync(join(opts.cwd,'research')),false);
  return {status:0};
 });
 assert.equal(called,1);assert.deepEqual(result,{status:'cli-succeeded',live_verified:false});
 const after=loadData(f.root);assert.equal(after.digest,before.digest);assert.equal(after.config.publication_status,'draft');
 assert.deepEqual(after.semantic,before.semantic);assert.deepEqual(after.coverage,before.coverage);
 assert.equal(after.config.deployment.allow_remote_write,false);assert.equal(after.config.deployment.allow_deploy,false);
 assert.ok(releaseErrors(after).length);assert.equal(inspectStatus(f.root).release.verified,false);assert.equal(inspectStatus(f.root).production.verified,false);
 assert.throws(()=>checkVerification(f.root,'preview'),/release verification/);
 assert.throws(()=>build(f.root,{profile:'production'}),/coverage|semantic|release/i);
}));

test('optional legacy live authority retains its dedicated target and cannot replace preview authority',()=>draftLiveFixture(f=>{
 const a=draftLiveAuthorization(f),preview=draftAuthorization(f);
 assert.equal(makePlan(f.root,{channel:'live'}).ready,true);
 assertBlockedPlan(()=>makePlan(f.root,{channel:'live',draftPreviewAuthorization:{...preview,channel:'live'}}),/live|preview/i);
 assertBlockedPlan(()=>makePlan(f.root,{channel:'draft-review',draftLiveAuthorization:{...a,channel:'draft-review'}}),/live|channel/i);
 assertBlockedPlan(()=>makePlan(f.root,{channel:'live',draftPreviewAuthorization:preview,draftLiveAuthorization:a}),/mutually exclusive/i);
 assertBlockedPlan(()=>draftLivePlan(f,preview),/authorization fields/i);
 assertBlockedPlan(()=>makePlan(f.root,{channel:'draft-review',draftPreviewAuthorization:a}),/authorization fields/i);
 const original=loadData(f.root).config;
 for(const key of ['target_firebase_project','target_firebase_site']){
  const c=structuredClone(original);c.deployment[key]='another-project';f.json('project.config.json',c);build(f.root);stamp(f,'scaffold');
  assertBlockedPlan(()=>draftLivePlan(f,draftLiveAuthorization(f)),/dedicated|apple-event-explainers/i);
 }
}));

test('draft live rejects malformed authority, unexpected fields, time windows and digest substitutions',()=>draftLiveFixture(f=>{
 const a=draftLiveAuthorization(f),later=n=>new Date(Date.now()+n).toISOString();
 assert.equal(draftLivePlan(f,null).ready,true);
 for(const value of [false,true,0,'',[],[a]])assertBlockedPlan(()=>draftLivePlan(f,value),/authorization|coverage|live/i);
 for(const [name,patch]of [
  ['schema',{schema_version:2}],['kind',{kind:'draft-preview'}],['missing identity',{id:null}],['array identity',{id:[a.id]}],['path identity',{id:'../unsafe'}],['non-string reason',{reason:42}],['empty reason',{reason:' '}],
  ['invalid issue',{authorized_at:'invalid'}],['future issue',{authorized_at:later(60000)}],['offset issue',{authorized_at:a.authorized_at.replace('Z','+00:00')}],['expired',{expires_at:'2020-01-01T00:00:00Z'}],['over 24 hours',{expires_at:later(25*60*60*1000)}],['reverse times',{expires_at:a.authorized_at}],
  ['wrong project',{project:'another-project'}],['wrong site',{site:'another-site'}],['wrong channel',{channel:'review'}],['wrong profile',{profile:'production'}],['temporary hosting claim',{hosting_lifetime:'7d'}],
  ['input digest',{input_digest:'1'.repeat(64)}],['source digest',{source_tree_digest:'2'.repeat(64)}],['artifact digest',{artifact_digest:'3'.repeat(64)}],['extra field',{allow_live:true}],['preview ttl',{preview_ttl:'7d'}]
 ])assertBlockedPlan(()=>draftLivePlan(f,{...a,...patch}),/authorization|draft|digest|expired|time|persistent/i,name);
 for(const key of Object.keys(a)){const missing={...a};delete missing[key];assertBlockedPlan(()=>draftLivePlan(f,missing),/authorization fields/i,key);}
}));

test('draft live cannot replace pending semantic review or incomplete scaffold verification',()=>draftLiveFixture(f=>{
 const a=draftLiveAuthorization(f),semantic=loadData(f.root).semantic;
 for(const patch of [{decision:'approved'},{input_digest:'4'.repeat(64)}]){
  f.json('sources/semantic-review.json',{...semantic,...patch});build(f.root);stamp(f,'scaffold');
  assertBlockedPlan(()=>draftLivePlan(f,draftLiveAuthorization(f)),/draft|pending|semantic/i);
 }
 f.json('sources/semantic-review.json',semantic);build(f.root);stamp(f,'scaffold');
 const path=join(f.root,'dist/verification.json'),valid=JSON.parse(readFileSync(path)),current=draftLiveAuthorization(f);
 for(const patch of [{commands:valid.commands.slice(0,-1)},{commands:valid.commands.map((c,i)=>i?c:{...c,exit_code:1})},{gate:'release'},{profile:'production'},{input_digest:'1'.repeat(64)},{source_tree_digest:'2'.repeat(64)},{output_digest:'3'.repeat(64)}]){
  f.json('dist/verification.json',{...valid,...patch});assertBlockedPlan(()=>draftLivePlan(f,current),/verification|command|record/i);
 }
 rmSync(path);assertBlockedPlan(()=>draftLivePlan(f,a),/verification|record/i);
}));

for(const [name,change,re]of [
 ['missing authority',(p,o)=>delete o.draftLiveAuthorization,/authorization/i],
 ['changed authority',(p,o)=>o.draftLiveAuthorization.reason+=' changed',/authorization/i],
 ['second authority in options',(p,o,f)=>o.draftPreviewAuthorization=draftAuthorization(f),/mutually exclusive/i],
 ['second authority in plan',(p,o,f)=>{p.draft_preview_authorization=draftAuthorization(f);resign(p);o.confirm=confirmationFor(p);o.draftPreviewAuthorization=p.draft_preview_authorization;},/mutually exclusive/i],
 ['preview authority substituted',(p,o,f)=>{p.draft_live_authorization=null;p.draft_preview_authorization={...draftAuthorization(f),channel:'live'};resign(p);o.confirm=confirmationFor(p);delete o.draftLiveAuthorization;o.draftPreviewAuthorization=p.draft_preview_authorization;},/live|preview/i],
 ['missing remote flag',(p,o)=>o.authorizeRemote=false,/not authorized/i],
 ['missing deploy flag',(p,o)=>o.authorizeDeploy=false,/not authorized/i],
 ['wrong confirmation',(p,o)=>o.confirm='invalid',/confirmation/i],
 ['wrong target option',(p,o)=>o.site='another-site',/mismatch/i],
 ['wrong channel option',(p,o)=>o.channel='draft-review',/channel/i],
 ['resigned channel change',(p,o)=>{p.channel='draft-review';p.draft_live_authorization.channel='draft-review';resign(p);o.confirm=confirmationFor(p);o.draftLiveAuthorization=structuredClone(p.draft_live_authorization);},/live|channel/i],
 ['resigned profile change',(p,o)=>{p.profile='production';resign(p);o.confirm=confirmationFor(p);},/preview|profile|production|verification/i],
 ['resigned extended lifetime',(p,o)=>{p.expires_at=new Date(Date.parse(p.created_at)+31*60*1000).toISOString();resign(p);o.confirm=confirmationFor(p);},/time window/i],
 ['resigned future issue',(p,o)=>{p.created_at=new Date(Date.now()+60000).toISOString();resign(p);o.confirm=confirmationFor(p);},/time window/i],
 ['expired authority',(p,o)=>{p.draft_live_authorization.expires_at='2020-01-01T00:00:00Z';resign(p);o.confirm=confirmationFor(p);o.draftLiveAuthorization=structuredClone(p.draft_live_authorization);},/expired|authorization/i],
 ['omitted coverage limitation',(p,o)=>{p.content_blockers=p.content_blockers.filter(x=>!/Promised coverage/.test(x));resign(p);o.confirm=confirmationFor(p);},/blocker/i],
 ['removed source coverage',(p,o,f)=>{const d=loadData(f.root);d.coverage.required_scope=[];f.json('sources/coverage.json',d.coverage);},/changed|stale|digest|blocker/i],
 ['reduced required scope',(p,o,f)=>{const c=loadData(f.root).coverage;c.required_scope[0].end_seconds=30;f.json('sources/coverage.json',c);},/changed|stale|digest|blocker/i],
 ['forged version',(p,o)=>{p.version='99.0.0';resign(p);o.confirm=confirmationFor(p);},/version/i],
 ['forged source revision',(p,o)=>{p.source_revision={commit:'a'.repeat(40),dirty:false};resign(p);o.confirm=confirmationFor(p);},/source revision/i],
 ['changed artifact',(p,o,f)=>writeFileSync(join(f.root,'dist/web/assets/base.css'),'changed'),/artifact|verification/i],
 ['changed public source',(p,o,f)=>writeFileSync(join(f.root,'README.md'),'Changed source'),/source|verification/i],
 ['removed noindex header',(p,o)=>{p.hosting.hosting.headers[0].headers=p.hosting.hosting.headers[0].headers.filter(h=>h.key!=='X-Robots-Tag');resign(p);o.confirm=confirmationFor(p);},/Hosting|artifact|authorization/i]
])test(`draft live refuses ${name} before invoking a CLI`,()=>draftLiveFixture(f=>{
 const p=draftLivePlan(f,draftLiveAuthorization(f));assert.equal(p.ready,true,p.errors.join('\n'));const o=draftLiveOptions(p);let called=0;change(p,o,f);
 assert.throws(()=>executePlan(p,o,f.root,()=>{called++;return {status:0};}),re);assert.equal(called,0);
}));

for(const outcome of ['success','failure','uncertain','throw'])test(`draft live consumes authorization before a ${outcome} result and refuses a new nonce`,()=>draftLiveFixture(f=>{
 const a=draftLiveAuthorization(f),p=draftLivePlan(f,a),receipt=join(f.root,'dist/deploy-receipts',`draft-live-${a.id}.json`);let called=0;
 const run=()=>{called++;assert.equal(JSON.parse(readFileSync(receipt)).status,'attempted');assert.equal(JSON.parse(readFileSync(join(f.root,'dist/deploy-receipts',`draft-${a.id}.json`))).status,'attempted');assert.equal(JSON.parse(readFileSync(join(f.root,'dist/deploy-receipts',p.nonce+'.json'))).status,'attempted');if(outcome==='throw')throw Error('Synthetic transport interruption');return {status:outcome==='success'?0:outcome==='failure'?1:null};};
 if(outcome==='success')executePlan(p,draftLiveOptions(p),f.root,run);
 else assert.throws(()=>executePlan(p,draftLiveOptions(p),f.root,run),/uncertain|Synthetic transport interruption/);
 assert.equal(called,1);const saved=JSON.parse(readFileSync(receipt));assert.equal(saved.authorization_id,a.id);assert.equal(saved.plan_digest,p.digest);assert.equal(saved.channel,'live');assert.equal(saved.artifact_digest,p.artifact.digest);
 assert.equal(saved.status,outcome==='success'?'cli-succeeded':outcome==='throw'?'attempted':'failed-or-uncertain');
 const next=draftLivePlan(f,a);assert.notEqual(next.nonce,p.nonce);assert.equal(next.ready,false);
 assert.throws(()=>executePlan(next,draftLiveOptions(next),f.root,()=>{called++;return {status:0};}),/consumed|blocked/i);assert.equal(called,1);
}));

test('consumed draft authorization IDs cannot cross between preview and live receipt namespaces',()=>draftLiveFixture(f=>{
 const a=draftLiveAuthorization(f),preview=draftAuthorization(f,{id:a.id});
 mkdirSync(join(f.root,'dist/deploy-receipts'),{recursive:true});
 const historical=join(f.root,'dist/deploy-receipts',`draft-${a.id}.json`);writeFileSync(historical,JSON.stringify({status:'attempted'}));
 assertBlockedPlan(()=>draftLivePlan(f,a),/consumed/i);rmSync(historical);
 writeFileSync(join(f.root,'dist/deploy-receipts',`draft-live-${a.id}.json`),JSON.stringify({status:'attempted'}));
 assertBlockedPlan(()=>draftPlan(f,preview),/consumed/i);
}));

for(const channel of ['review-normal','live'])test(`normal draft Hosting on ${channel} needs scaffold and operation confirmation, not a content exception`,()=>draftFixture(f=>{
 const before=loadData(f.root),p=makePlan(f.root,{channel});
 assert.equal(p.ready,true,p.errors.join('\n'));assert.equal(p.profile,'preview');assert.equal(p.verification_gate,'scaffold');
 assert.equal(p.draft_preview_authorization,null);assert.equal(p.draft_live_authorization,null);
 assert.deepEqual(p.content_blockers,[...releaseErrors(before),'Content is not release-ready']);
 let called=0;const result=executePlan(p,options(p),f.root,(command,args,opts)=>{
  called++;assert.equal(command,'firebase');
  const specific=channel==='live'?['deploy','--only','hosting']:['hosting:channel:deploy',channel,'--expires','7d','--no-authorized-domains'];
  assert.deepEqual(args,[...specific,'--project','synthetic-project','--config','firebase.json','--non-interactive']);
  assert.equal(opts.shell,false);assert.equal(p.hosting.hosting.site,'synthetic-site');
  assert.equal(p.hosting.hosting.headers[0].headers.find(h=>h.key==='X-Robots-Tag').value,'noindex, nofollow');
  for(const e of p.artifact.entries)assert.equal(hash(readFileSync(join(opts.cwd,'web',e.path))),e.sha256);
  for(const page of before.config.pages)assert.match(readFileSync(join(opts.cwd,'web',page.file),'utf8'),/noindex/);
  assert.match(readFileSync(join(opts.cwd,'web/index.html'),'utf8'),/草稿/);
  assert.match(readFileSync(join(opts.cwd,'web/robots.txt'),'utf8'),/Disallow: \//);
  assert.equal(existsSync(join(opts.cwd,'web/sitemap.xml')),false);assert.equal(existsSync(join(opts.cwd,'research')),false);
  return {status:0};
 });
 assert.equal(called,1);assert.deepEqual(result,{status:'cli-succeeded',live_verified:false});
 const after=loadData(f.root);assert.equal(after.digest,before.digest);assert.deepEqual(after.semantic,before.semantic);assert.deepEqual(after.coverage,before.coverage);
 assert.equal(after.config.deployment.allow_remote_write,false);assert.equal(after.config.deployment.allow_deploy,false);
 assert.ok(releaseErrors(after).length);assert.equal(inspectStatus(f.root).release.verified,false);assert.equal(inspectStatus(f.root).production.verified,false);
 assert.throws(()=>build(f.root,{profile:'production'}),/coverage|semantic|release/i);
}));

test('normal draft Hosting preserves valid review decisions and never enables permanent write flags',()=>draftFixture(f=>{
 const original=loadData(f.root),preflight=hostingPreflight(original,'preview');
 assert.equal(preflight.draft,true);assert.equal(preflight.verification_gate,'scaffold');assert.deepEqual(preflight.errors,[]);assert.ok(preflight.content_blockers.length);
 for(const key of ['allow_remote_write','allow_deploy']){const d=structuredClone(original);d.config.deployment[key]=true;assert.match(hostingPreflight(d,'preview').errors.join('\n'),/flags.*false/i);}
 f.json('sources/semantic-review.json',{...original.semantic,decision:'approved'});build(f.root);stamp(f,'scaffold');
 const reviewed=loadData(f.root),approvedPlan=makePlan(f.root,{channel:'live'});
 assert.equal(approvedPlan.ready,true,approvedPlan.errors.join('\n'));assert.equal(approvedPlan.verification_gate,'scaffold');
 assert.equal(reviewed.semantic.decision,'approved');assert.equal(reviewed.semantic.input_digest,reviewed.digest);
 let called=0;executePlan(approvedPlan,options(approvedPlan),f.root,()=>{called++;return {status:0};});assert.equal(called,1);
 assert.equal(loadData(f.root).semantic.decision,'approved');assert.ok(releaseErrors(reviewed).length);
 f.json('sources/semantic-review.json',{...original.semantic,input_digest:'4'.repeat(64)});build(f.root);stamp(f,'scaffold');
 assertBlockedPlan(()=>makePlan(f.root,{channel:'live'}),/digest/i);
 assert.ok(hostingPreflight(original,'production').errors.length);
 assert.ok(hostingPreflight(original,'unknown').errors.length);
}));

test('normal draft Hosting refuses incomplete or absent engineering evidence',()=>draftFixture(f=>{
 const path=join(f.root,'dist/verification.json'),valid=JSON.parse(readFileSync(path));
 for(const patch of [{commands:valid.commands.slice(0,-1)},{commands:valid.commands.map((c,i)=>i?c:{...c,exit_code:1})},{gate:'production'},{profile:'production'},{input_digest:'1'.repeat(64)},{source_tree_digest:'2'.repeat(64)},{output_digest:'3'.repeat(64)}]){
  f.json('dist/verification.json',{...valid,...patch});assertBlockedPlan(()=>makePlan(f.root,{channel:'live'}),/verification|command|record/i);
 }
 rmSync(path);assertBlockedPlan(()=>makePlan(f.root,{channel:'live'}),/verification|record/i);
}));

for(const [name,change,re]of [
 ['missing remote permission',(p,o)=>delete o.authorizeRemote,/not authorized/i],
 ['missing deployment permission',(p,o)=>delete o.authorizeDeploy,/not authorized/i],
 ['wrong project',(p,o)=>o.project='another-project',/mismatch/i],
 ['wrong site',(p,o)=>o.site='another-site',/mismatch/i],
 ['wrong confirmation',(p,o)=>o.confirm='invalid',/confirmation/i],
 ['wrong channel',(p,o)=>o.channel='different-channel',/channel/i],
 ['expired plan',(p,o)=>{p.expires_at='2020-01-01T00:00:00Z';resign(p);o.confirm=confirmationFor(p);},/expired/i],
 ['resigned extended plan',(p,o)=>{p.expires_at=new Date(Date.parse(p.created_at)+31*60*1000).toISOString();resign(p);o.confirm=confirmationFor(p);},/time window/i],
 ['resigned future plan',(p,o)=>{p.created_at=new Date(Date.now()+60000).toISOString();resign(p);o.confirm=confirmationFor(p);},/time window/i],
 ['invalid nonce',(p,o)=>{p.nonce='../invalid';resign(p);o.confirm=confirmationFor(p);},/nonce/i],
 ['forged verification gate',(p,o)=>{p.verification_gate='release';resign(p);o.confirm=confirmationFor(p);},/verification gate/i],
 ['omitted content blockers',(p,o)=>{p.content_blockers=[];resign(p);o.confirm=confirmationFor(p);},/blockers/i],
 ['removed coverage',(p,o,f)=>{const d=loadData(f.root);d.coverage.required_scope=[];f.json('sources/coverage.json',d.coverage);},/changed|stale|digest|blocker/i],
 ['reduced coverage promise',(p,o,f)=>{const c=loadData(f.root).coverage;c.required_scope[0].end_seconds=30;f.json('sources/coverage.json',c);},/changed|stale|digest|blocker/i],
 ['forged version',(p,o)=>{p.version='99.0.0';resign(p);o.confirm=confirmationFor(p);},/version/i],
 ['forged source revision',(p,o)=>{p.source_revision={commit:'a'.repeat(40),dirty:false};resign(p);o.confirm=confirmationFor(p);},/source revision/i],
 ['changed artifact',(p,o,f)=>writeFileSync(join(f.root,'dist/web/assets/base.css'),'changed'),/artifact|verification/i],
 ['changed public source',(p,o,f)=>writeFileSync(join(f.root,'README.md'),'Changed source'),/source|verification/i],
 ['removed noindex header',(p,o)=>{p.hosting.hosting.headers[0].headers=p.hosting.hosting.headers[0].headers.filter(h=>h.key!=='X-Robots-Tag');resign(p);o.confirm=confirmationFor(p);},/Hosting|artifact/i],
 ['stale optional legacy authority',(p,o,f)=>o.draftLiveAuthorization=draftLiveAuthorization(f),/authorization/i]
])test(`normal draft Hosting refuses ${name} before invoking a CLI`,()=>draftFixture(f=>{
 const p=makePlan(f.root,{channel:'live'});assert.equal(p.ready,true,p.errors.join('\n'));const o=options(p);let called=0;change(p,o,f);
 assert.throws(()=>executePlan(p,o,f.root,()=>{called++;return {status:0};}),re);assert.equal(called,0);
}));

for(const outcome of ['success','failure','uncertain','throw'])test(`normal draft Hosting consumes its nonce before a ${outcome} result without a content-exception receipt`,()=>draftFixture(f=>{
 const p=makePlan(f.root,{channel:'live'}),receipt=join(f.root,'dist/deploy-receipts',p.nonce+'.json');let called=0;
 const run=()=>{called++;assert.equal(JSON.parse(readFileSync(receipt)).status,'attempted');if(outcome==='throw')throw Error('Synthetic transport interruption');return {status:outcome==='success'?0:outcome==='failure'?1:null};};
 if(outcome==='success')executePlan(p,options(p),f.root,run);
 else assert.throws(()=>executePlan(p,options(p),f.root,run),/uncertain|Synthetic transport interruption/);
 assert.equal(called,1);assert.throws(()=>executePlan(p,options(p),f.root,()=>{called++;return {status:0};}),/already consumed/i);assert.equal(called,1);
}));

import {checkDraftHostingVerification,checkDraftPreviewVerification} from '../build/verification.mjs';
function reviewedDraftFixture(fn){return fixture(f=>{
 const c=loadData(f.root).config;c.publication_status='draft';f.json('project.config.json',c);refresh(f);build(f.root);stamp(f,'release');
 return fn(f);
});}

test('reviewed draft Hosting reuses matching preview release verification without a scaffold rerun',()=>reviewedDraftFixture(f=>{
 const d=loadData(f.root),receiptPath=join(f.root,'dist/verification.json'),before=readFileSync(receiptPath);
 assert.deepEqual(releaseErrors(d),[]);assert.equal(d.config.publication_status,'draft');assert.equal(d.semantic.decision,'approved');
 assert.equal(checkDraftHostingVerification(f.root,'preview').gate,'release');
 assert.throws(()=>checkDraftPreviewVerification(f.root,'preview'),/scaffold verification/i);
 const p=makePlan(f.root,{channel:'live'});assert.equal(p.ready,true,p.errors.join('\n'));assert.equal(p.verification_gate,'release');assert.equal(p.profile,'preview');
 const status=inspectStatus(f.root);assert.equal(status.hosting.local_preflight,'passed');assert.equal(status.hosting.engineering_verified,true);assert.equal(status.hosting.required_verification_gate,'release');assert.equal(status.hosting.content_certification_required,false);
 let called=0;executePlan(p,options(p),f.root,(command,args)=>{called++;assert.equal(command,'firebase');assert.deepEqual(args,['deploy','--only','hosting','--project','synthetic-project','--config','firebase.json','--non-interactive']);return {status:0};});
 assert.equal(called,1);assert.deepEqual(readFileSync(receiptPath),before);assert.equal(loadData(f.root).semantic.decision,'approved');
}));

test('reviewed draft Hosting rejects wrong-profile, incomplete and stale stronger verification',()=>reviewedDraftFixture(f=>{
 const path=join(f.root,'dist/verification.json'),valid=JSON.parse(readFileSync(path));
 for(const patch of [{profile:'production'},{gate:'production'},{commands:valid.commands.slice(0,-1)},{commands:valid.commands.map((c,i)=>i?c:{...c,exit_code:1})},{input_digest:'1'.repeat(64)},{source_tree_digest:'2'.repeat(64)},{output_digest:'3'.repeat(64)}]){
  f.json('dist/verification.json',{...valid,...patch});
  assertBlockedPlan(()=>makePlan(f.root,{channel:'live'}),/verification|command|record/i);
  assert.throws(()=>checkDraftHostingVerification(f.root,'preview'),/verification|command|record/i);
 }
 f.json('dist/verification.json',valid);assert.throws(()=>checkDraftHostingVerification(f.root,'production'),/preview output/i);
}));

test('reviewed draft Hosting binds the actual verification gate at plan and execution',()=>reviewedDraftFixture(f=>{
 const p=makePlan(f.root,{channel:'live'});assert.equal(p.verification_gate,'release');stamp(f,'scaffold');
 let called=0;assert.throws(()=>executePlan(p,options(p),f.root,()=>{called++;return {status:0};}),/verification gate changed/i);assert.equal(called,0);
 const next=makePlan(f.root,{channel:'live'});assert.equal(next.ready,true);assert.equal(next.verification_gate,'scaffold');
}));

// Publication identity is independent from the state of content review.
test('published pages use checkout version and one build time while retaining actual review status',()=>draftFixture(f=>{
 const d=loadData(f.root);d.config.publication_status='published';f.json('project.config.json',d.config);refresh(f);
 const pkg=JSON.parse(readFileSync(join(f.root,'package.json')));pkg.version='9.8.7';f.json('package.json',pkg);
 const first=build(f.root);stamp(f,'scaffold');
 const info=JSON.parse(readFileSync(join(f.root,'dist/web/build-info.json')));
 assert.equal(info.version,'9.8.7');assert.equal(info.publication_status,'published');assert.equal(info.source_revision.commit,null);assert.equal(info.commit_url,null);
 for(const p of d.config.pages){const html=readFileSync(join(f.root,'dist/web',p.file),'utf8');assert.doesNotMatch(html,/草稿|資訊缺口|sources.html#gaps/);assert.match(html,/正式版 v9.8.7/);assert.ok(html.includes(`datetime="${info.built_at}"`));assert.match(html,/UTC\+08:00/);assert.match(html,/整體語意審查尚未完成/);}
 assert.equal(existsSync(join(f.root,'sources/gaps.json')),false);
 assert.equal(makePlan(f.root,{channel:'live'}).ready,false);
 localGit(f.root,['init','-q']);commitTestTree(f.root);build(f.root);stamp(f,'scaffold');
 const plan=makePlan(f.root,{channel:'live'});assert.equal(plan.ready,true,plan.errors.join('\n'));assert.equal(plan.verification_gate,'scaffold');
 assert.equal(inspectStatus(f.root).release.verified,false);assert.equal(inspectStatus(f.root).production.verified,false);
 assert.throws(()=>build(f.root,{profile:'production'}),/coverage|semantic|release/);
 const second=build(f.root);assert.notEqual(second.meta.built_at,first.meta.built_at);assert.equal(second.meta.version,first.meta.version);
 assert.equal(second.data.config.content_checked_at,d.config.content_checked_at);
 writeFileSync(join(f.root,'README.md'),readFileSync(join(f.root,'README.md'),'utf8')+'\nLocal change\n');build(f.root);stamp(f,'scaffold');assert.equal(makePlan(f.root,{channel:'live'}).ready,false);
 const before=readFileSync(join(f.root,'dist/web/build-info.json'));pkg.version='invalid';f.json('package.json',pkg);assert.throws(()=>build(f.root),/Invalid package version/);assert.deepEqual(readFileSync(join(f.root,'dist/web/build-info.json')),before);
}));

test('published pages retain approved and rejected semantic decisions without draft labels',()=>draftFixture(f=>{
 const d=loadData(f.root);d.config.publication_status='published';f.json('project.config.json',d.config);
 for(const [decision,label]of [['approved','整體語意審查已通過'],['rejected','整體語意審查未通過']]){
  f.json('sources/semantic-review.json',{...d.semantic,decision});refresh(f);build(f.root);
  const html=readFileSync(join(f.root,'dist/web/index.html'),'utf8');assert.ok(html.includes(label));assert.doesNotMatch(html,/草稿/);
 }
}));

function localGit(root,args){const r=spawnSync('git',args,{cwd:root,encoding:'utf8'});assert.equal(r.status,0,r.stderr);return r.stdout.trim();}
function commitTestTree(root){localGit(root,['add','.']);localGit(root,['-c','user.name=Fixture Test','-c','user.email=fixture@example.invalid','-c','commit.gpgsign=false','commit','--allow-empty','-m','Isolated fixture']);}
test('Git identity ignores stale CI env and parent repos, links only valid repository URLs',()=>{
 const root=mkdtempSync(join(tmpdir(),'apple-event-git-identity-'));const prior=process.env.GITHUB_SHA;
 try{
  writeFileSync(join(root,'package.json'),JSON.stringify({version:'1.0.0'}));localGit(root,['init','-q']);commitTestTree(root);process.env.GITHUB_SHA='f'.repeat(40);
  const config={deployment:{github_repository:'https://github.com/test-owner/test-repo'}};
  const info=buildIdentity(root,config),sha=localGit(root,['rev-parse','HEAD']);assert.equal(info.source_revision.commit,sha);assert.equal(info.source_revision.dirty,false);assert.equal(info.commit_url,config.deployment.github_repository+'/commit/'+sha);assert.ok(Number.isFinite(Date.parse(info.source_committed_at)));
  for(const url of ['javascript:alert(1)','https://github.com.evil.invalid/u/r','https://user:pass@github.com/u/r','https://github.com/u/r?x=1'])assert.equal(buildIdentity(root,{deployment:{github_repository:url}}).commit_url,null);
  const child=join(root,'child');mkdirSync(child);writeFileSync(join(child,'package.json'),JSON.stringify({version:'2.0.0'}));assert.deepEqual(gitStamp(child),{commit:null,dirty:null});assert.equal(buildIdentity(child,config).commit_url,null);
 }finally{if(prior===undefined)delete process.env.GITHUB_SHA;else process.env.GITHUB_SHA=prior;rmSync(root,{recursive:true,force:true});}
});

test('a new HEAD with identical source files invalidates the old deployment identity',()=>fixture(f=>{
 localGit(f.root,['init','-q']);commitTestTree(f.root);build(f.root);stamp(f,'release');
 const plan=makePlan(f.root,{channel:'identity-review'});assert.equal(plan.ready,true,plan.errors.join('\n'));
 commitTestTree(f.root);assert.notEqual(gitStamp(f.root).commit,plan.source_revision.commit);
 assert.equal(makePlan(f.root,{channel:'identity-review'}).ready,false);
 assert.throws(()=>executePlan(plan,options(plan),f.root,()=>{throw Error('CLI must not run');}),/source_revision|stale/);
}));
