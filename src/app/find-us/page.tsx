import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Us",
  description: "Hours, address, and directions to Majab's Deli at Junction 4, Expressway Road.",
};

const hours = [
  { days: "Monday – Thursday", time: "10:00 – 22:00" },
  { days: "Friday – Saturday", time: "10:00 – 23:30" },
  { days: "Sunday", time: "11:00 – 21:00" },
];

const ADDRESS = "Junction 4, Expressway Road, Roadside Market District";

export default function FindUsPage() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
            Find Us
          </p>
          <h1 className="mt-2.5 text-[clamp(2.2rem,5vw,3.4rem)]">Open Every Day</h1>
          <div className="mt-7 flex flex-col border-t border-line">
            {hours.map((row) => (
              <div
                key={row.days}
                className="flex justify-between border-b border-line py-3 text-[0.95rem]"
              >
                <span>{row.days}</span>
                <span className="tabular-nums text-fg-dim">{row.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col gap-3.5 overflow-hidden rounded-[20px] border border-line bg-bg-raised p-7.5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 23px, var(--color-line) 23px, var(--color-line) 24px), repeating-linear-gradient(90deg, transparent, transparent 23px, var(--color-line) 23px, var(--color-line) 24px)",
            }}
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="relative z-10 h-7.5 w-7.5 text-accent"
          >
            <path
              d="M12 21s7-7.1 7-12a7 7 0 0 0-14 0c0 4.9 7 12 7 12z"
              fill="currentColor"
            />
            <circle cx="12" cy="9" r="2.4" fill="var(--color-bg-raised)" />
          </svg>
          <address className="relative z-10 text-[1.05rem] not-italic leading-relaxed">
            {ADDRESS}
          </address>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
            target="_blank"
            rel="noopener"
            className="relative z-10 mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-line px-6.5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.75 hover:border-accent-soft hover:text-accent-soft"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
