"use client";

import { useState } from "react";

export function CopyButton({ value, display }: { value: string; display: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      setCopied(false);
    } finally {
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex w-fit items-center gap-2 rounded-full border border-line px-3.5 py-1.5 text-sm tabular-nums transition-colors hover:border-accent-soft"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{copied ? "Copied!" : display}</span>
    </button>
  );
}
