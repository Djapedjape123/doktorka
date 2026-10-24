import JsonLd from "@/components/JsonLd";
import { DRUSTVENE_MREZE, KONTAKT, OG_IMAGE, SITE_URL } from "@/lib/site";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Dr Košarac – Akupunktura i kineska tradicionalna medicina",
    url: SITE_URL,
    image: OG_IMAGE.url,
    telephone: KONTAKT.telefonE164,
    email: KONTAKT.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: KONTAKT.adresaUlica,
      addressLocality: KONTAKT.adresa.grad,
      postalCode: KONTAKT.adresa.postanskiBroj,
      addressCountry: KONTAKT.adresa.drzavaKod,
    },
    // TODO: proveriti koordinate i radno vreme. Preuzeto iz ranijeg JSON-LD-a u layoutu,
    // nije potvrđeno. Radno vreme se razlikuje od teksta u footeru ("po dogovoru").
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.2396,
      longitude: 19.8227,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    founder: {
      "@type": "Person",
      name: "dr Aleksandra Janković Košarac",
      jobTitle: "Doktor stomatologije i akupunkturolog",
    },
    areaServed: { "@type": "City", name: KONTAKT.adresa.grad },
    sameAs: [DRUSTVENE_MREZE.instagram, DRUSTVENE_MREZE.facebook],
  };

  return <JsonLd data={schema} />;
}
