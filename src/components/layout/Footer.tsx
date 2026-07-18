import Link from 'next/link';
import { BRAND, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary pt-24 pb-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-light tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-gold">
                Prabha
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-text-tertiary mt-1 font-light">
                Premium Tiles & Bath
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              {BRAND.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-gold transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Special Zones */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Partner Zones</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/architect-zone" className="text-sm text-text-secondary hover:text-gold transition-colors duration-300">
                  Architect Zone
                </Link>
              </li>
              <li>
                <Link href="/dealer-zone" className="text-sm text-text-secondary hover:text-gold transition-colors duration-300">
                  Dealer Zone
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-text-secondary hover:text-gold transition-colors duration-300">
                  Our Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div>
            <h4 className="text-white text-sm font-medium tracking-widest uppercase mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li>
                <a href={`tel:${BRAND.phone}`} className="hover:text-gold transition-colors duration-300">
                  {BRAND.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors duration-300">
                  {BRAND.email}
                </a>
              </li>
              <li className="pt-4 leading-relaxed">
                {BRAND.address.line1}<br />
                {BRAND.address.line2 && <>{BRAND.address.line2}<br /></>}
                {BRAND.address.city}, {BRAND.address.state} {BRAND.address.pin}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-tertiary">
            © {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-text-tertiary hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-tertiary hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
