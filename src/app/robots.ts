import type { MetadataRoute } from "next";

import { site } from "@/lib/content";

/**
 * Served at /robots.txt.
 *
 * Everything is crawlable — this is a marketing page and there is
 * nothing here to hide. The app lives on a different host and sets its
 * own `noindex`, so nothing needs excluding from this side.
 *
 * AI crawlers are deliberately allowed too. A CRM is exactly the kind
 * of product people now ask an assistant to recommend, and blocking
 * those agents removes the site from that answer entirely.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
