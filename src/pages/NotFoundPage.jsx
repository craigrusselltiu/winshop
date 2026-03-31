import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function NotFoundPage() {
  useDocumentTitle('Page Not Found')

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <h1 className="font-serif text-4xl font-bold text-charcoal">Page Not Found</h1>
          <p className="mt-4 text-warm-gray">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button to="/" variant="secondary">Go Home</Button>
            <Button to="/shop">Shop Now</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
