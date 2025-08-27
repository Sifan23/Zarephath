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
  authors: [{ name: "Zarephath Nigerian Limited" }],
  creator: "Zarephath Nigerian Limited",
  publisher: "Zarephath Nigerian Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Zarephath Nigerian Limited",
    description:
      "Zarephath Nigerian Limited produces natural, preservative-free foods including unripe plantain flour, red palm oil, garri, and roasted peanuts. Trusted in Nigeria and beyond.",
    url: "https://zarephathfood.vercel.app",
    siteName: "Zarephath Nigerian Limited",
    images: [
      {
        url: "/seo-banner.png",
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
  alternates: {
    canonical: "https://zarephathfood.vercel.app",
  },
  icons: {
    icon: "/logo.svg",
  },
  other: {
  "theme-color": "#15803d", 
  "msapplication-TileColor": "#15803d",
 }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zarephath Nigerian Limited",
              url: "https://zarephathfood.vercel.app",
              logo: "https://zarephathfood.vercel.app/logo.svg",
              description:
                "Zarephath Nigerian Limited is a certified agribusiness company in Lagos, Nigeria, producing preservative-free foods like plantain flour, red palm oil, garri, and roasted peanuts.",
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourpage",
                "https://twitter.com/yourpage",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+234XXXXXXXXXX",
                contactType: "customer service",
                areaServed: "NG",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
