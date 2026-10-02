"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { CART_STORAGE_KEY, type CartLine } from "@/lib/cart";

interface CartContextValue {
  lines: CartLine[];
  add: (name: string, price: number, qty?: number) => void;
  setQty: (name: string, qty: number) => void;
  remove: (name: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Runs once on mount. Bundling both state updates in one effect callback
  // means React batches them into a single re-render, so the write effect
  // below never sees a stale empty cart in between and can't clobber
  // storage with it.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore unreadable storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore unwritable storage
    }
  }, [lines, hydrated]);

  function add(name: string, price: number, qty = 1) {
    setLines((prev) => {
      const existing = prev.find((line) => line.name === name);
      if (existing) {
        return prev.map((line) => (line.name === name ? { ...line, qty: line.qty + qty } : line));
      }
      return [...prev, { name, price, qty }];
    });
  }

  function setQty(name: string, qty: number) {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((line) => line.name !== name);
      return prev.map((line) => (line.name === name ? { ...line, qty } : line));
    });
  }

  function remove(name: string) {
    setLines((prev) => prev.filter((line) => line.name !== name));
  }

  function clear() {
    setLines([]);
  }

  return (
    <CartContext.Provider value={{ lines, add, setQty, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
