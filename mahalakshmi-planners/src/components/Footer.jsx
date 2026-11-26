import { business } from '../content.js';
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx';
import Logo from './Logo.jsx';

export default function Footer({ copy }) {
  const links = [
    ['#services', copy.nav.services],
    ['#process', copy.nav.process],
    ['#about', copy.nav.about],
    ['#contact', copy.nav.contact],
  ];

  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-top">
            <a href="#top" className="brand" aria-label={business.name}>
              <Logo size={48} />
              <span className="brand-text">
                <span className="brand-name">Mahalakshmi</span>
                <span className="brand-sub">Planners</span>
              </span>
            </a>
            <nav className="footer-nav" aria-label="Footer">
              {links.map(([href, label]) => (
                <a key={href} href={href}>{label}</a>
              ))}
            </nav>
          </div>

          <div className="footer-main">
            <p className="footer-about">{copy.footerAbout}</p>
            <div className="footer-plate">
              <span className="footer-plate-label">{copy.footerReg}</span>
              <strong>{business.engineer}</strong>
              <span>{business.qualification}</span>
              <span className="footer-plate-reg">Reg. No. {business.regNo} · {business.authority}</span>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {business.name}. {copy.rights}</span>
            <a href="#top" className="footer-top-link">{copy.backToTop} ↑</a>
          </div>
        </div>
      </footer>

      {/* Fixed call / WhatsApp bar on phones */}
      <div className="mobile-bar">
        <a href={`tel:${business.phoneRaw}`} className="mb-call"><PhoneIcon /> {copy.call}</a>
        <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" className="mb-wa"><WhatsAppIcon /> WhatsApp</a>
      </div>
    </>
  );
}
