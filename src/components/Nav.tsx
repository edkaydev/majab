"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FlameIcon } from "./FlameIcon";
import { CartButton } from "./CartButton";
import { waLink, GENERAL_TEXT } from "@/lib/whatsapp";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/find-us", label: "Find Us" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b border-line bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center gap-5 px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 font-display text-xl font-extrabold whitespace-nowrap">
          <FlameIcon className="text-accent animate-[flicker_3.6s_ease-in-out_infinite] motion-reduce:animate-none" />
          <span>
            Majab&apos;s <em className="text-accent not-italic">Deli</em>
          </span>
        </Link>

        <nav className="ml-auto hidden gap-7 text-sm font-semibold md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-1 transition-colors ${
                pathname === link.href ? "text-fg" : "text-fg-dim hover:text-fg"
              } after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-accent after:transition-transform after:duration-200 ${
                pathname === link.href
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              } after:origin-left`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <CartButton />
          <a
            href={waLink(GENERAL_TEXT)}
            target="_blank"
            rel="noopener"
            className="hidden whitespace-nowrap rounded-full bg-accent px-4.5 py-2.5 text-sm font-bold text-[#1a0d05] transition-transform hover:-translate-y-0.5 md:block"
          >
            Order on WhatsApp
          </a>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative h-8.5 w-8.5 flex-shrink-0 md:hidden"
        >
          <span
            className={`absolute left-1.5 right-1.5 top-4 h-0.5 bg-fg transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`absolute left-1.5 right-1.5 top-4 h-0.5 bg-fg transition-transform ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute left-1.5 right-1.5 top-4 h-0.5 bg-fg transition-transform ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line px-5 py-3.5 font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="border-b border-line px-5 py-3.5 font-semibold"
          >
            Cart
          </Link>
          <a
            href={waLink(GENERAL_TEXT)}
            target="_blank"
            rel="noopener"
            className="border-b border-line px-5 py-3.5 font-semibold text-accent"
          >
            Order on WhatsApp →
          </a>
        </nav>
      </div>
    </header>
  );
}
