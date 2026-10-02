"use client";

import { useCart } from "./CartProvider";

function MinusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function AddToCart({ name, price }: { name: string; price: number }) {
  const { lines, add, setQty } = useCart();
  const line = lines.find((l) => l.name === name);
  const qty = line?.qty ?? 0;

  if (qty === 0) {
    return (
      <button
        type="button"
        onClick={() => add(name, price)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-accent transition-all hover:border-accent hover:bg-accent hover:text-ink active:scale-90"
        aria-label={`Add ${name} to cart`}
      >
        <PlusIcon />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2 rounded-xl border border-accent bg-accent/10 px-1.5 py-1">
      <button
        type="button"
        onClick={() => setQty(name, qty - 1)}
        className="flex h-7 w-7 items-center justify-center rounded-lg text-accent transition-transform active:scale-90"
        aria-label={`Remove one ${name}`}
      >
        <MinusIcon />
      </button>
      <span className="min-w-[1.5ch] text-center text-sm font-bold tabular-nums">{qty}</span>
      <button
        type="button"
        onClick={() => setQty(name, qty + 1)}
        className="flex h-7 w-7 items-center justify-center rounded-lg text-accent transition-transform active:scale-90"
        aria-label={`Add one more ${name}`}
      >
        <PlusIcon />
      </button>
    </div>
  );
}
