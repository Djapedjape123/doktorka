import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SrodniTretmani from "@/components/SrodniTretmani";
import { buildMetadata } from "@/lib/seo";
import AurikuloakupunkturaClient from "./AurikuloakupunkturaClient";

export const metadata = buildMetadata({
  title: "Aurikuloakupunktura (ušna akupunktura) Novi Sad | Dr Košarac",
  description:
    "Aurikuloakupunktura – ušna akupunktura u Novom Sadu. Saznajte kako tretman funkcioniše i za šta se koristi. Zakažite termin kod dr Košarac.",
  path: "/aurikuloakupunktura",
});

export default function Page() {
  return (
    <>
      <BreadcrumbSchema name="Aurikuloakupunktura" path="/aurikuloakupunktura" />
      <AurikuloakupunkturaClient />
      <SrodniTretmani trenutna="/aurikuloakupunktura" />
    </>
  );
}
