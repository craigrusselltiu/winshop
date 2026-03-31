import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'
import { getDisplayPrice } from '../../utils/formatPrice'
import { getProductBadge } from '../../utils/productHelpers'
import ProductBadge from './ProductBadge'

export default function ProductCard({ product, index = 0, featured = false }) {
  const badge = getProductBadge(product)
  const { current, original, hasSale } = getDisplayPrice(product)
  const maxSwatches = featured ? 6 : 5
  const visibleColors = product.colors.slice(0, maxSwatches)
  const extraCount = product.colors.length - maxSwatches

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      <Link
        to={`/product/${product.slug}`}
        className="block text-inherit no-underline"
      >
        {/* Image */}
        <div className={cn(
          'product-image relative overflow-hidden',
          product.soldOut && 'after:absolute after:inset-0 after:bg-cream/40',
        )}>
          <img
            src={product.defaultImage}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <ProductBadge label={badge.label} type={badge.type} />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-4 space-y-2">
          {/* Color swatches */}
          {product.colors.length > 1 && (
            <div className="flex items-center gap-1.5">
              {visibleColors.map((color) => (
                <span
                  key={color.name}
                  title={color.name}
                  className={cn(
                    'block h-3 w-3 rounded-full border transition-transform duration-200',
                    color.hex === '#FFFFFF' || color.hex === '#FAF7F2'
                      ? 'border-sand'
                      : 'border-transparent',
                  )}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
              {extraCount > 0 && (
                <span className="text-caption text-warm-gray">
                  +{extraCount}
                </span>
              )}
            </div>
          )}

          {/* Name */}
          <h3 className={cn(
            'font-serif font-semibold text-charcoal leading-snug transition-colors duration-200 group-hover:text-terracotta',
            featured ? 'text-heading-3' : 'text-body',
          )}>
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className={cn(
              'font-sans font-medium',
              hasSale ? 'text-sage' : 'text-charcoal',
              featured ? 'text-body' : 'text-body-sm',
            )}>
              {current}
            </span>
            {hasSale && original && (
              <span className="text-caption text-warm-gray line-through">
                {original}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
