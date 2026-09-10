// Idempotent v2 -> v3 manifest migration. Never touches KB, evidence or coverage.
import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {ROOT,hash} from './data.mjs';
export function migrateManifest(input){
 if(input.schema_version===3)return structuredClone(input);
 if(input.schema_version!==2)throw Error('Only the known v2 manifest can be migrated');
 const m=structuredClone(input);m.schema_version=3;m.source_type='event_video';m.language=null;
 m.supplemental_sources=m.supplemental_sources.map(s=>({...s,source_type:'product_specs',language:'zh-TW',scope:'指定台灣技術規格快照；僅已記錄 locator 與相關註記',content_resource_url:null,related_claim_ids:[]}));
 return m;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
 const path=join(ROOT,'sources/event-manifest.json'),raw=readFileSync(path,'utf8'),old=JSON.parse(raw),next=migrateManifest(old);
 if(old.schema_version===3)console.log('Already v3; no files changed.');
 else{const backup=join(ROOT,'research/.private/migrations');mkdirSync(backup,{recursive:true});writeFileSync(join(backup,`manifest-v2-${hash(raw)}.json`),raw,{flag:'wx'});writeFileSync(path,JSON.stringify(next,null,2)+'\n');console.log('Migrated manifest; original snapshot saved privately. Recheck metadata and semantic review.');}
}
