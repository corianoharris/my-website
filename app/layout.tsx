import type { Metadata } from 'next'
import './globals.css'
import '../styles/custom.css'

export const metadata: Metadata = {
  title: 'Coriano Harris | Ideas. Design. Code. Impact.',
  description: 'Coriano Harris services site',
  icons: {
    icon: '/images/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
