import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

// Visitor counts go to HUMSI's own Umami (the one hiproject.org uses, on
// Railway). Neither value is a secret: both are in every page a visitor
// loads. The script only counts visits to humsi.org itself (data-domains
// below), so local runs and the Railway address are left out.
const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL || "https://umami-production-e2a8.up.railway.app"
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "4a231d16-49f1-45a6-a407-54d558471c1a"

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
