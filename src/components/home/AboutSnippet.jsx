import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { assetUrl } from '../../utils/assetUrl'

export default function AboutSnippet() {
  return (
    <section className="section bg-beige overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="aspect-[4/3] overflow-hidden bg-sand"
          >
            <img
              src={assetUrl('/images/about.jpg')}
              alt="Winshop workshop"
              className="h-full w-full object-cover"
              onError={(e) => { e.target.style.display = 'none' }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="overline mb-5 block">Our Story</span>
            <h2 className="font-serif text-heading-1 font-bold text-charcoal text-balance">
              Australian-Made,{' '}
              <span className="text-terracotta">Globally Sourced</span>
            </h2>
            <p className="mt-5 text-body text-warm-gray leading-relaxed">
              Winshop Australia was built on a simple belief: that premium
              sublimation blanks shouldn&rsquo;t mean compromising on ethics.
              We partner with verified manufacturers across Australia, the
              Philippines, and Thailand — ensuring every garment meets our
              standards for quality, fair labour, and environmental
              responsibility.
            </p>
            <div className="mt-8">
              <Button to="/about" variant="secondary" iconRight={<ArrowRight size={16} />}>
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
