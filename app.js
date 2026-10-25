(function(){
const data=window.POLICE_DEMO_DATA;
const items=document.getElementById('noticeItems');
function render(tab){document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));items.innerHTML=(data[tab]||[]).map(n=>`<div class="notice-row"><span>${n.title}</span><time>${n.date}</time></div>`).join('');}
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>render(b.dataset.tab)));
render('notice');
let slide=0;function show(){const s=data.slides[slide];document.getElementById('heroTitle').innerHTML=s.title;document.getElementById('heroDesc').textContent=s.desc;document.getElementById('slideNum') .textContent=`0${slide+1} / 03`;}
document.getElementById('prev').addEventListener('click',()=>{slide=(slide+2)%3;show()});
document.getElementById('next').addEventListener('click',()=>{slide=(slide+1)%3;show()});
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('nav').classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));
})();