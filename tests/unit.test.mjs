import test from 'node:test';
import {migratePageConfig,migrateAudienceProject} from '../build/migrate-audiences.mjs';
import {migrateManifest} from '../build/migrate-source-contract.mjs';
import assert from 'node:assert/strict';
import {join} from 'node:path';
import {writeFileSync,readFileSync,rmSync,mkdirSync,symlinkSync,mkdtempSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {execFileSync} from 'node:child_process';
import {loadData,ROOT,TW_STOREFRONT_SOURCES,allBlocks,blockClaimIds,interpolate,validateData,releaseErrors,parseKB,parseDraft,covered,interval,playerMappingDigest,mapPlayerSeconds} from '../build/data.mjs';
import {build,safeClean} from '../build/build.mjs';
import {debug,checkPublic,checkLinks,checkTracked} from '../build/inspect.mjs';
import {deploymentErrors} from '../build/deploy.mjs';
import {formatTime,playerLink} from '../build/player.mjs';
import {renderPage,markdown} from '../build/md2html.mjs';
import {makeFixture} from './fixtures/make.mjs';
const fixture=fn=>{const f=makeFixture();try{return fn(f,loadData(f.root));}finally{f.cleanup();}};
const reject=(name,change,re)=>test(name,()=>fixture((f,d)=>{change(d);assert.throws(()=>validateData(d),re);}));
test('empty scaffold accepts zero claims and null video',()=>{const f=makeFixture({empty:true});try{const d=loadData(f.root);assert.equal(d.claims.length,0);assert.equal(d.manifest.canonical_url,null);assert.ok(releaseErrors(d).length>=5);assert.equal(debug(build(f.root).out,d).pages,6);}finally{f.cleanup();}});
test('synthetic complete content gate can pass',()=>fixture((f,d)=>assert.deepEqual(releaseErrors(d),[])));
reject('missing expected page rejected',d=>d.config.pages.pop(),/six expected|audience|manifest/);
reject('zero expected pages rejected',d=>d.config.pages=[],/six expected|audience|manifest/);
reject('duplicate page role rejected',d=>d.config.pages.find(p=>p.file==='event.html').role='home',/six expected|audience|manifest/);
reject('illegal source rejected',d=>d.claims[0].evidence[0].source_id='S02',/claim:/);
reject('unknown KB reference rejected',d=>d.blocks[0].kb='KB-999',/Unknown KB/);
reject('candidate must not enter formal content',d=>d.claims[0].verification='candidate',/Unverified claim/);
reject('disputed must not enter formal content',d=>d.claims[0].verification='disputed',/Unverified claim/);
for(const t of [-1,Infinity,NaN,121])reject(`invalid start time ${t}`,d=>d.claims[0].evidence[0].start_seconds=t,/claim:|time interval/);
reject('end out of duration',d=>d.claims[0].evidence[0].end_seconds=121,/time interval/);
reject('reversed interval',d=>d.claims[0].evidence[0].end_seconds=5,/time interval/);
reject('wrong evidence revision',d=>d.claims[0].evidence[0].artifact_revision='wrong',/artifact_revision/);
reject('wrong coverage revision',d=>d.coverage.artifact_revision='wrong',/artifact_revision/);
reject('subtitle-only cannot verify spoken/visual evidence',d=>{d.coverage.segments[0].audio_checked=false;d.coverage.segments[0].visual_viewed=false;},/not covered/);
reject('unavailable evidence modality',d=>d.manifest.available_modalities.visual=false,/unavailable/);
reject('unknown spec cannot use zero',d=>d.claims[0].structured_values[0].value=0,/must be null/);
reject('known spec cannot use null',d=>d.claims[0].structured_values[1].value=null,/must be finite/);
reject('unverified publisher cannot masquerade as verified',d=>d.manifest.publisher_verification.method=null,/incomplete/);
reject('hand-entered timestamp in prose',d=>d.blocks[0].text='資料 12:30',/must be generated/);
reject('old Firebase target in configuration',d=>d.config.deployment.target_firebase_project='apple-afm3-explainers',/Original Firebase/);
reject('unknown field rejected',d=>d.manifest.unknown='x',/additional properties/);
test('unreviewed gap is not non-disclosure',()=>fixture((f,d)=>{const g={id:'GAP-001',subject:'unknown',question_zh:'未核對項目',kind:'not-yet-reviewed',blocking:true,evidence:[],coverage_ids:[],reviewed_scope:null,review_record:null};d.gaps.items=[g];validateData(d);const html=renderPage(d.config.pages.find(p=>p.role==='evidence'),d,{version:'test',built_at:'test'});assert.match(html,/尚未核對/);assert.doesNotMatch(html,/影片明確表示尚未公開/);g.kind='explicit-not-disclosed';assert.throws(()=>validateData(d),/actual evidence/);}));
test('absence requires coverage, never point evidence',()=>fixture((f,d)=>{const g={id:'GAP-001',subject:'test',question_zh:'test',kind:'reviewed-not-found',blocking:false,evidence:[],coverage_ids:['C01'],reviewed_scope:{start_seconds:0,end_seconds:120,modalities:['audio','visual']},review_record:{reviewer:'test',reviewed_at:'2026-01-01T00:00:00Z',notes:'test'}};d.gaps.items=[g];validateData(d);g.evidence=[d.claims[0].evidence[0]];assert.throws(()=>validateData(d),/Absence needs coverage/);g.evidence=[];d.coverage.segments[0].end_seconds=100;assert.throws(()=>validateData(d),/Insufficient/);}));
test('coverage union detects holes and modality gaps',()=>{assert.equal(covered({start_seconds:0,end_seconds:30,modalities:['audio']},[{start_seconds:0,end_seconds:10,audio_checked:true},{start_seconds:11,end_seconds:30,audio_checked:true}]),false);});
for(const draft of ['event','dev','ai-user','general'])test(`fresh semantic review includes ${draft} draft`,()=>fixture((f,d)=>{const path=join(f.root,`content/drafts/${draft}.md`);writeFileSync(path,readFileSync(path,'utf8')+'\n');assert.ok(releaseErrors(loadData(f.root)).some(e=>e.includes('semantic')));}));
test('release blocks missing coverage, conflicts and blocking gaps',()=>fixture((f,d)=>{d.coverage.required_scope=[];assert.ok(releaseErrors(d).some(e=>e.includes('coverage')));d.gaps.items=[{kind:'conflict',blocking:false}];assert.ok(releaseErrors(d).some(e=>e.includes('conflicts')));}));
test('deployment refuses unset, original and arbitrary target',()=>fixture((f,d)=>{const c=d.config;c.deployment.target_firebase_project=null;assert.match(deploymentErrors(c).join(' '),/unset/);for(const id of ['apple-afm3-explainers','new-project']){c.deployment.target_firebase_project=id;assert.match(deploymentErrors(c).join(' '),/not authorized/);}}));
test('strict Markdown parsing rejects rogue/unstructured facts',()=>{assert.throws(()=>parseKB('# 事件事實庫\n新增事實'),/unstructured/);assert.throws(()=>parseDraft('# 發表會整理\n未引用事實'),/outside KB/);assert.throws(()=>parseDraft('# 發表會整理\n:::claim KB-001'),/unclosed/);} );
test('unsafe metadata and Markdown escaped',()=>fixture((f,d)=>{d.manifest.title='<img src=x onerror=alert(1)>';const html=renderPage(d.config.pages.find(p=>p.role==='evidence'),d,{version:'test',built_at:'test'});assert.match(html,/&lt;img/);assert.doesNotMatch(html,/<img/);assert.doesNotMatch(markdown('<script>alert(1)</script>'),/<script>/);}));
test('default adapter only official link, computed time does not imply support',()=>fixture((f,d)=>{const p=playerLink(d.manifest,d.claims[0].evidence[0]);assert.equal(p.embed,null);assert.equal(p.time,'0:10–0:15');assert.equal(formatTime(3661),'1:01:01');assert.throws(()=>formatTime(NaN));}));
test('verified mock adapter and stale revision fallback',()=>fixture((f,d)=>{d.manifest.player_adapter={kind:'youtube',verification:{seek_works:true,canonical_url:d.manifest.canonical_url,artifact_revision:d.manifest.artifact_revision}};assert.match(playerLink(d.manifest,d.claims[0].evidence[0]).embed,/start=10&end=15&autoplay=0/);d.manifest.player_adapter.verification.artifact_revision='stale';assert.equal(playerLink(d.manifest,d.claims[0].evidence[0]).embed,null);}));
test('unique per-claim anchors and return links',()=>fixture((f,d)=>{const {out}=build(f.root);const a=readFileSync(join(out,'event.html'),'utf8'),b=readFileSync(join(out,'sources.html'),'utf8');assert.match(a,/sources.html#claim-KB-001/);assert.match(a,/sources.html#claim-KB-002/);assert.match(b,/event.html#ref-KB-002-2/);assert.equal(debug(out,d,{fixture:true}).pages,6);}));
test('missing generated page and zero tested pages fail',()=>fixture((f,d)=>{const {out}=build(f.root);rmSync(join(out,'event.html'));assert.throws(()=>debug(out,d,{fixture:true}),/ENOENT/);d.config.pages=[];assert.throws(()=>checkLinks(out,d),/Zero expected/);}));
test('fixture and stale artifacts rejected in formal output',()=>fixture((f,d)=>{const {out}=build(f.root);assert.throws(()=>checkPublic(out,d),/fixture leak/);writeFileSync(join(out,'old.pdf'),'stale');assert.throws(()=>checkPublic(out,d),/artifact leak/);}));
test('build removes prior output only inside isolated project',()=>fixture((f,d)=>{let {out}=build(f.root);writeFileSync(join(out,'old.pdf'),'stale');writeFileSync(join(out,'unexpected.html'),'stale');build(f.root);assert.throws(()=>readFileSync(join(out,'old.pdf')));assert.throws(()=>safeClean(f.root,f.root),/Unsafe/);rmSync(out,{recursive:true});symlinkSync(ROOT,out);assert.throws(()=>safeClean(f.root,out),/symlink/);}));
test('private tracked-file detection goes beyond ignore',()=>fixture((f,d)=>{execFileSync('git',['init','-q'],{cwd:f.root});mkdirSync(join(f.root,'research/.private'),{recursive:true});writeFileSync(join(f.root,'research/.private/test.txt'),'synthetic');execFileSync('git',['add','research/.private/test.txt'],{cwd:f.root});assert.throws(()=>checkTracked(f.root),/private\/generated/);}));

test('JSON comment-like source text is preserved and escaped',()=>fixture((f,d)=>{
 const c=d.claims[0];c.statement_zh='前文<!--不可信原文-->後文';
 const text='# 事件事實庫\n<!-- outside only -->\n### KB-001\n```json\n'+JSON.stringify(c,null,2)+'\n```';
 assert.equal(parseKB(text)[0].statement_zh,c.statement_zh);
 assert.match(markdown(c.statement_zh),/前文&lt;!--不可信原文--&gt;後文/);
 assert.throws(()=>parseKB('# 事件事實庫\n<!-- unfinished'),/Unclosed/);
}));
test('draft comment-like content survives inside the KB block',()=>{
 const blocks=parseDraft('# 發表會整理\n<!-- outer -->\n:::claim KB-001\n文字<!--原文-->文字\n:::');
 assert.equal(blocks[0].text,'文字<!--原文-->文字');
});
test('subsecond evidence keeps distinct start/end and copied time',()=>fixture((f,d)=>{
 const e={...d.claims[0].evidence[0],start_seconds:10.125,end_seconds:10.875};
 assert.equal(playerLink(d.manifest,e).time,'0:10.125–0:10.875');
 assert.equal(formatTime(3661.25),'1:01:01.25');
}));
test('private directory symlink cannot enter the Git index',()=>fixture((f,d)=>{
 execFileSync('git',['init','-q'],{cwd:f.root});mkdirSync(join(f.root,'research'),{recursive:true});
 symlinkSync(join(f.root,'sources'),join(f.root,'research/.private'));
 execFileSync('git',['add','research/.private'],{cwd:f.root});assert.throws(()=>checkTracked(f.root),/private\/generated/);
}));
test('video-only intake distinguishes pending review from missing video',()=>{
 const f=makeFixture({empty:true});try{
  f.json('sources/event-manifest.json',{...f.manifest,canonical_url:'https://example.com/synthetic-video'});
  const d=loadData(f.root),meta={version:'test',built_at:'test'};
  for(const role of ['home','reader']){
   const html=renderPage(d.config.pages.find(p=>p.role===role),d,meta);
   assert.match(html,/影片已設定/);assert.doesNotMatch(html,/等待影片資料|影片尚未設定|尚未填入發表會資料/);
  }
 }finally{f.cleanup();}
});
test('reviewed content with no gap entries does not claim review has not started',()=>fixture((f,d)=>{
 const html=renderPage(d.config.pages.find(p=>p.role==='evidence'),d,{version:'test',built_at:'test'});
 assert.doesNotMatch(html,/目前尚未開始內容查核/);assert.match(html,/目前未列出特定資訊缺口/);
}));
test('source audit exposes publisher verification provenance and timeline basis',()=>fixture((f,d)=>{
 const html=renderPage(d.config.pages.find(p=>p.role==='evidence'),d,{version:'test',built_at:'test'});
 assert.match(html,/發布者身分核對紀錄/);assert.match(html,/https:\/\/www.apple.com\/test-only\//);
 assert.ok(html.includes(d.manifest.publisher_verification.method));assert.ok(html.includes(d.manifest.timeline_basis.notes));
}));

test('blocked source intake stays blocked even with otherwise complete fixture content',()=>fixture((f,d)=>{
 d.manifest.access_record={checked_at:'2026-01-01T00:00:00Z',reviewer:'fixture',status:'blocked',notes:'Synthetic access failure; no actual media request.',attempts:[{method:'Synthetic HLS request',result:'403'}]};
 validateData(d);assert.ok(releaseErrors(d).includes('Designated source access is blocked'));
 for(const p of d.config.pages){const html=renderPage(p,d,{version:'test',built_at:'test'});assert.match(html,/證據存取受阻/);}
 const evidence=renderPage(d.config.pages.find(p=>p.role==='evidence'),d,{version:'test',built_at:'test'});assert.match(evidence,/id="access"/);assert.match(evidence,/Synthetic HLS request/);assert.doesNotMatch(evidence,/<iframe/);
}));
test('access observations are escaped and cannot be attached without a designated source',()=>{
 const f=makeFixture({empty:true});try{const d=loadData(f.root);d.manifest.access_record={checked_at:'2026-01-01T00:00:00Z',reviewer:'fixture',status:'blocked',notes:'<script>untrusted</script>',attempts:[{method:'<img src=x>',result:'blocked'}]};assert.throws(()=>validateData(d),/No video/);d.manifest.canonical_url='https://example.com/synthetic';validateData(d);const html=renderPage(d.config.pages.find(p=>p.role==='evidence'),d,{version:'test',built_at:'test'});assert.match(html,/&lt;script&gt;untrusted/);assert.doesNotMatch(html,/<img src=x>/);}finally{f.cleanup();}
});

function sourceFixture(fn){return fixture((f,d)=>{
 const sha='a'.repeat(64),rev='sha256:'+sha,when='2026-01-01T00:00:00Z';
 for(const [id,url,type] of [['S02','https://www.apple.com/tw/iphone-18-pro/specs/','product_specs'],['S07','https://developer.apple.com/documentation/localauthentication','developer_documentation']]){
  d.manifest.supplemental_sources.push({source_id:id,canonical_url:url,source_type:type,title:'FIXTURE_ONLY scoped source',artifact_revision:rev,sha256:sha,acquired_at:when,publisher:'Apple',notes:'Synthetic engineering fixture',language:id==='S02'?'zh-TW':'en',scope:'Synthetic scope',content_resource_url:id==='S02'?null:'https://developer.apple.com/tutorials/data/documentation/localauthentication.json',related_claim_ids:id==='S02'?[]:['KB-001'],identity_review:{reviewer:'fixture',reviewed_at:when,notes:'Synthetic same-content identity verification'}});
  d.coverage.page_reviews.push({id:'PAGE-'+id,source_id:id,artifact_revision:rev,locators:['Synthetic locator'],review_record:{reviewer:'fixture',reviewed_at:when,notes:'Synthetic review'}});
  const c=structuredClone(d.claims[0]);c.id=id==='S02'?'KB-020':'KB-100';c.source='['+id+']';c.evidence=[{source_id:id,artifact_revision:rev,modality:'webpage',locator:'Synthetic locator',context:'FIXTURE_ONLY'}];c.review_record.coverage_ids=['PAGE-'+id];
  if(id==='S07')c.technical_context={related_claim_ids:['KB-001'],relationship:'context-only',sdk_availability:[],runtime_tested:false,notes:'Not a compatibility claim'};
  d.claims.push(c);d.blocks.push({kb:c.id,index:d.blocks.length+1,section:'Synthetic supplements',text:''});
 }
 const candidate=structuredClone(d.claims[0]);candidate.id='KB-090';candidate.verification='candidate';candidate.evidence[0].modality='subtitles';candidate.review_record=null;d.claims.push(candidate);
 d.coverage.segments.push({...structuredClone(d.coverage.segments[0]),id:'SUB90'});
 validateData(d);return fn(d);
});}
const productionReject=(name,change,re)=>test(name,()=>sourceFixture(d=>{change(d);assert.throws(()=>validateData(d),re);}));
productionReject('unregistered official page cannot support evidence',d=>d.claims.find(c=>c.source==='[S02]').evidence[0].source_id='S99',/source.*mismatch/);
productionReject('other official product URL is not automatically allowed',d=>d.manifest.supplemental_sources[0].canonical_url='https://www.apple.com/tw/iphone/specs/',/Unapproved/);
productionReject('Developer homepage cannot replace a specific document',d=>d.manifest.supplemental_sources.find(s=>s.source_id==='S07').canonical_url='https://developer.apple.com/',/Unapproved/);
productionReject('Developer session cannot be mislabeled as S01 or silently admitted',d=>d.manifest.supplemental_sources.find(s=>s.source_id==='S07').source_type='developer_session',/Unapproved/);
productionReject('web evidence requires a locator',d=>delete d.claims.find(c=>c.source==='[S02]').evidence[0].locator,/claim:/);
productionReject('web evidence cannot invent a time',d=>d.claims.find(c=>c.source==='[S02]').evidence[0].start_seconds=10,/claim:/);
productionReject('web evidence requires correct snapshot',d=>d.claims.find(c=>c.source==='[S02]').evidence[0].artifact_revision='stale',/revision mismatch/);
productionReject('web evidence must match a reviewed locator',d=>d.claims.find(c=>c.source==='[S02]').evidence[0].locator='unreviewed chapter',/reviewed locator/);
productionReject('subtitle candidates cannot be marked verified',d=>{const c=d.claims.find(c=>c.id==='KB-090');c.verification='verified';c.review_record={reviewer:'test',reviewed_at:'2026-01-01T00:00:00Z',notes:'test',coverage_ids:['SUB90']};},/Subtitle-only|Unknown coverage/);
productionReject('spec facts cannot become event-only claims',d=>d.claims.find(c=>c.source==='[S02]').source='[S01]',/primary source|Event-only/);
productionReject('Developer claims require an explicit context-only product relation',d=>delete d.claims.find(c=>c.id==='KB-100').technical_context,/technical context/);
productionReject('general documentation cannot assert tested device compatibility',d=>d.claims.find(c=>c.id==='KB-100').technical_context.relationship='device-compatible',/claim:/);
productionReject('Developer premise must be a verified product claim',d=>d.manifest.supplemental_sources.find(s=>s.source_id==='S07').related_claim_ids=['KB-090'],/scope|verified product premise/);
test('event summary and timeline exclude all supplemental claims, Reading shows source categories',()=>sourceFixture(d=>{
 const html=renderPage(d.config.pages.find(p=>p.file==='event.html'),d,{version:'test',built_at:'test'});
 const summary=html.split('aria-labelledby="summary"')[1].split('</section>')[0];
 const timeline=html.split('aria-labelledby="timeline"')[1].split('</section>')[0];
 for(const c of d.claims.filter(c=>c.source!=='[S01]')){assert.ok(!summary.includes(c.id));assert.ok(!timeline.includes(c.id));}
 for(const category of ['發表會影片','技術規格補充','Developer 技術補充'])assert.ok(html.includes('data-source-category>'+category));
 for(const b of d.blocks){const c=d.claims.find(c=>c.id===b.kb);assert.ok(html.includes(markdown(b.text||c.statement_zh)));}
 assert.doesNotMatch(html,/全站唯一來源|規格頁證據一致/);
 for(const page of d.config.pages){const rendered=renderPage(page,d,{version:'test',built_at:'test'});assert.match(rendered,/<div class="draft-strip">草稿 · 已核對子集 ·/);assert.match(rendered,/<meta name="robots" content="noindex,nofollow">/);}
}));

for(const decision of ['pending','approved','rejected'])for(const complete of [false,true])test(`draft notice separates ${decision} semantic review from ${complete?'complete':'incomplete'} audiovisual coverage`,()=>fixture((f,d)=>{
 d.semantic.decision=decision;d.coverage.segments[0].end_seconds=complete?120:30;
 const expected=!complete&&decision==='pending'?'全片影音與整體語意審查尚未完成':`${complete?'全片影音查核已完成':'全片影音查核尚未完成'} · ${decision==='approved'?'整體語意審查已通過':decision==='rejected'?'整體語意審查未通過':'整體語意審查尚未完成'}`;
 for(const page of d.config.pages){
  const html=renderPage(page,d,{version:'test',built_at:'test',profile:'preview'}),notice=html.match(/<div class="draft-strip">([^<]+)<\/div>/)[1];
  assert.equal(notice,'草稿 · 已核對子集 · '+expected);assert.match(html,/<meta name="robots" content="noindex,nofollow">/);
  if(page.role==='reader')assert.ok(html.includes(complete?'全片音訊與連續畫面已依紀錄完成檢視':'全片音訊與連續畫面尚未完成檢視'));
 }
}));
test('draft notice cannot reuse stale semantic decisions or call a smaller promised range the full video',()=>fixture((f,d)=>{
 const render=()=>renderPage(d.config.pages[0],d,{version:'test',built_at:'test',profile:'preview'}).match(/<div class="draft-strip">([^<]+)<\/div>/)[1];
 for(const decision of ['approved','rejected']){d.semantic.decision=decision;d.semantic.input_digest='stale';assert.equal(render(),'草稿 · 已核對子集 · 全片影音查核已完成 · 整體語意審查尚未完成');}
 d.semantic.decision='approved';d.semantic.input_digest=d.digest;d.semantic.reviewer=null;assert.doesNotMatch(render(),/語意審查已通過/);
 d.semantic.decision='pending';d.coverage.required_scope[0].end_seconds=30;d.coverage.segments[0].end_seconds=30;
 assert.equal(render(),'草稿 · 已核對子集 · 全片影音與整體語意審查尚未完成');
}));

test('verified official time links do not imply verified embeds or subsecond seek',()=>fixture((f,d)=>{const e={...d.claims[0].evidence[0],start_seconds:10.125};d.manifest.player_adapter={kind:'youtube-link',verification:{seek_works:true,canonical_url:d.manifest.canonical_url,artifact_revision:d.manifest.artifact_revision}};let p=playerLink(d.manifest,e);assert.equal(p.embed,null);assert.match(p.official,/t=10s$/);assert.equal(p.time,'0:10.125–0:15');d.manifest.player_adapter.verification.artifact_revision='stale';p=playerLink(d.manifest,e);assert.equal(p.official,d.manifest.canonical_url);assert.equal(p.embed,null);}));

test('v2 manifest migration preserves source identity, versions and is idempotent',()=>sourceFixture(d=>{const old=structuredClone(d.manifest);old.schema_version=2;delete old.source_type;delete old.language;old.supplemental_sources=old.supplemental_sources.filter(s=>s.source_id==='S02');for(const s of old.supplemental_sources)for(const k of ['source_type','language','scope','content_resource_url','related_claim_ids'])delete s[k];const snapshot=structuredClone(old),next=migrateManifest(old);assert.deepEqual(old,snapshot);assert.equal(next.artifact_revision,old.artifact_revision);assert.deepEqual(next.timeline_basis,old.timeline_basis);assert.equal(next.supplemental_sources[0].sha256,old.supplemental_sources[0].sha256);assert.deepEqual(migrateManifest(next),next);}));

for(const audience of ['dev','ai-user','general'])test(`${audience} route and per-node citations render from shared claims`,()=>fixture((f,d)=>{const page=d.config.pages.find(p=>p.audience===audience);assert.ok(page);const blocks=d.drafts[page.file];assert.ok(blocks.length>=3);assert.ok(blocks.some(b=>b.kind==='summary'));assert.ok(blocks.every(b=>b.topic_id==='fixture-topic'));const html=renderPage(page,d,{version:'test',built_at:'test'});assert.match(html,/topic-fixture-topic/);for(const id of ['KB-001','KB-002'])assert.ok(html.includes('sources.html#claim-'+id));const evidence=renderPage(d.config.pages.find(p=>p.role==='evidence'),d,{version:'test',built_at:'test'});assert.ok(evidence.includes(page.file+'#ref-KB-001-'));}));
for(const audience of ['dev','ai-user','general'])test(`missing ${audience} draft fails without filtering`,()=>fixture((f,d)=>{rmSync(join(f.root,`content/drafts/${audience}.md`));assert.throws(()=>loadData(f.root),/ENOENT/);}));
test('semantic digest includes audience selection specifications',()=>fixture((f,d)=>{const path=join(f.root,'content/audiences/dev.md');writeFileSync(path,readFileSync(path,'utf8')+'\n');assert.ok(releaseErrors(loadData(f.root)).some(e=>e.includes('semantic')));}));
test('distinct audience drafts are required by release gate',()=>fixture((f,d)=>{writeFileSync(join(f.root,'content/drafts/general.md'),readFileSync(join(f.root,'content/drafts/dev.md'),'utf8'));assert.ok(releaseErrors(loadData(f.root)).some(e=>/distinct|duplicate|identical/i.test(e)));}));
test('unknown claim in multi-claim narrative rejected',()=>fixture((f,d)=>{d.drafts['dev.html'][0].claim_ids.push('KB-999');assert.throws(()=>validateData(d),/Unknown KB/);}));
test('untrusted multi-claim prose cannot execute HTML',()=>fixture((f,d)=>{d.drafts['dev.html'][0].text='<img src=x onerror=alert(1)>';const html=renderPage(d.config.pages.find(p=>p.audience==='dev'),d,{version:'test',built_at:'test'});assert.match(html,/&lt;img/);assert.doesNotMatch(html,/<img/);}));
test('new registered Developer document admits only reviewed scoped original',()=>sourceFixture(d=>{const s=d.manifest.supplemental_sources.find(s=>s.source_id==='S07');s.canonical_url='https://developer.apple.com/documentation/corebluetooth';s.content_resource_url='https://developer.apple.com/tutorials/data/documentation/corebluetooth.json';validateData(d);delete s.identity_review;assert.throws(()=>validateData(d),/identity|event-manifest|same-content/);}));
productionReject('Developer source without reviewed original locator rejected',d=>{d.coverage.page_reviews=d.coverage.page_reviews.filter(r=>r.source_id!=='S07');},/locator|review|coverage/i);

// FIXTURE_ONLY storefront facts stay in temporary/in-memory fixture data.
function storefrontFixture(fn){return sourceFixture(d=>{
 const when='2026-01-01T00:00:00Z';
 for(const [id,url] of Object.entries(TW_STOREFRONT_SOURCES)){
  const sha=id.slice(1).repeat(32),rev='sha256:'+sha;
  const source={source_id:id,canonical_url:url,title:'FIXTURE_ONLY 台灣商店原文',artifact_revision:rev,sha256:sha,acquired_at:when,publisher:'Apple',notes:'Synthetic acquired snapshot; not a live price',source_type:'apple_tw_storefront',language:'zh-TW',scope:'Synthetic price/ordering locator only',content_resource_url:null,related_claim_ids:[],identity_review:{reviewer:'fixture',reviewed_at:when,notes:'Synthetic exact-page identity record'}};
  d.manifest.supplemental_sources.push(source);
  d.coverage.page_reviews.push({id:'PAGE-'+id,source_id:id,artifact_revision:rev,locators:['Synthetic storefront locator'],review_record:{reviewer:'fixture',reviewed_at:when,notes:'Synthetic text/conditions review'}});
  const c=structuredClone(d.claims[0]);c.id='KB-3'+id.slice(1);c.source='['+id+']';c.claim_type='availability';c.statement_zh='FIXTURE_ONLY 商店資訊';c.evidence=[{source_id:id,artifact_revision:rev,modality:'webpage',locator:'Synthetic storefront locator',context:'Synthetic storefront text'}];c.review_record.coverage_ids=['PAGE-'+id];
  d.claims.push(c);
  d.drafts['general.html'].push({kind:'narrative',node_id:'storefront-'+id.toLowerCase(),topic_id:'fixture-storefront',section:'Synthetic storefront',claim_ids:[c.id],text:'{{'+c.id+'}}',index:d.drafts['general.html'].length+1});
 }
 validateData(d);return fn(d);
});}
const storefrontReject=(name,change,re)=>test(name,()=>storefrontFixture(d=>{change(d);assert.throws(()=>validateData(d),re);}));
const storeSource=d=>d.manifest.supplemental_sources.find(s=>s.source_id==='S24');
const storeClaim=d=>d.claims.find(c=>c.id==='KB-324');
test('six exact Taiwan storefront pages admit reviewed webpage claims without changing S01 scope',()=>storefrontFixture(d=>{
 assert.equal(d.manifest.supplemental_sources.filter(s=>s.source_type==='apple_tw_storefront').length,6);
 assert.deepEqual(d.coverage.required_scope,[{start_seconds:0,end_seconds:120,modalities:['audio','visual']}]);
 storeSource(d).related_claim_ids=['KB-001'];validateData(d);
}));
for(const [label,url] of Object.entries({
 domain:'https://www.apple.com.evil.test/tw/shop/buy-iphone/iphone-18-pro',
 market:'https://www.apple.com/us/shop/buy-iphone/iphone-18-pro',
 otherPage:'https://www.apple.com/tw/shop/buy-iphone/iphone-18',
 otherApprovedPage:'https://www.apple.com/tw/',
 query:'https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro?model=unreviewed',
 fragment:'https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro#unreviewed',
 credentials:'https://user@www.apple.com/tw/shop/buy-iphone/iphone-18-pro',
 slash:'https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/',
 encodedPath:'https://www.apple.com/tw/shop/buy-iphone/%69phone-18-pro'
}))storefrontReject(`storefront rejects ${label} URL substitution`,d=>storeSource(d).canonical_url=url,/Unapproved|duplicate/);
storefrontReject('storefront rejects a correct URL assigned to an unapproved source ID',d=>storeSource(d).source_id='S30',/Unapproved/);
storefrontReject('storefront cannot be mislabeled product_specs',d=>storeSource(d).source_type='product_specs',/Unapproved/);
storefrontReject('reserved storefront ID cannot be reassigned to Developer documentation',d=>Object.assign(storeSource(d),{source_type:'developer_documentation',canonical_url:'https://developer.apple.com/documentation/coreaudio',content_resource_url:'https://developer.apple.com/tutorials/data/documentation/coreaudio.json',related_claim_ids:['KB-001']}),/Unapproved/);
storefrontReject('storefront requires an identity review',d=>delete storeSource(d).identity_review,/identity review/);
storefrontReject('storefront requires Taiwan language',d=>storeSource(d).language='en-US',/zh-TW/);
storefrontReject('storefront cannot substitute a content endpoint',d=>storeSource(d).content_resource_url='https://www.apple.com/tw/',/original page/);
storefrontReject('storefront revision must match snapshot hash',d=>storeSource(d).artifact_revision='sha256:'+'0'.repeat(64),/snapshot hash/);
storefrontReject('storefront admission requires a page review even before claims render',d=>{d.coverage.page_reviews=d.coverage.page_reviews.filter(r=>r.source_id!=='S24');},/reviewed locator/);
storefrontReject('storefront review must match the acquired version',d=>d.coverage.page_reviews.find(r=>r.source_id==='S24').artifact_revision='stale',/revision mismatch/);
storefrontReject('storefront evidence needs the acquired version',d=>storeClaim(d).evidence[0].artifact_revision='stale',/revision mismatch/);
storefrontReject('storefront evidence needs a reviewed locator',d=>storeClaim(d).evidence[0].locator='unreviewed price variant',/reviewed locator/);
storefrontReject('storefront evidence cannot borrow an S01 timestamp',d=>storeClaim(d).evidence[0].start_seconds=20,/claim:/);
storefrontReject('storefront cannot be folded into an S01 claim',d=>{d.claims[0].evidence.push(structuredClone(storeClaim(d).evidence[0]));},/Event-only/);
storefrontReject('storefront claim cannot mix video evidence',d=>storeClaim(d).evidence.push(structuredClone(d.claims[0].evidence[0])),/own page only/);
storefrontReject('storefront claim cannot mix two store pages without separate claims',d=>storeClaim(d).evidence.push(structuredClone(d.claims.find(c=>c.id==='KB-325').evidence[0])),/own page only/);
storefrontReject('Developer claim cannot absorb storefront evidence',d=>d.claims.find(c=>c.id==='KB-100').evidence.push(structuredClone(storeClaim(d).evidence[0])),/own page only/);
storefrontReject('storefront claim cannot gain Developer technical_context',d=>storeClaim(d).technical_context=structuredClone(d.claims.find(c=>c.id==='KB-100').technical_context),/Developer primary source/);
storefrontReject('storefront price cannot become a Developer product premise',d=>{d.manifest.supplemental_sources.find(s=>s.source_id==='S07').related_claim_ids=['KB-324'];d.claims.find(c=>c.id==='KB-100').technical_context.related_claim_ids=['KB-324'];},/verified product premise/);
storefrontReject('storefront cannot enter an authored event summary',d=>d.blocks.push({kind:'summary',node_id:'store-event-summary',topic_id:'test',section:'Test',claim_ids:['KB-324'],text:'Synthetic summary',index:d.blocks.length+1}),/summary.*S01/);
test('storefront category, counts, Reading limits and Audit source/version remain separate',()=>storefrontFixture(d=>{
 const render=file=>renderPage(d.config.pages.find(p=>p.file===file),d,{version:'test',built_at:'test'});
 const home=render('index.html');
 assert.match(home,/台灣價格與上市資訊 6 項/);
 assert.match(home,/Developer 技術補充 1 項/);
 const general=render('general.html');
 assert.match(general,/data-source-category>台灣價格與上市資訊/);
 assert.match(general,/reading-conditions/);
 assert.match(general,/sources.html#claim-KB-324/);
 const source=render('sources.html');
 const card=source.split('id="claim-KB-324"')[1].split('</article>')[0];
 assert.match(card,/Apple 台灣商店／首頁/);
 assert.match(card,/Synthetic storefront locator/);
 assert.match(card,new RegExp(storeSource(d).artifact_revision));
 assert.match(card,/不據此推論影片曾宣布/);
 assert.match(card,/general.html#ref-KB-324/);
 assert.doesNotMatch(card,/Developer 原文|Developer 文件補充|官方規格頁/);
 const event=render('event.html');
 const timeline=event.split('aria-labelledby="timeline"')[1].split('</section>')[0];
 assert.doesNotMatch(timeline,/KB-32[4-9]/);
}));
test('compact web source label preserves every reviewed locator and all video time labels',()=>sourceFixture(d=>{
 const c=d.claims.find(c=>c.source==='[S02]');
 c.evidence.push({...c.evidence[0],locator:'Second synthetic locator',context:'Second original context'});
 d.coverage.page_reviews.find(r=>r.source_id==='S02').locators.push('Second synthetic locator');
 d.claims[0].evidence.push({...d.claims[0].evidence[0],start_seconds:25.125,end_seconds:26.375});
 validateData(d);
 const reader=renderPage(d.config.pages.find(p=>p.file==='event.html'),d,{version:'test',built_at:'test'});
 assert.match(reader,/\[S02\] 網頁<\/a>/);assert.doesNotMatch(reader,/網頁、網頁/);
 assert.match(reader,/\[S01\] 證據 0:10、證據 0:25<\/a>/);
 const evidence=renderPage(d.config.pages.find(p=>p.file==='sources.html'),d,{version:'test',built_at:'test'});
 const card=evidence.split('id="claim-KB-020"')[1].split('</article>')[0];
 assert.equal((card.match(/class="evidence-segment"/g)||[]).length,2);
 assert.match(card,/Synthetic locator/);assert.match(card,/Second synthetic locator/);assert.match(card,/Second original context/);
 assert.equal(c.evidence.length,2);assert.match(evidence,/0:25\.125–0:26\.375/);
}));

test('table cannot hide undeclared or unused row citations',()=>{assert.throws(()=>parseDraft('# 測試\n## 主題 {#table-topic}\n:::table table-node KB-001\n'+JSON.stringify({caption:'test',rows:[{label:'row',claim_id:'KB-002'}]})+'\n:::'),/undeclared claim/);assert.throws(()=>parseDraft('# 測試\n## 主題 {#table-topic}\n:::table table-node KB-001,KB-002\n'+JSON.stringify({caption:'test',rows:[{label:'row',claim_id:'KB-001'}]})+'\n:::'),/unused table claim/);});
test('table cannot introduce handwritten numeric cell payload',()=>{assert.throws(()=>parseDraft('# 測試\n## 主題 {#table-topic}\n:::table table-node KB-001\n'+JSON.stringify({caption:'test',rows:[{label:'row',claim_id:'KB-001',value:999}]})+'\n:::'),/invalid table row/);});
test('unknown structured value selection rejects table row',()=>fixture((f,d)=>{d.drafts['dev.html'].find(b=>b.kind==='table').table.rows[0].value_names=['UNREGISTERED'];assert.throws(()=>validateData(d),/value|field/i);}));
test('duplicate stable node ID fails',()=>{assert.throws(()=>parseDraft('# 測試\n## 主題 {#topic}\n:::summary duplicate KB-001\ntext\n:::\n:::narrative duplicate KB-001\ntext\n:::'),/duplicate node/);});

for(const file of ['index.html','event.html','sources.html','dev.html','ai-user.html','general.html'])test(`missing generated ${file} fails static audit`,()=>fixture((f,d)=>{const {out}=build(f.root);rmSync(join(out,file));assert.throws(()=>debug(out,d,{fixture:true}),/ENOENT/);}));
test('source map traces all audience references and individual table rows',()=>fixture((f,d)=>{const {out}=build(f.root);const map=JSON.parse(readFileSync(join(out,'source-map.json'),'utf8'));const entries=Array.isArray(map)?map:map.references;assert.ok(Array.isArray(entries));for(const audience of ['dev','ai-user','general']){const refs=entries.filter(r=>r.page===audience+'.html');assert.ok(refs.some(r=>r.kb==='KB-001'));assert.ok(refs.some(r=>r.kb==='KB-002'));assert.ok(refs.some(r=>r.kind==='table'&&r.rows.length>0));}}));

test('authored event summary cannot import supplemental facts',()=>sourceFixture(d=>{d.blocks.push({kind:'summary',node_id:'invalid-event-summary',topic_id:'test',section:'Test',claim_ids:['KB-020'],text:'Synthetic summary',index:d.blocks.length+1});assert.throws(()=>validateData(d),/summary|S01/i);}));
productionReject('duplicate canonical supplemental URL rejected',d=>{const duplicate=structuredClone(d.manifest.supplemental_sources.find(s=>s.source_id==='S07'));duplicate.source_id='S10';d.manifest.supplemental_sources.push(duplicate);},/duplicate/i);
for(const audience of ['dev','ai-user','general'])test(`${audience} interpolation only reads declared KB fields`,()=>fixture((f,d)=>{const b=d.drafts[audience+'.html'][0],map=new Map(d.claims.map(c=>[c.id,c]));assert.equal(interpolate('{{KB-001}}',b,map),map.get('KB-001').statement_zh);assert.equal(interpolate('{{KB-001:測試欄位}}',b,map),map.get('KB-001').structured_values[1].value);assert.throws(()=>interpolate('{{KB-999}}',b,map),/undeclared/);assert.throws(()=>interpolate('{{KB-001:不存在的欄位}}',b,map),/unknown structured/);}));
test('unselected verified claims stay in evidence center while candidates stay out',()=>sourceFixture(d=>{const c=structuredClone(d.claims[0]);c.id='KB-080';d.claims.push(c);validateData(d);const html=renderPage(d.config.pages.find(p=>p.role==='evidence'),d,{version:'test',built_at:'test'});assert.ok(html.includes('id="claim-KB-080"'));assert.ok(!html.includes('id="claim-KB-090"'));}));

test('table keeps every row citation while showing each KB condition once',()=>fixture((f,d)=>{
 const table=d.drafts['dev.html'].find(b=>b.kind==='table');table.table.rows.push({...table.table.rows[0],label:'同來源另一列'});
 const html=renderPage(d.config.pages.find(p=>p.file==='dev.html'),d,{version:'test',built_at:'test'});
 const rendered=html.split('id="node-dev-table"')[1];const tbody=rendered.split('</tbody>')[0];
 assert.equal((tbody.match(/sources.html#claim-KB-001/g)||[]).length,2);
 assert.equal((rendered.match(/data-condition-claim="KB-001"/g)||[]).length,1);
 assert.ok(!tbody.includes('class="qualifiers"'));
 assert.ok(rendered.includes('本表適用條件'));
}));
test('opening editorial has no dummy topic and does not fail factual-topic release check',()=>fixture((f,d)=>{
 const original=readFileSync(join(f.root,'content/drafts/dev.md'),'utf8');
 const draft=original.replace(/^(# .+\n)/,'$1\n:::editorial opening\n純閱讀導引。\n:::\n');d.drafts['dev.html']=parseDraft(draft);
 const html=renderPage(d.config.pages.find(p=>p.file==='dev.html'),d,{version:'test',built_at:'test'});
 assert.doesNotMatch(html,/href="#section-1"|id="section-1"/);
 assert.ok(html.indexOf('id="node-opening"')<html.indexOf('id="topic-fixture-topic"'));
 assert.ok(!releaseErrors(d).some(e=>e.includes('Authored summary')));
}));
test('technical common notices and identical symbol SDK deduplicate without hiding specific limits or differing versions',()=>sourceFixture(d=>{
 const c=d.claims.find(c=>c.id==='KB-100');c.qualifiers=['既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。','特定配件條件必須保留'];c.technical_context.sdk_availability=[{platform:'iOS',introduced:'8.0',beta:false}];
 const newer=structuredClone(c);newer.id='KB-101';newer.technical_context.sdk_availability=[{platform:'iOS',introduced:'11.0',beta:false}];d.claims.push(newer);
 const additionalLocator=structuredClone(c);additionalLocator.id='KB-102';additionalLocator.evidence.push({...additionalLocator.evidence[0],locator:'Another section in the same source revision'});d.claims.push(additionalLocator);
 d.drafts['dev.html']=parseDraft('# 測試\n## 主題 {#topic}\n:::summary first KB-100\n第一段。\n:::\n:::note repeated KB-100\n另一段。\n:::\n:::note more-evidence KB-102\n同版本的另一章節。\n:::\n:::note different KB-101\n另有版本。\n:::');
 const html=renderPage(d.config.pages.find(p=>p.file==='dev.html'),d,{version:'test',built_at:'test'});
 assert.equal((html.match(/class="callout callout-boundary technical-common-notice"/g)||[]).length,1);
 assert.equal((html.match(/data-sdk-source="\[S07\]"/g)||[]).length,2);
 assert.match(html,/特定配件條件必須保留/);assert.match(html,/iOS 8.0 起/);assert.match(html,/iOS 11.0 起/);
 assert.match(html,/id="node-more-evidence"/);assert.match(html,/sources.html#claim-KB-102/);
}));


test('six-page migration preserves old config and all authored bytes, and reruns without writes',()=>fixture((f,d)=>{
 const old=structuredClone(d.config);old.pages=old.pages.slice(0,3);const raw=JSON.stringify(old,null,4)+'\n';writeFileSync(join(f.root,'project.config.json'),raw);
 const paths=['content/knowledge-base.md','content/drafts/event.md','content/drafts/dev.md','content/audiences/dev.md','sources/event-manifest.json','sources/coverage.json'];
 const before=new Map(paths.map(p=>[p,readFileSync(join(f.root,p),'utf8')]));
 rmSync(join(f.root,'content/drafts/general.md'));rmSync(join(f.root,'content/audiences/general.md'));
 const result=migrateAudienceProject(f.root,{createStubs:true});assert.equal(result.changed,true);assert.equal(result.created.length,2);assert.equal(readFileSync(join(f.root,result.backup),'utf8'),raw);
 for(const [p,bytes] of before)assert.equal(readFileSync(join(f.root,p),'utf8'),bytes);
 const next=JSON.parse(readFileSync(join(f.root,'project.config.json')));assert.deepEqual(next.pages.slice(0,3),old.pages);assert.equal(next.pages.length,6);
 const stub=parseDraft(readFileSync(join(f.root,'content/drafts/general.md'),'utf8'));assert.equal(stub.length,1);assert.equal(stub[0].kind,'editorial');assert.deepEqual(blockClaimIds(stub[0]),[]);
 const written=readFileSync(join(f.root,'project.config.json'),'utf8');assert.deepEqual(migrateAudienceProject(f.root,{createStubs:true}),{changed:false,created:[],missing:[],backup:null});assert.equal(readFileSync(join(f.root,'project.config.json'),'utf8'),written);
}));
test('migration defaults to explicit missing authoring files and refuses unknown topology or symlink outputs',()=>fixture((f,d)=>{
 const old=structuredClone(d.config);old.pages=old.pages.slice(0,3);assert.deepEqual(migratePageConfig(d.config),d.config);assert.equal(old.pages.length,3);
 const invalid=structuredClone(old);invalid.pages.pop();assert.throws(()=>migratePageConfig(invalid),/known three-page/);
 f.json('project.config.json',old);rmSync(join(f.root,'content/drafts/general.md'));const result=migrateAudienceProject(f.root);assert.ok(result.missing.includes('content/drafts/general.md'));assert.equal(result.created.length,0);assert.throws(()=>readFileSync(join(f.root,'content/drafts/general.md')));
 f.json('project.config.json',old);symlinkSync(join(f.root,'content/drafts/dev.md'),join(f.root,'content/drafts/general.md'));assert.throws(()=>migrateAudienceProject(f.root,{createStubs:true}),/symlink/);
}));

const mappedFixture=fn=>fixture((f,d)=>{
 const m=d.manifest;
 m.player_adapter={kind:'youtube-link',timeline_mapping:{source_artifact_revision:m.artifact_revision,target_artifact_revision:'sha256:'+'a'.repeat(64),source_start_seconds:10,source_end_seconds:100,offset_seconds:-10,target_duration_seconds:90,reviewer:'fixture',reviewed_at:'2026-01-01T00:00:00Z',notes:'Synthetic alignment and external-link QA only; no original-audio review.'},verification:{canonical_url:m.canonical_url,artifact_revision:m.artifact_revision,verified_at:'2026-01-01T00:00:00Z',reviewer:'fixture',notes:'Synthetic mapped external link seek; embedded player not checked.',tested_start_seconds:10,tested_end_seconds:15,seek_works:true}};
 m.player_adapter.verification.timeline_mapping_digest=playerMappingDigest(m);
 return fn(f,d,m.player_adapter.timeline_mapping);
});
test('mapped external links preserve source evidence and expose target time without embeds',()=>mappedFixture((f,d)=>{
 const original=structuredClone({e:d.claims[0].evidence[0],coverage:d.coverage,revision:d.manifest.artifact_revision}),p=playerLink(d.manifest,d.claims[0].evidence[0]);validateData(d);
 assert.equal(p.time,'0:10–0:15');assert.equal(p.mapped_time,'0:00–0:05');assert.equal(p.mapped_start_seconds,0);assert.equal(p.mapped_end_seconds,5);assert.match(p.official,/t=0s$/);assert.equal(p.embed,null);assert.equal(p.mapping_applied,true);assert.equal(p.seek_verified,true);assert.equal(p.mapping_status,'mapped');
 assert.deepEqual({e:d.claims[0].evidence[0],coverage:d.coverage,revision:d.manifest.artifact_revision},original);
}));
test('decimal player mapping keeps exact-second floor and subsecond source precision',()=>mappedFixture((f,d,t)=>{
 assert.equal(mapPlayerSeconds(1.4,-0.4),1);assert.equal(mapPlayerSeconds(0.3,-0.2),0.1);assert.equal(mapPlayerSeconds(1e-7,2e-7),3e-7);
 Object.assign(t,{source_start_seconds:0.4,source_end_seconds:100.4,offset_seconds:-0.4,target_duration_seconds:100});d.manifest.player_adapter.verification.timeline_mapping_digest=playerMappingDigest(d.manifest);validateData(d);
 const e={...d.claims[0].evidence[0],start_seconds:1.4,end_seconds:2.4},p=playerLink(d.manifest,e);assert.match(p.official,/t=1s$/);assert.equal(p.time,'0:01.4–0:02.4');assert.equal(p.mapped_time,'0:01–0:02');
 const q=playerLink(d.manifest,{...e,start_seconds:1.525,end_seconds:2.875});assert.match(q.official,/t=1s$/);assert.equal(q.mapped_time,'0:01.125–0:02.475');
}));
test('mapped external links support a verified positive offset',()=>mappedFixture((f,d,t)=>{
 Object.assign(t,{source_start_seconds:0,source_end_seconds:100,offset_seconds:5,target_duration_seconds:105});d.manifest.player_adapter.verification.timeline_mapping_digest=playerMappingDigest(d.manifest);validateData(d);assert.match(playerLink(d.manifest,d.claims[0].evidence[0]).official,/t=15s$/);
}));
for(const [start,end] of [[0,5],[9.5,10.5],[99.5,100.5],[100,110]])test(`mapped evidence ${start}-${end} outside verified range falls back without clamping`,()=>mappedFixture((f,d)=>{
 const p=playerLink(d.manifest,{...d.claims[0].evidence[0],start_seconds:start,end_seconds:end});assert.equal(p.official,d.manifest.canonical_url);assert.equal(p.embed,null);assert.equal(p.mapped_time,null);assert.equal(p.seek_verified,false);assert.equal(p.mapping_status,'outside-verified-range');
}));
test('mapped evidence ending exactly at verified target boundary is accepted',()=>mappedFixture((f,d)=>{
 const p=playerLink(d.manifest,{...d.claims[0].evidence[0],start_seconds:99,end_seconds:100});assert.match(p.official,/t=89s$/);assert.equal(p.mapped_time,'1:29–1:30');
}));
for(const [name,mutate] of [
 ['missing seek QA',m=>m.player_adapter.verification=null],
 ['missing digest',m=>delete m.player_adapter.verification.timeline_mapping_digest],
 ['stale source revision',m=>m.player_adapter.timeline_mapping.source_artifact_revision='old-revision'],
 ['changed target snapshot',m=>m.player_adapter.timeline_mapping.target_artifact_revision='sha256:'+'b'.repeat(64)],
 ['changed range',m=>m.player_adapter.timeline_mapping.source_end_seconds=99],
 ['changed chapters',m=>m.player_adapter.timeline_mapping.chapters=[{title:'Opening',start_seconds:0}]],
 ['changed canonical URL',m=>{m.canonical_url='https://www.youtube.com/watch?v=MOCK0000002';m.publisher_verification.canonical_url=m.canonical_url;}]
])test(`player mapping rejects ${name} and runtime falls back`,()=>mappedFixture((f,d)=>{
 mutate(d.manifest);assert.throws(()=>validateData(d),/Player|mapping/);const p=playerLink(d.manifest,d.claims[0].evidence[0]);assert.equal(p.official,d.manifest.canonical_url);assert.equal(p.embed,null);assert.equal(p.seek_verified,false);assert.equal(p.mapping_status,'invalid-mapping');
}));
for(const [name,mutate] of [
 ['negative source start',t=>t.source_start_seconds=-1],
 ['reversed source range',t=>t.source_end_seconds=5],
 ['source past fixed duration',t=>t.source_end_seconds=121],
 ['negative mapped start',t=>t.offset_seconds=-11],
 ['mapped end past target duration',t=>t.target_duration_seconds=89],
 ['nonfinite offset',t=>t.offset_seconds=Infinity],
 ['empty review',t=>t.notes=''],
 ['missing target snapshot',t=>delete t.target_artifact_revision],
 ['empty chapter list',t=>t.chapters=[]],
 ['blank chapter title',t=>t.chapters=[{title:' ',start_seconds:0}]],
 ['unordered chapters',t=>t.chapters=[{title:'Later',start_seconds:10},{title:'Earlier',start_seconds:0}]],
 ['duplicate chapter times',t=>t.chapters=[{title:'First',start_seconds:0},{title:'Second',start_seconds:0}]],
 ['chapter at target end',t=>t.chapters=[{title:'Past end',start_seconds:90}]],
 ['chapter with invented field',t=>t.chapters=[{title:'Opening',start_seconds:0,claim_id:'KB-001'}]]
])test(`player mapping rejects ${name} even with a recomputed digest`,()=>mappedFixture((f,d,t)=>{
 mutate(t);d.manifest.player_adapter.verification.timeline_mapping_digest=playerMappingDigest(d.manifest);assert.throws(()=>validateData(d),/event-manifest|mapping|time interval/);
}));
test('mapped external QA never enables embedded playback',()=>mappedFixture((f,d)=>{
 d.manifest.player_adapter.kind='youtube';d.manifest.player_adapter.verification.timeline_mapping_digest=playerMappingDigest(d.manifest);assert.throws(()=>validateData(d),/external links only/);const p=playerLink(d.manifest,d.claims[0].evidence[0]);assert.equal(p.embed,null);assert.equal(p.official,d.manifest.canonical_url);
}));
test('player mapping QA must lie inside the admitted source range',()=>mappedFixture((f,d)=>{
 d.manifest.player_adapter.verification.tested_start_seconds=5;assert.throws(()=>validateData(d),/QA interval/);
}));
test('player mapping cannot reuse evidence from another source version',()=>mappedFixture((f,d)=>{
 const p=playerLink(d.manifest,{...d.claims[0].evidence[0],artifact_revision:'stale'});assert.equal(p.official,d.manifest.canonical_url);assert.equal(p.mapping_status,'invalid-evidence');assert.equal(p.seek_verified,false);
}));
test('player mapping chapters are version-bound source metadata and never change coverage',()=>mappedFixture((f,d,t)=>{
 const original=structuredClone(d.coverage);t.chapters=[{title:'Opening',start_seconds:0},{title:'Next topic',start_seconds:25}];d.manifest.player_adapter.verification.timeline_mapping_digest=playerMappingDigest(d.manifest);validateData(d);assert.deepEqual(d.coverage,original);
}));
test('player mapping digest cannot survive removal of its mapping',()=>mappedFixture((f,d)=>{
 delete d.manifest.player_adapter.timeline_mapping;assert.throws(()=>validateData(d),/digest without mapping/);assert.equal(playerLink(d.manifest,d.claims[0].evidence[0]).official,d.manifest.canonical_url);
}));

test('mapped renderer preserves source copy times, escapes chapters and labels fallback honestly',()=>mappedFixture((f,d,t)=>{
 const m=d.manifest,meta={version:'test',built_at:'test'};
 m.access_record={checked_at:'2026-01-01T00:00:00Z',reviewer:'fixture',status:'accessible',notes:'Synthetic source acquisition only.',attempts:[{method:'fixture',result:'No live source used.'}]};
 t.chapters=[{title:'Opening <script>alert(1)</script>',start_seconds:0},{title:'Next & later',start_seconds:25}];
 m.player_adapter.verification.timeline_mapping_digest=playerMappingDigest(m);
 Object.assign(d.claims[1].evidence[0],{start_seconds:110,end_seconds:115});validateData(d);
 const render=file=>renderPage(d.config.pages.find(p=>p.file===file),d,meta),card=(html,id)=>html.split(`id="claim-${id}"`)[1].split('</article>')[0];
 let sources=render('sources.html'),event=render('event.html');
 const mapped=card(sources,'KB-001'),unmapped=card(sources,'KB-002');
 assert.match(mapped,/原始證據時間/);assert.match(mapped,/data-time="0:10–0:15"/);assert.match(mapped,/目前 YouTube：約 0:00–0:05/);assert.match(mapped,/t=0s/);assert.doesNotMatch(mapped,/load-player/);
 assert.match(unmapped,/data-time="1:50–1:55"/);assert.match(unmapped,/不在已核對的播放器對應範圍/);assert.doesNotMatch(unmapped,/t=\d+s|class="mapped-time"|load-player/);
 const chapters=event.split('aria-labelledby="official-chapters"')[1].split('</section>')[0];assert.match(chapters,/t=25s/);assert.match(chapters,/<time>0:25<\/time>/);assert.match(chapters,/&lt;script&gt;alert\(1\)&lt;\/script&gt;/);assert.doesNotMatch(chapters,/<script>/);
 const timeline=event.split('aria-labelledby="timeline"')[1].split('</section>')[0],rows=timeline.match(/<li>.*?<\/li>/gs);
 assert.match(rows[0],/<time>0:00<\/time>/);assert.match(rows[1],/原始|未映射|未驗證/,'Out-of-range source seconds must not be silently labeled as YouTube time');
 m.player_adapter.verification.timeline_mapping_digest='0'.repeat(64);sources=render('sources.html');event=render('event.html');
 assert.doesNotMatch(event,/aria-labelledby="official-chapters"/);assert.doesNotMatch(sources,/class="mapped-time"|load-player|t=\d+s/);assert.match(card(sources,'KB-001'),/data-time="0:10–0:15"/);assert.match(card(sources,'KB-001'),/片段定位尚未驗證/);
 assert.doesNotMatch(sources,/已在指定官方影片頁實測代表整秒定位/,'Adapter kind alone must not claim successful seek QA');
}));
