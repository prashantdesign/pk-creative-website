'use client';
import React from 'react';
import type { SiteContent } from '@/types';

const StatsSection = ({ content }: { content: SiteContent | null }) => {
  const defaultStats = [
    { value: '250+', label: 'Projects Completed' },
    { value: '150+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' }
  ];

  const stats = content?.stats && content.stats.length > 0 ? content.stats : defaultStats;

  return (
    <section id="stats" className="py-24 bg-[#111111] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass p-10 rounded-3xl text-center group hover-lift transition-all duration-500 border border-white/5"
            >
              <p className="text-6xl font-bold text-gradient mb-3 group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
              <p className="text-gray-400 font-semibold tracking-widest uppercase text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
