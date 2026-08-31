import { ArrowRight, ShieldCheck, Ban } from "lucide-react";

import { waLink } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

/**
 * The ban problem, answered plainly.
 *
 * Every competitor in this market leads with it — "anti-ban API",
 * "from banned to brand", "ab aapki WhatsApp kabhi ban nahi hogi". It
 * is the thing buyers here actually search for, and the page said
 * nothing about it.
 *
 * Written deliberately without their language. Nobody can promise Meta
 * will never act on an account, and a page that promises it is lying to
 * someone whose business runs on that number. The honest version — the
 * official channel is built for this traffic, the consumer app is not —
 * is also the more convincing one, because it explains *why*.
 */
export function BanProblem({ locale }: { locale: Locale }) {
  const c = t(locale).ban;
  return (
    <section className="scroll-mt-20 border-t border-line/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-ink-muted">
              <Ban className="size-3.5 text-red-400" aria-hidden />
              {c.eyebrow}
            </p>

            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {c.titleLead}{" "}
              <span className="brand-text">{c.titleAccent}</span>
            </h2>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-muted">
              <p>{c.p1}</p>
              <p>{c.p2}</p>
            </div>

            <div className="mt-8 rounded-2xl border border-line bg-surface/60 p-6">
              <div className="flex gap-4">
                <ShieldCheck
                  className="mt-0.5 size-6 shrink-0 text-brand-teal"
                  aria-hidden
                />
                <div>
                  <h3 className="font-display font-semibold">
                    {c.cardTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {c.cardBodyBefore}
                    <strong className="text-ink">{c.cardBodyStrong}</strong>
                    {c.cardBodyAfter}
                  </p>
                </div>
              </div>
            </div>

            {/* Said out loud, because the category is full of people
                promising the opposite. */}
            <p className="mt-6 text-sm leading-relaxed text-ink-faint">
              {c.disclaimer}
            </p>

            <a
              href={waLink(c.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-line/40"
            >
              {c.cta}
              <ArrowRight className="size-4 rtl:rotate-180" aria-hidden />
            </a>
          </div>

          {/* Before / after, as two stacked cards. */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-red-500/25 bg-red-500/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
                {c.badLabel}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                {c.bad.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-brand-teal/30 bg-brand-teal/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-teal">
                {c.goodLabel}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
                {c.good.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
