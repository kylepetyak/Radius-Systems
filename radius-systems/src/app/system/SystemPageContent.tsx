'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Globe, 
  MessageSquare, 
  Star, 
  Phone, 
  Zap,
  Clock,
  Check,
  X,
  ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Custom AI-Built Website',
    description: 'Not a template. A real, custom website built specifically for your business using AI. Fast, modern, mobile-optimized, and designed to convert visitors into leads.',
    benefits: [
      'Custom design for your brand',
      'Mobile-first responsive layout',
      'SEO-optimized structure',
      'Fast loading speeds',
      'Lead capture forms',
      'Google Analytics integration',
    ],
  },
  {
    icon: MessageSquare,
    title: 'CRM System',
    description: 'All your leads, customers, and conversations in one dashboard. Track every interaction and never let a lead slip through the cracks.',
    benefits: [
      'Unified inbox (calls, texts, emails)',
      'Lead tracking & pipeline',
      'Customer database',
      'Conversation history',
      'Mobile app access',
      'Team collaboration',
    ],
  },
  {
    icon: Zap,
    title: 'Automated Lead Follow-Up',
    description: 'When a lead comes in, they get an instant response. No more losing customers because you were busy. The system follows up until they respond.',
    benefits: [
      'Instant text response',
      'Email follow-up sequences',
      'Customizable messaging',
      'Smart timing',
      'Multi-channel outreach',
      'Appointment booking',
    ],
  },
  {
    icon: Phone,
    title: 'Missed Call Text-Back',
    description: 'Miss a call? We automatically text them back within seconds. "Hey, sorry I missed your call. How can I help?" Simple. Effective.',
    benefits: [
      'Automatic text within seconds',
      'Customizable message',
      '24/7 coverage',
      'Keeps leads warm',
      'Professional impression',
      'Works on any call',
    ],
  },
  {
    icon: Star,
    title: 'Review Automation',
    description: 'Happy customers forget to leave reviews. We remind them — gently and automatically — until they do. Build your 5-star reputation on autopilot.',
    benefits: [
      'Automated review requests',
      'Multi-platform (Google, Facebook)',
      'Smart timing after service',
      'Follow-up reminders',
      'Review monitoring',
      'Reputation dashboard',
    ],
  },
  {
    icon: Clock,
    title: 'Hosting & Ongoing Support',
    description: 'We host your website, maintain the system, and handle updates. You run your business — we handle the tech. Support included.',
    benefits: [
      'Reliable hosting',
      'Security updates',
      'System maintenance',
      'Technical support',
      'Regular improvements',
      'No extra fees',
    ],
  },
]

const comparison = [
  { feature: 'Custom Website', us: true, agency: true, diy: false },
  { feature: 'CRM System', us: true, agency: 'Extra $', diy: false },
  { feature: 'Automated Follow-ups', us: true, agency: 'Extra $', diy: false },
  { feature: 'Missed Call Text-Back', us: true, agency: 'Extra $', diy: false },
  { feature: 'Review Automation', us: true, agency: 'Extra $', diy: false },
  { feature: 'Ongoing Support', us: true, agency: 'Extra $', diy: false },
  { feature: 'No Contracts', us: true, agency: false, diy: true },
  { feature: 'Cancel Anytime', us: true, agency: false, diy: true },
]

export default function SystemPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-radius-cyan/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-radius-cyan font-mono text-sm tracking-wider uppercase mb-4 block"
            >
              The $297/month System
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Everything you need.<br />
              <span className="text-radius-muted">Nothing you don&apos;t.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-radius-muted text-lg mb-8"
            >
              A complete growth system for local businesses. Website, CRM, automation — all included. 
              No hidden fees. No surprises. Just results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="section-padding bg-radius-dark">
        <div className="container-custom">
          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 rounded-xl bg-radius-cyan/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-radius-cyan" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-radius-white mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-radius-muted text-lg mb-6">
                    {feature.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-radius-cyan flex-shrink-0" />
                        <span className="text-radius-white text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-radius-gray border border-radius-light rounded-2xl p-8 h-64 flex items-center justify-center">
                    <feature.icon className="w-24 h-24 text-radius-cyan/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What it replaces
            </h2>
            <p className="text-radius-muted text-lg">
              Everything you&apos;d normally pay thousands for — in one affordable system.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-radius-light">
                  <th className="text-left py-4 px-4 font-semibold text-radius-white">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-radius-cyan">Radius Systems</th>
                  <th className="text-center py-4 px-4 font-semibold text-radius-muted">Traditional Agency</th>
                  <th className="text-center py-4 px-4 font-semibold text-radius-muted">DIY</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-radius-light/50">
                    <td className="py-4 px-4 text-radius-white">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.us === true ? (
                        <Check className="w-5 h-5 text-radius-cyan mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.agency === true ? (
                        <Check className="w-5 h-5 text-radius-muted mx-auto" />
                      ) : row.agency === false ? (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      ) : (
                        <span className="text-yellow-500 text-sm">{row.agency}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.diy === true ? (
                        <Check className="w-5 h-5 text-radius-muted mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="bg-radius-dark">
                  <td className="py-4 px-4 font-semibold text-radius-white">Monthly Cost</td>
                  <td className="py-4 px-4 text-center font-bold text-radius-cyan">$297</td>
                  <td className="py-4 px-4 text-center text-radius-muted">$2,000+</td>
                  <td className="py-4 px-4 text-center text-radius-muted">$50-200 + your time</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-radius-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-radius-muted text-lg mb-8">
              Book a 20-minute call. We&apos;ll show you exactly how it works and answer all your questions.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
              Book a Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
