import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  verification: {
    google: "pCI23x8QkqEkm14y5vcYidDqNBFz646fRm5d15_hts4",
  },
  title: {
    default: "Premium Bamboo Salt from Nepal | Arun Bamboo Salt",
    template: "%s | Arun Bamboo Salt",
  },
  description:
    "Premium quality bamboo salt crafted by Arun Neupane in Nepal. 100% natural, 9x roasted in bamboo — detoxify, alkalize, and elevate your wellness naturally.",
  keywords: [
    "Arun Bamboo Salt",
    "Bamboo Salt",
    "Nepal Bamboo Salt",
    "Natural Health",
    "Detoxify",
    "Roasted Salt",
    "Himalayan Salt",
    "Alkaline Salt",
    "Organic Salt Nepal",
    "Bamboo Salt Benefits",
    "Korean Bamboo Salt",
    "Jukyeom",
    "Wellness Salt",
    "Mineral Rich Salt",
    "Arun Neupane",
  ],
  authors: [{ name: "Arun Neupane" }],
  creator: "Arun Neupane",
  publisher: "Arun Neupane",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bamboosalt.sajilodigital.com.np" || "https://bamboosalt.vercel.app"),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://bamboosalt.sajilodigital.com.np" || "https://bamboosalt.vercel.app",
  },
  openGraph: {
    title: "Premium Bamboo Salt from Nepal | Arun Bamboo Salt",
    description:
      "Premium quality bamboo salt crafted by Arun Neupane in Nepal. 100% natural, 9x roasted in bamboo — detoxify, alkalize, and elevate your wellness naturally.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bamboosalt.sajilodigital.com.np" || "https://bamboosalt.vercel.app",
    siteName: "Arun Bamboo Salt",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arun Bamboo Salt - Premium Quality Himalayan Bamboo Salt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Bamboo Salt from Nepal | Arun Bamboo Salt",
    description:
      "Premium quality bamboo salt crafted by Arun Neupane in Nepal. 100% natural, 9x roasted in bamboo — detoxify, alkalize, and elevate your wellness naturally.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-sans bg-stone-50 text-stone-900 pb-20 md:pb-0">
        {children}
      </body>
    </html>
  );
}
