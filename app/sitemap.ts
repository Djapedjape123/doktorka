import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.akunutrinovisad.com";

  const routes = [
    "",
    "/akupunktura",
    "/aurikuloakupunktura",
    "/estetska-akupunktura",
    "/guasha",
    "/moksibustija",
    "/ventuze",
    "/cene",
    "/kontakt",
    "/kviz",
    "/mit-istina",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
