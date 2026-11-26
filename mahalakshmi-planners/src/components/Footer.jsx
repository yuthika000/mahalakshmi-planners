import { business } from '../content.js';
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx';
import Logo from './Logo.jsx';

export default function Footer({ copy }) {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#top" className="brand" aria-label={business.name}>
                <Logo size={44} />
                <span className="brand-text">
                  <span className="brand-name">Mahalakshmi</span>
                  <span className="brand-sub">Planners</span>
                </span>
              </a>
              <p className="footer-about">{copy.footerAbout}</p>
            </div>
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
