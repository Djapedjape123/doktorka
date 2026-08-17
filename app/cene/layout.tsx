import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenovnik Tretmana",
  description: "Pogledajte transparentne cene tretmana: akupunktura, ventuze, Gua Sha masaža i estetski paketi. Zakažite svoj termin u Novom Sadu.",
  alternates: {
    canonical: "https://www.akunutrinovisad.com/cene",
  },
};

export default function CeneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}