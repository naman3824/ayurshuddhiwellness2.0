'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useScrolled } from '../../hooks/useScrolled'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Links', href: '#' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const scrolled = useScrolled(10)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-all duration-300 ${
        scrolled ? 'border-b border-border shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl font-semibold text-foreground">
          AyurshuddhiWellness
        </Link>

        {/* Center nav — desktop */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-muted transition-all duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA — desktop */}
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover md:inline-flex"
        >
          Book Now
        </a>

        {/* Hamburger — mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-foreground"
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm uppercase tracking-widest text-muted transition-all duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-6 py-2.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:bg-primary-hover"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
