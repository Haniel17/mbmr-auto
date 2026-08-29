export default function MBMRLogo({ height = 40, className = "" }) {
  const scale = height / 80;
  const w = Math.round(265 * scale);
  const h = Math.round(80 * scale);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 265 80"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MBMR Auto"
      className={className}
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* MBMR - bold red italic */}
      <text
        x="0"
        y="52"
        fontFamily="'Outfit', 'Inter', -apple-system, sans-serif"
        fontSize="60"
        fontWeight="900"
        fontStyle="italic"
        fill="#ee2a2a"
        letterSpacing="-2"
      >
        MBMR
      </text>

      {/* Red racing stripe — long bar */}
      <rect
        x="0"
        y="62"
        width="148"
        height="9"
        rx="2"
        fill="#ee2a2a"
        transform="skewX(-14)"
      />

      {/* Red accent dash */}
      <rect
        x="158"
        y="62"
        width="10"
        height="9"
        rx="1.5"
        fill="#ee2a2a"
        transform="skewX(-14)"
      />

      {/* AUTO — silver/light gray italic */}
      <text
        x="176"
        y="74"
        fontFamily="'Outfit', 'Inter', -apple-system, sans-serif"
        fontSize="22"
        fontWeight="800"
        fontStyle="italic"
        fill="#c8d0dc"
        letterSpacing="2"
      >
        AUTO
      </text>
    </svg>
  );
}
