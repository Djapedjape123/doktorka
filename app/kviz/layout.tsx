import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holistički Kviz | Koji tretman vam je potreban?",
  description: "Rešite kratak kviz i saznajte da li je za vaše simptome i stanje tela bolja akupunktura, terapija ventuzama ili Gua Sha masaža.",
  alternates: {
    canonical: "https://www.akunutrinovisad.com/upoznaj-svoj-balans", // ZAMENI SA PRAVIM URL-om RUTE
  },
};

export default function KvizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}