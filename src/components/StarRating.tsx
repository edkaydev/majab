function Star() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6.4 6.9.7-5.2 4.8 1.5 6.9-6.1-3.6-6.1 3.6 1.5-6.9-5.2-4.8 6.9-.7z" />
    </svg>
  );
}

export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-accent" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? "opacity-100" : "opacity-20"}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <Star />
        </span>
      ))}
    </div>
  );
}
