import {join} from 'node:path';
import {ROOT,loadData} from './data.mjs';
import {checkLinks} from './inspect.mjs';
try{const r=checkLinks(join(ROOT,'dist/web'),loadData());console.log(`Internal links and fragments valid: ${r.pages} pages, ${r.links} links. External URLs not probed.`);}catch(e){console.error(e.message);process.exitCode=1;}
