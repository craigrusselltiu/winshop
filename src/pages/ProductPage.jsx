import { useParams } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import { getProductBySlug } from '../data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  useDocumentTitle(product?.name || 'Product Not Found')

  if (!product) {
    return (
      <section className="py-12">
        <Container>
          <p className="text-warm-gray">Product not found.</p>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-12">
      <Container>
        <h1 className="font-serif text-3xl font-bold text-charcoal">{product.name}</h1>
      </Container>
    </section>
  )
}
