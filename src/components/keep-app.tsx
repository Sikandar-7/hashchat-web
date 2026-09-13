import Link from "next/link";
import {
  ArrowRight,
  History,
  Info,
  QrCode,
  Smartphone,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import { coexistence, keepAppPointKeys, site, waLink } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";
import { Section } from "./section";

const ICONS: Record<(typeof keepAppPointKeys)[number], LucideIcon> = {
  app: Smartphone,
  history: History,
  free: Wallet,
};

/**
 * Coexistence, on the landing page.
 *
 * The biggest reason a business in this market hesitates to move is
 * losing the WhatsApp Business app the owner already runs the shop
 * from. Since 2026-09-13 it does not have to go, and until this section
 * the page only said so in the FAQ at the bottom.
 *
 * Placed straight after the ban section on purpose: that section argues
 * for the official API and against the app, and this one answers the
 * objection it raises -- "do I have to give the app up?".
 *
 * The limits are printed with the feature rather than behind a link.
 * They are Meta's, they are real (broadcast lists go, WhatsApp Web has
 * to be linked again), and a shop that finds them out after connecting
 * has been sold something. Nothing here says what happens to replies
 * sent from the phone: only what has been seen working goes on the page.
 */
export function KeepApp({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const c = copy.keepApp;
  return (
    <Section id="keep-app" eyebrow={c.eyebrow} title={c.title} lead={c.lead}>
      <div className="mx-auto max-w-5xl">
        <ul className="grid gap-4 sm:grid-cols-3">
          {keepAppPointKeys.map((key) => {
            const p = c.points[key];
            const Icon = ICONS[key];
            return (
              <li
                key={key}
                className="rounded-2xl border border-line bg-surface/60 p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-xl border border-brand-teal/30 bg-brand-teal/10 text-brand-teal">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 rounded-2xl border border-brand-teal/30 bg-brand-teal/5 p-6 sm:p-7">
          <div className="flex gap-4">
            <QrCode
              className="mt-0.5 size-6 shrink-0 text-brand-teal"
              aria-hidden
            />
            <div>
              <h3 className="font-display text-base font-semibold">
                {c.howLabel}
              </h3>
              {/* The path is the app's own English labels in every
                  language, set LTR so the arrows and quotes stay in
                  order inside Urdu. */}
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {c.howBefore}
                <span dir="ltr" className="font-medium text-ink">
                  {coexistence.settingsPath} → &ldquo;
                  {coexistence.connectLabel}&rdquo;
                </span>
                {c.howAfter}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-brand-teal/20 pt-5">
            <p className="flex items-center gap-2 text-xs font-semibold text-ink-muted">
              <Info className="size-4 shrink-0 text-ink-faint" aria-hidden />
              {c.notesLabel}
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-faint">
              {c.notes.map((n) => (
                <li key={n} className="flex gap-2.5">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-faint" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`${site.appUrl}/signup`}
            className="brand-gradient w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            {copy.hero.ctaPrimary}
          </a>
          <a
            href={waLink(c.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface-2 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-line/40 sm:w-auto"
          >
            {c.cta}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </a>
          {/* The guide stays English on every locale, like the green-tick
              one; it has every condition, not just these. */}
          <Link
            href="/whatsapp-business-api-vs-business-app#coexistence"
            className="text-sm font-medium text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline sm:ms-2"
          >
            {c.guideLink}
          </Link>
        </div>
      </div>
    </Section>
  );
}
