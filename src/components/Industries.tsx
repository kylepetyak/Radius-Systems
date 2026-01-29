'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Hammer, 
  Activity, 
  Smile, 
  UtensilsCrossed,
  ArrowRight 
} from 'lucide-react'

const industries = [
  {
    icon: Hammer,
    name: 'Contractors',
    description: 'HVAC, plumbing, electrical, roofing, landscaping, and more. Get found online and win more jobs.',
    href: '/industries/contractors',
    color: 'from-orange-500/20 to-orange-600/5',
  },
  {
    icon: Activity,
    name: 'Chiropractors',
    description: 'Build your patient base with automated appointment reminders and review generation.',
    href: '/industries/chiropractors',
    color: 'from-green-500/20 to-green-600/5',
  },
  {
    icon: Smile,
    name: 'Dentists',
    description: 'Fill your schedule with new patients. Automated recalls and reputation management included.',
    href: '/industries/dentists',
    color: 'from-blue-500/20 to-blue-600/5',
  },
  {
    icon: UtensilsCrossed,
    name: 'Restaurants',
    description: 'More reservations, more reviews, more repeat customers. All on autopilot.',
    href: '/industries/restaurants',
    color: 'from-red-500/20 to-red-600/5',
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

export default function Industries() {
  return (
    <section className="section-padding relative overflow-hidden bg-radius-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-radius-light to-transparent" />
      
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
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built for local businesses
          </h2>
          <p className="text-radius-muted text-lg max-w-2xl mx-auto">
            We work with service-based businesses that want to grow without the tech headaches.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {industries.map((industry) => (
            <motion.div key={industry.name} variants={itemVariants}>
              <Link
                href={industry.href}
                className="group block bg-radius-gray border border-radius-light rounded-xl p-6 hover:border-radius-cyan/30 transition-all duration-300 h-full"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="w-7 h-7 text-radius-white" />
                </div>
                <h3 className="font-display text-xl font-semibold text-radius-white mb-2 flex items-center gap-2">
                  {industry.name}
                  <ArrowRight className="w-4 h-4 text-radius-cyan opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-radius-muted text-sm leading-relaxed">
                  {industry.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* More Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-radius-muted mb-4">
            Don&apos;t see your industry? We work with most local service businesses.
          </p>
          <Link href="/contact" className="text-radius-cyan font-semibold hover:underline">
            Let&apos;s talk →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
