const PALETTE = ["#ff6a1f", "#9c3a0e", "#ffb37a", "#c2501a"];

export function AvatarStack({
  initials,
  size = 32,
}: {
  initials: string[];
  size?: number;
}) {
  return (
    <div className="flex items-center" style={{ paddingRight: size / 2 }}>
      {initials.map((letters, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded-full border-2 border-bg font-display text-xs font-bold text-ink"
          style={{
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -size / 2.6,
            background: PALETTE[i % PALETTE.length],
            zIndex: initials.length - i,
          }}
        >
          {letters}
        </div>
      ))}
    </div>
  );
}
