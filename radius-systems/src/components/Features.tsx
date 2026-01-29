'use client'

import { motion } from 'framer-motion'
import { 
  Globe, 
  MessageSquare, 
  Star, 
  Phone, 
  Mail, 
  BarChart3,
  Zap,
  Clock
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: 'Custom Website',
    description: 'A fast, modern website built with AI. Optimized for mobile, SEO-ready, and designed to convert visitors into leads.',
    highlight: 'AI-Built',
  },
  {
    icon: MessageSquare,
    title: 'CRM System',
    description: 'All your leads, conversations, and customer data in one place. Never lose track of a potential customer again.',
    highlight: 'All-in-One',
  },
  {
    icon: Zap,
    title: 'Automated Follow-Ups',
    description: 'Leads get instant responses via text and email. No more losing customers because you were too busy to reply.',
    highlight: 'Instant',
  },
  {
    icon: Phone,
    title: 'Missed Call Text-Back',
    description: 'Miss a call? We automatically text them back so you never lose a lead — even when you\'re on a job.',
    highlight: '24/7',
  },
  {
    icon: Star,
    title: 'Review Automation',
    description: 'Automatically request reviews from happy customers. Build your 5-star reputation on autopilot.',
    highlight: '5-Star',
  },
  {
    icon: Clock,
    title: 'Ongoing Support',
    description: 'We host, maintain, and update your system. You run your business — we handle the tech.',
    highlight: 'Included',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Features() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radius-dark" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-radius-light to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-radius-light to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-radius-cyan font-mono text-sm tracking-wider uppercase mb-4 block">
            What&apos;s Included
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need.<br />
            <span className="text-radius-muted">One monthly price.</span>
          </h2>
          <p className="text-radius-muted text-lg max-w-2xl mx-auto">
            For <span className="text-radius-cyan font-semibold">$297/month</span>, you get a complete 
            growth system — not just a website. Here&apos;s what&apos;s inside:
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-radius-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-radius-cyan/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-radius-cyan" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-semibold text-lg text-radius-white">
                      {feature.title}
                    </h3>
                    <span className="text-xs font-mono text-radius-cyan bg-radius-cyan/10 px-2 py-0.5 rounded">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-radius-muted text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-radius-muted mb-4">
            No retainers. No bloated proposals. Just a system that works.
          </p>
          <a href="/system" className="text-radius-cyan font-semibold hover:underline">
            See the full breakdown →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
