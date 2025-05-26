import type { Metadata } from 'next'
import Script from 'next/script';
import './globals.css'
import '../styles/custom.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        {GA_ID && (
  <>
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      strategy="afterInteractive"
    />
    <Script id="ga-init" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </>
)}
      </head>
      <body>{children}</body>
    </html>
  );
}

