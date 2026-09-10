import {createServer} from 'node:http';
import {readFileSync,statSync,realpathSync} from 'node:fs';
import {join,resolve,sep,extname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {ROOT} from './data.mjs';
import {build} from './build.mjs';
import {responseHeaders} from './publication.mjs';
export async function serve(directory,port=0) {
 const root=realpathSync(directory),profile=JSON.parse(readFileSync(join(root,'build-info.json'))).profile||'preview',types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.woff2':'font/woff2','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
 const server=createServer((req,res)=>{
  try{const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);let file=resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
   if(!file.startsWith(root+sep)||!realpathSync(file).startsWith(root+sep)||!statSync(file).isFile())throw Error();
   res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream',...responseHeaders(profile,file.endsWith('/404.html')?'404.html':file)});res.end(readFileSync(file));
  }catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8',...responseHeaders(profile,'404.html')});res.end(readFileSync(join(root,'404.html')));}
 });await new Promise((ok,fail)=>{server.once('error',fail);server.listen(port,'127.0.0.1',ok);});
 return {server,url:`http://127.0.0.1:${server.address().port}`};
}
if(process.argv[1]===fileURLToPath(import.meta.url)) {build(ROOT);const {url}=await serve(join(ROOT,'dist/web'),Number(process.env.PORT||4173));console.log(`Local preview: ${url}`);}
