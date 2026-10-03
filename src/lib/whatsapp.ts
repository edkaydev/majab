import { formatUGX } from "./currency";

// TODO: replace with the real WhatsApp number (digits only, country code first, no symbols).
export const WHATSAPP_NUMBER = "15550101234";
export const WHATSAPP_DISPLAY = "+1 (555) 010-1234";

export function waLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function orderItemText(name: string, price: number): string {
  return `Hi Majab's Deli, I'd like to order: ${name} (${formatUGX(price)})`;
}

export const DELIVERY_ZONES = [
  "Junction 4 / Expressway Road",
  "Mile-Marker 5",
  "Roadside Market District",
  "Other area (I'll share my address)",
];

export function buildCartMessage(
  lines: { name: string; price: number; qty: number }[],
  mode: "delivery" | "pickup",
  opts?: { promoCode?: string; discount?: number; deliveryFee?: number; deliveryZone?: string }
): string {
  const itemLines = lines.map(
    (line) => `• ${line.qty}x ${line.name} — ${formatUGX(line.price * line.qty)}`
  );
  const subtotal = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
  const deliveryFee = mode === "delivery" ? opts?.deliveryFee ?? 0 : 0;
  const discount = opts?.discount ?? 0;
  const total = subtotal + deliveryFee - discount;

  const summary = [
    `Subtotal: ${formatUGX(subtotal)}`,
    mode === "delivery" ? `Delivery fee: ${formatUGX(deliveryFee)}` : null,
    opts?.promoCode ? `Promo (${opts.promoCode}): -${formatUGX(discount)}` : null,
    `Total: ${formatUGX(total)}`,
  ].filter(Boolean);

  const deliveryDetails =
    mode === "delivery"
      ? ["", `Delivery area: ${opts?.deliveryZone ?? "—"}`, "Payment: Cash on Delivery"]
      : [];

  return [
    `Hi Majab's Deli, I'd like to order for ${mode}${mode === "pickup" ? " — I'll pick it up at the junction" : ":"}`,
    "",
    ...itemLines,
    "",
    ...summary,
    ...deliveryDetails,
  ].join("\n");
}

export const DELIVERY_TEXT =
  "Hi Majab's Deli, I'd like to place an order for delivery. Here's my order and address:";
export const PICKUP_TEXT =
  "Hi Majab's Deli, I'd like to place an order for pickup. Here's my order:";
export const GENERAL_TEXT = "Hi Majab's Deli, I'd like to place an order.";
