import Image from "next/image";

import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo-96.png"
              alt=""
              width={28}
              height={28}
              className="size-7"
            />
            <span className="font-display font-bold">{site.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-faint">
            {site.tagline}. Lahore, Pakistan se banaya gaya.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a href="#features" className="text-ink-muted hover:text-ink">
            Features
          </a>
          <a href="#pricing" className="text-ink-muted hover:text-ink">
            Pricing
          </a>
          <a href="#faq" className="text-ink-muted hover:text-ink">
            FAQ
          </a>
          <a
            href={`${site.appUrl}/login`}
            className="text-ink-muted hover:text-ink"
          >
            Sign in
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-line/60 px-5 pt-6 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          Ek product{" "}
          <a
            href={site.companyUrl}
            className="text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            {site.company}
          </a>{" "}
          ka
        </p>
      </div>
    </footer>
  );
}
