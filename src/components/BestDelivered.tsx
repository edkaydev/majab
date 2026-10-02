import { BracketHeading } from "./BracketHeading";
import { CategoryIcon } from "./CategoryIcon";
import { menu } from "@/lib/menu";
import { waLink, orderItemText } from "@/lib/whatsapp";

const featured = menu.filter((item) => item.signature);

export function BestDelivered() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1180px] px-5">
        <h2 className="mb-9 text-[clamp(2rem,4.5vw,2.8rem)]">
          <BracketHeading>
            Straight Off The <span className="text-accent">Grill</span>
          </BracketHeading>
        </h2>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-[max(20px,calc((100vw-1180px)/2))]">
        {featured.map((item) => (
          <article
            key={item.name}
            className="group relative w-[300px] flex-shrink-0 snap-start overflow-hidden rounded-[26px] border border-line bg-bg-raised shadow-[0_20px_50px_-24px_rgba(0,0,0,0.7)] transition-all hover:-translate-y-1.5 hover:border-accent-deep sm:w-[360px]"
          >
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl transition-transform duration-500 group-hover:scale-110"
            />
            <div className="relative flex h-full flex-col gap-4 p-7">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-deep text-ink shadow-[0_16px_30px_-10px_rgba(255,106,31,0.6)] transition-transform group-hover:scale-105">
                <CategoryIcon category={item.category} className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-extrabold">{item.name}</h3>
              <p className="flex-1 text-sm text-fg-dim">{item.description}</p>
              <p className="font-display text-2xl font-extrabold text-accent-soft">${item.price}/-</p>
              <div className="flex items-center gap-3">
                <a
                  href={waLink(orderItemText(item.name, item.price))}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Order Now
                </a>
                <a
                  href="/menu"
                  aria-label="View full menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-fg transition-transform hover:rotate-6 hover:border-accent-soft hover:text-accent-soft"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 7h16M4 12h16M4 17h10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
