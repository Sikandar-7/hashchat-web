import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/content";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "Kaise chalta hai" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5"
      >
        <Link
          href="/"
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
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
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
          <a
            href={`${site.appUrl}/login`}
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink sm:block"
          >
            Sign in
          </a>
          <a
            href={`${site.appUrl}/signup`}
            className="rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Free trial
          </a>
        </div>
      </nav>
    </header>
  );
}
