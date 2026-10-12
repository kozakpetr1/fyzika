/* 9 – HYDROSTATICKÁ TLAKOVÁ SÍLA */
CH.push({id:'hydrostaticka-tlakova-sila',group:'g5',name:'Hydrostatická tlaková síla',formula:`${Fh}${E}${I('S')}${D}${I('h')}${D}${r}${D}${I('g')}`,
 short:'Síla, kterou kapalina tlačí na dno nebo na stěnu o určité ploše.',
 symbols:[[Fh,'hydrostatická tlaková síla','N'],[I('S'),'obsah plochy (dna)','m²'],[I('h'),'hloubka','m'],[r,'hustota kapaliny','kg/m³'],[I('g'),'gravitační konstanta','10 N/kg']],
 theory:`<p>Tenhle vzorec vznikl spojením dvou, které už znáš. Z kapitoly <strong>Tlak</strong> víme, že síla = tlak × plocha (${F(`${I('F')}${E}${I('p')}${D}${I('S')}`)}). A hydrostatický tlak je ${F(`${ph}${E}${I('h')}${D}${r}${D}${I('g')}`)}.</p>
 <p>Když je spojíme, dostaneme: ${F(`${Fh}${E}${ph}${D}${I('S')}${E}${I('S')}${D}${I('h')}${D}${r}${D}${I('g')}`)}</p>
 <p>Jak to chápat: <strong>hloubka</strong> rozhoduje, jak silně kapalina tlačí na každý čtvereční metr, a <strong>plocha</strong> rozhoduje, kolik takových metrů je. Velké dno = velká síla.</p>
 <p>U nádoby se svislými stěnami je ${F(Fh)} na dno stejně velká jako <strong>tíha kapaliny nad dnem</strong>, protože ${F(`${I('S')}${D}${I('h')}`)} je objem a ${F(`${I('V')}${D}${r}`)} je hmotnost.</p>`,
 remember:['Fh = ph · S – nejdřív můžeš spočítat tlak, pak vynásobit plochou.','Plochu převeď na m² (1 m² = 10 000 cm²).','Obdélníkové dno: S = délka × šířka.'],
 life:'Zátka ve vaně se těžko vytahuje, když je vana plná. Dno bazénu a akvária musí být pevné. Okénka ponorek jsou malá a velmi silná.',
 rearr:[{q:Fh,f:`${Fh}${E}${I('S')}${D}${I('h')}${D}${r}${D}${I('g')}`,how:'Původní vzorec – všechno vynásobíme.'},
        {q:I('h'),f:`${I('h')}${E}${fr(Fh,I('S')+D+r+D+I('g'))}`,how:'Obě strany vydělíme S · ρ · g.'},
        {q:I('S'),f:`${I('S')}${E}${fr(Fh,I('h')+D+r+D+I('g'))}`,how:'Obě strany vydělíme h · ρ · g.'},
        {q:r,f:`${r}${E}${fr(Fh,I('S')+D+I('h')+D+I('g'))}`,how:'Obě strany vydělíme S · h · g.'}],
 examples:[
  {lvl:'Lehký',task:'Akvárium má dno o obsahu 0,2 m² a je v něm voda do výšky 0,5 m. Jak velkou silou tlačí voda na dno?',steps:[
    ['Zápis',`<div class="zapis">${F(I('S')+' = 0,2 '+m2)}${F(I('h')+' = 0,5 m')}${F(r+' = 1 000 kg/'+m3)}${F(Fh+' = ? N')}</div>`],
    ['Vzorec',F(`${Fh}${E}${I('S')}${D}${I('h')}${D}${r}${D}${I('g')}`)],
    ['Dosazení',F(`${Fh}${E}0,2${D}0,5${D}1 000${D}10`)],
    ['Výsledek',F(`${Fh}${E}1 000 N`)],
    ['Odpověď','Voda tlačí na dno silou <strong>1 000 N</strong> – jako by na něm stálo 100 kg.']]},
  {lvl:'Střední',task:'Bazén je 10 m dlouhý a 5 m široký, voda je hluboká 1,5 m. Jak velkou silou působí voda na dno?',steps:[
    ['Zápis',`<div class="zapis">${F(I('S')+' = 10 · 5 = 50 '+m2)}${F(I('h')+' = 1,5 m')}${F(r+' = 1 000 kg/'+m3)}${F(Fh+' = ? N')}</div>`],
    ['Vzorec',F(`${Fh}${E}${I('S')}${D}${I('h')}${D}${r}${D}${I('g')}`)],
    ['Dosazení',F(`${Fh}${E}50${D}1,5${D}1 000${D}10`)],
    ['Výsledek',F(`${Fh}${E}750 000 N${E}750 kN`)],
    ['Odpověď','Na dno bazénu působí síla <strong>750 000 N</strong> (750 kN).']]},
  {lvl:'Náročnější',task:'Zátka ve vaně má obsah 12 cm². Voda na ni tlačí silou 3,6 N. Jak vysoko je ve vaně voda?',steps:[
    ['Zápis',`<div class="zapis">${F(I('S')+' = 12 '+cm2)}${F(Fh+' = 3,6 N')}${F(r+' = 1 000 kg/'+m3)}${F(I('h')+' = ? cm')}</div>`],
    ['Převod',F(`12 ${cm2}${E}0,0012 ${m2}`)+'<span class="muted">(děleno 10 000)</span>'],
    ['Vzorec','Hledáme hloubku:'+F(` ${I('h')}${E}${fr(Fh,I('S')+D+r+D+I('g'))}`)],
    ['Dosazení',F(`${I('h')}${E}${fr('3,6','0,0012 · 1 000 · 10')}${E}${fr('3,6','12')}`)],
    ['Výsledek',F(`${I('h')}${E}0,3 m${E}30 cm`)],
    ['Odpověď','Voda ve vaně sahá do výšky <strong>30 cm</strong>.']]}
 ],
 sim:{defs:[
   {type:'range',id:'S',label:'Plocha dna',min:0.1,max:2,step:0.1,value:0.5,unit:'m²'},
   {type:'range',id:'h',label:'Výška vody',min:0.1,max:2,step:0.1,value:1,unit:'m'},
   {type:'seg',id:'rho',label:'Kapalina',value:1000,options:[['Voda',1000],['Mořská voda',1030],['Olej',900]]}],
  hint:'Zdvojnásob plochu dna – síla se zdvojnásobí. Zdvojnásob výšku vody – síla se taky zdvojnásobí.',
  draw(s){
   const p=s.h*s.rho*10, Fv=p*s.S, col={1000:'var(--water)',1030:'var(--m-sea)',900:'var(--m-oil)'}[s.rho];
   const w=60+190*Math.sqrt(s.S/2), x=225-w/2, bot=250, hh=s.h*95, n=Math.max(2,Math.round(w/36)), aL=8+s.h*s.rho/1030*18;
   let arr=''; for(let i=0;i<n;i++){const xx=x+w*(i+.5)/n; arr+=arrow(xx,bot+4,xx,bot+4+aL,'var(--rust)',3);}
   const svg=svgOpen(320)+
    `<rect x="${x}" y="${bot-hh}" width="${w}" height="${hh}" fill="${col}"/>
     <line x1="${x}" x2="${x+w}" y1="${bot-hh}" y2="${bot-hh}" stroke="var(--water-line)" stroke-width="2"/>
     <path d="M${x},${bot-200} L${x},${bot} L${x+w},${bot} L${x+w},${bot-200}" fill="none" stroke="var(--muted)" stroke-width="3"/>
     ${arr}
     <line x1="${x-14}" x2="${x-14}" y1="${bot-hh}" y2="${bot}" stroke="var(--amber)" stroke-width="2"/>
     <text x="${x-20}" y="${bot-hh/2+4}" text-anchor="end" class="t-a">h = ${fmt(s.h,1)} m</text>
     <text x="${x+w/2}" y="${bot+aL+28}" text-anchor="middle" class="t-r">F<tspan dy="4" style="font-size:11px">h</tspan><tspan dy="-4"> = ${fmt(Fv,0)} N</tspan></text>
     <text x="${x+w/2}" y="${bot-hh-10}" text-anchor="middle" class="t-m">S = ${fmt(s.S,1)} m²</text>
     <text x="390" y="90" class="t-m">tlak u dna</text>
     <text x="390" y="112" class="t-a">p<tspan dy="4" style="font-size:11px">h</tspan><tspan dy="-4"> = ${fmt(p,0)} Pa</tspan></text>
     <text x="390" y="150" class="t-m">tlak × plocha</text>
     <text x="390" y="172" class="t-r">${fmt(Fv,0)} N</text>
     <text x="390" y="210" class="t-m">hmotnost kapaliny</text>
     <text x="390" y="228" class="t-m">nad dnem</text>
     <text x="390" y="252">${fmt(Fv/10,0)} kg</text>`+'</svg>';
   const out=`${F(`${Fh}${E}${I('S')}${D}${I('h')}${D}${r}${D}${I('g')}${E}${fmt(s.S,1)}${D}${fmt(s.h,1)}${D}${fmt(s.rho)}${D}10${E}<b>${fmt(Fv,0)} N</b>`)}<span class="note">Stejnou silou by na dno tlačilo závaží o hmotnosti ${fmt(Fv/10,0)} kg.</span>`;
   return {svg,out};
  }}
});

KEY['hydrostaticka-tlakova-sila']={task:`Ze vzorce pro hydrostatickou tlakovou sílu ${F(`${Fh}${E}${I('S')}${D}${I('h')}${D}${r}${D}${g_}`)} vyjádři a) plochu ${F(I('S'))}, b) hloubku ${F(I('h'))}.`,tip:'Čtyři veličiny vypadají strašidelně, ale postup je pořád stejný: vydělíme vším, co hledanou veličinu násobí.',
   parts:[['a) plocha S',prodLines(Fh,[I('S'),I('h'),r,g_],I('S'))],['b) hloubka h',prodLines(Fh,[I('S'),I('h'),r,g_],I('h'))]],
   check:`Zvol si čísla: ${F('S = 0,2 m<sup>2</sup>')}, ${F('h = 0,5 m')}, voda, pak ${F(Fh+' = 1 000 N')}. Zkouška: ${F('S = 1 000 : (0,5 · 1 000 · 10) = 0,2')} ✓ a ${F('h = 1 000 : (0,2 · 1 000 · 10) = 0,5')} ✓`,
   res:[`${I('S')}${E}${fr(Fh,I('h')+D+r+D+g_)}`,`${I('h')}${E}${fr(Fh,I('S')+D+r+D+g_)}`]};
