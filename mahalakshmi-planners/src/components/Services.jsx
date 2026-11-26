import { categories, services } from '../content.js';
import ServiceIcon from './ServiceIcons.jsx';

import { ApprovalArt, DesignArt, EstimateArt } from './Illustrations.jsx';

const art = { approvals: ApprovalArt, design: DesignArt, estimates: EstimateArt };
const byId =Object.fromEntries(services.map((s) => [s.id, s]));

export default function Services({ copy }) {
  return (
    <section className="section services" id="services">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">{copy.servicesTitle}</h2>
          <p>{copy.servicesText}</p>
        </div>
        <div className="category-grid">
          {categories.map((c) => {
            const Art = art[c.key];
            return (
            <article key={c.key} className={`category category-${c.key}`}>
              <div className="category-art"><Art /></div>
              <header className="category-head">
                <h3>{c.en.title}</h3>
                <p>{c.en.text}</p>
              </header>
              <ul className="category-list">
                {c.ids.map((id) => {
                  const s = byId[id];
                  return (
                    <li key={id}>
                      <span className="cl-icon"><ServiceIcon name={id} size={22} /></span>
                      <span>
                        <strong>{s.en.title}</strong>
                        <small>{s.en.text}</small>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
