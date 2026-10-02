import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { BracketHeading } from "@/components/BracketHeading";
import { MenuGrid } from "@/components/MenuGrid";

export const metadata: Metadata = {
  title: "Menu",
  description: "Flame-grilled sandwiches, sides, and shakes — order any item straight to WhatsApp.",
};

export default function MenuPage() {
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
            The Menu
          </p>
          <h1 className="mt-2.5 text-[clamp(2.2rem,5vw,3.4rem)]">
            <BracketHeading>
              Off The Grill, <span className="text-accent">Onto The Road</span>
            </BracketHeading>
          </h1>
          <p className="mt-3 max-w-[56ch] text-fg-dim">
            Everything&apos;s cooked to order. Add what you&apos;re craving and check out straight
            to WhatsApp whenever you&apos;re ready.
          </p>
        </Reveal>
        <Reveal>
          <MenuGrid />
        </Reveal>
      </div>
    </section>
  );
}
