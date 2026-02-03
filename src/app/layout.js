import "./globals.css";
import { Montserrat, Hind_Siliguri } from "next/font/google";
import { baseMetadata } from "./metadata";
import Navbar from "@/components/shared/navbar/Navbar";


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

// METADATA
export const metadata = baseMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${hind.variable} font-montserrat`} data-theme="light">
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
      <body className="bg-ghost-white">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
