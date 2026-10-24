import { buildMetadata } from "@/lib/seo";
import KontaktClient from "./KontaktClient";

export const metadata = buildMetadata({
  title: "Kontakt i zakazivanje – Akupunktura Novi Sad | Dr Košarac",
  description:
    "Zakažite termin za akupunkturu u Novom Sadu. Telefon 063 850 4589, email ili kontakt forma. Adresa i mapa ordinacije.",
  path: "/kontakt",
});

export default function Page() {
  return <KontaktClient />;
}
