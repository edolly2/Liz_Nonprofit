export function ButterflyMark({ size = 46 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30.5 30C25 13 13 7 8 11c-5 4-2 18 7 25 5 4 10 4 15.5-1V30Z" fill="currentColor" />
      <path d="M33.5 30C39 13 51 7 56 11c5 4 2 18-7 25-5 4-10 4-15.5-1V30Z" fill="currentColor" />
      <path d="M30 37c-7 0-13 5-14 11-1 5 4 7 9 4 4-2 6-7 7-13l-2-2Z" fill="currentColor" />
      <path d="M34 37c7 0 13 5 14 11 1 5-4 7-9 4-4-2-6-7-7-13l2-2Z" fill="currentColor" />
      <rect x="30" y="22" width="4" height="26" rx="2" fill="currentColor" />
      <path d="M31 23c-2-6-6-8-9-9M33 23c2-6 6-8 9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="23" cy="18" r="2" fill="white" />
      <circle cx="41" cy="18" r="2" fill="white" />
      <circle cx="18" cy="28" r="2.5" fill="white" />
      <circle cx="46" cy="28" r="2.5" fill="white" />
    </svg>
  );
}
