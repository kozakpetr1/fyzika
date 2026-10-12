/* 10 – VZTLAKOVÁ SÍLA */
CH.push({id:'vztlakova-sila',group:'g5',name:'Vztlaková síla',formula:`${Fvz}${E}${I('V')}${D}${r}${D}${I('g')}`,
 short:'Kapalina nadlehčuje ponořené těleso. Archimédův zákon.',
 symbols:[[Fvz,'vztlaková síla','N'],[I('V'),'objem ponořené části tělesa','m³'],[r,'hustota KAPALINY (ne tělesa!)','kg/m³'],[I('g'),'gravitační konstanta','10 N/kg']],
 theory:`<p>Ve vodě uneseš kamaráda, kterého na souši nezvedneš. Voda ho totiž <strong>nadlehčuje</strong> silou, která míří <strong>vzhůru</strong>. Říkáme jí <strong>vztlaková síla</strong>.</p>
 <p><strong>Archimédův zákon:</strong> Těleso ponořené do kapaliny je nadlehčováno silou, která se rovná <strong>tíze kapaliny, kterou těleso vytlačí</strong>.</p>
 <p>Proto ve vzorci ${F(`${Fvz}${E}${I('V')}${D}${r}${D}${I('g')}`)} je ${F(I('V'))} objem <strong>ponořené části</strong> tělesa a ${F(r)} hustota <strong>kapaliny</strong>. Z čeho je těleso, na vztlakové síle nezáleží – železná i dřevěná kostka stejné velikosti jsou nadlehčovány stejně.</p>
 <p>Jestli těleso plave, rozhodne souboj dvou sil: gravitační dolů a vztlakové nahoru. Jednodušeji to poznáš z hustot:</p>
 <ul><li>hustota tělesa <strong>menší</strong> než kapaliny → <strong>plave</strong></li><li>hustota <strong>stejná</strong> → <strong>vznáší se</strong></li><li>hustota <strong>větší</strong> → <strong>klesne ke dnu</strong></li></ul>`,
 remember:['ρ je hustota kapaliny!','Objem převeď na m³: 1 dm³ = 0,001 m³, 1 cm³ = 0,000 001 m³.','Siloměr ve vodě ukáže méně: Fg − Fvz.','1 dm³ ponořený ve vodě je nadlehčován silou 10 N.'],
 life:'Loď z oceli plave, protože vytlačí hodně vody. V Mrtvém moři se nedá potopit. Balonek plave ve vzduchu – vztlak funguje i v plynech.',
 rearr:[{q:Fvz,f:`${Fvz}${E}${I('V')}${D}${r}${D}${I('g')}`,how:'Původní vzorec – objem × hustota kapaliny × 10.'},
        {q:I('V'),f:`${I('V')}${E}${fr(Fvz,r+D+I('g'))}`,how:'Obě strany vydělíme ρ · g.'},
        {q:r,f:`${r}${E}${fr(Fvz,I('V')+D+I('g'))}`,how:'Obě strany vydělíme V · g. Tak zjistíš hustotu neznámé kapaliny.'}],
 examples:[
  {lvl:'Lehký',task:'Kámen o objemu 2 dm³ je celý ponořený ve vodě. Jak velká vztlaková síla na něj působí?',steps:[
    ['Zápis',`<div class="zapis">${F(I('V')+' = 2 '+dm3+' = 0,002 '+m3)}${F(r+' = 1 000 kg/'+m3)}${F(Fvz+' = ? N')}</div>`],
    ['Vzorec',F(`${Fvz}${E}${I('V')}${D}${r}${D}${I('g')}`)],
    ['Dosazení',F(`${Fvz}${E}0,002${D}1 000${D}10`)],
    ['Výsledek',F(`${Fvz}${E}20 N`)],
    ['Odpověď','Na kámen působí vztlaková síla <strong>20 N</strong>.']]},
  {lvl:'Střední',task:'Těleso o objemu 500 cm³ je ponořené v oleji (ρ = 900 kg/m³). Jak velká vztlaková síla na něj působí?',steps:[
    ['Zápis',`<div class="zapis">${F(I('V')+' = 500 '+cm3)}${F(r+' = 900 kg/'+m3)}${F(Fvz+' = ? N')}</div>`],
    ['Převod',F(`500 ${cm3}${E}0,5 ${dm3}${E}0,0005 ${m3}`)],
    ['Vzorec',F(`${Fvz}${E}${I('V')}${D}${r}${D}${I('g')}`)],
    ['Dosazení',F(`${Fvz}${E}0,0005${D}900${D}10`)],
    ['Výsledek',F(`${Fvz}${E}4,5 N`)],
    ['Odpověď','V oleji působí vztlaková síla <strong>4,5 N</strong>. Ve vodě by byla větší (5 N), protože voda má větší hustotu.']]},
  {lvl:'Náročnější',task:'Těleso visí na siloměru. Na vzduchu siloměr ukazuje 27 N, po úplném ponoření do vody 17 N. Jaký má těleso objem? Z jakého materiálu je?',steps:[
    ['Vztlak','Siloměr ukazuje méně o vztlakovou sílu:'+F(` ${Fvz}${E}27 − 17${E}10 N`)],
    ['Objem',F(`${I('V')}${E}${fr(Fvz,r+D+I('g'))}${E}${fr('10','1 000 · 10')}${E}0,001 ${m3}${E}1 ${dm3}`)],
    ['Hmotnost',F(`${I('m')}${E}${fr(Fg,I('g'))}${E}${fr('27','10')}${E}2,7 kg`)],
    ['Hustota',F(`${r}${E}${fr(I('m'),I('V'))}${E}${fr('2,7','0,001')}${E}2 700 kg/${m3}`)],
    ['Odpověď','Těleso má objem <strong>1 dm³</strong> a hustotu 2 700 kg/m³ – je to <strong>hliník</strong>. Tady jsme spojili tři vzorce najednou.']]}
 ],
 sim:{defs:[
   {type:'seg',id:'ro',label:'Těleso je z',value:2700,options:[['Dřevo',600],['Led',920],['Hliník',2700],['Železo',7800]]},
   {type:'range',id:'V',label:'Objem tělesa',min:100,max:2000,step:100,value:1000,unit:'cm³'},
   {type:'seg',id:'rl',label:'Kapalina',value:1000,options:[['Voda',1000],['Mořská voda',1030],['Olej',900]]},
   {type:'range',id:'k',label:'Ponoření',min:0,max:100,step:5,value:100,unit:'%'}],
  hint:'Ponořuj těleso postupně a sleduj siloměr. Pak vyměň hliník za železo stejného objemu – vztlaková síla se nezmění.',
  draw(s){
   const V=s.V/1e6, G=V*s.ro*10, Vp=V*s.k/100, Fz=Vp*s.rl*10, read=Math.max(0,G-Fz);
   const col={600:'var(--m-wood)',920:'var(--m-ice)',2700:'var(--m-alu)',7800:'var(--m-iron)'}[s.ro];
   const lcol={1000:'var(--water)',1030:'var(--m-sea)',900:'var(--m-oil)'}[s.rl];
   const a=34+40*Math.cbrt(s.V/2000), surf=230, objTop=surf-a+a*s.k/100+(s.k===100?6:0), cx=200;
   const sEnd=72+16+60*Math.min(1,read/156);
   const scale=G>0?42/Math.max(G,20):1;
   const svg=svgOpen(340)+
    `<rect x="120" y="10" width="160" height="10" rx="3" fill="var(--ground)"/>
     <rect x="186" y="20" width="28" height="52" rx="5" fill="var(--chip-h)" stroke="var(--muted)"/>
     ${spring(cx,72,sEnd,7,11)}
     <line x1="${cx}" x2="${cx}" y1="${sEnd}" y2="${objTop}" stroke="var(--muted)" stroke-width="1.5"/>
     <text x="222" y="42" class="t-a">siloměr: ${fmt(read,2)} N</text>
     <rect x="80" y="${surf}" width="240" height="${325-surf}" fill="${lcol}"/>
     <rect x="${cx-a/2}" y="${objTop}" width="${a}" height="${a}" rx="4" fill="${col}" stroke="var(--text)" stroke-opacity=".4"/>
     <rect x="80" y="${surf}" width="240" height="${325-surf}" fill="${lcol}" opacity=".35"/>
     <line x1="80" x2="320" y1="${surf}" y2="${surf}" stroke="var(--water-line)" stroke-width="2"/>
     <path d="M80,150 L80,325 L320,325 L320,150" fill="none" stroke="var(--muted)" stroke-width="3"/>
     ${arrow(cx-12,objTop+a/2,cx-12,objTop+a/2+G*scale,'var(--rust)',4)}
     ${Fz>0.01?arrow(cx+12,objTop+a/2,cx+12,objTop+a/2-Fz*scale,'var(--info)',4):''}
     <text x="380" y="120" class="t-r">F<tspan dy="4" style="font-size:11px">g</tspan><tspan dy="-4"> = ${fmt(G,2)} N ↓</tspan></text>
     <text x="380" y="150" class="t-i">F<tspan dy="4" style="font-size:11px">vz</tspan><tspan dy="-4"> = ${fmt(Fz,2)} N ↑</tspan></text>
     <line x1="380" x2="560" y1="166" y2="166" stroke="var(--line)"/>
     <text x="380" y="190" class="t-a">siloměr = ${fmt(read,2)} N</text>
     <text x="380" y="218" class="t-m">ponořený objem: ${fmt(s.V*s.k/100)} cm³</text>`+'</svg>';
   const st=s.ro<s.rl?['b-info','Volně by plavalo']:s.ro===s.rl?['b-succ','Vznášelo by se']:['b-warn','Volně by kleslo ke dnu'];
   const out=`${F(`${Fvz}${E}${I('V')}${D}${r}${D}${I('g')}${E}${fmt(Vp,6)}${D}${fmt(s.rl)}${D}10${E}<b>${fmt(Fz,2)} N</b>`)}
    <span>${G-Fz<0?'<span class="note">Vztlak je větší než tíha – siloměr ukáže 0 a provázek se povolí. </span>':''}<span class="badge ${st[0]}"><span class="d"></span>${st[1]}</span></span>
    <span class="note">Hustota tělesa ${fmt(s.ro)} kg/m³, kapaliny ${fmt(s.rl)} kg/m³.</span>`;
   return {svg,out};
  }}
});

KEY['vztlakova-sila']={task:`Ze vzorce pro vztlakovou sílu ${F(`${Fvz}${E}${V_}${D}${r}${D}${g_}`)} vyjádři a) objem ${F(V_)}, b) hustotu kapaliny ${F(r)}.`,tip:'Když je hledaná veličina vynásobená dvěma dalšími, vydělíme obě strany oběma najednou – celým součinem.',
   parts:[['a) objem V',prodLines(Fvz,[V_,r,g_],V_)],['b) hustota ρ',prodLines(Fvz,[V_,r,g_],r)]],
   check:`Zvol si čísla: ${F('V = 0,002 m<sup>3</sup>')}, voda ${F(r+' = 1 000 kg/m<sup>3</sup>')}, pak ${F(Fvz+' = 20 N')}. Zkouška: ${F('V = 20 : (1 000 · 10) = 0,002')} ✓ a ${F(r+' = 20 : (0,002 · 10) = 1 000')} ✓`,
   res:[`${V_}${E}${fr(Fvz,r+D+g_)}`,`${r}${E}${fr(Fvz,V_+D+g_)}`]};
