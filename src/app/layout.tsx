import { GeistMono } from 'geist/font/mono'
import { MainLayout } from '@/components/layout/MainLayout'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Inter, Prata } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const prata = Prata({ subsets: ['latin'], weight: ['400'], variable: '--font-prata' });

export const metadata = {
  title: 'Christina Day - Design Portfolio',
  description: 'Design portfolio of Christina Day',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${prata.variable} ${GeistMono.variable}`}>
      <body className="bg-transparent">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <MainLayout>
            {children}
          </MainLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
