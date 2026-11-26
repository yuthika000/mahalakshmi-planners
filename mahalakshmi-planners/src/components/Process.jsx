import { steps } from '../content.js';
import { StepIcon } from './Illustrations.jsx';

export default function Process({ copy }) {
  return (
    <section className="section process" id="process">
      <div className="wrap">
        <h2 className="display">{copy.processTitle}</h2>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={i} className="step">
              <div className="step-top">
                <span className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="step-icon"><StepIcon index={i} /></span>
              </div>
              <h3>{s.en.title}</h3>
              <p>{s.en.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
