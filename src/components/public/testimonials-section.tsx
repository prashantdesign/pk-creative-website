'use client';
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ankit Sharma',
    company: 'Tech Solutions',
    text: 'PK Creative transformed our brand identity completely. The new website is fast, modern, and has significantly increased our leads.',
    image: 'https://i.pravatar.cc/150?u=ankit',
  },
  {
    name: 'Sonal Verma',
    company: 'Creative Studio',
    text: 'Working with PK Creative was a breeze. They understood our vision perfectly and delivered a stunning portfolio site.',
    image: 'https://i.pravatar.cc/150?u=sonal',
  },
  {
    name: 'Rahul Gupta',
    company: 'E-com Hub',
    text: 'Their attention to detail in packaging design is unmatched. Highly recommend for any premium branding work.',
    image: 'https://i.pravatar.cc/150?u=rahul',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client <span className="text-gradient">Testimonials</span></h2>
          <p className="text-gray-400 text-lg">
            Hear what our clients have to say about our work and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="glass p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-8 text-[#7B2EFF]/20 w-12 h-12" />
              <p className="text-gray-300 italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[#7B2EFF]/50" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
