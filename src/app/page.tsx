import type { Metadata } from "next";

import { Landing } from "@/components/landing";
import { site } from "@/lib/content";
import { hrefLangs, t } from "@/lib/i18n";

// The root stays Roman Urdu. It is what is already indexed, and it is
// how this market writes — moving it to /roman for routing symmetry
// would trade real ranking for tidiness.
export const metadata: Metadata = {
  title: t("roman").meta.title,
  description: t("roman").meta.description,
  alternates: { canonical: site.url, languages: hrefLangs },
};

export default function HomePage() {
  return <Landing locale="roman" />;
}
