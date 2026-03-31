import { cn } from '../../utils/cn'
import { isVariantSoldOut } from '../../utils/getStripeLink'

export default function VariantSelector({
  product,
  selectedColor,
  onColorChange,
  selectedSize,
  onSizeChange,
}) {
  return (
    <div className="space-y-6">
      {/* Color */}
      <div>
        <p className="mb-3 text-body-sm font-sans font-medium text-charcoal">
          Color:{' '}
          <span className="font-normal text-warm-gray">{selectedColor}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              title={color.name}
              onClick={() => onColorChange(color.name)}
              className={cn(
                'relative h-8 w-8 rounded-full transition-all duration-200',
                color.hex === '#FFFFFF' || color.hex === '#FAF7F2'
                  ? 'border border-sand'
                  : 'border border-transparent',
                selectedColor === color.name &&
                  'ring-2 ring-terracotta ring-offset-2 ring-offset-cream',
              )}
              style={{ backgroundColor: color.hex }}
              aria-label={color.name}
              aria-pressed={selectedColor === color.name}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <p className="mb-3 text-body-sm font-sans font-medium text-charcoal">Size</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => {
            const soldOut = selectedColor
              ? isVariantSoldOut(product, selectedColor, size)
              : false

            return (
              <button
                key={size}
                onClick={() => !soldOut && onSizeChange(size)}
                disabled={soldOut}
                className={cn(
                  'min-w-[2.75rem] border px-3 py-2 font-sans text-body-sm font-medium',
                  'transition-colors duration-200',
                  selectedSize === size
                    ? 'border-charcoal bg-charcoal text-cream'
                    : 'border-sand text-charcoal hover:border-charcoal',
                  soldOut &&
                    'cursor-not-allowed border-sand/50 text-sand line-through opacity-60',
                )}
                aria-pressed={selectedSize === size}
                aria-label={soldOut ? `${size} - Sold out` : size}
              >
                {size}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
