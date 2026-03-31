export function getStripeLink(product, color, size) {
  const key = `${color}-${size}`
  const variant = product.variants?.[key]
  return variant?.paymentLink || null
}
