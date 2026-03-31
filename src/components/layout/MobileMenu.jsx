import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import { navigation } from '../../data/navigation'

export default function MobileMenu({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50 md:hidden">
      <div className="fixed inset-0 bg-charcoal/30" aria-hidden="true" />
      <Dialog.Panel className="fixed inset-y-0 right-0 w-full max-w-sm bg-cream p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg font-bold text-charcoal">Menu</span>
          <button onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="mt-8 flex flex-col gap-4">
          {navigation.mobile.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="text-lg text-warm-gray transition-colors hover:text-charcoal"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </Dialog.Panel>
    </Dialog>
  )
}
