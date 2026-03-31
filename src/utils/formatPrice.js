export function formatPrice(amount) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(amount)
}

export function formatPriceRange(min, max) {
  if (!max || min === max) return formatPrice(min)
  return `${formatPrice(min)} - ${formatPrice(max)}`
}

export function getDisplayPrice(product) {
  if (product.onSale && product.salePrice != null) {
    return {
      current: formatPrice(product.salePrice),
      original: product.maxPrice
        ? formatPriceRange(product.basePrice, product.maxPrice)
        : formatPrice(product.basePrice),
      hasSale: true,
    }
  }

  return {
    current: formatPriceRange(product.basePrice, product.maxPrice),
    original: null,
    hasSale: false,
  }
}
