'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'The System', href: '/system' },
  { name: 'How It Works', href: '/how-it-works' },
  { 
    name: 'Industries', 
    href: '/industries',
    dropdown: [
      { name: 'Contractors', href: '/industries/contractors' },
      { name: 'Chiropractors', href: '/industries/chiropractors' },
      { name: 'Dentists', href: '/industries/dentists' },
      { name: 'Restaurants', href: '/industries/restaurants' },
    ]
  },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-radius-black/90 backdrop-blur-lg border-b border-radius-light/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-radius-cyan flex items-center justify-center">
              <span className="font-display font-bold text-radius-black text-lg">R</span>
            </div>
            <span className="font-display font-semibold text-lg text-radius-white group-hover:text-radius-cyan transition-colors">
              Radius Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-radius-muted hover:text-radius-white transition-colors"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="bg-radius-dark border border-radius-light rounded-lg py-2 min-w-[180px] shadow-xl">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-radius-muted hover:text-radius-cyan hover:bg-radius-gray transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/free-audit"
              className="text-sm font-medium text-radius-muted hover:text-radius-cyan transition-colors"
            >
              Free Audit
            </Link>
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-radius-muted hover:text-radius-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-radius-dark border-t border-radius-light overflow-hidden"
          >
            <div className="container-custom py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-radius-white font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 text-sm text-radius-muted hover:text-radius-cyan"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-radius-light space-y-3">
                <Link
                  href="/free-audit"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-radius-cyan font-medium"
                >
                  Free Audit
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary block text-center"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
