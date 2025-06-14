'use client';

import { usePathname } from 'next/navigation';
import { Navbar } from './Navbar';

export function ConditionalNavbar() {
  const pathname = usePathname();
  
  // Hide navbar on art-fabrication page - check multiple variations
  if (pathname && (pathname === '/art-fabrication' || 
      pathname === '/art-fabrication/' || 
      pathname.startsWith('/art-fabrication'))) {
    return null;
  }
  
  return <Navbar />;
} 