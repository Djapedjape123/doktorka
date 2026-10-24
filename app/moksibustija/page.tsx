import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SrodniTretmani from "@/components/SrodniTretmani";
import { buildMetadata } from "@/lib/seo";
import MoksibustijaClient from "./MoksibustijaClient";

export const metadata = buildMetadata({
  title: "Moksibustija Novi Sad | Dr Košarac",
  description:
    "Moksibustija u Novom Sadu – tretman toplotom iz tradicionalne kineske medicine. Kako izgleda i kome pomaže. Zakažite kod dr Košarac.",
  path: "/moksibustija",
});

export default function Page() {
  return (
    <>
      <BreadcrumbSchema name="Moksibustija" path="/moksibustija" />
      <MoksibustijaClient />
      <SrodniTretmani trenutna="/moksibustija" />
    </>
  );
}
