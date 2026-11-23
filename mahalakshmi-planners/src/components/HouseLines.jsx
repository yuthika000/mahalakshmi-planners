// The same house as a front-elevation line drawing, with dimension marks.
export default function HouseLines({ className = '', viewBox = '760 300 760 560', align = 'xMidYMid meet', paper = false }) {
  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio={align} fill="none" aria-hidden="true">
      {paper && (
        <g>
          <rect x="0" y="0" width="1600" height="1000" fill="#f6f2ea" />
          <g stroke="#e3dbcc" strokeWidth="1">
            {Array.from({ length: 41 }, (_, i) => <path key={'v' + i} d={`M${i * 40} 0V1000`} />)}
            {Array.from({ length: 26 }, (_, i) => <path key={'h' + i} d={`M0 ${i * 40}H1600`} />)}
          </g>
          <path d="M600 838H1600" stroke="#1f3a34" strokeWidth="1.5" />
        </g>
      )}
      <g className="hl-main">
        <path d="M870 380H1480V402H870Z" />
        <path d="M1170 342H1420M1180 348V380M1210 348V380M1240 348V380M1270 348V380M1300 348V380M1330 348V380M1360 348V380M1390 348V380" />
        <path d="M900 402V582M1080 402V582M1330 402V582M1450 402V582" />
        <path d="M1080 425H1330V582M1163 425V582M1246 425V582M1080 470H1330" />
        <path d="M1372 440H1394V558H1372Z" />
        <path d="M800 582H1470V602H800Z" />
        <path d="M850 602V790M990 602V790M1250 602V790M1430 602V790" />
        <path d="M896 650H954V790M896 650V790" />
        <path d="M990 622H1250M1055 622V790M1120 622V790M1185 622V790M990 664H1250" />
        <path d="M820 790H1460V804H820Z" />
      </g>
      <g className="hl-fine">
        <path d="M1080 540H1330" />
        <path d="M1250 621H1430M1250 647H1430M1250 673H1430M1250 699H1430M1250 725H1430M1250 751H1430M1250 777H1430" />
        <path d="M909 402V582M918 402V582M927 402V582M936 402V582M945 402V582M954 402V582M963 402V582M972 402V582M981 402V582M990 402V582M999 402V582M1008 402V582M1017 402V582M1026 402V582M1035 402V582M1044 402V582M1053 402V582M1062 402V582M1071 402V582" />
      </g>
      <g className="hl-dim">
        <path d="M800 840H1470M800 832V848M1470 832V848" />
        <path d="M1505 380V804M1497 380H1513M1497 804H1513" />
        <path d="M1497 592H1513" />
      </g>
    </svg>
  );
}
