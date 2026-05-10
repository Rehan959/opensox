/** plan.price is stored in minor units (paise for INR), same as razorpay. */
export function formatApproxPlanPrice(
  priceMinorUnits: number,
  currency: string
): string {
  const major = priceMinorUnits / 100;
  const fractionDigits = Number.isInteger(major) ? 0 : 2;

  if (currency === "INR") {
    const formatted = new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: fractionDigits,
    }).format(major);
    return `(~ ₹${formatted} INR)`;
  }

  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: fractionDigits,
  }).format(major);
  return `(~ ${formatted} ${currency})`;
}
