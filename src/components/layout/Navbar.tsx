import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import useScrollProgress from '@/hooks/useScrollProgress';
import useActiveSection from '@/hooks/useActiveSection';
import { NAV_ITEMS } from '@/utils/constants';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(NAV_ITEMS);
  const scrolled = scrollProgress > 0.01;

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-0.5 z-[60] bg-gradient-to-r from-accent-indigo to-accent-cyan transition-all duration-100"
        style={{ width: `${scrollProgress * 100}%` }}
        aria-hidden
      />

      {/* Navbar */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-3 glass border-b border-white/5 shadow-glass' : 'py-5 border-b border-transparent'
        )}
      >
        <nav className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-sm font-semibold text-white hover:text-accent-indigo transition-colors"
          >
            <span className="text-accent-indigo">&lt;</span>
            Hans
            <span className="text-accent-indigo">/&gt;</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.sectionId}>
                <a
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    activeSection === item.sectionId
                      ? 'text-white bg-accent-indigo/15 border border-accent-indigo/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire me button — desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-accent-indigo to-accent-purple text-white shadow-glow-sm hover:shadow-glow-indigo hover:opacity-90 transition-all duration-200"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 glass rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 mx-4 glass rounded-2xl shadow-glass overflow-hidden"
            >
              <ul className="p-4 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.sectionId}>
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                        activeSection === item.sectionId
                          ? 'text-white bg-accent-indigo/15'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 mt-1 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-center px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-accent-indigo to-accent-purple text-white"
                  >
                    Hire Me
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
