/* Fyzikální vzorce – vykreslení přehledu a kapitol, simulace, přepínání motivu. */
/* ---------- RENDER ---------- */
const app=$('#app');
const isDone=id=>store.get('done:'+id)==='1';

function dashboard(){
  $('#homeBtn').hidden=true;
  const done=CH.filter(c=>isDone(c.id)).length;
  let h=`<section class="hero">
    <span class="eyebrow">Fyzika · 6.–8. ročník</span>
    <h1>Vzorce, které musíš znát</h1>
    <p class="lead">Opakování všech vzorců ze 6. a 7. ročníku a pokračování v 8. ročníku. Každý vzorec má vlastní kapitolu, v každé najdeš vysvětlení, simulaci na vyzkoušení, jak z vzorce vyjádřit neznámou, a tři řešené příklady od lehkého po náročnější.</p>
    <div><span class="badge ${done===CH.length?'b-succ':'b-muted'}"><span class="d"></span>Prostudováno ${done} z ${CH.length}</span></div>
  </section>
  <section class="steps glass" aria-label="Postup řešení příkladu">
    <h3>Jak vyřešit každý příklad – pět kroků</h3>
    <div class="step"><b>1</b><strong>Zápis</strong><span>Vypiš, co znáš, a co hledáš s otazníkem.</span></div>
    <div class="step"><b>2</b><strong>Převod jednotek</strong><span>Gramy na kg, cm² na m², km/h na m/s – podle vzorce.</span></div>
    <div class="step"><b>3</b><strong>Vzorec</strong><span>Napiš vzorec a vyjádři z něj, co hledáš.</span></div>
    <div class="step"><b>4</b><strong>Dosazení</strong><span>Dosaď čísla a spočítej. Nezapomeň na jednotku.</span></div>
    <div class="step"><b>5</b><strong>Odpověď</strong><span>Celou větou. Dává výsledek smysl?</span></div>
  </section>`;
  h+=`<div class="key-note">${STAR.replace('class="star"','')}<div><strong>Nejdůležitější:</strong> v každé kapitole je zvýrazněná úloha <strong>Vyjádři neznámou ze vzorce</strong> s postupem krok po kroku. Začni vždy jí.</div></div>`;
  GROUPS.forEach(g=>{
    const list=CH.map((c,i)=>({c,i})).filter(o=>o.c.group===g.id);
    h+=`<section class="group"><div class="group-head"><h2>${g.name}</h2><span class="muted">${g.desc}</span></div><div class="cards">`;
    list.forEach(({c,i})=>{
      h+=`<a class="card glass" href="#${c.id}">
        <div class="top"><span class="num">Kapitola ${i+1}</span><span style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end">${c.group==='g6'?'<span class="badge b-key">8. ročník</span>':'<span class="badge b-muted">Opakování 6.–7.</span>'}${isDone(c.id)?'<span class="badge b-succ"><span class="d"></span>Hotovo</span>':''}</span></div>
        <div><div class="formula">${F(c.formula)}</div><h3>${c.name}</h3></div>
        <p>${c.short}</p></a>`;
    });
    h+=`</div></section>`;
  });
  h+=`<p class="muted" style="font-size:.9rem">Ve všech příkladech počítáme s g = 10 N/kg, jak je ve škole zvykem.</p>`;
  app.innerHTML=h;
}

function chapter(c){
  $('#homeBtn').hidden=false;
  const idx=CH.indexOf(c), prev=CH[idx-1], next=CH[idx+1];
  const grp=GROUPS.find(g=>g.id===c.group);
  let h=`<section class="ch-head glass">
     <div class="meta"><span class="eyebrow">Kapitola ${idx+1} · ${c.group==='g6'?'8. ročník':'Opakování 6.–7. ročníku · '+grp.name}</span><h1>${c.name}</h1><p class="muted">${c.short}</p></div>
     <div class="big">${F(c.formula)}</div>
   </section>
   <nav class="subnav glass" aria-label="Části kapitoly"><a href="#" data-go="s-teorie">Teorie</a><a href="#" data-go="s-sim">Simulace</a><a href="#" data-go="s-nezn">Vyjádření neznámé</a><a href="#" data-go="ex-key">★ Vyjádři neznámou</a><a href="#" data-go="s-pr">Řešené příklady</a></nav>

   <section class="sec glass" id="s-teorie">
     <div class="sec-title"><h2>Teorie</h2></div>
     <div class="two">
       <div class="prose">${c.theory}</div>
       <div style="display:grid;gap:14px;align-content:start;min-width:0">
         <div class="box"><h4>Co znamenají písmena</h4><div class="tbl-wrap"><table class="sym"><thead><tr><th>Značka</th><th>Veličina</th><th>Jednotka</th></tr></thead><tbody>
           ${c.symbols.map(s=>`<tr><td>${F(s[0])}</td><td>${s[1]}</td><td>${s[2]}</td></tr>`).join('')}</tbody></table></div></div>
         <div class="box"><h4>Zapamatuj si</h4><ul>${c.remember.map(x=>`<li>${x}</li>`).join('')}</ul></div>
       </div>
     </div>
     <div class="callout"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg><div><strong>Kde to potkáš:</strong> ${c.life}</div></div>
   </section>

   <section class="sec glass" id="s-sim">
     <div class="sec-title"><h2>Simulace</h2><span class="muted">Hýbej posuvníky a sleduj, co se změní.</span></div>
     <div class="sim"><div class="stage" id="stage"></div><div class="box ctrls" id="ctrls"></div><div class="readout" id="readout"></div></div>
     <div class="callout"><svg viewBox="0 0 24 24"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg><div><strong>Vyzkoušej:</strong> ${c.sim.hint}</div></div>
   </section>

   <section class="sec glass" id="s-nezn">
     <div class="sec-title"><h2>Vyjádření neznámé</h2><span class="muted">Klikni na veličinu, kterou hledáš.</span></div>
     <div class="rearr"><div class="chips" id="chips">${c.rearr.map((x,i)=>`<button type="button" class="f" data-i="${i}" aria-pressed="${i===0}">${x.q}</button>`).join('')}</div>
     <div class="rearr-out" id="rearrOut"></div>
     <p class="muted" style="font-size:.95rem;max-width:68ch">Pravidlo: co je na jedné straně <strong>násobené</strong>, přesuneš na druhou stranu jako <strong>dělení</strong> – a obráceně. Vždy dělej se oběma stranami rovnice totéž.</p></div>
   </section>

   <section class="sec glass" id="s-pr">
     <div class="sec-title"><h2>Řešené příklady</h2><span class="muted">Nejdřív zkus počítat sama, pak odkrývej postup krok po kroku. Začni zvýrazněnou úlohou.</span></div>
     <div class="examples">
       <article class="ex ex-key" id="ex-key">
         <div class="ex-head">${STAR}<h3>Vyjádři neznámou ze vzorce</h3><span class="badge b-key">Nejdůležitější úloha</span></div>
         <p class="task">${KEY[c.id].task}</p>
         <div class="rule"><span><strong>Zlaté pravidlo:</strong> hledaná veličina musí zůstat na jedné straně úplně sama. Co ji <strong>násobí</strong>, tím obě strany <strong>vydělíme</strong>. Co ji <strong>dělí</strong>, tím obě strany <strong>vynásobíme</strong>.</span><span class="muted">${KEY[c.id].tip}</span></div>
         <ol>${keySteps(KEY[c.id]).map((s,j,a)=>`<li class="${s[2]||''}${j===a.length-1?' ans':''}" hidden><span class="k">${s[0]}</span><div class="v">${s[1]}</div></li>`).join('')}</ol>
         <div class="actions"><button class="btn" type="button" data-act="next">Ukázat další krok</button><button class="btn sec-b" type="button" data-act="all">Celé řešení</button><button class="btn sec-b" type="button" data-act="hide" hidden>Skrýt řešení</button></div>
       </article>
       ${c.examples.map((e,i)=>`
       <article class="ex" data-ex="${i}">
         <div class="ex-head"><h3>Příklad ${i+1}</h3><span class="badge ${['b-succ','b-info','b-warn'][i]}"><span class="d"></span>${e.lvl}</span></div>
         <p class="task">${e.task}</p>
         <ol>${e.steps.map((s,j)=>`<li class="${s[2]||''}${j===e.steps.length-1?' ans':''}" hidden><span class="k">${s[0]}</span><div class="v">${s[1]}</div></li>`).join('')}</ol>
         <div class="actions"><button class="btn" type="button" data-act="next">Ukázat další krok</button><button class="btn sec-b" type="button" data-act="all">Celé řešení</button><button class="btn sec-b" type="button" data-act="hide" hidden>Skrýt řešení</button></div>
       </article>`).join('')}</div>
   </section>

   <div class="ch-foot">
     <label class="done-toggle"><input type="checkbox" id="doneChk" ${isDone(c.id)?'checked':''}> Mám prostudováno</label>
     <div style="display:flex;gap:8px;flex-wrap:wrap">
       ${prev?`<a class="iconbtn" href="#${prev.id}"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>${prev.name}</a>`:''}
       ${next?`<a class="iconbtn" href="#${next.id}">${next.name}<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></a>`:`<a class="iconbtn" href="#">Zpět na přehled</a>`}
     </div>
   </div>`;
  app.innerHTML=h;
  window.scrollTo(0,0);

  // sub-nav (bez změny hashe)
  app.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();document.getElementById(a.dataset.go).scrollIntoView({behavior:'smooth'});}));
  // neznámá
  const out=$('#rearrOut');
  const showR=i=>{const x=c.rearr[i];out.innerHTML=`<div class="f">${x.f}</div><p>${x.how}</p>`;
    $('#chips').querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.i==i));};
  $('#chips').addEventListener('click',e=>{const b=e.target.closest('button');if(b)showR(+b.dataset.i)});
  showR(0);
  // příklady
  app.querySelectorAll('.ex').forEach(ex=>{
    const items=[...ex.querySelectorAll('li')], next=ex.querySelector('[data-act=next]'), all=ex.querySelector('[data-act=all]'), hide=ex.querySelector('[data-act=hide]');
    const sync=()=>{const shown=items.filter(li=>!li.hidden).length; next.hidden=all.hidden=shown===items.length; hide.hidden=shown===0;};
    next.onclick=()=>{const li=items.find(li=>li.hidden); if(li) li.hidden=false; sync();};
    all.onclick=()=>{items.forEach(li=>li.hidden=false); sync();};
    hide.onclick=()=>{items.forEach(li=>li.hidden=true); sync();};
  });
  $('#doneChk').addEventListener('change',e=>store.set('done:'+c.id,e.target.checked?'1':'0'));
  buildSim(c.sim);
}

let playTimer=null;
function buildSim(sim){
  const st={}, ctrls=$('#ctrls'), stage=$('#stage'), ro=$('#readout');
  const redraw=()=>{const r=sim.draw(st); stage.innerHTML=r.svg; ro.innerHTML=r.out;};
  sim.defs.forEach(d=>{
    const w=document.createElement('div'); w.className='ctl';
    if(d.type==='range'){
      st[d.id]=d.value;
      w.innerHTML=`<label for="r-${d.id}"><span>${d.label}</span><output id="o-${d.id}"></output></label><input type="range" id="r-${d.id}" min="${d.min}" max="${d.max}" step="${d.step}" value="${d.value}">`;
      const inp=w.querySelector('input'), o=w.querySelector('output');
      const set=()=>{st[d.id]=+inp.value; o.textContent=fmt(st[d.id],2)+' '+d.unit;};
      inp.addEventListener('input',()=>{stopPlay();set();redraw();}); set();
    } else if(d.type==='seg'){
      st[d.id]=d.value;
      w.innerHTML=`<span class="lbl">${d.label}</span><div class="seg">${d.options.map(o=>`<button type="button" data-v="${o[1]}" aria-pressed="${o[1]===d.value}">${o[0]}</button>`).join('')}</div>`;
      w.querySelector('.seg').addEventListener('click',e=>{const b=e.target.closest('button'); if(!b)return; st[d.id]=+b.dataset.v;
        w.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b)); redraw();});
    } else if(d.type==='play'){
      w.innerHTML=`<button class="btn" type="button">▶ ${d.label}</button>`;
      w.querySelector('button').addEventListener('click',()=>{
        stopPlay(); const t=sim.defs.find(x=>x.id===d.target), inp=$('#r-'+t.id); const t0=performance.now();
        const tick=now=>{const k=Math.min(1,(now-t0)/d.duration); const v=Math.round((t.min+(t.max-t.min)*k)/t.step)*t.step;
          inp.value=v; st[t.id]=v; $('#o-'+t.id).textContent=fmt(v,2)+' '+t.unit; redraw(); if(k<1) playTimer=requestAnimationFrame(tick);};
        playTimer=requestAnimationFrame(tick);
      });
    }
    ctrls.appendChild(w);
  });
  redraw();
}
function stopPlay(){ if(playTimer){cancelAnimationFrame(playTimer);playTimer=null;} }

function route(){
  stopPlay();
  const id=location.hash.slice(1); const c=CH.find(x=>x.id===id);
  c?chapter(c):dashboard();
  if(!c) window.scrollTo(0,0);
}
window.addEventListener('hashchange',route);

/* ---------- motiv ---------- */
const root=document.documentElement;
const SUN='<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
const MOON='<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
function currentTheme(){ const t=root.getAttribute('data-theme'); if(t==='light'||t==='dark') return t; return matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'; }
function paintThemeBtn(){ const t=currentTheme(); $('#themeIcon').innerHTML=t==='dark'?SUN:MOON; $('#themeLbl').textContent=t==='dark'?'Světlý':'Tmavý'; }
const saved=store.get('theme'); if(saved==='light'||saved==='dark') root.setAttribute('data-theme',saved);
$('#themeBtn').addEventListener('click',()=>{const n=currentTheme()==='dark'?'light':'dark'; root.setAttribute('data-theme',n); store.set('theme',n); paintThemeBtn();});
matchMedia('(prefers-color-scheme: light)').addEventListener('change',paintThemeBtn);
paintThemeBtn();
route();
