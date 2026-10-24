import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { HOME_DESCRIPTION, HOME_TITLE } from "@/lib/seo";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Svaka ruta ima svoj metadata preko buildMetadata() u lib/seo.ts.
// Ovde su samo podrazumevane vrednosti. Namerno nema title.template (naslovi su već puni),
// openGraph.url ni alternates.canonical (bili bi nasleđeni i pogrešni na svim stranicama),
// a meta keywords Google ignoriše.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,

  icons: {
    icon: "/dok.png",
    shortcut: "/dok.png",
    apple: "/dok.png",
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: [OG_IMAGE.url],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-medical-dark flex flex-col min-h-screen`}>
        <LocalBusinessSchema />

        <Navbar />
        <SplashScreen />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
