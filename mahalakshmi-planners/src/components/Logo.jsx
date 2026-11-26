// House-and-lotus mark (vector version of the Mahalakshmi Planners logo).
// Outer roof + chimney use the text colour (cream on dark, ink on light);
// the inner house and lotus use --logo-accent (brass).
export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="logo-mark">
      <g fill="currentColor" stroke="currentColor">
        <path d="M2.5 22 24 4l21.5 18" fill="none" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32.5 11V5.5h5V15z" stroke="none" />
      </g>
      <g fill="none" stroke="var(--logo-accent)" strokeLinejoin="round" strokeLinecap="round">
        <path d="M39 43.5H9V21.5L24 9.5l15 12V31" strokeWidth="2.6" />
        <path d="M24 18.5c3.4 3.2 4.3 8.6 0 14-4.3-5.4-3.4-10.8 0-14z" strokeWidth="1.7" fill="currentColor" />
        <path d="M23 33c-4.8-.6-8.2-4-8.6-9 4.6.8 7.6 4.2 8.6 9zM25 33c4.8-.6 8.2-4 8.6-9-4.6.8-7.6 4.2-8.6 9z" strokeWidth="1.9" />
        <path d="M15.6 27.5a9 9 0 1 0 16.8 0" strokeWidth="2" />
      </g>
    </svg>
  );
}
