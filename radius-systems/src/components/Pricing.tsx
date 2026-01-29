'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Zap, TrendingUp, Share2 } from 'lucide-react'

const plans = [
  {
    name: 'The System',
    price: '297',
    period: '/month',
    description: 'Everything you need to capture leads, follow up automatically, and grow your reputation.',
    featured: true,
    features: [
      'Custom AI-built website',
      'CRM system setup',
      'Automated lead follow-up',
      'Missed call text-back',
      'Review request automation',
      'Hosting & ongoing support',
      'Mobile-optimized design',
      'SEO-ready structure',
    ],
    cta: 'Get Started',
    href: '/contact',
  },
  {
    name: 'Google & Meta Ads',
    price: '999',
    period: '/month + ad spend',
    description: 'Done-for-you advertising that puts your business in front of people ready to buy.',
    icon: TrendingUp,
    features: [
      'Google Ads management',
      'Meta (Facebook/Instagram) Ads',
      'Campaign strategy & setup',
      'Ad creative development',
      'Ongoing optimization',
      'Monthly performance reports',
      'Lead tracking & attribution',
      'Dedicated account manager',
    ],
    cta: 'Add to System',
    href: '/contact',
  },
  {
    name: 'Social Media',
    price: '499',
    period: '/month',
    description: 'Consistent social presence without the time investment. We handle it all.',
    icon: Share2,
    features: [
      'Content calendar creation',
      'Post design & copywriting',
      'Multi-platform posting',
      'Engagement monitoring',
      'Monthly content planning',
      'Brand voice consistency',
      'Performance analytics',
      'Community management',
    ],
    cta: 'Add to System',
    href: '/contact',
    startingAt: true,
  },
]

export default function Pricing() {
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
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple pricing. No surprises.
          </h2>
          <p className="text-radius-muted text-lg max-w-2xl mx-auto">
            Start with The System. Add on what you need as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-gradient-to-b from-radius-cyan/10 to-radius-dark border-2 border-radius-cyan'
                  : 'bg-radius-gray border border-radius-light'
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-radius-cyan text-radius-black text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                {plan.icon && (
                  <plan.icon className="w-8 h-8 text-radius-cyan mb-4" />
                )}
                <h3 className="font-display text-xl font-semibold text-radius-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.startingAt && (
                    <span className="text-radius-muted text-sm">Starting at </span>
                  )}
                  <span className="text-4xl font-bold text-radius-white">${plan.price}</span>
                  <span className="text-radius-muted">{plan.period}</span>
                </div>
                <p className="text-radius-muted text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-radius-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-radius-white text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? 'bg-radius-cyan text-radius-black hover:shadow-lg hover:shadow-radius-cyan/30'
                    : 'border border-radius-light text-radius-white hover:border-radius-cyan hover:text-radius-cyan'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-radius-muted text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-radius-cyan" />
              <span>No contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-radius-cyan" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-radius-cyan" />
              <span>No setup fees</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
