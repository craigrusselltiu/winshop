import { motion } from 'framer-motion'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

const sections = [
  {
    heading: '1. Introduction',
    body: `Winshop Pty Ltd (ABN 20 652 298 121) ("Winshop", "we", "us") is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit winshopaustralia.com.au or purchase from us.`,
  },
  {
    heading: '2. Data We Collect',
    body: `We may collect the following types of personal information: (a) Identity information — your name, username, or similar identifiers; (b) Contact information — billing and delivery address, email address, phone number; (c) Transaction data — details about purchases you make from us; (d) Technical data — IP address, browser type and version, time zone, operating system; (e) Usage data — information about how you use our website. We collect this information when you place an order, register an account, subscribe to our newsletter, contact us, or browse our website.`,
  },
  {
    heading: '3. How We Use Your Data',
    body: `We use your personal information to: (a) Process and fulfil your orders; (b) Send order confirmations and shipping updates; (c) Respond to enquiries and provide customer support; (d) Send marketing communications (only where you have given consent or opted in); (e) Improve our website and product offerings; (f) Comply with legal obligations. We will not use your data for any purpose other than those listed here without your consent.`,
  },
  {
    heading: '4. Third-Party Sharing',
    body: `We share personal information only with: (a) Stripe — our payment processor, which handles all payment data under its own privacy policy; (b) Australia Post — for delivery of your order; (c) Formspree — for processing contact and enquiry form submissions; (d) Google Analytics — for anonymous website analytics. We do not sell, rent, or trade your personal information to third parties for marketing purposes.`,
  },
  {
    heading: '5. Age Restrictions',
    body: `Our website and services are intended for users aged 16 years and over. We do not knowingly collect personal information from children under the age of 16. If you believe we have inadvertently collected information from a person under 16, please contact us immediately and we will take steps to delete the information.`,
  },
  {
    heading: '6. Data Security',
    body: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. All payment information is processed by Stripe using industry-standard TLS encryption. We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy or as required by law.`,
  },
  {
    heading: '7. Your Rights',
    body: `Under the Australian Privacy Principles, you have the right to: (a) Access the personal information we hold about you; (b) Request correction of inaccurate or outdated information; (c) Opt out of direct marketing communications at any time; (d) Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) if you believe your privacy rights have been breached. To exercise these rights, please contact us using the details below.`,
  },
  {
    heading: '8. Cookies',
    body: `Our website uses cookies and similar tracking technologies to improve your browsing experience and analyse website traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of some parts of our website.`,
  },
  {
    heading: '9. Contact Us',
    body: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Privacy Officer at enquiries@winshopaustralia.com.au or write to: Winshop Pty Ltd (ABN 20 652 298 121), Suite 8382, 57 Macquarie Street, Parramatta NSW 2150, Australia.`,
  },
]

export default function PrivacyPage() {
  useDocumentTitle('Privacy Policy')

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
              Privacy Policy
            </h1>
            <p className="mt-5 text-body text-warm-gray">
              Last updated: January 2025. We are committed to protecting your personal information in accordance with Australian privacy laws.
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
