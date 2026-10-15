'use client';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-head${open ? ' open' : ''}`} id="top">
  <div className="progress" aria-hidden="true"><i></i></div>
  <div className="wrap">
    <div className="head-row">
      <a className="logo" href="#top" aria-label="Scale100x.ai home">
        <span className="mark" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 16 16"><path d="M2 13h3V8H2zM6.5 13h3V5h-3zM11 13h3V2h-3z" fill="#fff"/></svg></span>
        <span>Scale100x<b>.ai</b></span>
      </a>
      <nav className="nav" aria-label="Main">
        <a href="#brands">Franchises</a>
        <a href="#how">For Brands</a>
        <a href="#partners">For Investors</a>
        <a href="#partners">Partners</a>
        <a href="#faq">Resources</a>
      </nav>
      <div className="head-cta">
        <a className="signin" href="#top">Sign in</a>
        <a className="btn btn-primary" href="#score">Get your Score</a>
      </div>
      <button className="menu-btn" id="menuBtn" aria-expanded={open} aria-controls="mobileNav" onClick={() => setOpen(o => !o)}>{open ? 'Close' : 'Menu'}</button>
    </div>
    <nav className="mobile-nav" id="mobileNav" aria-label="Mobile" onClick={() => setOpen(false)}>
      <a href="#brands">Franchises</a><a href="#how">For Brands</a><a href="#partners">For Investors</a><a href="#partners">Partners</a><a href="#faq">Resources</a><a href="#top">Sign in</a>
      <a className="btn btn-primary" href="#score">Get your AI Scalability Score</a>
    </nav>
  </div>
</header>
  );
}
