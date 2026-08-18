import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { site, waLink } from "@/lib/content";

/**
 * The highest-demand query in this market, answered properly.
 *
 * Competitors rank for it while being vague about the one number that
 * decides the bill — Meta's per-message rate — and about whether they
 * add a margin on top. Publishing both plainly is the differentiator:
 * it is the page a buyer actually needs, and it is a page the resellers
 * structurally cannot write.
 *
 * Written in English because that is how this query is typed, even by
 * buyers who would rather read Roman Urdu. The landing page stays
 * Roman Urdu; this is the door people come in through.
 */

const PAGE_PATH = "/whatsapp-business-api-pricing-pakistan";
const PAGE_URL = `${site.url}${PAGE_PATH}`;
const UPDATED = "2026-08-18";

export const metadata: Metadata = {
  // The root template appends " — hashChat" (11 chars), so anything past
  // ~49 here gets an ellipsis in results. Keyword stays at the front.
  title: "WhatsApp Business API Pricing in Pakistan (2026)",
  description:
    "What WhatsApp Business API really costs in Pakistan: Meta's per-message rates, what platforms add on top, and which messages are free.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "WhatsApp Business API Pricing in Pakistan (2026)",
    description:
      "Meta's real per-message rates, platform fees, and the markup most providers don't mention.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

/** Meta's own rate card for Pakistan. Rates move — the date is shown. */
const META_RATES = [
  {
    kind: "Marketing",
    use: "Broadcasts, offers, promotions, re-engagement",
    rate: "~PKR 13.20",
  },
  {
    kind: "Utility",
    use: "Order updates, delivery alerts, payment reminders",
    rate: "~PKR 2.79",
  },
  {
    kind: "Authentication",
    use: "One-time passcodes, login verification",
    rate: "~PKR 2.79",
  },
  {
    kind: "Service",
    use: "Any reply within 24 hours of the customer's own message",
    rate: "Free",
  },
] as const;

const FAQ = [
  {
    q: "Is the WhatsApp Business API free?",
    a: "The API itself has no licence fee from Meta, but sending messages costs money and you need a platform to actually use it. In Pakistan a marketing message is around PKR 13.20 and a utility message around PKR 2.79. Replying to a customer within 24 hours of their message is free.",
  },
  {
    q: "Why do providers advertise '0% markup'?",
    a: "Because many of them resell Meta's messaging and add a margin — commonly 12% to 20% — on top of the per-message rate. Providers who don't do this advertise the fact. The cleaner arrangement is one where the platform never touches your Meta billing at all: you connect your own WhatsApp Business account and Meta invoices you directly.",
  },
  {
    q: "What does the platform cost on top of Meta's charges?",
    a: "Platform subscriptions in Pakistan generally run from about PKR 2,000 to PKR 10,000 per month depending on team size and features. That is separate from Meta's per-message charges, and any provider that will not show you both numbers separately is worth a second look.",
  },
  {
    q: "How much will 1,000 broadcast messages cost?",
    a: "At roughly PKR 13.20 per marketing message, about PKR 13,200 in Meta charges, plus your platform subscription. Utility messages are far cheaper at around PKR 2.79, so an order-update flow costs a fraction of a promotional blast.",
  },
  {
    q: "Do I need the API, or is the WhatsApp Business app enough?",
    a: "If one person handles your messages and you never send in bulk, the free app is enough. The API matters when several people need the same number, when you run ads that drive replies, or when you send templates in volume — the app treats that traffic as spam and can block the number.",
  },
] as const;

export default function PricingGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}/#article`,
        headline: "WhatsApp Business API Pricing in Pakistan (2026)",
        description:
          "Meta's per-message rates for Pakistan, what platforms charge on top, and which messages are free.",
        datePublished: UPDATED,
        dateModified: UPDATED,
        inLanguage: "en-PK",
        author: { "@type": "Organization", name: site.company },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: PAGE_URL,
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}/#faq`,
        mainEntity: FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav />

      <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <p className="text-sm text-ink-faint">
          <Link href="/" className="hover:text-ink-muted">
            hashChat
          </Link>{" "}
          · Guide
        </p>

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          WhatsApp Business API pricing in Pakistan
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          There are two separate bills, and most pages about this only show
          you one of them. Here is what each actually costs, updated{" "}
          {new Date(UPDATED).toLocaleDateString("en-GB", {
            month: "long",
            year: "numeric",
          })}
          .
        </p>

        <div className="prose-invert mt-12 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold">
              The two bills
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Running WhatsApp Business API means paying{" "}
              <strong className="text-ink">Meta</strong> for the messages you
              send, and paying a <strong className="text-ink">platform</strong>{" "}
              for the software you send them from. They are different
              companies and different invoices. Any provider who quotes you a
              single blended figure is hiding which half is theirs.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              1. What Meta charges
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Meta bills per message, and the rate depends on what kind of
              message it is. These are the Pakistan rates:
            </p>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-surface-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">What it&rsquo;s for</th>
                    <th className="px-4 py-3 text-right font-semibold">
                      Per message
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {META_RATES.map((r) => (
                    <tr key={r.kind}>
                      <td className="px-4 py-3 font-medium">{r.kind}</td>
                      <td className="px-4 py-3 text-ink-muted">{r.use}</td>
                      <td
                        className={`px-4 py-3 text-right font-semibold ${
                          r.rate === "Free" ? "text-brand-teal" : ""
                        }`}
                      >
                        {r.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-5 leading-relaxed text-ink-muted">
              The free row is the one that changes the maths. Every reply you
              send within 24 hours of a customer writing to you costs nothing
              — and that covers auto-replies, chatbot flows and your team
              answering by hand. A business that mostly <em>responds</em> pays
              Meta almost nothing. The cost lands when you start the
              conversation.
            </p>

            <p className="mt-4 leading-relaxed text-ink-muted">
              Meta revises this rate card periodically; Pakistan&rsquo;s rates last
              moved in April 2026. Treat any figure — including this one — as
              worth re-checking before you budget a large campaign.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              2. What platforms charge
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Subscriptions in Pakistan generally sit between PKR 2,000 and
              PKR 10,000 a month, scaling with team size, contact volume and
              whether automation and AI are included. International platforms
              price in dollars and often land higher once converted.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              This part is straightforward. The part worth understanding is
              what happens to Meta&rsquo;s bill.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              3. The markup nobody mentions first
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Many platforms buy messaging from Meta and resell it to you with
              a margin on top — commonly 12% to 20%. That margin does not
              appear on the pricing page; it appears in your message bill.
              It is why providers who don&rsquo;t do it advertise{" "}
              <em>&ldquo;0% markup&rdquo;</em> so loudly, and why comparison
              tables between them exist at all.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              There is a third arrangement that sidesteps the question
              entirely: platforms that connect to{" "}
              <strong className="text-ink">your own</strong> WhatsApp Business
              account. Meta invoices you directly, the platform never handles
              the money, and there is no margin to disclose because there is
              no transaction to add one to.
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-surface/60 p-6">
              <p className="text-sm leading-relaxed text-ink-muted">
                <strong className="text-ink">Worth asking any provider:</strong>{" "}
                &ldquo;Is the WhatsApp Business account in my name, and does
                Meta bill me directly?&rdquo; The answer tells you whether a
                markup is even possible.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              A worked example
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              A shop with 1,000 customers sends one promotional broadcast a
              month and answers everyone who replies:
            </p>
            <ul className="mt-4 space-y-2 leading-relaxed text-ink-muted">
              <li>
                1,000 marketing messages × ~PKR 13.20 ={" "}
                <strong className="text-ink">~PKR 13,200</strong> to Meta
              </li>
              <li>
                Every reply to those customers within 24 hours ={" "}
                <strong className="text-brand-teal">PKR 0</strong>
              </li>
              <li>Platform subscription = whatever your plan costs</li>
            </ul>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Switch that broadcast to a utility message — an order update
              rather than an offer — and the same 1,000 sends cost around PKR
              2,790 instead. Message type, not volume, is usually the biggest
              lever on the bill.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Questions people ask
            </h2>
            <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface/60">
              {FAQ.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="cursor-pointer font-medium [&::-webkit-details-marker]:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <p className="text-sm leading-relaxed text-ink-faint">
            Still deciding whether you need the API at all?{" "}
            <Link
              href="/whatsapp-business-api-vs-business-app"
              className="text-brand-sky hover:underline"
            >
              Compare it with the free WhatsApp Business app
            </Link>{" "}
            — for a lot of businesses the free app is still the right answer.
          </p>

          <section className="rounded-2xl border border-line bg-surface/60 p-7">
            <h2 className="font-display text-xl font-bold">
              How hashChat handles this
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              hashChat connects to your own WhatsApp Business account, so
              Meta&rsquo;s bill goes straight to you and we never sit in the middle
              of it. You pay us for the software — a shared team inbox,
              contacts, pipelines, broadcasts and automations — starting at
              PKR 2,000 a month, with a {""}
              <Link href="/#pricing" className="text-brand-sky hover:underline">
                3-day free trial
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`${site.appUrl}/signup`}
                className="brand-gradient rounded-xl px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Start free trial
              </a>
              <a
                href={waLink(
                  "Assalam o alaikum — WhatsApp API pricing ke bare mein poochna tha.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-line bg-surface-2 px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                Ask on WhatsApp
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
