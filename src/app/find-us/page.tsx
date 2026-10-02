import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BracketHeading } from "@/components/BracketHeading";

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
    <section className="relative overflow-hidden py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10%] -top-[30%] -z-10 h-[500px]"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(255,106,31,0.2), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-[1180px] px-5">
        <Reveal className="mb-10">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
            Find Us
          </p>
          <h1 className="mt-2.5 text-[clamp(2.2rem,5vw,3.4rem)]">
            <BracketHeading>
              Open <span className="text-accent">Every Day</span>
            </BracketHeading>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal>
            <div className="flex flex-col border-t border-line">
              {hours.map((row) => (
                <div
                  key={row.days}
                  className="flex justify-between border-b border-line py-4 text-[0.95rem] transition-colors hover:bg-bg-raised/60"
                >
                  <span className="font-semibold">{row.days}</span>
                  <span className="tabular-nums text-fg-dim">{row.time}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-fg-dim">
              Hungry already?{" "}
              <Link href="/order" className="font-bold text-accent hover:text-accent-soft">
                Order ahead
              </Link>{" "}
              and skip the wait.
            </p>
          </Reveal>

          <Reveal>
            <div className="group relative flex flex-col gap-4 overflow-hidden rounded-[26px] border border-line bg-bg-raised p-8 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 23px, var(--color-line) 23px, var(--color-line) 24px), repeating-linear-gradient(90deg, transparent, transparent 23px, var(--color-line) 23px, var(--color-line) 24px)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-deep text-ink shadow-[0_16px_30px_-10px_rgba(255,106,31,0.6)]">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-8 w-8">
                  <path d="M12 21s7-7.1 7-12a7 7 0 0 0-14 0c0 4.9 7 12 7 12z" fill="currentColor" />
                  <circle cx="12" cy="9" r="2.4" fill="var(--color-bg-raised)" />
                </svg>
              </div>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
