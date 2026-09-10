// Deliberate, lossless migration of the known three-page manifest only.
// It never opens or rewrites KB, evidence, coverage or the existing event draft.
import {readFileSync,writeFileSync,mkdirSync,existsSync,lstatSync,realpathSync} from 'node:fs';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {ROOT,hash,schema} from './data.mjs';
const audiences=[['dev','開發者版'],['ai-user','AI 使用者版'],['general','普羅大眾版']];
const expected={'index.html':'home','event.html':'reader','sources.html':'evidence','dev.html':'reader','ai-user.html':'reader','general.html':'reader'};
function validPage(p){
 if(expected[p.file]!==p.role)return false;
 if(p.role!=='reader')return !('draft' in p)&&!('audience' in p);
 if(p.draft!==`content/drafts/${p.file.replace('.html','.md')}`)return false;
 return p.file==='event.html'?!('audience' in p):p.audience===p.file.replace('.html','');
}
export function migratePageConfig(input){
 schema('project',input);
 const files=input.pages.map(p=>p.file),isSix=files.length===6&&Object.keys(expected).every(f=>files.includes(f));
 const isThree=files.length===3&&['index.html','event.html','sources.html'].every(f=>files.includes(f));
 if((!isSix&&!isThree)||new Set(files).size!==files.length||input.pages.some(p=>!validPage(p)))throw Error('Only the known three-page or six-page manifest can be migrated');
 const config=structuredClone(input);
 if(isThree)config.pages.push(...audiences.map(([audience,title])=>({file:audience+'.html',role:'reader',title,audience,draft:`content/drafts/${audience}.md`})));return config;
}
function noSymlinks(root,relative){let path=root;for(const part of relative.split('/')){path=join(path,part);if(existsSync(path)&&lstatSync(path).isSymbolicLink())throw Error('Refusing symlink migration path');}}
export function migrateAudienceProject(root=ROOT,{createStubs=false}={}){
 root=realpathSync(root);noSymlinks(root,'project.config.json');
 const configPath=join(root,'project.config.json'),raw=readFileSync(configPath,'utf8'),old=JSON.parse(raw),next=migratePageConfig(old);
 if(old.pages.length===6)return {changed:false,created:[],missing:[],backup:null};
 const additions=audiences.flatMap(([audience,title])=>[
  {path:`content/drafts/${audience}.md`,text:`# ${title}\n\n:::editorial ${audience}-migration-intro\n此版本尚待撰寫。請先核對來源，再建立有證據支持的受眾文章。\n:::\n`},
  {path:`content/audiences/${audience}.md`,text:`# ${title}選材規格\n\n尚待編輯者定義閱讀目的、必要主題與選材界線；本檔不含產品事實。\n`}
 ]);
 noSymlinks(root,'research/.private/migrations');for(const a of additions)noSymlinks(root,a.path);
 const backup=`research/.private/migrations/project-three-pages-${hash(raw)}.json`;noSymlinks(root,backup);mkdirSync(join(root,'research/.private/migrations'),{recursive:true});
 if(existsSync(join(root,backup))){if(readFileSync(join(root,backup),'utf8')!==raw)throw Error('Migration backup mismatch');}
 else writeFileSync(join(root,backup),raw,{flag:'wx'});
 const created=[],missing=[];
 for(const a of additions)if(!existsSync(join(root,a.path))){
  if(createStubs){mkdirSync(join(root,a.path,'..'),{recursive:true});writeFileSync(join(root,a.path),a.text,{flag:'wx'});created.push(a.path);}
  else missing.push(a.path);
 }
 writeFileSync(configPath,JSON.stringify(next,null,2)+'\n');
 return {changed:true,created,missing,backup};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 try{const unknown=process.argv.slice(2).filter(a=>a!=='--create-stubs');if(unknown.length)throw Error('Only --create-stubs is supported');const result=migrateAudienceProject(ROOT,{createStubs:process.argv.includes('--create-stubs')});console.log(JSON.stringify(result,null,2));console.log(result.changed?'Six-page configuration created. Existing content preserved; new audience articles and semantic review still need authoring.':'Already six pages; no files changed.');}
 catch(e){console.error(e.message);process.exitCode=1;}
}
