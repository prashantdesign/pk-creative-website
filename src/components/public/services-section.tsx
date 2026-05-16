'use client';
import React from 'react';
import { Palette, Globe, Layout, Search, Megaphone, Smartphone, Film, Briefcase, Box } from 'lucide-react';

const services = [
  {
    title: 'Branding',
    description: 'Crafting unique identities that tell your story and resonate with your audience.',
    icon: Palette,
  },
  {
    title: 'Website Development',
    description: 'Custom, responsive, and high-performance websites built with modern technologies.',
    icon: Globe,
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed for the best user experience.',
    icon: Layout,
  },
  {
    title: 'Social Media',
    description: 'Strategic social media handling and creative post designs to grow your presence.',
    icon: Megaphone,
  },
  {
    title: 'SEO & Marketing',
    description: 'Boosting your visibility and driving traffic with data-driven SEO and Ads.',
    icon: Search,
  },
  {
    title: 'Packaging Design',
    description: 'Premium product packaging designs that stand out on the shelves.',
    icon: Box,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Services</span></h2>
          <p className="text-gray-400 text-lg">
            We provide a wide range of creative and digital solutions to help your business grow in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass p-8 rounded-2xl hover-lift group relative overflow-hidden transition-all duration-500 hover:border-[#7B2EFF]/50"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B2EFF]/5 rounded-full -mr-16 -mt-16 group-hover:bg-[#7B2EFF]/10 transition-colors duration-500"></div>
              
              <div className="w-14 h-14 bg-gradient-purple rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(123,46,255,0.3)]">
                <service.icon className="text-white w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#7B2EFF] transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
              
              <div className="mt-8 flex items-center text-[#7B2EFF] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More 
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
