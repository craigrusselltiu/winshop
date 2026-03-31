import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import FeaturedProducts from '../components/home/FeaturedProducts'

export default function HomePage() {
  useDocumentTitle(null)

  return (
    <div>
      <section className="bg-beige py-24">
        <Container>
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold text-charcoal sm:text-5xl lg:text-6xl">
              Simplify Your Custom Apparel with Sublimation Magic
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-warm-gray">
              Premium sublimation-ready blanks for your creative business. Australian owned, ethically made.
            </p>
          </div>
        </Container>
      </section>

      <FeaturedProducts />
    </div>
  )
}
