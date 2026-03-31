import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

export default function PrivacyPage() {
  useDocumentTitle('Privacy Policy')

  return (
    <section className="py-12">
      <Container>
        <h1 className="font-serif text-3xl font-bold text-charcoal">Privacy Policy</h1>
      </Container>
    </section>
  )
}
