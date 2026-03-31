import { cn } from '../../utils/cn'

const typeStyles = {
  sale: 'bg-sage text-cream',
  new: 'bg-gold text-cream',
  soldout: 'bg-warm-gray text-cream',
  preorder: 'bg-terracotta text-cream',
}

export default function ProductBadge({ label, type, className }) {
  return (
    <span
      className={cn(
        'inline-block px-3 py-1',
        'font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] leading-none',
        typeStyles[type],
        className,
      )}
    >
      {label}
    </span>
  )
}
