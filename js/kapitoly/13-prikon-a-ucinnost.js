/* 13 – PŘÍKON A ÚČINNOST */
{
const eta=I('η'), P0=S('P','0'), P_=I('P'), W0=S('W','0');
CH.push({id:'prikon-a-ucinnost',group:'g6',name:'Příkon a účinnost',formula:`${eta}${E}${fr(P_,P0)}`,
 short:'Žádný stroj nepřemění všechnu energii na užitečnou práci. Účinnost říká, jaká část se využije.',
 symbols:[[eta,'účinnost (řecké písmeno „éta“)','bez jednotky, nebo v %'],[P_,'výkon – užitečná práce za sekundu','W'],[P0,'příkon – energie, kterou stroj odebírá za sekundu','W']],
 theory:`<p>Každý stroj potřebuje k práci energii – elektřinu ze zásuvky, benzín, jídlo. Kolik energie stroj <strong>odebírá</strong> každou sekundu, to je <strong>příkon</strong> ${F(P0)}. Ten najdeš na štítku spotřebiče, třeba „rychlovarná konvice 2 000 W“.</p>
 <p>Jenže stroj nikdy nepřemění všechno na užitečnou práci. Část energie se „ztratí“ – hlavně se změní na <strong>teplo</strong> (tření, zahřívání motoru, horká žárovka). Užitečná část je <strong>výkon</strong> ${F(P_)}. Proto je výkon vždy <strong>menší</strong> než příkon.</p>
 <p><strong>Účinnost</strong> ${F(eta)} říká, <strong>jaká část příkonu se využije</strong>: ${F(`${eta}${E}${fr(P_,P0)}`)}. Výsledek je desetinné číslo menší než 1. Když ho vynásobíš 100, dostaneš procenta: 0,8 = 80 %.</p>
 <p>Stejně to funguje s prací a energií za celou dobu: ${F(`${eta}${E}${fr(I('W'),W0)}`)}, kde ${F(W0)} je dodaná energie.</p>`,
 remember:['Účinnost je vždy menší než 1 (méně než 100 %).','Do vzorce dosazuj účinnost jako desetinné číslo: 75 % = 0,75.','Výkon a příkon musí mít stejné jednotky (oba W, nebo oba kW).','Ztráty = příkon − výkon.'],
 life:'Elektromotor má účinnost kolem 90 %, benzínový motor auta jen asi 30 %, lidské svaly přibližně 25 %. Klasická žárovka přemění na světlo jen asi 5 % energie, zbytek je teplo – proto se tak hřeje.',
 rearr:[{q:eta,f:`${eta}${E}${fr(P_,P0)}`,how:'Původní vzorec – výkon děleno příkonem.'},
        {q:P_,f:`${P_}${E}${eta}${D}${P0}`,how:'Obě strany vynásobíme P₀.'},
        {q:P0,f:`${P0}${E}${fr(P_,eta)}`,how:'Z P = η · P₀ vydělíme obě strany η.'}],
 examples:[
  {lvl:'Lehký',task:'Motor má příkon 500 W a výkon 400 W. Jaká je jeho účinnost?',steps:[
    ['Zápis',`<div class="zapis">${F(P0+' = 500 W')}${F(P_+' = 400 W')}${F(eta+' = ?')}</div>`],
    ['Vzorec',F(`${eta}${E}${fr(P_,P0)}`)],
    ['Dosazení',F(`${eta}${E}${fr('400','500')}`)],
    ['Výsledek',F(`${eta}${E}0,8${E}80 %`)],
    ['Odpověď','Účinnost motoru je <strong>80 %</strong>. Zbylých 100 W se mění na teplo.']]},
  {lvl:'Střední',task:'Elektromotor s účinností 90 % má příkon 2 kW. Jaký má výkon?',steps:[
    ['Zápis',`<div class="zapis">${F(eta+' = 90 % = 0,9')}${F(P0+' = 2 kW = 2 000 W')}${F(P_+' = ? W')}</div>`],
    ['Vzorec','Hledáme výkon:'+F(` ${P_}${E}${eta}${D}${P0}`)],
    ['Dosazení',F(`${P_}${E}0,9${D}2 000`)],
    ['Výsledek',F(`${P_}${E}1 800 W${E}1,8 kW`)],
    ['Odpověď','Motor má výkon <strong>1 800 W</strong>. Ztráty jsou 200 W.']]},
  {lvl:'Náročnější',task:'Jeřáb zvedne náklad o hmotnosti 600 kg do výšky 10 m za 20 s. Jeho motor má příkon 4 kW. Jaká je účinnost jeřábu?',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 600 kg')}${F(I('h')+' = 10 m')}${F(I('t')+' = 20 s')}${F(P0+' = 4 000 W')}${F(eta+' = ?')}</div>`],
    ['Práce',F(`${I('W')}${E}${I('m')}${D}${I('g')}${D}${I('h')}${E}600${D}10${D}10${E}60 000 J`)],
    ['Výkon',F(`${P_}${E}${fr(I('W'),I('t'))}${E}${fr('60 000','20')}${E}3 000 W`)],
    ['Účinnost',F(`${eta}${E}${fr(P_,P0)}${E}${fr('3 000','4 000')}${E}0,75`)],
    ['Odpověď','Účinnost jeřábu je <strong>75 %</strong>. Spojili jsme vzorce pro práci, výkon a účinnost.']]}
 ],
 sim:{defs:[
   {type:'seg',id:'eta',label:'Stroj',value:0.9,options:[['Elektromotor 90 %',0.9],['Benzínový motor 30 %',0.3],['Člověk 25 %',0.25],['Klasická žárovka 5 %',0.05]]},
   {type:'range',id:'P0',label:'Příkon (dodaná energie za sekundu)',min:100,max:5000,step:100,value:2000,unit:'W'}],
  hint:'Šířka pruhu ukazuje, kolik energie za sekundu teče. Porovnej elektromotor a žárovku: u žárovky skoro všechno odteče jako teplo.',
  draw(s){
   const Pv=s.eta*s.P0, L=s.P0-Pv, T=130, top=70, u=T*s.eta, l=T-u;
   const svg=svgOpen(340)+
    `<rect x="30" y="${top}" width="200" height="${T}" fill="var(--amber)" opacity=".85"/>
     <text x="30" y="${top-16}" class="t-a">příkon P₀ = ${fmt(s.P0)} W</text>
     <rect x="230" y="${top-14}" width="90" height="${T+28}" rx="10" fill="var(--btn)"/>
     <text x="275" y="${top+T/2+5}" text-anchor="middle" style="fill:var(--btn-text);font-weight:700">stroj</text>
     ${u>0.5?`<rect x="320" y="${top}" width="190" height="${u}" fill="var(--moss)" opacity=".9"/>
     <polygon points="510,${top-8} 560,${top+u/2} 510,${top+u+8}" fill="var(--moss)" opacity=".9"/>`:''}
     <text x="330" y="${top-16}" style="fill:var(--moss);font-weight:700">výkon P = ${fmt(Pv,0)} W</text>
     ${l>0.5?`<path d="M320,${top+u+l/2} C${400},${top+u+l/2} ${380+l/2},${top+u+l/2} ${380+l/2},330" fill="none" stroke="var(--rust)" stroke-width="${l}" opacity=".85"/>`:''}
     <text x="${Math.min(400+l,470)}" y="300" class="t-r">ztráty ${fmt(L,0)} W</text>
     <text x="${Math.min(400+l,470)}" y="322" class="t-m">(hlavně teplo)</text>`+'</svg>';
   const out=`${F(`${P_}${E}${eta}${D}${P0}${E}${fmt(s.eta,2)}${D}${fmt(s.P0)} W${E}<b>${fmt(Pv,0)} W</b>`)}
    ${F(`${eta}${E}${fr(P_,P0)}${E}${fr(fmt(Pv,0),fmt(s.P0))}${E}${fmt(s.eta,2)}${E}<b>${fmt(s.eta*100,0)} %</b>`)}
    <span class="note">Ztráty: ${fmt(s.P0)} W − ${fmt(Pv,0)} W = ${fmt(L,0)} W.</span>`;
   return {svg,out};
  }}
});

KEY['prikon-a-ucinnost']={task:`Ze vzorce pro účinnost ${F(`${eta}${E}${fr(P_,P0)}`)} vyjádři a) výkon ${F(P_)}, b) příkon ${F(P0)}.`,tip:TIP_DIV+' Účinnost dosazuj jako desetinné číslo.',
   parts:[['a) výkon P',divLines(eta,P_,P0).a],['b) příkon P₀',divLines(eta,P_,P0).b]],
   check:`Zvol si čísla: ${F(P_+' = 400 W')}, ${F(P0+' = 500 W')}, pak ${F(eta+' = 0,8')}. Zkouška: ${F(P_+' = 0,8 · 500 = 400')} ✓ a ${F(P0+' = 400 : 0,8 = 500')} ✓`,
   res:[`${P_}${E}${eta}${D}${P0}`,`${P0}${E}${fr(P_,eta)}`]};
}
