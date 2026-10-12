/* 11 – MECHANICKÁ PRÁCE */
CH.push({id:'mechanicka-prace',group:'g6',name:'Mechanická práce',formula:`${I('W')}${E}${I('F')}${D}${I('s')}`,
 short:'Práci konáš, když silou posuneš těleso. Síla krát dráha.',
 symbols:[[I('W'),'mechanická práce','J (joule)'],[I('F'),'síla, která těleso posouvá','N'],[I('s'),'dráha, o kterou se těleso posune ve směru síly','m']],
 theory:`<p>Ve fyzice znamená slovo <strong>práce</strong> něco přesnějšího než v běžné řeči. <strong>Mechanickou práci konáš, když působíš silou na těleso a těleso se ve směru síly posune.</strong></p>
 <p>Práce je tím větší, čím <strong>větší silou</strong> působíš a čím <strong>delší dráhu</strong> těleso urazí: ${F(`${I('W')}${E}${I('F')}${D}${I('s')}`)}.</p>
 <p>Jednotka práce je <strong>joule</strong> (J, čti „džaul“). Práci 1 J vykonáš, když silou 1 N posuneš těleso o 1 m – třeba když zvedneš tabulku čokolády (100 g) o 1 metr.</p>
 <p>Pozor na dvě situace, kdy fyzikálně <strong>práci nekonáš</strong>, i když se namáháš:</p>
 <ul><li><strong>Těleso se nehýbe</strong> – držíš těžkou tašku na místě nebo tlačíš do zdi. Dráha je 0, takže i práce je 0.</li>
 <li><strong>Síla míří kolmo na pohyb</strong> – neseš tašku po rovné chodbě. Ruka táhne tašku nahoru, ale taška se pohybuje vodorovně.</li></ul>
 <p>Když něco <strong>zvedáš</strong>, síla je stejně velká jako gravitační síla tělesa (${F(`${I('F')}${E}${I('m')}${D}${I('g')}`)}) a dráha je výška, do které těleso zvedneš.</p>`,
 remember:['1 kJ = 1 000 J','Při zvedání: F = m · g a s = výška h.','Dráhu převeď na metry: 80 cm = 0,8 m.','Bez pohybu není práce.'],
 life:'Vynášíš nákup do patra, tlačíš kolo do kopce, jeřáb zvedá panely na stavbě, výtah veze lidi nahoru. Čím vyšší patro a těžší náklad, tím víc práce.',
 rearr:[{q:I('W'),f:`${I('W')}${E}${I('F')}${D}${I('s')}`,how:'Původní vzorec – síla krát dráha.'},
        {q:I('F'),f:`${I('F')}${E}${fr(I('W'),I('s'))}`,how:'Obě strany vydělíme s.'},
        {q:I('s'),f:`${I('s')}${E}${fr(I('W'),I('F'))}`,how:'Obě strany vydělíme F.'}],
 examples:[
  {lvl:'Lehký',task:'Tlačíš skříň stálou silou 200 N a posuneš ji o 3 m. Jakou práci vykonáš?',steps:[
    ['Zápis',`<div class="zapis">${F(I('F')+' = 200 N')}${F(I('s')+' = 3 m')}${F(I('W')+' = ? J')}</div>`],
    ['Vzorec',F(`${I('W')}${E}${I('F')}${D}${I('s')}`)],
    ['Dosazení',F(`${I('W')}${E}200${D}3`)],
    ['Výsledek',F(`${I('W')}${E}600 J`)],
    ['Odpověď','Vykonáš práci <strong>600 J</strong>.']]},
  {lvl:'Střední',task:'Zvedneš školní batoh o hmotnosti 5 kg ze země na stůl vysoký 80 cm. Jakou práci vykonáš?',steps:[
    ['Zápis',`<div class="zapis">${F(I('m')+' = 5 kg')}${F(I('s')+' = 80 cm')}${F(I('W')+' = ? J')}</div>`],
    ['Síla','Při zvedání musíme překonat gravitační sílu:'+F(` ${I('F')}${E}${I('m')}${D}${I('g')}${E}5${D}10${E}50 N`)],
    ['Převod',F('80 cm = 0,8 m')],
    ['Vzorec',F(`${I('W')}${E}${I('F')}${D}${I('s')}`)],
    ['Dosazení',F(`${I('W')}${E}50${D}0,8${E}40 J`)],
    ['Odpověď','Vykonáš práci <strong>40 J</strong>.']]},
  {lvl:'Náročnější',task:'Jeřáb zvedl betonový panel do výšky 12 m a vykonal při tom práci 36 kJ. Jakou hmotnost má panel?',steps:[
    ['Zápis',`<div class="zapis">${F(I('W')+' = 36 kJ = 36 000 J')}${F(I('s')+' = 12 m')}${F(I('m')+' = ? kg')}</div>`],
    ['Vzorec','Nejdřív zjistíme sílu – vzorec upravíme:'+F(` ${I('F')}${E}${fr(I('W'),I('s'))}`)],
    ['Dosazení',F(`${I('F')}${E}${fr('36 000','12')}${E}3 000 N`)],
    ['Hmotnost','Síla jeřábu se rovná gravitační síle panelu:'+F(` ${I('m')}${E}${fr(Fg,I('g'))}${E}${fr('3 000','10')}${E}300 kg`)],
    ['Odpověď','Panel má hmotnost <strong>300 kg</strong>. Spojili jsme dva vzorce: pro práci a pro gravitační sílu.']]}
 ],
 sim:{defs:[
   {type:'range',id:'m',label:'Hmotnost krabice',min:1,max:50,step:1,value:20,unit:'kg'},
   {type:'range',id:'h',label:'Výška zvednutí (dráha)',min:0,max:5,step:0.1,value:0,unit:'m'},
   {type:'play',target:'h',label:'Zvednout krabici',duration:4000}],
  hint:'Zvedni krabici a sleduj graf vpravo: práce je plocha obdélníku pod čarou síly. Když necháš výšku na nule, krabici jen držíš – práce je 0 J.',
  draw(s){
   const Fv=s.m*10, W=Fv*s.h, k=46, g0=290, bw=26+Math.sqrt(s.m)*5, by=g0-s.h*k-bw, bx=150-bw/2;
   let marks=''; for(let d=0;d<=5;d++) marks+=`<line x1="52" x2="60" y1="${g0-d*k}" y2="${g0-d*k}" stroke="var(--muted)"/><text x="46" y="${g0-d*k+4}" text-anchor="end" class="t-m">${d} m</text>`;
   const gx=v=>330+v*46, gy=f=>g0-f*0.42;
   let grid=''; for(let d=0;d<=5;d++) grid+=`<line x1="${gx(d)}" x2="${gx(d)}" y1="${g0}" y2="${gy(500)}" stroke="var(--sim-grid)"/><text x="${gx(d)}" y="${g0+18}" text-anchor="middle" class="t-m">${d}</text>`;
   for(let f=0;f<=500;f+=250) grid+=`<line x1="${gx(0)}" x2="${gx(5)}" y1="${gy(f)}" y2="${gy(f)}" stroke="var(--sim-grid)"/><text x="${gx(0)-8}" y="${gy(f)+4}" text-anchor="end" class="t-m">${f}</text>`;
   const svg=svgOpen(320)+
    `<line x1="60" x2="60" y1="${g0}" y2="${g0-5*k}" stroke="var(--muted)"/>${marks}
     <rect x="110" y="14" width="80" height="10" rx="3" fill="var(--ground)"/>
     <circle cx="150" cy="34" r="10" fill="none" stroke="var(--muted)" stroke-width="3"/>
     <line x1="150" x2="150" y1="44" y2="${by}" stroke="var(--muted)" stroke-width="2"/>
     <line x1="70" x2="250" y1="${g0}" y2="${g0}" stroke="var(--muted)" stroke-width="2"/>
     ${s.h>0?`<rect x="${bx}" y="${g0-bw}" width="${bw}" height="${bw}" rx="4" fill="none" stroke="var(--muted)" stroke-dasharray="4 4"/>`:''}
     <rect x="${bx}" y="${by}" width="${bw}" height="${bw}" rx="4" fill="var(--m-wood)" stroke="var(--text)" stroke-opacity=".3"/>
     <text x="150" y="${by+bw/2+5}" text-anchor="middle" style="fill:#2a1a12;font-weight:700;font-size:12px">${s.m} kg</text>
     ${arrow(bx+bw+16,by+bw,bx+bw+16,by+bw-44,'var(--amber)',4)}
     <text x="${bx+bw+24}" y="${by+bw-24}" class="t-a">F = ${Fv} N</text>
     ${s.h>0?`<line x1="${bx-14}" x2="${bx-14}" y1="${g0}" y2="${by+bw}" stroke="var(--rust)" stroke-width="2"/><text x="${bx-20}" y="${(g0+by+bw)/2+4}" text-anchor="end" class="t-r">s = ${fmt(s.h,1)} m</text>`:''}
     ${grid}
     <rect x="${gx(0)}" y="${gy(Fv)}" width="${s.h*46}" height="${Fv*0.42}" fill="var(--key-bg)" stroke="var(--amber)" stroke-width="1.5"/>
     <line x1="${gx(0)}" x2="${gx(5)}" y1="${gy(Fv)}" y2="${gy(Fv)}" stroke="var(--amber)" stroke-width="2.5" stroke-dasharray="${s.h<5?'0':'0'}"/>
     ${s.h>0.4?`<text x="${gx(s.h/2)}" y="${gy(Fv/2)+5}" text-anchor="middle" class="t-a">W</text>`:''}
     <text x="${gx(0)}" y="${gy(500)-12}" class="t-m">↑ síla F (N)</text>
     <text x="${gx(5)}" y="${gy(500)-12}" text-anchor="end" class="t-m">dráha s (m) →</text>`+'</svg>';
   const out=`${F(`${I('W')}${E}${I('F')}${D}${I('s')}${E}${Fv} N${D}${fmt(s.h,1)} m${E}<b>${fmt(W,0)} J</b>`)}
     <span class="note">${s.h===0?'Krabici jen držíš – těleso se nepohnulo, proto je práce 0 J.':`To je ${fmt(W/1000,2)} kJ. Síla ${Fv} N = m · g = ${s.m} kg · 10 N/kg.`}</span>`;
   return {svg,out};
  }}
});

KEY['mechanicka-prace']={task:`Ze vzorce pro mechanickou práci ${F(`${I('W')}${E}${I('F')}${D}${I('s')}`)} vyjádři a) sílu ${F(I('F'))}, b) dráhu ${F(I('s'))}.`,tip:TIP_PROD,
   parts:[['a) síla F',prodLines(I('W'),[I('F'),I('s')],I('F'))],['b) dráha s',prodLines(I('W'),[I('F'),I('s')],I('s'))]],
   check:`Zvol si čísla: ${F('F = 200 N')}, ${F('s = 3 m')}, pak ${F('W = 600 J')}. Zkouška: ${F('F = 600 : 3 = 200')} ✓ a ${F('s = 600 : 200 = 3')} ✓`,
   res:[`${I('F')}${E}${fr(I('W'),I('s'))}`,`${I('s')}${E}${fr(I('W'),I('F'))}`]};
