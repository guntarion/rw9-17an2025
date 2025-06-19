'use client';

import React from 'react';
import { ThemeProvider } from '@/components/theme/theme-provider';
import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
