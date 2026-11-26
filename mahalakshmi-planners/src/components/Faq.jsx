import { useState } from 'react';
import { faqs } from '../content.js';

export default function Faq({ copy }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section faq" id="faq">
      <div className="wrap faq-grid">
        <div>
          <h2 className="display">{copy.faqTitle}</h2>
          <p className="faq-text">{copy.faqText}</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <h3>
                  <button
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{f.en.q}</span>
                    <span className="faq-sign" aria-hidden="true" />
                  </button>
                </h3>
                <div className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div><p>{f.en.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
