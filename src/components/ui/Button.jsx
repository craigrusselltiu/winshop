import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

const variantStyles = {
  primary: [
    'bg-terracotta text-cream',
    'hover:bg-terracotta-dark',
    'focus-visible:outline-terracotta',
  ].join(' '),
  secondary: [
    'border border-charcoal text-charcoal',
    'hover:bg-charcoal hover:text-cream',
    'focus-visible:outline-charcoal',
  ].join(' '),
  ghost: [
    'text-charcoal',
    'hover:text-terracotta',
    'focus-visible:outline-terracotta',
  ].join(' '),
}

const sizeStyles = {
  sm: 'px-5 py-2 text-caption gap-1.5',
  md: 'px-8 py-3 text-body-sm gap-2',
  lg: 'px-10 py-4 text-body gap-2.5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  children,
  className,
  disabled,
  loading,
  icon,
  iconRight,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center',
    'font-sans font-medium uppercase tracking-[0.1em]',
    'transition-colors duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'select-none',
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'pointer-events-none opacity-40',
    loading && 'pointer-events-none',
    className,
  )

  const content = (
    <>
      {loading ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : icon ? (
        <span className="shrink-0">{icon}</span>
      ) : null}
      <span>{children}</span>
      {iconRight && !loading && (
        <span className="shrink-0">{iconRight}</span>
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <motion.button
      className={classes}
      disabled={disabled || loading}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
