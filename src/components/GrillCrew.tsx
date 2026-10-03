import Link from "next/link";
import { BracketHeading } from "./BracketHeading";
import { FlameIcon } from "./FlameIcon";

export function GrillCrew() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1180px] px-5">
        <h2 className="mb-10 text-center text-[clamp(2rem,4.5vw,2.8rem)]">
          <BracketHeading>
            Meet The <span className="text-accent">Grill Crew</span>
          </BracketHeading>
        </h2>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.8fr_1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[320px]">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-28 w-28 animate-[float-y_7s_ease-in-out_infinite] rounded-3xl bg-gradient-to-br from-accent-soft to-accent opacity-80 blur-sm motion-reduce:animate-none"
            />
            <div className="relative flex h-full w-full items-center justify-center rounded-[32px] border border-line bg-bg-raised shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]">
              <FlameIcon className="h-20 w-20 text-accent" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-lg italic text-fg-dim">
              <strong className="not-italic text-fg">Majab&apos;s Deli</strong> started as a single
              grill at the junction — now it&apos;s the stop drivers plan their route around.
            </p>
            <p className="text-fg-dim">
              The crew brings years on the grates and a love for flame-first cooking to every
              order, whether you&apos;re right at Nkozi TC or out past Kayabwe. No pretense — just
              the good stuff, done properly, every single time.
            </p>
            <Link
              href="/find-us"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 hover:border-accent-soft hover:text-accent-soft"
            >
              Find Us At The Junction
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
