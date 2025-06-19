// src/components/website/BenefitsSection.tsx
import React from 'react';
import { Clock, Coins, Smile, Shield } from 'lucide-react';
import { benefitsData } from '@/data/landing-page-data';

/**
 * Benefits section component
 * Highlights the main advantages of using the product
 */
export function BenefitsSection() {
  // Icon mapping to render the appropriate Lucide icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TimeIcon':
        return <Clock className="h-10 w-10 text-white" />;
      case 'CoinsIcon':
        return <Coins className="h-10 w-10 text-white" />;
      case 'SmileIcon':
        return <Smile className="h-10 w-10 text-white" />;
      case 'ShieldIcon':
        return <Shield className="h-10 w-10 text-white" />;
      default:
        return <Clock className="h-10 w-10 text-white" />;
    }
  };

  const gradients = [
    'from-blue-600 to-blue-500',
    'from-teal-600 to-teal-500',
    'from-purple-600 to-purple-500',
    'from-indigo-600 to-indigo-500'
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {benefitsData.headline}
          </h2>
          <p className="text-xl text-gray-600">
            Lihat bagaimana UniformAI dapat mengubah pengelolaan seragam untuk organisasi Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitsData.benefits.map((benefit, index) => (
            <div key={index} className="relative overflow-hidden rounded-xl shadow-md">
              <div className={`p-8 bg-gradient-to-br ${gradients[index % gradients.length]}`}>
                <div className="mb-4 bg-white/20 p-3 inline-block rounded-lg">
                  {getIcon(benefit.icon)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </div>
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
