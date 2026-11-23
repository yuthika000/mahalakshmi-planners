// Line icons (24px grid, 1.6 stroke) for services and highlights.
const paths = {
  'building-plan': (
    <>
      <path d="M4 20V9l8-5 8 5v11z" />
      <path d="M9 20v-6h6v6" />
      <path d="M15 4.5 19 2" />
    </>
  ),
  dtcp: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 8h8M8 12h5" />
      <circle cx="15.5" cy="16" r="2.5" />
      <path d="m14.4 16 .8.8 1.4-1.6" />
    </>
  ),
  '2d': (
    <>
      <rect x="3" y="4" width="18" height="16" />
      <path d="M3 12h8v8M11 4v5M15 12h6M15 12v3" />
    </>
  ),
  elevation: (
    <>
      <path d="M3 20h18" />
      <path d="M5 20v-8h14v8" />
      <path d="M4 12 12 6l8 6" />
      <path d="M8 15h2v2H8zM14 15h2v2h-2z" />
    </>
  ),
  estimate: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <rect x="8" y="6" width="8" height="3" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  'bank-loan': (
    <>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 9v8M9.5 9v8M14.5 9v8M19 9v8" />
      <path d="M3 20h18" />
    </>
  ),
  vastu: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 5.5 14 12l-2 6.5L10 12z" />
      <path d="M12 2v1.5M12 20.5V22M2 12h1.5M20.5 12H22" />
    </>
  ),
  'site-measurement': (
    <>
      <path d="M3 17 17 3l4 4L7 21z" />
      <path d="m7 13 2 2M10 10l2 2M13 7l2 2" />
    </>
  ),
  regularisation: (
    <>
      <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
      <path d="M14 3v5h5" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
  consultancy: (
    <>
      <path d="M4 5h12v8H9l-4 3v-3H4z" />
      <path d="M16 9h4v7h-1v3l-3-3h-5v-1" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m9.5 9 1.8 1.8L14.8 7.3" />
      <path d="M8.5 14 7 21l5-2.5 5 2.5-1.5-7" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.4" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="7.5" r="3.5" />
      <path d="M5 20.5a7 7 0 0 1 14 0" />
    </>
  ),
  bank: (
    <>
      <path d="M3 9 12 4l9 5" />
      <path d="M5 9v8M9.5 9v8M14.5 9v8M19 9v8" />
      <path d="M3 20h18" />
    </>
  ),
};

export default function ServiceIcon({ name, size = 26 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
