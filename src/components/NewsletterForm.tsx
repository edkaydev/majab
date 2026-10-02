"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter your email"
        className="rounded-full border border-line bg-bg-raised px-4.5 py-3 text-sm outline-none transition-colors focus:border-accent-soft"
      />
      <button
        type="submit"
        className="rounded-full bg-accent px-4.5 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
      >
        {status === "sent" ? "You're on the list!" : "Subscribe Now"}
      </button>
    </form>
  );
}
