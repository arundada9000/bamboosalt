import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Premium Bamboo Salt from Nepal | Nepal Bamboo Salt",
  description: "Ancient roasting process. Modern health benefits. Detoxify and improve health with 100% natural Nepal Bamboo Salt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}
