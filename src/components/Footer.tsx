import Link from "next/link";
import { FlameIcon } from "./FlameIcon";
import { CopyButton } from "./CopyButton";
import { SocialIcon } from "./SocialIcon";
import { NewsletterForm } from "./NewsletterForm";
import { WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-[1180px] px-5 pb-10 pt-14">
        <div className="grid grid-cols-1 gap-10 border-b border-line pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex max-w-[30ch] flex-col gap-3.5">
            <Link href="/" className="flex items-center gap-2 font-display text-xl font-extrabold">
              <FlameIcon className="text-accent" />
              <span>
                Majab&apos;s <em className="text-accent not-italic">Deli</em>
              </span>
            </Link>
            <p className="text-sm text-fg-dim">
              Flame-grilled roadside eats, cooked to order. Pull up to the junction or send your
              order straight to WhatsApp.
            </p>
            <div className="flex gap-2.5">
              <SocialIcon kind="instagram" />
              <SocialIcon kind="facebook" />
              <SocialIcon kind="x" />
              <SocialIcon kind="tiktok" />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs tracking-[0.14em] text-fg-dim uppercase">Quick Links</h4>
            <Link href="/" className="text-sm text-fg-dim hover:text-accent-soft">
              Home
            </Link>
            <Link href="/menu" className="text-sm text-fg-dim hover:text-accent-soft">
              Menu
            </Link>
            <Link href="/order" className="text-sm text-fg-dim hover:text-accent-soft">
              Order
            </Link>
            <Link href="/find-us" className="text-sm text-fg-dim hover:text-accent-soft">
              Find Us
            </Link>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs tracking-[0.14em] text-fg-dim uppercase">WhatsApp</h4>
            <CopyButton value={WHATSAPP_DISPLAY} display={WHATSAPP_DISPLAY} />
            <p className="max-w-[26ch] text-sm text-fg-dim">
              Tap any &ldquo;Order&rdquo; button on the site and we&apos;ll open a chat with your
              order ready to send.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs tracking-[0.14em] text-fg-dim uppercase">
              Sign Up For Specials
            </h4>
            <p className="text-sm text-fg-dim">Grill drops, new menu items, roadside news.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 pt-6 text-xs text-fg-dim">
          <span>© 2026 Majab&apos;s Deli. All rights reserved.</span>
          <span>
            Menu, hours, address, offers &amp; WhatsApp number shown are placeholders — ready to
            swap for the real thing.
          </span>
        </div>
      </div>
    </footer>
  );
}
