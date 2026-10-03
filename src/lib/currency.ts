const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "UGX",
  maximumFractionDigits: 0,
});

export function formatUGX(amount: number): string {
  return formatter.format(amount);
}
