import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr Košarac | Akupunktura Novi Sad",
  description: "Tradicionalna kineska medicina u Novom Sadu. VedaPulse dijagnostika, akupunktura, ventuze i estetski tretmani lica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-medical-dark`}>
        {/* navbar */}
        <Navbar />
       {/* logo loader  */}
        <SplashScreen />
        <main>{children}</main>
        <WhatsAppButton />
       

      </body>
    </html>
  );
}