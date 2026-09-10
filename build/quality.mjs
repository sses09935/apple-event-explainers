import {allBlocks,blockClaimIds,interpolate} from './data.mjs';
// Exact official feature terms and the preserved original page title are not model abbreviations.
export const exceptions=[
 {text:'iPhone 18 Pro 與 18 Pro Max - 技術規格 - Apple (台灣)',reason:'S02 fixed-snapshot original title, retained verbatim'},
 {text:'Pro 控制項目',reason:'Official feature name in S02 camera and video rows'},
 {text:'Duo 雙面預覽',reason:'Official feature name in S03 camera row'},
 {text:'Duo 雙面 FaceTime',reason:'Official feature name in S03 video-call row'},
 {text:'相容 AirPods',reason:'S06 footnote 4 names compatible AirPods generally; do not narrow to AirPods 5'},
 {text:'所有 AirPods',reason:'S06 footnote 5 explicitly covers hands-free Siri AI on all AirPods'},
 {text:'Apple Watch Series 6',reason:'S04 and S05 footnote 15 preserves the older model threshold for offline maps'},
 {text:'所有 Apple Watch Ultra',reason:'S04 and S05 footnote 15 covers the Ultra family for offline maps'},
 {text:'A19 Pro',reason:'S01 fixed frame at 1211.0098 seconds labels the comparison chipset; not a phone abbreviation'},
 {text:'A18 Pro',reason:'S01 fixed frame at 1211.0098 seconds labels the comparison chipset; not a phone abbreviation'}
];
const language=/不换框架|視覺检查|记录資訊|不确认|核对|输入|對应|區塊内|拍摄|画面|时间|實际|操作与|選项|软件|视频|屏幕|默认|服务器|内存|文件夹|负載/g;
export function textQuality(text,{names=true}={}){
 // Official HTML uses nonbreaking spaces inside complete product names.
 // Normalize only the comparison text; preserve source and rendered strings.
 text=text.replace(/[\u00a0\u202f]/g,' ');
 const errors=[];if(/iPhone \d+ iPhone|Apple Watch Apple Watch|AirPods 5 5|\bA\d+ iPhone\b/.test(text))errors.push('Duplicated product name');for(const m of text.matchAll(language))errors.push(`zh-TW wording: ${m[0]}`);
 if(names){let t=text;for(const e of exceptions)t=t.split(e.text).join('');
  t=t.replace(/https?:\/\/[^\s<>"`]+|`[^`]+`|iPhone \d+ Pro(?: Max)?|iPhone Duo|Apple Watch Series 12|Apple Watch Ultra 4|AirPods 5|A20 Pro|ProRes(?: RAW)?|ProRAW|ProMotion/g,'');
  for(const m of t.matchAll(/\biPhone Pro\b|\bPro Max\b|\bDuo\b|\b(?:Apple Watch |Watch )?Series(?: 12)?\b|\b(?:Apple Watch |Watch )?Ultra(?: 4)?\b|\bAirPods\b|\bPro\b/g))errors.push(`Incomplete specific product name: ${m[0]}`);
 }return [...new Set(errors)];
}
const metadataKeys=new Set(['canonical_url','evidence_url','content_resource_url','artifact_revision','sha256','locator','locators','id','source_id','entity_id','aliases','language','source_type','source','claim_type','verification','availability_status','status','kind','relationship','platform','introduced','scope','coverage_ids','related_claim_ids']);
export function authorQualityErrors(d){
 const errors=[];
 function visit(x,path=''){if(typeof x==='string')for(const e of textQuality(x))errors.push(`${path}: ${e}`);else if(Array.isArray(x))x.forEach((v,i)=>visit(v,path+'.'+i));else if(x&&typeof x==='object')for(const [k,v]of Object.entries(x))if(!metadataKeys.has(k))visit(v,path+'.'+k);}
 for(const [k,x]of Object.entries({claims:d.claims,manifest:d.manifest,coverage:d.coverage,gaps:d.gaps,semantic:d.semantic}))visit(x,k);
 // scope is prose in supplemental sources, but an enum array in semantic reviews.
 d.manifest.supplemental_sources.forEach(s=>visit(s.scope,`${s.source_id}.scope`));
 const map=new Map(d.claims.map(c=>[c.id,c]));
 for(const b of allBlocks(d)){visit(b.section,`${b.page}.${b.node_id}.heading`);visit(b.table||interpolate(b.text||'',b,map),`${b.page}.${b.node_id}`);}
 for(const [k,x]of Object.entries(d.audiences||{}))visit(x,`audience.${k}`);
 return [...new Set(errors)];
}
