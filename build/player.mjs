import { youtubeId, interval } from './data.mjs';
export function formatTime(value) {
 if(!Number.isFinite(value)||value<0) throw Error('Invalid timestamp');
 const decimal=value.toLocaleString('en-US',{useGrouping:false,maximumFractionDigits:20});
 const fraction=decimal.includes('.')?'.'+decimal.split('.')[1]:'';
 const n=Math.floor(value), h=Math.floor(n/3600), m=Math.floor(n%3600/60), s=String(n%60).padStart(2,'0')+fraction;
 return h ? `${h}:${String(m).padStart(2,'0')}:${s}` : `${m}:${s}`;
}
export function playerLink(manifest,evidence) {
 interval(evidence,manifest.duration_seconds);
 const result={official:manifest.canonical_url,time:`${formatTime(evidence.start_seconds)}–${formatTime(evidence.end_seconds)}`,embed:null};
 const v=manifest.player_adapter.verification;
 const id=youtubeId(manifest.canonical_url);
 // A computed query alone is not verification. Only matching, recorded adapter QA enables the control.
 if(manifest.player_adapter.kind==='youtube'&&id&&v?.seek_works===true&&v.canonical_url===manifest.canonical_url&&v.artifact_revision===manifest.artifact_revision) result.embed=`https://www.youtube-nocookie.com/embed/${id}?start=${Math.floor(evidence.start_seconds)}&end=${Math.ceil(evidence.end_seconds)}&autoplay=0`;
 if(manifest.player_adapter.kind==='youtube-link'&&id&&v?.seek_works===true&&v.canonical_url===manifest.canonical_url&&v.artifact_revision===manifest.artifact_revision){const url=new URL(manifest.canonical_url);url.searchParams.set('t',Math.floor(evidence.start_seconds)+'s');result.official=url.href;}
 return result;
}
