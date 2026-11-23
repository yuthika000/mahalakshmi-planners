/*
  Illustrated contemporary two-storey home at dusk.
  Used in the hero until real project photos are added (see photos in content.js).
*/
const slats = (x1, x2, y1, y2, step) => {
  const out = [];
  for (let x = x1 + step; x < x2; x += step) out.push(`M${x} ${y1}V${y2}`);
  return out.join('');
};
const courses = (x1, x2, y1, y2, step) => {
  const out = [];
  for (let y = y1 + step; y < y2; y += step) out.push(`M${x1} ${y}H${x2}`);
  return out.join('');
};

export default function HouseScene({ className = '', viewBox = '0 0 1600 1000', align = 'xMaxYMid slice', idPrefix: p = 'hs-' }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      preserveAspectRatio={align}
      role="img"
      aria-label="Illustration of a contemporary two-storey house at dusk"
    >
      <defs>
        <linearGradient id={`${p}sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0f1d1b" />
          <stop offset=".45" stopColor="#24393a" />
          <stop offset=".72" stopColor="#5b6560" />
          <stop offset=".86" stopColor="#b48a5e" />
          <stop offset="1" stopColor="#d9a46b" />
        </linearGradient>
        <radialGradient id={`${p}horizonGlow`} cx=".38" cy=".84" r=".5">
          <stop offset="0" stopColor="#f3c58c" stopOpacity=".45" />
          <stop offset="1" stopColor="#f3c58c" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${p}glass`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe6bd" />
          <stop offset=".6" stopColor="#f6bf78" />
          <stop offset="1" stopColor="#e39a52" />
        </linearGradient>
        <linearGradient id={`${p}glassUpper`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffeccb" />
          <stop offset="1" stopColor="#efab62" />
        </linearGradient>
        <linearGradient id={`${p}wood`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6d3f22" />
          <stop offset="1" stopColor="#8d5530" />
        </linearGradient>
        <linearGradient id={`${p}wallLit`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d8d1c4" />
          <stop offset="1" stopColor="#ebe6dc" />
        </linearGradient>
        <linearGradient id={`${p}ground`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c2a27" />
          <stop offset="1" stopColor="#0c1413" />
        </linearGradient>
        <linearGradient id={`${p}drive`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3a3a35" />
          <stop offset="1" stopColor="#1d1f1d" />
        </linearGradient>
        <radialGradient id={`${p}lamp`} cx=".5" cy=".5" r=".5">
          <stop offset="0" stopColor="#ffe2b0" stopOpacity=".95" />
          <stop offset=".25" stopColor="#ffcf8a" stopOpacity=".5" />
          <stop offset="1" stopColor="#ffcf8a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${p}spill`} cx=".5" cy="0" r=".7">
          <stop offset="0" stopColor="#f6bd77" stopOpacity=".45" />
          <stop offset="1" stopColor="#f6bd77" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect width="1600" height="1000" fill={`url(#${p}sky)`} />
      <rect width="1600" height="1000" fill={`url(#${p}horizonGlow)`} />
      <g fill="#f4ead8" opacity=".5">
        <circle cx="210" cy="90" r="1.4" /><circle cx="420" cy="160" r="1" /><circle cx="640" cy="70" r="1.2" />
        <circle cx="880" cy="130" r="1" /><circle cx="1120" cy="60" r="1.5" /><circle cx="1340" cy="150" r="1" />
        <circle cx="1500" cy="80" r="1.2" /><circle cx="760" cy="230" r=".9" /><circle cx="300" cy="260" r=".9" />
      </g>

      {/* Distant tree line */}
      <path
        fill="#22322f"
        opacity=".85"
        d="M0 780 C40 740 80 760 110 735 C150 700 190 745 230 728 C280 706 300 760 350 742 C400 720 430 752 470 740 C520 724 560 760 600 752 C640 744 680 770 720 760 L1600 770 L1600 830 L0 830 Z"
      />
      <path
        fill="#1a2725"
        d="M1440 790 C1470 720 1500 700 1530 690 C1560 700 1590 720 1600 735 L1600 830 L1440 830 Z"
      />

      {/* Ground */}
      <rect y="820" width="1600" height="180" fill={`url(#${p}ground)`} />

      {/* Light spilling onto the ground */}
      <ellipse cx="1120" cy="850" rx="380" ry="90" fill={`url(#${p}spill)`} />

      {/* ---- House ---- */}
      {/* Roof pergola fins */}
      <g fill="#ddd6ca">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect key={i} x={1180 + i * 30} y="346" width="6" height="34" />
        ))}
        <rect x="1170" y="342" width="250" height="6" />
      </g>

      {/* Roof slab */}
      <rect x="870" y="380" width="610" height="22" fill="#f1ece3" />
      <rect x="870" y="402" width="610" height="5" fill="#1d2321" opacity=".45" />

      {/* First floor: wood slat box */}
      <rect x="900" y="407" width="180" height="175" fill={`url(#${p}wood)`} />
      <path d={slats(900, 1080, 407, 582, 9)} stroke="#4f2d17" strokeWidth="2" />

      {/* First floor: glazing */}
      <rect x="1080" y="425" width="250" height="157" fill={`url(#${p}glassUpper)`} />
      <path d="M1163 425V582M1246 425V582M1080 470H1330" stroke="#3a3330" strokeWidth="4" />
      <rect x="1080" y="425" width="250" height="157" fill="none" stroke="#2f2a27" strokeWidth="5" />
      {/* interior hint: pendant + shelf */}
      <path d="M1205 470V500" stroke="#7a4b2a" strokeWidth="2" />
      <circle cx="1205" cy="504" r="7" fill="#fff4dc" />
      <rect x="1260" y="520" width="56" height="5" fill="#9b6338" opacity=".6" />

      {/* First floor: plastered wall + slot window */}
      <rect x="1330" y="407" width="120" height="175" fill={`url(#${p}wallLit)`} />
      <rect x="1372" y="440" width="22" height="118" fill={`url(#${p}glass)`} stroke="#2f2a27" strokeWidth="3" />

      {/* Balcony glass railing */}
      <rect x="1080" y="540" width="250" height="42" fill="#d6e7e3" opacity=".22" />
      <path d="M1080 540H1330" stroke="#efe9df" strokeWidth="3" />

      {/* Floor slab with cantilever */}
      <rect x="800" y="582" width="670" height="20" fill="#f3eee6" />
      <rect x="800" y="602" width="670" height="6" fill="#1b211f" opacity=".5" />
      {/* cove lights under slab */}
      {[860, 1000, 1140, 1280, 1410].map((x) => (
        <g key={x}>
          <ellipse cx={x} cy="618" rx="46" ry="22" fill={`url(#${p}lamp)`} />
          <circle cx={x} cy="608" r="2.6" fill="#fff6e0" />
        </g>
      ))}

      {/* Ground floor: entrance wall */}
      <rect x="850" y="608" width="140" height="182" fill={`url(#${p}wallLit)`} />
      <rect x="896" y="650" width="58" height="140" fill={`url(#${p}wood)`} />
      <path d={slats(896, 954, 650, 790, 7)} stroke="#4f2d17" strokeWidth="1.4" />
      <rect x="940" y="712" width="4" height="26" fill="#d9b77a" />

      {/* Ground floor: main glazing */}
      <rect x="990" y="622" width="260" height="168" fill={`url(#${p}glass)`} />
      <rect x="1018" y="742" width="120" height="34" rx="6" fill="#8e5530" opacity=".55" />
      <rect x="1180" y="700" width="5" height="76" fill="#6e4426" opacity=".6" />
      <ellipse cx="1182" cy="698" rx="16" ry="7" fill="#fff1d6" />
      <path d="M1055 622V790M1120 622V790M1185 622V790M990 664H1250" stroke="#3a3330" strokeWidth="4" />
      <rect x="990" y="622" width="260" height="168" fill="none" stroke="#2f2a27" strokeWidth="5" />

      {/* Ground floor: stone cladding */}
      <rect x="1250" y="608" width="180" height="182" fill="#77716a" />
      <path d={courses(1250, 1430, 608, 790, 13)} stroke="#605b55" strokeWidth="2" />
      <path d="M1280 621V634M1340 634V647M1300 647V660M1370 660V673M1290 673V686M1350 686V699M1310 699V712M1380 712V725M1295 725V738M1355 738V751M1320 751V764M1390 764V777" stroke="#605b55" strokeWidth="2" />

      {/* Plinth */}
      <rect x="820" y="790" width="640" height="14" fill="#a39d92" />

      {/* Compound wall + gate */}
      <rect x="690" y="772" width="310" height="66" fill="#26302d" />
      <rect x="1250" y="772" width="320" height="66" fill="#26302d" />
      <rect x="690" y="764" width="310" height="9" fill="#9a958c" />
      <rect x="1250" y="764" width="320" height="9" fill="#9a958c" />
      <rect x="1000" y="782" width="250" height="56" fill="#151c1a" />
      <path d={courses(1000, 1250, 782, 838, 8)} stroke="#34403c" strokeWidth="3" />
      <rect x="992" y="756" width="10" height="82" fill="#3a4441" />
      <rect x="1248" y="756" width="10" height="82" fill="#3a4441" />
      {/* gate lamps */}
      {[997, 1253].map((x) => (
        <g key={x}>
          <circle cx={x} cy="750" r="34" fill={`url(#${p}lamp)`} />
          <rect x={x - 5} y="744" width="10" height="12" fill="#fff0cf" />
        </g>
      ))}

      {/* Driveway */}
      <path d="M1000 838 L1250 838 L1420 1000 L840 1000 Z" fill={`url(#${p}drive)`} />
      <path d="M1000 838 L1250 838 L1420 1000 L840 1000 Z" fill={`url(#${p}spill)`} opacity=".6" />

      {/* Hedge along wall */}
      <g fill="#18291f">
        <ellipse cx="740" cy="838" rx="60" ry="18" />
        <ellipse cx="840" cy="840" rx="70" ry="16" />
        <ellipse cx="945" cy="840" rx="50" ry="15" />
        <ellipse cx="1310" cy="840" rx="60" ry="16" />
        <ellipse cx="1420" cy="840" rx="70" ry="17" />
        <ellipse cx="1530" cy="838" rx="60" ry="18" />
      </g>

      {/* Palm tree */}
      <path d="M752 836 C748 740 760 620 790 500 L800 502 C774 620 766 740 770 836 Z" fill="#2c231c" />
      <g fill="#1d3527">
        <path d="M795 500 C740 470 690 480 650 520 C700 495 745 495 795 510 Z" />
        <path d="M795 500 C760 440 720 420 670 425 C720 445 755 470 790 508 Z" />
        <path d="M795 500 C800 440 830 410 870 400 C840 430 820 465 802 508 Z" />
        <path d="M795 500 C850 470 900 480 940 515 C890 500 845 500 800 510 Z" />
        <path d="M795 500 C840 500 875 530 895 575 C860 540 830 525 798 512 Z" />
        <path d="M795 500 C760 510 735 540 722 585 C750 545 770 528 794 512 Z" />
      </g>

      {/* Right tree */}
      <rect x="1532" y="690" width="10" height="140" fill="#241d18" />
      <g fill="#1b2f24">
        <circle cx="1537" cy="660" r="58" />
        <circle cx="1490" cy="690" r="40" />
        <circle cx="1585" cy="690" r="44" />
      </g>
    </svg>
  );
}
