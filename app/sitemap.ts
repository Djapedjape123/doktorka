import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Datum poslednje izmene sadržaja svake stranice. Ažurirati ručno kad se stranica menja
// (sa new Date() bi svaki build prijavljivao sve stranice kao izmenjene, pa Google ignoriše lastmod).
const routes = [
  { path: "", lastModified: "2026-10-24" },
  { path: "/akupunktura", lastModified: "2026-10-24" },
  { path: "/aurikuloakupunktura", lastModified: "2026-10-24" },
  { path: "/estetska-akupunktura", lastModified: "2026-10-24" },
  { path: "/guasha", lastModified: "2026-10-24" },
  { path: "/moksibustija", lastModified: "2026-10-24" },
  { path: "/ventuze", lastModified: "2026-10-24" },
  { path: "/cene", lastModified: "2026-10-24" },
  { path: "/kontakt", lastModified: "2026-10-24" },
  { path: "/kviz", lastModified: "2026-10-24" },
  { path: "/mit-istina", lastModified: "2026-10-24" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
