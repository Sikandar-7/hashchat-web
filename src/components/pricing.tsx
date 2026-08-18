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

      {/* Two things a buyer in this market checks before anything else:
          what Meta charges, and whether the platform resells it with a
          margin on top. Most competitors here resell, which is why they
          all advertise "0% markup". hashChat connects to the customer's
          own WABA, so it is never in that chain at all — a stronger
          position, and one the page wasn't making. */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-line bg-surface/60 p-6 sm:p-7">
        <h3 className="font-display text-base font-semibold">
          Meta ke charges alag hain — aur woh seedha aap ke paas jate hain
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          hashChat aapke <strong className="text-ink">apne</strong> WhatsApp
          Business account se connect hota hai. Meta ka bill seedha aap ko
          jata hai — hamare paas se ho kar nahi. Yani hum us par kuch jor hi
          nahi sakte. Bohot se providers Meta se khareed kar aage bechte hain
          aur 12-20% markup lagate hain; isi liye unhein &ldquo;0%
          markup&rdquo; ka daawa karna parta hai. Hum us silsile mein hain hi
          nahi.
        </p>
        <dl className="mt-5 grid gap-4 border-t border-line pt-5 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-faint">
              Marketing / broadcast
            </dt>
            <dd className="mt-1 text-sm font-semibold">~Rs 13 / message</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-faint">
              Utility (order, reminder)
            </dt>
            <dd className="mt-1 text-sm font-semibold">~Rs 2.8 / message</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-ink-faint">
              Customer ka jawab (24h)
            </dt>
            <dd className="mt-1 text-sm font-semibold text-brand-teal">Free</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-ink-faint">
          Yeh Meta ke rates hain aur woh inhein waqtan fauqtan badalta rehta
          hai. Automations, flows aur team ke jawab — sab 24-ghante wale free
          hisse mein aate hain.
        </p>
      </div>
    </Section>
  );
}
