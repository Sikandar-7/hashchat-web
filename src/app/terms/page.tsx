import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { CURRENCY, TRIAL_DAYS, legal, legalAddressLine, site } from "@/lib/content";

/**
 * Terms of service, and the page that carries the registered address.
 *
 * site-footer.tsx says it plainly: the address came out of the sitewide
 * footer because it is a home address and the footer puts it on every
 * page -- "if some future verification really does want it on the site,
 * /terms is the place". This is that page. Do not move it back.
 *
 * English only at a root-level slug, for the same reason as /privacy:
 * three translations of a contract are three contracts, and the first
 * time they drift the site is promising two different things.
 *
 * The section on the customer's own Meta account is not boilerplate. It
 * is the one commercial claim this market lies about most -- everyone
 * else resells conversations at a markup and calls it a bundle. hashChat
 * connects to the customer's own WhatsApp Business Account and Meta
 * bills them directly, so the terms have to say who owes whom what, or
 * the honest version of the pricing story has no legal backing.
 */

const PAGE_PATH = "/terms";
const PAGE_URL = `${site.url}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The agreement between you and ${legal.entity} for the use of ${site.name} — what the service is, what you owe, what we owe, and how either side ends it.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: `${site.name} Terms of Service`,
    description:
      "What the service is, what you agree to, how billing works, and the law that governs it.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: `${site.name} Terms of Service`,
        description:
          "The agreement between the customer and LOVE & JOY (SMC-PRIVATE) LIMITED for the use of hashChat.",
        inLanguage: "en-PK",
        dateModified: legal.updated,
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
            name: "Terms of Service",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav locale="en" />

      <main className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
        <p className="text-sm text-ink-faint">
          <Link href="/" className="hover:text-ink-muted">
            hashChat
          </Link>{" "}
          · Legal
        </p>

        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          The agreement between you and the company that runs {site.name}. Short
          sections, plain sentences, and no clause that says something different
          from what the website says.
        </p>

        <p className="mt-4 text-sm text-ink-faint">
          Last updated {legal.updated}
        </p>

        <div className="prose-invert mt-12 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold">
              1. Who you are agreeing with
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {site.name} is operated by{" "}
              <span className="text-ink" dir="ltr">
                {legal.entity}
              </span>
              , a single-member private company registered in Pakistan under the
              Companies Act 2017, CUIN {legal.cuin}, incorporated{" "}
              {legal.incorporated}. In these terms, that company is{" "}
              <strong className="text-ink">we</strong> and{" "}
              <strong className="text-ink">us</strong>; the person or business
              using the service is <strong className="text-ink">you</strong>.
            </p>
            <div className="mt-6 rounded-2xl border border-line bg-surface/60 p-5 text-sm leading-relaxed text-ink-muted">
              <p className="font-medium text-ink">Registered address</p>
              <p className="mt-2" dir="ltr">
                {legalAddressLine}
              </p>
              <p className="mt-4 font-medium text-ink">Contact</p>
              <p className="mt-2" dir="ltr">
                <a
                  href={`mailto:${legal.contact}`}
                  className="text-brand-sky hover:underline"
                >
                  {legal.contact}
                </a>{" "}
                · WhatsApp {site.whatsappDisplay}
              </p>
            </div>
            <p className="mt-6 leading-relaxed text-ink-muted">
              Creating an account, or using the service in any way, means you
              accept these terms. If you are accepting on behalf of a company,
              you are confirming you are allowed to bind it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              2. What the service is
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {site.name} is a WhatsApp CRM: a shared inbox your team works in,
              with contacts, sales pipelines, broadcasts and automations
              attached. It connects to your own WhatsApp Business Account on the
              WhatsApp Business Platform.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              What each plan includes is set out on the{" "}
              <Link href="/#pricing" className="text-brand-sky hover:underline">
                pricing section
              </Link>{" "}
              of the home page. We may add features, and we may retire ones
              almost nobody uses — if we retire something you rely on, we will
              tell you before it goes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              3. Your WhatsApp account stays yours
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              This is the part worth reading twice, because much of this market
              works the other way.
            </p>
            <ul className="mt-5 space-y-3 leading-relaxed text-ink-muted">
              <li>
                <strong className="text-ink">The number is yours.</strong> Your
                WhatsApp Business Account and phone number belong to you and stay
                registered to you. If you leave, you keep them.
              </li>
              <li>
                <strong className="text-ink">Meta bills you directly.</strong>{" "}
                Conversation charges are settled between you and Meta on your own
                billing method. We do not resell them and we add nothing on top.
              </li>
              <li>
                <strong className="text-ink">
                  Meta&rsquo;s rules apply to you.
                </strong>{" "}
                Your use of WhatsApp is governed by the{" "}
                <a
                  href="https://www.whatsapp.com/legal/business-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-sky hover:underline"
                >
                  WhatsApp Business Messaging Policy
                </a>{" "}
                and Meta&rsquo;s terms. Meta can restrict or ban a number for
                breaking them, and that decision is Meta&rsquo;s alone — we cannot
                reverse it, and no provider who claims otherwise can either.
              </li>
              <li>
                <strong className="text-ink">
                  Verification is not something we sell.
                </strong>{" "}
                Business verification, display name approval and the verified
                badge are decided by Meta. We can help you prepare;{" "}
                <Link
                  href="/whatsapp-green-tick-verification-pakistan"
                  className="text-brand-sky hover:underline"
                >
                  we cannot promise an outcome
                </Link>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              4. Your account
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              You need to be 18 or older and able to enter a contract. Keep your
              login details to yourself, use a password you do not use elsewhere,
              and tell us quickly if you think someone else has got in. Anything
              done through your account is treated as done by you, and you are
              responsible for the people you invite into your workspace.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              5. What you must not do
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              The rules that keep your number alive, mostly:
            </p>
            <ul className="mt-5 space-y-3 leading-relaxed text-ink-muted">
              <li>
                <strong className="text-ink">
                  No messaging people who did not ask.
                </strong>{" "}
                Broadcasts go to contacts who gave you permission to message
                them. Bought lists, scraped numbers and blind blasts are the
                fastest way to lose a number, and they are not allowed here.
              </li>
              <li>
                <strong className="text-ink">
                  Give people a way out and honour it.
                </strong>{" "}
                When someone asks you to stop, stop.
              </li>
              <li>
                <strong className="text-ink">
                  Nothing illegal, deceptive or harmful
                </strong>{" "}
                — including impersonating somebody else, running a scam, or
                sending content you have no right to send.
              </li>
              <li>
                <strong className="text-ink">
                  Do not attack the service.
                </strong>{" "}
                No probing for holes, no scraping, no reselling access, no
                reverse engineering, and no attempt to reach another
                customer&rsquo;s data.
              </li>
            </ul>
            <p className="mt-5 leading-relaxed text-ink-muted">
              You are responsible for the messages you send and for having a
              lawful basis to hold the contact data you upload.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              6. Trial, fees and payment
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              New accounts get {TRIAL_DAYS} days free, with no card required to
              start. After that a plan is payable in advance for each billing
              period, in {CURRENCY}. Current prices are on the{" "}
              <Link href="/#pricing" className="text-brand-sky hover:underline">
                pricing section
              </Link>{" "}
              and that page is the authority — these terms deliberately do not
              repeat a number that could go stale.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              If we change a price, existing customers get notice before it
              applies to them. Fees already paid for a period are not refundable,
              except where the law says otherwise. Meta&rsquo;s conversation
              charges are separate and are not ours to refund.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              7. Ending it
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              You can stop at any time — close the account, disconnect the
              number, and the data goes with it. See{" "}
              <Link
                href="/data-deletion"
                className="text-brand-sky hover:underline"
              >
                how to delete your data
              </Link>
              .
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              We can suspend or close an account that breaks section 5, that goes
              unpaid, or that we are required to act on by law or by Meta. Except
              where something is serious enough to need immediate action, we will
              warn you first and give you a chance to fix it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              8. Data and privacy
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              How we handle data is set out in the{" "}
              <Link href="/privacy" className="text-brand-sky hover:underline">
                Privacy Policy
              </Link>
              , which forms part of these terms. In short: the conversations and
              contacts in your workspace are yours, we process them to run the
              service for you, and we do not sell them or use them for anything
              else.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              9. What we do not promise
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              We work to keep {site.name} available and correct, but we provide
              it as it is. We do not promise uninterrupted service, and parts of
              it depend on Meta&rsquo;s platform, which we do not control — an
              outage, a policy change or a restriction on your number can affect
              you through no act of ours.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              To the extent the law allows, our total liability to you for any
              claim is limited to the fees you paid us in the three months before
              it arose, and we are not liable for lost profits, lost business or
              indirect loss. Nothing here limits liability that cannot lawfully
              be limited.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              10. Changes to these terms
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              We may update these terms. The date at the top moves when we do,
              and material changes are emailed to account holders rather than
              left for you to spot. Continuing to use {site.name} after a change
              means you accept it; if you do not, close the account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              11. Governing law
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              These terms are governed by the laws of the Islamic Republic of
              Pakistan, and the courts at Lahore have jurisdiction. If any part
              of these terms turns out to be unenforceable, the rest still
              stands.
            </p>
          </section>

          <section className="rounded-2xl border border-line bg-surface/60 p-7">
            <h2 className="font-display text-xl font-bold">
              Anything unclear
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Ask before you sign up rather than after. Email{" "}
              <a
                href={`mailto:${legal.contact}`}
                className="text-brand-sky hover:underline"
                dir="ltr"
              >
                {legal.contact}
              </a>{" "}
              or message {site.whatsappDisplay} on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link href="/privacy" className="text-ink-muted hover:text-ink">
                Privacy Policy
              </Link>
              <Link
                href="/data-deletion"
                className="text-ink-muted hover:text-ink"
              >
                Delete your data
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
