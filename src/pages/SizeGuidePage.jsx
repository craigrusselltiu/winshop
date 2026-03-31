import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'
import { Thermometer, Info } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import { sizeCharts, sizeChartTabs, howToMeasure, sublimationTip, measurementDisclaimer } from '../data/sizeCharts'
import { cn } from '../utils/cn'

function SizeTable({ chart }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-sand bg-beige">
            {chart.headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-sans text-caption font-semibold uppercase tracking-[0.08em] text-warm-gray"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {chart.rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                'border-b border-sand transition-colors duration-150 hover:bg-beige/50',
                i % 2 === 0 ? 'bg-cream' : 'bg-white/50',
              )}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    'px-4 py-3 font-sans text-body-sm text-charcoal',
                    j === 0 && 'font-semibold',
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function SizeGuidePage() {
  useDocumentTitle('Size Guide')

  return (
    <div>
      {/* Hero */}
      <section className="bg-beige py-16 md:py-22">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-xl"
          >
            <span className="overline mb-4 block">Sizing</span>
            <h1 className="font-serif text-display font-bold text-charcoal">Size Guide</h1>
            <p className="mt-5 text-body text-warm-gray leading-relaxed">
              All measurements are in centimetres unless otherwise noted. We recommend
              measuring a garment that already fits you well and comparing.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Tabs + charts */}
      <section className="section">
        <Container>
          <Tab.Group>
            <Tab.List className="mb-10 flex flex-wrap gap-2 border-b border-sand pb-px">
              {sizeChartTabs.map((tab) => (
                <Tab
                  key={tab.key}
                  className={({ selected }) =>
                    cn(
                      'relative pb-3 font-sans text-body-sm font-medium uppercase tracking-[0.08em] transition-colors duration-200 focus:outline-none',
                      'mr-6',
                      selected
                        ? 'text-charcoal after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-terracotta'
                        : 'text-warm-gray hover:text-charcoal',
                    )
                  }
                >
                  {tab.label}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              {sizeChartTabs.map((tab) => {
                const chart = sizeCharts[tab.key]
                return (
                  <Tab.Panel key={tab.key}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="mb-4">
                        <h2 className="font-serif text-heading-2 font-bold text-charcoal">
                          {chart.label}
                        </h2>
                        <p className="mt-1 text-body-sm text-warm-gray">{chart.description}</p>
                      </div>
                      <SizeTable chart={chart} />
                    </motion.div>
                  </Tab.Panel>
                )
              })}
            </Tab.Panels>
          </Tab.Group>

          {/* Disclaimer */}
          <div className="mt-6 flex gap-3 rounded-none border border-sand bg-beige p-4">
            <Info size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-warm-gray" />
            <p className="text-body-sm text-warm-gray leading-relaxed">{measurementDisclaimer}</p>
          </div>
        </Container>
      </section>

      {/* How to measure */}
      <section className="section bg-beige">
        <Container>
          <div className="mb-10">
            <span className="overline mb-4 block">Instructions</span>
            <h2 className="font-serif text-heading-1 font-bold text-charcoal">How to Measure</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howToMeasure.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-sand bg-cream p-6"
              >
                <span className="block font-serif text-display font-bold leading-none text-sand/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif text-heading-3 font-bold text-charcoal">
                  {item.label}
                </h3>
                <p className="mt-2 text-body-sm text-warm-gray leading-relaxed">
                  {item.instruction}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sublimation tip */}
      <section className="py-12">
        <Container width="narrow">
          <div className="flex gap-4 border border-terracotta/30 bg-terracotta/5 p-6">
            <Thermometer size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-terracotta" />
            <div>
              <p className="font-sans text-body-sm font-semibold text-charcoal">
                Sublimation Tip — {sublimationTip.temperature} for {sublimationTip.duration}
              </p>
              <p className="mt-1 text-body-sm text-warm-gray leading-relaxed">
                {sublimationTip.text}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
