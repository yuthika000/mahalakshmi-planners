/*
  Custom illustrations in the site palette.
  Colours: forest #1f3a34, deep #142824, brass #b38b4d, brass-light #c9a46a,
  pale #e9dcc4, stone #efebe4, paper #fbfaf7.
*/

/* ---------- Service category headers ---------- */

// Approvals: building plan sheet with an "APPROVED" seal and a pen
export function ApprovalArt() {
  return (
    <svg viewBox="0 0 360 200" className="art" aria-hidden="true">
      <rect width="360" height="200" fill="#efe7d8" />
      <g opacity=".35" stroke="#c9b48e" strokeWidth=".8">
        {Array.from({ length: 18 }, (_, i) => <path key={i} d={`M${i * 20} 0V200`} />)}
        {Array.from({ length: 10 }, (_, i) => <path key={i} d={`M0 ${i * 20}H360`} />)}
      </g>
      {/* back sheet */}
      <rect x="92" y="36" width="170" height="150" fill="#fff" transform="rotate(-6 177 111)" opacity=".75" />
      {/* main sheet */}
      <g transform="rotate(3 180 105)">
        <rect x="100" y="28" width="170" height="156" fill="#fff" stroke="#d8cdb8" />
        <path d="M118 52h70v54h-70zM188 52h64v32h-64zM188 84h64v22h-64z" fill="none" stroke="#1f3a34" strokeWidth="3" />
        <path d="M150 106v-14M188 70h-12" stroke="#fff" strokeWidth="5" />
        <path d="M118 124h96M118 136h72M118 148h86" stroke="#d8cdb8" strokeWidth="3" strokeLinecap="round" />
        <rect x="222" y="132" width="34" height="38" fill="none" stroke="#1f3a34" strokeWidth="1" />
        <path d="M228 160q5-10 10 0t10 0" fill="none" stroke="#1f3a34" strokeWidth="1.2" />
      </g>
      {/* seal */}
      <g transform="translate(250 120) rotate(-14)">
        <circle r="36" fill="#b38b4d" />
        <circle r="30" fill="none" stroke="#fbfaf7" strokeWidth="1.4" strokeDasharray="2 3" />
        <path d="m-13 0 9 9 17-19" fill="none" stroke="#fbfaf7" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* pen */}
      <g transform="translate(60 150) rotate(-38)">
        <rect x="0" y="-5" width="96" height="10" rx="5" fill="#1f3a34" />
        <rect x="70" y="-5" width="8" height="10" fill="#c9a46a" />
        <path d="M96 -5 112 0 96 5z" fill="#c9a46a" />
      </g>
    </svg>
  );
}

// Design: compass, set square and a sketched elevation on dark board
export function DesignArt() {
  return (
    <svg viewBox="0 0 360 200" className="art" aria-hidden="true">
      <rect width="360" height="200" fill="#183029" />
      <g opacity=".18" stroke="#c9a46a" strokeWidth=".8">
        {Array.from({ length: 18 }, (_, i) => <path key={i} d={`M${i * 20} 0V200`} />)}
        {Array.from({ length: 10 }, (_, i) => <path key={i} d={`M0 ${i * 20}H360`} />)}
      </g>
      {/* sketched elevation */}
      <g fill="none" stroke="#e9dcc4" strokeWidth="1.6" strokeLinejoin="round">
        <path d="M60 160V96l50-34 50 34v64z" />
        <path d="M160 160V108h96v52" />
        <path d="M150 108h116" />
        <path d="M82 160v-34h22v34M124 112h22v20h-22zM176 124h30v22h-30zM220 124h24v36" />
        <path d="M40 160h250" />
      </g>
      <g stroke="#c9a46a" strokeWidth="1" fill="none">
        <path d="M60 176h196M60 172v8M256 172v8" />
        <path d="M282 96v64M278 96h8M278 160h8" />
      </g>
      {/* set square */}
      <path d="M232 36 320 36 232 124z" fill="rgba(201,164,106,.18)" stroke="#c9a46a" strokeWidth="1.6" />
      <path d="M248 52 286 52 248 90z" fill="#183029" stroke="#c9a46a" strokeWidth="1" />
      {/* compass */}
      <g transform="translate(118 26)">
        <circle cx="0" cy="0" r="7" fill="#c9a46a" />
        <path d="M0 0 -26 70M0 0 22 72" stroke="#e9dcc4" strokeWidth="4" strokeLinecap="round" />
        <path d="M-26 70-28 78M22 72l3 6" stroke="#c9a46a" strokeWidth="2" />
      </g>
      <path d="M90 104a32 32 0 0 0 52 2" fill="none" stroke="#c9a46a" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

// Estimates: calculator, coins and a rising bar chart
export function EstimateArt() {
  return (
    <svg viewBox="0 0 360 200" className="art" aria-hidden="true">
      <rect width="360" height="200" fill="#efe7d8" />
      {/* document */}
      <rect x="44" y="30" width="130" height="150" fill="#fff" stroke="#d8cdb8" />
      <rect x="58" y="44" width="60" height="8" fill="#1f3a34" />
      {[66, 82, 98, 114, 130].map((y, i) => (
        <g key={y}>
          <path d={`M58 ${y}h70`} stroke="#d8cdb8" strokeWidth="3" strokeLinecap="round" />
          <path d={`M142 ${y}h18`} stroke={i === 4 ? '#b38b4d' : '#c9bfae'} strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      <path d="M58 148h102" stroke="#1f3a34" strokeWidth="1.4" />
      <path d="M58 162h50M134 162h26" stroke="#1f3a34" strokeWidth="4" strokeLinecap="round" />
      {/* bars */}
      <g>
        <rect x="200" y="122" width="20" height="44" fill="#c9a46a" />
        <rect x="228" y="100" width="20" height="66" fill="#b38b4d" />
        <rect x="256" y="74" width="20" height="92" fill="#1f3a34" />
        <path d="M194 166h92" stroke="#1f3a34" strokeWidth="2" />
        <path d="M204 112 238 88l28-24" fill="none" stroke="#1f3a34" strokeWidth="2" strokeDasharray="4 3" />
        <path d="m258 60 10 3-3 10" fill="none" stroke="#1f3a34" strokeWidth="2" />
      </g>
      {/* calculator */}
      <g transform="translate(286 92) rotate(8)">
        <rect width="52" height="78" rx="6" fill="#1f3a34" />
        <rect x="7" y="8" width="38" height="16" rx="2" fill="#e9dcc4" />
        {[0, 1, 2].map((r) => [0, 1, 2].map((c) => (
          <rect key={`${r}${c}`} x={8 + c * 13} y={32 + r * 13} width="9" height="8" rx="1.5" fill={r === 2 && c === 2 ? '#c9a46a' : '#3d5a52'} />
        )))}
      </g>
      {/* coins */}
      <g>
        {[0, 1, 2, 3].map((i) => (
          <ellipse key={i} cx="196" cy={182 - i * 6} rx="20" ry="6" fill={i % 2 ? '#c9a46a' : '#b38b4d'} stroke="#8a6a37" strokeWidth=".8" />
        ))}
        <text x="196" y="167" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5a4320" fontFamily="system-ui">₹</text>
      </g>
    </svg>
  );
}

/* ---------- Elevation styles ---------- */

const sky = (id, a, b) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stopColor={a} />
    <stop offset="1" stopColor={b} />
  </linearGradient>
);

// Contemporary: flat roof, wood cladding, large glazing
export function ContemporaryHouse() {
  return (
    <svg viewBox="0 0 400 280" className="art" role="img" aria-label="Contemporary house elevation">
      <defs>{sky('skyC', '#dfe6e2', '#f4efe6')}</defs>
      <rect width="400" height="280" fill="url(#skyC)" />
      <circle cx="320" cy="62" r="26" fill="#f1dcb3" />
      <rect y="232" width="400" height="48" fill="#cfd6c9" />
      <rect x="60" y="74" width="270" height="10" fill="#f7f4ee" stroke="#1f3a34" strokeWidth="1.2" />
      <rect x="74" y="84" width="76" height="70" fill="#8d5530" />
      <path d="M82 84v70M90 84v70M98 84v70M106 84v70M114 84v70M122 84v70M130 84v70M138 84v70M146 84v70" stroke="#6d3f22" strokeWidth="1.5" />
      <rect x="150" y="90" width="120" height="64" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2.5" />
      <path d="M190 90v64M230 90v64" stroke="#1f3a34" strokeWidth="2" />
      <path d="M150 136h120" stroke="#fff" strokeWidth="1.5" opacity=".8" />
      <rect x="270" y="84" width="48" height="70" fill="#ece7dd" />
      <rect x="288" y="98" width="10" height="44" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="40" y="154" width="300" height="8" fill="#f7f4ee" stroke="#1f3a34" strokeWidth="1.2" />
      <rect x="64" y="162" width="62" height="70" fill="#ece7dd" />
      <rect x="84" y="178" width="26" height="54" fill="#8d5530" />
      <rect x="126" y="166" width="124" height="66" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2.5" />
      <path d="M167 166v66M208 166v66" stroke="#1f3a34" strokeWidth="2" />
      <rect x="250" y="162" width="76" height="70" fill="#8f8a83" />
      <path d="M250 175h76M250 188h76M250 201h76M250 214h76M250 227h76" stroke="#77716a" strokeWidth="1.5" />
      <rect x="30" y="232" width="340" height="5" fill="#1f3a34" />
      <circle cx="356" cy="196" r="24" fill="#4f6b52" /><rect x="354" y="210" width="4" height="24" fill="#5a4636" />
    </svg>
  );
}

// Traditional Tamil Nadu: sloped tiled roof, thinnai verandah, wooden pillars
export function TraditionalHouse() {
  return (
    <svg viewBox="0 0 400 280" className="art" role="img" aria-label="Traditional sloped-roof house elevation">
      <defs>{sky('skyT', '#f2e2c4', '#f7efe2')}</defs>
      <rect width="400" height="280" fill="url(#skyT)" />
      <rect y="232" width="400" height="48" fill="#d9cfb9" />
      {/* roof */}
      <path d="M40 120 200 52l160 68z" fill="#a8502e" />
      <path d="M60 111h280M82 102h236M104 93h192M126 84h148M150 74h100M172 65h56" stroke="#8c3f22" strokeWidth="1.5" />
      <path d="M36 120h328v8H36z" fill="#6e3a1f" />
      {/* walls */}
      <rect x="66" y="128" width="268" height="104" fill="#f3e9d6" />
      {/* verandah pillars */}
      {[86, 136, 264, 314].map((x) => (
        <g key={x}>
          <rect x={x - 5} y="128" width="10" height="84" fill="#7a4a2a" />
          <rect x={x - 8} y="208" width="16" height="6" fill="#5c361d" />
        </g>
      ))}
      {/* thinnai platforms */}
      <rect x="66" y="196" width="88" height="18" fill="#c75d3a" />
      <rect x="246" y="196" width="88" height="18" fill="#c75d3a" />
      {/* door */}
      <rect x="178" y="146" width="44" height="68" fill="#7a4a2a" />
      <path d="M200 146v68" stroke="#5c361d" strokeWidth="2" />
      <path d="M172 140h56v6h-56z" fill="#5c361d" />
      <circle cx="194" cy="182" r="2" fill="#c9a46a" /><circle cx="206" cy="182" r="2" fill="#c9a46a" />
      {/* windows */}
      {[100, 270].map((x) => (
        <g key={x}>
          <rect x={x} y="148" width="30" height="34" fill="#3d5a52" />
          <path d={`M${x + 7.5} 148v34M${x + 15} 148v34M${x + 22.5} 148v34`} stroke="#c9a46a" strokeWidth="1.2" />
        </g>
      ))}
      {/* kolam + steps */}
      <rect x="170" y="214" width="60" height="9" fill="#d8ccb6" />
      <rect x="160" y="223" width="80" height="9" fill="#cbbfa8" />
      <g fill="none" stroke="#fff" strokeWidth="1.3">
        <ellipse cx="200" cy="252" rx="34" ry="9" />
        <path d="M172 252q14-10 28 0t28 0M172 252q14 10 28 0t28 0" />
      </g>
      {/* coconut tree */}
      <path d="M368 232c-4-50 0-90 10-130" stroke="#5a4636" strokeWidth="5" fill="none" />
      <g fill="#4f6b52">
        <path d="M378 102c-20-10-38-6-50 6 16-6 32-6 50 0z" />
        <path d="M378 102c-6-18-18-28-34-30 14 8 24 18 32 32z" />
        <path d="M378 102c10-14 20-20 22-22-6 10-12 18-20 26z" />
      </g>
      <path d="M30 232h340" stroke="#1f3a34" strokeWidth="5" />
    </svg>
  );
}

// Duplex: two units, balcony, staircase headroom (mumty)
export function DuplexHouse() {
  return (
    <svg viewBox="0 0 400 280" className="art" role="img" aria-label="Duplex house elevation">
      <defs>{sky('skyD', '#d9dfe6', '#f1eee8')}</defs>
      <rect width="400" height="280" fill="url(#skyD)" />
      <rect y="232" width="400" height="48" fill="#cdd3ca" />
      {/* staircase headroom */}
      <rect x="230" y="38" width="70" height="40" fill="#e9e4da" stroke="#1f3a34" strokeWidth="1.2" />
      <rect x="226" y="34" width="78" height="6" fill="#1f3a34" />
      <rect x="246" y="50" width="16" height="22" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="1.2" />
      {/* parapet */}
      <rect x="70" y="78" width="260" height="14" fill="#f7f4ee" stroke="#1f3a34" strokeWidth="1.2" />
      {/* upper floor */}
      <rect x="80" y="92" width="240" height="66" fill="#f0ebe1" />
      <rect x="80" y="92" width="96" height="66" fill="#c9a46a" opacity=".5" />
      <rect x="96" y="104" width="64" height="40" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M128 104v40" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="200" y="100" width="100" height="44" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M233 100v44M266 100v44" stroke="#1f3a34" strokeWidth="1.5" />
      {/* balcony */}
      <rect x="190" y="144" width="140" height="6" fill="#1f3a34" />
      <path d="M196 144v-16M212 144v-16M228 144v-16M244 144v-16M260 144v-16M276 144v-16M292 144v-16M308 144v-16M324 144v-16M192 128h136" stroke="#1f3a34" strokeWidth="1.5" />
      {/* slab */}
      <rect x="66" y="158" width="268" height="8" fill="#f7f4ee" stroke="#1f3a34" strokeWidth="1.2" />
      {/* ground floor */}
      <rect x="80" y="166" width="240" height="66" fill="#f0ebe1" />
      <rect x="96" y="176" width="54" height="36" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M123 176v36" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="172" y="174" width="34" height="58" fill="#8d5530" />
      <rect x="220" y="166" width="100" height="66" fill="#3d4743" />
      <path d="M220 178h100M220 190h100M220 202h100M220 214h100M220 226h100" stroke="#55615c" strokeWidth="2" />
      {/* car porch pillar */}
      <rect x="318" y="158" width="10" height="74" fill="#8f8a83" />
      <path d="M30 232h340" stroke="#1f3a34" strokeWidth="5" />
      <circle cx="44" cy="200" r="22" fill="#4f6b52" /><rect x="42" y="212" width="4" height="22" fill="#5a4636" />
    </svg>
  );
}

// Ground Floor: single-storey compact home with sloped parapet and trees
export function GroundFloorHouse() {
  return (
    <svg viewBox="0 0 400 280" className="art" role="img" aria-label="Ground floor house elevation">
      <defs>{sky('skyG0', '#dce8e2', '#f4f0e8')}</defs>
      <rect width="400" height="280" fill="url(#skyG0)" />
      <rect y="232" width="400" height="48" fill="#c8d1c4" />
      <rect x="60" y="98" width="280" height="12" fill="#f0ebe0" stroke="#1f3a34" strokeWidth="1.4" />
      <rect x="72" y="110" width="256" height="122" fill="#f3ede2" />
      <rect x="90" y="128" width="72" height="52" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M126 128v52" stroke="#1f3a34" strokeWidth="1.8" />
      <path d="M90 154h72" stroke="#1f3a34" strokeWidth="1.2" />
      <rect x="178" y="148" width="44" height="84" fill="#7a4a2a" />
      <path d="M200 148v84" stroke="#5c361d" strokeWidth="1.8" />
      <circle cx="192" cy="192" r="3" fill="#c9a46a" />
      <rect x="172" y="142" width="56" height="8" fill="#5c361d" />
      <rect x="238" y="128" width="72" height="52" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M274 128v52" stroke="#1f3a34" strokeWidth="1.8" />
      <path d="M238 154h72" stroke="#1f3a34" strokeWidth="1.2" />
      <rect x="170" y="228" width="60" height="6" fill="#d0c8b6" />
      <path d="M30 232h340" stroke="#1f3a34" strokeWidth="4" />
      <circle cx="42" cy="194" r="26" fill="#4f6b52" /><rect x="40" y="214" width="4" height="20" fill="#5a4636" />
      <circle cx="358" cy="196" r="22" fill="#4f6b52" /><rect x="356" y="212" width="4" height="20" fill="#5a4636" />
    </svg>
  );
}

// Ground + 1 Floor: two-storey with balcony
export function GroundPlusOneHouse() {
  return (
    <svg viewBox="0 0 400 280" className="art" role="img" aria-label="Ground plus one floor house elevation">
      <defs>{sky('skyG1', '#d8e2ec', '#f0ece4')}</defs>
      <rect width="400" height="280" fill="url(#skyG1)" />
      <rect y="232" width="400" height="48" fill="#c6cfd8" />
      <rect x="62" y="62" width="276" height="12" fill="#f0ebe0" stroke="#1f3a34" strokeWidth="1.4" />
      <rect x="72" y="74" width="256" height="76" fill="#e9e3d8" />
      <rect x="90" y="90" width="68" height="44" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M124 90v44" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="172" y="90" width="56" height="44" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <rect x="242" y="90" width="68" height="44" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M276 90v44" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="62" y="148" width="276" height="8" fill="#1f3a34" />
      <path d="M70 148v-18M86 148v-18M102 148v-18M118 148v-18M134 148v-18M150 148v-18M290 148v-18M306 148v-18M322 148v-18M66 130h90M286 130h42" stroke="#1f3a34" strokeWidth="1.4" />
      <rect x="58" y="156" width="284" height="8" fill="#f7f4ee" stroke="#1f3a34" strokeWidth="1.2" />
      <rect x="72" y="164" width="256" height="68" fill="#f3ede2" />
      <rect x="90" y="178" width="60" height="40" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M120 178v40" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="176" y="168" width="48" height="64" fill="#8d5530" />
      <path d="M200 168v64" stroke="#6d3f22" strokeWidth="1.8" />
      <circle cx="190" cy="202" r="3" fill="#c9a46a" />
      <rect x="250" y="178" width="60" height="40" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M280 178v40" stroke="#1f3a34" strokeWidth="1.5" />
      <path d="M30 232h340" stroke="#1f3a34" strokeWidth="4" />
      <circle cx="38" cy="196" r="22" fill="#4f6b52" /><rect x="36" y="210" width="4" height="22" fill="#5a4636" />
      <circle cx="362" cy="198" r="20" fill="#4f6b52" /><rect x="360" y="212" width="4" height="20" fill="#5a4636" />
    </svg>
  );
}

// Ground + 2 Floors: three-storey with external staircase
export function GroundPlusTwoHouse() {
  return (
    <svg viewBox="0 0 400 280" className="art" role="img" aria-label="Ground plus two floors house elevation">
      <defs>{sky('skyG2', '#d2dae6', '#ece8e0')}</defs>
      <rect width="400" height="280" fill="url(#skyG2)" />
      <rect y="232" width="400" height="48" fill="#c2cbd4" />
      <rect x="76" y="30" width="200" height="10" fill="#f0ebe0" stroke="#1f3a34" strokeWidth="1.2" />
      <rect x="84" y="40" width="184" height="58" fill="#e8e2d7" />
      <rect x="96" y="52" width="60" height="36" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M126 52v36" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="168" y="52" width="80" height="36" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M208 52v36" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="72" y="98" width="212" height="8" fill="#1f3a34" />
      <rect x="84" y="106" width="184" height="58" fill="#f0ebe1" />
      <rect x="96" y="118" width="60" height="36" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M126 118v36" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="168" y="118" width="80" height="36" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M208 118v36" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="72" y="162" width="212" height="6" fill="#1f3a34" />
      <path d="M78 162v-14M94 162v-14M110 162v-14M272 162v-14M256 162v-14M240 162v-14M74 148h48M236 148h42" stroke="#1f3a34" strokeWidth="1.3" />
      <rect x="68" y="168" width="220" height="8" fill="#f7f4ee" stroke="#1f3a34" strokeWidth="1.2" />
      <rect x="84" y="176" width="184" height="56" fill="#f3ede2" />
      <rect x="96" y="184" width="52" height="48" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M122 184v48" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="162" y="186" width="40" height="46" fill="#8d5530" />
      <path d="M182 186v46" stroke="#6d3f22" strokeWidth="1.8" />
      <circle cx="174" cy="210" r="3" fill="#c9a46a" />
      <rect x="210" y="184" width="50" height="48" fill="#bcd3cf" stroke="#1f3a34" strokeWidth="2" />
      <path d="M235 184v48" stroke="#1f3a34" strokeWidth="1.5" />
      <rect x="294" y="30" width="72" height="202" fill="#e0dbd2" stroke="#1f3a34" strokeWidth="1" />
      <path d="M294 65h72M294 100h72M294 135h72M294 170h72M294 205h72" stroke="#c8c2b8" strokeWidth="1.5" />
      <path d="M30 232h340" stroke="#1f3a34" strokeWidth="4" />
      <circle cx="42" cy="202" r="18" fill="#4f6b52" /><rect x="40" y="214" width="4" height="18" fill="#5a4636" />
    </svg>
  );
}

/* ---------- Process step icons ---------- */
const stepPaths = [
  // consultation: two speech bubbles
  <><path d="M6 10h22v15H16l-6 5v-5H6z" /><path d="M32 18h10v14h-3v5l-5-5h-8v-3" /><path d="M11 16h12M11 20h8" /></>,
  // site measurement: tape + pegs on plot
  <><path d="M6 34 18 12l24 6-6 18z" strokeDasharray="3 3" /><circle cx="6" cy="34" r="2.5" /><circle cx="18" cy="12" r="2.5" /><circle cx="42" cy="18" r="2.5" /><circle cx="36" cy="36" r="2.5" /><path d="M21 27h8M25 23v8" /></>,
  // drawings: sheet with plan + pencil
  <><rect x="6" y="8" width="26" height="32" /><path d="M11 14h16v14H11zM19 14v8M11 22h6" /><path d="m36 12 6 6-14 14h-6v-6z" /></>,
  // approval: certificate with seal
  <><rect x="6" y="8" width="30" height="24" /><path d="M11 15h20M11 20h14" /><circle cx="34" cy="32" r="7" /><path d="m31 32 2 2 4-4M30 38l-2 6 6-3 6 3-2-6" /></>,
];

export function StepIcon({ index }) {
  return (
    <svg viewBox="0 0 48 48" width="52" height="52" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {stepPaths[index]}
    </svg>
  );
}

/* ---------- Documents folder ---------- */
export function DocumentsArt() {
  return (
    <svg viewBox="0 0 320 220" className="docs-art" aria-hidden="true">
      <ellipse cx="160" cy="206" rx="120" ry="8" fill="#ddd5c6" />
      {/* folder back */}
      <path d="M40 54h80l14 14h146v130H40z" fill="#1f3a34" />
      {/* papers */}
      <g transform="rotate(-6 150 110)">
        <rect x="70" y="36" width="130" height="150" fill="#fff" stroke="#d8cdb8" />
        <path d="M86 58h70M86 72h96M86 86h80M86 100h92" stroke="#d8cdb8" strokeWidth="4" strokeLinecap="round" />
        <text x="86" y="50" fontSize="9" fontWeight="700" fill="#1f3a34" fontFamily="system-ui">PATTA</text>
      </g>
      <g transform="rotate(5 190 110)">
        <rect x="130" y="30" width="130" height="150" fill="#fbfaf7" stroke="#d8cdb8" />
        <text x="146" y="48" fontSize="9" fontWeight="700" fill="#1f3a34" fontFamily="system-ui">CHITTA</text>
        <path d="M146 60h96M146 74h80M146 88h92M146 102h70" stroke="#d8cdb8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="228" cy="150" r="16" fill="none" stroke="#b38b4d" strokeWidth="2" />
        <path d="m221 150 5 5 9-10" fill="none" stroke="#b38b4d" strokeWidth="2.5" strokeLinecap="round" />
      </g>
      {/* folder front */}
      <path d="M30 96h260l-10 102H40z" fill="#2b4b44" />
      <rect x="128" y="132" width="64" height="20" rx="2" fill="#c9a46a" />
      <path d="M140 142h40" stroke="#1f3a34" strokeWidth="2" />
    </svg>
  );
}
