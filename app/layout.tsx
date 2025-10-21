import type React from "react";
import type { Metadata, Viewport } from "next";
import { Great_Vibes } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
// NOTE: Assuming your components paths are correct:
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Campaign for Leadership",
  description: "Candidate for the African Union Commission",
  generator: "v0.app",
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
        // FIX: Removed 'font-sans' here. We only need to add the variable 
        // which makes '--font-script' available globally. font-sans is now 
        // correctly applied via globals.css.
        className={`${greatVibes.variable} antialiased`}
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
