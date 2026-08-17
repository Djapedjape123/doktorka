import type { Metadata } from "next";

export const metadata: Metadata = {
  // Postavljamo glavni deo naslova. 
  // Next.js će zbog Root Layouta automatski dodati " | Dr Košarac"
  title: "Cenovnik Tretmana",
  description: "Pogledajte transparentne cene tretmana: akupunktura, ventuze, Gua Sha masaža i estetski paketi. Zakažite svoj termin u Novom Sadu.",
  alternates: {
    canonical: "https://www.akunutrinovisad.com", // OBAVEZNO ZAMENI KAD BUDEŠ ZNAO TAČAN DOMEN
  },
};

export default function CeneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}