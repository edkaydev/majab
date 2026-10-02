import type { ReactNode } from "react";

function CornerGlyph({ mirror = false }: { mirror?: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`text-accent ${mirror ? "scale-x-[-1]" : ""}`}
    >
      <path
        d="M17 4v6a3 3 0 0 1-3 3H3"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BracketHeading({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3">
      <CornerGlyph />
      <span>{children}</span>
      <CornerGlyph mirror />
    </span>
  );
}
