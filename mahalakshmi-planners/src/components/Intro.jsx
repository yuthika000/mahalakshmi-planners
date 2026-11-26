import PlanSheet from './PlanSheet.jsx';
import { photos } from '../content.js';

export default function Intro({ copy }) {
  const points = [copy.introPoint1, copy.introPoint2, copy.introPoint3];
  return (
    <section className="section intro">
      <div className="wrap intro-grid">
        <div className="intro-copy">
          <h2 className="display">{copy.introTitle}</h2>
          <p className="intro-text">{copy.introText}</p>
          <ul className="intro-points">
            {points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
        <div className="intro-visual">
          <div className="intro-block" aria-hidden="true" />
          {photos.intro
            ? <img src={photos.intro} alt="" className="intro-photo" />
            : <PlanSheet />}
        </div>
      </div>
    </section>
  );
}
