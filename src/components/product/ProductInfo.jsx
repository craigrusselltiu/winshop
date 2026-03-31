import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/cn'

function AccordionItem({ title, children, defaultOpen = false }) {
  return (
    <Disclosure as="div" className="border-t border-sand" defaultOpen={defaultOpen}>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between py-4 text-left">
            <span className="font-sans text-body-sm font-semibold uppercase tracking-[0.08em] text-charcoal">
              {title}
            </span>
            <ChevronDown
              size={16}
              strokeWidth={1.5}
              className={cn(
                'shrink-0 text-warm-gray transition-transform duration-300',
                open && 'rotate-180',
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="pb-5 text-body-sm text-warm-gray leading-relaxed">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default function ProductInfo({ product }) {
  return (
    <div className="mt-2 border-b border-sand">
      <AccordionItem title="Description" defaultOpen>
        <p>{product.description}</p>
      </AccordionItem>

      <AccordionItem title="Fabric & Care">
        <div className="space-y-3">
          <p>
            <span className="font-medium text-charcoal">Material:</span>{' '}
            {product.fabric}
          </p>
          <ul className="space-y-1.5 pl-4">
            <li className="list-disc">Hand wash cold or machine wash on gentle cycle</li>
            <li className="list-disc">Hang dry — do not tumble dry on high heat</li>
            <li className="list-disc">Do not bleach</li>
            <li className="list-disc">Do not iron directly on printed area</li>
            <li className="list-disc">Wash inside out to preserve print quality</li>
          </ul>
        </div>
      </AccordionItem>

      <AccordionItem title="Shipping">
        <div className="space-y-2">
          <p>Ships within 3-5 business days via Australia Post.</p>
          <p>Free shipping on orders over A$150.</p>
          <p>Standard NSW: 2-4 days &middot; Interstate: 3-6 days</p>
          <p>Express NSW: 1-2 days &middot; Interstate: 1-3 days</p>
        </div>
      </AccordionItem>
    </div>
  )
}
