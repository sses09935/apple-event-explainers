import assert from 'node:assert/strict';
import {chromium} from 'playwright';
import {join} from 'node:path';
import {mkdirSync,writeFileSync} from 'node:fs';
import {build} from '../build/build.mjs';
import {serve} from '../build/preview.mjs';
import {ROOT,loadData,allBlocks,blockClaimIds} from '../build/data.mjs';
import {playerLink} from '../build/player.mjs';
import {makeFixture} from './fixtures/make.mjs';
import {outputDigest} from '../build/verification.mjs';
const qa=join(ROOT,'docs/qa');mkdirSync(qa,{recursive:true});
const report={started_at:new Date().toISOString(),browser:null,status:'running',checks:[],screenshots:[],capture_regions:[],limits:['Chromium only; Firefox, Safari/WebKit and assistive-technology audit not run.','Embedded-player tests use mocks. Actual official URL seek observations are separately recorded in event-manifest; E2E does not validate external media.','Documents taller than 16000 CSS pixels use top/middle/bottom viewport screenshots, not a full-page raster. Sources uses its top viewport. These are representative visual records; all DOM and interaction assertions still run independently.']};
let browser,production,mock;const fixture=makeFixture();
const record=(name,detail={})=>{report.checks.push({name,result:'pass',...detail});console.log('PASS',name);};
async function fit(page){assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Page-level horizontal overflow');}
async function capture(page,name){
 // Keep full-page rasters bounded: expanded Audit articles can be extremely tall.
 // Record actual ordinary-scroll regions instead of stretching the viewport or
 // hiding sticky controls. Screenshot sampling does not replace content checks.
 await page.evaluate(async()=>{document.activeElement?.blur();window.scrollTo({top:0,behavior:'instant'});await document.fonts.ready;await new Promise(r=>setTimeout(r,300));document.querySelectorAll('.table-wrap').forEach(el=>el.scrollTo({left:0,behavior:'instant'}));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));});
 const size=await page.evaluate(()=>({height:document.documentElement.scrollHeight,viewport:innerHeight}));
 const sampled=size.height>16000&&!name.startsWith('sources-');
 const positions=sampled?[['top',0],['middle',Math.floor((size.height-size.viewport)/2)],['bottom',size.height-size.viewport]]:[['top',0]];
 for(const [region,y]of positions){
  await page.evaluate(async y=>{window.scrollTo({top:y,behavior:'instant'});await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));},y);
  await fit(page);
  const file=region==='top'?name:name.replace(/\.png$/,`-${region}.png`);
  const fullPage=!sampled&&!name.startsWith('sources-');
  await page.screenshot({path:join(qa,file),fullPage,timeout:45000});report.screenshots.push(file);
  report.capture_regions.push({file,mode:fullPage?'full-page':'viewport',document_height:size.height,...await page.evaluate(()=>({scroll_y:scrollY,viewport_height:innerHeight,viewport_width:innerWidth}))});
 }
 await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
}
async function visibleTarget(locator){await locator.scrollIntoViewIfNeeded();assert.equal(await locator.evaluate(el=>{const r=el.getBoundingClientRect(),hit=document.elementFromPoint(r.x+r.width/2,r.y+r.height/2);return hit===el||el.contains(hit);}),true,'Control is obscured');}
try{
 const built=build(ROOT,{profile:process.env.OUTPUT_PROFILE}),out=built.out;report.output_profile=built.meta.profile;report.output_digest_before=outputDigest(ROOT);production=await serve(out);mock=await serve(build(fixture.root).out);
 browser=await chromium.launch({headless:true});report.browser=`Chromium ${browser.version()}`;
 // Bound every assertion/action so a broken interaction cannot hang the QA job.
 const newContext=browser.newContext.bind(browser);
 browser.newContext=async options=>{const context=await newContext(options);context.setDefaultTimeout(10000);context.setDefaultNavigationTimeout(15000);return context;};
 const data=built.data;report.input_digest=data.digest;report.formal_blocks=data.blocks.length;report.audience_nodes=allBlocks(data).filter(b=>b.page!=='event.html').length;assert.equal(data.config.pages.length,6);report.audience_routes=data.config.pages.filter(p=>p.audience).map(p=>p.file);assert.deepEqual(report.audience_routes.sort(),['ai-user.html','dev.html','general.html']);
 for(const width of [390,768,1280]){
  const context=await browser.newContext({viewport:{width,height:900},colorScheme:'light',reducedMotion:'reduce',permissions:['clipboard-read','clipboard-write']});
  const errors=[],requests=[];context.on('page',p=>{p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text());});p.on('requestfailed',r=>errors.push(`${r.failure()?.errorText}: ${r.url()}`));p.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});p.on('request',r=>requests.push(r.url()));});
  const page=await context.newPage();
  for(const p of data.config.pages){
   const response=await page.goto(`${production.url}/${p.file}`);assert.equal(response.status(),200);
   assert.equal(await page.locator('h1').count(),1);assert.equal(await page.locator('body').getAttribute('data-page-role'),p.role);
   assert.equal(await page.locator('[data-site-version]').innerText(),`v${built.meta.version}`);
   assert.equal(await page.locator('[data-built-at]').getAttribute('datetime'),built.meta.built_at);
   assert.match(await page.locator('[data-built-at]').innerText(),/UTC\+08:00/);
   if(built.meta.commit_url){assert.equal(await page.locator('[data-source-commit]').getAttribute('href'),built.meta.commit_url);assert.equal(await page.locator('[data-source-committed-at]').getAttribute('datetime'),built.meta.source_committed_at);}
   if(data.config.publication_status==='published'){assert.match(await page.locator('.draft-strip').innerText(),new RegExp(`^正式版 v${built.meta.version.replaceAll('.','\\.')}`));assert.doesNotMatch(await page.title(),/草稿/);assert.doesNotMatch(await page.locator('body').innerText(),/資訊缺口/);}
   if(!data.manifest.canonical_url)assert.match(await page.locator('body').innerText(),/尚未填入發表會資料/);
   if(built.meta.profile!=='production'&&data.config.publication_status==='draft'&&data.manifest.access_record?.status!=='blocked'&&data.claims.some(c=>c.verification==='verified'))assert.match(await page.locator('.draft-strip').innerText(),/^草稿 · 已核對子集 · (?:全片影音與整體語意審查尚未完成|全片影音查核(?:已完成|尚未完成) · 整體語意審查(?:已通過|未通過|尚未完成))$/);
   if(data.manifest.access_record?.status==='blocked'){
    assert.match(await page.locator('body').innerText(),/證據存取受阻/);
    if(p.role==='evidence'){
     assert.ok(await page.locator('#access').isVisible());
     assert.equal(await page.locator('section[aria-labelledby="source-S01"] a').first().getAttribute('href'),data.manifest.canonical_url);
     assert.equal(await page.locator('iframe,.load-player').count(),0);
    }
   }
   if(p.role==='reader'){const blocks=data.drafts[p.file];assert.equal(await page.locator('.claim-block').count(),blocks.filter(b=>blockClaimIds(b).length>0).length);assert.equal(await page.locator('.editorial-block').count(),blocks.filter(b=>b.kind==='editorial').length);if(p.audience){assert.ok(blocks.length>0,'Audience draft must be nonempty');assert.equal(await page.locator('body').getAttribute('data-audience'),p.audience);}}
   if(data.blocks.length && p.role==='evidence')assert.equal(await page.locator('.evidence-card').count(),data.claims.filter(c=>c.verification==='verified').length);
   if(p.role==='home'){for(const audience of ['dev','ai-user','general'])assert.ok(await page.locator(`main a[href="${audience}.html"]`).first().isVisible());}
   await fit(page);
   await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.className),'skip-link');
   await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>document.activeElement.id),'content');
   await page.locator('.scheme-toggle').click();assert.equal(await page.locator('html').getAttribute('data-color-scheme'),'dark');
   await fit(page);await page.locator('.scheme-toggle').click();
   await capture(page,`${p.file.replace('.html','')}-${width}-light.png`);
   if(data.manifest.access_record?.status==='blocked' && p.role==='evidence'){
    await page.locator('section[aria-labelledby="access"] .audit-details summary').press('Enter');
    assert.ok(await page.locator('section[aria-labelledby="access"] li').first().isVisible());
   }
  }
  for(const reader of data.config.pages.filter(p=>p.role==='reader')){
  await page.goto(`${production.url}/${reader.file}`);
  while(await page.locator('html').getAttribute('data-font-scale')!=='100'){if(await page.locator('html').getAttribute('data-font-scale')==='90')await page.locator('.fs-inc').click();else await page.locator('.fs-dec').click();}
  assert.equal(await page.locator('.tools-fold').getAttribute('open')!==null,width>760);
  await page.locator('[data-reader-mode-set="audit"]').click();assert.equal(await page.locator('html').getAttribute('data-reader-mode'),'audit');
  await page.locator('[data-reader-mode-set="reading"]').click();
  await page.locator('.fs-inc').click();await page.locator('.fs-inc').click();assert.equal(await page.locator('.fs-inc').isDisabled(),true);assert.equal(await page.locator('html').getAttribute('data-font-scale'),'120');
  await page.reload();assert.equal(await page.locator('html').getAttribute('data-font-scale'),'120');
  await fit(page);
  if(reader.audience&&width===390){
   const longTables=page.locator('.node-table > .table-wrap');let scrolled=0;
   for(const table of await longTables.all()){
    await table.scrollIntoViewIfNeeded();await fit(page);
    if(await table.evaluate(el=>el.scrollWidth>el.clientWidth)){
     await table.focus();await page.keyboard.press('ArrowRight');
     await page.waitForFunction(el=>el.scrollLeft>0,await table.elementHandle());scrolled++;await table.evaluate(el=>el.scrollLeft=0);
    }
   }
   const apiCodes=page.locator('main article:not(.editorial-block) > :not(.audit-details) code');
   for(const code of await apiCodes.all()){await code.scrollIntoViewIfNeeded();await fit(page);}
   await capture(page,`${reader.audience}-390-font120.png`);
   record(`${reader.file}: complete article at 390px and 120% font`,{tables:await longTables.count(),keyboard_scroll_tables:scrolled,api_symbols:await apiCodes.count(),page_overflow:false});
  }
  await page.locator('.fs-dec').click();await page.locator('.fs-dec').click();await page.locator('.fs-dec').click();assert.equal(await page.locator('.fs-dec').isDisabled(),true);assert.equal(await page.locator('html').getAttribute('data-font-scale'),'90');await page.locator('.fs-inc').click();
  if(width<=760)await page.locator('.tools-fold summary').click();
  const searchTarget=reader.audience?page.locator('[id^="topic-"]').first():page.locator('#timeline');
  const targetId=await searchTarget.getAttribute('id');
  const searchTitle=(await searchTarget.innerText()).trim();
  await page.locator('#page-search').fill(searchTitle);assert.match(await page.locator('#search-status').innerText(),/筆結果/);
  await page.locator('#page-search').press('Enter');assert.equal(await page.evaluate(()=>document.activeElement.id),targetId);
  await page.locator('#page-search').fill('不存在的搜尋XYZ');assert.equal(await page.locator('#search-status').innerText(),'找不到符合項目');await page.locator('#page-search').press('Escape');assert.equal(await page.locator('#page-search').inputValue(),'');
  await page.locator(`.side-toc a[href="#${targetId}"]`).click();assert.equal(await page.evaluate(()=>document.activeElement.id),targetId);
  await page.waitForFunction(id=>document.querySelector('.side-toc a.toc-current')?.hash==='#'+id,targetId);
  if(reader.audience){
   const switchers=searchTarget.locator('xpath=following-sibling::nav[1]').locator('a[href*=".html#topic-"]');assert.equal(await switchers.count(),2);
   for(const href of await switchers.evaluateAll(links=>links.map(a=>a.getAttribute('href')))){assert.ok(href.endsWith('#'+targetId));const response=await page.goto(production.url+'/'+href);assert.equal(response.status(),200);assert.ok(await page.locator('#'+targetId).isVisible());assert.ok(page.url().endsWith(href));}await page.goto(production.url+'/'+reader.file);
  }
  await page.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));await page.locator('.back-top.show').waitFor();await visibleTarget(page.locator('.back-top'));await page.locator('.back-top').click();assert.equal(await page.evaluate(()=>document.activeElement.id),'page-title');
  const readerBlocks=data.drafts[reader.file];
  const selected=[...new Set(readerBlocks.flatMap(blockClaimIds))].map(id=>data.claims.find(c=>c.id===id));
  const videos=selected.filter(c=>c.source==='[S01]');
  const reps=[videos[0],videos[Math.floor(videos.length/2)],videos.at(-1),selected.find(c=>data.manifest.supplemental_sources.find(s=>'['+s.source_id+']'===c.source)?.source_type==='product_specs'),selected.find(c=>c.technical_context)].filter((c,i,a)=>c&&a.findIndex(x=>x?.id===c.id)===i);
  for(const c of reps){
   await page.goto(production.url+'/'+reader.file);
   await page.locator(`.claim-block[data-kb~="${c.id}"] .source-ref[href="sources.html#claim-${c.id}"]`).first().click();await page.waitForLoadState('load');
   assert.ok(page.url().endsWith('/sources.html#claim-'+c.id));
   const card=page.locator('#claim-'+c.id);assert.ok(await card.isVisible());
   assert.equal(await card.locator('iframe').count(),0);
   assert.equal(await card.locator('.evidence-segment').count(),c.evidence.length);
   for(const [index,e]of c.evidence.entries()){
    const segment=card.locator('.evidence-segment').nth(index);
    if(e.source_id==='S01'){
     const expected=playerLink(data.manifest,e);assert.equal(await segment.locator('.video-actions a').getAttribute('href'),expected.official);
     await segment.locator('.copy-time').click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),expected.time);
    }else{
     const source=data.manifest.supplemental_sources.find(s=>s.source_id===e.source_id);
     assert.equal(await segment.locator('a').first().getAttribute('href'),source.canonical_url);
     assert.ok((await segment.innerText()).includes(e.locator));
     if(c.technical_context)assert.match(await card.innerText(),/不構成特定產品相容性/);
    }
   }
   await card.locator(`.backrefs a[href^="${reader.file}#ref-${c.id}-"]`).last().click();await page.waitForLoadState('load');assert.ok(page.url().includes('/'+reader.file+'#ref-'+c.id));
  }
  if(reps.length)record(`${reader.file}: citations, return links and precise copied times at ${width}px`,{representative_claim_ids:reps.map(c=>c.id)});
  await page.goto(production.url+'/'+reader.file);await page.locator('[data-reader-mode-set="audit"]').click();await page.locator('.scheme-toggle').click();await fit(page);await capture(page,`${reader.file.replace('.html','')}-${width}-dark-audit.png`);await page.locator('[data-reader-mode-set="reading"]').click();await page.locator('.scheme-toggle').click();
  }
  const keys=await page.evaluate(()=>Object.keys(localStorage));assert.ok(keys.every(k=>k.startsWith('apple-event-explainers:')));
  assert.ok(requests.every(url=>url.startsWith(production.url)),'External requests before player consent');assert.deepEqual(errors,[]);
  record(`Production pages and reader controls at ${width}px`,{pages:data.config.pages.length,console_errors:0,failed_resources:0,page_overflow:false});
  await context.close();
 }
 // Rich content is built only in an isolated temporary project; no fixture HTML enters dist/web.
 for(const width of [390,768,1280]){
  const context=await browser.newContext({viewport:{width,height:900},colorScheme:'light',reducedMotion:'reduce',permissions:['clipboard-read','clipboard-write']});
  const errors=[];const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  await page.goto(mock.url+'/event.html');await fit(page);
  if(width<=760)await page.locator('.tools-fold summary').click();
  await page.locator('#page-search').fill('第二個主題');
  assert.equal(await page.locator('#search-status').innerText(),'1 筆結果');
  await page.locator('#page-search').press('Enter');assert.equal(await page.evaluate(()=>document.activeElement.id),'section-2');
  await page.locator('#page-search').fill('');
  assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
  await page.goto(mock.url+'/dev.html');
  const table=page.locator('.node-table > .table-wrap').first();await table.scrollIntoViewIfNeeded();
  const scrollable=await table.evaluate(el=>el.scrollWidth>el.clientWidth);
  if(width===390)assert.equal(scrollable,true,'Narrow fixture must exercise keyboard scrolling');
  if(scrollable){await table.focus();await page.keyboard.press('ArrowRight');await page.waitForFunction(()=>document.querySelector('.node-table > .table-wrap').scrollLeft>0);}
  await fit(page);await capture(page,`fixture-reader-${width}-light.png`);
  await page.locator('[data-reader-mode-set="audit"]').click();assert.equal(await page.locator('.audit-details:not([open])').count(),0);
  await page.locator('[data-reader-mode-set="reading"]').click();assert.equal(await page.locator('.audit-details[open]').count(),0);
  await page.locator('.claim-block .source-ref').first().click();assert.ok(page.url().endsWith('/sources.html#claim-KB-001'));assert.equal(await page.locator('#claim-KB-001').count(),1);
  assert.equal(await page.locator('iframe').count(),0);assert.equal(await page.locator('.load-player').count(),0);
  await page.locator('#claim-KB-001 .copy-time').click();assert.equal(await page.evaluate(()=>navigator.clipboard.readText()),'0:10–0:15');
  await page.locator('#claim-KB-001 .audit-details summary').press('Enter');assert.equal(await page.locator('#claim-KB-001 .audit-details').getAttribute('open')!==null,true);
  await page.locator('[data-reader-mode-set="audit"]').click();await page.locator('.scheme-toggle').click();await fit(page);
  await capture(page,`fixture-evidence-${width}-dark.png`);
  await page.locator('#claim-KB-001 .backrefs a[href="event.html#ref-KB-001-1"]').click();assert.ok(page.url().endsWith('event.html#ref-KB-001-1'));
  await fit(page);assert.deepEqual(errors,[]);record(`Fixture evidence, return links, responsive table and dark audit at ${width}px`,{keyboard_horizontal_scroll:scrollable?'passed':'not needed: table fits',page_overflow:false});await context.close();
 }
 const disabled=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:900}});
 const np=await disabled.newPage();await np.goto(mock.url+'/event.html');assert.ok(await np.locator('.source-ref').first().isVisible());assert.ok(await np.locator('.qualifiers').first().isVisible());assert.equal(await np.locator('.js-only').first().isVisible(),false);await np.locator('.claim-block .source-ref').first().click();assert.ok(await np.locator('#claim-KB-001').isVisible());assert.equal(await np.locator('iframe').count(),0);assert.ok(await np.locator('#claim-KB-001 .video-actions a').isVisible());await np.locator('#claim-KB-001 .audit-details summary').press('Enter');assert.equal(await np.locator('#claim-KB-001 .audit-details').getAttribute('open')!==null,true);await fit(np);await disabled.close();record('No-JS: readable claims, limits, citations, official links and native evidence disclosure');
 const productionNoJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:900}});
 const pj=await productionNoJS.newPage();await pj.goto(production.url+'/event.html');
 const noJSRepresentatives=[];
 for(const reader of data.config.pages.filter(p=>p.role==='reader')){
  const publicClaims=[...new Set(data.drafts[reader.file].flatMap(blockClaimIds))].map(id=>data.claims.find(c=>c.id===id));
  const categories=[publicClaims.find(c=>c.source==='[S01]'),publicClaims.find(c=>c.source!=='[S01]'&&!c.technical_context),publicClaims.find(c=>c.technical_context)].filter(Boolean);
  for(const c of categories){await pj.goto(production.url+'/'+reader.file);const block=pj.locator(`.claim-block[data-kb~="${c.id}"]`).first();assert.ok(await block.locator('[data-source-category]').first().isVisible());if(c.qualifiers.length)assert.ok(await block.locator('.qualifiers').first().isVisible());await block.locator(`.source-ref[href="sources.html#claim-${c.id}"]`).first().click();assert.ok(await pj.locator('#claim-'+c.id).isVisible());await fit(pj);}
  noJSRepresentatives.push({page:reader.file,claim_ids:categories.map(c=>c.id)});
 }
 await productionNoJS.close();record('All reader routes without JS preserve source categories, limits and evidence',{representatives:noJSRepresentatives});
 // Mock a verified adapter; intercept the embed, never contact a fake external video.
 const adapter={kind:'youtube',verification:{canonical_url:fixture.manifest.canonical_url,artifact_revision:'fixture-r1',verified_at:'2026-01-01T00:00:00Z',reviewer:'fixture',notes:'Mock only',tested_start_seconds:10,tested_end_seconds:15,seek_works:true}};
 fixture.json('sources/event-manifest.json',{...fixture.manifest,player_adapter:adapter});build(fixture.root);
 const pc=await browser.newContext();let embeds=0;await pc.route('https://www.youtube-nocookie.com/**',async route=>{embeds++;await route.fulfill({status:200,contentType:'text/html',body:'<!doctype html><title>Mock player</title><p>Mock only</p>'});});
 const pp=await pc.newPage();await pp.goto(mock.url+'/sources.html');assert.equal(embeds,0);await pp.locator('.load-player').first().click();await pp.locator('iframe').waitFor();assert.equal(await pp.locator('iframe').count(),1);assert.match(await pp.locator('iframe').getAttribute('src'),/start=10&end=15&autoplay=0/);await pp.waitForFunction(()=>document.querySelector('iframe')?.contentWindow!==null);assert.equal(embeds,1);assert.equal(await pp.locator('.load-player').first().isDisabled(),true);await pp.evaluate(()=>window.scrollTo(0,document.body.scrollHeight));assert.equal(embeds,1);record('Mock adapter: consent load, bounded seek query, no autoplay or scroll-induced playback');await pc.close();
 const fc=await browser.newContext();await fc.route('https://www.youtube-nocookie.com/**',r=>r.abort());const fp=await fc.newPage();await fp.goto(mock.url+'/sources.html');const failedEmbed=fp.waitForEvent('requestfailed',{predicate:r=>r.url().startsWith('https://www.youtube-nocookie.com/')});await fp.locator('.load-player').first().click();await failedEmbed;assert.ok(await fp.locator('#claim-KB-001 .video-actions a').isVisible());assert.match(await fp.locator('.video-panel').first().innerText(),/影片入口/);record('Mock player failure preserves video link, time and body');await fc.close();
 const sc=await browser.newContext({colorScheme:'dark'});const sp=await sc.newPage();await sp.goto(production.url);assert.equal(await sp.locator('html').getAttribute('data-color-scheme'),'dark');await sp.emulateMedia({colorScheme:'light'});await sp.waitForFunction(()=>document.documentElement.dataset.colorScheme==='light');await sc.close();record('System color scheme follows changes without manual preference');
 const bc=await browser.newContext();await bc.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('denied')};Storage.prototype.setItem=()=>{throw Error('denied')};});const bp=await bc.newPage();await bp.goto(production.url+'/event.html');await bp.locator('[data-reader-mode-set="audit"]').click();assert.equal(await bp.locator('html').getAttribute('data-reader-mode'),'audit');await bc.close();record('Reader controls survive unavailable localStorage');
 report.output_digest_after=outputDigest(ROOT);assert.equal(report.output_digest_before,report.output_digest_after,'Production output changed during browser verification');report.status='passed';
}catch(e){report.status='failed';report.failure=e.message;console.error(e);process.exitCode=1;}
finally{
 if(browser)await browser.close();if(production)await new Promise(r=>production.server.close(r));if(mock)await new Promise(r=>mock.server.close(r));fixture.cleanup();report.finished_at=new Date().toISOString();writeFileSync(join(qa,'browser-results.json'),JSON.stringify(report,null,2)+'\n');
}
