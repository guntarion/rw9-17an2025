// src/components/website/FeaturesSection.tsx
import React from 'react';
import { Palette, GitMerge, Ruler, Truck, BarChart2 } from 'lucide-react';
import { featuresData } from '@/data/landing-page-data';

/**
 * Features section component
 * Displays the main features of the product with icons and descriptions
 */
export function FeaturesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PaletteIcon':
        return <Palette className="h-8 w-8 text-blue-600" />;
      case 'WorkflowIcon':
        return <GitMerge className="h-8 w-8 text-blue-600" />;
      case 'RulerIcon':
        return <Ruler className="h-8 w-8 text-blue-600" />;
      case 'TruckIcon':
        return <Truck className="h-8 w-8 text-blue-600" />;
      case 'ChartIcon':
        return <BarChart2 className="h-8 w-8 text-blue-600" />;
      default:
        return <Palette className="h-8 w-8 text-blue-600" />;
    }
  };

  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {featuresData.headline}
          </h2>
          <p className="text-xl text-gray-600">
            Platform terpadu kami menawarkan semua yang Anda butuhkan untuk mengelola seluruh siklus hidup seragam Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {featuresData.features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 md:w-[240px] h-[180px] rounded-lg overflow-hidden bg-blue-100 flex items-center justify-center">
                {/* Placeholder for feature image */}
                <p className="text-blue-500 font-medium">Feature Image Placeholder</p>
                {/* Uncomment when images are available */}
                {/* <Image
                  src={`/images/landing/feature-${feature.icon.toLowerCase().replace('icon', '')}.jpg`}
                  alt={feature.title}
                  width={240}
                  height={180}
                  className="object-cover"
                /> */}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {getIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {index === 0 && (
                    <>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Rekomendasi desain berbasis AI</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Visualisasi 3D</span>
                      </li>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Notifikasi otomatis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Alur kerja yang dapat disesuaikan</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
