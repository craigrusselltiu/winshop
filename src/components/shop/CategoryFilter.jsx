import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { filterOptions } from '../../data/categories'
import { cn } from '../../utils/cn'

export default function CategoryFilter({ active }) {
  const navigate = useNavigate()

  function handleSelect(slug) {
    if (slug === active) return
    navigate(slug ? `/shop/${slug}` : '/shop')
  }

  return (
    <nav aria-label="Product categories" className="flex flex-wrap gap-2">
      {filterOptions.map(({ slug, name }) => {
        const isActive = slug === active
        return (
          <button
            key={slug ?? 'all'}
            onClick={() => handleSelect(slug)}
            className={cn(
              'relative px-5 py-2 text-body-sm font-sans font-medium tracking-wide transition-colors duration-200',
              'rounded-full border select-none',
              'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta',
              isActive
                ? 'border-charcoal bg-charcoal text-cream'
                : 'border-sand bg-cream text-warm-gray hover:border-charcoal hover:text-charcoal',
            )}
          >
            {isActive && (
              <motion.span
                layoutId="category-pill"
                className="absolute inset-0 rounded-full bg-charcoal"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{name}</span>
          </button>
        )
      })}
    </nav>
  )
}
