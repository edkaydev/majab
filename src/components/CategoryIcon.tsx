import type { CategoryKey } from "@/lib/menu";

export function CategoryIcon({ category, className = "" }: { category: CategoryKey; className?: string }) {
  switch (category) {
    case "grill":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <ellipse cx="24" cy="30" rx="16" ry="6" fill="currentColor" opacity="0.9" />
          <path
            d="M24 8c2 5-4 6-4 12a4 4 0 0 0 8 0c0-2-1.6-3-1.6-4.6 3 1.6 5 6 5 9a7.4 7.4 0 0 1-14.8 0C16.6 16 21 13 24 8z"
            fill="currentColor"
          />
        </svg>
      );
    case "classics":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M9 28L24 9l15 19z" fill="currentColor" />
          <rect x="7" y="28" width="34" height="5" rx="2.5" fill="currentColor" opacity="0.85" />
          <path d="M14 22h20" stroke="var(--color-cream)" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
        </svg>
      );
    case "sides":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <circle cx="17" cy="19" r="5" fill="currentColor" />
          <circle cx="24.5" cy="15" r="5.5" fill="currentColor" />
          <circle cx="32" cy="19" r="5" fill="currentColor" />
          <path d="M9 24h30l-3.4 13a5 5 0 0 1-4.9 3.8H17.3a5 5 0 0 1-4.9-3.8z" fill="currentColor" />
        </svg>
      );
    case "drinks":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M16 10h16l-2.4 26a3 3 0 0 1-3 2.7h-5.2a3 3 0 0 1-3-2.7z" fill="currentColor" opacity="0.85" />
          <rect x="14" y="7" width="20" height="4.5" rx="2.25" fill="currentColor" />
          <path d="M19 18l10 10M29 18l-10 10" stroke="var(--color-bg-raised)" strokeWidth="2" opacity="0.6" />
        </svg>
      );
  }
}
