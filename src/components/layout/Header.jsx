import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { navigation } from '../../data/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 40)
  })

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.header
        className={[
          'sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-500',
          scrolled
            ? 'border-b border-sand/80 bg-cream/90 backdrop-blur-md'
            : 'border-b border-transparent bg-cream',
        ].join(' ')}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="group relative flex items-baseline gap-2 py-5 no-underline"
          >
            <span className="font-serif text-[1.4rem] font-bold tracking-tight text-charcoal transition-colors duration-300 sm:text-[1.6rem]">
              WINSHOP
            </span>
            <span className="hidden text-[0.65rem] font-sans font-medium tracking-[0.2em] text-warm-gray transition-colors duration-300 group-hover:text-terracotta sm:inline">
              AUSTRALIA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex" role="navigation">
            {navigation.main.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  ['nav-link', isActive ? 'nav-link--active' : ''].join(' ')
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="relative flex h-10 w-10 items-center justify-center text-charcoal transition-colors duration-200 hover:text-terracotta md:hidden"
            aria-label="Open navigation menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
