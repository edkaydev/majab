"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { cartSubtotal } from "@/lib/cart";
import { buildCartMessage, waLink } from "@/lib/whatsapp";
import { menu } from "@/lib/menu";

const DELIVERY_FEE = 5;
const PROMO_CODE = "ROADSIDE10";
const PROMO_RATE = 0.1;

function categoryFor(name: string) {
  return menu.find((item) => item.name === name)?.category;
}

export function CartView() {
  const { lines, setQty, remove, clear } = useCart();
  const [mode, setMode] = useState<"delivery" | "pickup">("pickup");
  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState(false);

  const subtotal = cartSubtotal(lines);
  const discount = appliedPromo ? subtotal * PROMO_RATE : 0;
  const deliveryFee = mode === "delivery" && lines.length ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee - discount;

  function applyPromo(e: React.FormEvent) {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === PROMO_CODE) {
      setAppliedPromo(PROMO_CODE);
      setPromoError(false);
    } else {
      setAppliedPromo(null);
      setPromoError(true);
      setTimeout(() => setPromoError(false), 1600);
    }
  }

  const checkoutHref = waLink(
    buildCartMessage(lines, mode, {
      promoCode: appliedPromo ?? undefined,
      discount,
      deliveryFee,
    })
  );

  if (lines.length === 0) {
    return (
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-5 px-5 py-24 text-center">
        <h1 className="text-[clamp(2rem,4.5vw,2.8rem)]">Your cart is empty</h1>
        <p className="max-w-[44ch] text-fg-dim">
          Add something off the grill and it&apos;ll show up here, ready to send straight to
          WhatsApp.
        </p>
        <Link
          href="/menu"
          className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
        >
          Browse The Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr]">
      <div>
        <div className="mb-7 flex items-center justify-between">
          <h1 className="text-[clamp(2rem,4.5vw,2.8rem)]">Cart</h1>
          <button
            type="button"
            onClick={clear}
            className="text-sm font-semibold text-fg-dim hover:text-accent-soft"
          >
            Clear cart
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {lines.map((line) => (
            <div
              key={line.name}
              className="flex items-center gap-4 rounded-2xl border border-line bg-bg-raised p-4"
            >
              <div className="flex-1">
                <p className="font-bold">{line.name}</p>
                <p className="text-xs uppercase tracking-wide text-fg-dim">
                  {categoryFor(line.name) ?? "item"}
                </p>
              </div>
              <span className="font-display font-extrabold tabular-nums text-accent-soft">
                ${(line.price * line.qty).toFixed(2)}
              </span>
              <div className="flex items-center gap-2 rounded-xl border border-line px-1.5 py-1">
                <button
                  type="button"
                  onClick={() => setQty(line.name, line.qty - 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-accent transition-transform active:scale-90"
                  aria-label={`Remove one ${line.name}`}
                >
                  −
                </button>
                <span className="min-w-[1.5ch] text-center text-sm font-bold tabular-nums">
                  {line.qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty(line.name, line.qty + 1)}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-accent transition-transform active:scale-90"
                  aria-label={`Add one more ${line.name}`}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => remove(line.name)}
                aria-label={`Remove ${line.name} from cart`}
                className="text-fg-dim transition-colors hover:text-accent-soft"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-5 self-start rounded-[22px] border border-line bg-bg-raised p-6">
        <div className="flex gap-2 rounded-full border border-line p-1">
          <button
            type="button"
            onClick={() => setMode("pickup")}
            className={`flex-1 rounded-full py-2 text-sm font-bold transition-colors ${
              mode === "pickup" ? "bg-accent text-ink" : "text-fg-dim"
            }`}
          >
            Pickup
          </button>
          <button
            type="button"
            onClick={() => setMode("delivery")}
            className={`flex-1 rounded-full py-2 text-sm font-bold transition-colors ${
              mode === "delivery" ? "bg-accent text-ink" : "text-fg-dim"
            }`}
          >
            Delivery
          </button>
        </div>

        <form onSubmit={applyPromo} className="flex flex-col gap-1.5">
          <div
            className={`flex items-center gap-2 rounded-full border px-4 py-2 transition-colors ${
              appliedPromo
                ? "border-accent bg-accent/10"
                : promoError
                  ? "border-red-400"
                  : "border-line"
            }`}
          >
            <input
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value)}
              placeholder="Promo code"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-fg-dim"
            />
            <button type="submit" className="text-sm font-bold text-accent hover:text-accent-soft">
              Apply
            </button>
          </div>
          <p className="px-1 text-xs text-fg-dim">
            {appliedPromo
              ? `${appliedPromo} applied — 10% off.`
              : `Demo code: try "${PROMO_CODE}" for 10% off.`}
          </p>
        </form>

        <div className="flex flex-col gap-2 border-t border-line pt-4 text-sm">
          <div className="flex justify-between text-fg-dim">
            <span>Subtotal</span>
            <span className="tabular-nums">${subtotal.toFixed(2)}</span>
          </div>
          {mode === "delivery" && (
            <div className="flex justify-between text-fg-dim">
              <span>Delivery fee</span>
              <span className="tabular-nums">${deliveryFee.toFixed(2)}</span>
            </div>
          )}
          {appliedPromo && (
            <div className="flex justify-between text-accent-soft">
              <span>Promo ({appliedPromo})</span>
              <span className="tabular-nums">-${discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between border-t border-line pt-2 text-base font-bold">
            <span>Total</span>
            <span className="tabular-nums">${total.toFixed(2)}</span>
          </div>
        </div>

        <a
          href={checkoutHref}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-accent py-3.5 text-center font-bold text-ink transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
        >
          Checkout via WhatsApp
        </a>
        <p className="text-center text-xs text-fg-dim">
          Sends your order to WhatsApp — we&apos;ll confirm the total there.
        </p>
      </div>
    </div>
  );
}
