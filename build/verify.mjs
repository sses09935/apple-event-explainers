import {execFileSync} from 'node:child_process';
import {rmSync} from 'node:fs';
import {join} from 'node:path';
import {ROOT,loadData,releaseErrors} from './data.mjs';
import {requiredChecks,writeVerification} from './verification.mjs';
const gate=process.argv[2];
try{
 if(!['scaffold','release','production'].includes(gate))throw Error('Expected scaffold, release or production');
 rmSync(join(ROOT,'dist/verification.json'),{force:true});
 if(gate!=='scaffold'){const errors=releaseErrors(loadData());if(errors.length)throw Error('release-blocked:\n- '+errors.join('\n- '));}
 const commands=[];
 for(const script of requiredChecks){const args=['run',script];if(gate==='production'&&script==='build:web')args.push('--','--profile','production');execFileSync('npm',args,{cwd:ROOT,env:{...process.env,...(gate==='production'?{OUTPUT_PROFILE:'production'}:{})},stdio:'inherit'});commands.push({command:script,exit_code:0});}
 writeVerification(ROOT,gate,commands);
 console.log(gate==='scaffold'?'scaffold-ready (not content-release approval)':gate+'-ready (not deployment authorization)');
}catch(e){console.error(e.message);process.exitCode=1;}
