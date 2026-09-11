import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {ROOT,loadData,allBlocks,covered,releaseErrors} from './data.mjs';
import {productionErrors} from './publication.mjs';
import {inspectSourceTree} from './public-tree.mjs';
import {checkVerification,checkDraftPreviewVerification} from './verification.mjs';
import {makePlan,hostingPreflight} from './deploy.mjs';

// Count the union, never the sum of overlapping reviewed intervals. Acquisition
// and subtitles are deliberately not treated as original-audio verification.
export function reviewedSeconds(segments,flag){
 const intervals=segments.filter(s=>s[flag]===true).map(s=>[s.start_seconds,s.end_seconds]).sort((a,b)=>a[0]-b[0]);
 let total=0,end=0;
 for(const [start,stop] of intervals){total+=Math.max(0,stop-Math.max(start,end));end=Math.max(end,stop);}
 return total;
}

export function inspectStatus(root=ROOT){
 const d=loadData(root),source=inspectSourceTree(root),blocks=allBlocks(d);
 const contentErrors=releaseErrors(d),production=productionErrors(d);
 const verification={status:'missing',gate:null,profile:null,completed_at:null};
 if(existsSync(join(root,'dist/verification.json'))){
  verification.status='stale-or-invalid';
  try{
   const saved=JSON.parse(readFileSync(join(root,'dist/verification.json')));
   if(!['scaffold','release','production'].includes(saved.gate))throw Error('Unknown verification gate');
   const current=saved.gate==='scaffold'?checkDraftPreviewVerification(root,saved.profile):checkVerification(root,saved.profile);
   Object.assign(verification,{status:'current',gate:current.gate,profile:current.profile,completed_at:current.completed_at,output_digest:current.output_digest});
  }catch{ /* Saved claims are not evidence for the current tree or artifact. */ }
 }
 const rebuild={status:'missing',completed_at:null};
 if(existsSync(join(root,'docs/qa/public-rebuild.json'))){
  rebuild.status='stale-or-invalid';
  try{
   const r=JSON.parse(readFileSync(join(root,'docs/qa/public-rebuild.json')));
   const expected=['npm ci --ignore-scripts --no-audit --no-fund','npm run verify:scaffold','npm run test:release-fixture'];
   if(r.status==='passed'&&r.source?.digest===source.digest&&r.steps?.length===expected.length&&r.steps.every((s,i)=>s.command===expected[i]&&s.exit_code===0&&!s.error))Object.assign(rebuild,{status:'current',completed_at:r.finished_at});
  }catch{ /* Malformed or unrelated reports cannot imply a clean rebuild. */ }
 }
 // Reuse the actual Hosting preflight without saving its temporary plan or
 // consuming confirmation/receipts. Content certification is reported below
 // independently; a ready draft artifact does not certify its unfinished sources.
 const hosting={channel:'live',project:d.config.deployment.target_firebase_project,site:d.config.deployment.target_firebase_site,profile:null,local_preflight:'blocked',blockers:[],engineering_verified:false,required_verification_gate:null,content_certification_required:null,remote_environment:'not-queried',authorization:'required-at-execution',requires_one_time_confirmation:true};
 try{
  const plan=makePlan(root,{channel:'live'}),policy=hostingPreflight(d,plan.profile);
  Object.assign(hosting,{profile:plan.profile,local_preflight:plan.ready?'passed':'blocked',blockers:plan.errors,engineering_verified:verification.status==='current'&&verification.gate===plan.verification_gate&&verification.profile===plan.profile,required_verification_gate:plan.verification_gate,content_certification_required:!policy.draft});
 }catch(e){hosting.blockers=[e.code==='ENOENT'?'Hosting artifact or configuration is missing; build and verify the current output first.':e.message];}
 return {
  schema_version:1,checked_at:new Date().toISOString(),input_digest:d.digest,source_tree_digest:source.digest,
  publication_status:d.config.publication_status,
  semantic:{decision:d.semantic.decision,digest_matches:d.semantic.input_digest===d.digest},
  content:{claims:d.claims.length,verified:d.claims.filter(c=>c.verification==='verified').length,candidates:d.claims.filter(c=>c.verification==='candidate').map(c=>c.id),nodes:blocks.length,pages:d.config.pages.length,required_scope:d.coverage.required_scope,reviewed_seconds:{audio:reviewedSeconds(d.coverage.segments,'audio_checked'),visual:reviewedSeconds(d.coverage.segments,'visual_viewed'),subtitles:reviewedSeconds(d.coverage.segments,'subtitles_read')},scope_complete:d.coverage.required_scope.length>0&&d.coverage.required_scope.every(s=>covered(s,d.coverage.segments)),blocking_gaps:d.gaps.items.filter(g=>g.blocking||g.kind==='conflict').map(g=>g.id)},
  public_source:{status:'checked',file_count:source.entries.length},verification,clean_rebuild:rebuild,hosting,
  release:{content_preflight:contentErrors.length?'blocked':'passed',blockers:contentErrors,verified:!contentErrors.length&&verification.status==='current'&&['release','production'].includes(verification.gate)},
  production:{content_preflight:production.length?'blocked':'passed',blockers:production,verified:!production.length&&verification.status==='current'&&verification.gate==='production'},
  remote:{status:'not-queried',github_ci:null,preview_verified:null,live_verified:null},
  limits:['Local snapshot only; saved verification must match current input, public source and tested output.','Hosting local_preflight checks the configured live target and current artifact without saving a deployment plan, authorizing a write or querying the remote environment.','Draft Hosting readiness is separate from release/production content certification; unfinished coverage, gaps and semantic review remain reported.','Preflight is not full engineering verification or semantic approval.','Historical delivery and deployment receipts are not used to infer current remote state.']
 };
}

if(process.argv[1]===fileURLToPath(import.meta.url))try{
 if(process.argv.length!==2)throw Error('Usage: npm run check:status');
 const report=inspectStatus();mkdirSync(join(ROOT,'dist'),{recursive:true});
 writeFileSync(join(ROOT,'dist/status.json'),JSON.stringify(report,null,2)+'\n');
 console.log(JSON.stringify(report,null,2));
 // A valid report can describe blocked content. Use verify:release/production
 // for enforcement; this command never deletes or re-signs their records.
}catch(e){console.error(e.message);process.exitCode=1;}
