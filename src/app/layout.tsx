import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AKR Networks',
  description:
    'Netzwerk, WLAN, Smart Home und Infrastruktur-Lösungen für Häuser und Unternehmen.',

  icons: {
    icon: '/logo.png',
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