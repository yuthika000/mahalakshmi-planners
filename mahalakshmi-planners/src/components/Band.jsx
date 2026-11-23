import { useRef, useState } from 'react';
import HouseLines from './HouseLines.jsx';
import HouseScene from './HouseScene.jsx';

const VIEW = '680 300 920 600';

/*
  "From drawing to home" comparison: drag the handle (or use the arrow keys)
  to reveal the finished house underneath the line drawing.
*/
export default function Band({ copy }) {
  const [pos, setPos] = useState(55);
  const boxRef = useRef(null);
  const dragging = useRef(false);

  const setFromPointer = (clientX) => {
    const r = boxRef.current.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  };

  return (
    <section className="band">
      <div className="wrap band-grid">
        <div>
          <h2 className="display">{copy.bandTitle}</h2>
          <p className="band-text" lang="ta">{copy.bandText}</p>
          <p className="band-hint">{copy.bandHint}</p>
          <a className="btn btn-brass" href="#contact">{copy.bandCta}</a>
        </div>

        <div
          className="compare"
          ref={boxRef}
          onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); setFromPointer(e.clientX); }}
          onPointerMove={(e) => dragging.current && setFromPointer(e.clientX)}
          onPointerUp={() => { dragging.current = false; }}
          onPointerCancel={() => { dragging.current = false; }}
        >
          <HouseScene className="compare-layer" viewBox={VIEW} align="xMidYMid slice" idPrefix="cmp-" />
          <div className="compare-top" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <HouseLines className="compare-layer" viewBox={VIEW} align="xMidYMid slice" paper />
          </div>
          <span className="compare-tag compare-tag-left">{copy.compareDrawing}</span>
          <span className="compare-tag compare-tag-right">{copy.compareBuilt}</span>
          <div className="compare-handle" style={{ left: `${pos}%` }} aria-hidden="true">
            <span className="compare-knob">
              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M9 6 3 12l6 6M15 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={Math.round(pos)}
            onChange={(e) => setPos(Number(e.target.value))}
            className="compare-range"
            aria-label={copy.bandHint}
          />
        </div>
      </div>
    </section>
  );
}
