// Reproducible local measurement, not a Lighthouse score or remote/CDN test.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {gzipSync} from 'node:zlib';
import {chromium} from 'playwright';
import {serve} from '../build/preview.mjs';
import {loadData,ROOT} from '../build/data.mjs';
import {checkPublic} from '../build/inspect.mjs';
import {outputDigest} from '../build/verification.mjs';
const d=loadData(),out=join(ROOT,'dist/web'),qa=join(ROOT,'docs/qa');checkPublic(out,d);mkdirSync(qa,{recursive:true});
const report={input_digest:d.digest,output_digest_before:outputDigest(ROOT),measured_at:new Date().toISOString(),conditions:'Loopback HTTP, one fresh Chromium context per page/width, no network or CPU throttling, awaited document.fonts.ready; gzip sizes are calculated estimates, server is uncompressed.',samples:[]};
let browser,server;
try{
 const s=await serve(out);server=s.server;browser=await chromium.launch({headless:true});report.browser=browser.version();
 for(const width of [390,1280])for(const p of d.config.pages){
  const context=await browser.newContext({viewport:{width,height:900},reducedMotion:'reduce'}),page=await context.newPage();await page.goto(s.url+'/'+p.file);await page.evaluate(()=>document.fonts.ready);
  const metrics=await page.evaluate(()=>{const n=performance.getEntriesByType('navigation')[0],r=performance.getEntriesByType('resource');return {dom_content_loaded_ms:n.domContentLoadedEventEnd,load_ms:n.loadEventEnd,font_requests:r.filter(e=>e.name.endsWith('.woff2')).length,resource_requests:r.length,resource_transfer_bytes:r.reduce((s,e)=>s+e.transferSize,0),document_transfer_bytes:n.transferSize,external_requests:r.filter(e=>new URL(e.name).origin!==location.origin).length,document_width:document.documentElement.scrollWidth,viewport_width:innerWidth,fonts_status:document.fonts.status};});
  const html=readFileSync(join(out,p.file));report.samples.push({page:p.file,width,html_bytes:html.length,estimated_gzip_bytes:gzipSync(html).length,...metrics});
  if(width===1280&&p.file==='index.html')await page.screenshot({path:join(qa,'preview-home.png')});
  if(width===1280&&p.audience){const id={'dev':'node-dev-ai-intents','ai-user':'node-user-ai-shopping','general':'node-general-duo-software'}[p.audience];await page.locator('#'+id).scrollIntoViewIfNeeded();await page.screenshot({path:join(qa,`preview-${p.audience}-feature.png`)});}
  await context.close();
 }
 const fc=await browser.newContext(),fp=await fc.newPage(),failures=[];
 await fc.route('**/assets/base.css',route=>route.fulfill({contentType:'text/css',body:readFileSync(join(out,'assets/base.css'),'utf8')+'\nbody{font-family:"Noto Sans TC",sans-serif !important}'}));
 fp.on('requestfailed',r=>failures.push(r.url()));await fp.goto(s.url+'/ai-user.html');await fp.evaluate(()=>document.fonts.ready);
 report.forced_self_hosted_font={purpose:'Exercise Noto Sans TC when system fallback is unavailable; test-only stylesheet override',font_requests:await fp.evaluate(()=>performance.getEntriesByType('resource').filter(e=>e.name.endsWith('.woff2')).length),failures,loaded:await fp.evaluate(()=>document.fonts.check('16px "Noto Sans TC"','繁體中文'))};
 if(!report.forced_self_hosted_font.font_requests||failures.length||!report.forced_self_hosted_font.loaded)throw Error('Self-hosted font fallback failed');
 await fc.close();report.output_digest_after=outputDigest(ROOT);if(report.output_digest_before!==report.output_digest_after)throw Error('Output changed during measurement');report.status='passed';
}catch(e){report.status='failed';report.error=e.message;process.exitCode=1;}
finally{if(browser)await browser.close();if(server)await new Promise(r=>server.close(r));writeFileSync(join(qa,'performance.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));}
