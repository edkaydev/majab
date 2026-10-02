import type { Metadata } from "next";
import { waLink, DELIVERY_TEXT, PICKUP_TEXT } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Order",
  description: "Order Majab's Deli for delivery or pickup — straight to WhatsApp, no app required.",
};

export default function OrderPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1180px] px-5">
        <div className="mb-8.5">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">
            Order
          </p>
          <h1 className="mt-2.5 text-[clamp(2.2rem,5vw,3.4rem)]">Delivery, Or Pull In</h1>
          <p className="mt-3 max-w-[56ch] text-fg-dim">
            No app, no account — just WhatsApp. Tap a button, tell us what you&apos;re craving, and
            we&apos;ll confirm the time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-3.5 rounded-[22px] border border-line bg-bg-raised p-8.5">
            <h2 className="text-[1.9rem]">Delivery</h2>
            <p className="max-w-[40ch] text-fg-dim">
              We&apos;ll send it hot to your door. Message your order and address and we&apos;ll
              confirm the time and delivery fee.
            </p>
            <a
              href={waLink(DELIVERY_TEXT)}
              target="_blank"
              rel="noopener"
              className="mt-2.5 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6.5 py-3.5 text-sm font-bold text-[#1a0d05] transition-all hover:-translate-y-0.75 hover:shadow-[0_14px_30px_-10px_rgba(255,106,31,0.65)]"
            >
              Order for Delivery
            </a>
          </div>
          <div className="flex flex-col gap-3.5 rounded-[22px] border border-line bg-bg-raised p-8.5">
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
      </div>
    </section>
  );
}
