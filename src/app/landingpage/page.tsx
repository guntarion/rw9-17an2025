// src/app/landingpage/page.tsx
'use client';

import React from 'react';
import { HeroSection } from '@/components/website/HeroSection';
import { PainPointsSection } from '@/components/website/PainPointsSection';
import { FeaturesSection } from '@/components/website/FeaturesSection';
import { BenefitsSection } from '@/components/website/BenefitsSection';
import { HowItWorksSection } from '@/components/website/HowItWorksSection';
import { Navbar } from '@/components/website/Navbar';
import { Footer } from '@/components/website/Footer';

/**
 * Simple landing page template
 * Clean and minimal design showcasing the template features
 */
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <PainPointsSection />
        <FeaturesSection />
        <BenefitsSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
}
