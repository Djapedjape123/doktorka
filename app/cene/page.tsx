import { buildMetadata } from "@/lib/seo";
import CeneClient from "./CeneClient";

export const metadata = buildMetadata({
  title: "Cene akupunkture i tretmana – Novi Sad | Dr Košarac",
  description:
    "Cenovnik akupunkture, ventuza, moksibustije, Gua Sha masaže i estetskih paketa u Novom Sadu. Transparentne cene, zakazivanje po dogovoru.",
  path: "/cene",
});

export default function Page() {
  return <CeneClient />;
}
