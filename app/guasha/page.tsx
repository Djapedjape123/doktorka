import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SrodniTretmani from "@/components/SrodniTretmani";
import { buildMetadata } from "@/lib/seo";
import GuaShaClient from "./GuaShaClient";

export const metadata = buildMetadata({
  title: "Gua Sha masaža Novi Sad | Dr Košarac",
  description:
    "Gua Sha masaža u Novom Sadu – tradicionalna tehnika za opuštanje mišića i negu lica. Zakažite tretman kod dr Košarac.",
  path: "/guasha",
});

export default function Page() {
  return (
    <>
      <BreadcrumbSchema name="Gua Sha masaža" path="/guasha" />
      <GuaShaClient />
      <SrodniTretmani trenutna="/guasha" />
    </>
  );
}
