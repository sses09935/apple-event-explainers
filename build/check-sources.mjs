import {authorQualityErrors} from './quality.mjs';
import {loadData,releaseErrors,allBlocks,pageBlocks} from './data.mjs';
try {
 const data=loadData();
 const quality=authorQualityErrors(data);if(quality.length)throw Error(quality.join("\n"));
 if(process.argv.includes('--digest')) console.log(data.digest);
 else { console.log(`Schema and relations valid: ${data.claims.length} KB claims, ${allBlocks(data).length} formal nodes across ${data.config.pages.length} pages.`); for(const p of data.config.pages.filter(p=>p.role==='reader'))console.log(`${p.file}: ${pageBlocks(data,p.file).length} nodes`); if(data.config.publication_status==='release-ready') {const errors=releaseErrors(data);if(errors.length)throw Error(errors.join('\n'));} }
} catch(e) {console.error(e.message);process.exitCode=1;}
