import {writeVerification,requiredChecks,checkVerification} from '../build/verification.mjs';
// Synthetic local tests. No Firebase CLI or remote write is executed.
import test from 'node:test';
import assert from 'node:assert/strict';
import {join} from 'node:path';
import {mkdtempSync,cpSync,readFileSync,writeFileSync,existsSync,rmSync,mkdirSync,symlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {ROOT,loadData,hash,releaseErrors} from '../build/data.mjs';
import {build} from '../build/build.mjs';
import {debug,checkPublic} from '../build/inspect.mjs';
import {publicBase,hostingConfig,responseHeaders,CSP,gitStamp} from '../build/publication.mjs';
import {textQuality,authorQualityErrors,exceptions} from '../build/quality.mjs';

test('official nonbreaking spaces preserve complete-name checks without excusing missing names',()=>{
 for(const space of ['\u00a0','\u202f']){
  const valid=['iPhone 18 Pro Max','iPhone Duo','Apple Watch Series 12','Apple Watch Ultra 4','AirPods 5'].join('、').replaceAll(' ',space);
  assert.deepEqual(textQuality(valid),[]);
  for(const invalid of ['Watch Ultra 4','Pro Max','Apple Watch Apple Watch'])assert.ok(textQuality(invalid.replaceAll(' ',space)).length);
 }
});

import {publicFiles,inspectSourceTree,exportPublic,sensitiveText} from '../build/public-tree.mjs';
import {makePlan,executePlan,confirmationFor,firebaseArgs} from '../build/deploy.mjs';
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
  assert.equal(r.remote.live_verified,null);assert.equal(r.remote.preview_verified,null);
  assert.deepEqual(readFileSync(join(f.root,'dist/verification.json')),before);
 }finally{f.cleanup();}
});

test('status rejects stale source, changed output, missing and malformed verification',()=>fixture(f=>{
 assert.equal(inspectStatus(f.root).verification.status,'current');
 const original=readFileSync(join(f.root,'README.md'));writeFileSync(join(f.root,'README.md'),original+'\n');
 assert.equal(inspectStatus(f.root).verification.status,'stale-or-invalid');writeFileSync(join(f.root,'README.md'),original);
 writeFileSync(join(f.root,'dist/web/index.html'),'changed output');assert.equal(inspectStatus(f.root).verification.status,'stale-or-invalid');
 writeFileSync(join(f.root,'dist/verification.json'),'{');assert.equal(inspectStatus(f.root).verification.status,'stale-or-invalid');
 rmSync(join(f.root,'dist/verification.json'));assert.equal(inspectStatus(f.root).verification.status,'missing');
}));

test('status clean rebuild must match current source and the complete command sequence',()=>fixture(f=>{
 const report={status:'passed',source:{digest:inspectSourceTree(f.root).digest},steps:['npm ci --ignore-scripts --no-audit --no-fund','npm run verify:scaffold','npm run test:release-fixture'].map(command=>({command,exit_code:0})),finished_at:'2026-01-01T00:00:00Z'};
 mkdirSync(join(f.root,'docs/qa'),{recursive:true});f.json('docs/qa/public-rebuild.json',report);
 assert.equal(inspectStatus(f.root).clean_rebuild.status,'current');
 report.steps.pop();f.json('docs/qa/public-rebuild.json',report);assert.equal(inspectStatus(f.root).clean_rebuild.status,'stale-or-invalid');
 report.source.digest='old';f.json('docs/qa/public-rebuild.json',report);assert.equal(inspectStatus(f.root).clean_rebuild.status,'stale-or-invalid');
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

// This fixture intentionally retains incomplete coverage and a blocking gap.
// Its one-operation authorization never changes the content's release state.
function draftPrepared(){
 const f=prepared(),d=loadData(f.root);
 d.config.publication_status='draft';f.json('project.config.json',d.config);
 d.coverage.segments[0].end_seconds=30;f.json('sources/coverage.json',d.coverage);
 f.json('sources/gaps.json',{schema_version:1,items:[{id:'GAP-001',subject:'合成測試範圍',question_zh:'其餘來源尚待核對。',kind:'not-yet-reviewed',blocking:true,evidence:[],coverage_ids:[],reviewed_scope:null,review_record:null}]});
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
 for(const re of [/coverage/i,/Blocking gaps/i,/semantic/i])assert.match(p.content_blockers.join('\n'),re);
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
 const after=loadData(f.root);assert.equal(after.digest,before.digest);assert.equal(after.config.publication_status,'draft');assert.equal(after.semantic.decision,'pending');assert.deepEqual(after.coverage.required_scope,before.coverage.required_scope);assert.deepEqual(after.gaps,before.gaps);
 assert.ok(releaseErrors(after).length);assert.throws(()=>checkVerification(f.root,'preview'),/release verification/);
}));

test('draft preview authorization cannot silently become ordinary preview, live or production approval',()=>draftFixture(f=>{
 const a=draftAuthorization(f);
 assertBlockedPlan(()=>makePlan(f.root,{channel:'draft-review'}),/coverage|semantic|release/i);
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
