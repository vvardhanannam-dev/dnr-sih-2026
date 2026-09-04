const config = window.SIH_CONFIG;

// TOAST MESSAGE: shown when a manual link/file has not been added yet.
const toast = document.getElementById('toast');
const notify = (message) => { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200); };

// CONFIG TEXT BINDING: fills event title, date, venue and other editable text.
document.querySelectorAll('[data-bind]').forEach(el => {
  const value = el.dataset.bind.split('.').reduce((obj, key) => obj?.[key], config);
  if (value) el.textContent = value;
});

// QUICK-LINK CARD ICONS: replace image files in assets/ to change logos.
const cardIcons = {
  whatsapp: '<img src="assets/whatsapp-logo.png" alt="WhatsApp" />',
  external: '<img src="assets/sih-official-logo.png" alt="Official SIH website" />',
  // Register Your Team card icon (functional dashboard icon).
  arrow: '<svg class="register-icon" viewBox="0 0 64 64" aria-label="Register your team" role="img"><circle cx="25" cy="20" r="10"/><path d="M8 49c2-11 9-17 17-17s15 6 17 17"/><path d="M48 26v18M39 35h18"/></svg>'
};
// QUICK-LINK CARD BUILDER: creates the bottom cards from config.js.
document.getElementById('quickLinks').innerHTML = config.quickLinks.map(item => `
  <a class="quick-link external-link reveal" data-link="${item.urlKey}" href="#">
    ${item.label}<span class="quick-link-icon">${cardIcons[item.icon] || cardIcons.arrow}</span>
  </a>`).join('');

// DOWNLOAD BUTTONS: brochure and PPT file paths come from config.js.
// DOWNLOAD BUTTONS: brochure opens; PPT downloads.
document.querySelectorAll('.download-link').forEach(link => {
  const type = link.dataset.download;
  const path = config.downloads[type];

  link.href = path;

  // Brochure opens in a new browser tab
  if (type === 'brochure') {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
  }

  // PPT template downloads directly
  if (type === 'pptTemplate') {
    link.setAttribute('download', '');
  }

  link.addEventListener('click', event => {
    if (!path || path.includes('PASTE-')) {
      event.preventDefault();
      notify('Add the file path in config.js first.');
    }
  });
});
// EXTERNAL LINKS: Register, WhatsApp and SIH links come from config.js.
document.querySelectorAll('.external-link').forEach(link => {
  const url = config.links[link.dataset.link];
  link.href = url || '#'; link.target = '_blank'; link.rel = 'noopener noreferrer';
  link.addEventListener('click', e => { if (!url || url.includes('PASTE-YOUR')) { e.preventDefault(); notify('Paste your link in config.js first.'); } });
});

// RESPONSIVE MENU: opens and closes the mobile dashboard.
const menu = document.getElementById('nav'), menuToggle = document.getElementById('menuToggle');
menuToggle.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); }));
// STICKY HEADER EFFECT: adds the dark header background after scrolling.
window.addEventListener('scroll', () => document.querySelector('.site-header').classList.toggle('scrolled', scrollY > 30));

// SCROLL REVEAL: fades each section in when it enters the screen.
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// STAR BACKGROUND: lightweight animated particles behind the website.
const canvas = document.getElementById('stars'), ctx = canvas.getContext('2d'); let stars = [];
// STAR COUNT/SPEED: edit 150, 8, .18 and .04 below to tune the effect.
function resize(){ canvas.width=innerWidth*devicePixelRatio;canvas.height=innerHeight*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);stars=Array.from({length:Math.min(150,Math.floor(innerWidth/8))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.2+.2,s:Math.random()*.18+.04})); }
function draw(){ctx.clearRect(0,0,innerWidth,innerHeight);stars.forEach(p=>{p.y+=p.s;if(p.y>innerHeight)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(220,180,255,${.2+p.r/2})`;ctx.fill()});requestAnimationFrame(draw)}
addEventListener('resize',resize);resize();draw();
// LOADING EFFECT TIME: change 320 below to adjust milliseconds.
// 320ms keeps the effect visible briefly without making the site feel slow.
requestAnimationFrame(() => setTimeout(() => {
  document.getElementById('loader').classList.add('hide');
  document.querySelector('.hero .reveal').classList.add('visible');
}, 1500));
