import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Trophy, ChevronDown, LogIn, Search,
  Shield
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Tournaments', href: '/tournaments' },
  { label: 'Teams', href: '/teams' },
  { label: 'Players', href: '/players' },
  { label: 'Academy', href: '/academy' },
  { label: 'Facilities', href: '/facilities' },
  { label: 'News & Events', href: '/news' },
  { label: 'Membership', href: '/membership' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-green">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <div className="hidden sm:block">
              <div className={`font-display font-bold text-sm leading-tight transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white text-shadow'}`}>
                Apex Cricket
              </div>
              <div className={`font-display text-xs leading-tight transition-colors duration-300 ${scrolled ? 'text-secondary' : 'text-accent'}`}>
                Association
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? 'text-secondary bg-secondary/10'
                    : scrolled
                    ? 'text-slate-700 hover:text-secondary hover:bg-slate-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className={`hidden lg:flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                scrolled
                  ? 'bg-primary text-white hover:bg-secondary'
                  : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              }`}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`xl:hidden p-2 rounded-lg transition-colors duration-200 ${
                scrolled ? 'text-primary hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-secondary/10 text-secondary'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-slate-100 mt-2 pt-3">
              <Link
                to="/login"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-xl font-semibold text-sm"
              >
                <LogIn className="w-4 h-4" />
                Login / Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
