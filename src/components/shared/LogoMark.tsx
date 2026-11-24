/** 색은 currentColor(바탕)와 --mark-cut(안쪽 획)으로 정한다. 모양을 바꾸면 src/app/icon.svg도 함께 바꾼다. */
export default function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={className}>
      <rect width="32" height="32" rx="7" fill="currentColor" />
      <g fill="var(--mark-cut, #fff)">
        <rect x="6" y="6" width="6" height="20" rx="1.5" />
        <path
          d="M9 7.5h5a8.5 8.5 0 0 1 0 17H9"
          fill="none"
          stroke="var(--mark-cut, #fff)"
          strokeWidth="3"
        />
        <circle cx="22.5" cy="16" r="4.5" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
}
