// src/components/website/HowItWorksSection.tsx
import React from 'react';
import { howItWorksData } from '@/data/landing-page-data';

/**
 * How It Works section component
 * Shows the process flow of how the product works
 */
export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {howItWorksData.headline}
          </h2>
          <p className="text-xl text-gray-600">
            Proses sederhana dan efisien dari awal hingga akhir
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Placeholder for process flow illustration */}
          <div className="h-64 mb-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <p className="text-blue-500 font-medium">Process Flow Illustration Placeholder</p>
            {/* Uncomment when image is available */}
            {/* <Image 
              src="/images/landing/how-it-works.svg"
              alt="How UniformAI works process flow"
              width={1000}
              height={250}
              className="object-contain"
            /> */}
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {howItWorksData.steps.map((step) => (
              <div 
                key={step.number} 
                className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 relative"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-center mt-4 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-32 left-0 w-full h-1 bg-blue-200 -z-10">
            <div className="absolute top-0 left-1/10 w-1 h-8 bg-blue-200"></div>
            <div className="absolute top-0 left-3/10 w-1 h-8 bg-blue-200"></div>
            <div className="absolute top-0 left-1/2 w-1 h-8 bg-blue-200"></div>
            <div className="absolute top-0 left-7/10 w-1 h-8 bg-blue-200"></div>
            <div className="absolute top-0 left-9/10 w-1 h-8 bg-blue-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
