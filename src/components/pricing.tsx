import { Check } from "lucide-react";

import { CURRENCY, plans, site } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";
import { Section } from "./section";

const fmt = new Intl.NumberFormat("en-PK");

export function Pricing({ locale }: { locale: Locale }) {
  const c = t(locale).pricing;
  return (
    <Section id="pricing" eyebrow={c.eyebrow} title={c.title} lead={c.lead}>
      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.slug}
            className={`relative flex flex-col rounded-2xl border p-7 ${
              p.highlight
                ? "border-brand-indigo/50 bg-surface-2/70"
                : "border-line bg-surface/60"
            }`}
          >
            {p.highlight ? (
              <span className="brand-gradient absolute -top-3 left-7 rounded-full px-3 py-1 text-xs font-semibold text-white">
                {c.popular}
              </span>
            ) : null}

            <h3 className="font-display text-xl font-bold" dir="ltr">
              {p.name}
            </h3>
            <p className="mt-1 text-sm text-ink-muted">
              {c.plans[p.slug].tagline}
            </p>

            <p className="mt-6 flex items-baseline gap-1.5" dir="ltr">
              <span className="text-sm font-medium text-ink-muted">
                {CURRENCY}
              </span>
              <span className="font-display text-4xl font-extrabold tracking-tight">
                {fmt.format(p.price)}
              </span>
              <span className="text-sm text-ink-muted">{c.perMonth}</span>
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-line py-4 text-sm">
              <div>
                <dt className="text-ink-faint">{c.members}</dt>
                <dd className="mt-0.5 font-semibold">
                  {p.members === null ? c.unlimited : p.members}
                </dd>
              </div>
              <div>
                <dt className="text-ink-faint">{c.contacts}</dt>
                <dd className="mt-0.5 font-semibold">
                  {p.contacts === null ? c.unlimited : fmt.format(p.contacts)}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-ink-faint">{c.broadcasts}</dt>
                <dd className="mt-0.5 font-semibold">
                  {p.broadcasts === null
                    ? c.unlimited
                    : fmt.format(p.broadcasts)}
                </dd>
                {/* The ceiling is ours; every message under it is still
                    billed by Meta, straight to the customer's own card.
                    Said on the card, where the number is read, not only
                    in the box below. */}
                <a
                  href="#meta-charges"
                  className="mt-1 block text-xs text-ink-faint underline-offset-2 hover:text-ink-muted hover:underline"
                >
                  {c.broadcastsMetaNote}
                </a>
              </div>
            </dl>

            <ul className="mt-5 flex-1 space-y-2.5 text-sm">
              {c.plans[p.slug].includes.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-brand-teal"
                    aria-hidden
                  />
                  <span className="text-ink-muted">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={`${site.appUrl}/signup`}
              className={`mt-7 rounded-xl px-5 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                p.highlight
                  ? "brand-gradient text-white"
                  : "border border-line bg-surface-2 text-ink"
              }`}
            >
              {c.cta}
            </a>
          </div>
        ))}
      </div>

      {/* Two things a buyer in this market checks before anything else:
          what Meta charges, and whether the platform resells it with a
          margin on top. Most competitors here resell, which is why they
          all advertise "0% markup". hashChat connects to the customer's
          own WABA, so it is never in that chain at all — a stronger
          position, and one the page wasn't making. */}
      <div
        id="meta-charges"
        className="mx-auto mt-10 max-w-3xl scroll-mt-20 rounded-2xl border border-line bg-surface/60 p-6 sm:p-7"
      >
        <h3 className="font-display text-base font-semibold">
          {c.metaTitle}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {c.metaBodyBefore}
          <strong className="text-ink">{c.metaBodyOwn}</strong>
          {c.metaBodyAfter}
        </p>
        <dl className="mt-5 grid gap-4 border-t border-line pt-5 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-faint">
              {c.rateMarketing}
            </dt>
            <dd className="mt-1 text-sm font-semibold" dir="ltr">
              ~Rs 13 / message
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-faint">
              {c.rateUtility}
            </dt>
            <dd className="mt-1 text-sm font-semibold" dir="ltr">
              ~Rs 2.8 / message
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-faint">
              {c.rateReply}
            </dt>
            <dd className="mt-1 text-sm font-semibold text-brand-teal">
              {c.rateFree}
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-ink-faint">
          {c.rateNote}
        </p>
      </div>
    </Section>
  );
}
