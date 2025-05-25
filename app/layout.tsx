import type { Metadata } from 'next'
import './globals.css'
import '../styles/custom.css'

export const metadata: Metadata = {
  title: 'Coriano Harris Website',
  description: 'Coriano Harris services site',
  icons: {
    icon: '/favicon.ico',
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
