import { Listbox } from '@headlessui/react'
import { ChevronDown, Check } from 'lucide-react'
import { sortOptions } from '../../data/categories'
import { cn } from '../../utils/cn'

export default function SortDropdown({ value, onChange }) {
  const selected = sortOptions.find((o) => o.value === value) || sortOptions[0]

  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button
          className={cn(
            'flex items-center gap-2 border border-sand bg-cream',
            'px-4 py-2 text-body-sm font-sans text-charcoal',
            'transition-colors duration-200',
            'hover:border-charcoal',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta',
          )}
        >
          <span className="text-warm-gray mr-1">Sort:</span>
          <span className="font-medium">{selected.label}</span>
          <ChevronDown className="h-4 w-4 text-warm-gray" />
        </Listbox.Button>

        <Listbox.Options
          className={cn(
            'absolute right-0 z-20 mt-1 w-52 origin-top-right',
            'border border-sand bg-cream shadow-elevated',
            'focus:outline-none',
          )}
        >
          {sortOptions.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option.value}
              className={({ active }) =>
                cn(
                  'flex cursor-pointer items-center justify-between px-4 py-2.5 text-body-sm',
                  active ? 'bg-beige text-charcoal' : 'text-warm-gray',
                )
              }
            >
              {({ selected: isSel }) => (
                <>
                  <span className={isSel ? 'font-medium text-charcoal' : ''}>
                    {option.label}
                  </span>
                  {isSel && <Check className="h-4 w-4 text-terracotta" />}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}
