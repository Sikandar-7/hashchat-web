import Link from "next/link";
import { Languages } from "lucide-react";

import { LOCALES, type Locale } from "@/lib/i18n";

/**
 * Three real links, not a dropdown.
 *
 * A `<select>` or a JS menu would need client JavaScript to navigate,
 * which means the switcher is dead until hydration — on the slow mobile
 * connections this market actually browses on, that is the first thing
 * someone taps and the first thing that does nothing. Three anchors
 * work from the first paint, and a crawler can follow them, which is
 * the whole point of having translated pages at all.
 *
 * `hreflang` on each link tells a crawler what it will find on the
 * other side without fetching it.
 */
export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      <Languages
        className="mr-1 hidden size-4 shrink-0 text-ink-faint sm:block"
        aria-hidden
      />
      <ul className="flex items-center rounded-lg border border-line bg-surface/60 p-0.5">
        {LOCALES.map((l) => {
          const active = l.code === locale;
          return (
            <li key={l.code}>
              <Link
                href={l.href}
                hrefLang={l.htmlLang}
                lang={l.htmlLang}
                aria-current={active ? "true" : undefined}
                className={`block rounded-[6px] px-2 py-1 text-xs font-medium transition-colors ${
                  active
                    ? "bg-surface-2 text-ink"
                    : "text-ink-faint hover:text-ink"
                }`}
              >
                {/* Full name where there is room, the chip where there
                    isn't — "اردو" is already short enough to be both. */}
                <span className="hidden sm:inline">{l.label}</span>
                <span className="sm:hidden">{l.short}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
