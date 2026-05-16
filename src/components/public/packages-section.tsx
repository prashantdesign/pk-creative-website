'use client';

import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Branding Starter',
    price: '₹14,999',
    description: 'Perfect for new businesses looking for a professional identity.',
    features: [
      'Logo Design (2 Options)',
      'Color Palette & Typography',
      'Business Card Design',
      'Social Media Kit (Profile & Banner)',
      'Brand Guidelines (Basic)'
    ],
    popular: false
  },
  {
    name: 'Business Website',
    price: '₹29,999',
    description: 'A high-converting website to grow your business online.',
    features: [
      'Up to 5 Premium Pages',
      'Mobile Responsive Design',
      'SEO Optimization',
      'Contact Form Integration',
      '1 Year Free Hosting',
      'WhatsApp Integration'
    ],
    popular: true
  },
  {
    name: 'Full Agency Scale',
    price: 'Custom',
    description: 'Comprehensive digital solution for serious growth.',
    features: [
      'Full Branding Identity',
      'Custom E-commerce/Web App',
      'Social Media Management (1 Mo)',
      'Content Strategy',
      'Performance Marketing Setup',
      'Priority Support'
    ],
    popular: false
  }
];

export default function PackagesSection() {
  return (
    <section id="packages" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7B2EFF]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#7B2EFF]/30 bg-[#7B2EFF]/10 text-[#7B2EFF] text-sm font-semibold tracking-wide mb-4">
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to <span className="text-gradient">Level Up?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Transparent pricing for businesses at every stage. Choose the plan that fits your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative glass-dark p-8 rounded-3xl border ${pkg.popular ? 'border-[#7B2EFF]/50' : 'border-white/5'} flex flex-col hover-lift transition-all duration-500`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-purple text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pkg.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold">{pkg.price}</span>
                {pkg.price !== 'Custom' && <span className="text-gray-500 text-sm ml-2">/ project</span>}
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="h-5 w-5 text-[#7B2EFF] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-6 rounded-xl font-bold text-base transition-all duration-300 ${pkg.popular ? 'bg-gradient-purple hover:opacity-90' : 'bg-white/10 hover:bg-white/20 text-white'}`}
              >
                {pkg.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
