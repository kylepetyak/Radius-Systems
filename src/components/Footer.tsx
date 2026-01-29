import Link from 'next/link'

const footerLinks = {
  product: [
    { name: 'The System', href: '/system' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Our Work', href: '/our-work' },
  ],
  industries: [
    { name: 'Contractors', href: '/industries/contractors' },
    { name: 'Chiropractors', href: '/industries/chiropractors' },
    { name: 'Dentists', href: '/industries/dentists' },
    { name: 'Restaurants', href: '/industries/restaurants' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Free Audit', href: '/free-audit' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-radius-dark border-t border-radius-light">
      <div className="container-custom section-padding">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-radius-light">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-radius-muted text-lg mb-8 max-w-2xl mx-auto">
            See everything we do to help you grow your business so you can implement it yourself or let us do it for you.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">
            Book a Call
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-radius-white mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-radius-muted hover:text-radius-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-radius-white mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-radius-muted hover:text-radius-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-radius-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-radius-muted hover:text-radius-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-radius-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-radius-muted hover:text-radius-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-radius-light">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-radius-cyan flex items-center justify-center">
              <span className="font-display font-bold text-radius-black text-lg">R</span>
            </div>
            <span className="font-display font-semibold text-lg">Radius Systems</span>
          </div>
          <p className="text-radius-muted text-sm">
            © {new Date().getFullYear()} Radius Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
