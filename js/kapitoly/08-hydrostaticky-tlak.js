/* 8 – HYDROSTATICKÝ TLAK */
CH.push({id:'hydrostaticky-tlak',group:'g5',name:'Hydrostatický tlak',formula:`${ph}${E}${I('h')}${D}${r}${D}${I('g')}`,
 short:'Tlak v kapalině roste s hloubkou. Čím hlouběji, tím víc tlačí.',
 symbols:[[ph,'hydrostatický tlak','Pa'],[I('h'),'hloubka pod hladinou','m'],[r,'hustota kapaliny','kg/m³'],[I('g'),'gravitační konstanta','10 N/kg']],
 theory:`<p>Kapalina má hmotnost, a proto ji Země přitahuje. Horní vrstvy vody tlačí na ty spodní. Čím jsi hlouběji, tím víc vody je nad tebou a tím větší je tlak. Tomu říkáme <strong>hydrostatický tlak</strong>.</p>
 <p>Záleží na třech věcech: <strong>hloubce</strong> ${F(I('h'))}, <strong>hustotě kapaliny</strong> ${F(r)} (rtuť tlačí víc než voda) a na ${F(I('g'))}.</p>
 <p>Zajímavost: <strong>nezáleží na tvaru ani velikosti nádoby</strong>. V hloubce 2 m je stejný tlak ve vaně i v moři (pokud je v nich stejná kapalina).</p>
 <p>V každé hloubce tlačí kapalina <strong>všemi směry</strong> – i do stran. Proto voda z otvoru ve stěně stříká, a z nižšího otvoru stříká dál.</p>`,
 remember:['Hloubka se měří od hladiny dolů, vždy v metrech.','Každých 10 m vody přidá asi 100 kPa.','ρ je hustota kapaliny (voda 1 000 kg/m³).'],
 life:'Bolí tě uši, když se potopíš na dno bazénu. Přehradní hráz je dole širší než nahoře. Ponorky musí mít silné stěny.',
 rearr:[{q:ph,f:`${ph}${E}${I('h')}${D}${r}${D}${I('g')}`,how:'Původní vzorec – hloubka × hustota × 10.'},
        {q:I('h'),f:`${I('h')}${E}${fr(ph,r+D+I('g'))}`,how:'Obě strany vydělíme ρ · g.'},
        {q:r,f:`${r}${E}${fr(ph,I('h')+D+I('g'))}`,how:'Obě strany vydělíme h · g.'}],
 examples:[
  {lvl:'Lehký',task:'Jaký hydrostatický tlak je ve vodě v hloubce 2 m? (ρ vody = 1 000 kg/m³)',steps:[
    ['Zápis',`<div class="zapis">${F(I('h')+' = 2 m')}${F(r+' = 1 000 kg/'+m3)}${F(I('g')+' = 10 N/kg')}${F(ph+' = ? Pa')}</div>`],
    ['Vzorec',F(`${ph}${E}${I('h')}${D}${r}${D}${I('g')}`)],
    ['Dosazení',F(`${ph}${E}2${D}1 000${D}10`)],
    ['Výsledek',F(`${ph}${E}20 000 Pa${E}20 kPa`)],
    ['Odpověď','V hloubce 2 m je hydrostatický tlak <strong>20 kPa</strong>.']]},
  {lvl:'Střední',task:'Potápěčka se ponořila v moři do hloubky 30 m. Jaký tlak na ni působí od vody? (ρ mořské vody = 1 030 kg/m³)',steps:[
    ['Zápis',`<div class="zapis">${F(I('h')+' = 30 m')}${F(r+' = 1 030 kg/'+m3)}${F(ph+' = ? kPa')}</div>`],
    ['Vzorec',F(`${ph}${E}${I('h')}${D}${r}${D}${I('g')}`)],
    ['Dosazení',F(`${ph}${E}30${D}1 030${D}10`)],
    ['Výsledek',F(`${ph}${E}309 000 Pa${E}309 kPa`)],
    ['Odpověď','Na potápěčku působí hydrostatický tlak <strong>309 kPa</strong> – asi třikrát víc, než je tlak vzduchu.']]},
  {lvl:'Náročnější',task:'Senzor na dně jezera naměřil hydrostatický tlak 150 kPa. Jak hluboké je jezero v tom místě?',steps:[
    ['Zápis',`<div class="zapis">${F(ph+' = 150 kPa = 150 000 Pa')}${F(r+' = 1 000 kg/'+m3)}${F(I('h')+' = ? m')}</div>`],
    ['Vzorec','Hledáme hloubku:'+F(` ${I('h')}${E}${fr(ph,r+D+I('g'))}`)],
    ['Dosazení',F(`${I('h')}${E}${fr('150 000','1 000 · 10')}${E}${fr('150 000','10 000')}`)],
    ['Výsledek',F(`${I('h')}${E}15 m`)],
    ['Odpověď','Jezero je v tom místě hluboké <strong>15 m</strong>.']]}
 ],
 sim:{defs:[
   {type:'seg',id:'rho',label:'Kapalina',value:1000,options:[['Voda',1000],['Mořská voda',1030],['Olej',900],['Líh',790],['Rtuť',13600]]},
   {type:'range',id:'h',label:'Hloubka sondy',min:0,max:10,step:0.5,value:4,unit:'m'}],
  hint:'Posouvej sondu dolů. A všimni si proudů z otvorů: čím níž je otvor, tím dál voda stříká.',
  draw(s){
   const p=s.h*s.rho*10, col={1000:'var(--water)',1030:'var(--m-sea)',900:'var(--m-oil)',790:'var(--m-alc)',13600:'var(--m-hg)'}[s.rho];
   const top=40, k=22, x0=70, x1=300, y=top+s.h*k;
   let marks=''; for(let d=0;d<=10;d+=2) marks+=`<line x1="${x0-8}" x2="${x0}" y1="${top+d*k}" y2="${top+d*k}" stroke="var(--muted)"/><text x="${x0-12}" y="${top+d*k+4}" text-anchor="end" class="t-m">${d} m</text>`;
   let jets=''; [2,5,8].forEach(d=>{const yy=top+d*k, L=24*Math.sqrt(d)*2.7;
     jets+=`<path d="M${x1},${yy} Q${x1+L*.7},${yy-4} ${x1+L},${Math.min(yy+90,305)}" fill="none" stroke="var(--water-line)" stroke-width="4" stroke-linecap="round" opacity=".75"/>`;});
   const svg=svgOpen(320)+
    `<rect x="${x0}" y="${top}" width="${x1-x0}" height="${10*k}" fill="${col}"/>
     <path d="M${x0},20 L${x0},${top+10*k} L${x1},${top+10*k} L${x1},20" fill="none" stroke="var(--muted)" stroke-width="3"/>
     ${marks}${jets}
     <line x1="${x0}" x2="${x1}" y1="${top}" y2="${top}" stroke="var(--water-line)" stroke-width="2"/>
     <line x1="185" x2="185" y1="${top}" y2="${y}" stroke="var(--amber)" stroke-dasharray="5 4" stroke-width="2"/>
     <circle cx="185" cy="${y}" r="10" fill="var(--amber)"/>
     <text x="200" y="${y-12}" class="t-a">h = ${fmt(s.h,1)} m</text>
     <rect x="517" y="${290-Math.min(200,p/136000*200+2)}" width="60" height="${Math.min(200,p/136000*200+2)}" rx="4" fill="var(--rust)"/>
     <line x1="505" x2="590" y1="290" y2="290" stroke="var(--muted)"/>
     <text x="590" y="${282-Math.min(200,p/136000*200+2)}" text-anchor="end" class="t-r">${fmt(p/1000,1)} kPa</text>
     <text x="590" y="312" text-anchor="end" class="t-m">tlak u sondy</text>`+'</svg>';
   const out=`${F(`${ph}${E}${I('h')}${D}${r}${D}${I('g')}${E}${fmt(s.h,1)}${D}${fmt(s.rho)}${D}10${E}<b>${fmt(p,0)} Pa</b>`)}<span class="note">To je ${fmt(p/1000,1)} kPa.${s.rho===13600?' Rtuť je 13,6× hustší než voda, proto tlačí 13,6× víc.':''}</span>`;
   return {svg,out};
  }}
});

KEY['hydrostaticky-tlak']={task:`Ze vzorce pro hydrostatický tlak ${F(`${ph}${E}${I('h')}${D}${r}${D}${g_}`)} vyjádři a) hloubku ${F(I('h'))}, b) hustotu kapaliny ${F(r)}.`,tip:'Když je hledaná veličina vynásobená dvěma dalšími, vydělíme obě strany oběma najednou – celým součinem.',
   parts:[['a) hloubka h',prodLines(ph,[I('h'),r,g_],I('h'))],['b) hustota ρ',prodLines(ph,[I('h'),r,g_],r)]],
   check:`Zvol si čísla: ${F('h = 2 m')}, ${F(r+' = 1 000 kg/m<sup>3</sup>')}, pak ${F(ph+' = 20 000 Pa')}. Zkouška: ${F('h = 20 000 : (1 000 · 10) = 2')} ✓ a ${F(r+' = 20 000 : (2 · 10) = 1 000')} ✓`,
   res:[`${I('h')}${E}${fr(ph,r+D+g_)}`,`${r}${E}${fr(ph,I('h')+D+g_)}`]};
