/* 6 – TLAK */
CH.push({id:'tlak',group:'g4',name:'Tlak',formula:`${I('p')}${E}${fr(I('F'),I('S'))}`,
 short:'Jak moc se síla soustředí na plochu. Malá plocha = velký tlak.',
 symbols:[[I('p'),'tlak','Pa (pascal) = N/m²'],[I('F'),'tlaková síla (kolmo na plochu)','N'],[I('S'),'obsah plochy','m²']],
 theory:`<p>Proč se v hlubokém sněhu bez lyží propadáš, ale na lyžích ne? Tvoje síla je pořád stejná. Změnila se jen <strong>plocha</strong>, na kterou ji rozložíš.</p>
 <p><strong>Tlak</strong> říká, <strong>jaká síla připadá na 1 m² plochy</strong>. Proto dělíme sílu plochou: ${F(`${I('p')}${E}${fr(I('F'),I('S'))}`)}.</p>
 <ul><li><strong>Malá plocha → velký tlak.</strong> Hřebík, jehla, nůž, jehlový podpatek.</li>
 <li><strong>Velká plocha → malý tlak.</strong> Lyže, sněžnice, pásy bagru, široké pneumatiky traktoru.</li></ul>
 <p>Jednotka je <strong>pascal</strong> (Pa) – to je tlak 1 N na 1 m². Je to malý tlak, proto se často používá <strong>kilopascal</strong>: 1 kPa = 1 000 Pa.</p>`,
 remember:['1 m² = 10 000 cm²  → 300 cm² = 0,03 m²','1 kPa = 1 000 Pa, 1 MPa = 1 000 000 Pa','Plochu převeď na m² ještě před dosazením.','Když stojíš na jedné noze, tlak se zdvojnásobí.'],
 life:'Ostrý nůž krájí lépe než tupý. Batoh s širokými popruhy netlačí. Pod kola auta zapadlého v blátě dáváme prkna.',
 rearr:[{q:I('p'),f:`${I('p')}${E}${fr(I('F'),I('S'))}`,how:'Původní vzorec – síla děleno plochou.'},
        {q:I('F'),f:`${I('F')}${E}${I('p')}${D}${I('S')}`,how:'Obě strany vynásobíme S.'},
        {q:I('S'),f:`${I('S')}${E}${fr(I('F'),I('p'))}`,how:'Z F = p · S vydělíme obě strany p.'}],
 examples:[
  {lvl:'Lehký',task:'Krabice působí na podlahu silou 200 N. Leží na ploše 0,5 m². Jaký tlak vytváří?',steps:[
    ['Zápis',`<div class="zapis">${F(I('F')+' = 200 N')}${F(I('S')+' = 0,5 '+m2)}${F(I('p')+' = ? Pa')}</div>`],
    ['Vzorec',F(`${I('p')}${E}${fr(I('F'),I('S'))}`)],
    ['Dosazení',F(`${I('p')}${E}${fr('200','0,5')}`)],
    ['Výsledek',F(`${I('p')}${E}400 Pa`)],
    ['Odpověď','Krabice tlačí na podlahu tlakem <strong>400 Pa</strong>.']]},
  {lvl:'Střední',task:'Dívka s hmotností 50 kg stojí na obou nohou. Podrážka jedné boty má obsah 150 cm². Jaký tlak působí na podlahu? A když stoupne na jednu nohu?',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 50 kg')}${F(I('S')+' = 2 · 150 = 300 '+cm2)}${F(I('p')+' = ? Pa')}</div>`],
    ['Převod',F(`${I('F')}${E}${I('m')}${D}${I('g')}${E}50${D}10${E}500 N`)+F(`300 ${cm2}${E}0,03 ${m2}`)],
    ['Vzorec',F(`${I('p')}${E}${fr(I('F'),I('S'))}`)],
    ['Dosazení',F(`${I('p')}${E}${fr('500','0,03')}${E}16 667 Pa ≐ 16,7 kPa`)],
    ['Jedna noha',F(`${I('p')}${E}${fr('500','0,015')}${E}33 333 Pa ≐ 33,3 kPa`)],
    ['Odpověď','Na dvou nohou je tlak asi <strong>16,7 kPa</strong>, na jedné noze <strong>dvakrát větší</strong> – asi 33,3 kPa.']]},
  {lvl:'Náročnější',task:'Led na rybníku vydrží tlak nejvýš 10 kPa. Rybář i s výbavou působí silou 800 N. Jak velkou plochu musí mít jeho opora? Stačí mu boty s celkovou plochou 300 cm²?',steps:[
    ['Zápis',`<div class="zapis">${F(I('p')+' = 10 kPa = 10 000 Pa')}${F(I('F')+' = 800 N')}${F(I('S')+' = ? '+m2)}</div>`],
    ['Vzorec','Hledáme plochu:'+F(` ${I('S')}${E}${fr(I('F'),I('p'))}`)],
    ['Dosazení',F(`${I('S')}${E}${fr('800','10 000')}${E}0,08 ${m2}${E}800 ${cm2}`)],
    ['Porovnání','Boty mají jen 300 cm², to je méně než potřebných 800 cm². Tlak by byl:'+F(` ${fr('800','0,03')} ≐ 26 667 Pa`)+' – víc než 10 kPa.'],
    ['Odpověď','Opora musí mít aspoň <strong>800 cm² (0,08 m²)</strong>. V botách by se led <strong>prolomil</strong>, rybář potřebuje třeba široké prkno nebo sněžnice.']]}
 ],
 sim:{defs:[
   {type:'range',id:'F',label:'Síla (tíha člověka)',min:100,max:1000,step:50,value:500,unit:'N'},
   {type:'seg',id:'S',label:'Na čem stojí?',value:300,options:[['Sněžnice 2 000 cm²',2000],['Dvě boty 300 cm²',300],['Jedna bota 150 cm²',150],['Podpatek 2 cm²',2]]}],
  hint:'Nech stejnou sílu a měň jen plochu. Hloubka stopy ve sněhu ukazuje, jak velký je tlak.',
  draw(s){
   const Sm=s.S/10000, p=s.F/Sm, depth=clamp(6+28*(Math.log10(p)-3.3),3,110);
   const w=clamp(12+4.4*Math.sqrt(s.S),14,220), x=300-w/2, top=150+depth;
   const svg=svgOpen(320)+
    `<rect x="20" y="150" width="560" height="150" fill="var(--snow)" opacity=".85"/>
     <rect x="${x-3}" y="150" width="${w+6}" height="${depth}" fill="var(--sim-bg)"/>
     <line x1="20" x2="580" y1="150" y2="150" stroke="var(--muted)"/>
     <rect x="${x}" y="${top-26}" width="${w}" height="26" rx="4" fill="var(--rust)"/>
     <rect x="${300-28}" y="${top-96}" width="56" height="70" rx="8" fill="var(--btn)"/>
     ${arrow(300,22,300,top-100,'var(--amber)',5)}
     <text x="312" y="50" class="t-f t-a">F<tspan style="font-style:normal;font-family:var(--font-ui);font-size:14px"> = ${s.F} N</tspan></text>
     <text x="${300+w/2+12}" y="${top-8}" class="t-m">S = ${fmt(s.S)} cm²</text>
     <line x1="${x-14}" x2="${x-14}" y1="150" y2="${150+depth}" stroke="var(--rust)" stroke-width="2"/>
     <text x="${x-20}" y="${150+depth/2+4}" text-anchor="end" class="t-r" style="font-size:13px">boří se</text>
     <text x="30" y="290" class="t-m" style="fill:#7a5a40">sníh</text>`+'</svg>';
   const kind=p<5000?['b-succ','Neboříš se']:p<40000?['b-info','Trochu se boříš']:['b-warn','Zapadáš hluboko!'];
   const out=`${F(`${I('p')}${E}${fr(I('F'),I('S'))}${E}${fr(s.F+' N',fmt(Sm,4)+' m<sup>2</sup>')}${E}<b>${fmt(p,0)} Pa</b>`)}
    <span class="note">To je ${fmt(p/1000,1)} kPa. &nbsp;<span class="badge ${kind[0]}"><span class="d"></span>${kind[1]}</span></span>`;
   return {svg,out};
  }}
});

KEY['tlak']={task:`Ze vzorce pro tlak ${F(`${I('p')}${E}${fr(I('F'),I('S'))}`)} vyjádři a) sílu ${F(I('F'))}, b) plochu ${F(I('S'))}.`,tip:TIP_DIV,
   parts:[['a) síla F',divLines(I('p'),I('F'),I('S')).a],['b) plocha S',divLines(I('p'),I('F'),I('S')).b]],
   check:`Zvol si čísla: ${F('F = 600 N')}, ${F('S = 2 m<sup>2</sup>')}, pak ${F('p = 300 Pa')}. Zkouška: ${F('F = 300 · 2 = 600')} ✓ a ${F('S = 600 : 300 = 2')} ✓`,
   res:[`${I('F')}${E}${I('p')}${D}${I('S')}`,`${I('S')}${E}${fr(I('F'),I('p'))}`]};
