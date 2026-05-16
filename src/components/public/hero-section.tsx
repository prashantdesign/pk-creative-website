'use client';
import React from 'react';
import type { SiteContent } from '@/types';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = ({ content }: { content: SiteContent | null }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2EFF]/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5B21B6]/20 rounded-full blur-[120px] -z-10 animate-pulse animation-delay-600"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#7B2EFF]/30 bg-[#7B2EFF]/10 text-[#7B2EFF] text-sm font-semibold tracking-wide animate-fade-in-up">
            #1 Creative Agency in India
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] animate-fade-in-up animation-delay-300">
            We Build <span className="text-gradient">Brands</span> <br /> That Grow
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-xl animate-fade-in-up animation-delay-600">
            Creative branding, websites, and digital experiences designed to help businesses stand out online.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
            <a 
              href="/portfolio" 
              className="bg-gradient-purple px-8 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_30px_rgba(123,46,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Portfolio
            </a>
            <a 
              href="/contact" 
              className="glass px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Start Project
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in-up animation-delay-600">
          <div className="relative z-10 purple-glow rounded-2xl overflow-hidden border border-white/10 glass">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
              alt="Creative Agency Mockup" 
              className="w-full h-auto opacity-90"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-purple rounded-2xl -z-10 rotate-12 blur-sm opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#5B21B6] rounded-full -z-10 blur-2xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
