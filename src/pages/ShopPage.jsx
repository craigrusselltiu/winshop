import { useParams } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'

export default function ShopPage() {
  const { category } = useParams()
  useDocumentTitle(category ? `Shop ${category}` : 'Shop')

  return (
    <section className="py-12">
      <Container>
        <h1 className="font-serif text-3xl font-bold text-charcoal">Shop{category ? ` - ${category}` : ''}</h1>
      </Container>
    </section>
  )
}
