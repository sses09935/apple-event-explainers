import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {ROOT,schema} from './data.mjs';
import {deploymentErrors} from './deploy.mjs';
import {publicBase} from './publication.mjs';

// Read-only probes. Never return raw CLI stdout/stderr: authentication commands
// can unexpectedly include refresh tokens, even in nominally informational JSON.
export function inspectEnvironment(config,{online=false}={},run=spawnSync){
 schema('project',config);
 const errors=deploymentErrors(config,{authorizeRemote:true,authorizeDeploy:true});
 const repo=config.deployment.github_repository;
 const match=typeof repo==='string'&&repo.match(/^https:\/\/github\.com\/([A-Za-z0-9-]+\/[A-Za-z0-9_.-]+)$/);
 if(!match||/afm3/i.test(repo||''))errors.push('Explicit dedicated GitHub repository URL required');
 try{publicBase(config.output?.public_base_url);}catch{errors.push('Verified public origin required');}
 const report={checked_at:new Date().toISOString(),mode:online?'online-read-only':'local',tools:{},github:null,firebase:null,errors,remote_write_performed:false,deploy_permission_tested:false,release_authorized:false};
 function call(command,args){
  try{return run(command,args,{encoding:'utf8',timeout:30000,maxBuffer:2*1024*1024,shell:false,env:{...process.env,CI:'1',NO_UPDATE_NOTIFIER:'1'}});}catch{return {status:null};}
 }
 for(const [command,pattern] of [['node',/^v(\d+\.\d+\.\d+)$/m],['git',/^git version (\d+\.\d+\.\d+)/m],['gh',/^gh version (\d+\.\d+\.\d+)/m],['firebase',/^(\d+\.\d+\.\d+)$/m]]){
  const r=call(command,['--version']),version=r.status===0?String(r.stdout||'').match(pattern)?.[1]:null;
  report.tools[command]=version||null;if(!version)errors.push(`${command} unavailable; check installation or host permissions`);
 }
 if(report.tools.node&&!report.tools.node.startsWith('24.'))errors.push('Node 24 required by project');
 function json(command,args,label){
  const r=call(command,args);if(r.status!==0){errors.push(`${label} failed; raw output suppressed`);return null;}
  try{return JSON.parse(r.stdout);}catch{errors.push(`${label} returned invalid JSON; raw output suppressed`);return null;}
 }
 if(online){
  const user=json('gh',['api','user'],'GitHub authentication');
  report.github={login:typeof user?.login==='string'&&/^[A-Za-z0-9-]+$/.test(user.login)?user.login:null,repository_verified:false,permission:null,visibility:null,empty:null};
  if(!report.github.login)errors.push('GitHub identity unverified');
  if(match&&!/afm3/i.test(repo)){
   const r=json('gh',['repo','view',match[1],'--json','nameWithOwner,visibility,isEmpty,viewerPermission'],'GitHub repository');
   if(r?.nameWithOwner===match[1]&&['ADMIN','MAINTAIN','WRITE'].includes(r.viewerPermission)&&['PRIVATE','PUBLIC','INTERNAL'].includes(r.visibility)&&typeof r.isEmpty==='boolean')Object.assign(report.github,{repository_verified:true,permission:r.viewerPermission,visibility:r.visibility,empty:r.isEmpty});
   else errors.push('Configured GitHub repository or write permission unverified');
  }
  const projects=json('firebase',['projects:list','--json','--non-interactive'],'Firebase authentication');
  const project=config.deployment.target_firebase_project,site=config.deployment.target_firebase_site;
  const validTargets=!deploymentErrors(config,{authorizeRemote:true,authorizeDeploy:true}).length;
  const found=validTargets&&projects?.status==='success'&&Array.isArray(projects.result)&&projects.result.some(p=>p.projectId===project&&p.state==='ACTIVE');
  report.firebase={project_verified:!!found,site_verified:false,default_url:null};
  if(!found)errors.push('Configured Firebase project unverified');
  if(found){
   const sites=json('firebase',['hosting:sites:list','--project',project,'--json','--non-interactive'],'Firebase Hosting sites');
   const s=sites?.status==='success'&&Array.isArray(sites.result?.sites)?sites.result.sites.find(s=>s.name===`projects/${project}/sites/${site}`):null;
   if(s&&s.defaultUrl===`https://${site}.web.app`){report.firebase.site_verified=true;report.firebase.default_url=s.defaultUrl;}
   else errors.push('Configured Firebase Hosting site unverified');
  }
 }
 report.status=errors.length?'needs-attention':online?'connected-targets-verified':'local-tools-ready';
 return report;
}

if(process.argv[1]===fileURLToPath(import.meta.url))try{
 const args=process.argv.slice(2);if(args.some(x=>x!=='--online')||args.length>1)throw Error('Usage: npm run check:environment -- [--online]');
 const report=inspectEnvironment(JSON.parse(readFileSync(join(ROOT,'project.config.json'))),{online:args.includes('--online')});
 mkdirSync(join(ROOT,'docs/qa'),{recursive:true});writeFileSync(join(ROOT,'docs/qa/environment.json'),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify(report,null,2));if(report.errors.length)process.exitCode=1;
}catch{console.error('Environment check failed; diagnostic output suppressed to protect credentials');process.exitCode=1;}
