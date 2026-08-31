import { stepKeys } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";
import { Section } from "./section";

export function HowItWorks({ locale }: { locale: Locale }) {
  const c = t(locale).how;
  return (
    <Section id="how" eyebrow={c.eyebrow} title={c.title} lead={c.lead}>
      <ol className="relative grid gap-8 sm:grid-cols-3">
        {/* The rule that ties the three steps together. Decorative, and
            only drawn where there is actually a gap to span — on mobile
            the steps stack, so it would point nowhere. */}
        <span
          aria-hidden
          className="brand-gradient absolute left-0 right-0 top-6 hidden h-px opacity-30 sm:block"
        />
        {stepKeys.map((n) => (
          <li key={n} className="relative">
            <span
              className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-line bg-surface font-display text-sm font-bold text-brand-sky"
              dir="ltr"
            >
              {n}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">
              {c.items[n].title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {c.items[n].body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
