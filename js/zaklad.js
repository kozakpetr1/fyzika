/* Fyzikální vzorce – společné pomocné funkce, skupiny a seznam kapitol.
   Každá kapitola v js/kapitoly/ volá CH.push({...}) a doplní KEY['id'] = úlohu na vyjádření neznámé. */
/* ---------- pomocníci ---------- */
const $=s=>document.querySelector(s);
const fmt=(n,d=2)=>Number(n).toLocaleString('cs-CZ',{maximumFractionDigits:d});
const I=s=>`<i>${s}</i>`;
const S=(s,b)=>`<i>${s}</i><sub>${b}</sub>`;
const fr=(a,b)=>`<span class="frac"><span>${a}</span><span>${b}</span></span>`;
const F=h=>`<span class="f">${h}</span>`;
const r=`<i>ρ</i>`, Fg=S('F','g'), Fh=S('F','h'), Fvz=S('F','vz'), ph=S('p','h');
const F1=S('F','1'),F2=S('F','2'),S1=S('S','1'),S2=S('S','2'),a1=S('a','1'),a2=S('a','2');
const D=' · ', E=' = ';
const m3='m<sup>3</sup>', m2='m<sup>2</sup>', cm3='cm<sup>3</sup>', cm2='cm<sup>2</sup>', dm3='dm<sup>3</sup>';
const u=s=>`<span class="u">${s}</span>`;
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

/* šipka v SVG */
function arrow(x1,y1,x2,y2,color,w=4){
  const L=Math.hypot(x2-x1,y2-y1); if(L<2) return '';
  const ux=(x2-x1)/L, uy=(y2-y1)/L, h=Math.min(14,L*.6), hw=h*.55;
  const bx=x2-ux*h, by=y2-uy*h;
  return `<line x1="${x1}" y1="${y1}" x2="${bx}" y2="${by}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>
  <polygon points="${x2},${y2} ${bx-uy*hw},${by+ux*hw} ${bx+uy*hw},${by-ux*hw}" fill="${color}"/>`;
}
function spring(x,y1,y2,coils=9,w=14){
  let d=`M${x},${y1} l0,6`; const seg=(y2-y1-12)/(coils*2);
  for(let i=0;i<coils*2;i++){ d+=` L${x+(i%2?-w:w)},${y1+6+seg*(i+.5)}`; }
  d+=` L${x},${y2-6} L${x},${y2}`;
  return `<path d="${d}" fill="none" stroke="var(--muted)" stroke-width="2.2" stroke-linejoin="round"/>`;
}
const svgOpen=(h=320)=>`<svg viewBox="0 0 600 ${h}" role="img">`;

/* ---------- SKUPINY ---------- */
const GROUPS=[
  {id:'g1',name:'Síla a látka',desc:'Jak Země přitahuje tělesa a jak „napěchovaná“ je látka.'},
  {id:'g2',name:'Pohyb',desc:'Jak rychle se něco pohybuje.'},
  {id:'g3',name:'Otáčení a páky',desc:'Proč dlouhý klíč povolí i utaženou matici.'},
  {id:'g4',name:'Tlak',desc:'Jak se síla rozloží na plochu.'},
  {id:'g5',name:'Kapaliny',desc:'Co se děje pod hladinou.'},
  {id:'g6',name:'8. ročník: Práce, výkon a účinnost',desc:'Nové učivo – navazuje na sílu a dráhu z opakování.'},
];

const CH=[];   // kapitoly – plní soubory v js/kapitoly/
const KEY={};  // zvýrazněné úlohy na vyjádření neznámé

/* ---------- ÚLOHY NA VYJÁDŘENÍ NEZNÁMÉ ---------- */
const cx=x=>`<span class="cx">${x}</span>`;
function prodLines(lhs,fs,t){
  const o=fs.filter(x=>x!==t), oj=o.join(D), oop=o.length>1?`(${oj})`:oj;
  const num=fs.map(x=>o.includes(x)?cx(x):x).join(D), den=o.map(cx).join(D);
  return [[`${lhs}${E}${fs.join(D)}`,`| : ${oop}`,`Hledané ${F(t)} je vynásobené ${o.length>1?'veličinami '+o.map(F).join(' a '):F(oj)}. Násobení zrušíme dělením – <strong>obě strany</strong> vydělíme ${F(oop)}.`],
          [`${fr(lhs,oj)}${E}${fr(num,den)}`,'',`Vpravo je ${o.length>1?F(oj):F(oj)} nahoře i dole, takže se zkrátí (dělit číslo samo sebou dá 1).`],
          [`${t}${E}${fr(lhs,oj)}`,'','Vpravo zůstalo samotné '+F(t)+'. Strany prohodíme, aby hledaná veličina byla vlevo.']];
}
function divLines(q,n,d){
  return {a:[[`${q}${E}${fr(n,d)}`,`| · ${d}`,`Hledané ${F(n)} je <strong>děleno</strong> ${F(d)}. Dělení zrušíme násobením – <strong>obě strany</strong> vynásobíme ${F(d)}.`],
             [`${q}${D}${d}${E}${fr(n+D+cx(d),cx(d))}`,'',`Vpravo je ${F(d)} nahoře i dole, takže se zkrátí.`],
             [`${n}${E}${q}${D}${d}`,'','Prohodíme strany a máme výsledek.']],
          b:[[`${n}${E}${q}${D}${d}`,`| : ${q}`,`Vyjdeme z výsledku a). Teď je ${F(d)} <strong>vynásobené</strong> ${F(q)}, proto obě strany vydělíme ${F(q)}.`],
             [`${fr(n,q)}${E}${fr(cx(q)+D+d,cx(q))}`,'',`Vpravo se ${F(q)} zkrátí.`],
             [`${d}${E}${fr(n,q)}`,'','Prohodíme strany a máme výsledek.']]};
}
const TIP_DIV=`Funguje to stejně jako s čísly: ${F('6 = 12 : 2')} → ${F('12 = 6 · 2')} a ${F('2 = 12 : 6')}.`;
const TIP_PROD=`Funguje to stejně jako s čísly: ${F('20 = 2 · 10')} → ${F('2 = 20 : 10')} a ${F('10 = 20 : 2')}.`;
const g_=I('g'), m_=I('m'), V_=I('V');
function keySteps(k){
  const st=[];
  k.parts.forEach(([name,lines])=>lines.forEach((l,j)=>st.push([j===0?name:`${name.slice(0,2)} krok ${j+1}`,
    `<div class="der"><span class="f">${l[0]}</span>${l[1]?`<span class="op">${l[1]}</span>`:''}</div><div class="why">${l[2]}</div>`, j===lines.length-1?'fin':''])));
  st.push(['Zkouška',k.check]);
  st.push(['Výsledek',`<div class="der">${k.res.map(F).join('<span class="muted">a</span>')}</div>`]);
  return st;
}
const STAR='<svg class="star" viewBox="0 0 24 24"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6z"/></svg>';
