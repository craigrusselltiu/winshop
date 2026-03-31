import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }) {
  if (!products.length) {
    return (
      <div className="py-20 text-center">
        <p className="font-serif text-heading-3 text-warm-gray">No products found.</p>
        <p className="mt-2 text-body-sm text-warm-gray">Try a different category or filter.</p>
      </div>
    )
  }

  return (
    <motion.div
      className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
    >
      {products.map((product, i) => (
        <ProductCard key={product.slug} product={product} index={i} />
      ))}
    </motion.div>
  )
}
