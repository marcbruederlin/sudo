import type { Metadata } from 'next'
import { Source_Sans_3 as FontSans } from 'next/font/google'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { cn } from '@/lib/utils'
import '@/styles/globals.css'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'SUDO',
  description:
    'Sudo is a minimalistic portfolio template for photographers, design studios and creative people.',
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          'scroll-smooth bg-background font-sans text-foreground antialiased dark:bg-foreground dark:text-background',
          fontSans.className,
        )}
      >
        <div className="mx-auto max-w-[1360px] px-10">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
