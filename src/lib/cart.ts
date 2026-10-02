export interface CartLine {
  name: string;
  price: number;
  qty: number;
}

export const CART_STORAGE_KEY = "majab-cart";

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.price * line.qty, 0);
}

export function cartCount(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.qty, 0);
}
