'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { ReactNode } from 'react';
import { BRANDS } from '@/data/content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Cam = { cx: number; cy: number; w: number; tilt: number; spin: number };
// Camera stops in map units (viewBox 1000 x 1100). Boxes come from scripts/build-map.mjs.
const SHOTS: Record<string, Cam> = {
  india: { cx: 500, cy: 560, w: 1000, tilt: 42, spin: -8 },
  network: { cx: 500, cy: 560, w: 980, tilt: 22, spin: -3 },
  mh: { cx: 305, cy: 682, w: 400, tilt: 16, spin: 0 },
  ncr: { cx: 321, cy: 343, w: 120, tilt: 14, spin: 0 },
  br: { cx: 597, cy: 440, w: 280, tilt: 16, spin: 0 },
  out: { cx: 500, cy: 560, w: 1000, tilt: 32, spin: -6 },
};

const mh = BRANDS.filter(b => b.state === 'maharashtra');
const ncr = BRANDS.filter(b => b.state === 'ncr');
const br = BRANDS.filter(b => b.state === 'bihar');

function BrandChips({ list }: { list: typeof BRANDS }) {
  return (
    <ul className="chips-list">
      {list.map(b => (
        <li key={b.n}>
          <span className="mono" aria-hidden="true">{b.n.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('')}</span>
          <span className="nm"><b>{b.n}</b><small>{b.cat}</small></span>
          <span className="fig">{b.out ? `${b.out} outlets` : b.inv}</span>
        </li>
      ))}
    </ul>
  );
}

export default function MapStory({ map }: { map: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const el = root.current!;
    const svg = el.querySelector<SVGSVGElement>('.imap')!;
    const tiltEl = el.querySelector<HTMLElement>('.map-tilt')!;
    const scenes = gsap.utils.toArray<HTMLElement>('.scene', el);
    const cam: Cam = { ...SHOTS.india };
    const pins = Array.from(el.querySelectorAll<SVGGElement>('.m-pins .pin'));

    const apply = () => {
      const h = cam.w * 1.1;
      svg.setAttribute('viewBox', `${(cam.cx - cam.w / 2).toFixed(1)} ${(cam.cy - h / 2).toFixed(1)} ${cam.w.toFixed(1)} ${h.toFixed(1)}`);
      const px = Math.max(cam.w / (svg.clientWidth || 1000), h / (svg.clientHeight || 1100));
      const sc = `scale(${px.toFixed(4)})`;
      pins.forEach(pn => { pn.style.transform = sc; });
      tiltEl.style.transform = `rotateX(${cam.tilt.toFixed(2)}deg) rotateZ(${cam.spin.toFixed(2)}deg)`;
    };
    apply();
    window.addEventListener('resize', apply);

    const mm = gsap.matchMedia();
    mm.add({ motion: '(prefers-reduced-motion: no-preference)', still: '(prefers-reduced-motion: reduce)' }, ctx => {
      const { motion } = ctx.conditions as { motion: boolean };
      if (!motion) {
        el.classList.add('story-static');
        Object.assign(cam, SHOTS.network); apply();
        return () => el.classList.remove('story-static');
      }

      // intro: pins pop in, slab rises
      gsap.from(el.querySelectorAll('.m-pins .dot'), { scale: 0, transformOrigin: '50% 50%', duration: 0.6, ease: 'back.out(2)', stagger: { each: 0.018, from: 'random' }, delay: 0.25 });
      gsap.from(tiltEl, { rotateX: 70, opacity: 0, duration: 1.4, ease: 'power3.out' });
      gsap.from(scenes[0].querySelectorAll('.intro'), { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, delay: 0.1 });

      const to = (shot: Cam) => ({ ...shot, onUpdate: apply, ease: 'power2.inOut', duration: 1 });
      const show = (i: number, at: string) => {
        tl.to(scenes[i - 1], { autoAlpha: 0, y: -30, duration: 0.35, ease: 'power2.in' }, at);
        tl.fromTo(scenes[i], { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' }, `${at}+=0.4`);
      };

      gsap.set(scenes.slice(1), { autoAlpha: 0 });
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: el, start: 'top top', end: () => `+=${window.innerHeight * 5.2}`, pin: el.querySelector('.story-stage'), scrub: 0.9,
          snap: { snapTo: 'labels', duration: { min: 0.25, max: 0.7 }, delay: 0.05, ease: 'power1.inOut' },
          invalidateOnRefresh: true,
        },
      });
      tl.addLabel('s0');
      // 1 · network
      tl.to(cam, to(SHOTS.network), 's0');
      tl.fromTo(el.querySelectorAll('.arc'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.8, stagger: 0.006, ease: 'power1.out' }, 's0+=0.15');
      tl.to(el.querySelectorAll('.float-chip'), { autoAlpha: 0, y: -20, duration: 0.3 }, 's0');
      show(1, 's0');
      tl.addLabel('s1');
      // 2 · Maharashtra
      tl.to(cam, to(SHOTS.mh), 's1');
      tl.to(el.querySelector('.hl-mh'), { opacity: 1, duration: 0.5 }, 's1+=0.4');
      tl.to(el.querySelectorAll('.arc'), { opacity: 0.25, duration: 0.4 }, 's1');
      tl.to(el.querySelector('.tag-nashik'), { opacity: 1, duration: 0.3 }, 's1+=0.7');
      show(2, 's1');
      tl.addLabel('s2');
      // 3 · Delhi NCR
      tl.to(cam, to(SHOTS.ncr), 's2');
      tl.to(el.querySelector('.hl-mh'), { opacity: 0, duration: 0.4 }, 's2');
      tl.to(el.querySelector('.tag-nashik'), { opacity: 0, duration: 0.2 }, 's2');
      tl.to(el.querySelector('.hl-ncr'), { opacity: 1, duration: 0.5 }, 's2+=0.45');
      tl.to(el.querySelectorAll('.tag-gurugram, .tag-noida'), { opacity: 1, duration: 0.3, stagger: 0.1 }, 's2+=0.7');
      show(3, 's2');
      tl.addLabel('s3');
      // 4 · Bihar
      tl.to(cam, to(SHOTS.br), 's3');
      tl.to(el.querySelectorAll('.tag-gurugram, .tag-noida'), { opacity: 0, duration: 0.2 }, 's3');
      tl.to(el.querySelector('.hl-ncr'), { opacity: 0, duration: 0.4 }, 's3');
      tl.to(el.querySelector('.hl-br'), { opacity: 1, duration: 0.5 }, 's3+=0.45');
      show(4, 's3');
      tl.addLabel('s4');
      // 5 · zoom out, everything lights up
      tl.to(cam, to(SHOTS.out), 's4');
      tl.to(el.querySelector('.hl-br'), { opacity: 0, duration: 0.4 }, 's4');
      tl.to(el.querySelectorAll('.arc'), { opacity: 1, duration: 0.5 }, 's4+=0.3');
      tl.to(el.querySelectorAll('.hl'), { opacity: 0.55, duration: 0.5 }, 's4+=0.5');
      show(5, 's4');
      tl.addLabel('s5');
      tl.to({}, { duration: 0.3 });

      // progress dots
      const dots = gsap.utils.toArray<HTMLElement>('.story-dots i', el);
      ScrollTrigger.create({
        trigger: el, start: 'top top', end: () => `+=${window.innerHeight * 5.2}`,
        onUpdate: self => { const idx = Math.min(5, Math.round(self.progress * 5.3)); dots.forEach((d, k) => d.classList.toggle('on', k === idx)); },
      });
      return () => { Object.assign(cam, SHOTS.india); apply(); };
    });
    return () => window.removeEventListener('resize', apply);
  }, { scope: root });

  return (
    <section className="story" ref={root} aria-labelledby="hero-title">
      <div className="story-stage">
        <div className="wrap story-grid">
          <div className="scenes">
            <div className="scene s0" data-i="0">
              <span className="pill intro"><b>AI growth accelerator</b><span className="pill-more">Franchising for Indian offline brands</span></span>
              <h1 id="hero-title" className="intro">Franchise your brand to <span className="x">100x</span> locations.</h1>
              <p className="lede intro">Franchise strategy, AI-led partner acquisition and growth capital from one team. From your third outlet to your three hundredth.</p>
              <div className="hero-actions intro">
                <a className="btn btn-primary" href="#score">Get your free AI Scalability Score
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="2" /></svg></a>
                <a className="text-link" href="#brands">Buying a franchise? Browse brands</a>
              </div>
              <div className="scroll-cue intro" aria-hidden="true"><span className="mouse"><i /></span>Scroll to fly across the network</div>
            </div>

            <div className="scene" data-i="1">
              <span className="label">The network</span>
              <h2>One growth network across India.</h2>
              <p>20+ brands scaled, 50+ cities activated and ₹100+ Cr in revenue enabled. Every pin is a city where franchise partners and customers are being found.</p>
              <div className="legend"><span><i className="lg-brand" />Brand HQ</span><span><i className="lg-net" />Network cities (illustrative)</span></div>
            </div>

            <div className="scene" data-i="2">
              <span className="label">Zoom · Maharashtra</span>
              <h2>Five brands expanding from Maharashtra.</h2>
              <p>And in Nashik, a local QSR brand that grew from 20 to 55+ outlets across 7 cities.</p>
              <BrandChips list={mh} />
            </div>

            <div className="scene" data-i="3">
              <span className="label">Zoom · Delhi NCR</span>
              <h2>EV brands building out from NCR.</h2>
              <p>Electric mobility is one of the fastest-growing franchise categories. Our EV client went from 3 to 65+ outlets in 30+ cities.</p>
              <BrandChips list={ncr} />
            </div>

            <div className="scene" data-i="4">
              <span className="label">Zoom · Bihar</span>
              <h2>Rural impact, built to scale.</h2>
              <p>Franchising is not just for metros. Gomini connects urban families with indigenous cows while supporting rural women farmers.</p>
              <BrandChips list={br} />
            </div>

            <div className="scene" data-i="5">
              <span className="label">Your brand next</span>
              <h2>Where will your next 100 outlets open?</h2>
              <p>Get your free AI Scalability Score to see which cities and growth model fit your brand.</p>
              <div className="hero-actions"><a className="btn btn-primary" href="#score">Get your Score</a><a className="text-link" href="#journey">See how brands grow</a></div>
            </div>
          </div>

          <div className="map-stage">
            <div className="map-tilt">{map}</div>
            <div className="cam-count" aria-hidden="true"><small>Cities activated</small><output>50</output><span>+</span></div>
            <div className="float-chip fc-a" aria-hidden="true"><span>Electric mobility brand</span><strong>3 <em>→</em> 65+ outlets</strong></div>
            <div className="float-chip fc-b" aria-hidden="true"><span>QSR brand, Nashik</span><strong>20 <em>→</em> 55+ outlets</strong></div>
            <div className="story-dots" aria-hidden="true"><i className="on" /><i /><i /><i /><i /><i /></div>
            <p className="map-credit">Boundaries: Survey of India via DataMeet</p>
          </div>
        </div>
      </div>
    </section>
  );
}
