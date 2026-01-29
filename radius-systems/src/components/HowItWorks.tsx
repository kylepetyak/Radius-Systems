'use client'

import { motion } from 'framer-motion'
import { Phone, Wrench, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Demo Call',
    duration: '20 mins',
    description: 'It\'s actually a sales call, we just didn\'t want to scare you. We\'ll answer your questions, show you features, and show you live client results.',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'We Build Your System',
    duration: '7-10 days',
    description: 'Fill out a basic onboarding form with your business details. We\'ll build your website and set up your entire marketing system.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Launch Call',
    duration: '25 mins',
    description: 'We walk you through everything, answer questions, and show you how to use your new system. Spoiler: it\'s mostly pressing two buttons.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding relative overflow-hidden">
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
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What working with us looks like
          </h2>
          <p className="text-radius-muted text-lg max-w-2xl mx-auto">
            Simple process. No complexity. You focus on your business — we handle the tech.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-px bg-gradient-to-b from-radius-cyan/50 to-radius-light hidden md:block" />
              )}
              
              <div className="flex gap-6 mb-12 md:mb-16">
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-radius-dark border-2 border-radius-cyan flex items-center justify-center relative z-10">
                    <step.icon className="w-5 h-5 text-radius-cyan" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-radius-dark border border-radius-light rounded-xl p-6 hover:border-radius-cyan/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-radius-cyan text-sm">Step {step.number}</span>
                    <span className="text-radius-muted text-sm">•</span>
                    <span className="text-radius-muted text-sm">{step.duration}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-radius-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-radius-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a href="/contact" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Start With Step 1
          </a>
        </motion.div>
      </div>
    </section>
  )
}
