'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Hammer, 
  Check, 
  ArrowRight,
  Globe,
  MessageSquare,
  Star,
  Phone,
  Clock,
  Users
} from 'lucide-react'

const painPoints = [
  'Losing jobs because you couldn\'t answer the phone',
  'Competing against bigger companies with better websites',
  'Customers forgetting to leave reviews',
  'Spending hours on follow-up calls and texts',
  'Not knowing which marketing actually works',
]

const solutions = [
  {
    icon: Globe,
    title: 'Professional Website',
    description: 'A fast, modern website that makes your company look established and trustworthy. Optimized to show up when people search for contractors in your area.',
  },
  {
    icon: Phone,
    title: 'Never Miss a Lead',
    description: 'Missed call? Automatic text goes out immediately. "Hey, sorry I missed your call. When\'s a good time to chat?" Keeps leads warm while you\'re on a job.',
  },
  {
    icon: MessageSquare,
    title: 'Automated Follow-Up',
    description: 'Leads get instant responses. The system follows up via text and email until they respond or book. You focus on the work.',
  },
  {
    icon: Star,
    title: '5-Star Reviews on Autopilot',
    description: 'After every job, happy customers get a review request. Gentle reminders until they leave that 5-star review. Build your reputation automatically.',
  },
  {
    icon: Users,
    title: 'All Leads in One Place',
    description: 'Every call, text, and email in one dashboard. See your pipeline. Track every job from first contact to payment.',
  },
  {
    icon: Clock,
    title: 'We Handle the Tech',
    description: 'You swing the hammer. We maintain the website, update the systems, and handle technical issues. Support included.',
  },
]

const trades = [
  'HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Landscaping',
  'Painting', 'Flooring', 'Remodeling', 'Handyman', 'Concrete',
  'Fencing', 'Pressure Washing', 'Pool Service', 'Tree Service', 'General Contractors'
]

export default function IndustryPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Hammer className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-radius-cyan font-mono text-sm tracking-wider uppercase">
                For Contractors
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Get more jobs.<br />
              <span className="text-radius-muted">Without the marketing headaches.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-radius-muted text-lg mb-8"
            >
              A complete growth system built for contractors. Website, lead follow-up, 
              review automation — all for $297/month. No contracts. No BS.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                Book a Call
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/system" className="btn-secondary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                See What&apos;s Included
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-radius-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
              Sound familiar?
            </h2>
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-radius-gray border border-radius-light rounded-lg p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-lg">×</span>
                  </div>
                  <p className="text-radius-white">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Here&apos;s how we fix it
            </h2>
            <p className="text-radius-muted text-lg max-w-2xl mx-auto">
              Everything you need to get more jobs, look professional, and grow your reputation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card"
              >
                <div className="w-12 h-12 rounded-lg bg-radius-cyan/10 flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-radius-cyan" />
                </div>
                <h3 className="font-display text-lg font-semibold text-radius-white mb-2">
                  {solution.title}
                </h3>
                <p className="text-radius-muted text-sm leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trades We Serve */}
      <section className="section-padding bg-radius-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Built for every trade
            </h2>
            <p className="text-radius-muted text-lg">
              If you serve customers in a local area, we can help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {trades.map((trade) => (
              <span
                key={trade}
                className="bg-radius-gray border border-radius-light rounded-full px-4 py-2 text-sm text-radius-white"
              >
                {trade}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              One price. Everything included.
            </h2>
            <div className="bg-radius-dark border-2 border-radius-cyan rounded-2xl p-8 mb-8">
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl font-bold text-radius-white">$297</span>
                <span className="text-radius-muted">/month</span>
              </div>
              <ul className="space-y-3 text-left max-w-sm mx-auto mb-8">
                {[
                  'Custom AI-built website',
                  'CRM system',
                  'Automated lead follow-up',
                  'Missed call text-back',
                  'Review automation',
                  'Hosting & support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-radius-cyan" />
                    <span className="text-radius-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 w-full block">
                Get Started
              </Link>
            </div>
            <p className="text-radius-muted text-sm">
              No contracts. Cancel anytime. Live in 7-10 days.
            </p>
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
              Ready to get more jobs?
            </h2>
            <p className="text-radius-muted text-lg mb-8">
              Book a 20-minute call. We&apos;ll show you how it works and answer all your questions.
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
