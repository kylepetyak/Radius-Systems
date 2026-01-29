'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageSquare, Check, Mail } from 'lucide-react'

const benefits = [
  'See the full system in action',
  'Get answers to all your questions',
  'No pressure, no hard sell',
  'Learn if we\'re a good fit',
]

export default function ContactPageContent() {
  return (
    <>
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-radius-cyan/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-radius-cyan font-mono text-sm tracking-wider uppercase mb-4 block">
                Let&apos;s Talk
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Book your demo call
              </h1>
              <p className="text-radius-muted text-lg mb-8">
                20 minutes. No BS. We&apos;ll show you exactly how Radius Systems works and 
                answer all your questions. If we&apos;re not a good fit, we&apos;ll tell you.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-radius-cyan/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-radius-cyan" />
                    </div>
                    <span className="text-radius-white">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-radius-dark border border-radius-light rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-radius-cyan/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-radius-cyan" />
                  </div>
                  <div>
                    <p className="font-semibold text-radius-white">Demo Call</p>
                    <p className="text-radius-muted text-sm">20 minutes</p>
                  </div>
                </div>
                <p className="text-radius-muted text-sm">
                  We&apos;ll walk through the system, show you real results, and answer your questions.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-radius-dark border border-radius-light rounded-2xl p-8"
            >
              {/* 
                ===========================================
                GHL FORM PLACEHOLDER
                ===========================================
                
                Replace this entire div with your GoHighLevel form:
                
                Option 1 - iFrame embed:
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
                  style={{ width: '100%', height: '600px', border: 'none' }}
                />
                
                Option 2 - Script embed:
                <script src="https://link.msgsndr.com/js/form_embed.js"></script>
                <iframe src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID" .../>
                
                ===========================================
              */}
              
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-radius-cyan/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-radius-cyan" />
                </div>
                <h2 className="font-display text-xl font-semibold text-radius-white mb-2">
                  Get Started
                </h2>
                <p className="text-radius-muted text-sm">
                  Fill out the form below and we&apos;ll be in touch within 24 hours.
                </p>
              </div>
              
              {/* Placeholder form - Replace with GHL embed */}
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-radius-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 bg-radius-gray border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-radius-white mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full px-4 py-3 bg-radius-gray border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-radius-gray border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-radius-gray border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 bg-radius-gray border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Industry *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-radius-gray border border-radius-light rounded-lg text-radius-white focus:border-radius-cyan focus:outline-none transition-colors"
                  >
                    <option value="">Select your industry</option>
                    <option value="contractor">Contractor / Home Services</option>
                    <option value="chiropractor">Chiropractor</option>
                    <option value="dentist">Dentist</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="other">Other Local Business</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Website (if you have one)
                  </label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 bg-radius-gray border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    What&apos;s your biggest marketing challenge?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a bit about your situation..."
                    className="w-full px-4 py-3 bg-radius-gray border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Book My Call
                </button>
              </form>
              
              <p className="text-radius-muted text-xs text-center mt-4">
                We&apos;ll never spam you or share your info. Ever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
