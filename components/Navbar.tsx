'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Global Network', href: '/global-network' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <Image
            src="/images/gimsco-logo.png"
            alt="GIMSCO"
            width={180}
            height={60}
            priority
            className="logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link ${
                item.label === 'Home' ? 'active' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Quote Button */}
        <Link href="/contact" className="quote-button">
          REQUEST A QUOTE
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`menu-button ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? 'show' : ''}`}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`mobile-nav-link ${
              item.label === 'Home' ? 'active' : ''
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="mobile-quote-button"
          onClick={() => setMenuOpen(false)}
        >
          REQUEST A QUOTE
        </Link>
      </div>
    </header>
  );
}