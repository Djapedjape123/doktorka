import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akunutrinovisad.com"),
  title: {
    default: "Dr Košarac | Akupunktura Novi Sad",
    template: "%s | Dr Košarac", 
  },
  description: "Tradicionalna kineska medicina u Novom Sadu. VedaPulse dijagnostika, akupunktura, ventuze i estetski tretmani lica.",
  keywords: ["akupunktura Novi Sad", "kineska medicina", "gua sha","moksibustija", "ventuze", "estetska akupunktura", "dr Košarac"],
  authors: [{ name: "Dr Košarac" }],
  creator: "Dr Košarac",

  // ⬇️ OVDE JE DODAT FAVICON / ICONS ⬇️
  icons: {
    icon: "/dok.png",
    shortcut: "/dok.png",
    apple: "/dok.png",
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://www.akunutrinovisad.com/",
    title: "Dr Košarac | Akupunktura Novi Sad",
    description: "Tradicionalna kineska medicina u Novom Sadu. VedaPulse dijagnostika, akupunktura i estetski tretmani lica.",
    siteName: "Dr Košarac",
    images: [
      {
        url: "https://res.cloudinary.com/duomot4hp/image/upload/v1782837198/ChatGPT_Image_30._%D1%98%D1%83%D0%BD_2026._18_40_41_cexbmh.png",
        width: 1200,
        height: 630,
        alt: "Dr Košarac Akupunktura Novi Sad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Košarac | Akupunktura Novi Sad",
    description: "Tradicionalna kineska medicina u Novom Sadu.",
    images: ["https://res.cloudinary.com/duomot4hp/image/upload/v1782837198/ChatGPT_Image_30._%D1%98%D1%83%D0%BD_2026._18_40_41_cexbmh.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr Košarac Akupunktura",
    "image": "https://www.akunutrinovisad.com/dok.png",
    "@id": "https://www.akunutrinovisad.com/",
    "url": "https://www.akunutrinovisad.com/",
    "telephone": "+381638504589",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hadzi Ruvimova",
      "addressLocality": "Novi Sad",
      "postalCode": "21000",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.2396,
      "longitude": 19.8227
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <html lang="sr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-medical-dark flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navbar />
        <SplashScreen />
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}