import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import { cn } from '../utils/cn'

const sections = [
  {
    title: 'Processing Time',
    content: 'Orders are processed within 3-5 business days before dispatch. You will receive a tracking number via email once your order has been shipped. Processing times may be extended during peak periods and public holidays.',
  },
  {
    title: 'Standard Shipping — NSW',
    content: 'Standard shipping to New South Wales addresses takes 2-4 business days from the date of dispatch.',
  },
  {
    title: 'Standard Shipping — Interstate',
    content: 'Standard shipping to all other Australian states and territories takes 3-6 business days from the date of dispatch.',
  },
  {
    title: 'Express Shipping — NSW',
    content: 'Express shipping to New South Wales addresses typically arrives within 1-2 business days from the date of dispatch.',
  },
  {
    title: 'Express Shipping — Interstate',
    content: 'Express shipping to all other Australian states and territories typically arrives within 1-3 business days from the date of dispatch.',
  },
  {
    title: 'Shipping Carrier',
    content: "All orders are shipped via Australia Post. Once dispatched, tracking information will be provided via email so you can monitor your parcel's progress.",
  },
  {
    title: 'Postage Rates',
    content: 'Postage rates are calculated at checkout based on your location and the total weight of your order. We ship within Australia and to New Zealand. Free standard shipping is available on orders over A$150.',
  },
  {
    title: 'Shipping Insurance',
    content: 'We recommend purchasing shipping insurance for orders exceeding A$200. Insurance can be selected at checkout and provides peace of mind against loss or damage during transit.',
  },
  {
    title: 'Returns Policy',
    content: 'We accept returns for defective or faulty items only. If you receive a defective product, please contact us at enquiries@winshopaustralia.com.au within 48 hours of delivery with your order number and photos of the fault. We do not accept change-of-mind returns. Items must be unworn, unwashed, and in original condition to be eligible.',
  },
  {
    title: 'Colour Disclaimer',
    content: 'Colours displayed on screen may vary slightly from the physical garment due to differences in monitor calibration, screen brightness, and device settings. For sublimation printing, we recommend doing a test press on a swatch before a full production run, as colour results can also vary depending on your printer, inks, and press settings.',
  },
]

export default function ShippingReturnsPage() {
  useDocumentTitle('Shipping & Returns')

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
            <span className="overline mb-4 block">Delivery Information</span>
            <h1 className="font-serif text-display font-bold text-charcoal">
              Shipping &amp; Returns
            </h1>
            <p className="mt-5 text-body text-warm-gray leading-relaxed">
              Everything you need to know about delivery times, postage rates,
              and our returns process.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Accordion */}
      <section className="section">
        <Container width="narrow">
          <div className="border-t border-sand">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Disclosure as="div" className="border-b border-sand">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between py-5 text-left">
                        <span className="font-sans text-body font-semibold text-charcoal">
                          {section.title}
                        </span>
                        <ChevronDown
                          size={18}
                          strokeWidth={1.5}
                          className={cn(
                            'shrink-0 text-warm-gray transition-transform duration-300',
                            open && 'rotate-180',
                          )}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pb-6 text-body text-warm-gray leading-relaxed">
                        {section.content}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
