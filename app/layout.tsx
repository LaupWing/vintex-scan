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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", playfair.variable, inter.variable)}>
      <body className="min-h-full flex flex-col bg-[#F5F0EA]">
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
