import { getDisplayPrice } from '../../utils/formatPrice'
import { cn } from '../../utils/cn'

export default function PriceDisplay({ product }) {
  const { current, original, hasSale } = getDisplayPrice(product)

  return (
    <div className="flex items-baseline gap-3">
      <span className={cn(
        'font-serif text-heading-2 font-bold',
        hasSale ? 'text-sage' : 'text-charcoal',
      )}>
        {current}
      </span>
      {hasSale && original && (
        <span className="font-sans text-body text-warm-gray line-through">
          {original}
        </span>
      )}
    </div>
  )
}
