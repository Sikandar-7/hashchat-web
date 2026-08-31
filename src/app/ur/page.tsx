import type { Metadata } from "next";

import { Landing } from "@/components/landing";
import { site } from "@/lib/content";
import { hrefLangs, t } from "@/lib/i18n";

const copy = t("ur");

export const metadata: Metadata = {
  title: { absolute: copy.meta.title },
  description: copy.meta.description,
  alternates: { canonical: `${site.url}/ur`, languages: hrefLangs },
  openGraph: {
    url: `${site.url}/ur`,
    locale: "ur_PK",
    title: copy.meta.title,
    description: copy.meta.description,
  },
};

export default function UrduHomePage() {
  return <Landing locale="ur" />;
}
