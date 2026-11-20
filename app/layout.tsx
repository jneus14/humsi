import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

// Visitor counts go to HUMSI's own Umami (the one hiproject.org uses, on
// Railway). Both values are set on the Railway service; with no website id
// (local runs) no script is added.
const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

export const metadata: Metadata = {
  title: 'Human Security Initiative',
  description: 'HUMSI leads research, advocacy, and education promoting safety and dignity for all.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        {umamiUrl && umamiWebsiteId && (
          <Script
            src={`${umamiUrl}/script.js`}
            data-website-id={umamiWebsiteId}
            data-domains="humsi.org,www.humsi.org"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
