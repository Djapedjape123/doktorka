import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";

export default function BreadcrumbSchema({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
          { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
        ],
      }}
    />
  );
}
