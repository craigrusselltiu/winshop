import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-terracotta text-cream hover:bg-terracotta-dark',
  secondary: 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream',
  ghost: 'text-warm-gray hover:text-charcoal',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({ variant = 'primary', size = 'md', to, children, className = '', ...props }) {
  const classes = `inline-flex items-center justify-center font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
