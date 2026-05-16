'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/logo';

const Header = ({ siteName }: { siteName?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Packages', href: '#packages' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? 'glass-dark py-4 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <a href="/" className="flex items-center group">
          <Logo className="transition-transform duration-300 group-hover:scale-105" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#7B2EFF] opacity-80 hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/contact" 
            className="ml-4 bg-gradient-purple px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_20px_rgba(123,46,255,0.4)] transition-all duration-300 active:scale-95"
          >
            Start Project
          </a>
        </nav>
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-transform duration-500 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-3xl font-bold tracking-tight transition-colors hover:text-[#7B2EFF]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="/contact" 
            className="mt-4 bg-gradient-purple px-10 py-4 rounded-full text-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Start Project
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
