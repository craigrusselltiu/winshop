import useDocumentTitle from '../hooks/useDocumentTitle'
import HeroSection from '../components/home/HeroSection'

export default function HomePage() {
  useDocumentTitle(null)

  return (
    <div>
      <HeroSection />
    </div>
  )
}
