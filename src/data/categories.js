export const categories = [
  {
    slug: 'adult',
    name: 'Adult',
    description: 'T-shirts, hoodies, crop tops, and more',
    image: '/images/categories/adult.jpg',
    featured: true,
  },
  {
    slug: 'kids',
    name: 'Kids',
    description: 'T-shirts, long sleeves, and hoodies (Size 1-12)',
    image: '/images/categories/kids.jpg',
    featured: true,
  },
  {
    slug: 'infant',
    name: 'Infant',
    description: 'Onesies and t-shirts for the littlest ones',
    image: '/images/categories/infant.jpg',
    featured: true,
  },
  {
    slug: 'pre-order',
    name: 'Pre-Orders',
    description: 'Bulk packs at discounted prices (5-10 pieces)',
    image: '/images/categories/pre-order.jpg',
    featured: false,
  },
]

export const filterOptions = [
  { slug: null, name: 'All' },
  { slug: 'adult', name: 'Adult' },
  { slug: 'kids', name: 'Kids' },
  { slug: 'infant', name: 'Infant' },
  { slug: 'on-sale', name: 'On Sale' },
  { slug: 'pre-order', name: 'Pre-Orders' },
]

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A-Z' },
]

export function getFeaturedCategories() {
  return categories.filter((c) => c.featured)
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug) || null
}
