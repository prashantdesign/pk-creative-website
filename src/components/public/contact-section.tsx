'use client';

import React, { useEffect, useRef } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactForm, type FormState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const initialState: FormState = {
  message: '',
  error: false,
};


import { Phone, Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: state.message,
        });
      } else {
        toast({
          title: 'Success!',
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-[#7B2EFF]/30 bg-[#7B2EFF]/10 text-[#7B2EFF] text-sm font-semibold tracking-wide mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Let's Build Something <span className="text-gradient">Extraordinary</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind? We'd love to hear from you. Let's discuss how we can help your brand grow.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:info@pkcreative.in" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#7B2EFF] group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-lg font-medium group-hover:text-[#7B2EFF] transition-colors">info@pkcreative.in</p>
                </div>
              </a>

              <a href="https://wa.me/917880092829" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-[#7B2EFF] group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">WhatsApp</p>
                  <p className="text-lg font-medium group-hover:text-[#7B2EFF] transition-colors">+91 78800 92829</p>
                </div>
              </a>

              <div className="flex items-center gap-4 pt-4">
                <a href="https://instagram.com/pkcreative.in" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-purple transition-all">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com/company/pkcreative-in" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-purple transition-all">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-dark p-8 md:p-12 rounded-3xl border border-white/5">
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Name</Label>
                  <Input id="name" name="name" placeholder="John Doe" className="bg-white/5 border-white/10 rounded-xl py-6" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 rounded-xl py-6" required />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-gray-300">Business Name</Label>
                  <Input id="businessName" name="businessName" placeholder="Acme Inc." className="bg-white/5 border-white/10 rounded-xl py-6" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                  <Input id="phone" name="phone" placeholder="+91 ..." className="bg-white/5 border-white/10 rounded-xl py-6" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Project Details</Label>
                <Textarea id="message" name="message" placeholder="Tell us about your project..." className="bg-white/5 border-white/10 rounded-xl min-h-[120px]" required />
              </div>
              
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button 
      type="submit" 
      disabled={pending} 
      className="w-full py-7 rounded-xl font-bold text-lg bg-gradient-purple hover:opacity-90 shadow-[0_0_20px_rgba(123,46,255,0.2)] transition-all active:scale-[0.98]"
    >
      {pending ? 'Sending...' : 'Send Inquiry'}
    </Button>
  );
}
