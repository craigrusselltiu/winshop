import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { getDisplayPrice } from '../../utils/formatPrice'
import { getProductBadge } from '../../utils/productHelpers'
import ProductBadge from './ProductBadge'

const MAX_SWATCHES = 5

function ColorSwatches({ colors }) {
  if (!colors?.length) return null

  const visible = colors.slice(0, MAX_SWATCHES)
  const remaining = colors.length - MAX_SWATCHES

  return (
    <div className="flex items-center gap-1.5">
      {visible.map((color) => (
        <span
          key={color.name}
          title={color.name}
          className="block h-3 w-3 rounded-full ring-1 ring-sand/80"
          style={{ backgroundColor: color.hex }}
        />
      ))}
      {remaining > 0 && (
        <span className="text-[0.65rem] font-sans text-warm-gray tracking-wide">
          +{remaining}
        </span>
      )}
    </div>
  )
}

function PriceDisplay({ product }) {
  const { current, original, hasSale } = getDisplayPrice(product)

  if (hasSale) {
    return (
      <div className="flex items-baseline gap-2">
        <span className="font-sans text-body-sm font-medium text-charcoal">
          {current}
        </span>
        <span className="font-sans text-caption text-warm-gray line-through">
          {original}
        </span>
      </div>
    )
  }

  return (
    <span className="font-sans text-body-sm font-medium text-charcoal">
      {current}
    </span>
  )
}

export default function ProductCard({ product }) {
  const badge = getProductBadge(product)
  const imageSrc = product.defaultImage

  return (
    <Link
      to={`/product/${product.slug}`}
      className={cn(
        'group block',
        product.soldOut && 'pointer-events-auto',
      )}
    >
      <motion.article
        className="relative"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Image */}
        <div className={cn(
          'relative aspect-product overflow-hidden bg-beige',
          product.soldOut && 'opacity-50',
        )}>
          <motion.img
            src={imageSrc}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.04 },
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Badge */}
          {badge && (
            <div className="absolute left-3 top-3">
              <ProductBadge label={badge.label} type={badge.type} />
            </div>
          )}
        </div>

        {/* Details */}
        <div className="pt-4 space-y-1.5">
          <h3 className="font-serif text-body font-medium text-charcoal leading-snug group-hover:text-terracotta transition-colors duration-300">
            {product.name}
          </h3>
          <PriceDisplay product={product} />
          <ColorSwatches colors={product.colors} />
        </div>
      </motion.article>
    </Link>
  )
}
