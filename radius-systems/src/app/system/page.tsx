import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SystemPageContent from './SystemPageContent'

export const metadata: Metadata = {
  title: 'The System | Radius Systems',
  description: 'Everything you get for $297/month. Custom AI-built website, CRM, automated follow-ups, missed call text-back, review automation, and ongoing support.',
}

export default function SystemPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SystemPageContent />
      <Footer />
    </main>
  )
}
