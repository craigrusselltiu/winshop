import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, MapPin, ExternalLink, CheckCircle } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

const subjects = [
  'General Inquiry',
  'Custom Order',
  'Order Help',
  'Wholesale',
  'Feedback',
  'Other',
]

const infoItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'enquiries@winshopaustralia.com.au',
    href: 'mailto:enquiries@winshopaustralia.com.au',
  },
  {
    icon: Clock,
    label: 'Trading Hours',
    value: 'Mon-Fri 9AM-5PM AEST\nClosed weekends & public holidays',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Suite 8382, 57 Macquarie Street\nParramatta NSW 2150, Australia',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function ContactPage() {
  useDocumentTitle('Contact')

  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' })
  const [status, setStatus] = useState('idle')

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/winshop-contact', {
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
            <motion.span className="overline mb-4 block" variants={fadeUp}>Get in Touch</motion.span>
            <motion.h1 className="font-serif text-display font-bold text-charcoal" variants={fadeUp}>
              Contact Us
            </motion.h1>
            <motion.p className="mt-5 text-body text-warm-gray leading-relaxed" variants={fadeUp}>
              Have a question or need help with an order? We&rsquo;d love to hear from you.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Two-column layout */}
      <section className="section">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Info column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-8"
            >
              <p className="text-body text-warm-gray leading-relaxed">
                For custom orders and enquiries, the quickest way to reach us is by email
                at{' '}
                <a
                  href="mailto:enquiries@winshopaustralia.com.au"
                  className="font-medium text-charcoal hover:text-terracotta"
                >
                  enquiries@winshopaustralia.com.au
                </a>{' '}
                or by filling in the form below. This helps us process every
                request — including yours — as efficiently as possible. We aim to
                respond to all enquiries within 3 working days. If email isn&rsquo;t an
                option, you&rsquo;re welcome to reach out via
                our{' '}
                <a
                  href="https://facebook.com/winshopaustralia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-charcoal hover:text-terracotta"
                >
                  Facebook page
                </a>
                .
              </p>

              {infoItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center border border-sand">
                      <Icon size={16} strokeWidth={1.5} className="text-terracotta" />
                    </div>
                    <div>
                      <p className="font-sans text-caption font-semibold uppercase tracking-[0.1em] text-warm-gray">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-body text-charcoal hover:text-terracotta"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 whitespace-pre-line text-body text-charcoal">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Social */}
              <div className="flex gap-5 pt-2">
                <a
                  href="https://facebook.com/winshopaustralia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-body-sm font-semibold uppercase tracking-[0.08em] text-charcoal hover:text-terracotta"
                >
                  Facebook
                  <ExternalLink size={11} />
                </a>
                <a
                  href="https://instagram.com/winshopau"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-body-sm font-semibold uppercase tracking-[0.08em] text-charcoal hover:text-terracotta"
                >
                  Instagram
                  <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>

            {/* Form column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <CheckCircle size={48} strokeWidth={1} className="text-sage" />
                  <h2 className="font-serif text-heading-2 font-bold text-charcoal">
                    Message Sent
                  </h2>
                  <p className="text-body text-warm-gray">
                    Thanks for reaching out — we&rsquo;ll get back to you within 3 working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        className="input"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        className="input"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                      Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={update('subject')}
                      className="input appearance-none"
                    >
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block font-sans text-body-sm font-medium text-charcoal">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={update('message')}
                      className="input resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-body-sm text-terracotta">
                      Something went wrong. Please try again or email us directly.
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
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}
