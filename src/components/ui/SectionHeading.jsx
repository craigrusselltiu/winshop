import { cn } from '../../utils/cn'

export default function SectionHeading({
  title,
  subtitle,
  overline,
  align = 'center',
  as: Tag = 'h2',
  className,
}) {
  return (
    <div
      className={cn(
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className,
      )}
    >
      {overline && (
        <span className="overline mb-4 block">{overline}</span>
      )}
      <Tag className="font-serif text-heading-2 font-bold text-charcoal text-balance">
        {title}
      </Tag>
      {subtitle && (
        <p className={cn(
          'mt-3 max-w-xl text-body text-warm-gray leading-relaxed',
          align === 'center' && 'mx-auto',
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
