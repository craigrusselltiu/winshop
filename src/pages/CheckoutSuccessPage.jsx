import { CheckCircle } from 'lucide-react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'

export default function CheckoutSuccessPage() {
  useDocumentTitle('Order Confirmed')

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <CheckCircle size={64} className="mx-auto text-sage" />
          <h1 className="mt-6 font-serif text-3xl font-bold text-charcoal">Thank you for your order!</h1>
          <p className="mt-4 text-warm-gray">
            You'll receive a confirmation email shortly.
          </p>
          <p className="mt-2 text-sm text-warm-gray">
            Questions? Contact us at enquiries@winshopaustralia.com.au
          </p>
          <div className="mt-8">
            <Button to="/shop">Continue Shopping</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
