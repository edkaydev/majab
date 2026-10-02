import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { BracketHeading } from "@/components/BracketHeading";
import { waLink, DELIVERY_TEXT, PICKUP_TEXT } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Order",
  description: "Order Majab's Deli for delivery or pickup — straight to WhatsApp, no app required.",
};

function TruckIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
      <rect x="4" y="16" width="24" height="16" rx="2" fill="currentColor" />
      <path d="M28 21h9l7 7v4h-16z" fill="currentColor" opacity="0.85" />
      <circle cx="14" cy="34" r="4" fill="var(--color-bg-raised)" stroke="currentColor" strokeWidth="3" />
      <circle cx="36" cy="34" r="4" fill="var(--color-bg-raised)" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden="true">
      <path d="M24 44s14-14.2 14-24a14 14 0 0 0-28 0c0 9.8 14 24 14 24z" fill="currentColor" />
      <circle cx="24" cy="19" r="5" fill="var(--color-bg-raised)" />
    </svg>
  );
}

export default function OrderPage() {
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
            Order
          </p>
          <h1 className="mt-2.5 text-[clamp(2.2rem,5vw,3.4rem)]">
            <BracketHeading>
              Delivery, <span className="text-accent">Or Pull In</span>
            </BracketHeading>
          </h1>
          <p className="mt-3 max-w-[56ch] text-fg-dim">
            No app, no account — just WhatsApp. Tap a button, tell us what you&apos;re craving, and
            we&apos;ll confirm the time.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[26px] border border-line bg-bg-raised p-8.5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] transition-all hover:-translate-y-1.5 hover:border-accent-deep">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="relative flex flex-col gap-3.5">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-deep text-ink shadow-[0_16px_30px_-10px_rgba(255,106,31,0.6)]">
                <TruckIcon />
              </div>
              <h2 className="text-[1.9rem]">Delivery</h2>
              <p className="max-w-[40ch] text-fg-dim">
                We&apos;ll send it hot to your door. Message your order and address and we&apos;ll
                confirm the time and delivery fee.
              </p>
              <a
                href={waLink(DELIVERY_TEXT)}
                target="_blank"
                rel="noopener"
                className="mt-2.5 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6.5 py-3.5 text-sm font-bold text-ink transition-all hover:-translate-y-0.75 hover:shadow-[0_14px_30px_-10px_rgba(255,106,31,0.65)]"
              >
                Order for Delivery
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[26px] border border-line bg-bg-raised p-8.5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] transition-all hover:-translate-y-1.5 hover:border-accent-deep">
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="relative flex flex-col gap-3.5">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-deep text-ink shadow-[0_16px_30px_-10px_rgba(255,106,31,0.6)]">
                <PinIcon />
              </div>
              <h2 className="text-[1.9rem]">Pickup</h2>
              <p className="max-w-[40ch] text-fg-dim">
                Pull over at the junction — your order will be grill-fresh and waiting at the
                counter, no wait in line.
              </p>
              <a
                href={waLink(PICKUP_TEXT)}
                target="_blank"
                rel="noopener"
                className="mt-2.5 inline-flex w-fit items-center gap-2 rounded-full border border-line px-6.5 py-3.5 text-sm font-bold transition-all hover:-translate-y-0.75 hover:border-accent-soft hover:text-accent-soft"
              >
                Order for Pickup
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-9 text-center">
          <p className="text-sm text-fg-dim">
            Ordering more than one thing?{" "}
            <Link href="/menu" className="font-bold text-accent hover:text-accent-soft">
              Build it in the menu
            </Link>{" "}
            and check out your whole cart at once.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
