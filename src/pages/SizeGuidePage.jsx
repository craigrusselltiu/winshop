import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

export default function SizeGuidePage() {
  useDocumentTitle('Size Guide')

  return (
    <section className="py-12">
      <Container>
        <h1 className="font-serif text-3xl font-bold text-charcoal">Size Guide</h1>
      </Container>
    </section>
  )
}
