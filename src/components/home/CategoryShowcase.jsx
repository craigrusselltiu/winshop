import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { getFeaturedCategories } from '../../data/categories'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { cn } from '../../utils/cn'

const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

function CategoryTile({ category, index, className }) {
  return (
    <motion.div
      custom={index}
      variants={tileVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('group relative', className)}
    >
      <Link
        to={`/shop/${category.slug}`}
        className="block relative h-full overflow-hidden bg-beige"
      >
        {/* Image with zoom on hover */}
        <div className="absolute inset-0">
          <img
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="relative flex h-full flex-col justify-end p-6 sm:p-8">
          {/* Category name -- oversized editorial typography */}
          <h3 className="font-serif text-display font-bold uppercase tracking-tight text-cream leading-none">
            {category.name}
          </h3>
          <p className="mt-2 max-w-xs text-body-sm text-cream/70 leading-relaxed">
            {category.description}
          </p>

          {/* Animated arrow indicator */}
          <div className="mt-4 flex items-center gap-2 text-cream/80 transition-colors duration-300 group-hover:text-terracotta">
            <span className="text-caption font-sans font-semibold uppercase tracking-[0.15em]">
              Shop Now
            </span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>

        {/* Subtle border reveal on hover */}
        <div className="pointer-events-none absolute inset-0 border-2 border-cream/0 transition-all duration-500 group-hover:border-cream/20" />
      </Link>
    </motion.div>
  )
}

export default function CategoryShowcase() {
  const categories = getFeaturedCategories()

  return (
    <section className="section">
      <Container width="wide">
        <SectionHeading
          overline="Collections"
          title="Shop by Category"
          subtitle="Sublimation-ready blanks for every age group, crafted for vibrant custom designs."
        />

        {/* Asymmetric editorial grid:
            Desktop: first tile spans 7 cols / full height, remaining two stack in 5 cols
            Tablet: 2-column layout
            Mobile: stacked */}
        <div className="mt-12 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {categories[0] && (
            <CategoryTile
              category={categories[0]}
              index={0}
              className="aspect-[4/5] md:aspect-auto md:row-span-1 lg:col-span-7 lg:row-span-2 lg:min-h-[36rem]"
            />
          )}
          {categories[1] && (
            <CategoryTile
              category={categories[1]}
              index={1}
              className="aspect-[4/3] md:aspect-auto lg:col-span-5 lg:min-h-0"
            />
          )}
          {categories[2] && (
            <CategoryTile
              category={categories[2]}
              index={2}
              className="aspect-[4/3] md:col-span-2 md:aspect-[16/7] lg:col-span-5 lg:aspect-auto lg:min-h-0"
            />
          )}
        </div>
      </Container>
    </section>
  )
}
