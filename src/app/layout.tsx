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

  authors: [{ name: 'AKR Networks' }],

  creator: 'AKR Networks',

  alternates: {
    canonical: 'https://akr-networks.de',
  },

  icons: {
    icon: '/logo.png',
    apple: '/apple-touch-icon.png',
  },

  openGraph: {
    title: 'AKR Networks | Smart Home & Netzwerk Lösungen',

    description:
      'Moderne Smart-Home-, Netzwerk- und Infrastruktur-Lösungen.',

    url: 'https://akr-networks.de',

    siteName: 'AKR Networks',

    locale: 'de_DE',

    type: 'website',

    images: [
      {
        url: 'https://akr-networks.de/logo.png',
        width: 1200,
        height: 630,
        alt: 'AKR Networks Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'AKR Networks',

    description:
      'Smart Home, WLAN, Netzwerk & moderne Infrastruktur.',

    images: ['https://akr-networks.de/logo.png'],
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',

  '@type': 'LocalBusiness',

  name: 'AKR Networks',

  url: 'https://akr-networks.de',

  logo: 'https://akr-networks.de/logo.png',

  image: 'https://akr-networks.de/logo.png',

  description:
    'Smart Home, Home Assistant, WLAN Optimierung, Netzwerkverkabelung und moderne Infrastruktur-Lösungen.',

  areaServed: [
    'Minden',
    'Bielefeld',
    'Herford',
    'Bad Oeynhausen',
    'Porta Westfalica',
    'Lübbecke',
    'Hannover',
    'Osnabrück',
    'Detmold',
    'NRW',
  ],

  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NRW',
    addressCountry: 'DE',
  },

  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaOrg),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  )
}