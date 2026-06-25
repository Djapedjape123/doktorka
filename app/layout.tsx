import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr Košarac | Holistička Stomatologija & Akupunktura Novi Sad",
  description: "Spoj savremene stomatologije i tradicionalne kineske medicine u Novom Sadu. VedaPulse dijagnostika, akupunktura, ventuze i estetski tretmani lica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-medical-dark`}>
        {/* Ovde će ići <Navbar /> */}
        <main>{children}</main>
        {/* Ovde će ići <Footer /> */}
      </body>
    </html>
  );
}