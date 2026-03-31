import { useState, useEffect } from 'react'
import { cn } from '../../utils/cn'

export default function ProductGallery({ product, selectedColor }) {
  const getImages = (color) => {
    if (color && product.images?.[color]?.length) {
      return product.images[color]
    }
    return product.defaultImage ? [product.defaultImage] : []
  }

  const [images, setImages] = useState(getImages(selectedColor))
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    setImages(getImages(selectedColor))
    setActiveIndex(0)
  }, [selectedColor]) // eslint-disable-line react-hooks/exhaustive-deps

  const thumbnails = images.slice(0, 4)
  const mainSrc = images[activeIndex] || product.defaultImage

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div className="aspect-product overflow-hidden bg-beige">
        {mainSrc ? (
          <img
            key={mainSrc}
            src={mainSrc}
            alt={`${product.name}${selectedColor ? ` in ${selectedColor}` : ''}`}
            className="h-full w-full object-cover"
            onError={(e) => { e.target.style.display = 'none' }}
          />
        ) : null}
      </div>

      {/* Thumbnails */}
      {thumbnails.length > 1 && (
        <div className="flex gap-2">
          {thumbnails.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveIndex(i)}
              className={cn(
                'aspect-square w-16 overflow-hidden bg-beige transition-all duration-200',
                activeIndex === i
                  ? 'ring-2 ring-terracotta ring-offset-1 ring-offset-cream'
                  : 'opacity-60 hover:opacity-100',
              )}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
