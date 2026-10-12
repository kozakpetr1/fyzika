/* 4 – MOMENT SÍLY */
CH.push({id:'moment-sily',group:'g3',name:'Moment síly',formula:`${I('M')}${E}${I('F')}${D}${I('a')}`,
 short:'Otáčivý účinek síly. Čím delší rameno, tím menší síla stačí.',
 symbols:[[I('M'),'moment síly','N·m (newtonmetr)'],[I('F'),'síla','N'],[I('a'),'rameno síly','m']],
 theory:`<p>Některé věci se pod silou neposunou, ale <strong>otočí</strong> – dveře, klíč na matici, volant, kohoutek. Jak silně se věc otáčí, popisuje <strong>moment síly</strong> ${F(I('M'))}.</p>
 <p>Moment nezáleží jen na síle, ale i na tom, <strong>jak daleko od osy otáčení</strong> působíš. Tahle vzdálenost se jmenuje <strong>rameno síly</strong> ${F(I('a'))}. Měříme ji od osy kolmo k síle.</p>
 <p>Zkus si zavřít dveře tlakem u pantů a pak u kliky. U pantů musíš tlačit hrozně silně, u kliky stačí lehce. Stejný moment dostaneš <strong>velkou silou na krátkém rameni</strong>, nebo <strong>malou silou na dlouhém rameni</strong>.</p>`,
 remember:['Rameno vždy převeď na metry: 25 cm = 0,25 m.','Dvakrát delší rameno = poloviční síla stačí.','Jednotka N·m se čte „newtonmetr“.'],
 life:'Klika je na dveřích co nejdál od pantů. Mechanik si na utaženou matici nasadí na klíč trubku. Na kole šlapeš na pedál na dlouhé klice.',
 rearr:[{q:I('M'),f:`${I('M')}${E}${I('F')}${D}${I('a')}`,how:'Původní vzorec – síla krát rameno.'},
        {q:I('F'),f:`${I('F')}${E}${fr(I('M'),I('a'))}`,how:'Obě strany vydělíme a.'},
        {q:I('a'),f:`${I('a')}${E}${fr(I('M'),I('F'))}`,how:'Obě strany vydělíme F.'}],
 examples:[
  {lvl:'Lehký',task:'Na konec tyče dlouhé 0,5 m působíme kolmo silou 20 N. Jaký je moment síly vzhledem k ose na druhém konci?',steps:[
    ['Zápis',`<div class="zapis">${F(I('F')+' = 20 N')}${F(I('a')+' = 0,5 m')}${F(I('M')+' = ? N·m')}</div>`],
    ['Vzorec',F(`${I('M')}${E}${I('F')}${D}${I('a')}`)],
    ['Dosazení',F(`${I('M')}${E}20${D}0,5`)],
    ['Výsledek',F(`${I('M')}${E}10 N·m`)],
    ['Odpověď','Moment síly je <strong>10 N·m</strong>.']]},
  {lvl:'Střední',task:'Klíč je dlouhý 25 cm. Na jeho konec tlačíš rukou silou 40 N. Jaký moment síly působí na matici?',steps:[
    ['Zápis',`<div class="zapis">${F(I('F')+' = 40 N')}${F(I('a')+' = 25 cm')}${F(I('M')+' = ? N·m')}</div>`],
    ['Převod',F('25 cm = 0,25 m')],
    ['Vzorec',F(`${I('M')}${E}${I('F')}${D}${I('a')}`)],
    ['Dosazení',F(`${I('M')}${E}40${D}0,25`)],
    ['Výsledek',F(`${I('M')}${E}10 N·m`)],
    ['Odpověď','Na matici působí moment <strong>10 N·m</strong>.']]},
  {lvl:'Náročnější',task:'Rezavá matice se povolí až při momentu 30 N·m. Klíč měří 20 cm. Jakou silou musíš tlačit? A jakou, když klíč prodloužíš trubkou na 60 cm?',steps:[
    ['Zápis',`<div class="zapis">${F(I('M')+' = 30 N·m')}${F(I('a')+' = 20 cm = 0,2 m')}${F(I('F')+' = ? N')}</div>`],
    ['Vzorec','Hledáme sílu:'+F(` ${I('F')}${E}${fr(I('M'),I('a'))}`)],
    ['Dosazení',F(`${I('F')}${E}${fr('30','0,2')}${E}150 N`)],
    ['S trubkou',F(`${I('a')}${E}0,6 m → ${I('F')}${E}${fr('30','0,6')}${E}50 N`)],
    ['Odpověď','S krátkým klíčem potřebuješ <strong>150 N</strong>, s trubkou jen <strong>50 N</strong>. Třikrát delší rameno, třikrát menší síla.']]}
 ],
 sim:{defs:[
   {type:'range',id:'F',label:'Síla ruky',min:0,max:200,step:5,value:60,unit:'N'},
   {type:'range',id:'a',label:'Délka klíče (rameno)',min:0.05,max:0.5,step:0.05,value:0.2,unit:'m'}],
  hint:'Matice se povolí až při momentu 20 N·m. Zkus to s malou silou a dlouhým klíčem, a pak naopak.',
  draw(s){
   const M=s.F*s.a, ok=M>=20, cx=110, cy=150, L=s.a*820, ex=cx+L, aL=16+s.F*.62;
   const hex=[...Array(6)].map((_,i)=>{const t=Math.PI/3*i+Math.PI/6;return `${cx+26*Math.cos(t)},${cy+26*Math.sin(t)}`}).join(' ');
   const pct=clamp(M/40,0,1);
   const svg=svgOpen(320)+
    `<rect x="60" y="100" width="100" height="100" rx="6" fill="var(--ground)" opacity=".6"/>
     <g class="${ok?'spin':''}"><polygon points="${hex}" fill="var(--m-alu)" stroke="var(--text)" stroke-opacity=".5"/><circle cx="${cx}" cy="${cy}" r="9" fill="var(--sim-bg)"/></g>
     <path d="M${cx},${cy-12} L${ex},${cy-8} L${ex},${cy+8} L${cx},${cy+12} Z" fill="var(--m-iron)" stroke="var(--text)" stroke-opacity=".35"/>
     <circle cx="${cx}" cy="${cy}" r="30" fill="none" stroke="var(--m-iron)" stroke-width="10"/>
     ${arrow(ex,cy-aL-2,ex,cy-2,'var(--rust)',5)}
     <text x="${Math.min(ex+10,520)}" y="${cy-aL/2}" class="t-f t-r">F<tspan style="font-style:normal;font-family:var(--font-ui);font-size:14px"> = ${s.F} N</tspan></text>
     <line x1="${cx}" x2="${ex}" y1="${cy+40}" y2="${cy+40}" stroke="var(--amber)" stroke-width="2"/>
     <line x1="${cx}" x2="${cx}" y1="${cy+32}" y2="${cy+48}" stroke="var(--amber)" stroke-width="2"/>
     <line x1="${ex}" x2="${ex}" y1="${cy+32}" y2="${cy+48}" stroke="var(--amber)" stroke-width="2"/>
     <text x="${(cx+ex)/2}" y="${cy+64}" text-anchor="middle" class="t-a">a = ${fmt(s.a,2)} m</text>
     <text x="${cx}" y="${cy-44}" text-anchor="middle" class="t-m">osa otáčení</text>
     <text x="40" y="262" class="t-m">moment síly</text>
     <rect x="40" y="272" width="520" height="16" rx="8" fill="var(--chip-h)"/>
     <rect x="40" y="272" width="${520*pct}" height="16" rx="8" fill="${ok?'var(--moss)':'var(--amber)'}"/>
     <line x1="300" x2="300" y1="266" y2="294" stroke="var(--text)" stroke-width="2"/>
     <text x="300" y="310" text-anchor="middle" class="t-m">20 N·m – matice povolí</text>`+'</svg>';
   const out=`${F(`${I('M')}${E}${I('F')}${D}${I('a')}${E}${s.F} N${D}${fmt(s.a,2)} m${E}<b>${fmt(M,2)} N·m</b>`)}
     <span>${ok?'<span class="badge b-succ"><span class="d"></span>Matice se točí!</span>':'<span class="badge b-warn"><span class="d"></span>Matice drží – potřebuješ aspoň 20 N·m</span>'}</span>`;
   return {svg,out};
  }}
});

KEY['moment-sily']={task:`Ze vzorce pro moment síly ${F(`${I('M')}${E}${I('F')}${D}${I('a')}`)} vyjádři a) sílu ${F(I('F'))}, b) rameno ${F(I('a'))}.`,tip:TIP_PROD,
   parts:[['a) síla F',prodLines(I('M'),[I('F'),I('a')],I('F'))],['b) rameno a',prodLines(I('M'),[I('F'),I('a')],I('a'))]],
   check:`Zvol si čísla: ${F('F = 40 N')}, ${F('a = 0,5 m')}, pak ${F('M = 20 N·m')}. Zkouška: ${F('F = 20 : 0,5 = 40')} ✓ a ${F('a = 20 : 40 = 0,5')} ✓`,
   res:[`${I('F')}${E}${fr(I('M'),I('a'))}`,`${I('a')}${E}${fr(I('M'),I('F'))}`]};
