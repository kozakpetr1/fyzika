/* 5 – PÁKA */
CH.push({id:'paka',group:'g3',name:'Rovnováha sil na páce',formula:`${F1}${D}${a1}${E}${F2}${D}${a2}`,
 short:'Páka je v rovnováze, když jsou momenty sil na obou stranách stejné.',
 symbols:[[F1+', '+F2,'síly na levé a pravé straně','N'],[a1+', '+a2,'ramena sil (vzdálenost od osy)','m (nebo cm – na obou stranách stejně)']],
 theory:`<p>Představ si houpačku. Na jedné straně sedí táta, na druhé ty. Aby houpačka byla v rovnováze, musí táta sedět <strong>blíž k ose</strong>. Proč?</p>
 <p>Každá strana houpačky se snaží páku otočit na svou stranu – každá má svůj <strong>moment síly</strong> (síla × rameno). Páka je <strong>v rovnováze</strong>, když jsou oba momenty stejně velké:</p>
 <p>${F(`${F1}${D}${a1}${E}${F2}${D}${a2}`)}</p>
 <p>Takže <strong>větší síla potřebuje kratší rameno</strong> a menší síla delší rameno. Díky tomu umíme malou silou zvednout velké břemeno – stačí působit daleko od osy.</p>`,
 remember:['Těžší sedí blíž k ose.','Ramena mohou být v cm, jen musí být na obou stranách ve stejných jednotkách.','Když se ptají na hmotnost v kg, nejdřív spočítej sílu: F = m · g.'],
 life:'Houpačka, páčidlo, nůžky, kleště, louskáček, kolečko na zahradu, otvírák na lahve.',
 rearr:[{q:F1,f:`${F1}${E}${fr(F2+D+a2,a1)}`,how:'Obě strany vydělíme a₁.'},
        {q:a1,f:`${a1}${E}${fr(F2+D+a2,F1)}`,how:'Obě strany vydělíme F₁.'},
        {q:F2,f:`${F2}${E}${fr(F1+D+a1,a2)}`,how:'Obě strany vydělíme a₂.'},
        {q:a2,f:`${a2}${E}${fr(F1+D+a1,F2)}`,how:'Obě strany vydělíme F₂.'}],
 examples:[
  {lvl:'Lehký',task:'Na levé straně páky působí síla 30 N ve vzdálenosti 20 cm od osy. Jakou silou musíme působit vpravo ve vzdálenosti 30 cm, aby byla páka v rovnováze?',steps:[
    ['Zápis',`<div class="zapis">${F(F1+' = 30 N')}${F(a1+' = 20 cm')}${F(a2+' = 30 cm')}${F(F2+' = ? N')}</div>`],
    ['Vzorec',F(`${F1}${D}${a1}${E}${F2}${D}${a2}`)+' → '+F(`${F2}${E}${fr(F1+D+a1,a2)}`)],
    ['Dosazení',F(`${F2}${E}${fr('30 · 20','30')}${E}${fr('600','30')}`)],
    ['Výsledek',F(`${F2}${E}20 N`)],
    ['Odpověď','Vpravo musíme působit silou <strong>20 N</strong>. Ramena jsou obě v cm, takže převádět nemusíme.']]},
  {lvl:'Střední',task:'Tomáš (500 N) sedí na houpačce 1,2 m od osy. Kam si musí sednout Eliška (400 N), aby byla houpačka v rovnováze?',steps:[
    ['Zápis',`<div class="zapis">${F(F1+' = 500 N')}${F(a1+' = 1,2 m')}${F(F2+' = 400 N')}${F(a2+' = ? m')}</div>`],
    ['Vzorec',F(`${a2}${E}${fr(F1+D+a1,F2)}`)],
    ['Dosazení',F(`${a2}${E}${fr('500 · 1,2','400')}${E}${fr('600','400')}`)],
    ['Výsledek',F(`${a2}${E}1,5 m`)],
    ['Odpověď','Eliška si musí sednout <strong>1,5 m</strong> od osy – dál než Tomáš, protože je lehčí.']]},
  {lvl:'Náročnější',task:'Páčidlem dlouhým 1,5 m zvedáme kámen o hmotnosti 120 kg. Podpěra (osa) je 0,3 m od konce pod kamenem. Jakou silou musíme tlačit na druhý konec páčidla?',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 120 kg')}${F(a1+' = 0,3 m')}${F(a2+' = 1,5 − 0,3 = 1,2 m')}${F(F2+' = ? N')}</div>`],
    ['Síla kamene','Nejdřív spočítáme gravitační sílu kamene:'+F(` ${F1}${E}${I('m')}${D}${I('g')}${E}120${D}10${E}1 200 N`)],
    ['Vzorec',F(`${F2}${E}${fr(F1+D+a1,a2)}`)],
    ['Dosazení',F(`${F2}${E}${fr('1 200 · 0,3','1,2')}${E}${fr('360','1,2')}`)],
    ['Výsledek',F(`${F2}${E}300 N`)],
    ['Odpověď','Stačí tlačit silou <strong>300 N</strong> – čtyřikrát menší, než je tíha kamene, protože rameno ruky je čtyřikrát delší.']]}
 ],
 sim:{defs:[
   {type:'range',id:'m1',label:'Levá strana – hmotnost',min:5,max:60,step:5,value:40,unit:'kg'},
   {type:'range',id:'a1',label:'Levá strana – vzdálenost od osy',min:0.5,max:3,step:0.25,value:1.5,unit:'m'},
   {type:'range',id:'m2',label:'Pravá strana – hmotnost',min:5,max:60,step:5,value:30,unit:'kg'},
   {type:'range',id:'a2',label:'Pravá strana – vzdálenost od osy',min:0.5,max:3,step:0.25,value:2,unit:'m'}],
  hint:'Začínáš v rovnováze: 40 kg na 1,5 m a 30 kg na 2 m. Zkus najít další dvojice, které houpačku vyrovnají.',
  draw(s){
   const f1=s.m1*10,f2=s.m2*10,M1=f1*s.a1,M2=f2*s.a2,diff=M2-M1, ang=Math.abs(diff)<1?0:10*Math.tanh(diff/250);
   const k=80, px=300, py=210;
   const box=(x,m,c)=>{const w=18+Math.sqrt(m)*5;return `<rect x="${x-w/2}" y="${py-6-w}" width="${w}" height="${w}" rx="4" fill="${c}" stroke="var(--text)" stroke-opacity=".3"/><text x="${x}" y="${py-14-w}" text-anchor="middle" class="t-a" style="font-size:13px">${m} kg</text>`};
   let ticks=''; for(let d=-3;d<=3;d+=0.5){ if(d===0) continue; ticks+=`<line x1="${px+d*k}" x2="${px+d*k}" y1="${py-2}" y2="${py+(Number.isInteger(d)?8:5)}" stroke="var(--muted)"/>`; if(Number.isInteger(d)) ticks+=`<text x="${px+d*k}" y="${py+22}" text-anchor="middle" class="t-m">${Math.abs(d)} m</text>`;}
   const svg=svgOpen(320)+
    `<g transform="rotate(${ang} ${px} ${py})">
      <rect x="${px-3*k-10}" y="${py-6}" width="${6*k+20}" height="12" rx="4" fill="var(--m-wood)"/>
      ${ticks}
      ${box(px-s.a1*k,s.m1,'var(--rust)')}
      ${box(px+s.a2*k,s.m2,'var(--info)')}
      ${arrow(px-s.a1*k,py+30,px-s.a1*k,py+30+f1*.12,'var(--rust)',4)}
      ${arrow(px+s.a2*k,py+30,px+s.a2*k,py+30+f2*.12,'var(--info)',4)}
     </g>
     <polygon points="${px},${py+6} ${px-22},${py+64} ${px+22},${py+64}" fill="var(--ground)"/>
     <line x1="40" x2="560" y1="${py+64}" y2="${py+64}" stroke="var(--muted)"/>
     <text x="40" y="34" class="t-r">M₁ = ${f1} N · ${fmt(s.a1)} m = ${fmt(M1)} N·m</text>
     <text x="560" y="62" text-anchor="end" class="t-i">M₂ = ${f2} N · ${fmt(s.a2)} m = ${fmt(M2)} N·m</text>`+'</svg>';
   const st= diff===0?'<span class="badge b-succ"><span class="d"></span>Rovnováha!</span>': diff<0?'<span class="badge b-warn"><span class="d"></span>Převažuje levá strana</span>':'<span class="badge b-info"><span class="d"></span>Převažuje pravá strana</span>';
   const out=`${F(`${F1}${D}${a1}${E}${f1}${D}${fmt(s.a1)}${E}${fmt(M1)} N·m`)}${F(`${F2}${D}${a2}${E}${f2}${D}${fmt(s.a2)}${E}${fmt(M2)} N·m`)}<span>${st}</span><span class="note">Síly počítáme jako F = m · g, tedy kilogramy × 10.</span>`;
   return {svg,out};
  }}
});

KEY['paka']={task:`Z podmínky rovnováhy na páce ${F(`${F1}${D}${a1}${E}${F2}${D}${a2}`)} vyjádři a) sílu ${F(F2)}, b) rameno ${F(a1)}.`,tip:'Tady jsou veličiny na obou stranách. Postup je ale stejný: zajímá nás jen to, čím je hledaná veličina vynásobená.',
   parts:[['a) síla F₂',[[`${F1}${D}${a1}${E}${F2}${D}${a2}`,`| : ${a2}`,`Hledané ${F(F2)} je vpravo a je vynásobené ${F(a2)}. <strong>Obě strany</strong> vydělíme ${F(a2)}.`],
                      [`${fr(F1+D+a1,a2)}${E}${fr(F2+D+cx(a2),cx(a2))}`,'',`Vpravo se ${F(a2)} zkrátí.`],
                      [`${F2}${E}${fr(F1+D+a1,a2)}`,'','Prohodíme strany a máme výsledek.']]],
          ['b) rameno a₁',[[`${F1}${D}${a1}${E}${F2}${D}${a2}`,`| : ${F1}`,`Hledané ${F(a1)} je vlevo a je vynásobené ${F(F1)}. <strong>Obě strany</strong> vydělíme ${F(F1)}.`],
                      [`${fr(cx(F1)+D+a1,cx(F1))}${E}${fr(F2+D+a2,F1)}`,'',`Vlevo se ${F(F1)} zkrátí.`],
                      [`${a1}${E}${fr(F2+D+a2,F1)}`,'','Hledaná veličina už je vlevo sama, nemusíme nic prohazovat.']]]],
   check:`Zvol si čísla: ${F(F1+' = 30 N')}, ${F(a1+' = 20 cm')}, ${F(F2+' = 20 N')}, ${F(a2+' = 30 cm')} (600 = 600). Zkouška: ${F(F2+' = 30 · 20 : 30 = 20')} ✓ a ${F(a1+' = 20 · 30 : 30 = 20')} ✓`,
   res:[`${F2}${E}${fr(F1+D+a1,a2)}`,`${a1}${E}${fr(F2+D+a2,F1)}`]};
