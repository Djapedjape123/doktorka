import type { Metadata } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

export { SITE_URL };

export const HOME_TITLE = "Akupunktura Novi Sad – Kineska medicina | Dr Košarac";
export const HOME_DESCRIPTION =
  "Akupunktura i tradicionalna kineska medicina u Novom Sadu. VedaPulse dijagnostika, ventuze, moksibustija, Gua Sha i estetska akupunktura lica.";

type SeoInput = {
  title: string;
  description: string;
  path: string; // "/" za početnu, inače npr. "/ventuze"
};

// Naslovi su već puni (sa "| Dr Košarac"), zato root layout nema title template.
// openGraph/twitter se u Next-u ne spajaju sa roditeljskim, pa ovde mora sve da stoji.
export function buildMetadata({ title, description, path }: SeoInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "sr_RS",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
