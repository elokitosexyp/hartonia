'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Contacto', href: '/contacto' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/harton.node.ai?igsh=MTQ0amY3aXQwOHY3Yw==',
      icon: Instagram,
    },
  ];

  return (
    <nav className="bg-bg-secondary/95 backdrop-blur-xl border-b border-border-light sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logosinletra.png"
                alt="Harton Logo"
                width={70}
                height={70}
                className="object-contain"
              />
              <span className="text-3xl font-extrabold bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent">
                Harton
              </span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className="text-lg font-semibold text-text-secondary hover:text-accent-cyan transition-all duration-300 relative group"
            >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-purple transition-all duration-300 group-hover:w-full"></span>
            </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-6">
            {socialLinks.map((link, index) => (
            <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 text-accent-cyan hover:from-accent-cyan hover:to-accent-purple hover:text-bg-primary transition-all duration-300 hover:shadow-glow-cyan"
                aria-label={link.name}
            >
                <link.icon className="w-6 h-6" />
            </a>
            ))}
          </div>

          {/* Mobile Section */}
          <div className="md:hidden flex items-center gap-4">
            {socialLinks.map((link, index) => (
            <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 text-accent-cyan"
                aria-label={link.name}
            >
                <link.icon className="w-5 h-5" />
            </a>
            ))}
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-primary p-2">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-border-light">
          <div className="px-6 pt-6 pb-8 space-y-4">
            {navItems.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className="block px-5 py-4 rounded-2xl text-text-primary hover:bg-bg-tertiary hover:text-accent-cyan transition-all duration-300 text-lg font-medium"
                onClick={() => setIsOpen(false)}
            >
                {item.label}
            </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
