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

// Viewport se u novijim Next.js verzijama odvaja od Metadata objekta
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff", // Prilagodi glavnoj boji brenda
};

export const metadata: Metadata = {
  // OBAVEZNO: ZAMENI SA PRAVIM DOMENOM
  // metadataBase: new URL("https://www.drkosarac.rs"), PROMENI DOMEK KAD DODJE STVARNI
  title: {
    default: "Dr Košarac | Akupunktura Novi Sad",
    // Template omogućava da druge stranice automatski dobiju nastavak.
    // Npr. na stranici usluga staviš samo title: "Ventuze", a Next generiše: "Ventuze | Dr Košarac"
    template: "%s | Dr Košarac", 
  },
  description: "Tradicionalna kineska medicina u Novom Sadu. VedaPulse dijagnostika, akupunktura, ventuze i estetski tretmani lica.",
  keywords: ["akupunktura Novi Sad", "kineska medicina", "gua sha","moksibustija", "ventuze", "estetska akupunktura", "dr Košarac"],
  authors: [{ name: "Dr Košarac" }],
  creator: "Dr Košarac",
  openGraph: {
    type: "website",
    locale: "sr_RS", // Govori Google-u i mrežama za koje je tržište
    url: "/",
    title: "Dr Košarac | Akupunktura Novi Sad",
    description: "Tradicionalna kineska medicina u Novom Sadu. VedaPulse dijagnostika, akupunktura i estetski tretmani lica.",
    siteName: "Dr Košarac",
    images: [
      {
        url: "https://res.cloudinary.com/duomot4hp/image/upload/v1782837198/ChatGPT_Image_30._%D1%98%D1%83%D0%BD_2026._18_40_41_cexbmh.png", // Napravi sliku 1200x630px i stavi u public folder
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
    images: ["/og-image.jpg"],
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
  // JSON-LD Schema za lokalni biznis (Lokalni SEO)
  // OVO JE KRITIČNO za Google Maps i lokalne pretrage u Novom Sadu
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic", // Specifičan tip za medicinske ordinacije
    "name": "Dr Košarac Akupunktura",
    "image": "https://www.drkosarac.rs/og-image.jpg", // ZAMENI DOMEN
    "@id": "https://www.drkosarac.rs",
    "url": "https://www.drkosarac.rs",
    "telephone": "+381638504589", // UNESI PRAVI BROJ
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hadzi Ruvimova", // UNESI ADRESU
      "addressLocality": "Novi Sad",
      "postalCode": "21000",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.2396, // UNESI TAČNE KOORDINATE IZ GOOGLE MAPS
      "longitude": 19.8227
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00", // PRILAGODI RADNO VREME
      "closes": "17:00"
    }
  };

  return (
    <html lang="sr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-medical-dark flex flex-col min-h-screen`}>
        {/* Ubacivanje strukturiranih podataka u DOM */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Navbar />
        <SplashScreen />
        {/* main je seo wrapper za glavni sadrzaj, dodao flex-grow da footer uvek bude na dnu */}
        <main className="flex-grow">{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}