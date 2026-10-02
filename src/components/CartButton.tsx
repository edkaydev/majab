"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";
import { cartCount } from "@/lib/cart";

export function CartButton() {
  const { lines } = useCart();
  const count = cartCount(lines);

  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-accent-soft hover:text-accent-soft"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="20" r="1.4" fill="currentColor" />
        <circle cx="18" cy="20" r="1.4" fill="currentColor" />
        <path
          d="M3 4h2l2.4 12.2A2 2 0 0 0 9.4 18h8.2a2 2 0 0 0 2-1.6L21 8H6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4.5 min-w-[18px] animate-[pop-in_0.3s_ease-out] items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-ink">
          {count}
        </span>
      )}
    </Link>
  );
}
