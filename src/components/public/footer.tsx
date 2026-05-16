'use client';
import React from 'react';
import type { SiteContent } from '@/types';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import Logo from '../logo';

const Footer = ({ content }: { content: SiteContent | null }) => {
  const socialLinks = content?.socials;

  return (
    <footer className="bg-[#111111] border-t border-white/5 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center space-y-8">
          <Logo />
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#packages" className="text-gray-400 hover:text-white transition-colors">Packages</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/company/pkcreative-in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-purple transition-all">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/pkcreative.in" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-purple transition-all">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:info@pkcreative.in" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-purple transition-all">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 w-full flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 font-medium tracking-wide">&copy; {new Date().getFullYear()} PK Creative. All Rights Reserved.</p>
            <div className="flex items-center gap-6 text-xs text-gray-600 font-semibold tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
