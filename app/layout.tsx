import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vintexscan.com"),
  title: "VintexScan — Value Your Vintage",
  description: "Upload a photo and get an instant value estimate for your vintage item.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "VintexScan — Value Your Vintage",
    description: "Upload a photo and get an instant value estimate for your vintage item.",
    url: "https://www.vintexscan.com",
    siteName: "VintexScan",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "VintexScan",
  url: "https://www.vintexscan.com",
  description: "Upload a photo and get an instant value estimate for your vintage item.",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  publisher: {
    "@type": "Organization",
    name: "VintexScan",
    url: "https://www.vintexscan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", playfair.variable, inter.variable)}>
      <head>
        <meta name="google-site-verification" content="juxl8FrwSJxRhK4mAHC613b2ntJL6LoBwtsD6WJuBLA" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SXDYZCP1LT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SXDYZCP1LT');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F5F0EA]">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
