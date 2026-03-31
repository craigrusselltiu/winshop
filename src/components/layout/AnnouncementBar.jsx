import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative bg-charcoal px-4 py-2 text-center text-sm text-cream">
      <p>Free shipping on orders over $150 AUD</p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/70 hover:text-cream"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  )
}
