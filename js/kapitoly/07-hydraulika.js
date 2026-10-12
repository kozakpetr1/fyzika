/* 7 – HYDRAULIKA */
CH.push({id:'hydraulika',group:'g4',name:'Hydraulické zařízení',formula:`${fr(F1,S1)}${E}${fr(F2,S2)}`,
 short:'Malou silou na malém pístu vyvoláš velkou sílu na velkém pístu.',
 symbols:[[F1+', '+S1,'síla a plocha malého pístu','N, cm² nebo m²'],[F2+', '+S2,'síla a plocha velkého pístu','N, cm² nebo m²']],
 theory:`<p>Kapalina se nedá stlačit. Když zatlačíš na kapalinu v uzavřené nádobě, tlak se rozšíří <strong>všemi směry stejně</strong> – to je <strong>Pascalův zákon</strong>.</p>
 <p>Hydraulické zařízení má dva písty spojené kapalinou: malý a velký. Tlak pod oběma je stejný. Protože tlak je ${F(fr(I('F'),I('S')))}, platí:</p>
 <p>${F(`${fr(F1,S1)}${E}${fr(F2,S2)}`)}</p>
 <p>Jednoduše: <strong>kolikrát je velký píst větší, tolikrát větší sílu dostaneš</strong>. Velký píst 50× větší než malý = síla 50× větší.</p>
 <p>Ale nic není zadarmo. Malý píst musíš stlačit hodně, zatímco velký se zvedne jen trochu – zase tolikrát méně.</p>`,
 remember:['Plochy stačí mít obě ve stejných jednotkách (třeba obě v cm²).','Poměr ploch = poměr sil.','Malý píst se posune víc, velký méně.'],
 life:'Zvedák v autoservisu, brzdy auta, ramena bagru, hydraulický lis, kancelářská židle s pístem.',
 rearr:[{q:F2,f:`${F2}${E}${fr(F1+D+S2,S1)}`,how:'Obě strany vynásobíme S₂.'},
        {q:F1,f:`${F1}${E}${fr(F2+D+S1,S2)}`,how:'Obě strany vynásobíme S₁.'},
        {q:S2,f:`${S2}${E}${fr(F2+D+S1,F1)}`,how:'Převrátíme oba zlomky (S/F) a vynásobíme F₂.'},
        {q:S1,f:`${S1}${E}${fr(F1+D+S2,F2)}`,how:'Převrátíme oba zlomky (S/F) a vynásobíme F₁.'}],
 examples:[
  {lvl:'Lehký',task:'Malý píst má plochu 10 cm², velký 100 cm². Na malý píst tlačíme silou 50 N. Jak velká síla působí na velký píst?',steps:[
    ['Zápis',`<div class="zapis">${F(S1+' = 10 '+cm2)}${F(S2+' = 100 '+cm2)}${F(F1+' = 50 N')}${F(F2+' = ? N')}</div>`],
    ['Vzorec',F(`${F2}${E}${fr(F1+D+S2,S1)}`)],
    ['Dosazení',F(`${F2}${E}${fr('50 · 100','10')}`)],
    ['Výsledek',F(`${F2}${E}500 N`)],
    ['Odpověď','Na velký píst působí síla <strong>500 N</strong>. Plocha je 10× větší, tak i síla je 10× větší.']]},
  {lvl:'Střední',task:'Hydraulický zvedák má malý píst s plochou 4 cm² a velký píst s plochou 240 cm². Jakou silou musíme tlačit na malý píst, abychom zvedli auto, které působí silou 12 000 N?',steps:[
    ['Zápis',`<div class="zapis">${F(S1+' = 4 '+cm2)}${F(S2+' = 240 '+cm2)}${F(F2+' = 12 000 N')}${F(F1+' = ? N')}</div>`],
    ['Vzorec',F(`${F1}${E}${fr(F2+D+S1,S2)}`)],
    ['Dosazení',F(`${F1}${E}${fr('12 000 · 4','240')}${E}${fr('48 000','240')}`)],
    ['Výsledek',F(`${F1}${E}200 N`)],
    ['Odpověď','Stačí tlačit silou <strong>200 N</strong> – jako bys zvedal tašku s 20 kg.']]},
  {lvl:'Náročnější',task:'Na malý píst lisu (2 cm²) tlačíme silou 150 N. Lis má vyvinout sílu 9 000 N. Jakou plochu musí mít velký píst? O kolik se velký píst zvedne, když malý stlačíme o 30 cm?',steps:[
    ['Zápis',`<div class="zapis">${F(S1+' = 2 '+cm2)}${F(F1+' = 150 N')}${F(F2+' = 9 000 N')}${F(S2+' = ? '+cm2)}</div>`],
    ['Vzorec',F(`${S2}${E}${fr(F2+D+S1,F1)}`)],
    ['Dosazení',F(`${S2}${E}${fr('9 000 · 2','150')}${E}120 ${cm2}`)],
    ['Posun pístu','Malý píst vytlačí kapalinu o objemu'+F(` 2 ${cm2} · 30 cm = 60 ${cm3}`)+'. Ta se rozlije pod velký píst:'+F(` ${fr('60 '+cm3,'120 '+cm2)}${E}0,5 cm`)],
    ['Odpověď','Velký píst musí mít plochu <strong>120 cm²</strong>. Zvedne se jen o <strong>0,5 cm</strong> – síla je 60× větší, posun 60× menší.']]}
 ],
 sim:{defs:[
   {type:'range',id:'F1',label:'Síla na malý píst',min:10,max:200,step:10,value:100,unit:'N'},
   {type:'range',id:'S1',label:'Plocha malého pístu',min:1,max:20,step:1,value:5,unit:'cm²'},
   {type:'range',id:'S2',label:'Plocha velkého pístu',min:20,max:400,step:10,value:400,unit:'cm²'},
   {type:'range',id:'d',label:'Stlačení malého pístu',min:0,max:20,step:1,value:0,unit:'cm'},
   {type:'play',target:'d',label:'Zatlačit na píst',duration:3500}],
  hint:'Úkol: zvedni auto (10 000 N). Nastav plochy a sílu tak, aby F₂ stačila, pak zatlač na píst.',
  draw(s){
   const f2=s.F1*s.S2/s.S1, lift=f2>=10000, w1=10*Math.sqrt(s.S1)+6, w2=8*Math.sqrt(s.S2)+10, c1=100, c2=320;
   const d1=lift?s.d*5:0, d2=lift?d1*s.S1/s.S2:0;
   const top1=110+d1, top2=150-d2, bot=270;
   const liquid=`<path d="M${c1-w1/2},${top1+10} L${c1-w1/2},${bot} L${c2+w2/2},${bot} L${c2+w2/2},${top2+10} L${c2-w2/2},${top2+10} L${c2-w2/2},${bot-30} L${c1+w1/2},${bot-30} L${c1+w1/2},${top1+10} Z" fill="var(--water)"/>`;
   const walls=`<path d="M${c1-w1/2},60 L${c1-w1/2},${bot} L${c2+w2/2},${bot} L${c2+w2/2},90 M${c2-w2/2},90 L${c2-w2/2},${bot-30} L${c1+w1/2},${bot-30} L${c1+w1/2},60" fill="none" stroke="var(--muted)" stroke-width="3"/>`;
   const car=`<g transform="translate(${c2-45},${top2-34})"><rect x="0" y="10" width="90" height="22" rx="7" fill="var(--rust)"/><path d="M16,10 L28,-6 L62,-6 L76,10 Z" fill="var(--rust)"/><circle cx="20" cy="32" r="8" fill="var(--text)"/><circle cx="70" cy="32" r="8" fill="var(--text)"/></g>`;
   const svg=svgOpen(320)+
    `${liquid}${walls}
     <rect x="${c1-w1/2+1}" y="${top1}" width="${w1-2}" height="10" fill="var(--m-iron)"/>
     <rect x="${c2-w2/2+1}" y="${top2}" width="${w2-2}" height="10" fill="var(--m-iron)"/>
     ${car}
     ${arrow(c1,top1-70,c1,top1-4,'var(--amber)',5)}
     <text x="${c1+14}" y="${top1-40}" class="t-a">F₁ = ${s.F1} N</text>
     ${arrow(c2+w2/2+30,bot-10,c2+w2/2+30,top2+4,'var(--moss)',5)}
     <text x="${c2+w2/2+42}" y="${(top2+bot)/2}" style="fill:var(--moss);font-weight:700">F₂ = ${fmt(f2,0)} N</text>
     <text x="${c1}" y="300" text-anchor="middle" class="t-m">S₁ = ${s.S1} cm²</text>
     <text x="${c2}" y="300" text-anchor="middle" class="t-m">S₂ = ${s.S2} cm²</text>
     <text x="${c2}" y="${top2-48}" text-anchor="middle" class="t-m">auto 10 000 N</text>`+'</svg>';
   const st=lift?'<span class="badge b-succ"><span class="d"></span>Síla stačí – auto jde nahoru</span>':'<span class="badge b-warn"><span class="d"></span>Málo – auto se nehne</span>';
   const out=`${F(`${F2}${E}${fr(F1+D+S2,S1)}${E}${fr(s.F1+' · '+s.S2,s.S1)}${E}<b>${fmt(f2,0)} N</b>`)}<span>${st}</span>
    <span class="note">${lift&&s.d>0?`Malý píst jsi stlačil o ${s.d} cm, velký se zvedl jen o ${fmt(s.d*s.S1/s.S2,2)} cm.`:'Velký píst je '+fmt(s.S2/s.S1,1)+'× větší, proto je i síla '+fmt(s.S2/s.S1,1)+'× větší.'}</span>`;
   return {svg,out};
  }}
});

KEY['hydraulika']={task:`Ze vztahu pro hydraulické zařízení ${F(`${fr(F1,S1)}${E}${fr(F2,S2)}`)} vyjádři a) sílu ${F(F2)}, b) plochu malého pístu ${F(S1)}.`,tip:'Část b) je nejtěžší úloha z celé prezentace: hledaná veličina je ve jmenovateli (dole). Nejdřív ji musíme dostat nahoru.',
   parts:[['a) síla F₂',[[`${fr(F1,S1)}${E}${fr(F2,S2)}`,`| · ${S2}`,`Hledané ${F(F2)} je <strong>děleno</strong> ${F(S2)}. <strong>Obě strany</strong> vynásobíme ${F(S2)}.`],
                      [`${fr(F1+D+S2,S1)}${E}${fr(F2+D+cx(S2),cx(S2))}`,'',`Vpravo se ${F(S2)} zkrátí.`],
                      [`${F2}${E}${fr(F1+D+S2,S1)}`,'','Prohodíme strany a máme výsledek.']]],
          ['b) plocha S₁',[[`${fr(F1,S1)}${E}${fr(F2,S2)}`,`| · ${S1}`,`${F(S1)} je ve jmenovateli. Abychom ho dostali „nahoru“, vynásobíme <strong>obě strany</strong> ${F(S1)}.`],
                      [`${F1}${E}${fr(F2+D+S1,S2)}`,`| · ${S2}`,`Vlevo se ${F(S1)} zkrátilo a vpravo je teď nahoře. Zbavíme se ještě zlomku – obě strany vynásobíme ${F(S2)}.`],
                      [`${F1}${D}${S2}${E}${F2}${D}${S1}`,`| : ${F2}`,`Teď je ${F(S1)} vynásobené ${F(F2)}, proto obě strany vydělíme ${F(F2)}.`],
                      [`${S1}${E}${fr(F1+D+S2,F2)}`,'',`Vpravo se ${F(F2)} zkrátí, strany prohodíme.`]]]],
   check:`Zvol si čísla: ${F(F1+' = 50 N')}, ${F(S1+' = 10 cm<sup>2</sup>')}, ${F(F2+' = 500 N')}, ${F(S2+' = 100 cm<sup>2</sup>')}. Zkouška: ${F(F2+' = 50 · 100 : 10 = 500')} ✓ a ${F(S1+' = 50 · 100 : 500 = 10')} ✓`,
   res:[`${F2}${E}${fr(F1+D+S2,S1)}`,`${S1}${E}${fr(F1+D+S2,F2)}`]};
