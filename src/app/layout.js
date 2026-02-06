import "./globals.css";
import { Montserrat, Hind_Siliguri } from "next/font/google";
import { baseMetadata } from "./metadata";
import 'animate.css';


const montserrat = Montserrat({
subsets: ["latin"],
variable: "--font-montserrat",
weight: ["300", "400", "500", "600", "700"],
});


const hind = Hind_Siliguri({
subsets: ["latin"],
variable: "--font-hind",
weight: ["300", "400", "500", "600", "700"],
});

// VIEWPORT
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#EE7411",
};

// METADATA
export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${hind.variable} font-montserrat`} data-theme="light">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-ghost-white">
        {children}
      </body>
    </html>
  );
}
