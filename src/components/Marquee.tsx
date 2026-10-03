const WORDS = [
  "FLAME GRILLED",
  "ACTUALLY BUSSIN",
  "FRESH DAILY",
  "OPEN LATE",
  "WHATSAPP ORDERS",
  "ZERO CRUMBS LEFT",
  "EST. AT NKOZI",
];

export function Marquee() {
  const loop = [...WORDS, ...WORDS];

  return (
    <div className="group overflow-hidden whitespace-nowrap border-y border-line bg-bg-raised py-3.5">
      <div className="inline-flex animate-[scroll-left_26s_linear_infinite] font-display text-lg tracking-wider motion-reduce:animate-none group-hover:[animation-play-state:paused]">
        {loop.map((word, i) => (
          <span key={i} className="flex items-center px-3.5">
            <span className="text-fg-dim">{word}</span>
            <span className="pl-3.5 text-accent">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
