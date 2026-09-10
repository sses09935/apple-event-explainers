// State contracts adapted from AFM3 reader (Apache-2.0); new isolated storage namespace.
(()=>{const d=document.documentElement,p=d.dataset.storagePrefix;
const get=k=>{try{return localStorage.getItem(p+k);}catch{return null;}};
d.classList.add('js');
const mode=get('reader-mode'),font=get('font-scale');
if(['reading','audit'].includes(mode))d.dataset.readerMode=mode;
if(['90','100','110','120'].includes(font))d.dataset.fontScale=font;
const mq=matchMedia('(prefers-color-scheme: dark)');
function scheme(){const s=get('color-scheme');d.dataset.colorScheme=['light','dark'].includes(s)?s:mq.matches?'dark':'light';document.dispatchEvent(new Event('schemechange'));}
scheme();mq.addEventListener('change',scheme);
})();
