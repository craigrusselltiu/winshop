import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, Facebook } from 'lucide-react'
import { navigation } from '../../data/navigation'

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring', damping: 30, stiffness: 300 },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: [0.4, 0, 1, 1] },
  },
}

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.04, duration: 0.35, ease: [0.23, 1, 0.32, 1] },
  }),
}

export default function MobileMenu({ open, onClose }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50 md:hidden">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm" aria-hidden="true" />
        </Transition.Child>

        {/* Panel */}
        <AnimatePresence>
          {open && (
            <Dialog.Panel
              as={motion.div}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 right-0 flex w-full max-w-[20rem] flex-col bg-cream shadow-elevated"
            >
              {/* Header row */}
              <div className="flex items-center justify-between border-b border-sand/60 px-6 py-5">
                <span className="font-serif text-lg font-bold tracking-tight text-charcoal">
                  Menu
                </span>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center text-warm-gray transition-colors duration-200 hover:text-charcoal"
                  aria-label="Close menu"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto px-6 py-6" role="navigation">
                {/* Shop links */}
                <motion.p
                  className="text-overline font-sans font-semibold uppercase tracking-[0.15em] text-warm-gray"
                  variants={linkVariants}
                  custom={0}
                  initial="hidden"
                  animate="visible"
                >
                  Shop
                </motion.p>
                <ul className="mt-3 space-y-0.5">
                  {navigation.mobileShop.map((item, i) => (
                    <motion.li
                      key={item.href}
                      variants={linkVariants}
                      custom={i + 1}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="mobile-nav-link"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="my-5 border-t border-sand/60" />

                {/* Info links */}
                <motion.p
                  className="text-overline font-sans font-semibold uppercase tracking-[0.15em] text-warm-gray"
                  variants={linkVariants}
                  custom={navigation.mobileShop.length + 2}
                  initial="hidden"
                  animate="visible"
                >
                  Information
                </motion.p>
                <ul className="mt-3 space-y-0.5">
                  {navigation.mobileInfo.map((item, i) => (
                    <motion.li
                      key={item.href}
                      variants={linkVariants}
                      custom={navigation.mobileShop.length + 3 + i}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        to={item.href}
                        onClick={onClose}
                        className="mobile-nav-link"
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer with social links */}
              <div className="border-t border-sand/60 px-6 py-5">
                <div className="flex items-center gap-4">
                  <a
                    href="https://instagram.com/winshopau"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center text-warm-gray transition-colors duration-200 hover:text-charcoal"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} strokeWidth={1.5} />
                  </a>
                  <a
                    href="https://facebook.com/winshopaustralia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center text-warm-gray transition-colors duration-200 hover:text-charcoal"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} strokeWidth={1.5} />
                  </a>
                </div>
                <p className="mt-3 text-[0.7rem] tracking-wide text-warm-gray/70">
                  enquiries@winshopaustralia.com.au
                </p>
              </div>
            </Dialog.Panel>
          )}
        </AnimatePresence>
      </Dialog>
    </Transition>
  )
}
