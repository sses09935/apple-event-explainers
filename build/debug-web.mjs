import {join} from 'node:path';
import {ROOT,loadData} from './data.mjs';
import {debug,checkTracked} from './inspect.mjs';
try{console.log('Static DOM checks:',debug(join(ROOT,'dist/web'),loadData()));console.log('Privacy tracked-file check:',checkTracked());console.log('Static checks are not browser or semantic verification.');}catch(e){console.error(e.message);process.exitCode=1;}
