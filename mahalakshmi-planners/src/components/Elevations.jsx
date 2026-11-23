import { GroundFloorHouse, GroundPlusOneHouse, GroundPlusTwoHouse } from './Illustrations.jsx';

const styles = [
  {
    Art: GroundFloorHouse,
    en: { title: 'Ground Floor', text: 'A comfortable single-story home, designed for compact living with easy access.' },
    ta: { title: 'தரை தளம்', text: 'அணுகல் வசதியுடன் சிறிய குடும்பத்திற்கான ஒற்றை தள வீடு.' },
  },
  {
    Art: GroundPlusOneHouse,
    en: { title: 'Ground + 1 Floor', text: 'A spacious two-story elevation, perfect for growing families with balcony features.' },
    ta: { title: 'தரை + 1 தளம்', text: 'பால்கனி வசதியுடன் வளர்ந்து வரும் குடும்பத்திற்கான இரண்டு தள வீடு.' },
  },
  {
    Art: GroundPlusTwoHouse,
    en: { title: 'Ground + 2 Floors', text: 'A majestic three-story design, maximizing space and offering grand aesthetic appeal.' },
    ta: { title: 'தரை + 2 தளங்கள்', text: 'இடத்தை அதிகப்படுத்தி, கம்பீரமான தோற்றத்தை வழங்கும் மூன்று தள வடிவமைப்பு.' },
  },
];

export default function Elevations({ copy, lang }) {
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
              <h3>{s[lang].title}</h3>
              <p>{s[lang].text}</p>
            </li>
          ))}
        </ul>
        <p className="elev-note">{copy.elevNote}</p>
      </div>
    </section>
  );
}
