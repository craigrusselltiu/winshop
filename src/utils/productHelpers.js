export function sortProducts(products, sortBy) {
  const sorted = [...products]

  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => {
        const priceA = a.onSale && a.salePrice != null ? a.salePrice : a.basePrice
        const priceB = b.onSale && b.salePrice != null ? b.salePrice : b.basePrice
        return priceA - priceB
      })
    case 'price-desc':
      return sorted.sort((a, b) => {
        const priceA = a.onSale && a.salePrice != null ? a.salePrice : a.basePrice
        const priceB = b.onSale && b.salePrice != null ? b.salePrice : b.basePrice
        return priceB - priceA
      })
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'featured':
    default:
      return sorted.sort((a, b) => a.sortOrder - b.sortOrder)
  }
}

export function filterProducts(products, category) {
  if (!category) return products
  if (category === 'on-sale') return products.filter((p) => p.onSale)
  if (category === 'pre-order') return products.filter((p) => p.category === 'pre-order')
  return products.filter((p) => p.category === category)
}

export function getProductBadge(product) {
  if (product.soldOut) return { label: 'Sold Out', type: 'soldout' }
  if (product.onSale) return { label: 'Sale', type: 'sale' }
  if (product.tags.includes('new')) return { label: 'New', type: 'new' }
  if (product.category === 'pre-order') return { label: 'Pre-Order', type: 'preorder' }
  return null
}

export function getFeaturedProducts(products, count = 6) {
  return products
    .filter((p) => !p.soldOut)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .slice(0, count)
}
