import { business } from '../content.js';

export default function About({ copy }) {
  return (
    <section className="section about" id="about">
      <div className="wrap about-grid">
        <div className="about-copy">
          <h2 className="display">{copy.aboutTitle}</h2>
          <p className="about-text">{copy.aboutText}</p>
          <dl className="about-details">
            <div>
              <dt>{copy.qualLabel}</dt>
              <dd>{business.qualification}</dd>
            </div>
            <div>
              <dt>{copy.regLabel}</dt>
              <dd>{business.regNo}<br />{business.authority}</dd>
            </div>
            <div className="about-details-wide">
              <dt>{copy.officeLabel}</dt>
              <dd>{business.addressLines.join(', ')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
