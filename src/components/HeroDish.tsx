export function HeroDish() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      <div
        aria-hidden="true"
        className="absolute inset-[6%] rounded-full bg-accent/35 blur-3xl animate-[glow-pulse_5s_ease-in-out_infinite] motion-reduce:animate-none"
      />
      <div className="relative h-full w-full animate-[float-y_6s_ease-in-out_infinite] motion-reduce:animate-none">
        <svg viewBox="0 0 400 400" className="h-full w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]">
          <ellipse cx="200" cy="330" rx="150" ry="26" fill="rgba(0,0,0,0.4)" />
          <ellipse cx="200" cy="300" rx="170" ry="40" fill="var(--color-cream)" />
          <ellipse cx="200" cy="300" rx="150" ry="32" fill="none" stroke="rgba(28,23,18,0.15)" strokeWidth="2" />

          {/* bottom bun */}
          <ellipse cx="200" cy="268" rx="118" ry="26" fill="#d98a3f" />
          {/* lettuce */}
          <path
            d="M86 252c20 14 208 14 228 0l-8 16c-22 12-192 12-212 0z"
            fill="#7fae3f"
          />
          {/* patty */}
          <ellipse cx="200" cy="236" rx="112" ry="20" fill="#5a3a26" />
          {/* cheese drip */}
          <path
            d="M94 224h212c0 10-8 16-14 24-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0-6-8-10-8-16 0-6-8-8-14-8-24z"
            fill="#f2b23a"
          />
          {/* top bun */}
          <path
            d="M88 208c0-46 50-84 112-84s112 38 112 84z"
            fill="#e2964c"
          />
          <path
            d="M88 208c0-46 50-84 112-84s112 38 112 84"
            fill="none"
            stroke="#b8702c"
            strokeWidth="3"
            opacity="0.4"
          />
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 110 + i * 22 + (i % 2 === 0 ? 0 : 8);
            const y = 150 + (i % 3) * 18;
            return <ellipse key={i} cx={x} cy={y} rx="5" ry="3" fill="#fdf0d9" />;
          })}

          {/* steam */}
          {[150, 200, 250].map((x, i) => (
            <path
              key={x}
              d={`M${x} 90c-14 -18 14 -30 0 -48`}
              fill="none"
              stroke="var(--color-fg-dim)"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.4"
              className="animate-[glow-pulse_3.2s_ease-in-out_infinite] motion-reduce:animate-none"
              style={{ animationDelay: `${i * 420}ms`, transformOrigin: `${x}px 70px` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
