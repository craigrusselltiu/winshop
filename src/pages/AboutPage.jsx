import { motion } from 'framer-motion'
import { Leaf, Users, Shield, Star } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import { cn } from '../utils/cn'

const stats = [
  {
    pct: '60%',
    country: 'Australia',
    description:
      'The majority of our production supports local Australian manufacturers, sustaining jobs and communities across the country.',
  },
  {
    pct: '30%',
    country: 'Philippines',
    description:
      'Trusted partnerships with ethical Philippine factories known for exceptional garment quality and fair labour practices.',
  },
  {
    pct: '10%',
    country: 'Thailand',
    description:
      'Specialised expertise from Thai manufacturers, particularly for technical fabric blends and hooded styles.',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Ethical Production',
    description:
      'Every factory we work with undergoes rigorous ethical audits. We will never sacrifice worker welfare for cost.',
  },
  {
    icon: Users,
    title: 'Fair Labor',
    description:
      'All workers in our supply chain are paid fair wages and operate in safe, legally compliant conditions.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We prioritise recycled fabrics where possible and work to minimise waste and carbon footprint across our operations.',
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description:
      'Every batch is quality-checked before dispatch. We stand behind our products with a defective-item return policy.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function AboutPage() {
  useDocumentTitle('About Us')

  return (
    <div>
      {/* Hero */}
      <section className="bg-beige py-20 md:py-30">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-2xl"
          >
            <motion.span className="overline mb-5 block" variants={fadeUp}>
              Our Story
            </motion.span>
            <motion.h1
              className="font-serif text-display font-bold text-charcoal"
              variants={fadeUp}
            >
              About Winshop
            </motion.h1>
            <motion.p
              className="mt-6 text-body-lg text-warm-gray leading-relaxed"
              variants={fadeUp}
            >
              We are an Australian-owned business dedicated to making
              premium sublimation blanks accessible to every creative
              business — from solo entrepreneurs to established studios.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Mission */}
      <section className="section">
        <Container width="narrow">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span className="overline mb-5 block" variants={fadeUp}>
              Our Mission
            </motion.span>
            <motion.h2
              className="font-serif text-heading-1 font-bold text-charcoal"
              variants={fadeUp}
            >
              Making Custom Apparel Accessible
            </motion.h2>
            <motion.p
              className="mt-5 text-body-lg text-warm-gray leading-relaxed"
              variants={fadeUp}
            >
              Winshop was founded on the belief that every business deserves
              access to high-quality sublimation blanks at fair prices — without
              compromising on ethics. We saw a market flooded with cheap,
              low-quality alternatives from unverified sources, and decided to
              do things differently. Today, our garments are trusted by hundreds
              of Australian businesses for their vibrant print results,
              consistent sizing, and durable construction.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Manufacturing breakdown */}
      <section className="section bg-beige">
        <Container>
          <div className="mb-14 max-w-xl">
            <span className="overline mb-5 block">Transparency</span>
            <h2 className="font-serif text-heading-1 font-bold text-charcoal">
              Where We Make It
            </h2>
            <p className="mt-4 text-body text-warm-gray leading-relaxed">
              We believe in full transparency about our supply chain. Here is
              exactly where our garments are produced:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-sand md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.country}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-cream p-8 md:p-10"
              >
                <span className="block font-serif text-display font-bold leading-none text-terracotta">
                  {stat.pct}
                </span>
                <h3 className="mt-3 font-serif text-heading-2 font-bold text-charcoal">
                  {stat.country}
                </h3>
                <p className="mt-3 text-body-sm text-warm-gray leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section">
        <Container>
          <div className="mb-14 max-w-xl">
            <span className="overline mb-5 block">Our Values</span>
            <h2 className="font-serif text-heading-1 font-bold text-charcoal">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="border border-sand p-7"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center border border-sand">
                    <Icon size={18} strokeWidth={1.5} className="text-terracotta" />
                  </div>
                  <h3 className="font-serif text-heading-3 font-bold text-charcoal">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-body-sm text-warm-gray leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Supply chain statement */}
      <section className="section bg-charcoal">
        <Container width="narrow">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <span className="block font-sans text-caption font-semibold uppercase tracking-[0.15em] text-sand mb-6">
              Our Commitment
            </span>
            <p className="font-serif text-heading-2 font-bold text-cream leading-relaxed text-balance">
              &ldquo;All supply chains are verified for fair and safe working
              conditions. We are committed to continuous improvement in our
              environmental and social impact.&rdquo;
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
