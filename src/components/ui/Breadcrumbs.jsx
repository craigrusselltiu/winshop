import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { cn } from '../../utils/cn'

export default function Breadcrumbs({ items, className }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('mb-8', className)}>
      <ol className="flex flex-wrap items-center gap-1 text-caption font-sans uppercase tracking-[0.08em] text-warm-gray">
        <li>
          <Link
            to="/"
            className="transition-colors duration-200 hover:text-charcoal"
          >
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            <ChevronRight size={12} strokeWidth={1.5} className="text-sand" />
            {item.href ? (
              <Link
                to={item.href}
                className="transition-colors duration-200 hover:text-charcoal"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-charcoal" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
