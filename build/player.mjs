import { youtubeId, interval, validatePlayerMapping, mapPlayerSeconds } from './data.mjs';
export function formatTime(value) {
 if(!Number.isFinite(value)||value<0) throw Error('Invalid timestamp');
 const decimal=value.toLocaleString('en-US',{useGrouping:false,maximumFractionDigits:20});
 const fraction=decimal.includes('.')?'.'+decimal.split('.')[1]:'';
 const n=Math.floor(value), h=Math.floor(n/3600), m=Math.floor(n%3600/60), s=String(n%60).padStart(2,'0')+fraction;
 return h ? `${h}:${String(m).padStart(2,'0')}:${s}` : `${m}:${s}`;
}
export function playerLink(manifest,evidence) {
 interval(evidence,manifest.duration_seconds);
 const result={official:manifest.canonical_url,time:`${formatTime(evidence.start_seconds)}–${formatTime(evidence.end_seconds)}`,embed:null,seek_verified:false,mapping_applied:false,mapped_time:null,mapped_start_seconds:null,mapped_end_seconds:null,mapping_status:'none'};
 const v=manifest.player_adapter.verification;
 const id=youtubeId(manifest.canonical_url);
 let mapping;
 try{mapping=validatePlayerMapping(manifest);}catch{result.mapping_status='invalid-mapping';return result;}
 if(mapping){
  if(evidence.source_id!=='S01'||evidence.artifact_revision!==manifest.artifact_revision){result.mapping_status='invalid-evidence';return result;}
  const start=mapPlayerSeconds(evidence.start_seconds,mapping.offset_seconds),end=mapPlayerSeconds(evidence.end_seconds,mapping.offset_seconds);
  if(evidence.start_seconds<mapping.source_start_seconds||evidence.end_seconds>mapping.source_end_seconds||start<0||end>mapping.target_duration_seconds||!Number.isFinite(start)||!Number.isFinite(end)||end<=start){result.mapping_status='outside-verified-range';return result;}
  const url=new URL(manifest.canonical_url);url.searchParams.set('t',Math.floor(start)+'s');
  return {...result,official:url.href,seek_verified:true,mapping_applied:true,mapped_time:`${formatTime(start)}–${formatTime(end)}`,mapped_start_seconds:start,mapped_end_seconds:end,mapping_status:'mapped'};
 }
 // A computed query alone is not verification. Only matching, recorded adapter QA enables the control.
 if(manifest.player_adapter.kind==='youtube'&&id&&v?.seek_works===true&&v.canonical_url===manifest.canonical_url&&v.artifact_revision===manifest.artifact_revision){result.embed=`https://www.youtube-nocookie.com/embed/${id}?start=${Math.floor(evidence.start_seconds)}&end=${Math.ceil(evidence.end_seconds)}&autoplay=0`;result.seek_verified=true;}
 if(manifest.player_adapter.kind==='youtube-link'&&id&&v?.seek_works===true&&v.canonical_url===manifest.canonical_url&&v.artifact_revision===manifest.artifact_revision){const url=new URL(manifest.canonical_url);url.searchParams.set('t',Math.floor(evidence.start_seconds)+'s');result.official=url.href;result.seek_verified=true;}
 return result;
}
