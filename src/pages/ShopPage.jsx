import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import CategoryFilter from '../components/shop/CategoryFilter'
import SortDropdown from '../components/shop/SortDropdown'
import ProductGrid from '../components/shop/ProductGrid'
import { getProductsByCategory, sortProducts } from '../data/products'
import { getCategoryBySlug } from '../data/categories'

export default function ShopPage() {
  const { category } = useParams()
  const [sortBy, setSortBy] = useState('featured')

  const categoryInfo = getCategoryBySlug(category)
  const pageTitle = categoryInfo ? categoryInfo.name : 'Shop'
  useDocumentTitle(category ? `Shop ${pageTitle}` : 'Shop')

  const filtered = useMemo(
    () => getProductsByCategory(category || null),
    [category],
  )

  const sorted = useMemo(
    () => sortProducts(filtered, sortBy),
    [filtered, sortBy],
  )

  return (
    <section className="py-12">
      <Container>
        <h1 className="font-serif text-heading-1 font-bold text-charcoal mb-8">
          {pageTitle}
        </h1>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <CategoryFilter active={category || null} />
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        <p className="mb-8 text-body-sm text-warm-gray">
          {sorted.length} {sorted.length === 1 ? 'product' : 'products'}
        </p>

        <ProductGrid products={sorted} />
      </Container>
    </section>
  )
}
