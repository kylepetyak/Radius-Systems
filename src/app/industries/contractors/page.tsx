import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import IndustryPageContent from './IndustryPageContent'

export const metadata: Metadata = {
  title: 'Marketing Systems for Contractors | Radius Systems',
  description: 'Get more jobs with a custom website, automated lead follow-up, and review management. Built for HVAC, plumbing, electrical, roofing, landscaping, and more.',
}

export default function ContractorsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <IndustryPageContent />
      <Footer />
    </main>
  )
}
