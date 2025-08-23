
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
  metadataBase: new URL("https://yourdomain.com"), // 🔴  domain
  title: {
    default: "Zarephath Nigerian Limited",
    template: "%s | Zarephath Nigerian Limited",
  },
  description:
    "Zarephath is a certified Nigerian food processing company delivering NAFDAC & FDA-approved, high-quality products across Africa and beyond. Rooted in tradition and powered by technology, we prioritize health, hygiene, and excellence.",
  keywords: [
    "Zarephath",
    "Nigerian food company",
    "NAFDAC certified",
    "FDA approved",
    "food processing Africa",
    "healthy food Nigeria",
  ],
  openGraph: {
    title: "Zarephath Nigerian Limited",
    description:
      "Certified Nigerian food processing company with NAFDAC & FDA approval, delivering trusted products across Africa.",
    url: "https://yourdomain.com",
    siteName: "Zarephath Nigerian Limited",
    images: [
      {
        url: "/seo-banner.png", // 🔴 banner image
        width: 1200,
        height: 630,
        alt: "Zarephath Nigerian Limited - Food Processing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zarephath Nigerian Limited",
    description:
      "NAFDAC & FDA-certified Nigerian food processing company delivering excellence.",
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
