import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ChiropractorPageContent from './ChiropractorPageContent'

export const metadata: Metadata = {
  title: 'Marketing Systems for Chiropractors | Radius Systems',
  description: 'Get more patients with a custom website, automated appointment reminders, and review management. Built for chiropractic practices.',
}

export default function ChiropractorsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ChiropractorPageContent />
      <Footer />
    </main>
  )
}
