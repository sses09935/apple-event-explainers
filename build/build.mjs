import {checkPublic,debug} from './inspect.mjs';
import {inspectSourceTree} from './public-tree.mjs';
import {profileOf,productionErrors,publicBase,hostingConfig,buildIdentity} from './publication.mjs';
import {authorQualityErrors} from './quality.mjs';
import {readFileSync,writeFileSync,mkdirSync,rmSync,existsSync,realpathSync,lstatSync,cpSync,readdirSync} from 'node:fs';
import {join,resolve,dirname,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadData,ROOT,releaseErrors,allBlocks,blockClaimIds,referenceId} from './data.mjs';
import {renderPage} from './md2html.mjs';
export function safeClean(root,out) {
 root=realpathSync(root);out=resolve(out);
 // Only the precise generated directory inside this project/test copy may be deleted.
 if(out!==join(root,'dist','web')||out===root)throw Error('Unsafe cleanup path');
 for(const dir of [join(root,'dist'),out]) if(existsSync(dir)&&lstatSync(dir).isSymbolicLink())throw Error('Refusing symlink output path');
 if(existsSync(out)&&!realpathSync(out).startsWith(root+sep))throw Error('Output escaped project');
 rmSync(out,{recursive:true,force:true});mkdirSync(out,{recursive:true});
}
export function build(root=ROOT,options={}) {
 const d=loadData(root);if(realpathSync(root)===realpathSync(ROOT)&&/FIXTURE_ONLY/.test(JSON.stringify(d)))throw Error('Fixture content is forbidden in formal dist/web');if(d.config.publication_status==='release-ready'){const errors=releaseErrors(d);if(errors.length)throw Error(errors.join('\n'));}
 const profile=options.profile||profileOf(d);if(!['preview','production'].includes(profile))throw Error('Unknown output profile');
 const quality=authorQualityErrors(d);if(quality.length)throw Error(quality.join('\n'));
 if(profile==='production'){inspectSourceTree(root);const errors=productionErrors(d);if(errors.length)throw Error('production-blocked:\n'+errors.join('\n'));}
 const meta={...buildIdentity(root,d.config),built_at:new Date().toISOString(),input_digest:d.digest,profile,public_base_url:profile==='production'?publicBase(d.config.output?.public_base_url):null};
 const out=join(root,'dist/web');safeClean(root,out);
 mkdirSync(join(out,'assets'));
 for(const f of ['base.css','early.js','reader.js'])cpSync(join(root,'design',f),join(out,'assets',f));
 // Explicit font extension allowlist; never recursively copy arbitrary research or assets.
 const fontSource=join(root,'assets/fonts/noto-sans-tc'),fontOut=join(out,'fonts/noto-sans-tc');mkdirSync(fontOut,{recursive:true});
 for(const f of readdirSync(fontSource))if(/^noto-sans-tc(?:-\d+\.woff2|\.css)$/.test(f)||f==='OFL.txt')cpSync(join(fontSource,f),join(fontOut,f));
 for(const f of ['NOTICE','LICENSE'])cpSync(join(root,f),join(out,`${f}.txt`));
 for(const p of d.config.pages)writeFileSync(join(out,p.file),renderPage(p,d,meta));
 const refs=allBlocks(d).flatMap(b=>blockClaimIds(b).map(id=>({kb:id,page:b.page,node_id:b.node_id||null,topic_id:b.topic_id||null,kind:b.kind,reference:`${b.page}#${referenceId(b,id)}`,evidence:`sources.html#claim-${id}`,rows:(b.table?.rows||[]).flatMap((r,i)=>r.claim_id===id?[`${b.page}#row-${b.node_id}-${i+1}`]:[])})));
 for(const c of d.claims.filter(c=>c.verification==='verified'&&!refs.some(r=>r.kb===c.id)))refs.push({kb:c.id,page:null,node_id:null,topic_id:null,kind:null,reference:null,evidence:`sources.html#claim-${c.id}`,rows:[]});
 writeFileSync(join(out,'source-map.json'),JSON.stringify(refs,null,2)+'\n');
 writeFileSync(join(out,'build-info.json'),JSON.stringify({...meta,content_scope_date:d.config.content_scope_date,content_checked_at:d.config.content_checked_at,publication_status:d.config.publication_status},null,2)+'\n');
 writeFileSync(join(out,'robots.txt'),profile==='preview'?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nSitemap: ${meta.public_base_url}sitemap.xml\n`);
 if(profile==='production')writeFileSync(join(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${d.config.pages.map(p=>`<url><loc>${meta.public_base_url}${p.file}</loc></url>`).join('')}</urlset>`);
 writeFileSync(join(out,'favicon.svg'),'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0b5fd4"/><path d="M19 16h28v7H27v6h17v7H27v6h20v7H19z" fill="white"/></svg>');
 writeFileSync(join(out,'404.html'),`<!doctype html><html lang="zh-TW"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>找不到頁面 — Apple Event Explainers</title><link rel="stylesheet" href="/assets/base.css"></head><body><main class="page-layout"><h1>找不到頁面</h1><p>請檢查網址，或返回閱讀入口。</p><a href="/index.html">回到首頁</a></main></body></html>`);
 writeFileSync(join(root,'dist/hosting.json'),JSON.stringify(hostingConfig(profile),null,2)+'\n');
 if(profile==='production'){checkPublic(out,d);debug(out,d);}
 return {out,data:d,meta};
}
if(process.argv[1]===fileURLToPath(import.meta.url)){try{const args=process.argv.slice(2);if(args.length&&!(args.length===2&&args[0]==='--profile'))throw Error('Expected --profile preview|production');const r=build(ROOT,{profile:args[1]});console.log(`Built ${r.data.config.pages.length} pages → ${r.out}`);}catch(e){console.error(e.message);process.exitCode=1;}}
