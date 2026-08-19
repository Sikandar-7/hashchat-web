import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { site, waLink } from "@/lib/content";

/**
 * The query this market searches most after pricing — and the one every
 * competitor answers dishonestly.
 *
 * Half this market sells a "green tick guarantee". Nobody can guarantee
 * it: the badge is granted by Meta on notability, and no provider sits
 * in that decision. Saying so plainly is the point of the page — the
 * same move that makes the pricing guide credible.
 *
 * Two facts here are newer than most pages in this market admit: the
 * badge has not been green since Meta unified badge colours in 2024,
 * and there is now a second, paid route (Meta Verified) that skips
 * notability but is not switched on in every country. Both are hedged,
 * because the public sourcing is vendor blogs rather than Meta itself.
 *
 * English, like the other two guides — that is how this is searched.
 */

const PAGE_PATH = "/whatsapp-green-tick-verification-pakistan";
const PAGE_URL = `${site.url}${PAGE_PATH}`;
const UPDATED = "2026-08-19";

export const metadata: Metadata = {
  // Root template appends " — hashChat"; keep this under ~49 characters
  // so the full title survives in results without an ellipsis.
  title: "WhatsApp Green Tick in Pakistan: What It Takes",
  description:
    "The green tick cannot be bought, is not required to use the API, and is not even green any more. What the badge is, both routes to it, and what you control.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "WhatsApp Green Tick: What It Actually Takes",
    description:
      "What the verified badge really is, the two routes to it, and why nobody can guarantee you one.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

/** The three separate things people lump together as "verification". */
const LAYERS = [
  {
    name: "Business Verification",
    what: "Meta confirms your business is a real, registered entity, from documents you upload in Business Manager.",
    who: "You control this. It is paperwork, not a judgement call.",
    needed: "Required before you can send at any real volume.",
  },
  {
    name: "Display name approval",
    what: "Meta checks the name customers see matches your actual business and follows its naming rules.",
    who: "You control this. Rejections are usually a naming-rule problem you can fix and resubmit.",
    needed: "Required before the number can send.",
  },
  {
    name: "Verified badge (the tick)",
    what: "The badge beside your name in the chat, marking an Official Business Account.",
    who: "Meta decides, alone. No provider, reseller or agency is part of it.",
    needed: "Optional. Plenty of businesses run on the API without one.",
  },
] as const;

const FAQ = [
  {
    q: "Do I need the green tick to use the WhatsApp Business API?",
    a: "No. The badge is optional and always has been. Sending, broadcasts, automations, a shared team inbox — all of it works on an unverified account. What you do need is Business Verification and an approved display name, which are separate things you can actually control.",
  },
  {
    q: "Can I buy the green tick from a provider?",
    a: "No, and this is the clearest warning sign in this market. The badge is granted by Meta at its own discretion. No platform, reseller or agency is part of that decision, so nobody can honestly promise you one. A provider who guarantees a green tick either misunderstands the process or is counting on you not knowing it.",
  },
  {
    q: "Why is the badge blue now instead of green?",
    a: "Meta unified badge colours across its apps in 2024, so what people still call the WhatsApp green tick renders as a blue check. The name stuck because that is what everyone searched for. Nothing about how you qualify changed with the colour.",
  },
  {
    q: "What does Meta mean by notability?",
    a: "Coverage of your business in independent news sources Meta considers reputable. Paid placements, sponsored articles and press releases you commissioned do not count, because the point of the test is that somebody else chose to write about you. This is why most small businesses do not qualify on this route, however real their business is.",
  },
  {
    q: "How long does a decision take, and can I reapply?",
    a: "Reviews commonly run weeks rather than days, and rejection is a normal outcome rather than a verdict on your business. You can apply again later, and the sensible thing to do in between is build the coverage the test is actually looking for.",
  },
  {
    q: "Is the paid Meta Verified subscription available in Pakistan?",
    a: "Meta has been switching that subscription on country by country, so the only reliable answer is what your own account shows. Open Meta Business Manager and see whether Meta Verified is offered for your business — if it is not listed, it has not reached you yet, and no provider can unlock it early.",
  },
] as const;

export default function GreenTickPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}/#article`,
        headline: "WhatsApp Green Tick in Pakistan: What It Actually Takes",
        description:
          "What the WhatsApp verified badge really is, the two routes to it, why it cannot be bought, and what you can control instead.",
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
            name: "WhatsApp green tick",
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
          The WhatsApp green tick, honestly
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          It cannot be bought, it is not required to use the API, and it has
          not actually been green since 2024. Here is what the badge is, the
          two ways businesses get one, and the part you control.
        </p>

        <div className="prose-invert mt-12 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold">The short answer</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The tick marks an{" "}
              <strong className="text-ink">Official Business Account</strong>.
              Meta grants it on{" "}
              <strong className="text-ink">notability</strong> — whether
              independent news sources have written about your business — and it
              decides alone. No platform, reseller or agency is part of that
              decision, which is why{" "}
              <strong className="text-ink">
                nobody can honestly guarantee you one
              </strong>
              .
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The good news is that you do not need it. Broadcasts, automations,
              a shared team inbox and everything else on the API work exactly the
              same without a badge. What you do need is Business Verification and
              an approved display name — and both of those are paperwork you
              control.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Three things people call &ldquo;verification&rdquo;
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Most of the confusion in this market comes from treating these as
              one step. They are three, and only the last one is out of your
              hands.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-surface-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold" />
                    <th className="px-4 py-3 font-semibold">What it is</th>
                    <th className="px-4 py-3 font-semibold">Who decides</th>
                    <th className="px-4 py-3 font-semibold">Required?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {LAYERS.map((l) => (
                    <tr key={l.name}>
                      <th
                        scope="row"
                        className="px-4 py-3 align-top font-medium text-ink"
                      >
                        {l.name}
                      </th>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {l.what}
                      </td>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {l.who}
                      </td>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {l.needed}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Route 1 — Official Business Account, free
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              This is the original route and the one people mean by the green
              tick. It runs only on the WhatsApp Business API, never on the free
              Business app, and it turns on one question: has the press written
              about you without being paid to?
            </p>
            <h3 className="mt-6 font-display text-lg font-semibold">
              What Meta is looking for
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Organic coverage in reputable, independent outlets. Sponsored
              articles, advertorials and press releases you commissioned are
              explicitly not counted — the test is that somebody else decided you
              were worth writing about. Reviews commonly take weeks rather than
              days, and rejection is ordinary.
            </p>
            <h3 className="mt-6 font-display text-lg font-semibold">
              Who realistically qualifies
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Recognised national brands, mostly. A profitable, well-run shop
              with a thousand happy customers and no press coverage will not pass
              this test — and that is not a flaw in the business, it is simply
              not what the test measures.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Route 2 — Meta Verified, paid
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Since 2024 Meta has also sold a subscription that grants a verified
              badge without the notability test, aimed at exactly the smaller
              businesses the first route excludes. It is a monthly fee rather
              than a one-off, and it usually bundles extras alongside the badge.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The catch is availability: Meta has been enabling it country by
              country, so it exists for some businesses and simply is not offered
              to others yet. There is one reliable way to know which you are —
              open Meta Business Manager and look. If Meta Verified is not listed
              for your business, it has not reached you, and no provider can turn
              it on early.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              What you can actually do this week
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              None of this needs a badge, and all of it is inside your control:
            </p>
            <ul className="mt-4 space-y-3 leading-relaxed text-ink-muted">
              <li>
                <strong className="text-ink">
                  Finish Business Verification.
                </strong>{" "}
                Registration documents in Meta Business Manager. This is the one
                that actually gates your sending, and it is paperwork rather than
                a judgement.
              </li>
              <li>
                <strong className="text-ink">
                  Get the display name right.
                </strong>{" "}
                It has to match the business you verified and follow
                Meta&rsquo;s naming rules. Most rejections here are fixable and
                resubmittable.
              </li>
              <li>
                <strong className="text-ink">
                  Protect your quality rating.
                </strong>{" "}
                Message people who asked to hear from you, keep an easy way out,
                and answer quickly. Your rating decides how many messages a day
                you may send — which affects your business far more than a badge
                does.
              </li>
              <li>
                <strong className="text-ink">
                  Earn the coverage, if you want route 1.
                </strong>{" "}
                The notability test is not gameable, but it is winnable over time
                by doing things worth reporting.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              &ldquo;Green tick guaranteed&rdquo; is a red flag
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              You will see this promised in ads across this market. Treat it the
              way you would treat a guaranteed visa: the person selling it does
              not make the decision. At best they mean they will submit the
              application for you, which you can do yourself. At worst you are
              paying for an outcome nobody can deliver.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The same test is worth applying to the other promise this market
              makes —{" "}
              <Link
                href="/whatsapp-business-api-vs-business-app"
                className="text-brand-sky hover:underline"
              >
                &ldquo;your number will never be banned&rdquo;
              </Link>
              . The rules belong to Meta in both cases, and anyone guaranteeing a
              result they do not control is telling you something about how they
              will handle the rest of your account.
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

          <section>
            <h2 className="font-display text-2xl font-bold">Read next</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
                href="/whatsapp-business-api-vs-business-app"
                className="rounded-2xl border border-line bg-surface/60 p-5 transition hover:border-brand-sky"
              >
                <p className="font-medium text-ink">Do you even need the API?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Most small businesses do not. Where the free app stops
                  working.
                </p>
              </Link>
              <Link
                href="/how-to-send-whatsapp-broadcast-pakistan"
                className="rounded-2xl border border-line bg-surface/60 p-5 transition hover:border-brand-sky"
              >
                <p className="font-medium text-ink">How do I send a broadcast?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Template approval, daily limits, and why most broadcasts reach
                  almost nobody.
                </p>
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-line bg-surface/60 p-7">
            <h2 className="font-display text-xl font-bold">
              Where hashChat fits
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              hashChat does not sell you a badge, because nobody can. What it
              gives you is the part that actually moves your numbers — a shared
              inbox your whole team works in, with contacts, pipelines,
              broadcasts and automations attached. It connects to your own
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
                  "Assalam o alaikum — green tick aur business verification ke bare mein poochna tha.",
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
