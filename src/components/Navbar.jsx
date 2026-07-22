import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Video, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-[#F5E8FF]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="#" className="flex items-center gap-2 group rounded px-2 py-1">
              <span className="w-3 h-3 rounded-full bg-[#A124DB] animate-pulse" />
              <span className="font-display text-2xl tracking-wider text-[#181124] font-bold">
                MAHESH
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-body text-xs font-semibold text-[#6D637C] hover:text-[#181124] transition-all uppercase tracking-wider rounded px-2 py-1"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-body text-xs font-bold uppercase tracking-wider text-white bg-[#181124] hover:bg-[#A124DB] px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#181124] hover:bg-black/5 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-black/5 bg-[#F5E8FF]"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-body font-medium text-[#6D637C] hover:text-[#181124] hover:bg-black/5 transition-all uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 w-full text-center font-body text-xs font-bold uppercase tracking-wider text-white bg-[#181124] hover:bg-[#A124DB] px-4 py-3 rounded-full transition-all shadow-md"
                >
                  <span>LET'S TALK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
