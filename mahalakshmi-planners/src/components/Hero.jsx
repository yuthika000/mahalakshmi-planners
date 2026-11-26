import HouseScene from './HouseScene.jsx';
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx';
import { business, photos, steps } from '../content.js';

export default function Hero({ copy }) {
  return (
    <section className="hero" id="top">
      <div className="hero-media">
        {photos.hero
          ? <img src={photos.hero} alt="" className="hero-img" />
          : <HouseScene className="hero-img" />}
      </div>
      <div className="hero-shade" aria-hidden="true" />

      <div className="wrap hero-content">
        <p className="tagline hero-in" lang="ta">{copy.tagline}</p>
        <h1 className="hero-in">{copy.heroTitle}</h1>
        <p className="lede hero-in">{copy.heroText}</p>
        <div className="hero-actions hero-in">
          <a className="btn btn-glass" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> {copy.heroWhatsapp}
          </a>
        </div>
      </div>



      <div className="wrap hero-facts-wrap">
        <dl className="hero-facts">
          <div><dt>{copy.factReg}</dt><dd>{business.regNo}</dd></div>
          <div><dt>{copy.factQual}</dt><dd>{business.engineer}, {business.qualification}</dd></div>
          <div><dt>{copy.factArea}</dt><dd>{copy.factAreaValue}</dd></div>
        </dl>
      </div>
    </section>
  );
}
