import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Intro from './components/Intro.jsx';
import Services from './components/Services.jsx';
import Elevations from './components/Elevations.jsx';
import Process from './components/Process.jsx';
import Band from './components/Band.jsx';
import Documents from './components/Documents.jsx';
import About from './components/About.jsx';

import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import { t } from './content.js';

// Elements that fade up as they scroll into view
const REVEAL = [
  '.section-head', '.intro-copy', '.intro-visual', '.category', '.elev', '.process .display',
  '.step', '.band-grid > div', '.compare', '.docs-grid > div', '.checklist li', '.plate',
  '.about-grid > div:last-child', '.faq-grid > div:first-child', '.faq-item', '.contact-panel', '.form',
].join(',');

function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const els = [...document.querySelectorAll(REVEAL)].filter((el) => !el.classList.contains('is-in'));
    els.forEach((el) => {
      const siblings = [...el.parentElement.children].filter((c) => c.matches(REVEAL));
      el.style.setProperty('--rd', `${Math.min(siblings.indexOf(el), 6) * 80}ms`);
      el.classList.add('reveal');
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  const copy = t.en;

  useReveal();

  return (
    <>
      <Header copy={copy} />
      <main>
        <Hero copy={copy} />
        <Marquee />
        <Intro copy={copy} />
        <Services copy={copy} />
        <Elevations copy={copy} />
        <Process copy={copy} />
        <Band copy={copy} />
        <Documents copy={copy} />
        <About copy={copy} />

        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
      <FloatingWhatsApp label={copy.fabLabel} />
    </>
  );
}
