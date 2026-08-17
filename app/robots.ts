import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Uklonjen /_next/ kako bi Google mogao da učita CSS i JS
        disallow: ["/api/", "/private/", "/admin/"], 
      },
    ],
    sitemap: "https://www.akunutrinovisad.com/sitemap.xml",
  };
}