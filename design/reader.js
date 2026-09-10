// Progressive reader interactions, adapted from AFM3 patterns; no media or tracking on page load.
(()=>{
 const d=document.documentElement,p=d.dataset.storagePrefix;
 const save=(k,v)=>{try{localStorage.setItem(p+k,String(v));}catch{}};
 const scheme=document.querySelector('.scheme-toggle');
 const renderScheme=()=>{const dark=d.dataset.colorScheme==='dark';scheme.textContent=dark?'淺色':'深色';scheme.setAttribute('aria-pressed',String(dark));};
 scheme.addEventListener('click',()=>{d.dataset.colorScheme=d.dataset.colorScheme==='dark'?'light':'dark';save('color-scheme',d.dataset.colorScheme);renderScheme();});document.addEventListener('schemechange',renderScheme);renderScheme();
 function mode(next){d.dataset.readerMode=next;document.querySelectorAll('[data-reader-mode-set]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.readerModeSet===next)));document.querySelectorAll('.audit-details').forEach(el=>el.open=next==='audit');}
 document.querySelectorAll('[data-reader-mode-set]').forEach(b=>b.addEventListener('click',()=>{mode(b.dataset.readerModeSet);save('reader-mode',b.dataset.readerModeSet);}));mode(d.dataset.readerMode);
 const dec=document.querySelector('.fs-dec'),inc=document.querySelector('.fs-inc'),val=document.querySelector('.fs-val'),steps=[90,100,110,120];
 function font(v){d.dataset.fontScale=String(v);if(!val)return;val.textContent=v+'%';dec.disabled=v===90;inc.disabled=v===120;}
 font(Number(d.dataset.fontScale)||100);
 if(dec){dec.addEventListener('click',()=>{font(steps[Math.max(0,steps.indexOf(Number(d.dataset.fontScale))-1)]);save('font-scale',d.dataset.fontScale);});inc.addEventListener('click',()=>{font(steps[Math.min(3,steps.indexOf(Number(d.dataset.fontScale))+1)]);save('font-scale',d.dataset.fontScale);});}
 const fold=document.querySelector('.tools-fold');if(fold){const mq=matchMedia('(max-width: 760px)');const sync=()=>fold.open=!mq.matches;sync();mq.addEventListener('change',sync);}
 const toc=[...document.querySelectorAll('.side-toc a')].map(a=>({a,el:document.getElementById(a.hash.slice(1))}));
 const back=document.querySelector('.back-top');
 function spy(){let cur=toc[0];for(const t of toc)if(t.el.getBoundingClientRect().top <= (parseFloat(getComputedStyle(d).scrollPaddingTop)||0)+(parseFloat(getComputedStyle(t.el).scrollMarginTop)||0)+1)cur=t;
  // The final section may be too short to reach the top activation line.
  if(scrollY>0 && scrollY+innerHeight>=document.documentElement.scrollHeight-2)cur=toc.at(-1);
  toc.forEach(t=>{t.a.classList.toggle('toc-current',t===cur);if(t===cur)t.a.setAttribute('aria-current','location');else t.a.removeAttribute('aria-current');});
  const backThreshold=Math.min(600,Math.max(100,(document.documentElement.scrollHeight-innerHeight)/2));
  back.classList.toggle('show',scrollY>backThreshold);}
 addEventListener('scroll',spy,{passive:true});addEventListener('resize',spy);spy();
 // Native anchors remain usable without JS. Focus follows navigations and respects reduced motion.
 document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const target=document.getElementById(decodeURIComponent(a.hash.slice(1)));if(!target)return;
 e.preventDefault();history.replaceState(null,'',a.hash);target.focus({preventScroll:true});target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});});
 const input=document.querySelector('#page-search'),results=document.querySelector('#search-results'),status=document.querySelector('#search-status');
 if(input){const blocks=[...document.querySelectorAll('main section,main article,main > h2')];input.addEventListener('input',()=>{results.replaceChildren();status.textContent='';const q=input.value.trim().toLocaleLowerCase();if(!q)return;const hits=blocks.filter(el=>el.textContent.toLocaleLowerCase().includes(q));status.textContent=hits.length?`${hits.length} 筆結果`:'找不到符合項目';hits.slice(0,8).forEach(el=>{const h=el.matches('h2')?el:el.querySelector('h2,h3'),a=document.createElement('a');a.className='search-hit';a.href='#'+(el.id||h?.id);a.textContent=el.dataset.searchTitle||h?.textContent||el.textContent.slice(0,60);results.append(a);});});input.addEventListener('keydown',e=>{if(e.key==='Escape'){input.value='';input.dispatchEvent(new Event('input'));}if(e.key==='Enter'){const a=results.querySelector('a');if(a){a.click();}}});}
 document.querySelectorAll('.copy-time').forEach(b=>b.addEventListener('click',async()=>{const s=b.closest('.evidence-segment').querySelector('.copy-status');try{await navigator.clipboard.writeText(b.dataset.time);s.textContent='時間已複製';}catch{s.textContent='無法自動複製，請選取上方時間。';}}));
 document.querySelectorAll('.load-player').forEach(b=>b.addEventListener('click',()=>{const panel=b.closest('.evidence-segment').querySelector('.video-panel');if(panel.querySelector('iframe'))return;
 const url=new URL(b.dataset.embed);if(url.origin!=='https://www.youtube-nocookie.com')return;
 const note=document.createElement('p');note.textContent='播放器若無法載入，請使用上方影片入口與時間。';
 const frame=document.createElement('iframe');frame.title='指定影片片段播放器';frame.loading='lazy';frame.referrerPolicy='no-referrer';frame.allow='fullscreen';frame.src=url.href;frame.addEventListener('error',()=>{note.textContent='播放器載入失敗；請使用上方影片入口。';});panel.append(note,frame);b.disabled=true;
 }));
})();
