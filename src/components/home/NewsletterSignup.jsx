import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Container from '../ui/Container'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch('https://formspree.io/f/winshop-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-16 md:py-22 bg-charcoal overflow-hidden">
      <Container width="narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <span className="block font-sans text-caption font-semibold uppercase tracking-[0.15em] text-sand mb-4">
            Newsletter
          </span>
          <h2 className="font-serif text-heading-1 font-bold text-cream text-balance">
            Get 10% Off Your First Order
          </h2>
          <p className="mt-4 text-body text-sand/70 leading-relaxed">
            Join our newsletter for exclusive deals and sublimation tips.
          </p>

          {status === 'success' ? (
            <div className="mt-8 flex items-center justify-center gap-3 text-sage">
              <CheckCircle size={22} strokeWidth={1.5} />
              <span className="font-sans text-body font-medium">
                You&rsquo;re subscribed — check your inbox for your discount code.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-warm-gray/40 bg-charcoal px-5 py-3 font-sans text-body text-cream placeholder:text-warm-gray/60 focus:border-terracotta focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 bg-terracotta px-8 py-3 font-sans text-body-sm font-medium uppercase tracking-[0.1em] text-cream transition-colors duration-200 hover:bg-terracotta-dark disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-cream border-t-transparent" />
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="mt-3 text-body-sm text-terracotta">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
