import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import { faqData } from '../data/faq'
import { cn } from '../utils/cn'

export default function FAQPage() {
  useDocumentTitle('FAQ')

  return (
    <div>
      {/* Hero */}
      <section className="bg-beige py-16 md:py-22">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl"
          >
            <span className="overline mb-4 block">Help Centre</span>
            <h1 className="font-serif text-display font-bold text-charcoal">
              Frequently Asked Questions
            </h1>
            <p className="mt-5 text-body text-warm-gray leading-relaxed">
              Can&rsquo;t find what you&rsquo;re looking for?{' '}
              <Link to="/contact" className="underline underline-offset-2">Contact us</Link> and
              we&rsquo;ll be happy to help.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* FAQ content */}
      <section className="section">
        <Container width="narrow">
          <div className="space-y-14">
            {faqData.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: gi * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h2 className="mb-6 font-serif text-heading-2 font-bold text-charcoal">
                  {group.category}
                </h2>
                <div className="border-t border-sand">
                  {group.items.map((item, ii) => (
                    <Disclosure key={ii} as="div" className="border-b border-sand">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-start justify-between gap-6 py-5 text-left">
                            <span className="font-sans text-body font-medium text-charcoal">
                              {item.question}
                            </span>
                            <ChevronDown
                              size={18}
                              strokeWidth={1.5}
                              className={cn(
                                'mt-0.5 shrink-0 text-warm-gray transition-transform duration-300',
                                open && 'rotate-180',
                              )}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="pb-5 text-body text-warm-gray leading-relaxed">
                            {item.answer}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
