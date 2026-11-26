import { GroundFloorHouse, GroundPlusOneHouse, GroundPlusTwoHouse } from './Illustrations.jsx';

const styles = [
  {
    Art: GroundFloorHouse,
    en: { title: 'Ground Floor', text: 'A comfortable single-story home, designed for compact living with easy access.' },
  },
  {
    Art: GroundPlusOneHouse,
    en: { title: 'Ground + 1 Floor', text: 'A spacious two-story elevation, perfect for growing families with balcony features.' },
  },
  {
    Art: GroundPlusTwoHouse,
    en: { title: 'Ground + 2 Floors', text: 'A majestic three-story design, maximizing space and offering grand aesthetic appeal.' },
  },
];

export default function Elevations({ copy }) {
  return (
    <section className="section elevations" id="elevations">
      <div className="wrap">
        <div className="section-head">
          <h2 className="display">{copy.elevTitle}</h2>
        </div>
        <ul className="elev-grid">
          {styles.map(({ Art, ...s }) => (
            <li key={s.en.title} className="elev">
              <div className="elev-art"><Art /></div>
              <h3>{s.en.title}</h3>
              <p>{s.en.text}</p>
            </li>
          ))}
        </ul>
        <p className="elev-note">{copy.elevNote}</p>
      </div>
    </section>
  );
}
