import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactPageContent from './ContactPageContent'

export const metadata: Metadata = {
  title: 'Book a Call | Radius Systems',
  description: 'Schedule a 20-minute demo call to see how Radius Systems can help grow your business.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
