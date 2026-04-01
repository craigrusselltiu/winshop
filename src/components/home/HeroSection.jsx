import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import { assetUrl } from '../../utils/assetUrl'

const stagger = {
  visible: { transition: { staggerChildren: 0.13 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-beige lg:min-h-[88vh]">
      {/* Hero image — fullbleed on mobile with overlay, right column on desktop */}
      <div className="absolute inset-0 lg:left-[52%]">
        <img
          src={assetUrl('/images/hero.jpg')}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Mobile: strong overlay for text legibility */}
        <div className="absolute inset-0 bg-beige/80 lg:bg-transparent" />
        {/* Desktop: left-edge fade into beige background */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-beige via-beige/70 to-transparent lg:block" />
      </div>

      {/* Decorative watermark — large brand type anchored to bottom edge */}
      <motion.div
        className="pointer-events-none absolute -bottom-[0.12em] left-0 right-0 select-none"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.9 }}
      >
        <span className="block font-serif text-[19vw] font-bold leading-[0.75] tracking-[-0.04em] text-sand/30">
          WINSHOP
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-wide items-center px-5 sm:px-8">
        <motion.div
          className="w-full py-24 sm:py-30 lg:max-w-[55%] lg:py-34"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.span className="overline mb-5 block" variants={fadeUp}>
            Australian Owned &middot; Ethically Made
          </motion.span>

          <motion.h1
            className="font-serif text-display-xl font-bold text-charcoal"
            style={{ maxWidth: '13ch' }}
            variants={fadeUp}
          >
            Simplify Your Custom Apparel with{' '}
            <span className="text-terracotta">Sublimation Magic</span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-md text-body-lg text-warm-gray"
            variants={fadeUp}
          >
            Premium sublimation-ready blanks for your creative business.
          </motion.p>

          <motion.div className="mt-10" variants={fadeUp}>
            <Button to="/shop" size="lg" iconRight={<ArrowRight size={18} />}>
              Shop Now
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom rule */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-sand" />
    </section>
  )
}
