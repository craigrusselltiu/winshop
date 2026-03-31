import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Clock } from 'lucide-react'
import { BUSINESS } from '../../utils/constants'

const shopLinks = [
  { name: 'Adult', href: '/shop/adult' },
  { name: 'Kids', href: '/shop/kids' },
  { name: 'Infant', href: '/shop/infant' },
  { name: 'Wholesale', href: '/wholesale' },
]

const infoLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Size Guide', href: '/size-guide' },
  { name: 'Shipping & Returns', href: '/shipping-returns' },
  { name: 'FAQ', href: '/faq' },
]

const socials = [
  { name: 'Facebook', href: BUSINESS.social.facebook },
  { name: 'Instagram', href: BUSINESS.social.instagram },
]

function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-overline font-sans font-semibold uppercase tracking-[0.15em] text-cream/40">
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-body-sm text-cream/60 transition-colors duration-200 hover:text-cream"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      {/* Main content */}
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid gap-12 pb-12 pt-16 md:grid-cols-12 md:gap-8 lg:pb-16 lg:pt-20">
          {/* Brand column */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link
              to="/"
              className="font-serif text-heading-3 font-bold text-cream hover:text-cream"
            >
              Winshop Australia
            </Link>
            <p className="mt-4 max-w-xs text-body-sm leading-relaxed text-cream/50">
              Premium sublimation-ready apparel blanks for the Australian
              market. Ethically made, locally owned.
            </p>
            <div className="mt-8 flex gap-5">
              {socials.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-caption font-sans uppercase tracking-[0.15em] text-cream/40 transition-colors duration-200 hover:text-terracotta"
                >
                  {link.name}
                  <ArrowUpRight
                    size={11}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 lg:col-span-8">
            <FooterLinkColumn title="Shop" links={shopLinks} />
            <FooterLinkColumn title="Information" links={infoLinks} />

            {/* Contact column */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-overline font-sans font-semibold uppercase tracking-[0.15em] text-cream/40">
                Contact
              </h4>
              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="inline-flex items-start gap-2 text-body-sm text-cream/60 transition-colors duration-200 hover:text-cream"
                  >
                    <Mail size={14} className="mt-1 shrink-0" />
                    <span>{BUSINESS.email}</span>
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 text-body-sm text-cream/40">
                  <Clock size={14} className="shrink-0" />
                  <span>{BUSINESS.hours}</span>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-body-sm text-cream/60 transition-colors duration-200 hover:text-cream"
                  >
                    Contact Form
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Large editorial brand text */}
      <div className="overflow-hidden border-t border-cream/[0.06]">
        <motion.div
          className="select-none py-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-serif font-bold uppercase tracking-[0.05em] text-cream/[0.05]"
            style={{ fontSize: 'clamp(4rem, 13vw, 12rem)', lineHeight: '1' }}
          >
            Winshop
          </span>
        </motion.div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-cream/[0.06]">
        <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8">
          <p className="text-caption text-cream/25">
            &copy; {new Date().getFullYear()} Winshop Pty Ltd (ABN
            20652298121). All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/terms"
              className="text-caption text-cream/25 transition-colors duration-200 hover:text-cream/50"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/privacy"
              className="text-caption text-cream/25 transition-colors duration-200 hover:text-cream/50"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
