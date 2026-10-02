import { AvatarStack } from "./AvatarStack";
import { CountUp } from "./CountUp";
import { FlameIcon } from "./FlameIcon";

export function PromoBanner() {
  return (
    <div className="relative mx-auto max-w-[920px] px-5">
      <div className="relative overflow-visible rounded-[32px] bg-cream px-7 py-8 text-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] sm:px-10">
        <div
          aria-hidden="true"
          className="absolute -top-4 left-14 h-8 w-8 rounded-full bg-bg sm:left-20"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-4 left-14 h-8 w-8 rounded-full bg-bg sm:left-20"
        />

        <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <p className="max-w-[26ch] text-xl font-extrabold leading-snug font-display">
              Great food and real roadside prices
            </p>
            <div className="flex items-center gap-3">
              <AvatarStack initials={["JM", "AR", "PD"]} />
              <span className="flex h-8 items-center rounded-full bg-accent px-2.5 text-xs font-bold text-ink">
                40+
              </span>
              <span className="text-sm text-ink/70">regulars already hooked</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="text-center">
              <p className="font-display text-5xl font-extrabold text-accent-deep sm:text-6xl">
                <CountUp to={50} suffix="%" />
              </p>
              <p className="text-sm font-semibold text-ink/70">off your first order</p>
            </div>
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-ink shadow-[0_14px_30px_-8px_rgba(255,106,31,0.7)] sm:h-20 sm:w-20">
              <FlameIcon className="h-8 w-8 sm:h-9 sm:w-9" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-fg-dim">
        Sample launch offer — swap for a real promo, or remove.
      </p>
    </div>
  );
}
