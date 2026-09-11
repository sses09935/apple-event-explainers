import {authorQualityErrors} from './quality.mjs';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import Ajv from 'ajv';
export const ROOT = fileURLToPath(new URL('../', import.meta.url));
export const PAGE_SOURCES={S02:'https://www.apple.com/tw/iphone-18-pro/specs/',S03:'https://www.apple.com/tw/iphone-duo/specs/',S04:'https://www.apple.com/tw/apple-watch-series-12/specs/',S05:'https://www.apple.com/tw/apple-watch-ultra-4/specs/',S06:'https://www.apple.com/tw/airpods-5/specs/'};
// Exact URL admission policy for the user's added Taiwan price/ordering scope.
// Titles, acquisition records, revisions and all product facts remain in the manifest/KB.
export const TW_STOREFRONT_SOURCES=Object.freeze({
 S24:'https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro',
 S25:'https://www.apple.com/tw/shop/buy-iphone/iphone-duo',
 S26:'https://www.apple.com/tw/shop/buy-watch/apple-watch',
 S27:'https://www.apple.com/tw/shop/buy-watch/apple-watch-ultra',
 S28:'https://www.apple.com/tw/shop/buy-airpods/airpods-5',
 S29:'https://www.apple.com/tw/'
});

const ajv = new Ajv({allErrors:true, strict:true, allowUnionTypes:true});
const schemas = Object.fromEntries(['project','event-manifest','claim','coverage','gaps','semantic-review'].map(name => [name, ajv.compile(JSON.parse(readFileSync(new URL(`../schemas/${name}.schema.json`,import.meta.url))))]));
export function schema(name, data) {
  if (!schemas[name](data)) throw Error(`${name}: ${ajv.errorsText(schemas[name].errors, {separator:'; '})}`);
}
export const hash = s => createHash('sha256').update(s).digest('hex');
// Comments are structural only outside data blocks. Never rewrite source strings.
function stripOuterComments(text, start, end) {
  let data=false, comment=false;const result=[];
  for(const line of text.split('\n')) {
    if(data){result.push(line);if(end.test(line))data=false;continue;}
    if(comment || line.trimStart().startsWith('<!--')) {
      const tail=line.indexOf('-->');
      if(tail>=0){if(line.slice(tail+3).trim())throw Error('Text after outer comment');comment=false;}else comment=true;
      continue;
    }
    result.push(line);if(start.test(line))data=true;
  }
  if(comment)throw Error('Unclosed outer comment');
  return result.join('\n');
}
export function parseKB(text) {
  const cleaned = stripOuterComments(text,/^```json$/,/^```$/).trim();
  const parts = cleaned.split(/^### /m);
  if (parts.shift().trim() !== '# 事件事實庫') throw Error('KB: unexpected unstructured text');
  const ids = new Set();
  return parts.map(part => {
    const m = part.trim().match(/^(KB-\d{3})\s*\n+```json\n([\s\S]*?)\n```$/);
    if (!m) throw Error('KB: each ### KB-NNN must contain exactly one JSON fence');
    const claim = JSON.parse(m[2]); schema('claim',claim);
    if (claim.id !== m[1] || ids.has(claim.id)) throw Error('KB: mismatched or duplicate ID');
    ids.add(claim.id); return claim;
  });
}
export const blockClaimIds=b=>b.kb?[b.kb]:(b.claim_ids||[]);
export const pageBlocks=(d,file)=>file==='event.html'?d.blocks:(d.drafts?.[file]||[]);
export const allBlocks=d=>d.config.pages.filter(p=>p.role==='reader').flatMap(p=>pageBlocks(d,p.file).map(b=>({...b,page:p.file})));
export const referenceId=(b,id)=>`ref-${id}-${b.index}`;
export function parseDraft(text) {
  const lines=stripOuterComments(text,/^:::/,/^:::$/).trim().split('\n');
  if(!/^# \S/.test(lines.shift()||''))throw Error('Draft: expected # nonempty title');
  const blocks=[],nodes=new Set(),topics=new Set();let section='主題整理',topic_id=null,buffer=null;
  for(const line of lines){
    if(buffer){
      if(line===':::'){
        const b={...buffer,text:buffer.lines.join('\n').trim(),index:blocks.length+1};delete b.lines;
        if(b.kind==='table'){
          try{b.table=JSON.parse(b.text);}catch{throw Error('Draft: table must be JSON');}
          const t=b.table;
          if(!t||Object.keys(t).some(k=>!['caption','rows'].includes(k))||typeof t.caption!=='string'||!t.caption.trim()||!Array.isArray(t.rows)||!t.rows.length)throw Error('Draft: invalid table');
          for(const r of t.rows)if(!r||Object.keys(r).some(k=>!['label','claim_id','value_names'].includes(k))||typeof r.label!=='string'||!r.label.trim()||!b.claim_ids.includes(r.claim_id)||('value_names' in r&&(!Array.isArray(r.value_names)||!r.value_names.length||r.value_names.some(v=>typeof v!=='string'||!v.trim()))))throw Error('Draft: invalid table row or undeclared claim');
          if(b.claim_ids.some(id=>!t.rows.some(r=>r.claim_id===id)))throw Error('Draft: unused table claim');
        }else if(b.kind!=='claim'&&!b.text)throw Error('Draft: empty authored node');
        blocks.push(b);buffer=null;
      }else buffer.lines.push(line);
    }else if(/^:::claim KB-\d{3}$/.test(line)){buffer={kind:'claim',kb:line.slice(9),section,topic_id,lines:[]};}
    else if(line.startsWith(':::')){
      const m=line.match(/^:::(narrative|summary|faq|note|table|editorial) ([a-z][a-z0-9-]*)(?: (KB-\d{3}(?:,KB-\d{3})*))?$/);
      if(!m||nodes.has(m[2]))throw Error('Draft: invalid or duplicate node ID');
      const ids=m[3]?.split(',')||[];
      if((m[1]==='editorial')!==(!ids.length)||new Set(ids).size!==ids.length)throw Error('Draft: factual nodes need unique claim_ids; editorial nodes have none');
      nodes.add(m[2]);buffer={kind:m[1],node_id:m[2],claim_ids:ids,section,topic_id,lines:[]};
    }else if(/^## \S/.test(line)){
      const m=line.match(/^## (.+?) \{#([a-z][a-z0-9-]*)\}$/);
      section=m?m[1]:line.slice(3).trim();topic_id=m?.[2]||null;
      if(topic_id){if(topics.has(topic_id))throw Error('Draft: duplicate topic ID');topics.add(topic_id);}
    }else if(line.trim())throw Error(`Draft: text outside KB block: ${line.slice(0,60)}`);
  }
  if(buffer)throw Error('Draft: unclosed claim block');return blocks;
}
export function interpolate(text,b,claimMap){
 return text.replace(/\{\{([^{}]+)\}\}/g,(_,token)=>{
  const colon=token.indexOf(':'),id=colon<0?token:token.slice(0,colon),name=colon<0?null:token.slice(colon+1);
  if(!blockClaimIds(b).includes(id)||!claimMap.has(id))throw Error('Draft: undeclared interpolation claim');
  const c=claimMap.get(id);if(name===null)return c.statement_zh;
  const v=c.structured_values.find(v=>v.name===name);if(!v)throw Error(`Draft: unknown structured value ${id}:${name}`);
  return v.state==='unknown'?'未知（尚未核對）':String(v.value)+(v.unit?' '+v.unit:'');
 });
}
const INPUTS=['project.config.json','sources/event-manifest.json','sources/coverage.json','sources/gaps.json','content/knowledge-base.md'];
export function loadData(root=ROOT) {
 const raw=Object.fromEntries(INPUTS.map(p=>[p,readFileSync(join(root,p),'utf8')]));
 const config=JSON.parse(raw[INPUTS[0]]);schema('project',config);
 const drafts={},audiences={};
 for(const p of config.pages.filter(p=>p.role==='reader')){
  raw[p.draft]=readFileSync(join(root,p.draft),'utf8');drafts[p.file]=parseDraft(raw[p.draft]);
  if(p.audience){const path=`content/audiences/${p.audience}.md`;raw[path]=readFileSync(join(root,path),'utf8');if(!raw[path].trim())throw Error('Empty audience specification');audiences[p.audience]=raw[path];}
 }
 const data={config,manifest:JSON.parse(raw[INPUTS[1]]),coverage:JSON.parse(raw[INPUTS[2]]),gaps:JSON.parse(raw[INPUTS[3]]),claims:parseKB(raw[INPUTS[4]]),blocks:drafts['event.html']||[],drafts,audiences,semantic:JSON.parse(readFileSync(join(root,'sources/semantic-review.json'),'utf8')),digest:hash(JSON.stringify({...raw,'project.config.json':JSON.stringify(Object.fromEntries(Object.entries(config).filter(([k])=>!['deployment','output'].includes(k))))}))};
 validateData(data);return data;
}
export function interval(a,duration) {
  if (!Number.isFinite(a.start_seconds)||!Number.isFinite(a.end_seconds)||a.start_seconds<0||a.end_seconds<=a.start_seconds||!Number.isFinite(duration)||a.end_seconds>duration) throw Error('Invalid or out-of-range time interval');
}
const checked=(segment, modality)=>segment[{subtitles:'subtitles_read',audio:'audio_checked',visual:'visual_viewed'}[modality]]===true;
export function covered(scope, segments) {
  return scope.modalities.every(m=>{
    let end=scope.start_seconds;
    for (const s of segments.filter(s=>checked(s,m)).sort((a,b)=>a.start_seconds-b.start_seconds)) {
      if(s.start_seconds>end) break;
      if(s.end_seconds>end) end=s.end_seconds;
    }
    return end>=scope.end_seconds;
  });
}
export function evidenceModalities(e) {return e.modality==='both'?['audio','visual']:[e.modality==='spoken'?'audio':e.modality==='subtitles'?'subtitles':'visual'];}
export function validateData(d) {
  for(const [s,k] of [['project','config'],['event-manifest','manifest'],['coverage','coverage'],['gaps','gaps'],['semantic-review','semantic']]) schema(s,d[k]);
  const {config:c,manifest:m,coverage:cv,claims,blocks,gaps}=d;
  const expect={'index.html':'home','event.html':'reader','sources.html':'evidence','dev.html':'reader','ai-user.html':'reader','general.html':'reader'};
  if(c.pages.length!==6 || new Set(c.pages.map(p=>p.file)).size!==6 || c.pages.some(p=>expect[p.file]!==p.role || (p.role==='reader' ? p.draft!==`content/drafts/${p.file.replace('.html','.md')}` || (p.file==='event.html'?'audience' in p:p.audience!==p.file.replace('.html','')) : 'draft' in p || 'audience' in p))) throw Error('Page manifest must contain all six expected roles and files');
  if(c.deployment.target_firebase_project?.toLowerCase().includes('apple-afm3-explainers')) throw Error('Original Firebase project forbidden');
  if(m.canonical_url!==null) {
    const u=new URL(m.canonical_url);
    if(u.protocol!=='https:'||u.username||u.password) throw Error('Canonical URL must be credential-free HTTPS');
  } else if(claims.length || cv.segments.length || cv.required_scope.length || m.access_record!==null || m.supplemental_sources.length || m.artifact_revision!==null || m.duration_seconds!==null || m.publisher_verification!==null || m.timeline_basis!==null || m.acquired_at!==null || m.subtitle_type!==null || m.title!==null || Object.values(m.available_modalities).some(v=>v!==null) || m.player_adapter.kind!=='official-link' || m.player_adapter.verification!==null) throw Error('No video: metadata and revisions must remain null, no claims/coverage');
  if(m.publisher_verification?.status==='verified') {
    const p=m.publisher_verification;
    if(p.canonical_url!==m.canonical_url || p.publisher!=='Apple' || !p.verified_at || !p.reviewer || !p.method || !p.evidence_url) throw Error('Publisher identity verification is incomplete or mismatched');
  }
  if(cv.artifact_revision!==m.artifact_revision) throw Error('Coverage artifact_revision mismatch');
  const pageSources=new Map();
  for(const s of m.supplemental_sources){
    if(pageSources.has(s.source_id)||s.source_id==='S01'||[...pageSources.values()].some(x=>x.canonical_url===s.canonical_url))throw Error('Unapproved or duplicate supplemental source');
    const u=new URL(s.canonical_url);
    const product=s.source_type==='product_specs' && PAGE_SOURCES[s.source_id]===s.canonical_url;
    const storefront=s.source_type==='apple_tw_storefront' && TW_STOREFRONT_SOURCES[s.source_id]===s.canonical_url;
    const developer=s.source_type==='developer_documentation' && !Object.hasOwn(TW_STOREFRONT_SOURCES,s.source_id) && u.origin==='https://developer.apple.com' && Number(s.source_id.slice(1))>=7 && /^\/documentation\/[a-z0-9_().:\/-]+$/.test(u.pathname) && !u.search && !u.hash && !u.username && !u.password;
    if(!product&&!developer&&!storefront)throw Error('Unapproved supplemental source type or exact URL');
    if(developer && (!s.identity_review || !s.related_claim_ids.length || s.content_resource_url!==`https://developer.apple.com/tutorials/data${u.pathname}.json`))throw Error('Developer source needs scoped related claims and same-content resource');
    if(product && (s.content_resource_url!==null||s.language!=='zh-TW'))throw Error('Product source must be the specified Taiwan page');
    if(storefront && (!s.identity_review||s.content_resource_url!==null||s.language!=='zh-TW'))throw Error('Taiwan storefront needs identity review, zh-TW and its original page');
    if(s.artifact_revision!==`sha256:${s.sha256}`)throw Error('Page revision must identify the acquired snapshot hash');
    pageSources.set(s.source_id,s);
  }
  const pageReviews=new Map();
  for(const r of cv.page_reviews){
    if(pageReviews.has(r.id)||cv.segments.some(s=>s.id===r.id))throw Error('Duplicate coverage ID');
    if(pageSources.get(r.source_id)?.artifact_revision!==r.artifact_revision)throw Error('Page review source/revision mismatch');
    if(!r.locators.length||r.locators.some(l=>!l.trim()))throw Error('Page review needs nonempty locators');
    pageReviews.set(r.id,r);
  }
  for(const source of pageSources.values())if(['developer_documentation','apple_tw_storefront'].includes(source.source_type)&&!cv.page_reviews.some(r=>r.source_id===source.source_id&&r.artifact_revision===source.artifact_revision))throw Error('Supplemental source needs acquired original and reviewed locator');
  const entityIDs=new Set();
  for(const e of m.entities||[]){
    if(entityIDs.has(e.entity_id))throw Error('Duplicate entity ID');entityIDs.add(e.entity_id);
    if(!cv.page_reviews.some(r=>r.source_id===e.source_id&&r.artifact_revision===e.artifact_revision&&r.locators.includes(e.locator)))throw Error('Entity naming needs matching source version and locator review');
  }
  const segmentMap=new Map();
  for(const s of cv.segments) {
    interval(s,m.duration_seconds);
    if(segmentMap.has(s.id)) throw Error('Duplicate coverage ID'); segmentMap.set(s.id,s);
    for(const modality of s.acquired) if(m.available_modalities[modality]!==true) throw Error('Acquired modality is unavailable');
    for(const modality of ['subtitles','audio','visual']) if(checked(s,modality) && (!s.acquired.includes(modality)||!s.review_record)) throw Error('Reviewed coverage needs acquisition and a review record');
  }
  for(const s of cv.required_scope) interval(s,m.duration_seconds);
  function checkEvidence(e) {
    if(e.modality==='webpage'){
      if(pageSources.get(e.source_id)?.artifact_revision!==e.artifact_revision)throw Error('Web evidence source/revision mismatch');
      return;
    }
    interval(e,m.duration_seconds);
    if(e.source_id!=='S01'||e.artifact_revision!==m.artifact_revision) throw Error('Illegal source or evidence artifact_revision mismatch');
    for(const modality of evidenceModalities(e)) if(m.available_modalities[modality]!==true) throw Error('Evidence modality unavailable');
  }
  const claimMap=new Map();
  for(const claim of claims) {
    schema('claim',claim);
    if(claimMap.has(claim.id)) throw Error('Duplicate KB ID'); claimMap.set(claim.id,claim);
    for(const v of claim.structured_values) {
      if(v.state==='unknown' && v.value!==null) throw Error('Unknown structured value must be null, never 0');
      if(v.state==='known' && (v.value===null || (typeof v.value==='number'&&!Number.isFinite(v.value)) || v.value==='')) throw Error('Known structured value must be finite/nonempty');
    }
    claim.evidence.forEach(checkEvidence);
    if(claim.evidence.length&&!claim.evidence.some(e=>claim.source===`[${e.source_id}]`))throw Error('Claim primary source does not match evidence');
    if(claim.source==='[S01]'&&claim.evidence.some(e=>e.source_id!=='S01'))throw Error('Event-only claim cannot mix supplemental evidence');
    const primary=pageSources.get(claim.source.slice(1,-1));
    if(claim.source!=='[S01]'&&!primary)throw Error('Unregistered claim source');
    if(claim.evidence.some(e=>pageSources.get(e.source_id)?.source_type==='apple_tw_storefront') && (primary?.source_type!=='apple_tw_storefront'||claim.evidence.some(e=>e.source_id!==primary.source_id)))throw Error('Taiwan storefront claim must use its own page only; compare separate claims explicitly');
    const technical=primary?.source_type.startsWith('developer_');
    if(technical&&!claim.technical_context)throw Error('Developer claim requires explicit technical context');
    if(!technical&&claim.technical_context)throw Error('Technical context must have a Developer primary source');
    if(technical){
      const t=claim.technical_context;
      if(t.related_claim_ids.some(id=>!primary.related_claim_ids.includes(id)))throw Error('Technical relation outside admitted scope');
      if(!t.notes.trim())throw Error('Technical relationship limits required');
    }
    if(claim.verification==='verified') {
      if(!claim.evidence.length||!claim.review_record?.coverage_ids.length) throw Error('Verified claim requires evidence and review');
      const ids=claim.review_record.coverage_ids;
      if(ids.some(id=>!segmentMap.has(id)&&!pageReviews.has(id)))throw Error('Unknown coverage reference');
      const segments=ids.filter(id=>segmentMap.has(id)).map(id=>segmentMap.get(id));
      for(const e of claim.evidence){
        if(e.modality==='subtitles')throw Error('Subtitle-only evidence cannot verify a video claim');
        if(e.modality==='webpage'){
          if(!ids.some(id=>{const r=pageReviews.get(id);return r?.source_id===e.source_id&&r.artifact_revision===e.artifact_revision&&r.locators.includes(e.locator);}))throw Error('Web evidence needs matching reviewed locator');
        }else if(!covered({...e,modalities:evidenceModalities(e)},segments)) throw Error('Verified evidence is not covered by reviewed modalities');
      }
    }
  }
  for(const source of pageSources.values())for(const id of source.related_claim_ids){
    const c=claimMap.get(id);if(!c||c.verification!=='verified'||!(c.source==='[S01]'||pageSources.get(c.source.slice(1,-1))?.source_type==='product_specs'))throw Error('Supplemental relation requires a verified product premise from S01 or product_specs');
  }
  for(const b of allBlocks(d)) {
    for(const id of blockClaimIds(b)){
      if(!claimMap.has(id))throw Error(`Unknown KB reference ${id}`);
      if(claimMap.get(id).verification!=='verified')throw Error(`Unverified claim in formal content: ${id}`);
    }
    if(/\[S\w+\]|\b\d{1,2}:\d{2}\b|https?:\/\//.test(b.text))throw Error('Draft citations, timestamps and evidence URLs must be generated');
    if(b.page==='event.html'&&b.kind==='summary'&&blockClaimIds(b).some(id=>claimMap.get(id).source!=='[S01]'))throw Error('Event summary accepts S01 evidence only');
    interpolate(b.text,b,claimMap);
    for(const r of b.table?.rows||[])for(const name of r.value_names||[])if(!claimMap.get(r.claim_id).structured_values.some(v=>v.name===name))throw Error('Draft: unknown table value name');
  }
  const gapIds=new Set();
  for(const gap of gaps.items) {
    if(gapIds.has(gap.id)) throw Error('Duplicate gap ID');gapIds.add(gap.id);
    gap.evidence.forEach(checkEvidence);
    const segments=gap.coverage_ids.map(id=>{if(!segmentMap.has(id)) throw Error('Unknown gap coverage'); return segmentMap.get(id);});
    if(gap.kind==='not-yet-reviewed' && (gap.evidence.length||gap.coverage_ids.length||gap.reviewed_scope!==null||gap.review_record!==null)) throw Error('Not-yet-reviewed cannot pretend to be reviewed or undisclosed');
    if(gap.kind==='explicit-not-disclosed' && (!gap.evidence.length||!gap.review_record)) throw Error('Explicit non-disclosure requires actual evidence and review');
    if(gap.kind==='conflict' && (gap.evidence.length<2||!gap.review_record)) throw Error('Conflict needs two evidence records and review');
    if(gap.kind==='reviewed-not-found') {
      if(gap.evidence.length||!gap.reviewed_scope||!gap.review_record||!segments.length) throw Error('Absence needs coverage, not a fabricated timestamp');
      interval(gap.reviewed_scope,m.duration_seconds);
      if(!covered(gap.reviewed_scope,segments)) throw Error('Insufficient reviewed-not-found coverage');
    }
  }
  const v=m.player_adapter.verification;
  if(v) {
    if(!['youtube','youtube-link'].includes(m.player_adapter.kind) || v.canonical_url!==m.canonical_url||v.artifact_revision!==m.artifact_revision) throw Error('Player verification mismatch');
    interval({start_seconds:v.tested_start_seconds,end_seconds:v.tested_end_seconds},m.duration_seconds);
    if(!youtubeId(m.canonical_url)) throw Error('Unsupported verified adapter');
  }
  validatePlayerMapping(m);
  return d;
}
// Add decimal timestamp values without letting binary rounding move an exact second below floor().
export function mapPlayerSeconds(source,offset) {
  if(!Number.isFinite(source)||!Number.isFinite(offset))throw Error('Invalid player mapping timestamp');
  const parts=value=>{const [mantissa,exponent='0']=String(value).split('e');return {value:BigInt(mantissa.replace('.','')),scale:(mantissa.split('.')[1]||'').length-Number(exponent)};};
  const a=parts(source),b=parts(offset),scale=Math.max(a.scale,b.scale,0);
  return Number(`${a.value*10n**BigInt(scale-a.scale)+b.value*10n**BigInt(scale-b.scale)}e-${scale}`);
}
export function playerMappingDigest(m) {
  const t=m.player_adapter.timeline_mapping;
  if(!t)throw Error('Player mapping required for digest');
  return hash(JSON.stringify([1,m.canonical_url,m.artifact_revision,m.duration_seconds,m.player_adapter.kind,t.source_artifact_revision,t.target_artifact_revision,t.source_start_seconds,t.source_end_seconds,t.offset_seconds,t.target_duration_seconds,t.reviewer,t.reviewed_at,t.notes,t.chapters?.map(c=>[c.title,c.start_seconds])??null]));
}
export function validatePlayerMapping(m) {
  const t=m.player_adapter.timeline_mapping,v=m.player_adapter.verification;
  if(!t){if(v?.timeline_mapping_digest!==undefined)throw Error('Player mapping digest without mapping');return null;}
  // Mapped external links and embedded players need different live QA. Only the former is supported here.
  if(m.player_adapter.kind!=='youtube-link'||!youtubeId(m.canonical_url))throw Error('Player mapping supports verified YouTube external links only');
  if(t.source_artifact_revision!==m.artifact_revision||!/^sha256:[a-f0-9]{64}$/.test(t.target_artifact_revision||''))throw Error('Player mapping source or target revision mismatch');
  if(!Number.isFinite(t.offset_seconds)||!Number.isFinite(t.target_duration_seconds)||t.target_duration_seconds<=0)throw Error('Invalid player mapping offset or target duration');
  if(![t.reviewer,t.reviewed_at,t.notes].every(x=>typeof x==='string'&&x.trim()))throw Error('Player mapping review required');
  interval({start_seconds:t.source_start_seconds,end_seconds:t.source_end_seconds},m.duration_seconds);
  interval({start_seconds:mapPlayerSeconds(t.source_start_seconds,t.offset_seconds),end_seconds:mapPlayerSeconds(t.source_end_seconds,t.offset_seconds)},t.target_duration_seconds);
  if(t.chapters!==undefined){
    if(!Array.isArray(t.chapters)||!t.chapters.length||t.chapters.some((c,i)=>!c||typeof c.title!=='string'||!c.title.trim()||!Number.isFinite(c.start_seconds)||c.start_seconds<0||c.start_seconds>=t.target_duration_seconds||(i>0&&c.start_seconds<=t.chapters[i-1].start_seconds)))throw Error('Invalid player mapping chapters');
  }
  if(!v||v.seek_works!==true||v.canonical_url!==m.canonical_url||v.artifact_revision!==m.artifact_revision||v.timeline_mapping_digest!==playerMappingDigest(m))throw Error('Player mapping verification is missing or stale');
  interval({start_seconds:v.tested_start_seconds,end_seconds:v.tested_end_seconds},m.duration_seconds);
  if(v.tested_start_seconds<t.source_start_seconds||v.tested_end_seconds>t.source_end_seconds)throw Error('Player mapping QA interval is outside mapped source range');
  return t;
}
export function youtubeId(url) {
  if(!url) return null; const u=new URL(url);
  const id=u.hostname==='youtu.be'?u.pathname.slice(1):['youtube.com','www.youtube.com'].includes(u.hostname)&&u.pathname==='/watch'?u.searchParams.get('v'):null;
  return /^[\w-]{11}$/.test(id||'')?id:null;
}
export function releaseErrors(d) {
  const {manifest:m,coverage:c,semantic:s,config:p}=d, errors=[];
  if(m.access_record?.status==='blocked') errors.push('Designated source access is blocked');
  if(!m.canonical_url || m.publisher_verification?.status!=='verified') errors.push('Designated video and verified Apple publisher identity required');
  if(!m.title||!m.artifact_revision||!m.duration_seconds||!m.timeline_basis||!m.acquired_at||!m.subtitle_type) errors.push('Complete video metadata required');
  if(d.config.pages.filter(p=>p.role==='reader').some(p=>!pageBlocks(d,p.file).some(b=>blockClaimIds(b).length))) errors.push('Nonempty formal content required for every reader');
  for(const p of d.config.pages.filter(p=>p.audience)){const bs=pageBlocks(d,p.file);if(!bs.some(b=>b.kind==='summary')||bs.some(b=>blockClaimIds(b).length&&!b.topic_id))errors.push(`Authored summary and stable topic IDs required: ${p.file}`);}
  const bodies=d.config.pages.filter(p=>p.audience).map(p=>pageBlocks(d,p.file).map(b=>b.text).join('\n'));
  if(new Set(bodies).size!==bodies.length)errors.push('Audience drafts must have distinct authored content');
  if(!c.required_scope.length || c.required_scope.some(scope=>!covered(scope,c.segments))) errors.push('Promised coverage is missing or incomplete');
  if(d.gaps.items.some(g=>g.blocking||g.kind==='conflict')) errors.push('Blocking gaps or unresolved conflicts');
  if(!p.content_scope_date||!p.content_checked_at) errors.push('Content scope date and checked time required');
  if(s.decision!=='approved'||s.input_digest!==d.digest||!s.reviewer||!s.reviewed_at||!s.notes||['claims','drafts','coverage','gaps'].some(v=>!s.scope.includes(v))) errors.push('Fresh, complete semantic review required (structure does not prove truth)');
  errors.push(...authorQualityErrors(d));
  return errors;
}
