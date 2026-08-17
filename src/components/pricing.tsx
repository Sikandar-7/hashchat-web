import { Check } from "lucide-react";

import { CURRENCY, TRIAL_DAYS, plans, site } from "@/lib/content";
import { Section } from "./section";

const fmt = new Intl.NumberFormat("en-PK");

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Saaf pricing, koi chhupi hui baat nahi"
      lead={`Har plan ${TRIAL_DAYS} din free se shuru hota hai. Card ki zaroorat nahi — pasand na aaye to bas chhor dein.`}
    >
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
                Sab se zyada liya jata hai
              </span>
            ) : null}

            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <p className="mt-1 text-sm text-ink-muted">{p.tagline}</p>

            <p className="mt-6 flex items-baseline gap-1.5">
              <span className="text-sm font-medium text-ink-muted">
                {CURRENCY}
              </span>
              <span className="font-display text-4xl font-extrabold tracking-tight">
                {fmt.format(p.price)}
              </span>
              <span className="text-sm text-ink-muted">/mahina</span>
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-3 border-y border-line py-4 text-sm">
              <div>
                <dt className="text-ink-faint">Team members</dt>
                <dd className="mt-0.5 font-semibold">{p.members}</dd>
              </div>
              <div>
                <dt className="text-ink-faint">Contacts</dt>
                <dd className="mt-0.5 font-semibold">
                  {p.contacts === null ? "Unlimited" : fmt.format(p.contacts)}
                </dd>
              </div>
            </dl>

            <ul className="mt-5 flex-1 space-y-2.5 text-sm">
              {p.includes.map((item) => (
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
              {TRIAL_DAYS} din free try karein
            </a>
          </div>
        ))}
      </div>

      {/* The per-message cost is Meta's, not ours. Better to say it here
          than to have a customer discover it on their first broadcast. */}
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ink-faint">
        WhatsApp ke broadcast/marketing messages par Meta apna alag charge
        lagata hai (Pakistan mein takreeban Rs 2-3 per conversation).
        Customer ke message ka jawab 24 ghante ke andar dena free hai.
      </p>
    </Section>
  );
}
