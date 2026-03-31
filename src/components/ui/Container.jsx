import { cn } from '../../utils/cn'

const widths = {
  narrow: 'max-w-narrow',
  default: 'max-w-content',
  wide: 'max-w-wide',
}

export default function Container({ width = 'default', as: Tag = 'div', children, className, ...props }) {
  return (
    <Tag
      className={cn('mx-auto px-5 sm:px-8', widths[width], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
