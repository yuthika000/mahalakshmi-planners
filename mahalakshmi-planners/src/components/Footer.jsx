import { business } from '../content.js';
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx';
import Logo from './Logo.jsx';

export default function Footer({ copy }) {
  return (
    <>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <Logo />
              <span className="brand-text">
                <span className="brand-name">Mahalakshmi</span>
                <span className="brand-sub">Planners</span>
              </span>
            </div>
            <p>{copy.footerAbout}</p>
            <p className="footer-reg">
              {copy.footerReg}<br />
              <strong>{business.engineer}, {business.qualification}</strong><br />
              Reg. No. {business.regNo}, {business.authority}
            </p>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© {new Date().getFullYear()} {business.name}. {copy.rights}</span>
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
