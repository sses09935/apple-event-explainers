import {readFileSync,readdirSync,lstatSync,existsSync,realpathSync,mkdirSync,writeFileSync,copyFileSync,mkdtempSync,rmSync} from 'node:fs';
import {join,dirname,resolve,relative,extname} from 'node:path';
import {tmpdir} from 'node:os';
import {execFileSync,spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {ROOT,hash} from './data.mjs';
import {checkTracked} from './inspect.mjs';
import {textQuality} from './quality.mjs';
const rootFiles=['.gitignore','.nvmrc','AGENTS.md','README.md','DESIGN.md','LICENSE','NOTICE','CONTRIBUTING.md','CHANGELOG.md','SECURITY.md','package.json','package-lock.json','project.config.json','firebase.json'];
const roots=['build','design','assets/fonts/noto-sans-tc','schemas','content','sources','tests','.github','docs'];
export const excluded=['node_modules/','dist/','research/','work/','docs/qa/','qa/','.firebase/','.firebaserc','.env*','raw media, transcripts, original snapshots and generated fixture output'];
export function publicFiles(root=ROOT){
 const result=[];
 function visit(path){const p=join(root,path);if(!existsSync(p))return;if(lstatSync(p).isSymbolicLink())throw Error(`Symlink in candidate tree: ${path}`);if(path==='docs/qa'||path.endsWith('/.DS_Store'))return;
  if(lstatSync(p).isDirectory())for(const n of readdirSync(p).sort())visit(path+'/'+n);else result.push(path);
 }
 for(const p of [...rootFiles,...roots])visit(p);
 for(const p of rootFiles)if(!result.includes(p))throw Error(`Missing public source file: ${p}`);
 return result.sort();
}
export function sensitiveText(text){return /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|AIza[A-Za-z0-9_-]{35}|ya29\.[A-Za-z0-9._-]{20,}|1\/\/[A-Za-z0-9_-]{30,}|eyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,})\b|"type"\s*:\s*"service_account"/.test(text);}
export function inspectSourceTree(root=ROOT){
 const list=publicFiles(root),entries=[];
 const allowedExtensions=new Set(['.md','.json','.mjs','.js','.css','.yml','.yaml','.txt','.woff2','.png']);
 for(const p of list){
  if(/(?:^|\/)(?:\.env(?:\.|$)|.*(?:service.account|credentials|cookies|token)\.(?:json|txt)|\.DS_Store)|\.(mp4|m4a|wav|srt|vtt|zip)$/i.test(p))throw Error(`Private file in candidate tree: ${p}`);
  if(!rootFiles.includes(p)&&!allowedExtensions.has(extname(p)))throw Error(`Unexpected public source file type: ${p}`);
  const data=readFileSync(join(root,p));if(data.length>2*1024*1024)throw Error(`Oversized candidate file: ${p}`);
  if(/\.(md|json|mjs|js|css|yml|yaml|txt)$/.test(p)||rootFiles.includes(p)){
   const t=data.toString();if(sensitiveText(t))throw Error(`Credential pattern in candidate file: ${p} (value withheld)`);
   if(/\/(?:Users|home)\/[A-Za-z0-9._-]+\//.test(t))throw Error(`Private absolute path in candidate file: ${p}`);
   if(p.endsWith('.md')&&!p.startsWith('tests/')){const errors=textQuality(t);if(errors.length)throw Error(`${p}: ${errors.join('; ')}`);}
  }
  entries.push({path:p,bytes:data.length,sha256:hash(data)});
 }
 // Public documentation must not link to deliberately excluded local QA or missing files.
 for(const p of list.filter(p=>p.endsWith('.md')&&!p.startsWith('tests/'))){
  const text=readFileSync(join(root,p),'utf8').replace(/```[\s\S]*?```/g,'').replace(/`[^`]*`/g,'');
  for(const m of text.matchAll(/!?\[[^\]\n]*\]\(([^)\n]+)\)/g)){
   const href=m[1].split('#')[0];if(!href||/^[a-z][a-z0-9+.-]*:/i.test(href))continue;
   const destination=relative(root,resolve(root,dirname(p),decodeURIComponent(href)));
   if(!list.includes(destination)&&!list.some(x=>x.startsWith(destination+'/')))throw Error(`Missing public documentation link: ${p} -> ${href}`);
  }
 }
 const git=checkTracked(root);let history='not initialized; no index or commits exist';
 if(git.git==='isolated'){
  const paths=execFileSync('git',['ls-files','-z'],{cwd:root,encoding:'utf8'}).split('\0').filter(Boolean);
  for(const p of paths)if(!list.includes(p))throw Error(`Tracked file outside public candidate list: ${p}`);
  // Scan actual index blobs, including staged changes which differ from the working tree.
  for(const p of paths){const t=execFileSync('git',['show',`:${p}`],{cwd:root,maxBuffer:16*1024*1024}).toString();if(sensitiveText(t)||/\/(?:Users|home)\/[A-Za-z0-9._-]+\//.test(t))throw Error(`Sensitive staged content: ${p} (value withheld)`);}
  let objects;try{objects=execFileSync('git',['rev-list','--objects','--all'],{cwd:root,encoding:'utf8'}).trim();}catch{throw Error('Unable to inspect reachable Git history');}
  for(const row of objects.split('\n').filter(Boolean)){
   const [oid,...parts]=row.split(' '),p=parts.join(' ');if(!p)continue;
   if(/^(research|dist|node_modules|docs\/qa|\.firebase)\/|(?:^|\/)\.env|\.(mp4|m4a|wav|srt|vtt|zip)$/i.test(p))throw Error(`Private/generated file in history: ${p}`);
   const type=execFileSync('git',['cat-file','-t',oid],{cwd:root,encoding:'utf8'}).trim();if(type!=='blob')continue;
   const t=execFileSync('git',['cat-file','blob',oid],{cwd:root,maxBuffer:16*1024*1024}).toString();if(sensitiveText(t)||/\/(?:Users|home)\/[A-Za-z0-9._-]+\//.test(t))throw Error(`Sensitive content in history: ${p} (value withheld)`);
  }history='reachable history and current index scanned; no history rewritten';
 }
 return {schema_version:1,entries,digest:hash(JSON.stringify(entries)),excluded,git,history};
}
export function exportPublic(destination,root=ROOT){
 if(existsSync(destination))throw Error('Export destination must not exist');
 const report=inspectSourceTree(root);mkdirSync(destination,{recursive:true});
 for(const e of report.entries){mkdirSync(dirname(join(destination,e.path)),{recursive:true});copyFileSync(join(root,e.path),join(destination,e.path));}
 return report;
}
export function cleanRebuild(root=ROOT){
 const parent=mkdtempSync(join(tmpdir(),'apple-event-public-')),copy=join(parent,'source'),report={started_at:new Date().toISOString(),status:'running',steps:[]};
 const qa=join(root,'docs/qa');mkdirSync(qa,{recursive:true});
 const npmConfig=join(parent,'empty.npmrc');writeFileSync(npmConfig,'');
 const env=Object.fromEntries(['PATH','HOME','TMPDIR','SYSTEMROOT','LANG','LC_ALL','PLAYWRIGHT_BROWSERS_PATH'].filter(k=>process.env[k]).map(k=>[k,process.env[k]]));
 Object.assign(env,{NPM_CONFIG_USERCONFIG:npmConfig,NPM_CONFIG_CACHE:join(parent,'npm-cache'),NPM_CONFIG_REGISTRY:'https://registry.npmjs.org/'});
 report.installation='Fresh temporary npm cache, empty user config, explicit public registry; host Chromium runtime. No project dependencies, source snapshots or credentials copied.';
 try{
  report.source=exportPublic(copy,root);if(existsSync(join(copy,'research'))||existsSync(join(copy,'node_modules')))throw Error('Dirty public copy');
  for(const args of [['ci','--ignore-scripts','--no-audit','--no-fund'],['run','verify:scaffold'],['run','test:release-fixture']]){
   const p=spawnSync('npm',args,{cwd:copy,env,encoding:'utf8',timeout:300000,maxBuffer:12*1024*1024});
   const name=`clean-${report.steps.length}.log`;writeFileSync(join(qa,name),`${p.stdout||''}${p.stderr||''}`);report.steps.push({command:`npm ${args.join(' ')}`,exit_code:p.status,error:p.error?.code||null,log:name});if(p.status!==0)throw Error(`Clean-copy command failed: npm ${args.join(' ')}`);
  }
  report.status='passed';
 }catch(e){report.status='failed';report.error=e.message;}
 finally{rmSync(parent,{recursive:true,force:true});report.temporary_copy_removed=true;report.finished_at=new Date().toISOString();writeFileSync(join(qa,'public-rebuild.json'),JSON.stringify(report,null,2)+'\n');}
 return report;
}
if(process.argv[1]===fileURLToPath(import.meta.url))try{
 const [mode,arg,...rest]=process.argv.slice(2);if(rest.length)throw Error('Unexpected arguments');
 if(mode==='--rebuild'){const r=cleanRebuild();console.log(JSON.stringify({status:r.status,steps:r.steps,error:r.error},null,2));if(r.status!=='passed')process.exitCode=1;}
 else if(mode==='--export'&&arg){const r=exportPublic(resolve(arg));console.log(`Exported ${r.entries.length} approved files; digest ${r.digest}`);}
 else if(!mode){const r=inspectSourceTree();mkdirSync(join(ROOT,'dist'),{recursive:true});writeFileSync(join(ROOT,'dist/public-tree.json'),JSON.stringify(r,null,2)+'\n');console.log(`Public candidate: ${r.entries.length} files; ${r.git.git}; ${r.digest}`);}
 else throw Error('Expected --export NEW_DIRECTORY or --rebuild');
}catch(e){console.error(e.message);process.exitCode=1;}
