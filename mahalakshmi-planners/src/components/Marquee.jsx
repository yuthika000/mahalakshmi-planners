import { services } from '../content.js';

// Slow-moving strip of service names under the hero.
export default function Marquee({ lang }) {
  const items = services.map((s) => s[lang].title);
  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>
          <span>{t}</span>
          <svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M6 0 7.4 4.6 12 6 7.4 7.4 6 12 4.6 7.4 0 6 4.6 4.6z" fill="currentColor" /></svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
