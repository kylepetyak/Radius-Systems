'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { UtensilsCrossed, Check, ArrowRight, Globe, MessageSquare, Star, Phone, Clock, Users } from 'lucide-react'

const painPoints = [
  'Reservation requests going unanswered',
  'Customers not leaving Google reviews',
  'Competing with chains that dominate search',
  'No time to manage social media or marketing',
  'Website doesn\'t show up on Google',
]

const solutions = [
  { icon: Globe, title: 'Stunning Website', description: 'A mouth-watering website that showcases your menu, atmosphere, and makes reservations easy.' },
  { icon: MessageSquare, title: 'Instant Response', description: 'Reservation requests get immediate follow-up. Never lose a table to slow response.' },
  { icon: Star, title: 'Review Automation', description: 'Automatically request reviews from happy diners. Build your 5-star reputation.' },
  { icon: Phone, title: 'Missed Call Text-Back', description: 'Miss a call during rush? We text them back so you never lose a reservation.' },
  { icon: Users, title: 'Customer Database', description: 'Track regulars, send specials, and bring customers back again and again.' },
  { icon: Clock, title: 'We Handle the Tech', description: 'You focus on the food. We maintain your website and systems.' },
]

export default function RestaurantPageContent() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6 text-red-400" />
              </div>
              <span className="text-radius-cyan font-mono text-sm tracking-wider uppercase">For Restaurants</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              More reservations.<br /><span className="text-radius-muted">More repeat customers.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-radius-muted text-lg mb-8">
              A complete growth system built for restaurants. Website, customer follow-up, review automation — all for $297/month.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">Book a Call <ArrowRight className="w-5 h-5" /></Link>
              <Link href="/system" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">See What&apos;s Included</Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-radius-dark">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">Sound familiar?</h2>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-4 bg-radius-gray border border-radius-light rounded-lg p-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0"><span className="text-red-400 text-lg">×</span></div>
                  <p className="text-radius-white">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Here&apos;s how we fix it</h2>
            <p className="text-radius-muted text-lg max-w-2xl mx-auto">Everything you need to fill tables and keep customers coming back.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div key={solution.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="feature-card">
                <div className="w-12 h-12 rounded-lg bg-radius-cyan/10 flex items-center justify-center mb-4"><solution.icon className="w-6 h-6 text-radius-cyan" /></div>
                <h3 className="font-display text-lg font-semibold text-radius-white mb-2">{solution.title}</h3>
                <p className="text-radius-muted text-sm leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-radius-dark">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">One price. Everything included.</h2>
            <div className="bg-radius-gray border-2 border-radius-cyan rounded-2xl p-8 mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-radius-white">$297</span>
                <span className="text-radius-muted">/month</span>
              </div>
              <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
                {['Custom AI-built website', 'CRM system', 'Automated customer follow-up', 'Missed call text-back', 'Review automation', 'Hosting & support'].map((feature) => (
                  <li key={feature} className="flex items-center gap-3"><Check className="w-5 h-5 text-radius-cyan" /><span className="text-radius-white">{feature}</span></li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 w-full block">Get Started</Link>
            </div>
            <p className="text-radius-muted text-sm">No contracts. Cancel anytime. Live in 7-10 days.</p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
