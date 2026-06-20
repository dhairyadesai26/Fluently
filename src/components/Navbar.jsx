import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="gradient-brand text-white text-sm py-2.5 px-4 text-center font-dm relative">
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse-dot" />
          🎉 <strong>Limited Offer:</strong> Enroll today at ₹4,999 (was ₹7,999) — Offer ends Sunday!
          <a href="#pricing" onClick={() => handleNavClick('#pricing')}
            className="bg-white/20 hover:bg-white/30 text-white text-xs font-bold px-3 py-1 rounded-full transition-all">
            Enroll Now →
          </a>
        </span>
      </div>

      {/* Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-white shadow-sm border-b border-gray-200/60' : 'bg-white/80 backdrop-blur-xl'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
            <span className="text-2xl">🗣️</span>
            <span className="font-sora text-xl font-black tracking-tight"
              style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Fluently
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3.5 py-2 rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
            <button className="text-sm font-medium text-gray-600 hover:text-indigo-600 px-3 py-2 transition-all">
              Log In
            </button>
            <button
              onClick={() => handleNavClick('#pricing')}
              className="gradient-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-colored font-sora"
            >
              Start Free →
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} className="text-gray-700" /> : <Menu size={22} className="text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-5 py-4 flex flex-col gap-1">
                {NAV_LINKS.map(link => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-3 rounded-lg text-left transition-all"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
                  <button className="text-sm font-medium text-gray-600 py-2.5 text-center">Log In</button>
                  <button
                    onClick={() => handleNavClick('#pricing')}
                    className="gradient-brand text-white text-sm font-semibold py-3 rounded-full text-center font-sora"
                  >
                    Start Free Trial →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
