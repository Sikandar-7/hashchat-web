import type { MetadataRoute } from "next";

import { site } from "@/lib/content";

/**
 * Served at /sitemap.xml.
 *
 * One page today. The section anchors are not listed: they are
 * fragments of this same URL, and submitting them as separate entries
 * tells a crawler there are five pages when there is one.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
