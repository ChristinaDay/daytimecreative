import { GeistMono } from 'geist/font/mono'
import { ConditionalMainLayout } from '@/components/layout/ConditionalMainLayout'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Inter, Prata } from 'next/font/google'
import { ConditionalNavbar } from '@/components/layout/ConditionalNavbar'

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
          <ConditionalNavbar />
          <ConditionalMainLayout>
            {children}
          </ConditionalMainLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
