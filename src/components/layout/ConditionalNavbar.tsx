'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

export function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide navbar on art-fabrication page
  if (pathname === '/art-fabrication') {
    return null;
  }
  
  return <Navbar />;
} 