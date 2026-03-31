import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import ProductCard from '../shop/ProductCard'
import { getFeaturedProducts } from '../../data/products'

export default function FeaturedProducts() {
  const products = getFeaturedProducts()
  const hero = products.slice(0, 2)
  const rest = products.slice(2, 6)

  return (
    <section className="section bg-cream">
      <Container>
        {/* Heading row with CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <SectionHeading
            overline="Curated Selection"
            title="Featured Products"
            subtitle="Our most popular sublimation-ready blanks, chosen by customers who know quality."
            align="left"
            className="max-w-lg"
          />
          <Button
            to="/shop"
            variant="secondary"
            size="sm"
            iconRight={<ArrowRight size={16} />}
            className="shrink-0 self-start sm:self-auto"
          >
            Shop All
          </Button>
        </div>

        {/* Asymmetric grid -- 2 hero cards + 4 standard */}
        <div className="space-y-6 md:space-y-8">
          {/* Top row: 2 large feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {hero.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={i}
                featured
              />
            ))}
          </div>

          {/* Bottom row: 4 standard cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {rest.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={i + 2}
              />
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 md:mt-20 h-px bg-sand origin-left"
        />
      </Container>
    </section>
  )
}
