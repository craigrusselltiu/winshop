export function formatPrice(cents) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(cents)
}

export function formatPriceRange(min, max) {
  if (!max || min === max) return formatPrice(min)
  return `${formatPrice(min)} - ${formatPrice(max)}`
}
