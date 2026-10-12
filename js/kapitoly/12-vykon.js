/* 12 – VÝKON */
CH.push({id:'vykon',group:'g6',name:'Výkon',formula:`${I('P')}${E}${fr(I('W'),I('t'))}`,
 short:'Jak rychle se práce koná. Kolik joulů za jednu sekundu.',
 symbols:[[I('P'),'výkon','W (watt)'],[I('W'),'vykonaná práce','J (joule)'],[I('t'),'čas, za který se práce vykoná','s (sekunda)']],
 theory:`<p>Ty a kamarádka vynesete do třetího patra stejně těžkou tašku. Vykonáte <strong>stejnou práci</strong>. Ty vyběhneš za 15 sekund, kamarádka jde pomalu a trvá jí to minutu. Kdo měl větší <strong>výkon</strong>? Ty – stejnou práci jsi zvládla rychleji.</p>
 <p><strong>Výkon říká, jakou práci vykonáš za jednu sekundu.</strong> Proto dělíme práci časem: ${F(`${I('P')}${E}${fr(I('W'),I('t'))}`)}.</p>
 <p>Jednotka výkonu je <strong>watt</strong> (W). Výkon 1 W znamená, že za každou sekundu vykonáš práci 1 J. Větší jednotky: <strong>1 kW = 1 000 W</strong>, <strong>1 MW = 1 000 000 W</strong>.</p>
 <p>Všimni si podobnosti s rychlostí: rychlost = dráha za sekundu, výkon = práce za sekundu. I úpravy vzorce jsou úplně stejné.</p>`,
 remember:['Čas vždy převeď na sekundy: 1 min = 60 s, 1 h = 3 600 s.','1 kW = 1 000 W, 1 kJ = 1 000 J','Stejná práce za kratší čas = větší výkon.','Když zvedáš těleso, nejdřív spočítej práci: W = m · g · h.'],
 life:'Člověk vydrží dlouho pracovat s výkonem asi 100 W, sprinter krátce i přes 1 000 W. Motor osobního auta má výkon kolem 70 kW, lokomotiva několik megawattů.',
 rearr:[{q:I('P'),f:`${I('P')}${E}${fr(I('W'),I('t'))}`,how:'Původní vzorec – práce děleno časem.'},
        {q:I('W'),f:`${I('W')}${E}${I('P')}${D}${I('t')}`,how:'Obě strany vynásobíme t.'},
        {q:I('t'),f:`${I('t')}${E}${fr(I('W'),I('P'))}`,how:'Z W = P · t vydělíme obě strany P.'}],
 examples:[
  {lvl:'Lehký',task:'Jeřáb vykoná práci 6 000 J za 20 s. Jaký má výkon?',steps:[
    ['Zápis',`<div class="zapis">${F(I('W')+' = 6 000 J')}${F(I('t')+' = 20 s')}${F(I('P')+' = ? W')}</div>`],
    ['Vzorec',F(`${I('P')}${E}${fr(I('W'),I('t'))}`)],
    ['Dosazení',F(`${I('P')}${E}${fr('6 000','20')}`)],
    ['Výsledek',F(`${I('P')}${E}300 W`)],
    ['Odpověď','Jeřáb pracuje s výkonem <strong>300 W</strong>.']]},
  {lvl:'Střední',task:'Dívka o hmotnosti 50 kg vyběhne do druhého patra (výška 6 m) za 12 s. Jaký je její výkon?',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 50 kg')}${F(I('h')+' = 6 m')}${F(I('t')+' = 12 s')}${F(I('P')+' = ? W')}</div>`],
    ['Síla',F(`${I('F')}${E}${I('m')}${D}${I('g')}${E}50${D}10${E}500 N`)],
    ['Práce',F(`${I('W')}${E}${I('F')}${D}${I('s')}${E}500${D}6${E}3 000 J`)],
    ['Výkon',F(`${I('P')}${E}${fr(I('W'),I('t'))}${E}${fr('3 000','12')}${E}250 W`)],
    ['Odpověď','Dívka běží do schodů s výkonem <strong>250 W</strong>. Kdyby šla pomalu (třeba 30 s), práce by byla stejná, ale výkon jen 100 W.']]},
  {lvl:'Náročnější',task:'Motor výtahu má výkon 4 kW. Jak dlouho mu trvá vyvézt kabinu s lidmi o celkové hmotnosti 800 kg do výšky 15 m?',steps:[
    ['Zápis',`<div class="zapis">${F(I('P')+' = 4 kW = 4 000 W')}${F(I('m')+' = 800 kg')}${F(I('h')+' = 15 m')}${F(I('t')+' = ? s')}</div>`],
    ['Síla',F(`${I('F')}${E}${I('m')}${D}${I('g')}${E}800${D}10${E}8 000 N`)],
    ['Práce',F(`${I('W')}${E}${I('F')}${D}${I('s')}${E}8 000${D}15${E}120 000 J`)],
    ['Vzorec','Hledáme čas:'+F(` ${I('t')}${E}${fr(I('W'),I('P'))}`)],
    ['Dosazení',F(`${I('t')}${E}${fr('120 000','4 000')}${E}30 s`)],
    ['Odpověď','Výtah vyveze kabinu za <strong>30 sekund</strong>. Použili jsme tři vzorce za sebou: sílu, práci a výkon.']]}
 ],
 sim:{defs:[
   {type:'range',id:'m',label:'Hmotnost nákladu',min:10,max:200,step:10,value:100,unit:'kg'},
   {type:'range',id:'h',label:'Výška zvednutí',min:2,max:20,step:1,value:10,unit:'m'},
   {type:'range',id:'tA',label:'Jeřáb A zvedne náklad za',min:2,max:20,step:1,value:5,unit:'s'},
   {type:'range',id:'tB',label:'Jeřáb B zvedne náklad za',min:2,max:20,step:1,value:20,unit:'s'},
   {type:'range',id:'tt',label:'Uplynulý čas',min:0,max:20,step:0.1,value:0,unit:'s'},
   {type:'play',target:'tt',label:'Spustit závod',duration:8000}],
  hint:'Oba jeřáby vykonají stejnou práci. Pusť závod: rychlejší jeřáb má větší výkon. Zkus nastavit stejný čas – výkony se srovnají.',
  draw(s){
   const W=s.m*10*s.h, PA=W/s.tA, PB=W/s.tB, top=40, bot=290, k=(bot-top-40)/20;
   const shaft=(x,t,name,col)=>{const pr=Math.min(1,s.tt/t), y=bot-30-pr*s.h*k, done=pr>=1;
     return `<line x1="${x-34}" x2="${x+34}" y1="${bot}" y2="${bot}" stroke="var(--muted)" stroke-width="2"/>
      <line x1="${x}" x2="${x}" y1="${top}" y2="${y}" stroke="var(--muted)" stroke-width="2"/>
      <rect x="${x-50}" y="${top-12}" width="70" height="10" rx="3" fill="var(--ground)"/>
      <line x1="${x-30}" x2="${x+30}" y1="${bot-30-s.h*k}" y2="${bot-30-s.h*k}" stroke="var(--amber)" stroke-dasharray="5 4"/>
      <rect x="${x-20}" y="${y}" width="40" height="30" rx="4" fill="${col}" stroke="var(--text)" stroke-opacity=".3"/>
      <text x="${x}" y="${top-20}" text-anchor="middle" class="t-a">${name}</text>
      ${done?`<text x="${x}" y="${bot+22}" text-anchor="middle" style="fill:var(--moss);font-weight:700">v cíli ✓</text>`:`<text x="${x}" y="${bot+22}" text-anchor="middle" class="t-m">${fmt(Math.min(s.tt,t),1)} s</text>`}`;};
   const maxP=Math.max(PA,PB,1), bh=v=>170*v/maxP;
   const svg=svgOpen(320)+
    `<line x1="20" x2="20" y1="${bot-30}" y2="${bot-30-s.h*k}" stroke="var(--rust)" stroke-width="2"/>
     <text x="26" y="${bot-34-s.h*k/2}" class="t-r" style="font-size:13px">h = ${s.h} m</text>
     ${shaft(110,s.tA,'Jeřáb A','var(--rust)')}${shaft(250,s.tB,'Jeřáb B','var(--info)')}
     <text x="470" y="36" text-anchor="middle" class="t-m">výkon</text>
     <rect x="395" y="${bot-bh(PA)}" width="60" height="${bh(PA)}" rx="4" fill="var(--rust)"/>
     <rect x="485" y="${bot-bh(PB)}" width="60" height="${bh(PB)}" rx="4" fill="var(--info)"/>
     <text x="425" y="${bot-bh(PA)-8}" text-anchor="middle" class="t-r">${fmt(PA,0)} W</text>
     <text x="515" y="${bot-bh(PB)-8}" text-anchor="middle" class="t-i">${fmt(PB,0)} W</text>
     <line x1="385" x2="555" y1="${bot}" y2="${bot}" stroke="var(--muted)"/>
     <text x="425" y="${bot+22}" text-anchor="middle" class="t-m">A</text><text x="515" y="${bot+22}" text-anchor="middle" class="t-m">B</text>`+'</svg>';
   const out=`${F(`${I('W')}${E}${I('m')}${D}${I('g')}${D}${I('h')}${E}${s.m}${D}10${D}${s.h}${E}${fmt(W)} J`)}<span class="note">Oba jeřáby vykonají stejnou práci.</span>
    ${F(`${S('P','A')}${E}${fr(fmt(W)+' J',s.tA+' s')}${E}<b>${fmt(PA,0)} W</b>`)}
    ${F(`${S('P','B')}${E}${fr(fmt(W)+' J',s.tB+' s')}${E}<b>${fmt(PB,0)} W</b>`)}`;
   return {svg,out};
  }}
});

KEY['vykon']={task:`Ze vzorce pro výkon ${F(`${I('P')}${E}${fr(I('W'),I('t'))}`)} vyjádři a) práci ${F(I('W'))}, b) čas ${F(I('t'))}.`,tip:TIP_DIV+' Postup je úplně stejný jako u rychlosti v = s / t.',
   parts:[['a) práce W',divLines(I('P'),I('W'),I('t')).a],['b) čas t',divLines(I('P'),I('W'),I('t')).b]],
   check:`Zvol si čísla: ${F('W = 600 J')}, ${F('t = 20 s')}, pak ${F('P = 30 W')}. Zkouška: ${F('W = 30 · 20 = 600')} ✓ a ${F('t = 600 : 30 = 20')} ✓`,
   res:[`${I('W')}${E}${I('P')}${D}${I('t')}`,`${I('t')}${E}${fr(I('W'),I('P'))}`]};
