import { useEffect, useState } from 'react';
import { business } from '../content.js';
import { WhatsAppIcon } from './Icons.jsx';

export default function FloatingWhatsApp({ label }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a
      className={`fab ${show ? 'is-shown' : ''}`}
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      tabIndex={show ? 0 : -1}
    >
      <WhatsAppIcon width="26" height="26" />
      <span className="fab-label">{label}</span>
    </a>
  );
}
