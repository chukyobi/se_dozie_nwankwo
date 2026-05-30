import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Great_Vibes, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
// NOTE: Assuming your components paths are correct:
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Hon. Ferdinard Dozie Nwnakwo",
  description: "Honorable of the Federal Republic of Nigeria ",
  
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#27AE60" },
    { media: "(prefers-color-scheme: dark)", color: "#27AE60" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.className} ${outfit.variable} ${greatVibes.variable} antialiased`}
      >
        <Suspense fallback={null}>
          {/* NOTE: If you are getting errors on these lines, ensure 
          Navigation and Footer are simple exports or mock them if they don't exist yet. */}
          <Navigation /> 
          <main>{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
