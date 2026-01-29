import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Radius Systems | AI-Powered Growth Systems for Local Businesses',
  description: 'Tech was supposed to make things better, faster, cheaper. So why are agencies still charging like it\'s 2015? Custom websites, CRM, and automation for $297/month.',
  keywords: 'local business marketing, AI website, lead generation, review management, CRM, small business marketing, contractors, chiropractors, dentists, restaurants',
  openGraph: {
    title: 'Radius Systems | AI-Powered Growth Systems for Local Businesses',
    description: 'Custom websites, CRM, and automation for $297/month. Built with AI. Designed to grow your business.',
    type: 'website',
    siteName: 'Radius Systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Radius Systems | Growth Systems for Local Businesses',
    description: 'Custom websites, CRM, and automation for $297/month.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-radius-black text-radius-white antialiased">
        {children}
      </body>
    </html>
  )
}
