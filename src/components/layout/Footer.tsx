import { Link } from 'react-router-dom';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'About ACA', href: '/about' },
  { label: 'Tournaments', href: '/tournaments' },
  { label: 'Teams', href: '/teams' },
  { label: 'Players', href: '/players' },
  { label: 'Academy', href: '/academy' },
  { label: 'Membership', href: '/membership' },
  { label: 'Contact', href: '/contact' },
];

const usefulLinks = [
  { label: 'Fixtures', href: '/tournaments' },
  { label: 'Results', href: '/tournaments' },
  { label: 'Points Tables', href: '/tournaments' },
  { label: 'Live Scores', href: '/' },
  { label: 'News', href: '/news' },
  { label: 'Gallery', href: '/gallery' },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-green">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm">Apex Cricket</div>
                <div className="font-display text-accent text-xs">Association</div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Dedicated to developing competitive cricket, nurturing young talent, and building a stronger cricket community.
            </p>
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 flex items-center justify-center transition-all duration-200 text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-500/20 hover:text-pink-400 flex items-center justify-center transition-all duration-200 text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-500/20 hover:text-red-400 flex items-center justify-center transition-all duration-200 text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-slate-400/20 hover:text-white flex items-center justify-center transition-all duration-200 text-slate-400">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.87a8.24 8.24 0 004.83 1.55V7A4.85 4.85 0 0119.59 6.69z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}
                    className="text-sm text-slate-400 hover:text-secondary transition-colors duration-200 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-secondary/50 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">Cricket</h4>
            <ul className="space-y-2.5">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}
                    className="text-sm text-slate-400 hover:text-secondary transition-colors duration-200 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-secondary/50 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>No. 45, Apex Sports Complex,<br />Colombo 07, Sri Lanka</span>
              </li>
              <li>
                <a href="tel:+94112345678" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-secondary transition-colors duration-200">
                  <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                  +94 11 234 5678
                </a>
              </li>
              <li>
                <a href="mailto:info@apexcricket.lk" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-secondary transition-colors duration-200">
                  <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                  info@apexcricket.lk
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-white/5 rounded-xl text-xs text-slate-500">
              <p className="font-semibold text-slate-400 mb-1">Office Hours</p>
              <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
              <p>Sat: 9:00 AM – 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 Apex Cricket Association. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Terms of Use</Link>
            <Link to="/admin" className="text-xs text-slate-600 hover:text-slate-400 transition-colors flex items-center gap-1">
              <Shield className="w-3 h-3" />Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
