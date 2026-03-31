import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Ruler } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import ProductGallery from '../components/product/ProductGallery'
import PriceDisplay from '../components/product/PriceDisplay'
import VariantSelector from '../components/product/VariantSelector'
import BuyButton from '../components/product/BuyButton'
import ProductInfo from '../components/product/ProductInfo'
import { getProductBySlug } from '../data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  useDocumentTitle(product?.name || 'Product Not Found')

  const [selectedColor, setSelectedColor] = useState(
    () => product?.colors?.[0]?.name || null,
  )
  const [selectedSize, setSelectedSize] = useState(null)

  if (!product) {
    return (
      <section className="py-12">
        <Container>
          <p className="text-warm-gray">Product not found.</p>
        </Container>
      </section>
    )
  }

  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1)

  return (
    <section className="py-10 md:py-14">
      <Container>
        <Breadcrumbs
          items={[
            { label: 'Shop', href: '/shop' },
            { label: categoryLabel, href: `/shop/${product.category}` },
            { label: product.name },
          ]}
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery product={product} selectedColor={selectedColor} />
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-heading-1 font-bold text-charcoal">
                {product.name}
              </h1>
              <div className="mt-3">
                <PriceDisplay product={product} />
              </div>
            </div>

            {product.shortDescription && (
              <p className="text-body text-warm-gray leading-relaxed">
                {product.shortDescription}
              </p>
            )}

            <VariantSelector
              product={product}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              selectedSize={selectedSize}
              onSizeChange={setSelectedSize}
            />

            <Link
              to="/size-guide"
              className="inline-flex items-center gap-1.5 text-body-sm text-warm-gray underline-offset-2 hover:text-charcoal"
            >
              <Ruler size={14} strokeWidth={1.5} />
              Size guide
            </Link>

            <BuyButton
              product={product}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
            />

            <ProductInfo product={product} />
          </div>
        </div>
      </Container>
    </section>
  )
}
