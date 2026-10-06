(()=>{
const t=document.querySelector('.nav-toggle'),l=document.getElementById('nav-list');
if(t){t.addEventListener('click',()=>{const o=t.getAttribute('aria-expanded')==='true';t.setAttribute('aria-expanded',String(!o));l.classList.toggle('open',!o)});
 l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{t.setAttribute('aria-expanded','false');l.classList.remove('open')}))}
const f=document.getElementById('order-form');if(!f)return;
const qs=[...f.querySelectorAll('input[data-price]')],tot=document.getElementById('total'),msg=document.getElementById('form-msg');
const n=i=>Math.max(0,Math.min(50,parseInt(i.value,10)||0));
const calc=()=>{const s=qs.reduce((a,i)=>a+n(i)*+i.dataset.price,0);tot.textContent='$'+s;return s};
qs.forEach(i=>i.addEventListener('input',calc));
document.querySelectorAll('[data-preset="gift"]').forEach(b=>b.addEventListener('click',()=>{const g=document.getElementById('gift-qty');if(n(g)===0){g.value=1;calc()}}));
f.addEventListener('submit',e=>{e.preventDefault();msg.classList.remove('err');
 const items=qs.filter(i=>n(i)>0).map(i=>`- ${n(i)} x ${i.dataset.item} ($${n(i)*+i.dataset.price})`);
 const name=f.elements['name'].value.trim(),reach=f.elements['reach'].value.trim(),notes=f.elements['notes'].value.trim();
 if(!items.length){msg.textContent='Add at least one bottle or gift bag first.';msg.classList.add('err');return}
 if(!name||!reach){msg.textContent='Please add your name and a phone number or email so we can reply.';msg.classList.add('err');return}
 const body=`Hi Charis Vanilla Co.,\n\nI'd like to request:\n${items.join('\n')}\n\nEstimated total: $${calc()}\n\nName: ${name}\nPhone/email: ${reach}${notes?'\nNotes: '+notes:''}\n\nThank you!`;
 location.href='mailto:charischerishables@gmail.com?subject='+encodeURIComponent('Order request from '+name)+'&body='+encodeURIComponent(body);
 msg.textContent='Your email app should open with the order written out. Press send there to finish.';
});
})();
