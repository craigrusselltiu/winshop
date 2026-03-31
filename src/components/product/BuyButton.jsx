import { ShoppingBag, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getStripeLink, isVariantSoldOut } from '../../utils/getStripeLink'
import { cn } from '../../utils/cn'

export default function BuyButton({ product, selectedColor, selectedSize }) {
  const ready = selectedColor && selectedSize

  if (product.soldOut) {
    return (
      <button
        disabled
        className={cn(
          'flex w-full items-center justify-center gap-3',
          'bg-sand py-4 font-sans text-body font-medium uppercase tracking-[0.1em] text-warm-gray',
          'cursor-not-allowed opacity-60',
        )}
      >
        Sold Out
      </button>
    )
  }

  if (!ready) {
    return (
      <button
        disabled
        className={cn(
          'flex w-full items-center justify-center gap-3',
          'border border-sand py-4 font-sans text-body font-medium uppercase tracking-[0.1em] text-sand',
          'cursor-not-allowed',
        )}
      >
        Select options
      </button>
    )
  }

  const variantSoldOut = isVariantSoldOut(product, selectedColor, selectedSize)
  if (variantSoldOut) {
    return (
      <button
        disabled
        className={cn(
          'flex w-full items-center justify-center gap-3',
          'bg-sand py-4 font-sans text-body font-medium uppercase tracking-[0.1em] text-warm-gray',
          'cursor-not-allowed opacity-60',
        )}
      >
        Sold Out
      </button>
    )
  }

  const paymentLink = getStripeLink(product, selectedColor, selectedSize)

  if (paymentLink) {
    return (
      <a
        href={paymentLink}
        className={cn(
          'flex w-full items-center justify-center gap-3',
          'bg-terracotta py-4 font-sans text-body font-medium uppercase tracking-[0.1em] text-cream',
          'transition-colors duration-200 hover:bg-terracotta-dark',
        )}
      >
        <ShoppingBag size={18} strokeWidth={1.5} />
        Buy Now
      </a>
    )
  }

  // Payment link not yet configured — link to contact
  return (
    <div className="space-y-2">
      <Link
        to="/contact"
        className={cn(
          'flex w-full items-center justify-center gap-3',
          'bg-terracotta py-4 font-sans text-body font-medium uppercase tracking-[0.1em] text-cream',
          'transition-colors duration-200 hover:bg-terracotta-dark',
          'no-underline',
        )}
      >
        <ShoppingBag size={18} strokeWidth={1.5} />
        Buy Now
      </Link>
      <p className="flex items-center gap-1.5 text-caption text-warm-gray">
        <Lock size={11} />
        Secure checkout via Stripe
      </p>
    </div>
  )
}
