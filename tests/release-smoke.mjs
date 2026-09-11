// Full positive release-gate exercise in an OS temporary copy only.
// Synthetic assertions here never approve a real publisher, video, or release.
import assert from 'node:assert/strict';
import {cpSync,readFileSync,writeFileSync,mkdirSync,readdirSync,statSync} from 'node:fs';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {publicFiles} from '../build/public-tree.mjs';
import {makeFixture} from './fixtures/make.mjs';
import {ROOT,loadData,hash} from '../build/data.mjs';
const f=makeFixture(),before=loadData().digest;
const qa=join(ROOT,'docs/qa');mkdirSync(qa,{recursive:true});
const report={started_at:new Date().toISOString(),status:'running',scope:'Synthetic full verify:release in isolated OS temporary copy; not real content or video approval',steps:[]};
const output=[];
function publicDigest(dir){return hash(JSON.stringify(readdirSync(dir).sort().map(name=>{const p=join(dir,name);return [name,statSync(p).isDirectory()?publicDigest(p):hash(readFileSync(p))];})));}
const beforePublic=publicDigest(join(ROOT,'dist/web'));
try{
 for(const p of publicFiles(ROOT))if(!p.startsWith('content/')&&!p.startsWith('sources/')&&p!=='project.config.json'){mkdirSync(join(f.root,p,'..'),{recursive:true});cpSync(join(ROOT,p),join(f.root,p));}
 // A separate neutral scenario, not the FIXTURE_ONLY leak sentinel used by unit tests.
 // These files and every generated page remain inside f.root until cleanup.
 f.json('sources/event-manifest.json',{...f.manifest,title:'隔離工程測試影片（合成資料）'});
 const claims=f.claims.map((c,i)=>({...c,statement_zh:`隔離工程測試主張 ${i+1}，不對應任何真實影片。`}));
 writeFileSync(join(f.root,'content/knowledge-base.md'),'# 事件事實庫\n\n'+claims.map(c=>`### ${c.id}\n\n\`\`\`json\n${JSON.stringify(c,null,2)}\n\`\`\`\n`).join('\n'));
 const config=JSON.parse(readFileSync(join(f.root,'project.config.json')));config.publication_status='release-ready';config.output={profile:'preview',public_base_url:'https://synthetic-publication-fixture.web.app'};f.json('project.config.json',config);
 const review=JSON.parse(readFileSync(join(f.root,'sources/semantic-review.json')));review.input_digest=loadData(f.root).digest;f.json('sources/semantic-review.json',review);
 for(const args of [['ci','--offline','--ignore-scripts','--no-audit','--no-fund'],['run','verify:release'],['run','verify:production']]){
  const r=spawnSync('npm',args,{cwd:f.root,env:{...process.env,...(args.includes('test:e2e')?{OUTPUT_PROFILE:'production'}:{})},encoding:'utf8',timeout:600000,maxBuffer:4*1024*1024});
  output.push(`$ npm ${args.join(' ')}\n${r.stdout||''}${r.stderr||''}`);
  report.steps.push({command:`npm ${args.join(' ')}`,exit_code:r.status,error:r.error?.message});
  assert.equal(r.status,0,`Temporary-copy command failed: npm ${args.join(' ')}`);
 }
 const browser=JSON.parse(readFileSync(join(f.root,'docs/qa/browser-results.json')));
 assert.equal(browser.status,'passed');assert.equal(browser.formal_blocks,2);assert.deepEqual(browser.audience_routes,['ai-user.html','dev.html','general.html']);assert.equal(browser.audience_nodes,9);
 assert.equal(browser.output_profile,'production');
 report.browser={output_profile:browser.output_profile,status:browser.status,formal_blocks:browser.formal_blocks,audience_routes:browser.audience_routes,audience_nodes:browser.audience_nodes,checks:browser.checks.length};
 report.status='passed';
}catch(e){report.status='failed';report.error=e.message;process.exitCode=1;}
finally{
 f.cleanup();report.temporary_copy_removed=true;
 report.formal_sources_unchanged=before===loadData().digest;
 report.formal_output_unchanged=beforePublic===publicDigest(join(ROOT,'dist/web'));
 if(!report.formal_sources_unchanged||!report.formal_output_unchanged){report.status='failed';process.exitCode=1;}
 report.finished_at=new Date().toISOString();
 writeFileSync(join(qa,'release-fixture-output.txt'),output.join('\n'));
 writeFileSync(join(qa,'release-fixture-results.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));
}
