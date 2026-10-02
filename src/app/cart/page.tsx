import type { Metadata } from "next";
import { CartView } from "@/components/CartView";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review your order and check out straight to WhatsApp for delivery or pickup.",
};

export default function CartPage() {
  return <CartView />;
}
