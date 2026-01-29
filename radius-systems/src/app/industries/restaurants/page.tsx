import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import RestaurantPageContent from './RestaurantPageContent'

export const metadata: Metadata = {
  title: 'Marketing Systems for Restaurants | Radius Systems',
  description: 'Get more reservations with a custom website, automated follow-ups, and review management. Built for restaurants and food service.',
}

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <RestaurantPageContent />
      <Footer />
    </main>
  )
}
