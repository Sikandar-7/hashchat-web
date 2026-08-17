import { steps } from "@/lib/content";
import { Section } from "./section";

export function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="Kaise chalta hai"
      title="Teen qadam, aur aap chal parre"
      lead="Koi installation nahi, koi developer nahi. Dus minute mein setup."
    >
      <ol className="relative grid gap-8 sm:grid-cols-3">
        {/* The rule that ties the three steps together. Decorative, and
            only drawn where there is actually a gap to span — on mobile
            the steps stack, so it would point nowhere. */}
        <span
          aria-hidden
          className="brand-gradient absolute left-0 right-0 top-6 hidden h-px opacity-30 sm:block"
        />
        {steps.map((s) => (
          <li key={s.n} className="relative">
            <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-line bg-surface font-display text-sm font-bold text-brand-sky">
              {s.n}
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {s.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
