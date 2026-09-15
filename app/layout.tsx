import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
title: 'USA Finance & Crypto | Money, Markets, Banking & Investing',
description:
'A practical guide to U.S. finance covering personal money, banking, investing, housing, retirement, taxes, and cryptocurrency.',
keywords: [
'USA finance',
'US finance',
'personal finance',
'investing',
'crypto',
'cryptocurrency',
'banking',
'retirement',
],
openGraph: {
title: 'USA Finance & Crypto',
description:
'Money, markets, banking, investing, retirement, taxes and crypto explained in one practical guide.',
type: 'article',
},
}

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode
}>) {
return ( <html lang="en-US"> <head>
{/* USA Finance Popunder */} <script src="https://pl31358481.profitableratecpmnetwork.com/c5/eb/52/c5eb52d2fd43f4d4956ba60d308f994a.js" /> </head>


  <body>
    {children}

    {/* USA Finance Social Bar */}
    <script src="https://pl31358489.profitableratecpmnetwork.com/a9/9f/2f/a99f2f10ab042387aa2b6eb6080025e0.js" />
  </body>
</html>


)
}
