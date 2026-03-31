import useDocumentTitle from '../hooks/useDocumentTitle'
import HeroSection from '../components/home/HeroSection'
import CategoryShowcase from '../components/home/CategoryShowcase'
import ValuePropositions from '../components/home/ValuePropositions'
import FeaturedProducts from '../components/home/FeaturedProducts'
import AboutSnippet from '../components/home/AboutSnippet'
import NewsletterSignup from '../components/home/NewsletterSignup'

export default function HomePage() {
  useDocumentTitle(null)

  return (
    <div>
      <HeroSection />
      <CategoryShowcase />
      <ValuePropositions />
      <FeaturedProducts />
      <AboutSnippet />
      <NewsletterSignup />
    </div>
  )
}
