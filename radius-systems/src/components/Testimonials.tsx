'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

// Placeholder testimonials - replace with real ones as you get them
const testimonials = [
  {
    name: 'Your First Client',
    business: 'Coming Soon',
    quote: 'This spot is waiting for your first testimonial. Book a call to get started.',
    stars: 5,
    placeholder: true,
  },
  {
    name: 'Another Happy Client',
    business: 'Coming Soon',
    quote: 'Your next success story goes here. We\'re building something great together.',
    stars: 5,
    placeholder: true,
  },
  {
    name: 'Future Testimonial',
    business: 'Coming Soon',
    quote: 'Real results from real businesses. Stay tuned for our growing list of success stories.',
    stars: 5,
    placeholder: true,
  },
]

export default function Testimonials() {
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            The proof is in the pudding
          </h2>
          <p className="text-radius-muted text-lg max-w-2xl mx-auto">
            See what our clients have to say about working with Radius Systems.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-radius-dark border border-radius-light rounded-xl p-6 relative ${
                testimonial.placeholder ? 'border-dashed opacity-60' : ''
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-radius-cyan/20 mb-4" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-radius-white mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-radius-gray flex items-center justify-center">
                  <span className="text-radius-muted text-sm font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-radius-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-radius-muted text-xs">
                    {testimonial.business}
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
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-radius-muted mb-4">
            Be our next success story.
          </p>
          <a href="/contact" className="btn-primary">
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
