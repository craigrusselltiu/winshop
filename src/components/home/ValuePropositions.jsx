import { motion } from 'framer-motion'
import { Award, Heart, MapPin, Package } from 'lucide-react'
import Container from '../ui/Container'
import { cn } from '../../utils/cn'

const values = [
  {
    icon: Award,
    title: 'Premium Quality',
    description:
      'High-grade polyester blanks engineered for vivid, lasting sublimation prints.',
    number: '01',
  },
  {
    icon: Heart,
    title: 'Ethically Made',
    description:
      'Every garment produced under verified fair-labour and safe working conditions.',
    number: '02',
  },
  {
    icon: MapPin,
    title: 'Australian Owned',
    description:
      'Proudly operated from Sydney, supporting local manufacturing and jobs.',
    number: '03',
  },
  {
    icon: Package,
    title: 'Wholesale Available',
    description:
      'Competitive bulk pricing for businesses of all sizes, from start-ups to studios.',
    number: '04',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function ValuePropositions() {
  return (
    <section className="section bg-beige">
      <Container>
        {/* Section header with editorial left alignment */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="overline mb-4 block">Why Winshop</span>
            <h2 className="font-serif text-heading-1 font-bold text-charcoal text-balance">
              Built on What Matters
            </h2>
          </div>
          <p className="max-w-sm text-body-sm text-warm-gray leading-relaxed md:text-right">
            Quality, ethics, and service are not features we advertise -- they
            are the foundation we build on.
          </p>
        </div>

        {/* Value cards grid */}
        <div className="grid grid-cols-1 gap-px bg-sand sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.number}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className={cn(
                  'group relative bg-cream p-8 transition-colors duration-500',
                  'hover:bg-charcoal',
                )}
              >
                {/* Large editorial number */}
                <span
                  className={cn(
                    'block font-serif text-display-xl font-bold leading-none',
                    'text-sand/70 transition-colors duration-500',
                    'group-hover:text-warm-gray/20',
                  )}
                >
                  {value.number}
                </span>

                {/* Icon */}
                <div
                  className={cn(
                    'mt-6 flex h-10 w-10 items-center justify-center',
                    'border border-sand transition-colors duration-500',
                    'group-hover:border-warm-gray/30',
                  )}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className={cn(
                      'text-terracotta transition-colors duration-500',
                      'group-hover:text-terracotta',
                    )}
                  />
                </div>

                {/* Text */}
                <h3
                  className={cn(
                    'mt-5 font-serif text-heading-3 font-bold text-charcoal',
                    'transition-colors duration-500',
                    'group-hover:text-cream',
                  )}
                >
                  {value.title}
                </h3>
                <p
                  className={cn(
                    'mt-2 text-body-sm text-warm-gray leading-relaxed',
                    'transition-colors duration-500',
                    'group-hover:text-cream/60',
                  )}
                >
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
