import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SrodniTretmani from "@/components/SrodniTretmani";
import { buildMetadata } from "@/lib/seo";
import AkupunkturaClient from "./AkupunkturaClient";

export const metadata = buildMetadata({
  title: "Akupunktura Novi Sad – Tretman i cena | Dr Košarac",
  description:
    "Akupunktura u Novom Sadu kod dr Košarac: kako izgleda tretman, koliko traje, u kojim stanjima pomaže i kontraindikacije. Zakažite termin.",
  path: "/akupunktura",
});

export default function Page() {
  return (
    <>
      <BreadcrumbSchema name="Akupunktura" path="/akupunktura" />
      <AkupunkturaClient />
      <SrodniTretmani trenutna="/akupunktura" />
    </>
  );
}
