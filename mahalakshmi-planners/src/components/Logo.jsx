// House-and-tower mark. Colours come from CSS (currentColor + --logo-accent).
// To use the original logo instead, put logo.png in /public and swap this for <img src="./logo.png" />.
export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="logo-mark">
      <path d="M27 5h9v17" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M31.5 5v17M36 9.5h-9M36 13.5h-9M36 17.5h-9" stroke="currentColor" strokeWidth="1" />
      <path d="M5 27 22 12l17 15" fill="none" stroke="var(--logo-accent)" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M11 24v16h22V24" fill="none" stroke="var(--logo-accent)" strokeWidth="2.6" />
      <rect x="18.5" y="28" width="7" height="7" fill="var(--logo-accent)" />
    </svg>
  );
}
