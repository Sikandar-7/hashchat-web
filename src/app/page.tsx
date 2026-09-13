import type { Metadata } from "next";

import { Landing } from "@/components/landing";
import { site } from "@/lib/content";
import { hrefLangs, localeMeta, t } from "@/lib/i18n";

// The root is English since 2026-09-13; Roman Urdu moved to /roman and
// the old /en redirects here. It used to stay Roman Urdu because that
// was what was already indexed, but on a site about four weeks old
// little ranking was at stake, and buyers search in English.
const copy = t("en");

export const metadata: Metadata = {
  title: { absolute: copy.meta.title },
  description: copy.meta.description,
  alternates: { canonical: site.url, languages: hrefLangs },
  // A page's `openGraph` replaces the layout's whole object rather than
  // merging with it, so the image is repeated here. Without it this URL
  // -- the one people paste into WhatsApp -- would share with no preview
  // picture, which is what the old /en page did.
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: localeMeta("en").ogLocale,
    title: copy.meta.title,
    description: copy.meta.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "hashChat — one WhatsApp inbox for your whole team",
      },
    ],
  },
  // The layout's twitter card carries the Roman Urdu line; this page is
  // English.
  twitter: {
    card: "summary_large_image",
    title: copy.meta.title,
    description: copy.meta.description,
    images: ["/og.png"],
  },
};

export default function HomePage() {
  return <Landing locale="en" />;
}
