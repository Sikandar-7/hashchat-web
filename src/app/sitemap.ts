import type { MetadataRoute } from "next";

import { legal, site } from "@/lib/content";
import { hrefLangs } from "@/lib/i18n";

/**
 * Served at /sitemap.xml.
 *
 * Only real pages. The landing page's section anchors are deliberately
 * absent — they are fragments of one URL, and listing them would tell a
 * crawler there are five pages where there is one.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // The three language versions of one page. `alternates.languages`
    // tells a crawler they are translations of each other rather than
    // three pages competing for the same query — without it, the usual
    // outcome is two of them being treated as duplicates.
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: hrefLangs },
    },
    {
      url: `${site.url}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: hrefLangs },
    },
    {
      url: `${site.url}/ur`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: hrefLangs },
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
    {
      url: `${site.url}/how-to-send-whatsapp-broadcast-pakistan`,
      lastModified: new Date("2026-08-19"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // The legal pages. Listed rather than hidden: /privacy and
    // /data-deletion are the URLs Meta's app settings point at, and a
    // page a reviewer is sent to should be one a crawler can reach.
    // Low priority because nobody searches for them -- being indexed is
    // the point, ranking is not.
    {
      url: `${site.url}/privacy`,
      lastModified: new Date(legal.updated),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/terms`,
      lastModified: new Date(legal.updated),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/data-deletion`,
      lastModified: new Date(legal.updated),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
