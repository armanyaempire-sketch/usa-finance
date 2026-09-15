import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'USA Finance & Crypto | Money, Markets, Banking & Investing',
  description: 'A practical guide to U.S. finance covering personal money, banking, investing, housing, retirement, taxes, and cryptocurrency.',
  keywords: ['USA finance', 'US finance', 'personal finance', 'investing', 'crypto', 'cryptocurrency', 'banking', 'retirement'],
  openGraph: {
    title: 'USA Finance & Crypto',
    description: 'Money, markets, banking, investing, retirement, taxes and crypto explained in one practical guide.',
    type: 'article',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-US"><body>{children}</body></html>
}
