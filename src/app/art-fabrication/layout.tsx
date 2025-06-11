import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from 'next-themes'
import '../globals.css'
import { Inter, Prata } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const prata = Prata({ subsets: ['latin'], weight: ['400'], variable: '--font-prata' });

export default function ArtFabricationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${prata.variable} ${GeistMono.variable}`}>
      <head>
        <title>Art Fabrication - Christina Day</title>
        <meta name="description" content="Art fabrication gallery showcasing hands-on work at Local Language studio in Oakland, CA" />
      </head>
      <body className="bg-transparent">
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 