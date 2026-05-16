'use client';

import React from 'react';
import Image from 'next/image';
import type { SiteContent } from '@/types';

const AboutSection = ({ content }: { content: SiteContent | null }) => {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-purple opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
            <div className="relative glass rounded-3xl overflow-hidden aspect-square max-w-md mx-auto">
              <img 
                src={content?.aboutImageUrl || "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"} 
                alt="PK Creative Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#7B2EFF]/30 bg-[#7B2EFF]/10 text-[#7B2EFF] text-sm font-semibold tracking-wide">
              Who We Are
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Crafting <span className="text-gradient">Digital Excellence</span> <br /> Since 2020
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed whitespace-pre-wrap">
              {content?.aboutText ||
                "PK Creative is a modern creative digital agency focused on branding, websites, social media, and digital growth solutions. We build brands that grow and create digital experiences that businesses and their customers love."}
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="glass p-4 rounded-xl">
                <h4 className="text-[#7B2EFF] font-bold text-xl mb-1">Mission</h4>
                <p className="text-sm text-gray-500">To empower businesses with innovative digital solutions.</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <h4 className="text-[#7B2EFF] font-bold text-xl mb-1">Vision</h4>
                <p className="text-sm text-gray-500">To be the global leader in creative brand transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
