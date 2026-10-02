type Kind = "instagram" | "facebook" | "x" | "tiktok";

const PATHS: Record<Kind, React.ReactNode> = {
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.3" cy="7.7" r="1" />
    </>
  ),
  facebook: <path d="M14 8.5h2V5h-2a4 4 0 0 0-4 4v2H8v3.5h2V19h3.5v-4.5H16l.5-3.5h-3V9a.5.5 0 0 1 .5-.5z" />,
  x: <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />,
  tiktok: (
    <path d="M14 4v9.5a2.5 2.5 0 1 1-2.5-2.5h.3V8.7h-.3a4.8 4.8 0 1 0 4.8 4.8V9.2a5.6 5.6 0 0 0 3.2 1V7.8a3.6 3.6 0 0 1-2.9-2.1 3.6 3.6 0 0 1-.3-1.7z" />
  ),
};

export function SocialIcon({ kind }: { kind: Kind }) {
  return (
    <a
      href="#"
      aria-label={kind}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-ink transition-transform hover:scale-110"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        {PATHS[kind]}
      </svg>
    </a>
  );
}
