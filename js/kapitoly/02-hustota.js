/* 2 – HUSTOTA */
CH.push({id:'hustota',group:'g1',name:'Hustota',formula:`${r}${E}${fr(I('m'),I('V'))}`,
 short:'Kolik hmotnosti se vejde do jednoho kousku objemu. Podle hustoty poznáme látku.',
 symbols:[[r,'hustota (řecké písmeno „ró“)','kg/m³ nebo g/cm³'],[I('m'),'hmotnost','kg nebo g'],[I('V'),'objem','m³ nebo cm³']],
 theory:`<p>Vezmi si kostku z polystyrenu a stejně velkou kostku ze železa. Mají <strong>stejný objem</strong>, ale železná je mnohem těžší. Železo má větší <strong>hustotu</strong> – jeho látka je „hustěji napěchovaná“.</p>
 <p>Hustota ${F(r)} říká, <strong>jakou hmotnost má jeden kousek objemu</strong> (1 cm³ nebo 1 m³). Proto dělíme hmotnost objemem: ${F(`${r}${E}${fr(I('m'),I('V'))}`)}.</p>
 <p>Důležitý trik: <strong>hustota patří látce, ne tělesu</strong>. Malý i velký kus hliníku mají stejnou hustotu 2,7 g/cm³. Proto podle hustoty v tabulkách poznáme, z čeho je těleso vyrobené.</p>
 <p>A ještě jedna věc: když má těleso <strong>menší hustotu než voda</strong> (1 g/cm³), ve vodě <strong>plave</strong>. Když větší, klesne ke dnu.</p>`,
 remember:['Voda: 1 g/cm³ = 1 000 kg/m³','Převod: g/cm³ × 1 000 = kg/m³','1 l = 1 dm³ = 1 000 cm³ = 0,001 m³','Hmotnost a objem musí být ve „spárovaných“ jednotkách: g s cm³, kg s m³.'],
 life:'Dřevo plave a kámen ne. Olej plave na polévce, protože má menší hustotu než voda. Ledovec plave, ale skoro celý je pod hladinou.',
 rearr:[{q:r,f:`${r}${E}${fr(I('m'),I('V'))}`,how:'Původní vzorec – hmotnost děleno objemem.'},
        {q:I('m'),f:`${I('m')}${E}${r}${D}${I('V')}`,how:'Obě strany vynásobíme V.'},
        {q:I('V'),f:`${I('V')}${E}${fr(I('m'),r)}`,how:'Z m = ρ · V vydělíme obě strany ρ.'}],
 examples:[
  {lvl:'Lehký',task:'Kovová kostička má hmotnost 54 g a objem 20 cm³. Jakou má hustotu? Z jakého kovu může být?',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 54 g')}${F(I('V')+' = 20 '+cm3)}${F(r+' = ? g/'+cm3)}</div>`],
    ['Vzorec',F(`${r}${E}${fr(I('m'),I('V'))}`)],
    ['Dosazení',F(`${r}${E}${fr('54','20')}`)],
    ['Výsledek',F(`${r}${E}2,7 g/${cm3}${E}2 700 kg/${m3}`)],
    ['Odpověď','Kostička má hustotu <strong>2,7 g/cm³</strong>. Podle tabulek je to <strong>hliník</strong>.']]},
  {lvl:'Střední',task:'Jakou hmotnost má voda v plné 1,5litrové lahvi? Hustota vody je 1 000 kg/m³.',steps:[
    ['Zápis',`<div class="zapis">${F(I('V')+' = 1,5 l')}${F(r+' = 1 000 kg/'+m3)}${F(I('m')+' = ? kg')}</div>`],
    ['Převod',F(`1,5 l = 1,5 ${dm3} = 0,0015 ${m3}`)+'<span class="muted">(1 m³ = 1 000 dm³)</span>'],
    ['Vzorec','Hledáme hmotnost:'+F(` ${I('m')}${E}${r}${D}${I('V')}`)],
    ['Dosazení',F(`${I('m')}${E}1 000${D}0,0015`)],
    ['Výsledek',F(`${I('m')}${E}1,5 kg`)],
    ['Odpověď','Voda v lahvi má hmotnost <strong>1,5 kg</strong>. (Každý litr vody má 1 kg.)']]},
  {lvl:'Náročnější',task:'Zlatý prsten má hmotnost 9,65 g. Jaký má objem? Hustota zlata je 19,3 g/cm³.',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 9,65 g')}${F(r+' = 19,3 g/'+cm3)}${F(I('V')+' = ? '+cm3)}</div>`],
    ['Vzorec','Hledáme objem, vzorec upravíme:'+F(` ${I('V')}${E}${fr(I('m'),r)}`)],
    ['Dosazení',F(`${I('V')}${E}${fr('9,65','19,3')}`)],
    ['Výsledek',F(`${I('V')}${E}0,5 ${cm3}`)],
    ['Odpověď','Prsten má objem jen <strong>0,5 cm³</strong> – to je asi jako půlka kostky cukru.']]}
 ],
 sim:{defs:[
   {type:'seg',id:'mat',label:'Materiál',value:2.7,options:[['Dřevo',0.6],['Led',0.92],['Hliník',2.7],['Železo',7.8],['Zlato',19.3]]},
   {type:'range',id:'V',label:'Objem kostky',min:10,max:500,step:10,value:100,unit:'cm³'}],
  hint:'Měň objem: hmotnost roste, ale hustota zůstává stejná. Pak zkus jiný materiál a podívej se na nádobu s vodou.',
  draw(s){
   const col={0.6:'var(--m-wood)',0.92:'var(--m-ice)',2.7:'var(--m-alu)',7.8:'var(--m-iron)',19.3:'var(--m-gold)'}[s.mat];
   const name={0.6:'dřevo',0.92:'led',2.7:'hliník',7.8:'železo',19.3:'zlato'}[s.mat];
   const m=s.mat*s.V, a=50+90*Math.cbrt(s.V/500), d=a*.35, x=70, y=250-a;
   const cube=`<polygon points="${x},${y} ${x+d},${y-d} ${x+a+d},${y-d} ${x+a},${y}" fill="${col}" style="filter:brightness(1.15)" stroke="var(--text)" stroke-opacity=".3"/>
    <polygon points="${x+a},${y} ${x+a+d},${y-d} ${x+a+d},${y+a-d} ${x+a},${y+a}" fill="${col}" style="filter:brightness(.75)" stroke="var(--text)" stroke-opacity=".3"/>
    <rect x="${x}" y="${y}" width="${a}" height="${a}" fill="${col}" stroke="var(--text)" stroke-opacity=".3"/>`;
   // nádoba
   const tx=400,tw=150,ty=110,th=160,wl=170, c=26;
   const floats=s.mat<1;
   const yy = floats ? wl - c*(1-s.mat) : ty+th-c-2;
   const svg=svgOpen(320)+
    `<line x1="40" x2="330" y1="250" y2="250" stroke="var(--muted)" stroke-width="2"/>
     ${cube}
     <text x="${x+a/2}" y="278" text-anchor="middle" class="t-m">V = ${fmt(s.V)} cm³</text>
     <text x="${x+a/2+d/2}" y="${y-d-14}" text-anchor="middle" class="t-a">m = ${fmt(m,1)} g</text>
     <text x="${x+a/2}" y="300" text-anchor="middle" class="t-m">${name}</text>
     <rect x="${tx}" y="${wl}" width="${tw}" height="${ty+th-wl}" fill="var(--water)"/>
     <line x1="${tx}" x2="${tx+tw}" y1="${wl}" y2="${wl}" stroke="var(--water-line)" stroke-width="2"/>
     <rect x="${tx+tw/2-c/2}" y="${yy}" width="${c}" height="${c}" rx="3" fill="${col}" stroke="var(--text)" stroke-opacity=".4"/>
     <path d="M${tx},${ty} L${tx},${ty+th} L${tx+tw},${ty+th} L${tx+tw},${ty}" fill="none" stroke="var(--muted)" stroke-width="3"/>
     <text x="${tx+tw/2}" y="${ty-30}" text-anchor="middle" class="t-m">voda: 1 g/cm³</text>
     <text x="${tx+tw/2}" y="${ty-10}" text-anchor="middle" class="${floats?'t-i':'t-r'}">${floats?'plave':'klesne ke dnu'}</text>`+'</svg>';
   const out=`${F(`${r}${E}${fr(I('m'),I('V'))}${E}${fr(fmt(m,1)+' g',fmt(s.V)+' cm<sup>3</sup>')}${E}<b>${fmt(s.mat,2)} g/cm<sup>3</sup></b>`)}
     <span class="note">To je ${fmt(s.mat*1000)} kg/m³. ${floats?'Hustota je menší než u vody, proto těleso plave.':'Hustota je větší než u vody, proto těleso klesne.'}</span>`;
   return {svg,out};
  }}
});

KEY['hustota']={task:`Ze vzorce pro hustotu ${F(`${r}${E}${fr(m_,V_)}`)} vyjádři a) hmotnost ${F(m_)}, b) objem ${F(V_)}.`,tip:TIP_DIV,
   parts:[['a) hmotnost m',divLines(r,m_,V_).a],['b) objem V',divLines(r,m_,V_).b]],
   check:`Zvol si čísla: ${F(r+' = 2 g/cm<sup>3</sup>')}, ${F('V = 5 cm<sup>3</sup>')}, pak ${F('m = 10 g')}. Zkouška: ${F('m = 2 · 5 = 10')} ✓ a ${F('V = 10 : 2 = 5')} ✓`,
   res:[`${m_}${E}${r}${D}${V_}`,`${V_}${E}${fr(m_,r)}`]};
