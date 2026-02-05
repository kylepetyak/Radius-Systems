import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import DentistPageContent from './DentistPageContent'

export const metadata: Metadata = {
  title: 'Marketing Systems for Dentists | Radius Systems',
  description: 'Get more patients with a custom website, automated appointment reminders, and review management. Built for dental practices.',
}

export default function DentistsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DentistPageContent />
      <Footer />
    </main>
  )
}
