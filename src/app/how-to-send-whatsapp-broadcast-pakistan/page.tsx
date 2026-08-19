import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { site, waLink } from "@/lib/content";

/**
 * The fourth query the ad research surfaced, and the one that costs
 * people real money when they get it wrong.
 *
 * The page leads with the failure rather than the how-to, because the
 * most common outcome in this market is a broadcast that silently
 * reaches a fraction of its list — the free app only delivers to people
 * who already saved your number. Explaining that is more useful than
 * another numbered setup guide, and it is the same reason people end up
 * needing the API at all.
 *
 * Rates are quoted to match the pricing guide exactly (marketing
 * ~PKR 13.20, utility ~PKR 2.79, service free). If Meta moves them,
 * both pages change together — see the pricing guide, which is the one
 * people land on for numbers.
 *
 * English, like the other guides — that is how this is searched.
 */

const PAGE_PATH = "/how-to-send-whatsapp-broadcast-pakistan";
const PAGE_URL = `${site.url}${PAGE_PATH}`;
const UPDATED = "2026-08-19";

export const metadata: Metadata = {
  // Root template appends " — hashChat"; keep this under ~49 characters.
  title: "How to Send a WhatsApp Broadcast in Pakistan",
  description:
    "Why broadcasts reach almost nobody, how template approval really works, what your daily limit is, and what 1,000 messages actually cost in Pakistan.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How to Send a WhatsApp Broadcast That Arrives",
    description:
      "The saved-number trap, template approval, daily limits, quality rating, and the real per-message cost.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

/** Template categories, priced to match the pricing guide. */
const CATEGORIES = [
  {
    kind: "Marketing",
    use: "Offers, launches, re-engagement — anything promotional.",
    rate: "~PKR 13.20 / message",
    note: "The expensive one, and the one most broadcasts fall into.",
  },
  {
    kind: "Utility",
    use: "Order confirmations, delivery updates, appointment reminders — tied to something the customer did.",
    rate: "~PKR 2.79 / message",
    note: "Roughly a fifth of the marketing rate. Worth structuring for.",
  },
  {
    kind: "Authentication",
    use: "One-time passcodes and login verification.",
    rate: "Priced separately",
    note: "Narrow purpose; not a route around marketing rates.",
  },
  {
    kind: "Service (not a template)",
    use: "Any free-form reply within 24 hours of the customer messaging you.",
    rate: "Free",
    note: "No approval needed. This is where automations and team replies live.",
  },
] as const;

/** Meta's messaging ladder — the number of unique customers per 24h. */
const TIERS = [
  { tier: "250", when: "Where a new, unverified number starts." },
  { tier: "1,000", when: "After Business Verification, with a healthy quality rating." },
  { tier: "10,000", when: "Earned by sending consistently without complaints." },
  { tier: "100,000", when: "Same ladder, one rung up." },
  { tier: "Unlimited", when: "The top of the ladder." },
] as const;

const FAQ = [
  {
    q: "Why did my broadcast only reach a few people?",
    a: "Almost always the saved-number rule. A broadcast list in the free WhatsApp Business app only delivers to recipients who already have your number saved in their phone. Most of a collected or purchased list has not saved you, so the message quietly reaches a fraction of it and nothing tells you that happened. The API has no such rule — it asks for opt-in instead, which is about consent rather than about phone contacts.",
  },
  {
    q: "Do I need Meta to approve every broadcast?",
    a: "You need approval for the template, not for each send. Once a template is approved you can send it repeatedly, filling in the variable parts each time. Approval usually comes back quickly, but plan for it rather than writing a template an hour before a campaign.",
  },
  {
    q: "Why do my templates keep getting rejected?",
    a: "The most common cause is category mismatch — a promotional message submitted as utility. Meta reads the content, not the label. After that it is usually formatting: variables sitting at the very start or end of the message, two variables next to each other, or missing sample values. All of these are fixable and resubmittable.",
  },
  {
    q: "How many messages can I send in a day?",
    a: "It depends on your messaging tier, which counts unique customers in a rolling 24 hours. New numbers start low and the ladder climbs as you send consistently without generating complaints. You do not apply for a higher tier; you earn it, and a bad campaign can move you back down.",
  },
  {
    q: "What does a broadcast to 1,000 people cost?",
    a: "At roughly PKR 13.20 per marketing message, about PKR 13,200 in Meta charges, plus your platform subscription. The same list on a utility template costs around PKR 2,790, which is why it is worth asking whether a message is genuinely promotional before sending it as one.",
  },
  {
    q: "Can I broadcast to numbers I bought or scraped?",
    a: "You should not, and it tends to end the account rather than the campaign. Broadcasting to people who never asked to hear from you is what drives blocks and reports, which pushes your quality rating down and your daily limit with it. The cheapest protection is a list of people who actually opted in.",
  },
] as const;

export default function BroadcastGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}/#article`,
        headline: "How to Send a WhatsApp Broadcast in Pakistan",
        description:
          "Why broadcasts reach almost nobody, how template approval works, how daily limits grow, and what a broadcast actually costs in Pakistan.",
        datePublished: UPDATED,
        dateModified: UPDATED,
        inLanguage: "en-PK",
        author: { "@type": "Organization", name: site.company },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: PAGE_URL,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "hashChat", item: site.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sending a WhatsApp broadcast",
            item: PAGE_URL,
          },
        ],
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
          How to send a broadcast that actually arrives
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          Most broadcasts in this market fail quietly — they go out, nothing
          bounces, and barely anyone receives them. Here is why that happens,
          how approval and daily limits really work, and what a send costs.
        </p>

        <div className="prose-invert mt-12 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold">The short answer</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              On the WhatsApp Business API, a broadcast is a{" "}
              <strong className="text-ink">template message</strong>: text you
              submit to Meta in advance, get approved once, then send many times
              with the variable parts filled in. You are billed per message, and
              how many you may send in a day depends on a{" "}
              <strong className="text-ink">tier you earn</strong> rather than one
              you buy.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              On the free WhatsApp Business app there is no approval and no
              per-message cost — but there is a rule that quietly wastes most
              campaigns, and it is the next section.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Why your last broadcast reached almost nobody
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              A broadcast list in the free app{" "}
              <strong className="text-ink">
                only delivers to people who already saved your number
              </strong>
              . Everyone else is skipped silently. No error, no warning, no way
              to tell from the app that it happened.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              So a list of 500 leads collected from ads, walk-ins or a form might
              genuinely reach forty of them — the handful who saved you. People
              usually conclude their message was bad, or that WhatsApp is
              throttling them. Neither is what happened.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The API removes that rule and replaces it with a different one:
              the person must have{" "}
              <strong className="text-ink">opted in</strong>. That is a
              requirement about consent, not about whether they tapped
              &ldquo;save contact&rdquo;. It is also the single most common
              reason a business outgrows the free app —{" "}
              <Link
                href="/whatsapp-business-api-vs-business-app"
                className="text-brand-sky hover:underline"
              >
                the full comparison is here
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Templates, and what they cost
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Meta reads what a template says and prices it by category — and it
              will re-categorise one that is labelled wrongly. The gap between
              the top two rows is the difference between a campaign that pays
              for itself and one that does not.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-surface-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Category</th>
                    <th className="px-4 py-3 font-semibold">What it covers</th>
                    <th className="px-4 py-3 font-semibold">Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {CATEGORIES.map((c) => (
                    <tr key={c.kind}>
                      <th
                        scope="row"
                        className="px-4 py-3 align-top font-medium text-ink"
                      >
                        {c.kind}
                        <span className="mt-1 block text-xs font-normal text-ink-faint">
                          {c.note}
                        </span>
                      </th>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {c.use}
                      </td>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {c.rate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-faint">
              Rates are Meta&rsquo;s, charged to your own account, and Meta
              changes them periodically —{" "}
              <Link
                href="/whatsapp-business-api-pricing-pakistan"
                className="text-brand-sky hover:underline"
              >
                the full pricing breakdown is here
              </Link>
              .
            </p>

            <h3 className="mt-8 font-display text-lg font-semibold">
              Why templates get rejected
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              The usual cause is a promotional message submitted as utility —
              Meta goes by the content, not the label. After that it is nearly
              always formatting: a variable sitting at the very start or end of
              the message, two variables next to each other, or sample values
              left out. None of these are verdicts; fix and resubmit.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Your daily limit is earned, not bought
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Meta caps how many{" "}
              <strong className="text-ink">unique customers</strong> you may
              start conversations with in a rolling 24 hours. The ladder climbs
              as you send consistently without generating complaints:
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-surface-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold">
                      Customers / 24 hours
                    </th>
                    <th className="px-4 py-3 font-semibold">When you are here</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {TIERS.map((t) => (
                    <tr key={t.tier}>
                      <th
                        scope="row"
                        className="px-4 py-3 align-top font-medium text-ink"
                      >
                        {t.tier}
                      </th>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {t.when}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 leading-relaxed text-ink-muted">
              There is no form to request a higher tier. It moves on its own —
              upward when you send well, and{" "}
              <strong className="text-ink">back down</strong> after a campaign
              that draws blocks and reports. This is the mechanism behind most
              of the &ldquo;my number got restricted&rdquo; stories in this
              market.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Quality rating decides everything else
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Every block and every report a recipient files pushes your rating
              down, and the rating drives the tier above. The protective habits
              are unglamorous and they work: send to people who asked to hear
              from you, keep an obvious way to stop, send less often than you
              are allowed to, and answer replies quickly — a broadcast that
              starts real conversations reads very differently to Meta than one
              that only gets dismissed.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Worth knowing: replying inside the 24 hours after a customer
              messages you is{" "}
              <strong className="text-ink">free and needs no template</strong>.
              A cheap broadcast that opens conversations, answered well, costs
              less than a large one that nobody responds to.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              A checklist that survives contact with a real campaign
            </h2>
            <ul className="mt-4 space-y-3 leading-relaxed text-ink-muted">
              <li>
                <strong className="text-ink">Submit the template early.</strong>{" "}
                Not an hour before the campaign. Rejection is routine and
                resubmission costs you a cycle.
              </li>
              <li>
                <strong className="text-ink">
                  Check the category honestly.
                </strong>{" "}
                If it promotes something, it is marketing. Labelling it utility
                gets it re-categorised or refused, and delays the send.
              </li>
              <li>
                <strong className="text-ink">Send to opted-in people only.</strong>{" "}
                A smaller list that expects you outperforms a large one that
                does not, and it protects the rating that sets your ceiling.
              </li>
              <li>
                <strong className="text-ink">Test on a few numbers first.</strong>{" "}
                Variables render differently than they read in the editor.
              </li>
              <li>
                <strong className="text-ink">
                  Have someone ready to answer.
                </strong>{" "}
                Replies land inside the free 24-hour window; a broadcast nobody
                answers wastes the part you paid for.
              </li>
              <li>
                <strong className="text-ink">Do the arithmetic first.</strong>{" "}
                1,000 marketing messages is roughly PKR 13,200 to Meta. Know the
                number before you press send, not after.
              </li>
            </ul>
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

          <section>
            <h2 className="font-display text-2xl font-bold">Read next</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href="/whatsapp-business-api-pricing-pakistan"
                className="rounded-2xl border border-line bg-surface/60 p-5 transition hover:border-brand-sky"
              >
                <p className="font-medium text-ink">What does it all cost?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Meta&rsquo;s per-message rates in Pakistan, and what platforms
                  add on top.
                </p>
              </Link>
              <Link
                href="/whatsapp-green-tick-verification-pakistan"
                className="rounded-2xl border border-line bg-surface/60 p-5 transition hover:border-brand-sky"
              >
                <p className="font-medium text-ink">What about the green tick?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Optional, not purchasable, and blue rather than green since
                  2024.
                </p>
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-line bg-surface/60 p-7">
            <h2 className="font-display text-xl font-bold">
              Where hashChat fits
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              hashChat is where the broadcast is actually put together — the
              contact list, the approved templates, the send, and the shared
              inbox your team answers the replies in. It connects to your own
              WhatsApp Business account, so the number stays yours and{" "}
              <Link
                href="/whatsapp-business-api-pricing-pakistan"
                className="text-brand-sky hover:underline"
              >
                Meta bills you directly
              </Link>{" "}
              with nothing added on top. From PKR 2,000 a month, 3 days free.
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
                  "Assalam o alaikum — broadcast bhejne ke bare mein poochna tha.",
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
