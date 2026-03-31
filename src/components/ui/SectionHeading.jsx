export default function SectionHeading({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-serif text-3xl font-bold text-charcoal sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-warm-gray">{subtitle}</p>}
    </div>
  )
}
