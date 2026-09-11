import {execFileSync} from 'node:child_process';
import {readFileSync,realpathSync} from 'node:fs';
import {join} from 'node:path';
import {releaseErrors} from './data.mjs';
export const CSP="default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src https://www.youtube-nocookie.com; object-src 'none'; base-uri 'none'; frame-ancestors 'none'";
export const profileOf=d=>d.config.output?.profile||'preview';
export function publicBase(value){
 if(!value)throw Error('PUBLIC_BASE_URL is unset');
 const u=new URL(value);
 if(u.protocol!=='https:'||u.username||u.password||u.search||u.hash||u.pathname!=='/'||u.port||!u.hostname.includes('.')||/localhost|(?:^|\.)(?:example\.(?:com|org|net)|invalid|test|local)$|^\d[\d.]+$|apple-afm3-explainers/i.test(u.hostname))throw Error('Invalid public HTTPS origin or protected reference site');
 return u.origin+'/';
}
export function productionErrors(d){
 const errors=releaseErrors(d);
 if(d.config.publication_status!=='release-ready')errors.push('Content publication_status must be release-ready');
 try{publicBase(d.config.output?.public_base_url);}catch(e){errors.push(e.message);}
 return errors;
}
export function gitStamp(root){
 try{const run=args=>execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();if(realpathSync(run(['rev-parse','--show-toplevel']))!==realpathSync(root))return {commit:null,dirty:null};return {commit:run(['rev-parse','HEAD']),dirty:!!run(['status','--porcelain','--untracked-files=normal'])};}
 catch{return {commit:null,dirty:null};}
}
// Build identity comes from this checkout, never from a remote branch or CI env.
export function buildIdentity(root,config){
 const version=JSON.parse(readFileSync(join(root,'package.json'),'utf8')).version;
 if(typeof version!=='string'||!/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(version))throw Error('Invalid package version');
 const source_revision=gitStamp(root),value=config.deployment?.github_repository;
 const repository_url=typeof value==='string'&&/^https:\/\/github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_.-]+$/.test(value)?value:null;
 const commit_url=repository_url&&/^[a-f0-9]{40}$/.test(source_revision.commit||'')?`${repository_url}/commit/${source_revision.commit}`:null;
 let source_committed_at=null;
 if(source_revision.commit){const time=execFileSync('git',['show','-s','--format=%cI',source_revision.commit],{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();source_committed_at=new Date(time).toISOString();}
 return {version,source_revision,source_committed_at,repository_url,commit_url};
}
export function checkBuildIdentity(root,config,info){
 const current=buildIdentity(root,config);
 for(const [key,value]of Object.entries(current))if(JSON.stringify(info[key])!==JSON.stringify(value))throw Error(`Build ${key} is stale: rebuild from the current checkout`);
 if(typeof info.built_at!=='string'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(info.built_at)||!Number.isFinite(Date.parse(info.built_at)))throw Error('Invalid build timestamp');
 return current;
}
export function hostingConfig(profile='preview',{site=null}={}){
 if(!['preview','production'].includes(profile))throw Error('Unknown output profile');
 const headers=[{key:'Content-Security-Policy',value:CSP},{key:'Referrer-Policy',value:'no-referrer'},{key:'X-Content-Type-Options',value:'nosniff'},{key:'Cache-Control',value:'no-cache, max-age=0, must-revalidate'}];
 if(profile==='preview')headers.push({key:'X-Robots-Tag',value:'noindex, nofollow'});
 return {hosting:{...(site?{site}:{target:'apple-event'}),public:'dist/web',ignore:['firebase.json','**/.*','**/node_modules/**'],cleanUrls:false,trailingSlash:false,headers:[{source:'**',headers},{source:'/404.html',headers:[{key:'X-Robots-Tag',value:'noindex, nofollow'}]}]}};
}
export function responseHeaders(profile,file){
 return Object.fromEntries([...hostingConfig(profile).hosting.headers[0].headers,...(file==='404.html'?[{key:'X-Robots-Tag',value:'noindex, nofollow'}]:[])].map(h=>[h.key,h.value]));
}
export const descriptions={
 'index.html':'從開發、AI 使用情境或簡明解說選擇閱讀路線；共用可追溯的官方來源與適用條件。',
 'dev.html':'從功能示例理解 App 動作、資料、影音與模型請求流程，分清公開文件和產品實測。',
 'ai-user.html':'從個人線索、相機提問、清單、照片與健康示例理解用途，再核對語言、系統和推出條件。',
 'general.html':'以簡明敘事了解功能示例、產品差異、日常用途及重要限制。',
 'event.html':'指定發表會已核對的摘要、功能畫面與時間定位；保留原引用連結。',
 'sources.html':'逐項查看來源版本、主張證據、畫格與網頁定位、核對範圍及查核紀錄。'
};
