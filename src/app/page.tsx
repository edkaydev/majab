import Link from "next/link";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { HeroDish } from "@/components/HeroDish";
import { AvatarStack } from "@/components/AvatarStack";
import { PromoBanner } from "@/components/PromoBanner";
import { BestDelivered } from "@/components/BestDelivered";
import { MenuPhotoCard } from "@/components/MenuPhotoCard";
import { Testimonials } from "@/components/Testimonials";
import { GrillCrew } from "@/components/GrillCrew";
import { BracketHeading } from "@/components/BracketHeading";
import { menu } from "@/lib/menu";
import { waLink, GENERAL_TEXT } from "@/lib/whatsapp";

const featuredMenu = menu.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[-10%] -top-[25%] -z-10 h-[600px]"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(255,106,31,0.25), transparent 60%)",
          }}
        />
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
          <div>
            <Reveal>
              <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
                No cap, Nkozi&apos;s most bussin grill
              </p>
              <h1 className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[clamp(2.6rem,6.4vw,4.6rem)] font-extrabold leading-[1.04]">
                <span>Experience the</span>
                <span className="relative inline-flex items-center gap-2 text-accent">
                  Flavor
                  <svg
                    viewBox="0 0 120 14"
                    className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M2 10c30-8 86-8 116 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="translate-y-1">
                  <AvatarStack initials={["JM", "AR", "PD"]} size={34} />
                </span>
                <span>of the Highway</span>
              </h1>
            </Reveal>

            <Reveal className="mt-6 max-w-[48ch]">
              <p className="text-lg text-fg-dim">
                From flame-grilled classics to loaded sides, every plate is cooked fresh the
                moment you order and sent straight to your door.
              </p>
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/menu"
                className="inline-flex items-center gap-3 rounded-full bg-accent py-2.5 pl-2.5 pr-6 font-bold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(255,106,31,0.65)] active:translate-y-0 active:scale-[0.98]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/15">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                See The Menu
              </Link>
              <a
                href={waLink(GENERAL_TEXT)}
                target="_blank"
                rel="noopener"
                className="rounded-full border border-line px-6 py-3.5 font-bold text-fg-dim transition-all hover:-translate-y-0.5 hover:border-accent-soft hover:text-accent-soft"
              >
                Order on WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal>
            <HeroDish />
          </Reveal>
        </div>
      </section>

      <div className="relative z-10 -mt-6 mb-10">
        <PromoBanner />
      </div>

      <Marquee />

      <BestDelivered />

      <section className="py-20">
        <div className="mx-auto max-w-[1180px] px-5">
          <Reveal className="mb-9 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(2rem,4.5vw,2.8rem)]">
              <BracketHeading>
                Picked Fresh <span className="text-accent">For You</span>
              </BracketHeading>
            </h2>
            <Link href="/menu" className="text-sm font-bold text-accent hover:text-accent-soft">
              View full menu →
            </Link>
          </Reveal>
          <Reveal className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
            {featuredMenu.map((item) => (
              <MenuPhotoCard key={item.name} item={item} />
            ))}
          </Reveal>
        </div>
      </section>

      <Testimonials />

      <GrillCrew />
    </>
  );
}
