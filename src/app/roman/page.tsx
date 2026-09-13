import type { Metadata } from "next";

import { Landing } from "@/components/landing";
import { site } from "@/lib/content";
import { hrefLangs, localeMeta, t } from "@/lib/i18n";

// Roman Urdu, here since 2026-09-13 when English took the root. Same
// copy the root carried before; only the address changed.
const copy = t("roman");

export const metadata: Metadata = {
  title: { absolute: copy.meta.title },
  description: copy.meta.description,
  alternates: { canonical: `${site.url}/roman`, languages: hrefLangs },
  // The image is repeated because a page's `openGraph` replaces the
  // layout's rather than merging -- see src/app/page.tsx. The twitter
  // card is left to the layout, whose line is already Roman Urdu.
  openGraph: {
    type: "website",
    url: `${site.url}/roman`,
    siteName: site.name,
    locale: localeMeta("roman").ogLocale,
    title: copy.meta.title,
    description: copy.meta.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "hashChat — poori team ka ek WhatsApp inbox",
      },
    ],
  },
};

export default function RomanUrduHomePage() {
  return <Landing locale="roman" />;
}
