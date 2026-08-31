import type { Metadata } from "next";

import { Landing } from "@/components/landing";
import { site } from "@/lib/content";
import { hrefLangs, t } from "@/lib/i18n";

const copy = t("en");

export const metadata: Metadata = {
  title: { absolute: copy.meta.title },
  description: copy.meta.description,
  alternates: { canonical: `${site.url}/en`, languages: hrefLangs },
  openGraph: {
    url: `${site.url}/en`,
    locale: "en_PK",
    title: copy.meta.title,
    description: copy.meta.description,
  },
};

export default function EnglishHomePage() {
  return <Landing locale="en" />;
}
