'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'When will I start seeing results?',
    answer: 'This depends on your current advertising, how long you\'ve been in business, and your commitment to using the system. We\'re not a miracle solution — we give you the tools to win, but you have to use them. If you\'re already doing other forms of marketing (word of mouth, Google Business, etc.), you\'ll likely see results faster. We build your online foundation — the results compound over time.',
  },
  {
    question: 'Why is your pricing so cheap compared to agencies?',
    answer: 'We use AI to build websites and automate processes that used to take weeks and cost thousands. We pass those savings to you. Our goal is to keep you for 10+ years, not 10 weeks. We believe if we don\'t overcharge and provide excellent service, you\'ll never have a reason to leave.',
  },
  {
    question: 'What happens if I cancel?',
    answer: 'We\'ll be sad to see you go, but there are no penalties or contracts. You simply lose access to the website and systems we built for you. If you want to keep your website, we can discuss transferring it to your own hosting.',
  },
  {
    question: 'Can people find my website on Google?',
    answer: 'Every Radius Systems website is built with SEO best practices — keyword research, meta tags, fast loading speeds, mobile optimization, and proper structure. Your Google ranking depends on factors like how long your site\'s been live, local competition, and your Google Business reviews. We set you up for success; rankings grow over time.',
  },
  {
    question: 'I get most of my business from word of mouth. Why do I need this?',
    answer: 'Word of mouth is great — but what happens when someone hears about you and Googles your business? If they can\'t find you, or your website looks outdated, you lose them. A professional online presence makes word of mouth more effective. Plus, automated review requests turn your happy customers into even more referrals.',
  },
  {
    question: 'How is this different from other marketing companies?',
    answer: 'Most agencies charge $5-15k to build what we deliver for $297/month. They\'re still operating like it\'s 2015. We use AI to build faster and better, and we pass the savings to you. No bloated proposals, no endless meetings, no bullshit. Just a system that works.',
  },
  {
    question: 'What if I need help after launch?',
    answer: 'Support is included. We host, maintain, and update your system. You run your business — we handle the tech. If something breaks or you have questions, we\'re here.',
  },
  {
    question: 'Do you work with businesses outside the listed industries?',
    answer: 'Yes! We work with most local service-based businesses. If you serve customers in a specific area and want more leads, we can probably help. Book a call and we\'ll figure it out together.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border-b border-radius-light"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-semibold text-radius-white pr-8 group-hover:text-radius-cyan transition-colors">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-radius-gray flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-radius-cyan" />
                  ) : (
                    <Plus className="w-4 h-4 text-radius-muted" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-radius-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-radius-muted mb-4">
            Still have questions?
          </p>
          <a href="/contact" className="text-radius-cyan font-semibold hover:underline">
            Book a call and we&apos;ll answer everything →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
