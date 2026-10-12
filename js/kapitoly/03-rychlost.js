/* 3 – RYCHLOST */
CH.push({id:'rychlost',group:'g2',name:'Rychlost rovnoměrného pohybu',formula:`${I('v')}${E}${fr(I('s'),I('t'))}`,
 short:'Jakou dráhu těleso urazí za jednotku času, když jede pořád stejně rychle.',
 symbols:[[I('v'),'rychlost','m/s nebo km/h'],[I('s'),'dráha (vzdálenost)','m nebo km'],[I('t'),'čas','s nebo h']],
 theory:`<p>Rychlost říká, <strong>jakou vzdálenost urazíš za jednu sekundu</strong> (nebo za jednu hodinu). Když auto jede 50 km/h, za každou hodinu ujede 50 km.</p>
 <p><strong>Rovnoměrný pohyb</strong> znamená, že se rychlost nemění – za každou sekundu ujedeš stejný kus cesty. Proto stačí celou dráhu vydělit celým časem: ${F(`${I('v')}${E}${fr(I('s'),I('t'))}`)}.</p>
 <p>Používáme dvě jednotky: <strong>m/s</strong> (metry za sekundu) a <strong>km/h</strong> (kilometry za hodinu). Převod je jednoduchý: <strong>km/h ÷ 3,6 = m/s</strong> a <strong>m/s × 3,6 = km/h</strong>.</p>
 <p>V grafu dráhy na čase je rovnoměrný pohyb <strong>přímka</strong>. Čím rychleji jedeš, tím je přímka strmější.</p>`,
 remember:['36 km/h = 10 m/s','Dráha a čas musí sedět k jednotce rychlosti: km s hodinami, m se sekundami.','15 min = 0,25 h, 30 min = 0,5 h','Chůze ≈ 5 km/h, kolo ≈ 18 km/h, auto ve městě 50 km/h'],
 life:'Tachometr v autě, aplikace při běhu, jízdní řád vlaku. Když víš rychlost a vzdálenost, spočítáš, kdy dorazíš.',
 rearr:[{q:I('v'),f:`${I('v')}${E}${fr(I('s'),I('t'))}`,how:'Původní vzorec – dráha děleno časem.'},
        {q:I('s'),f:`${I('s')}${E}${I('v')}${D}${I('t')}`,how:'Obě strany vynásobíme t. Rychlost krát čas.'},
        {q:I('t'),f:`${I('t')}${E}${fr(I('s'),I('v'))}`,how:'Z s = v · t vydělíme obě strany v.'}],
 examples:[
  {lvl:'Lehký',task:'Běžec uběhl 100 m za 20 s. Jakou rychlostí běžel?',steps:[
    ['Zápis',`<div class="zapis">${F(I('s')+' = 100 m')}${F(I('t')+' = 20 s')}${F(I('v')+' = ? m/s')}</div>`],
    ['Vzorec',F(`${I('v')}${E}${fr(I('s'),I('t'))}`)],
    ['Dosazení',F(`${I('v')}${E}${fr('100','20')}`)],
    ['Výsledek',F(`${I('v')}${E}5 m/s`)],
    ['Odpověď','Běžec běžel rychlostí <strong>5 m/s</strong> (to je 18 km/h).']]},
  {lvl:'Střední',task:'Vlak jede stálou rychlostí 80 km/h po dobu 1,5 hodiny. Jakou dráhu ujede?',steps:[
    ['Zápis',`<div class="zapis">${F(I('v')+' = 80 km/h')}${F(I('t')+' = 1,5 h')}${F(I('s')+' = ? km')}</div>`],
    ['Vzorec','Hledáme dráhu:'+F(` ${I('s')}${E}${I('v')}${D}${I('t')}`)],
    ['Dosazení',F(`${I('s')}${E}80${D}1,5`)],
    ['Výsledek',F(`${I('s')}${E}120 km`)],
    ['Odpověď','Vlak ujede <strong>120 km</strong>.']]},
  {lvl:'Náročnější',task:'Cyklistka jede rychlostí 18 km/h. Cesta do školy měří 4,5 km. Kolik minut jí cesta trvá?',steps:[
    ['Zápis',`<div class="zapis">${F(I('v')+' = 18 km/h')}${F(I('s')+' = 4,5 km')}${F(I('t')+' = ? min')}</div>`],
    ['Vzorec','Hledáme čas:'+F(` ${I('t')}${E}${fr(I('s'),I('v'))}`)],
    ['Dosazení',F(`${I('t')}${E}${fr('4,5','18')}${E}0,25 h`)],
    ['Převod','Hodinu převedeme na minuty:'+F(' 0,25 h = 0,25 · 60 min = 15 min')],
    ['Odpověď','Cesta jí trvá <strong>15 minut</strong>.']]}
 ],
 sim:{defs:[
   {type:'range',id:'v',label:'Rychlost auta',min:5,max:130,step:5,value:50,unit:'km/h'},
   {type:'range',id:'t',label:'Uplynulý čas',min:0,max:60,step:1,value:20,unit:'s'},
   {type:'play',target:'t',label:'Spustit jízdu',duration:6000}],
  hint:'Pusť jízdu a sleduj graf: při vyšší rychlosti je čára strmější. Za stejný čas ujede rychlejší auto delší dráhu.',
  draw(s){
   const vm=s.v/3.6, dist=vm*s.t, MAX=2200, X=x=>40+520*x/MAX;
   const cx=X(dist);
   let ticks=''; for(let k=0;k<=2000;k+=500){ticks+=`<line x1="${X(k)}" x2="${X(k)}" y1="96" y2="104" stroke="var(--muted)"/><text x="${X(k)}" y="122" text-anchor="middle" class="t-m">${k} m</text>`;}
   const gx=t=>70+490*t/60, gy=v=>300-130*v/MAX;
   let grid=''; for(let k=0;k<=60;k+=10){grid+=`<line x1="${gx(k)}" x2="${gx(k)}" y1="165" y2="300" stroke="var(--sim-grid)"/><text x="${gx(k)}" y="316" text-anchor="middle" class="t-m">${k} s</text>`;}
   for(let k=0;k<=2000;k+=1000){grid+=`<line x1="70" x2="560" y1="${gy(k)}" y2="${gy(k)}" stroke="var(--sim-grid)"/><text x="62" y="${gy(k)+4}" text-anchor="end" class="t-m">${k}</text>`;}
   const svg=svgOpen(330)+
    `<rect x="30" y="66" width="540" height="30" rx="4" fill="var(--chip-h)"/>
     <line x1="40" x2="560" y1="81" y2="81" stroke="var(--muted)" stroke-dasharray="10 10"/>
     ${ticks}
     <line x1="40" x2="${cx}" y1="58" y2="58" stroke="var(--amber)" stroke-width="3"/>
     <text x="${Math.max(40,cx/2+20)}" y="50" text-anchor="middle" class="t-a">s = ${fmt(dist,0)} m</text>
     <g transform="translate(${cx-46},62)"><rect x="0" y="6" width="46" height="16" rx="5" fill="var(--rust)"/><path d="M8,6 L14,-2 L32,-2 L40,6 Z" fill="var(--rust)"/><circle cx="11" cy="23" r="5" fill="var(--text)"/><circle cx="36" cy="23" r="5" fill="var(--text)"/></g>
     ${grid}
     <text x="70" y="156" class="t-m">dráha s (m)</text>
     <line x1="${gx(0)}" y1="${gy(0)}" x2="${gx(60)}" y2="${gy(Math.min(vm*60,MAX))}" stroke="var(--amber)" stroke-width="2.5" opacity=".55"/>
     <line x1="${gx(0)}" y1="${gy(0)}" x2="${gx(s.t)}" y2="${gy(dist)}" stroke="var(--amber)" stroke-width="3.5"/>
     <circle cx="${gx(s.t)}" cy="${gy(dist)}" r="6" fill="var(--amber-2)"/>`+'</svg>';
   const out=`${F(`${I('v')}${E}${fmt(s.v)} km/h${E}${fr(fmt(s.v),'3,6')} m/s ≐ ${fmt(vm,2)} m/s`)}
    ${F(`${I('s')}${E}${I('v')}${D}${I('t')}${E}${fmt(vm,2)} m/s${D}${s.t} s${E}<b>${fmt(dist,0)} m</b>`)}`;
   return {svg,out};
  }}
});

KEY['rychlost']={task:`Ze vzorce pro rychlost rovnoměrného pohybu ${F(`${I('v')}${E}${fr(I('s'),I('t'))}`)} vyjádři a) dráhu ${F(I('s'))}, b) čas ${F(I('t'))}.`,tip:TIP_DIV,
   parts:[['a) dráha s',divLines(I('v'),I('s'),I('t')).a],['b) čas t',divLines(I('v'),I('s'),I('t')).b]],
   check:`Zvol si čísla: ${F('s = 100 m')}, ${F('t = 20 s')}, pak ${F('v = 5 m/s')}. Zkouška: ${F('s = 5 · 20 = 100')} ✓ a ${F('t = 100 : 5 = 20')} ✓`,
   res:[`${I('s')}${E}${I('v')}${D}${I('t')}`,`${I('t')}${E}${fr(I('s'),I('v'))}`]};
