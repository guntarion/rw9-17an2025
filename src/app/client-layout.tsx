'use client';

import React from 'react';
import { ThemeProvider } from '@/components/theme/theme-provider';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
