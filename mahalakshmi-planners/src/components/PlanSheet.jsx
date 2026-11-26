import { business } from '../content.js';

/*
  The hero drawing: a residential floor plan on a drawing sheet,
  with dimensions, a north arrow and an engineer's title block.
  Wall lines "draw in" once on page load (disabled for reduced motion).
*/
export default function PlanSheet() {
  const L = { bed: 'Bedroom', hall: 'Hall', kitchen: 'Kitchen', pooja: 'Pooja', toilet: 'Toilet', portico: 'Portico', proposed: 'Proposed residence', scale: 'Scale 1:100' }

  return (
    <figure className="sheet" aria-label="Sample floor plan drawing with engineer's title block">
      <svg viewBox="0 0 520 420" role="img" aria-hidden="true">
        {/* sheet border */}
        <rect x="8" y="8" width="504" height="404" className="sheet-border" />

        {/* outer walls with door gap on the hall front */}
        <path pathLength="1" className="wall draw" d="M60 50 H360 V290 H150 M110 290 H60 V50" />
        {/* interior walls */}
        <path pathLength="1" className="wall-in draw d2" d="M200 50 V128 M200 160 V290" />
        <path pathLength="1" className="wall-in draw d2" d="M60 160 H120 M152 160 H200" />
        <path pathLength="1" className="wall-in draw d3" d="M200 140 H300 M330 140 H360" />
        <path pathLength="1" className="wall-in draw d3" d="M200 200 H230 M262 200 H360" />
        <path pathLength="1" className="wall-in draw d3" d="M260 140 V200" />

        {/* door swings */}
        <path className="door" d="M110 290 A40 40 0 0 1 150 250" />
        <path className="door" d="M120 160 A32 32 0 0 0 152 192" />
        <path className="door" d="M200 128 A32 32 0 0 0 232 160" />
        <path className="door" d="M230 200 A32 32 0 0 1 262 232" />

        {/* windows */}
        <g className="window">
          <path d="M85 50 H140 M85 54 H140" />
          <path d="M260 50 H320 M260 54 H320" />
          <path d="M360 225 V265 M356 225 V265" />
          <path d="M60 200 V250 M64 200 V250" />
        </g>

        {/* portico */}
        <rect x="60" y="290" width="110" height="46" className="portico" />

        {/* room labels */}
        <g className="room">
          <text x="130" y="104">{L.bed}</text>
          <text x="130" y="120" className="dim-t">12'×11'</text>
          <text x="130" y="222">{L.hall}</text>
          <text x="130" y="238" className="dim-t">14'×13'</text>
          <text x="280" y="96">{L.kitchen}</text>
          <text x="280" y="112" className="dim-t">10'×9'</text>
          <text x="230" y="175">{L.pooja}</text>
          <text x="310" y="175">{L.toilet}</text>
          <text x="280" y="248">{L.bed}</text>
          <text x="280" y="264" className="dim-t">12'×9'</text>
          <text x="115" y="318">{L.portico}</text>
        </g>

        {/* dimension lines */}
        <g className="dim">
          <path d="M60 30 H360 M60 24 V36 M360 24 V36" />
          <path d="M38 50 V290 M32 50 H44 M32 290 H44" />
        </g>
        <text x="210" y="24" className="dim-label">30'-0"</text>
        <text x="30" y="170" className="dim-label" transform="rotate(-90 30 170)">24'-0"</text>

        {/* north arrow */}
        <g className="north" transform="translate(445 70)">
          <circle r="22" />
          <path d="M0 -18 L8 10 L0 4 L-8 10 Z" />
          <text y="-28">N</text>
        </g>

        {/* title block */}
        <g className="title-block">
          <rect x="385" y="196" width="118" height="208" />
          <path d="M385 236 H503 M385 268 H503 M385 300 H503 M385 332 H503 M385 368 H503" />
          <text x="393" y="214" className="tb-strong">Mahalakshmi</text>
          <text x="393" y="228" className="tb-strong">Planners</text>
          <text x="393" y="256">{L.proposed}</text>
          <text x="393" y="284">{business.engineer}</text>
          <text x="393" y="294" className="tb-small">{business.qualification}</text>
          <text x="393" y="314" className="tb-small">Reg. {business.regNo}</text>
          <text x="393" y="325" className="tb-small">{business.authority}</text>
          <text x="393" y="353">{L.scale}</text>
          <text x="393" y="390" className="tb-small">Sheet 01</text>
          <path d="M455 384 q8 -14 16 0 t16 0" className="tb-sign" />
        </g>
      </svg>
    </figure>
  );
}
