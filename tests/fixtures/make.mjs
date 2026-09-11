// FIXTURE_ONLY. Synthetic engineering material, not Apple/event facts. Never render in real dist/web.
import {realpathSync,mkdtempSync,mkdirSync,cpSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {ROOT,loadData} from '../../build/data.mjs';
const when='2026-01-01T00:00:00Z';
export function makeFixture({empty=false}={}){
 const root=realpathSync(mkdtempSync(join(tmpdir(),'apple-event-fixture-')));
 cpSync(join(ROOT,'package.json'),join(root,'package.json'));
 for(const file of ['design','assets/fonts/noto-sans-tc','NOTICE','LICENSE']){mkdirSync(join(root,file,'..'),{recursive:true});cpSync(join(ROOT,file),join(root,file),{recursive:true});}
 for(const f of ['project.config.json','content/knowledge-base.md','content/drafts/event.md','sources/event-manifest.json','sources/coverage.json','sources/semantic-review.json']){mkdirSync(join(root,f,'..'),{recursive:true});cpSync(join(ROOT,f),join(root,f));}
 const json=(file,value)=>writeFileSync(join(root,file),JSON.stringify(value,null,2)+'\n');
 const c=JSON.parse(readFileSync(join(root,'project.config.json')));c.publication_status='draft';c.pages=[{file:'index.html',role:'home',title:'測試首頁'},{file:'event.html',role:'reader',title:'測試發表會',draft:'content/drafts/event.md'},{file:'sources.html',role:'evidence',title:'測試證據'},...['dev','ai-user','general'].map(audience=>({file:audience+'.html',role:'reader',audience,title:{dev:'開發者版','ai-user':'AI 使用者版',general:'普羅大眾版'}[audience],draft:'content/drafts/'+audience+'.md'}))];c.deployment={target_firebase_project:null,allow_remote_write:false,allow_deploy:false};c.content_scope_date='2026-01-01';c.content_checked_at=when;json('project.config.json',c);
 const m={schema_version:3,source_type:'event_video',language:null,source_id:'S01',access_record:null,supplemental_sources:[],canonical_url:'https://www.youtube.com/watch?v=MOCK0000001',title:'FIXTURE_ONLY 測試影片',publisher_verification:{status:'verified',publisher:'Apple',canonical_url:'https://www.youtube.com/watch?v=MOCK0000001',verified_at:when,reviewer:'fixture test',method:'Synthetic test assertion only; not a real publisher verification',evidence_url:'https://www.apple.com/test-only/'},artifact_revision:'fixture-r1',duration_seconds:120,timeline_basis:{kind:'canonical-video-start',offset_seconds:0,notes:'Synthetic start'},acquired_at:when,subtitle_type:'manual',available_modalities:{subtitles:true,audio:true,visual:true},player_adapter:{kind:'official-link',verification:null}};
 json('sources/event-manifest.json',m);
 json('sources/coverage.json',{schema_version:2,source_id:'S01',page_reviews:[],artifact_revision:'fixture-r1',required_scope:[{start_seconds:0,end_seconds:120,modalities:['audio','visual']}],segments:[{id:'C01',start_seconds:0,end_seconds:120,acquired:['subtitles','audio','visual'],subtitles_read:true,audio_checked:true,visual_viewed:true,review_record:{reviewer:'fixture',reviewed_at:when,notes:'Synthetic coverage only'}}]});
 const claims=[1,2].map(n=>({id:`KB-00${n}`,source:'[S01]',statement_zh:`FIXTURE_ONLY 中性排版測試段落 ${n}，用來檢查字級與證據。`,subject:`排版案例 ${n}`,topic:`測試主題 ${n}`,claim_type:n===1?'performance-claim':'specification',verification:'verified',availability_status:'unknown',qualifiers:['僅供本機測試；不是產品資訊。'],structured_values:[{name:'未填規格',state:'unknown',value:null,unit:null},{name:'測試欄位',state:'known',value:'長欄位內容 '.repeat(18),unit:null}],evidence:[{source_id:'S01',artifact_revision:'fixture-r1',start_seconds:n*10,end_seconds:n*10+5,modality:'both',context:'測試上下文，沒有真實影片。'}],review_record:{reviewer:'fixture reviewer',reviewed_at:when,notes:'Mock record only',coverage_ids:['C01']}}));
 writeFileSync(join(root,'content/knowledge-base.md'),'# 事件事實庫\n\n'+claims.map(c=>`### ${c.id}\n\n\`\`\`json\n${JSON.stringify(c,null,2)}\n\`\`\`\n`).join('\n'));
 writeFileSync(join(root,'content/drafts/event.md'),'# 發表會整理\n\n## 中性版面測試\n\n:::claim KB-001\n'+('中性排版測試文字，檢查閱讀節奏與行距。\n\n'.repeat(10))+'::: \n'.trim()+'\n\n## 第二個主題\n\n:::claim KB-002\n\n:::');
 for(const audience of ['dev','ai-user','general']){
  mkdirSync(join(root,'content/audiences'),{recursive:true});
  writeFileSync(join(root,`content/audiences/${audience}.md`),`# ${audience} 合成受眾規格\n僅測試閱讀路徑與差異，不含產品事實。\n`);
  const prose={dev:'從證據欄位到引用定位，確認限制與查核介面如何配合。', 'ai-user':'先用日常操作問題理解段落，再按來源連結查看條件。',general:'先閱讀兩個測試案例的整體重點，再回到需要的細節。'}[audience];
  writeFileSync(join(root,`content/drafts/${audience}.md`),`# ${audience} 測試文章\n\n## 共同測試主題 {#fixture-topic}\n\n:::summary ${audience}-summary KB-001,KB-002\n${prose}\n:::\n\n:::narrative ${audience}-explanation KB-001,KB-002\n${(prose+'\n\n').repeat(6)}:::\n\n:::table ${audience}-table KB-001,KB-002\n${JSON.stringify({caption:'合成資料整合表',rows:[{label:'第一案例',claim_id:'KB-001',value_names:['測試欄位']},{label:'第二案例',claim_id:'KB-002',value_names:['測試欄位']}]})}\n:::\n`);
 }
 json('sources/semantic-review.json',{schema_version:1,input_digest:null,reviewer:null,reviewed_at:null,decision:'pending',scope:[],notes:null});
 if(empty){
  c.content_scope_date=null;c.content_checked_at=null;json('project.config.json',c);
  Object.assign(m,{canonical_url:null,title:null,publisher_verification:null,artifact_revision:null,duration_seconds:null,timeline_basis:null,acquired_at:null,subtitle_type:null,available_modalities:{subtitles:null,audio:null,visual:null}});
  json('sources/event-manifest.json',m);
  json('sources/coverage.json',{schema_version:2,source_id:'S01',page_reviews:[],artifact_revision:null,required_scope:[],segments:[]});
  writeFileSync(join(root,'content/knowledge-base.md'),'# 事件事實庫\n');
  for(const name of ['event','dev','ai-user','general'])writeFileSync(join(root,`content/drafts/${name}.md`),'# 發表會整理\n');
  return {root,json,claims:[],manifest:m,cleanup:()=>rmSync(root,{recursive:true,force:true})};
 }
 const data=loadData(root);
 json('sources/semantic-review.json',{schema_version:1,input_digest:data.digest,reviewer:'fixture reviewer',reviewed_at:when,decision:'approved',scope:['claims','drafts','coverage'],notes:'Synthetic gate coverage only; no real semantic verification.'});
 return {root,json,claims,manifest:m,cleanup:()=>rmSync(root,{recursive:true,force:true})};
}
