// src/components/website/PainPointsSection.tsx
import React from 'react';
import { Clock, Database, CheckCircle, Factory } from 'lucide-react';
import { painPointsData } from '@/data/landing-page-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Pain Points section component 
 * Displays common challenges that the product solves
 */
export function PainPointsSection() {
  // Icon mapping to render the appropriate Lucide icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClockIcon':
        return <Clock className="h-12 w-12 text-blue-600" />;
      case 'DatabaseIcon':
        return <Database className="h-12 w-12 text-blue-600" />;
      case 'CheckCircleIcon':
        return <CheckCircle className="h-12 w-12 text-blue-600" />;
      case 'FactoryIcon':
        return <Factory className="h-12 w-12 text-blue-600" />;
      default:
        return <Clock className="h-12 w-12 text-blue-600" />;
    }
  };

  return (
    <section id="pain-points" className="py-16 lg:py-24 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {painPointsData.headline}
          </h2>
          <p className="text-xl text-gray-600">
            Kami memahami tantangan dalam mengelola seragam organisasi Anda. UniformAI hadir untuk menyederhanakan proses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPointsData.cards.map((card, index) => (
            <Card key={index} className="border border-blue-100 bg-white transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pt-6">
                <div className="mb-4">
                  {getIcon(card.icon)}
                </div>
                <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
