import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { site, waLink } from "@/lib/content";

/**
 * The decision every buyer makes before they shop for a platform.
 *
 * The honest answer is that most small businesses do not need the API,
 * and saying so is what makes the rest of the page believable. The page
 * earns its keep on the two facts the market keeps quiet about: a
 * broadcast list only reaches people who already saved your number, and
 * a number cannot be on the app and the API at the same time. Both are
 * the reasons people outgrow the free app, and neither is obvious until
 * it has already cost someone a campaign.
 *
 * English, like the pricing guide — that is how this comparison is
 * searched for. The landing page stays Roman Urdu.
 */

const PAGE_PATH = "/whatsapp-business-api-vs-business-app";
const PAGE_URL = `${site.url}${PAGE_PATH}`;
const UPDATED = "2026-08-18";

export const metadata: Metadata = {
  // Root template appends " — hashChat"; keep this side under ~49 so the
  // whole title survives without an ellipsis.
  title: "WhatsApp Business API vs the Business App",
  description:
    "The free WhatsApp Business app is enough for most small businesses. Here is where it stops working, what the API adds, and what switching costs.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "WhatsApp Business API vs Business App",
    description:
      "Where the free app stops working, what the API adds, and what switching costs.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const COMPARISON = [
  {
    row: "Price",
    app: "Free",
    api: "Per message to Meta + a platform subscription",
  },
  {
    row: "People who can answer",
    app: "One phone, plus up to 4 linked devices",
    api: "Your whole team, each with their own login",
  },
  {
    row: "Broadcast size",
    app: "256 per list",
    api: "No list cap; a daily limit that grows with your quality rating",
  },
  {
    row: "Who a broadcast reaches",
    app: "Only people who saved your number first",
    api: "Anyone who opted in — saved or not",
  },
  {
    row: "Automation",
    app: "Away message and greeting only",
    api: "Keyword replies, flows, AI, CRM and pipeline logic",
  },
  {
    row: "Chat history",
    app: "Lives on the phone",
    api: "Lives in the platform, survives a lost phone",
  },
  {
    row: "Handling an ad rush",
    app: "Volume can look like spam and get the number blocked",
    api: "The channel Meta built for exactly this traffic",
  },
  {
    row: "Setup",
    app: "Download and go",
    api: "Business verification, then a platform to use it from",
  },
] as const;

const FAQ = [
  {
    q: "Can I use the same number on both the app and the API?",
    a: "No. A number lives on one or the other. Moving it to the API means the WhatsApp Business app stops working for that number, and moving back means going through the migration again. This is the step people underestimate, so plan it for a quiet day rather than mid-campaign.",
  },
  {
    q: "Will I lose my old chats when I migrate?",
    a: "Chat history does not transfer into the API. Export what you need from the app first, and expect to start with a clean inbox on the other side. Contacts you can bring over as a CSV.",
  },
  {
    q: "Why does my broadcast only reach a few people?",
    a: "Because a broadcast list in the WhatsApp Business app only delivers to recipients who have already saved your number in their phone. Most of a bought or collected list has not, so the message silently reaches a fraction of it. The API has no such requirement — it needs opt-in instead, which is a rule about consent rather than about phone contacts.",
  },
  {
    q: "Does the API give me the green tick?",
    a: "Not by itself. The verified badge is granted by Meta at its own discretion, based on whether your business is notable and widely covered, and plenty of businesses run on the API without one. Treat anyone who guarantees you a green tick with suspicion.",
  },
  {
    q: "Is the API worth it for a business with one salesperson?",
    a: "Usually not. If one person handles every message, you never send in bulk, and ads are not driving a rush of replies, the free app does the job and costs nothing. The honest trigger for switching is a second person needing the same number, or volume that the app starts treating as spam.",
  },
] as const;

export default function ApiVsAppPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${PAGE_URL}/#article`,
        headline: "WhatsApp Business API vs WhatsApp Business App",
        description:
          "Where the free WhatsApp Business app stops working, what the API adds, and what switching costs.",
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
            name: "API vs Business app",
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
          WhatsApp Business API vs the Business app
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          Most small businesses do not need the API. Here is the point where
          the free app stops being enough, and what it actually costs to move
          past it.
        </p>

        <div className="prose-invert mt-12 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold">
              The short answer
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              If one person answers your messages on one phone and you are not
              sending in bulk, use the free{" "}
              <strong className="text-ink">WhatsApp Business app</strong>. It
              costs nothing and it does the job.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              You need the{" "}
              <strong className="text-ink">WhatsApp Business API</strong> when
              a second person has to answer on the same number, when ads start
              driving more replies than one phone can hold, or when you want
              messages to go out automatically. The API is not a better
              WhatsApp — it is a different thing, with no app of its own, which
              is why it always comes with a platform attached.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Side by side
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-surface-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold" />
                    <th className="px-4 py-3 font-semibold">Business app</th>
                    <th className="px-4 py-3 font-semibold">Business API</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {COMPARISON.map((c) => (
                    <tr key={c.row}>
                      <th
                        scope="row"
                        className="px-4 py-3 align-top font-medium text-ink"
                      >
                        {c.row}
                      </th>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {c.app}
                      </td>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {c.api}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              The broadcast trap
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              This is the one that catches people out. A broadcast list in the
              WhatsApp Business app only delivers to recipients who have
              already saved your number in their phone. Everyone else gets
              nothing, and the app does not tell you.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              So a shop sends an offer to 200 collected numbers, sees it
              delivered to the 30 regulars who had saved them, and concludes
              that WhatsApp marketing does not work. It did work — it just
              never reached the other 170. On the API there is no saved-contact
              requirement. What it asks for instead is opt-in and a template
              Meta has approved, which is a rule about consent rather than
              about anyone&rsquo;s address book.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              And the number ban
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The other reason businesses move is that the app has a limit on
              how much traffic it will tolerate. Run a Facebook or Instagram
              ad, get a sudden rush of messages, reply to all of them quickly
              from a number nobody has saved, and the pattern looks like spam.
              Numbers get restricted this way regularly, and the number is
              usually the business&rsquo;s most valuable asset.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The API is the channel Meta built for that exact traffic. It is
              not an{" "}
              <span className="text-ink">anti-ban trick</span> — nothing is,
              and anyone selling one is worth avoiding. It simply means the
              volume you are sending is the volume the channel expects, instead
              of a red flag on a consumer-grade app.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              What moving actually involves
            </h2>
            <ol className="mt-4 space-y-3 text-ink-muted">
              <li className="leading-relaxed">
                <strong className="text-ink">1. Free the number.</strong> A
                number can be on the app or the API, never both. If it is
                currently on the Business app, that app stops working for it
                once it moves.
              </li>
              <li className="leading-relaxed">
                <strong className="text-ink">2. Verify the business.</strong>{" "}
                Meta checks that the business is real — usually registration
                documents and a matching address. This is the slow step.
              </li>
              <li className="leading-relaxed">
                <strong className="text-ink">3. Pick a platform.</strong> The
                API has no interface of its own. Something has to give your
                team an inbox to work in.
              </li>
              <li className="leading-relaxed">
                <strong className="text-ink">4. Get templates approved.</strong>{" "}
                Anything you send outside a 24-hour reply window has to be an
                approved template. Replies inside that window are free and need
                no approval.
              </li>
            </ol>
            <p className="mt-5 leading-relaxed text-ink-muted">
              Chat history does not come across, so export anything you need
              from the app first. Contacts do, as a CSV.
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
                href="/whatsapp-green-tick-verification-pakistan"
                className="rounded-2xl border border-line bg-surface/60 p-5 transition hover:border-brand-sky"
              >
                <p className="font-medium text-ink">What about the green tick?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Optional, not purchasable, and blue rather than green since 2024. What the badge actually takes.
                </p>
              </Link>
              <Link
                href="/whatsapp-business-api-pricing-pakistan"
                className="rounded-2xl border border-line bg-surface/60 p-5 transition hover:border-brand-sky"
              >
                <p className="font-medium text-ink">What does it cost to run?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Meta&rsquo;s per-message rates in Pakistan, and what
                  platforms add on top.
                </p>
              </Link>
              <Link
                href="/how-to-send-whatsapp-broadcast-pakistan"
                className="rounded-2xl border border-line bg-surface/60 p-5 transition hover:border-brand-sky"
              >
                <p className="font-medium text-ink">How do I send a broadcast?</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Template approval, daily limits, and why most broadcasts
                  reach almost nobody.
                </p>
              </Link>
            </div>
          </section>

          <section className="rounded-2xl border border-line bg-surface/60 p-7">
            <h2 className="font-display text-xl font-bold">
              Where hashChat fits
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              hashChat is the platform half — the shared inbox your team works
              in once the number is on the API, with contacts, pipelines,
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
                  "Assalam o alaikum — API aur Business app mein se mere liye kya theek rahega?",
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
