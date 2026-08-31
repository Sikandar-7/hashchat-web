import { ArrowRight, BadgeCheck, Building2, Info } from "lucide-react";

import { metaLimits, site, waLink } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

/**
 * Verification, answered on the landing page rather than only in the guide.
 *
 * This is the question that arrives most often after the ban one, and
 * the market answers it dishonestly — "green tick guaranteed" is a line
 * competitors here actually run. The page had a full guide on it and no
 * mention on the landing page, so a visitor who came to ask left
 * without an answer.
 *
 * The section is built around the confusion itself: Business
 * Verification and the badge are two different things, one of which you
 * control and one of which you do not. Saying that plainly is worth
 * more than a claim, because a reader can check every part of it — and
 * the parts nobody else will say (the badge is blue, not green; nobody
 * can promise it; you do not need it) are the parts that make the rest
 * believable.
 */
const fmt = new Intl.NumberFormat("en-PK");

export function Verification({ locale }: { locale: Locale }) {
  const c = t(locale).verify;

  return (
    <section
      id="verification"
      className="scroll-mt-20 border-t border-line/60 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-sky">
            {c.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-muted">
            {c.lead}
          </p>
        </div>

        {/* The two things people merge into one, side by side so the
            difference is the layout rather than a sentence asking the
            reader to hold both in their head. */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/5 p-7">
            <div className="flex items-start justify-between gap-4">
              <Building2 className="size-6 shrink-0 text-brand-teal" aria-hidden />
              <span className="rounded-full border border-brand-teal/40 px-2.5 py-1 text-xs font-semibold text-brand-teal">
                {c.aTag}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">
              {c.aTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {c.aBody}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-surface/60 p-7">
            <div className="flex items-start justify-between gap-4">
              <BadgeCheck className="size-6 shrink-0 text-brand-sky" aria-hidden />
              <span className="rounded-full border border-line px-2.5 py-1 text-xs font-semibold text-ink-faint">
                {c.bTag}
              </span>
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold">
              {c.bTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {c.bBody}
            </p>
          </div>
        </div>

        {/* The number people are really asking for when they ask about
            the tick. "Will I get verified" is almost always "how many
            people can I actually message" wearing a different hat, and
            that one has a precise answer. */}
        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-line bg-surface/60 p-6 sm:p-7">
          <h3 className="font-display text-base font-semibold">
            {c.limitsTitle}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {c.limitsLead}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface-2/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                {c.limitsWithoutLabel}
              </p>
              <p className="mt-2 font-display text-3xl font-extrabold" dir="ltr">
                {fmt.format(metaLimits.unverified)}
              </p>
              <p className="mt-1 text-xs text-ink-muted">{c.limitsUnit}</p>
            </div>
            <div className="rounded-xl border border-brand-teal/30 bg-brand-teal/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal">
                {c.limitsWithLabel}
              </p>
              <p className="mt-2 font-display text-3xl font-extrabold" dir="ltr">
                {fmt.format(metaLimits.verified)}
              </p>
              <p className="mt-1 text-xs text-ink-muted">{c.limitsUnit}</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-ink-muted">
            {c.limitsLadder}
          </p>

          {/* The distinction that decides whether the number means
              anything: it counts people reached cold, not messages. */}
          <p className="mt-4 rounded-xl border border-line bg-surface-2/60 p-4 text-sm leading-relaxed text-ink-muted">
            {c.limitsNote}
          </p>

          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-faint">
            {c.limitsExtras.map((e) => (
              <li key={e} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-ink-faint" />
                <span>{e}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 border-t border-line pt-4 text-xs text-ink-faint">
            {c.limitsSource} —{" "}
            <a
              href={metaLimits.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted underline-offset-4 hover:text-ink hover:underline"
            >
              developers.facebook.com
            </a>
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-line bg-surface/60 p-6 sm:p-7">
          <h3 className="font-display text-base font-semibold">
            {c.routesTitle}
          </h3>
          <ol className="mt-4 space-y-3 text-sm leading-relaxed text-ink-muted">
            {c.routes.map((r, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-line bg-surface-2 font-display text-xs font-bold text-brand-sky">
                  {i + 1}
                </span>
                <span>{r}</span>
              </li>
            ))}
          </ol>

          {/* The line the rest of this market will not print. */}
          <p className="mt-6 flex gap-3 border-t border-line pt-5 text-sm leading-relaxed text-ink-faint">
            <Info className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>{c.honest}</span>
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waLink(c.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface-2 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-line/40 sm:w-auto"
          >
            {c.cta}
            <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
          </a>
          {/* The deep guide stays English on every locale — it is written
              for the query people actually type, and a half-translated
              link would promise a page that does not exist. */}
          <a
            href={`${site.url}/whatsapp-green-tick-verification-pakistan`}
            className="text-sm font-medium text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {c.guideLink}
          </a>
        </div>
      </div>
    </section>
  );
}
