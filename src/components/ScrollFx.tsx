// @ts-nocheck
/* eslint-disable */
'use client';
import { useEffect } from 'react';

let booted = false;
export default function ScrollFx() {
  useEffect(() => {
    if (booted) return; booted = true;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Listings filter */
document.querySelectorAll('.chip').forEach(ch => ch.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-pressed', c===ch ? 'true' : 'false'));
  document.querySelectorAll('#brandGrid .brand').forEach(card => { card.hidden = !(ch.dataset.f === 'all' || card.dataset.c === ch.dataset.f); });
}));

/* 3D tilt */
function bindTilt(root){
  if (reduce || !matchMedia('(hover: hover)').matches) return;
  root.querySelectorAll('.tilt').forEach(el => {
    if (el.dataset.tb) return; el.dataset.tb = 1;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(1000px) rotateX(${(-y*8).toFixed(2)}deg) rotateY(${(x*10).toFixed(2)}deg) translateZ(6px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}
bindTilt(document);

/* Flip cards: tap toggles on touch */
document.querySelectorAll('.flip').forEach(f => {
  f.addEventListener('click', () => f.classList.toggle('on'));
  f.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f.classList.toggle('on'); } });
});

/* Counters (HTML already holds the final values) */
if (!reduce && 'IntersectionObserver' in window){
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; io.unobserve(en.target);
    const el = en.target, to = +el.dataset.count, pre = el.dataset.prefix || '', suf = el.dataset.suffix || '', t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / 1400), v = Math.round(to * (1 - Math.pow(1 - k, 3))); el.textContent = pre + v + suf; if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), {threshold:.6});
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
}

/* Header, menu, form */
const head = document.querySelector('.site-head');
addEventListener('scroll', () => head && head.classList.toggle('scrolled', scrollY > 8), {passive:true});
document.getElementById('scoreForm').addEventListener('submit', e => {
  e.preventDefault();
  const b = document.getElementById('f-brand'), msg = document.getElementById('formMsg');
  if (!b.value.trim()) { msg.textContent = 'Enter your brand name to continue.'; b.focus(); return; }
  msg.textContent = `Design preview: on the live site, ${b.value.trim()} would now start the Scalability assessment.`;
});


/* ===== v3 scroll engine ===== */
(function(){
  const root = document.documentElement;
  const isStatic = () => reduce || innerWidth <= 920;
  const setStatic = () => root.classList.toggle('static', isStatic());
  setStatic(); addEventListener('resize', setStatic);
  const vh0 = innerHeight;

  // heading word split
  document.querySelectorAll('[data-split]').forEach(h => {
    const walk = node => {
      [...node.childNodes].forEach(c => {
        if (c.nodeType === 3) {
          const frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(t => {
            if (!t) return;
            if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return; }
            const w = document.createElement('span'); w.className = 'wd';
            const inner = document.createElement('span'); inner.textContent = t; w.appendChild(inner); frag.appendChild(w);
          });
          c.replaceWith(frag);
        } else if (c.nodeType === 1) walk(c);
      });
    };
    walk(h);
    h.querySelectorAll('.wd > span').forEach((sp, k) => sp.style.setProperty('--k', k));
    h.classList.add('split');
    if (!reduce && h.getBoundingClientRect().top > vh0) h.classList.add('pre');
  });
  // IO reveals, only for elements starting below the fold
  const pres = [...document.querySelectorAll('.split.pre, .rv')].filter(el => {
    if (el.classList.contains('rv')) { if (reduce || el.getBoundingClientRect().top <= vh0) return false; el.classList.add('pre'); }
    return true;
  });
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.remove('pre'); io.unobserve(en.target); } }), {rootMargin:'0px 0px -12% 0px'});
    pres.forEach(el => io.observe(el));
  } else pres.forEach(el => el.classList.remove('pre'));

  // manifesto words
  const mf = document.querySelector('[data-words]');
  const mfWords = [];
  (function wrap(node, hl){
    [...node.childNodes].forEach(c => {
      if (c.nodeType === 3) {
        const frag = document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(t => {
          if (!t) return;
          if (/^\s+$/.test(t)) { frag.appendChild(document.createTextNode(t)); return; }
          const w = document.createElement('span'); w.className = 'w' + (hl ? ' hl' : ''); w.textContent = t; mfWords.push(w); frag.appendChild(w);
        });
        c.replaceWith(frag);
      } else if (c.nodeType === 1) { c.style.fontStyle = 'normal'; wrap(c, hl || c.classList.contains('hl')); }
    });
  })(mf, false);
  if (reduce) mfWords.forEach(w => w.classList.add('on'));

  // journey dots
  document.querySelectorAll('.dots').forEach(d => { const n = +d.dataset.n; d.innerHTML = Array.from({length:100}, (_, k) => `<i class="${k < n ? 'f' : ''}"></i>`).join(''); });

  // stacking pillars
  const pillars = [...document.querySelectorAll('#pillars .pillar')];

  const scrollEls = [...document.querySelectorAll('[data-scroll]')];
  const jTrack = document.getElementById('jTrack'), jCount = document.getElementById('jCount'), jCards = [...document.querySelectorAll('.j-card')];
  const jStops = [1, 8, 40, 100];
  const steps = [...document.querySelectorAll('#steps .step')], stepsEl = document.getElementById('steps');
  const totop = document.getElementById('totop');
  const clamp = v => Math.max(0, Math.min(1, v));
  let ticking = false;
  function update(){
    ticking = false;
    const vh = innerHeight, max = document.documentElement.scrollHeight - vh;
    const sp = max > 0 ? scrollY / max : 0;
    root.style.setProperty('--sp', sp.toFixed(4));
    totop.classList.toggle('show', scrollY > vh * .8);

    scrollEls.forEach(el => {
      const r = el.getBoundingClientRect();
      const p = el.dataset.scroll === 'pin' ? clamp(-r.top / (r.height - vh)) : clamp((vh - r.top) / (vh + r.height));
      el.style.setProperty('--p', p.toFixed(4));
      if (el.id === 'journey') {
        if (!root.classList.contains('static')) {
          const dist = jTrack.scrollWidth - jTrack.parentElement.clientWidth + 40;
          jTrack.style.transform = `translate3d(${-p * Math.max(0, dist)}px,0,0)`;
          const idx = Math.min(3, Math.floor(p * 4 + .15));
          jCards.forEach((c, k) => c.classList.toggle('active', k === idx));
          const f = p * 3, a = Math.floor(Math.min(2.999, f)), t = f - a;
          jCount.textContent = Math.round(jStops[a] + (jStops[a + 1] - jStops[a]) * t);
        } else { jCards.forEach(c => c.classList.add('active')); jCount.textContent = '100'; }
      }
      if (el === stepsEl) {
        const q = reduce ? 1 : clamp((p - .25) / .35);
        el.style.setProperty('--sf', q.toFixed(4));
        steps.forEach((st, k) => st.classList.toggle('lit', q >= k / 3 - .001 && q > 0));
      }
    });

    // manifesto
    if (!reduce && mf) {
      const r = mf.getBoundingClientRect();
      const q = clamp((vh * .85 - r.top) / (r.height + vh * .35));
      const n = Math.round(q * mfWords.length);
      mfWords.forEach((w, k) => w.classList.toggle('on', k < n));
    }
    // pillars stack
    if (!root.classList.contains('static')) {
      pillars.forEach((pl, k) => {
        const next = pillars[k + 1];
        if (!next) { pl.style.setProperty('--sc', 1); pl.style.setProperty('--br', 1); return; }
        const r1 = pl.getBoundingClientRect(), r2 = next.getBoundingClientRect();
        const cover = clamp((r1.bottom - r2.top) / r1.height);
        pl.style.setProperty('--sc', (1 - cover * .06).toFixed(4));
        pl.style.setProperty('--br', (1 - cover * .08).toFixed(4));
      });
    }
  }
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', onScroll, {passive:true}); addEventListener('resize', onScroll);
  update();

  // marquee with scroll velocity
  const tracks = [...document.querySelectorAll('.mq-row .track')].map(t => ({t, x:0, dir:+t.dataset.dir}));
  let lastY = scrollY, vel = 0, lastT = performance.now();
  function mq(now){
    const dt = Math.min(50, now - lastT); lastT = now;
    const dy = scrollY - lastY; lastY = scrollY;
    vel += (Math.abs(dy) * .6 - vel) * .1;
    tracks.forEach(o => {
      const half = o.t.scrollWidth / 2;
      o.x += o.dir * (0.04 + vel * .02) * dt;
      if (o.x <= -half) o.x += half; if (o.x > 0) o.x -= half;
      o.t.style.transform = `translate3d(${o.x}px,0,0)`;
    });
    requestAnimationFrame(mq);
  }
  if (!reduce) { tracks.forEach(o => { if (o.dir > 0) o.x = -o.t.scrollWidth / 2; }); requestAnimationFrame(mq); }

  // planner
  const pT = document.getElementById('pToday'), pG = document.getElementById('pGoal'), g100 = document.getElementById('grid100');
  g100.innerHTML = Array.from({length:100}, (_, k) => `<i style="--d:${k}"></i>`).join('');
  const cells = [...g100.children];
  function plan(){
    let a = +pT.value, b = +pG.value; if (b < a) b = a;
    const unit = Math.max(1, Math.ceil(b / 100));
    const ta = Math.max(1, Math.round(a / unit)), tb = Math.min(100, Math.round(b / unit));
    cells.forEach((c, k) => { c.className = k < ta ? 't' : (k < tb ? 'n' : ''); });
    document.getElementById('oToday').textContent = a; document.getElementById('oGoal').textContent = b;
    const m = b / a; document.getElementById('oMult').textContent = (m >= 10 ? Math.round(m) : m.toFixed(1).replace(/\.0$/, '')) + 'x';
    document.getElementById('oNew').textContent = `${b - a} new outlet${b - a === 1 ? '' : 's'} to open`;
    document.getElementById('oUnit').textContent = `Each square = ${unit} outlet${unit > 1 ? 's' : ''}`;
    [pT, pG].forEach(r => r.style.setProperty('--fill', ((r.value - r.min) / (r.max - r.min) * 100) + '%'));
  }
  pT.addEventListener('input', plan); pG.addEventListener('input', plan); plan();

  // magnetic buttons
  if (!reduce && matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.btn-primary').forEach(b => {
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`; });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
  }
})();


  }, []);
  return null;
}
