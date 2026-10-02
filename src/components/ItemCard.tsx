import { AddToCart } from "./AddToCart";
import type { MenuItem } from "@/lib/menu";

export function ItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-line bg-bg-raised p-5.5 transition-all hover:-translate-y-1 hover:border-accent-deep hover:shadow-[0_16px_36px_-18px_rgba(255,106,31,0.5)]">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="min-w-0 text-xl tracking-wide">{item.name}</h3>
        <span className="whitespace-nowrap font-semibold tabular-nums text-accent-soft">
          ${item.price}
        </span>
      </div>
      <p className="flex-1 text-sm text-fg-dim">{item.description}</p>
      <AddToCart name={item.name} price={item.price} />
    </article>
  );
}
