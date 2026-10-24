import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SrodniTretmani from "@/components/SrodniTretmani";
import { buildMetadata } from "@/lib/seo";
import EstetskaAkupunkturaClient from "./EstetskaAkupunkturaClient";

export const metadata = buildMetadata({
  title: "Estetska akupunktura lica Novi Sad | Dr Košarac",
  description:
    "Estetska akupunktura lica u Novom Sadu – prirodan pristup podmlađivanju kože bez hirurgije. Zakažite tretman kod dr Košarac.",
  path: "/estetska-akupunktura",
});

export default function Page() {
  return (
    <>
      <BreadcrumbSchema name="Estetska akupunktura" path="/estetska-akupunktura" />
      <EstetskaAkupunkturaClient />
      <SrodniTretmani trenutna="/estetska-akupunktura" />
    </>
  );
}
