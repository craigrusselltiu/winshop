import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1 text-sm text-warm-gray">
        <li>
          <Link to="/" className="hover:text-charcoal">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={14} />
            {item.href ? (
              <Link to={item.href} className="hover:text-charcoal">{item.label}</Link>
            ) : (
              <span className="text-charcoal">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
