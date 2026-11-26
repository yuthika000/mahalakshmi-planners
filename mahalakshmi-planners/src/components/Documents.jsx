import { documents } from '../content.js';
import { DocumentsArt } from './Illustrations.jsx';

export default function Documents({ copy }) {
  return (
    <section className="section documents" id="documents">
      <div className="wrap docs-grid">
        <div>
          <h2 className="display">{copy.docsTitle}</h2>
          <p className="docs-text">{copy.docsText}</p>
          <p className="docs-note">{copy.docsNote}</p>
          <DocumentsArt />
        </div>
        <ul className="checklist">
          {documents.en.map((d) => (
            <li key={d}>
              <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
                <circle cx="10" cy="10" r="9" />
                <path d="m6 10.2 2.7 2.7L14 7.4" />
              </svg>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
