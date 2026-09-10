import {execFileSync} from 'node:child_process';
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
 try{const run=args=>execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();return {commit:run(['rev-parse','HEAD']),dirty:!!run(['status','--porcelain','--untracked-files=normal'])};}
 catch{return {commit:null,dirty:null};}
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
 'sources.html':'逐項查看來源版本、主張證據、畫格與網頁定位、核對範圍及資訊缺口。'
};
