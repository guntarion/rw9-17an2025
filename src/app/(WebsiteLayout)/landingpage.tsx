// src/app/(WebsiteLayout)/landingpage.tsx
'use client';

import React from 'react';
import { HeroSection } from '@/components/website/HeroSection';
import { PainPointsSection } from '@/components/website/PainPointsSection';
import { FeaturesSection } from '@/components/website/FeaturesSection';
import { BenefitsSection } from '@/components/website/BenefitsSection';
import { HowItWorksSection } from '@/components/website/HowItWorksSection';

/**
 * Simple landing page component
 * Clean template showcasing core features
 */
export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
    </>
  );
}
