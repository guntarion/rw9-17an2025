// src/components/website/HeroSection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { heroData } from '@/data/landing-page-data';
import { ArrowRight, Code, Database, Zap } from 'lucide-react';

/**
 * Hero section component for the landing page
 * Contains main headline, subheadline, CTA button and hero image
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/50"></div>
        <div className="absolute bottom-0 left-1/2 w-screen h-1/2 bg-gradient-to-b from-transparent to-blue-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6 max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                {heroData.headline}
              </h1>
              <p className="text-xl text-gray-600 md:pr-10">
                {heroData.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                <Button asChild size="lg" className="px-8 py-6 text-lg font-medium">
                  <Link href={heroData.ctaButtonLink}>
                    {heroData.ctaButtonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg font-medium">
                  <Link href="/dashboard">
                    View Dashboard
                  </Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Code className="h-5 w-5 text-green-500" />
                  <span className="ml-2">Modern Stack</span>
                </div>
                <div className="flex items-center">
                  <Database className="h-5 w-5 text-green-500" />
                  <span className="ml-2">Full-Stack</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-5 w-5 text-green-500" />
                  <span className="ml-2">AI Ready</span>
                </div>
              </div>
            </div>
            
            <div className="relative flex justify-center lg:justify-end">
              {/* Placeholder for hero illustration */}
              <div className="relative h-[400px] md:h-[500px] w-full max-w-[600px] rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-blue-600 font-medium">Next.js Template</p>
                  <p className="text-gray-500 text-sm">Ready to Launch</p>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -bottom-6 -left-8 w-32 h-32 bg-blue-500/10 rounded-xl transform rotate-12"></div>
              <div className="absolute -top-4 right-10 w-20 h-20 bg-blue-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
