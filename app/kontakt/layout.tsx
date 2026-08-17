import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt i Zakazivanje",
  description: "Zakažite vaš termin za akupunkturu, ventuze i holističke tretmane. Kontaktirajte nas putem telefona, emaila ili online forme. Nalazimo se u Novom Sadu.",
  alternates: {
    canonical: "https://www.akunutrinovisad.com/kontakt",
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}