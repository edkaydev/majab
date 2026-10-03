import { BracketHeading } from "./BracketHeading";
import { StarRating } from "./StarRating";
import { FlameIcon } from "./FlameIcon";

const reviews = [
  {
    name: "Jordan M.",
    initials: "JM",
    quote:
      "Pulled off the highway on a whim and ended up turning around just to come back the next day. The Smokehouse Stacker is worth the detour.",
  },
  {
    name: "Aisha R.",
    initials: "AR",
    quote:
      "Ordered on WhatsApp from my hostel and it showed up before I'd even finished getting ready. Hot, fast, and the ribs don't mess around.",
  },
  {
    name: "Pete D.",
    initials: "PD",
    quote:
      "This is our standing Friday stop now. Delivery's quick and everything still tastes like it just came off the grill.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20">
      <FlameIcon className="pointer-events-none absolute -right-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rotate-12 text-accent/5" />
      <div className="relative mx-auto max-w-[1180px] px-5">
        <h2 className="mb-10 text-center text-[clamp(2rem,4.5vw,2.8rem)]">
          <BracketHeading>
            What They&apos;re <span className="text-accent">Saying</span>
          </BracketHeading>
        </h2>
        <p className="-mt-7 mb-10 text-center text-xs text-fg-dim">
          Sample reviews — swap in your real ones.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col gap-4 rounded-[22px] border border-line bg-bg-raised p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep font-display text-sm font-bold text-ink">
                  {review.initials}
                </div>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <StarRating />
                </div>
              </div>
              <p className="text-sm text-fg-dim">{review.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
