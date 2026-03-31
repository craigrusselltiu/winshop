import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

const sections = [
  {
    heading: '1. General Terms',
    body: `By accessing and using the Winshop Australia website (winshopaustralia.com.au), you accept and agree to be bound by these Terms and Conditions. Winshop Australia is operated by Winshop Pty Ltd (ABN 20 652 298 121), incorporated in New South Wales, Australia. We reserve the right to update these terms at any time without prior notice. Your continued use of the website after changes constitutes acceptance of the revised terms.`,
  },
  {
    heading: '2. Products',
    body: `All products listed on our website are subject to availability. We reserve the right to discontinue any product at any time. Product descriptions, images, and specifications are provided in good faith and are as accurate as possible; however, we do not warrant that all descriptions are complete or error-free. Colours may vary slightly from those displayed on screen due to monitor calibration differences.`,
  },
  {
    heading: '3. Pricing',
    body: `All prices are displayed in Australian Dollars (AUD) and include GST where applicable. Prices are subject to change without notice. We reserve the right to correct pricing errors on our website. If a product is listed at an incorrect price, we will notify you before processing your order and give you the option to proceed at the correct price or cancel.`,
  },
  {
    heading: '4. Payment',
    body: `Payment is processed securely through Stripe. We accept Visa, Mastercard, American Express, Apple Pay, and Google Pay. All transactions are encrypted using industry-standard SSL technology. Payment must be made in full before orders are processed and dispatched. Winshop Pty Ltd does not store your payment card details.`,
  },
  {
    heading: '5. Delivery',
    body: `Orders are processed within 3-5 business days. Delivery timeframes vary by location and shipping method selected at checkout. We ship via Australia Post to addresses within Australia and New Zealand. We are not responsible for delays caused by Australia Post or other circumstances beyond our reasonable control. Risk of loss transfers to the customer upon dispatch.`,
  },
  {
    heading: '6. Returns',
    body: `We accept returns for defective or faulty items only. You must contact us within 48 hours of receiving a faulty item at enquiries@winshopaustralia.com.au with your order number and photographic evidence of the fault. We do not accept change-of-mind returns. If a return is approved, items must be unworn, unwashed, and in their original condition. Return shipping costs for approved claims will be covered by Winshop Pty Ltd.`,
  },
  {
    heading: '7. Limitation of Liability',
    body: `To the maximum extent permitted by Australian consumer law, Winshop Pty Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website. Our total liability to you for any claim shall not exceed the purchase price of the product(s) in question. Nothing in these terms excludes, restricts, or modifies any right or remedy, or any guarantee, warranty, or other term or condition that cannot be excluded under the Australian Consumer Law.`,
  },
  {
    heading: '8. Governing Law',
    body: `These Terms and Conditions are governed by the laws of New South Wales, Australia. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of New South Wales. If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect.`,
  },
  {
    heading: '9. Contact',
    body: `For questions about these Terms and Conditions, please contact us at enquiries@winshopaustralia.com.au or write to: Winshop Pty Ltd (ABN 20 652 298 121), Suite 8382, 57 Macquarie Street, Parramatta NSW 2150, Australia.`,
  },
]

export default function TermsPage() {
  useDocumentTitle('Terms & Conditions')

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
            <span className="overline mb-4 block">Legal</span>
            <h1 className="font-serif text-display font-bold text-charcoal">
              Terms &amp; Conditions
            </h1>
            <p className="mt-5 text-body text-warm-gray">
              Last updated: January 2025. Operated by Winshop Pty Ltd (ABN 20 652 298 121).
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="section">
        <Container width="narrow">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={section.heading}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <h2 className="font-serif text-heading-2 font-bold text-charcoal">
                  {section.heading}
                </h2>
                <p className="mt-3 text-body text-warm-gray leading-relaxed">
                  {section.body}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
