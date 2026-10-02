"use client";

import { useState } from "react";
import { categories, menu, type CategoryKey } from "@/lib/menu";
import { ItemCard } from "./ItemCard";

type FilterKey = CategoryKey | "all";

export function MenuGrid() {
  const [filter, setFilter] = useState<FilterKey>("all");
  const visible = filter === "all" ? menu : menu.filter((item) => item.category === filter);

  return (
    <div>
      <div className="mb-9 flex flex-wrap gap-2.5" role="tablist" aria-label="Filter menu by category">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full border px-4.5 py-2 text-sm font-bold transition-colors ${
            filter === "all"
              ? "border-accent bg-accent text-[#1a0d05]"
              : "border-line text-fg-dim hover:border-accent-soft hover:text-fg"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setFilter(cat.key)}
            className={`rounded-full border px-4.5 py-2 text-sm font-bold transition-colors ${
              filter === cat.key
                ? "border-accent bg-accent text-[#1a0d05]"
                : "border-line text-fg-dim hover:border-accent-soft hover:text-fg"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4.5">
        {visible.map((item) => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
