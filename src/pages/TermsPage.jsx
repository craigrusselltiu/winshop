import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

export default function TermsPage() {
  useDocumentTitle('Terms & Conditions')

  return (
    <section className="py-12">
      <Container>
        <h1 className="font-serif text-3xl font-bold text-charcoal">Terms & Conditions</h1>
      </Container>
    </section>
  )
}
