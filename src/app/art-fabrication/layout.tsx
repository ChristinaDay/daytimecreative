import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from 'next-themes'
import '../globals.css'
import { Inter, Prata } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const prata = Prata({ subsets: ['latin'], weight: ['400'], variable: '--font-prata' });

export const metadata = {
  title: 'Art Fabrication - Christina Day',
  description: 'Art fabrication gallery showcasing hands-on work at Local Language studio in Oakland, CA',
}

export default function ArtFabricationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Force hide any navbar elements on art-fabrication page */
          nav, .navbar, [role="navigation"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
          }
        `
      }} />
      {children}
    </>
  )
} 