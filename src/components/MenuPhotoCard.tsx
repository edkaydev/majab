import { CategoryIcon } from "./CategoryIcon";
import { AddToCart } from "./AddToCart";
import type { MenuItem } from "@/lib/menu";
import { formatUGX } from "@/lib/currency";

export function MenuPhotoCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex flex-col gap-3.5 rounded-[22px] border border-line bg-bg-raised p-4 transition-all hover:-translate-y-1 hover:border-accent-deep hover:shadow-[0_18px_40px_-20px_rgba(255,106,31,0.55)]">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-bg-raised-2 to-bg text-accent-soft">
        <CategoryIcon
          category={item.category}
          className="h-16 w-16 opacity-80 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <span className="font-display text-base font-extrabold tabular-nums text-accent-soft">
          {formatUGX(item.price)}
        </span>
      </div>
      <p className="px-1 text-sm text-fg-dim">{item.description}</p>
      <div className="px-1 pb-1">
        <AddToCart name={item.name} price={item.price} />
      </div>
    </article>
  );
}
