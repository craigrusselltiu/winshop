export function getStripeLink(product, color, size) {
  const key = `${color}-${size}`
  const variant = product.variants?.[key]
  return variant?.paymentLink || null
}

export function isVariantSoldOut(product, color, size) {
  const key = `${color}-${size}`
  const variant = product.variants?.[key]
  return product.soldOut || variant?.soldOut === true
}

export function getVariantPrice(product, color, size) {
  const key = `${color}-${size}`
  const variant = product.variants?.[key]
  return variant?.price ?? product.basePrice
}
