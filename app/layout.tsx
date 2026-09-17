import type { Metadata } from 'next'
import Script from 'next/script'
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
  return (
    <html lang="en-US">
      <head>
        {/* USA Finance Popunder */}
        <script src="https://pl31358481.profitableratecpmnetwork.com/c5/eb/52/c5eb52d2fd43f4d4956ba60d308f994a.js" />
      </head>

      <body>
        {children}

        {/* USA Finance Social Bar */}
        <script src="https://pl31358489.profitableratecpmnetwork.com/a9/9f/2f/a99f2f10ab042387aa2b6eb6080025e0.js" />

        {/* USA Finance auto-scroll: 15 seconds */}
        <Script id="usa-finance-auto-scroll" strategy="afterInteractive">
          {`
            (() => {
              const duration = 15000;
              const articleRatio = 0.45;

              const easeInOut = (t) => {
                return t < 0.5
                  ? 4 * t * t * t
                  : 1 - Math.pow(-2 * t + 2, 3) / 2;
              };

              const startAutoScroll = () => {
                const article = document.querySelector('.article');

                if (!article) {
                  window.requestAnimationFrame(startAutoScroll);
                  return;
                }

                const articleRect = article.getBoundingClientRect();
                const articleTop = articleRect.top + window.scrollY;
                const articleHeight = article.offsetHeight;

                const targetPosition =
                  articleTop +
                  articleHeight * articleRatio -
                  window.innerHeight / 2;

                const maxScroll =
                  document.documentElement.scrollHeight -
                  window.innerHeight;

                const finalPosition = Math.max(
                  0,
                  Math.min(targetPosition, maxScroll)
                );

                const startPosition = window.scrollY;
                const distance = finalPosition - startPosition;

                if (Math.abs(distance) < 2) {
                  return;
                }

                const startTime = performance.now();

                const animateScroll = (currentTime) => {
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);
                  const eased = easeInOut(progress);

                  window.scrollTo(
                    0,
                    startPosition + distance * eased
                  );

                  if (progress < 1) {
                    window.requestAnimationFrame(animateScroll);
                  }
                };

                window.requestAnimationFrame(animateScroll);
              };

              startAutoScroll();
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
