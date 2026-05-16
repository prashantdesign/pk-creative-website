"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import type { Project, SiteContent } from '@/types';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';
import { COLLECTIONS, DOCS } from '@/lib/db-schema';

import Header from '@/components/public/header';
import HeroSection from '@/components/public/hero-section';
import AboutSection from '@/components/public/about-section';
import PortfolioSection from '@/components/public/portfolio-section';
import ContactSection from '@/components/public/contact-section';
import Footer from '@/components/public/footer';
import ProjectModal from '@/components/public/project-modal';
import StatsSection from '@/components/public/stats-section';
import GallerySection from '@/components/public/gallery-section';
import SkillsSection from '@/components/public/skills-section';
import ServicesSection from '@/components/public/services-section';
import ProcessSection from '@/components/public/process-section';
import TestimonialsSection from '@/components/public/testimonials-section';
import PackagesSection from '@/components/public/packages-section';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const firestore = useFirestore();

  const siteContentRef = useMemoFirebase(() => firestore ? doc(firestore, COLLECTIONS.SITE_CONTENT, DOCS.SITE_SETTINGS) : null, [firestore]);
  const { data: siteContent, loading } = useDoc<SiteContent>(siteContentRef);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#pkadmin') {
        router.push('/login');
      }
    };
    
    handleHashChange(); // Check on initial load
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [router]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  if (loading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black">
        <div className="w-16 h-16 border-4 border-[#7B2EFF] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (siteContent?.isMaintenanceModeEnabled) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center text-center p-4 bg-black text-white">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4">Under Maintenance</h1>
          <p className="text-gray-400 text-lg">PK Creative is currently undergoing some updates. Please check back soon!</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col min-h-screen bg-[#111111] ${siteContent?.areAnimationsEnabled ? '' : 'no-animations'}`}>
      <Header siteName={siteContent?.siteName || 'PK Creative'} />
      <main className="flex-grow">
        <HeroSection content={siteContent} />
        <ServicesSection />
        <AboutSection content={siteContent} />
        <StatsSection content={siteContent} />
        <ProcessSection />
        <PackagesSection />
        <PortfolioSection content={siteContent} onProjectClick={handleProjectClick} />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer content={siteContent} />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

    