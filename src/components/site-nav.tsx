import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/content";
import { localeMeta, t, type Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./language-switcher";

export function SiteNav({ locale }: { locale: Locale }) {
  const c = t(locale).nav;
  const home = localeMeta(locale).href;
  // Anchors are relative to the locale's own page, so a link from /ur
  // scrolls down /ur rather than throwing the reader back to the Roman
  // Urdu page mid-read.
  const at = (hash: string) => `${home === "/" ? "" : home}${hash}`;
  const links = [
    { href: at("#features"), label: c.features },
    { href: at("#how"), label: c.how },
    { href: at("#pricing"), label: c.pricing },
    { href: at("#verification"), label: c.verify },
    { href: at("#faq"), label: c.faq },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5"
      >
        <Link
          href={home}
          className="flex shrink-0 items-center gap-2.5"
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/logo-96.png"
            alt=""
            width={32}
            height={32}
            className="size-8"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight">
            {site.name}
          </span>
        </Link>

        {/* Section links are supporting navigation, not the point of the
            page — hidden on mobile, where the CTA is what matters and
            the whole page is one scroll anyway. */}
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher locale={locale} label={c.language} />
          <a
            href={`${site.appUrl}/login`}
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink sm:block"
          >
            {c.signIn}
          </a>
          <a
            href={`${site.appUrl}/signup`}
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            {c.trial}
          </a>
        </div>
      </nav>
    </header>
  );
}
