import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Package, Users, Zap, Tag } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

const benefits = [
  { icon: Tag, title: 'Competitive Bulk Pricing', description: 'Significant discounts on orders of 20+ units.' },
  { icon: Users, title: 'Dedicated Account Manager', description: 'A single point of contact for all your wholesale needs.' },
  { icon: Zap, title: 'Priority Processing', description: 'Wholesale orders are prioritised for faster dispatch.' },
  { icon: Package, title: 'Custom Labelling', description: 'Custom label and hang-tag options available on request.' },
]

const productOptions = [
  'Adult T-shirts',
  'Kids T-shirts',
  'Adult Hoodies',
  'Kids Hoodies',
  'Infant Onesies',
  'Crop Tops',
  'Plus Size',
  'Other',
]

const volumeOptions = [
  'Under 50 units/month',
  '50–200 units/month',
  '200–500 units/month',
  '500–1000 units/month',
  '1000+ units/month',
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function WholesalePage() {
  useDocumentTitle('Wholesale')

  const [form, setForm] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    abn: '',
    products: [],
    volume: volumeOptions[0],
    message: '',
  })
  const [status, setStatus] = useState('idle')

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function toggleProduct(product) {
    setForm((f) => ({
      ...f,
      products: f.products.includes(product)
        ? f.products.filter((p) => p !== product)
        : [...f.products, product],
    }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/winshop-wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-beige py-16 md:py-22">
        <Container>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-xl"
          >
            <motion.span className="overline mb-4 block" variants={fadeUp}>For Businesses</motion.span>
            <motion.h1 className="font-serif text-display font-bold text-charcoal" variants={fadeUp}>
              Wholesale Enquiries
            </motion.h1>
            <motion.p className="mt-5 text-body text-warm-gray leading-relaxed" variants={fadeUp}>
              Scale your custom apparel business with wholesale pricing and
              dedicated support. Fill out the form below and we&rsquo;ll be in touch
              within 1 business day.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-14 md:py-18">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="border border-sand p-6"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center border border-sand">
                    <Icon size={16} strokeWidth={1.5} className="text-terracotta" />
                  </div>
                  <h3 className="font-serif text-heading-3 font-bold text-charcoal">{b.title}</h3>
                  <p className="mt-2 text-body-sm text-warm-gray">{b.description}</p>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="section bg-beige">
        <Container width="narrow">
          <div className="mb-10">
            <span className="overline mb-4 block">Enquiry Form</span>
            <h2 className="font-serif text-heading-1 font-bold text-charcoal">Get a Quote</h2>
          </div>

          {status === 'success' ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <CheckCircle size={48} strokeWidth={1} className="text-sage" />
              <h2 className="font-serif text-heading-2 font-bold text-charcoal">Enquiry Received</h2>
              <p className="text-body text-warm-gray">
                Thank you for your interest. We&rsquo;ll be in touch within 1 business day.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                    Business Name *
                  </label>
                  <input type="text" required value={form.businessName} onChange={update('businessName')} className="input" placeholder="Acme Apparel Co." />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                    Contact Name *
                  </label>
                  <input type="text" required value={form.contactName} onChange={update('contactName')} className="input" placeholder="Jane Smith" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                    Email *
                  </label>
                  <input type="email" required value={form.email} onChange={update('email')} className="input" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                    Phone
                  </label>
                  <input type="tel" value={form.phone} onChange={update('phone')} className="input" placeholder="+61 4XX XXX XXX" />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                  ABN
                </label>
                <input type="text" value={form.abn} onChange={update('abn')} className="input" placeholder="XX XXX XXX XXX" />
              </div>

              <div>
                <label className="mb-3 block font-sans text-body-sm font-medium text-charcoal">
                  Products of Interest
                </label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {productOptions.map((product) => (
                    <label
                      key={product}
                      className="flex cursor-pointer items-center gap-2 text-body-sm text-charcoal"
                    >
                      <input
                        type="checkbox"
                        checked={form.products.includes(product)}
                        onChange={() => toggleProduct(product)}
                        className="h-4 w-4 accent-terracotta"
                      />
                      {product}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                  Estimated Monthly Volume
                </label>
                <select value={form.volume} onChange={update('volume')} className="input appearance-none">
                  {volumeOptions.map((v) => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>

              <div>
                <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                  Additional Message
                </label>
                <textarea rows={4} value={form.message} onChange={update('message')} className="input resize-none" placeholder="Any specific requirements or questions..." />
              </div>

              {status === 'error' && (
                <p className="text-body-sm text-terracotta">
                  Something went wrong. Please email us at enquiries@winshopaustralia.com.au
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 bg-terracotta px-8 py-4 font-sans text-body-sm font-medium uppercase tracking-[0.1em] text-cream transition-colors duration-200 hover:bg-terracotta-dark disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream border-t-transparent" />
                ) : (
                  'Submit Enquiry'
                )}
              </button>
            </form>
          )}
        </Container>
      </section>
    </div>
  )
}
