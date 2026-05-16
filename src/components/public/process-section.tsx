'use client';
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Discussion',
    description: 'We start by understanding your goals, audience, and vision for the project.',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Strategizing the best approach, timeline, and structure for your brand.',
  },
  {
    number: '03',
    title: 'Designing',
    description: 'Creating modern and premium designs that reflect your brand identity.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Bringing it all together and launching your project to the world.',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Process</span></h2>
          <p className="text-gray-400 text-lg">
            A simple and effective 4-step process to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 glass rounded-2xl group hover:border-[#7B2EFF]/30 transition-all duration-300">
              <div className="text-5xl font-black text-[#7B2EFF]/10 absolute top-4 right-6 group-hover:text-[#7B2EFF]/20 transition-colors">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">{step.title}</h3>
              <p className="text-gray-400 relative z-10">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-[#7B2EFF]/50 to-transparent z-0"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
