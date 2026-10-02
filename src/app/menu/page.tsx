import type { Metadata } from "next";
import { MenuGrid } from "@/components/MenuGrid";

export const metadata: Metadata = {
  title: "Menu",
  description: "Flame-grilled sandwiches, sides, and shakes — order any item straight to WhatsApp.",
};

export default function MenuPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="mb-8.5">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
            The Menu
          </p>
          <h1 className="mt-2.5 text-[clamp(2.2rem,5vw,3.4rem)]">Off The Grill, Onto The Road</h1>
        </div>
        <MenuGrid />
      </div>
    </section>
  );
}
