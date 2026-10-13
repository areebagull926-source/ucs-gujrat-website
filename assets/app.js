const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const menu=$('.menu-toggle'), nav=$('.nav');
if(menu&&nav) menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});
$$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const slides=$$('.hero-slide');
if(slides.length>1){let i=0;setInterval(()=>{slides[i].classList.remove('active');
    i=(i+1)%slides.length;slides[i].classList.add('active');
const hero=$('.hero-content');
    if(hero){hero.querySelector('h1').textContent=slides[i].dataset.title;
        hero.querySelector('p').textContent=slides[i].dataset.copy}},5000)}
const programs={
"Early Years & Montessori":
{age:"Ages 3–5 years (Playgroup, Nursery, Prep)",
  desc:"A nurturing world where children develop foundational literacy, numeracy, social skills, and sensory awareness through accredited Montessori materials and exploratory play.",
  framework:"International Early Years Curriculum (IEYC) • Phonics Foundation",
  features:["Montessori sensorial apparatus","Activity-based language discovery","Indoor and soft-play areas","Dedicated child psychologists"],
  img:"images/early.jpeg"},

"Primary Wing":
{age:"Grades 1–5",desc:"A supportive and lively learning environment that builds confidence, curiosity, strong foundations, and a love of learning.",
    framework:"Foundational literacy • Numeracy • Inquiry-based learning",
    features:["Project-based lessons","Reading and numeracy","Creative arts","Personalised support"],
    img:"images/primary.jpeg"},

"Middle School":
{age:"Grades 6–8",desc:"Students strengthen subject knowledge, communication, teamwork, and independent thinking as they prepare for advanced study.",
    framework:"National Curriculum • STEM enrichment",
    features:["Science practicals","Digital learning","Sports and teamwork","Leadership projects"],
    img:"images/middle.jpeg"},

"Cambridge O Level & IGCSE":
{age:"Secondary years",desc:"Internationally recognised pathways encourage analytical thinking, confident communication, and subject mastery.",
    framework:"Cambridge International • Subject-based pathways",
    features:["Experienced subject teachers","Exam preparation","Research and inquiry","Academic counselling"],
    img:"images/cambridge.jpeg"},

"Matriculation & Intermediate (F.Sc)":
{age:"Secondary and higher secondary",
    desc:"A balanced academic pathway combining strong board-exam preparation with practical learning and student development.",
    framework:"BISE curriculum • Science and general pathways",
    features:["Structured exam support","Practical laboratory work","Career guidance","Regular progress reviews"],
    img:"images/matric.jpeg"},

"Cambridge A Level College":
{age:"Advanced Level",desc:"Focused A Level study helps learners develop deep subject expertise, university readiness, and independent research skills.",
    framework:"Cambridge International AS & A Level",
    features:["Small-group guidance","University counselling","Independent research","Academic mentoring"],
    img:"images/a-level.jpeg"}
};
$$('.program-tab').forEach(btn=>btn.addEventListener('click',()=>{ $$('.program-tab').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const p=programs[btn.dataset.program];if(!p)return;
    $('#program-title').textContent=btn.dataset.program;$('#program-age').textContent=p.age;
    $('#program-desc').textContent=p.desc;
    $('#program-framework').textContent=p.framework;
    $('#program-features').innerHTML=p.features.map(x=>`<li>${x}</li>`).join('');
    $('#program-img').src=p.img;
    $('#program-img').alt=btn.dataset.program}));
$$('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{$$('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const filter=btn.dataset.filter;
    $$('.event-card').forEach(card=>card.hidden=filter!=='All'&&card.dataset.category!==filter)}));
$$('.save-btn').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.toggle('saved');
    const saved=btn.classList.contains('saved');
    btn.textContent=saved?'✓ Date Saved':'Save Date';
    btn.setAttribute('aria-pressed',String(saved))}));
$$('[data-details]').forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('.event-card');
    const title=$('h3',card)?.textContent||'Event';
    alert(title+'\n\n'+($('.event-description',card)?.textContent||'Please contact the school for event details.'))}));
const admissionForm=$('#admission-form');
if(admissionForm) admissionForm.addEventListener('submit',e=>{const msg=$('.form-message');
    if(!admissionForm.checkValidity()){return}if(msg){msg.style.display='block';
        msg.textContent='Your form is ready to submit. After you press Submit, your email app/service may ask for confirmation on its first use.'}});
