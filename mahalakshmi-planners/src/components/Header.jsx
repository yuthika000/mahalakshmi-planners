import { useEffect, useState } from 'react';
import Logo from './Logo.jsx';
import { business } from '../content.js';

export default function Header({ copy, lang, onToggleLang }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['#services', copy.nav.services],
    ['#process', copy.nav.process],
    ['#about', copy.nav.about],
    ['#contact', copy.nav.contact],
  ];

  // Highlight the menu link for the section currently on screen
  const [active, setActive] = useState('');
  useEffect(() => {
    const ids = ['services', 'elevations', 'process', 'documents', 'about', 'faq', 'contact'];
    const map = { elevations: 'services', documents: 'process' };
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(map[e.target.id] || e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    const top = () => window.scrollY < 300 && setActive('');
    window.addEventListener('scroll', top, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', top); };
  }, []);

  return (
    <header className={`header ${solid || open ? 'is-solid' : ''}`}>
      <div className="wrap header-inner">
        <a href="#top" className="brand" aria-label={business.name}>
          <Logo />
          <span className="brand-text">
            <span className="brand-name">Mahalakshmi</span>
            <span className="brand-sub">Planners</span>
          </span>
        </a>

        <nav className={`nav ${open ? 'is-open' : ''}`} id="site-nav" aria-label="Main">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={active === href.slice(1) ? 'is-active' : undefined}
              aria-current={active === href.slice(1) ? 'true' : undefined}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta-mobile" href={`tel:${business.phoneRaw}`}>{copy.call} {business.phoneDisplay}</a>
        </nav>

        <div className="header-actions">
          <a className="btn btn-brass btn-small header-cta" href="#contact">{copy.navCta}</a>
          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
