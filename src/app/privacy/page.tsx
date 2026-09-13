import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { coexistence, legal, legalAddressLine, site } from "@/lib/content";

/**
 * The privacy policy, and the URL Meta's app settings point at.
 *
 * English only, at a root-level slug, like the four guides. Not because
 * the reader is English-first -- most of this market is not -- but
 * because this page has one reader who decides things: the Meta reviewer
 * following the Privacy Policy URL out of App Dashboard. Translating it
 * into three languages would create three texts that have to stay
 * legally identical forever, and the first time they drift the site is
 * making two different promises about the same data.
 *
 * The Platform Data section is the load-bearing one. Access Verification
 * asks the business to describe how it uses other businesses' data, and
 * the reviewer checks the answer against this page. The wording there
 * deliberately mirrors Meta's own Limited Use language rather than
 * paraphrasing it.
 *
 * Every factual claim here is one that can be checked: the entity and
 * CUIN come off the SECP documents, the server region is where the box
 * actually is, and the contact address is a mailbox that receives mail
 * today. Nothing is aspirational -- if the product changes, this page
 * changes with it, and the date at the top moves.
 *
 * The notification and AI lines mirror what the app actually sends
 * (personal-wa-crm: the push call in the WhatsApp webhook, and the
 * bring-your-own-key assistant in src/lib/ai/). The same companies are
 * listed as processors in Meta's App Review data-handling answers, so
 * if the app starts sending data somewhere new, both change together.
 *
 * The two coexistence rows (added 2026-09-13) describe what the app
 * stores when a business connects its WhatsApp Business app number:
 * past messages as text with their time and direction, media as a text
 * label rather than the file, and the app's contacts in a table of
 * their own (whatsapp_app_contacts) used only to name chats. If the
 * import changes, these rows change with it.
 */

const PAGE_PATH = "/privacy";
const PAGE_URL = `${site.url}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, stores and deletes data — including data received from Meta on behalf of the businesses that use it.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: `${site.name} Privacy Policy`,
    description:
      "What we collect, why, where it is stored, who it is shared with, and how to have it deleted.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

/**
 * The categories, kept as data so the table and the retention section
 * cannot drift apart. `why` is the purpose, `keep` is the retention --
 * a policy that lists data without saying how long it is held is the
 * most common thing missing from these pages.
 */
const DATA = [
  {
    what: "Account details",
    detail:
      "Your name, email address, phone number, and the workspace and team members you create.",
    why: "To create your account, sign you in, and let your team share one inbox.",
    keep: "For as long as the account is open.",
  },
  {
    what: "WhatsApp conversations",
    detail:
      "Messages sent and received on your connected WhatsApp Business number, the phone numbers and names of the people who message you, and any media in those chats.",
    why: "This is the product. Without it there is no shared inbox, no contact record and no conversation history.",
    keep: "Until you delete it, or until the account closes.",
  },
  {
    what: "Past chats from the WhatsApp Business app",
    detail: `Only if a business connects the number it uses in that app. Up to ${coexistence.historyDays} days of past one-to-one chats: the text of each message, its time, and whether it was sent or received. Photos, voice notes and files are kept as a text label such as “[photo]” — the files are not fetched. Group chats are not included.`,
    why: "To show the business its own earlier conversations in the inbox.",
    keep: "Like other messages: until you delete it, or until the account closes.",
  },
  {
    what: "The WhatsApp Business app's contacts",
    detail:
      "On the same connection: the name and number of each contact in the app, including people who have never chatted with the business. Kept in a separate list for each account.",
    why: "Only to show the right name on a chat. Nobody becomes a contact in hashChat unless they have a chat with the business.",
    keep: "Until the contact is removed in the app, you delete it, or the account closes.",
  },
  {
    what: "Meta Platform Data",
    detail:
      "Your WhatsApp Business Account and phone number identifiers, business profile details, message templates, and delivery and read status returned by Meta.",
    why: "To send and receive on your behalf and to show you what happened to a message.",
    keep: "Until the account closes or you disconnect the number.",
  },
  {
    what: "Technical records",
    detail:
      "Sign-in times, IP addresses, browser and device information, and server error logs.",
    why: "To keep the service running, investigate faults, and detect abuse of an account.",
    keep: "Rolling logs, kept for a short operational window and then discarded.",
  },
] as const;

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: `${site.name} Privacy Policy`,
        description:
          "How hashChat collects, uses, stores and deletes data, including data received from Meta.",
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
            name: "Privacy Policy",
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
          Privacy Policy
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          What {site.name} collects, why, where it is kept, who else sees it,
          and how to have it deleted. Written to be read, not to be survived.
        </p>

        <p className="mt-4 text-sm text-ink-faint">
          Last updated {legal.updated}
        </p>

        <div className="prose-invert mt-12 space-y-12">
          <section>
            <h2 className="font-display text-2xl font-bold">Who we are</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {site.name} is operated by{" "}
              <span className="text-ink" dir="ltr">
                {legal.entity}
              </span>
              , a company registered in Pakistan under the Companies Act 2017,
              CUIN {legal.cuin}, incorporated {legal.incorporated}. We are the
              data controller for the information described on this page.
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
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              What this policy covers
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              It covers the {site.name} website and the {site.name} application
              at{" "}
              <span dir="ltr" className="text-ink">
                {site.appUrl.replace("https://", "")}
              </span>
              , including the Android app.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              It does not cover WhatsApp itself. Your WhatsApp Business Account
              belongs to you and lives with Meta under{" "}
              <a
                href="https://www.whatsapp.com/legal/business-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-sky hover:underline"
              >
                Meta&rsquo;s own terms and policies
              </a>
              . {site.name} connects to that account; it does not replace it.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Where a business uses {site.name} to talk to its own customers,
              that business is the controller of those conversations and{" "}
              {site.name} processes them on its instructions. If you messaged a
              business, or are saved in the contacts of its WhatsApp Business
              app, and want your data removed, ask that business first — they
              can delete it themselves, and they are the ones who decide.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              What we collect, and why
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-line bg-surface-2">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Data</th>
                    <th className="px-4 py-3 font-semibold">Why</th>
                    <th className="px-4 py-3 font-semibold">How long</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {DATA.map((d) => (
                    <tr key={d.what}>
                      <th
                        scope="row"
                        className="px-4 py-3 align-top font-medium text-ink"
                      >
                        {d.what}
                        <span className="mt-1 block font-normal text-ink-muted">
                          {d.detail}
                        </span>
                      </th>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {d.why}
                      </td>
                      <td className="px-4 py-3 align-top text-ink-muted">
                        {d.keep}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 leading-relaxed text-ink-muted">
              We do not store payment card numbers on our servers. We do not
              collect special categories of data, and we do not ask for any.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Data we receive from Meta
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {site.name} is built on the WhatsApp Business Platform, so some of
              what we hold reaches us through Meta&rsquo;s APIs rather than from
              you directly. That information belongs to the business whose
              account it came from, and we treat it that way.
            </p>
            <ul className="mt-5 space-y-3 leading-relaxed text-ink-muted">
              <li>
                <strong className="text-ink">
                  We use it only to provide the service.
                </strong>{" "}
                Platform Data is used to run the shared inbox, contacts,
                pipelines, broadcasts, automations and, when the business
                turns it on, AI replies for the business it belongs to — and
                for nothing else.
              </li>
              <li>
                <strong className="text-ink">We do not sell it.</strong> Not to
                advertisers, not to data brokers, not to anyone, in any form,
                aggregated or otherwise.
              </li>
              <li>
                <strong className="text-ink">
                  We do not build profiles across businesses.
                </strong>{" "}
                One customer&rsquo;s contacts and conversations are never mixed
                with another&rsquo;s, and we do not combine them to enrich,
                score or target anybody.
              </li>
              <li>
                <strong className="text-ink">
                  We do not use it for advertising.
                </strong>{" "}
                Neither ours nor anyone else&rsquo;s.
              </li>
              <li>
                <strong className="text-ink">
                  We delete it when it is no longer needed
                </strong>{" "}
                — when the account closes, when the number is disconnected, or
                when you ask.
              </li>
            </ul>

            <h3 className="mt-8 font-display text-lg font-semibold">
              If a business connects its WhatsApp Business app number
            </h3>
            <p className="mt-3 leading-relaxed text-ink-muted">
              A business can keep using the WhatsApp Business app on its phone
              and connect the same number to {site.name} — Meta calls this
              coexistence. When it chooses{" "}
              <span className="text-ink">
                &ldquo;{coexistence.connectLabel}&rdquo;
              </span>
              , Meta sends us two things from that app, both in the table
              above: up to {coexistence.historyDays} days of past
              one-to-one chats, requested once, at connect time; and the
              app&rsquo;s contact list, which follows the app — a contact
              removed there is removed here too.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              We use them only to show the business its own past conversations
              and the right names in its inbox. Neither goes to anyone not
              already named under &ldquo;Who else sees it&rdquo; below, and
              both are kept like the rest of the inbox: until deleted, or until
              the account closes.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              To stop it, the business disconnects in the WhatsApp Business
              app:{" "}
              <span className="text-ink">
                Settings → Account → Business Platform → Disconnect
              </span>
              . To have what already came across removed, use the{" "}
              <Link href="/data-deletion" className="text-brand-sky hover:underline">
                data deletion page
              </Link>
              .
            </p>

            <p className="mt-5 leading-relaxed text-ink-muted">
              Our use of information received from Meta APIs adheres to the{" "}
              <a
                href="https://developers.facebook.com/terms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-sky hover:underline"
              >
                Meta Platform Terms
              </a>{" "}
              and{" "}
              <a
                href="https://developers.facebook.com/devpolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-sky hover:underline"
              >
                Developer Policies
              </a>
              , including their Limited Use requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Who else sees it
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              A short list, and it stays short on purpose:
            </p>
            <ul className="mt-5 space-y-3 leading-relaxed text-ink-muted">
              <li>
                <strong className="text-ink">Meta Platforms.</strong> Messages
                you send and receive travel through WhatsApp. Meta holds its own
                copy under its own policies, and that copy is outside our
                control.
              </li>
              <li>
                <strong className="text-ink">Our hosting provider.</strong> The
                servers that run {site.name} and hold its database.
              </li>
              <li>
                <strong className="text-ink">Google, for notifications.</strong>{" "}
                If you use the {site.name} Android app with notifications turned
                on, each new message — and any alert about your WhatsApp number —
                reaches your phone through Firebase Cloud Messaging, a Google
                service. The notification carries the sender&rsquo;s name or
                number and the message text, and Google delivers it over its own
                global network.
              </li>
              <li>
                <strong className="text-ink">
                  OpenAI or Anthropic, only if a business turns on AI.
                </strong>{" "}
                The AI reply assistant stays off until a business switches it on
                and adds its own API key from one of these providers. From then
                on, to draft or send a reply, {site.name} sends that provider the
                business&rsquo;s instructions, the recent text messages of the
                conversation being answered, and any matching text from the
                business&rsquo;s knowledge base. Photos, voice notes and other
                media are not sent. The provider handles this under the
                business&rsquo;s own account and terms, and {site.name} does not
                use conversations to train any AI model.
              </li>
              <li>
                <strong className="text-ink">Nobody else</strong> — unless the
                law requires it, or you ask us to.
              </li>
            </ul>
            <p className="mt-5 leading-relaxed text-ink-muted">
              We do not sell data and we do not share it for anyone
              else&rsquo;s marketing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Where it is stored
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              On servers in {legal.dataRegion}. If you are messaging from
              Pakistan or anywhere else, your data crosses a border to get
              there, and by using {site.name} you accept that transfer.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Two things leave that server: notifications, which travel through
              Google&rsquo;s Firebase network to your phone, and — only when a
              business turns on AI — the text sent to the AI provider it chose,
              which processes it on that provider&rsquo;s own infrastructure.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Connections to the site and the app are encrypted in transit with
              TLS. Access to the database is limited to the people who operate
              the service, and every account is separated so one customer cannot
              read another&rsquo;s data. No system is perfectly secure, and we do
              not claim otherwise; if a breach ever affects your data we will
              tell you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">Your rights</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              You can ask us to show you the data we hold about you, correct it,
              delete it, or hand it over in a portable form. You can also object
              to a particular use, or withdraw consent where a use rests on it.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Write to{" "}
              <a
                href={`mailto:${legal.contact}`}
                className="text-brand-sky hover:underline"
                dir="ltr"
              >
                {legal.contact}
              </a>{" "}
              and we will answer within 30 days. There is a separate page with
              the exact steps for deletion:{" "}
              <Link href="/data-deletion" className="text-brand-sky hover:underline">
                how to delete your data
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">Children</h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              {site.name} is a business tool and is not for children. We do not
              knowingly collect data from anyone under 18. If you believe a
              child&rsquo;s data has reached us, write to us and we will remove
              it.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Changes to this policy
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              When the product changes, this page changes with it and the date
              at the top moves. If a change materially affects how we handle
              your data, we will tell account holders by email rather than
              relying on you to notice.
            </p>
          </section>

          <section className="rounded-2xl border border-line bg-surface/60 p-7">
            <h2 className="font-display text-xl font-bold">
              Questions about any of this
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              A real person reads these. Email{" "}
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
              <Link href="/terms" className="text-ink-muted hover:text-ink">
                Terms of Service
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
