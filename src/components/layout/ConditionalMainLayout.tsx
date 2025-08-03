'use client';

import { usePathname } from 'next/navigation';
import { MainLayout } from './MainLayout';

export function ConditionalMainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Skip MainLayout wrapper for pages with custom cosmic backgrounds
  if (pathname === '/art-fabrication') {
    return <>{children}</>;
  }
  
  return <MainLayout>{children}</MainLayout>;
} 