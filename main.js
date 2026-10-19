(()=>{const S=window.SITE,$=s=>document.querySelector(s);
const h=(t,c,...k)=>{const e=document.createElement(t);if(c)e.className=c;k.flat(2).forEach(x=>e.append(x&&x.nodeType?x:document.createTextNode(x==null?'':x)));return e};
const a=(u,t,c)=>{const e=h('a',c||'',t);e.href=u;if(/^https?:/.test(u)){e.target='_blank';e.rel='noopener'}return e};
const card=i=>{const tags=i.tags||[],c=h('article','card');c.dataset.tags=tags.join('|');
c.append(h('header','',h('h3','',i.title),i.status?h('span','stamp',i.status):''),h('p','',i.blurb),
h('dl','tb',[['Date',i.date],['Scale',i.scale],['Tags',tags.join(', ')]].filter(r=>r[1]).map(r=>h('div','',h('dt','',r[0]),h('dd','',r[1])))));
if(i.link)c.append(a(i.link,i.linkText||'View project','more'));return c};
const R={text:s=>h('div','prose',s.body.map(p=>h('p','',p))),
cards:s=>{const g=h('div','grid'),w=h('div'),tags=[...new Set(s.items.flatMap(i=>i.tags||[]))];
if(tags.length>1){const bar=h('div','chips');['All',...tags].forEach((t,n)=>{const b=h('button',n?'':'on',t);
b.onclick=()=>{bar.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
g.querySelectorAll('.card').forEach(c=>c.hidden=!!n&&!c.dataset.tags.split('|').includes(t))};bar.append(b)});w.append(bar)}
s.items.forEach(i=>g.append(card(i)));w.append(g);return w},
timeline:s=>h('ol','tl',s.items.map(i=>h('li','',h('span','when',i.when),h('div','',h('h3','',i.what),i.where?h('p','org',i.where):'',h('p','',i.blurb)))))};
const sec=s=>{const e=h('section','',h('div','sh',h('h2','',s.title),s.sheet?h('span','sheet','Sheet '+s.sheet):''),(R[s.type]||R.text)(s));e.id=s.id;return e};
const ct=S.contact||{},tg=h('button','theme','');
const setT=m=>{document.documentElement.dataset.theme=m;tg.textContent=m==='dark'?'Switch to drafting film':'Switch to blueprint';try{localStorage.setItem('theme',m)}catch(e){}};
tg.onclick=()=>setT(document.documentElement.dataset.theme==='dark'?'light':'dark');
let saved;try{saved=localStorage.getItem('theme')}catch(e){}setT(saved||'dark');
document.title=S.name+' | Portfolio';
const links=[['Email',ct.email&&'mailto:'+ct.email],['GitHub',ct.github],['LinkedIn',ct.linkedin]].filter(l=>l[1]).map(l=>a(l[1],l[0]));
$('#app').replaceChildren(
h('header','top',h('nav','nav',S.sections.map(s=>a('#'+s.id,s.title)),tg),h('h1','',S.name),h('div','dim',h('span','',S.role)),h('p','tag',S.tagline)),
h('main','',S.sections.map(sec)),
h('footer','foot',h('div','',h('strong','',S.name),h('p','',ct.location||'')),h('div','links',links),h('p','small','Drawn and built by hand. Edit content.js to update.')));
})();
