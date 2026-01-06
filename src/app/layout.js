import { Montserrat, Hind_Siliguri } from 'next/font/google'
import "./globals.css";
import { baseMetadata } from './metadata';

// Montserrat Font.
export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

// Hind Siliguri Font.
export const hindSiliguri = Hind_Siliguri({
  subsets: ['latin', 'bengali'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind-siliguri',
  display: 'swap',
})

// Metadata.
export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${hindSiliguri.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      
      <body>
        {children}
      </body>
    </html>
  );
}
