import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SrodniTretmani from "@/components/SrodniTretmani";
import { buildMetadata } from "@/lib/seo";
import VentuzeClient from "./VentuzeClient";

export const metadata = buildMetadata({
  title: "Terapija ventuzama Novi Sad | Dr Košarac",
  description:
    "Vakuum terapija ventuzama u Novom Sadu – za bolove u leđima, napetost mišića i celulit. Zakažite tretman kod dr Košarac.",
  path: "/ventuze",
});

export default function Page() {
  return (
    <>
      <BreadcrumbSchema name="Terapija ventuzama" path="/ventuze" />
      <VentuzeClient />
      <SrodniTretmani trenutna="/ventuze" />
    </>
  );
}
