import type { MetadataRoute } from "next";

import { site } from "@/lib/content";

/**
 * Served at /sitemap.xml.
 *
 * Only real pages. The landing page's section anchors are deliberately
 * absent — they are fragments of one URL, and listing them would tell a
 * crawler there are five pages where there is one.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/whatsapp-business-api-pricing-pakistan`,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/whatsapp-business-api-vs-business-app`,
      lastModified: new Date("2026-08-18"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/whatsapp-green-tick-verification-pakistan`,
      lastModified: new Date("2026-08-19"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
