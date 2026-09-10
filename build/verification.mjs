import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {loadData,hash} from './data.mjs';
import {files,checkPublic,debug} from './inspect.mjs';
import {inspectSourceTree} from './public-tree.mjs';
export const requiredChecks=['check','test','build:web','check:links','debug:web','test:e2e'];
export function outputDigest(root){return hash(JSON.stringify(files(join(root,'dist/web')).sort().map(p=>[p,hash(readFileSync(join(root,'dist/web',p)))])));}
export function writeVerification(root,gate,commands){
 const d=loadData(root),info=JSON.parse(readFileSync(join(root,'dist/web/build-info.json')));
 checkPublic(join(root,'dist/web'),d);debug(join(root,'dist/web'),d);
 const record={schema_version:1,gate,status:'passed',completed_at:new Date().toISOString(),profile:info.profile,input_digest:d.digest,output_digest:outputDigest(root),source_tree_digest:inspectSourceTree(root).digest,commands};
 mkdirSync(join(root,'dist'),{recursive:true});writeFileSync(join(root,'dist/verification.json'),JSON.stringify(record,null,2)+'\n');return record;
}
function checkRecord(root,profile,gate){
 const p=JSON.parse(readFileSync(join(root,'dist/verification.json'))),d=loadData(root);
 if(p.status!=='passed'||p.gate!==gate||p.profile!==profile)throw Error(`Complete ${gate} verification for this output profile is required`);
 if(p.input_digest!==d.digest||p.source_tree_digest!==inspectSourceTree(root).digest||p.output_digest!==outputDigest(root))throw Error('Verification is stale: content, source or tested artifact changed');
 if(JSON.stringify(p.commands)!==JSON.stringify(requiredChecks.map(command=>({command,exit_code:0}))))throw Error('Incomplete verification command record');
 return p;
}
export const checkVerification=(root,profile)=>checkRecord(root,profile,profile==='production'?'production':'release');
export function checkDraftPreviewVerification(root,profile){
 if(profile!=='preview')throw Error('Draft exception requires preview output');
 return checkRecord(root,profile,'scaffold');
}
