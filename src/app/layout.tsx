import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AKR Networks | Smart Home & Netzwerk Lösungen',

  description:
    'Smart Home, Home Assistant, WLAN Optimierung, Netzwerkverkabelung und moderne Infrastruktur-Lösungen für Häuser und Unternehmen.',

  keywords: [
    'Smart Home',
    'Home Assistant',
    'WLAN Optimierung',
    'Netzwerkverkabelung',
    'Kamerasysteme',
    'Netzwerk',
    'Infrastruktur',
    'AKR Networks',
  ],

  authors: [
    {
      name: 'AKR Networks',
    },
  ],

  creator: 'AKR Networks',

  icons: {
    icon: '/logo.png',
  },

  openGraph: {
    title: 'AKR Networks',
    description:
      'Moderne Smart-Home-, Netzwerk- und Infrastruktur-Lösungen.',
    url: 'https://akr-networks.de',
    siteName: 'AKR Networks',
    locale: 'de_DE',
    type: 'website',

    images: [
      {
        url: '/dashboard.png',
        width: 1200,
        height: 630,
        alt: 'AKR Networks',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AKR Networks',
    description:
      'Smart Home, WLAN, Netzwerk & moderne Infrastruktur.',
    images: ['/dashboard.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}