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

export const UMU_ZONE = "Uganda Martyrs University (hostel)";

export const DELIVERY_ZONES = [
  "Nkozi TC",
  UMU_ZONE,
  "Kayabwe-Nkozi Junction",
  "Soweto",
  "Equator",
  "Kafeene",
  "Kayembe",
  "Kayabwe Taxi Park",
  "Kayabwe-Nkozi Boda Stage",
  "Other area (I'll share my address)",
];

export function buildCartMessage(
  lines: { name: string; price: number; qty: number }[],
  opts?: {
    promoCode?: string;
    discount?: number;
    deliveryFee?: number;
    deliveryZone?: string;
    hostel?: string;
    roomNumber?: string;
    deliveryNotes?: string;
  }
): string {
  const itemLines = lines.map(
    (line) => `• ${line.qty}x ${line.name} — ${formatUGX(line.price * line.qty)}`
  );
  const subtotal = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
  const deliveryFee = opts?.deliveryFee ?? 0;
  const discount = opts?.discount ?? 0;
  const total = subtotal + deliveryFee - discount;

  const summary = [
    `Subtotal: ${formatUGX(subtotal)}`,
    `Delivery fee: ${formatUGX(deliveryFee)}`,
    opts?.promoCode ? `Promo (${opts.promoCode}): -${formatUGX(discount)}` : null,
    `Total: ${formatUGX(total)}`,
  ].filter(Boolean);

  const deliveryDetails = [
    "",
    `Delivery area: ${opts?.deliveryZone ?? "—"}`,
    opts?.hostel ? `Hostel: ${opts.hostel}` : null,
    opts?.roomNumber ? `Room number: ${opts.roomNumber}` : null,
    opts?.deliveryNotes ? `Notes: ${opts.deliveryNotes}` : null,
    "Payment: Cash on Delivery",
  ].filter((line): line is string => line !== null);

  return [
    "Hi Majab's Deli, I'd like to order for delivery:",
    "",
    ...itemLines,
    "",
    ...summary,
    ...deliveryDetails,
  ].join("\n");
}

export const DELIVERY_TEXT =
  "Hi Majab's Deli, I'd like to place an order for delivery. Here's my order and address:";
export const GENERAL_TEXT = "Hi Majab's Deli, I'd like to place an order.";
