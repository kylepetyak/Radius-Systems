'use client'

import { motion } from 'framer-motion'
import { Calendar, MessageSquare, Mail, Phone } from 'lucide-react'

export default function ContactForm() {
  return (
    <section className="section-padding relative overflow-hidden bg-radius-dark">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-radius-light to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-radius-cyan font-mono text-sm tracking-wider uppercase mb-4 block">
              Get Started
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-radius-muted text-lg mb-8">
              Book a call to see how Radius Systems can help. No pressure, no BS — just a conversation about your business and whether we&apos;re a good fit.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-radius-cyan/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-radius-cyan" />
                </div>
                <div>
                  <p className="font-semibold text-radius-white">20-minute demo call</p>
                  <p className="text-radius-muted text-sm">See the system in action</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-radius-cyan/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-radius-cyan" />
                </div>
                <div>
                  <p className="font-semibold text-radius-white">No commitment required</p>
                  <p className="text-radius-muted text-sm">Just a conversation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-radius-gray border border-radius-light rounded-2xl p-8"
          >
            {/* 
              GHL FORM PLACEHOLDER
              Replace this div with your GoHighLevel form embed code:
              
              <iframe 
                src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
                style={{ width: '100%', height: '500px', border: 'none' }}
              />
              
              Or use the script embed method from GHL
            */}
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-radius-cyan/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-radius-cyan" />
              </div>
              <h3 className="font-display text-xl font-semibold text-radius-white mb-2">
                Book Your Call
              </h3>
              <p className="text-radius-muted mb-6">
                GHL form will be embedded here
              </p>
              
              {/* Temporary placeholder form */}
              <form className="space-y-4 text-left">
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-radius-dark border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-radius-dark border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-radius-dark border border-radius-light rounded-lg text-radius-white placeholder-radius-muted focus:border-radius-cyan focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-radius-white mb-2">
                    Business Type
                  </label>
                  <select className="w-full px-4 py-3 bg-radius-dark border border-radius-light rounded-lg text-radius-white focus:border-radius-cyan focus:outline-none transition-colors">
                    <option value="">Select your industry</option>
                    <option value="contractor">Contractor</option>
                    <option value="chiropractor">Chiropractor</option>
                    <option value="dentist">Dentist</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg"
                >
                  Book My Call
                </button>
              </form>
              
              <p className="text-radius-muted text-xs mt-4">
                We&apos;ll never spam you or share your info.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
