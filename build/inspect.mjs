import {textQuality} from './quality.mjs';
import {publicBase} from './publication.mjs';
import {realpathSync,readFileSync,readdirSync,lstatSync,existsSync} from 'node:fs';
import {join,resolve,sep,dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
import {parse} from 'parse5';
import {loadData,ROOT,allBlocks,blockClaimIds,referenceId,pageBlocks} from './data.mjs';
export function walk(node,fn){fn(node);for(const child of node.childNodes||[])walk(child,fn);}
export const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
export const hasClass=(n,k)=>(attr(n,'class')||'').split(/\s+/).includes(k);
export function files(dir,base=''){return readdirSync(dir).flatMap(f=>{const path=join(dir,f);if(lstatSync(path).isSymbolicLink())throw Error('Symlink in public output');return lstatSync(path).isDirectory()?files(path,base+f+'/'):[base+f];});}
export function checkPublic(out,data){
 const allowed=new Set([...data.config.pages.map(p=>p.file),'source-map.json','build-info.json','robots.txt','404.html','favicon.svg','NOTICE.txt','LICENSE.txt','assets/base.css','assets/early.js','assets/reader.js','fonts/noto-sans-tc/noto-sans-tc.css','fonts/noto-sans-tc/OFL.txt']);
 const fontFiles=readdirSync(join(ROOT,'assets/fonts/noto-sans-tc')).filter(f=>/^noto-sans-tc-\d+\.woff2$/.test(f));fontFiles.forEach(f=>allowed.add('fonts/noto-sans-tc/'+f));
 const info=JSON.parse(readFileSync(join(out,'build-info.json')));if(info.profile==='production')allowed.add('sitemap.xml');
 const actual=files(out);
 if(JSON.parse(readFileSync(join(out,'build-info.json'))).input_digest!==data.digest)throw Error('Stale output: run build:web after source edits');
 for(const f of actual)if(!allowed.has(f))throw Error(`Unexpected public output / fixture / old artifact leak: ${f}`);
 for(const f of allowed)if(!actual.includes(f))throw Error(`Missing expected public file: ${f}`);
 for(const f of actual.filter(f=>/\.(html|json|js|css)$/.test(f))) {
  const text=readFileSync(join(out,f),'utf8');
  if(/FIXTURE_ONLY|research\/\.private|afm-reader-mode|afm-font-scale|afm-color-scheme|official-beta|reported-excluded|AFM 3 Core|PCC on Google Cloud/.test(text))throw Error(`Old content or fixture leak in ${f}`);
 }
 for(const f of actual.filter(f=>f.endsWith('.html'))){const tree=parse(readFileSync(join(out,f),'utf8'));const snippets=[];walk(tree,n=>{if(n.nodeName==='#text')snippets.push(n.value);for(const a of n.attrs||[])if(['alt','aria-label','title','data-search-title','content'].includes(a.name))snippets.push(a.value);});const errors=textQuality(snippets.join(' '));if(errors.length)throw Error(`${f}: ${errors.join('; ')}`);}
 const css=readFileSync(join(out,'fonts/noto-sans-tc/noto-sans-tc.css'),'utf8');
 for(const [,file] of css.matchAll(/url\(['"]?([^)'" ]+)/g))if(!existsSync(join(out,'fonts/noto-sans-tc',file)))throw Error('Missing font resource');
 return actual;
}
export function checkTracked(root=ROOT) {
 let top;
 try{top=execFileSync('git',['rev-parse','--show-toplevel'],{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();}catch(e){
  if(e.status===128 && /not a git repository/i.test(String(e.stderr)))return {git:'not initialized',tracked:0};
  throw Error('Unable to inspect Git tracked files');
 }
 if(realpathSync(top)!==realpathSync(root))throw Error('New project is not isolated from parent Git repository');
 const list=execFileSync('git',['ls-files','-z'],{cwd:root,encoding:'utf8'}).split('\0').filter(Boolean);
 if(list.some(f=>/^(research\/\.private(?:\/|$)|dist(?:\/|$)|node_modules(?:\/|$)|\.env)/.test(f)))throw Error('Forbidden private/generated tracked file');
 return {git:'isolated',tracked:list.length};
}
export function checkLinks(out,data) {
 if(!data.config.pages.length)throw Error('Zero expected pages');
 const trees=new Map(),idMap=new Map();
 for(const p of data.config.pages) {
  const tree=parse(readFileSync(join(out,p.file),'utf8'));trees.set(p.file,tree);const ids=new Set();
  walk(tree,n=>{const id=attr(n,'id');if(id){if(ids.has(id))throw Error(`Duplicate anchor ${p.file}#${id}`);ids.add(id);}});idMap.set(p.file,ids);
 }
 let count=0;
 for(const [file,tree] of trees)walk(tree,n=>{
  for(const name of ['href','src']) {
   const href=attr(n,name);if(!href)continue;count++;
   if(/^https:\/\//.test(href))continue;
   if(/^[a-z][a-z0-9+.-]*:|^\/\//i.test(href))throw Error(`Unsafe URL ${file}`);
   const [path,hash]=href.split('#'),target=resolve(out,dirname(file),decodeURIComponent(path||file));
   if(!target.startsWith(resolve(out)+sep)||!existsSync(target))throw Error(`Broken link: ${file} → ${href}`);
   const local=target.slice(resolve(out).length+1);
   if(hash && !idMap.get(local)?.has(decodeURIComponent(hash)))throw Error(`Broken fragment: ${file} → ${href}`);
  }
 });
 return {pages:trees.size,links:count,trees};
}
export function debug(out,data,{fixture=false}={}) {
 if(!fixture)checkPublic(out,data);
 const {trees,links}=checkLinks(out,data);let pages=0;const info=JSON.parse(readFileSync(join(out,'build-info.json'))),production=info.profile==='production';
 for(const p of data.config.pages) {
  const nodes=[];walk(trees.get(p.file),n=>nodes.push(n));
  const required=[['main landmark',nodes.some(n=>n.tagName==='main')],['one h1',nodes.filter(n=>n.tagName==='h1').length===1],['page role',nodes.some(n=>attr(n,'data-page-role')===p.role)],['index profile',production?!nodes.some(n=>attr(n,'name')==='robots'&&attr(n,'content').includes('noindex')):nodes.some(n=>attr(n,'name')==='robots'&&attr(n,'content').includes('noindex'))],['footer metadata',nodes.some(n=>attr(n,'data-footer-meta')!==undefined)],['scheme',nodes.some(n=>hasClass(n,'scheme-toggle'))]];
  if(production){required.push(['self canonical',nodes.some(n=>attr(n,'rel')==='canonical'&&attr(n,'href')===publicBase(data.config.output?.public_base_url)+p.file)]);if(readFileSync(join(out,p.file),'utf8').includes('草稿'))throw Error('Draft text in production page');}
  if(p.role==='reader') required.push(['reader tools',nodes.some(n=>hasClass(n,'reader-tools'))],['search',nodes.some(n=>attr(n,'id')==='page-search')],['TOC',nodes.some(n=>hasClass(n,'side-toc'))],['mode',nodes.some(n=>attr(n,'data-reader-mode-set')==='audit')],['font step',nodes.some(n=>hasClass(n,'font-step'))]);
  if(p.role==='evidence') required.push(['evidence section',nodes.some(n=>attr(n,'id')==='claims')],['source metadata',nodes.some(n=>attr(n,'id')==='source-S01')],['gaps',nodes.some(n=>attr(n,'id')==='gaps')]);
  for(const [name,ok]of required)if(!ok)throw Error(`${p.file}: missing ${name}`);pages++;
 }
 const refs=JSON.parse(readFileSync(join(out,'source-map.json'),'utf8'));
 const expected=allBlocks(data).flatMap(b=>blockClaimIds(b).map(id=>({reference:`${b.page}#${referenceId(b,id)}`,kb:id,evidence:`sources.html#claim-${id}`})));
 for(const c of data.claims.filter(c=>c.verification==='verified'&&!expected.some(e=>e.kb===c.id)))expected.push({kb:c.id,reference:null,evidence:`sources.html#claim-${c.id}`});
 if(refs.length!==expected.length||expected.some(e=>!refs.some(r=>r.reference===e.reference&&r.kb===e.kb&&r.evidence===e.evidence)))throw Error('Incomplete multi-page source map');
 for(const p of data.config.pages.filter(p=>p.audience)){
   const nodes=[];walk(trees.get(p.file),n=>nodes.push(n));
   if(!nodes.some(n=>attr(n,'data-audience')===p.audience))throw Error('Missing audience identity');
   for(const b of pageBlocks(data,p.file)){
    if(b.node_id&&!nodes.some(n=>attr(n,'id')===`node-${b.node_id}`))throw Error('Missing authored node');
    if(b.topic_id&&!nodes.some(n=>attr(n,'id')===`topic-${b.topic_id}`))throw Error('Missing stable topic anchor');
   }
 }
 if(pages!==data.config.pages.length||pages===0)throw Error('Missing pages or zero tested pages');
 return {pages,links};
}
