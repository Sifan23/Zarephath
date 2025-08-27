
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zarephathfood.vercel.app"), 
  title: {
    default: "Zarephath Nigerian Limited",
    template: "%s | Zarephath Nigerian Limited",
  },
  description:
    "Zarephath Nigerian Limited is a certified agribusiness company in Lagos, Nigeria, producing preservative-free foods like plantain flour, red palm oil, garri, and roasted peanuts. NAFDAC-compliant, export-ready, and trusted across Africa and beyond.",
  keywords: [
    "Zarephath",
    "Nigerian food company",
    "African agribusiness",
    "plantain flour Nigeria",
    "red palm oil",
    "garri Nigeria",
    "roasted peanuts",
    "NAFDAC certified",
    "healthy foods Africa",
    "export-ready food products",
  ],
  openGraph: {
    title: "Zarephath Nigerian Limited",
    description:
      "Zarephath Nigerian Limited produces natural, preservative-free foods including unripe plantain flour, red palm oil, garri, and roasted peanuts. Trusted in Nigeria and beyond.",
    url: "https://zarephathfood.vercel.app",
    siteName: "Zarephath Nigerian Limited",
    images: [
      {
        url: "/seo-banner.png", // 👈 we’ll create this
        width: 1200,
        height: 630,
        alt: "Zarephath Nigerian Limited - Natural Nigerian Food Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarephath Nigerian Limited",
    description:
      "Export-ready Nigerian food company producing plantain flour, palm oil, garri, and roasted peanuts.",
    images: ["/seo-banner.png"],
  },
  icons: {
    icon: "/logo.svg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
