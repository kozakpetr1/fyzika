/* 1 – GRAVITAČNÍ SÍLA */
CH.push({id:'gravitacni-sila',group:'g1',name:'Gravitační síla',formula:`${Fg}${E}${I('m')}${D}${I('g')}`,
 short:'Země přitahuje každé těleso. Čím větší hmotnost, tím větší síla.',
 symbols:[[Fg,'gravitační síla','N (newton)'],[I('m'),'hmotnost tělesa','kg'],[I('g'),'gravitační konstanta (tíhové zrychlení)','10 N/kg']],
 theory:`<p>Země k sobě přitahuje všechno – tebe, jablko i Měsíc. Té přitažlivé síle říkáme <strong>gravitační síla</strong> ${F(Fg)}. Míří vždy <strong>svisle dolů</strong>, do středu Země.</p>
 <p>Vzorec říká jednoduchou věc: <strong>každý kilogram je přitahován silou asi 10 newtonů</strong>. Číslo ${F(I('g')+' = 10 N/kg')} je přesně tohle „kolik newtonů na jeden kilogram“. (Přesně je to 9,81 N/kg, ale ve škole počítáme s 10.)</p>
 <p>Pozor na rozdíl: <strong>hmotnost</strong> (kg) říká, kolik látky v tělese je, a je všude stejná. <strong>Gravitační síla</strong> (N) záleží na tom, kde jsi. Na Měsíci máš stejnou hmotnost, ale Měsíc tě přitahuje asi šestkrát slaběji.</p>`,
 remember:['100 g ≈ 1 N (třeba tabulka čokolády)','1 kg ≈ 10 N','Hmotnost měříme váhou, sílu siloměrem.','Než dosadíš, převeď hmotnost na kilogramy.'],
 life:'Siloměr ve škole, sloupek s háčkem na rybu, ale i osobní váha. Ta ve skutečnosti měří sílu, kterou na ni tlačíš, a přepočítá ji na kilogramy.',
 rearr:[{q:Fg,f:`${Fg}${E}${I('m')}${D}${I('g')}`,how:'Původní vzorec – hmotnost krát 10.'},
        {q:I('m'),f:`${I('m')}${E}${fr(Fg,I('g'))}`,how:'Obě strany vydělíme g. Sílu v newtonech vydělíme deseti.'},
        {q:I('g'),f:`${I('g')}${E}${fr(Fg,I('m'))}`,how:'Obě strany vydělíme m. Hodí se, když zjišťuješ g na jiné planetě.'}],
 examples:[
  {lvl:'Lehký',task:'Jablko má hmotnost 0,2 kg. Jakou gravitační silou ho přitahuje Země?',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 0,2 kg')}${F(I('g')+' = 10 N/kg')}${F(Fg+' = ? N')}</div>`],
    ['Vzorec',F(`${Fg}${E}${I('m')}${D}${I('g')}`)],
    ['Dosazení',F(`${Fg}${E}0,2${D}10`)],
    ['Výsledek',F(`${Fg}${E}2 N`)],
    ['Odpověď','Země přitahuje jablko silou <strong>2 N</strong>.']]},
  {lvl:'Střední',task:'Školní batoh má hmotnost 6 500 g. Jak velkou gravitační silou na něj působí Země?',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 6 500 g')}${F(I('g')+' = 10 N/kg')}${F(Fg+' = ? N')}</div>`],
    ['Převod','Gramy musíme převést na kilogramy (1 kg = 1 000 g):'+F(` 6 500 g = 6,5 kg`)],
    ['Vzorec',F(`${Fg}${E}${I('m')}${D}${I('g')}`)],
    ['Dosazení',F(`${Fg}${E}6,5${D}10`)],
    ['Výsledek',F(`${Fg}${E}65 N`)],
    ['Odpověď','Na batoh působí gravitační síla <strong>65 N</strong>.']]},
  {lvl:'Náročnější',task:'Na siloměru visí balíček a siloměr ukazuje 4,5 N. Jakou hmotnost má balíček v gramech? A kolik by siloměr ukázal na Měsíci, kde g = 1,6 N/kg?',steps:[
    ['Zápis',`<div class="zapis">${F(Fg+' = 4,5 N')}${F(I('g')+' = 10 N/kg')}${F(I('m')+' = ? g')}</div>`],
    ['Vzorec','Hledáme hmotnost, proto vzorec upravíme (vydělíme g):'+F(` ${I('m')}${E}${fr(Fg,I('g'))}`)],
    ['Dosazení',F(`${I('m')}${E}${fr('4,5','10')}${E}0,45 kg`)],
    ['Převod',F('0,45 kg = 450 g')],
    ['Měsíc','Hmotnost se nezmění, změní se jen g:'+F(` ${Fg}${E}0,45${D}1,6${E}0,72 N`)],
    ['Odpověď','Balíček má hmotnost <strong>450 g</strong>. Na Měsíci by siloměr ukázal jen <strong>0,72 N</strong>.']]}
 ],
 sim:{defs:[
   {type:'seg',id:'g',label:'Kde jsme?',value:10,options:[['Země',10],['Měsíc',1.6],['Mars',3.7],['Jupiter',25]]},
   {type:'range',id:'m',label:'Hmotnost tělesa',min:0.5,max:50,step:0.5,value:5,unit:'kg'}],
  hint:'Zkus stejnou hmotnost na Měsíci a na Jupiteru. Těleso je pořád stejné, mění se jen síla.',
  draw(s){
   const Fv=s.m*s.g, k=Math.sqrt(Fv/1250);
   const sEnd=78+20+95*k, side=34+42*Math.cbrt(s.m/50), bx=200-side/2, by=sEnd, aLen=22+80*k;
   const pl={10:['Země','#4f8fb0',46],1.6:['Měsíc','#b9b2a6',22],3.7:['Mars','#c1542e',30],25:['Jupiter','#d6a868',62]}[s.g];
   const ticks=[...Array(11)].map((_,i)=>`<line x1="232" x2="240" y1="${98+i*11.5}" y2="${98+i*11.5}" stroke="var(--muted)" stroke-width="1"/>`).join('');
   const svg=svgOpen(340)+
    `<rect x="120" y="14" width="160" height="10" rx="3" fill="var(--ground)"/>
     <rect x="186" y="24" width="28" height="56" rx="5" fill="var(--chip-h)" stroke="var(--muted)"/>
     <text x="224" y="56" class="t-m">siloměr</text>
     ${spring(200,78,sEnd)}
     <rect x="${bx}" y="${by}" width="${side}" height="${side}" rx="5" fill="var(--m-iron)" stroke="var(--text)" stroke-opacity=".35"/>
     <text x="200" y="${by+side/2+5}" text-anchor="middle" style="fill:#f5ece0;font-weight:700;font-size:13px">${fmt(s.m,1)} kg</text>
     ${arrow(200,by+side+4,200,by+side+4+aLen,'var(--rust)',5)}
     <text x="214" y="${by+side+aLen*.7}" class="t-f t-r">F<tspan dy="5" style="font-size:12px">g</tspan><tspan dy="-5" style="font-style:normal;font-family:var(--font-ui);font-size:14px"> = ${fmt(Fv,1)} N</tspan></text>
     <circle cx="470" cy="150" r="${pl[2]}" fill="${pl[1]}" opacity=".9"/>
     <text x="470" y="${150+pl[2]+26}" text-anchor="middle" class="t-a">${pl[0]}</text>
     <text x="470" y="${150+pl[2]+46}" text-anchor="middle" class="t-m">g = ${fmt(s.g,1)} N/kg</text>`+'</svg>';
   const out=`${F(`${Fg}${E}${I('m')}${D}${I('g')}${E}${fmt(s.m,1)} kg${D}${fmt(s.g,1)} N/kg${E}<b>${fmt(Fv,1)} N</b>`)}`;
   return {svg,out};
  }}
});

KEY['gravitacni-sila']={task:`Ze vzorce pro gravitační sílu ${F(`${Fg}${E}${m_}${D}${g_}`)} vyjádři a) hmotnost ${F(m_)}, b) gravitační konstantu ${F(g_)}.`,tip:TIP_PROD,
   parts:[['a) hmotnost m',prodLines(Fg,[m_,g_],m_)],['b) konstanta g',prodLines(Fg,[m_,g_],g_)]],
   check:`Zvol si čísla: ${F('m = 3 kg')}, ${F('g = 10 N/kg')}, pak ${F(Fg+' = 30 N')}. Zkouška: ${F('m = 30 : 10 = 3')} ✓ a ${F('g = 30 : 3 = 10')} ✓`,
   res:[`${m_}${E}${fr(Fg,g_)}`,`${g_}${E}${fr(Fg,m_)}`]};
