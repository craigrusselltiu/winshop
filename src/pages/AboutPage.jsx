import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

export default function AboutPage() {
  useDocumentTitle('About Us')

  return (
    <section className="py-12">
      <Container>
        <h1 className="font-serif text-3xl font-bold text-charcoal">About Us</h1>
      </Container>
    </section>
  )
}
