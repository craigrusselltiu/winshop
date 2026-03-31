import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { navigation } from '../../data/navigation'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-sand bg-cream">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-serif text-2xl font-bold text-charcoal">
          Winshop Australia
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.main.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-warm-gray transition-colors hover:text-charcoal"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
