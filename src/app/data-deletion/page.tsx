import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { legal, site, waLink } from "@/lib/content";

/**
 * The Data Deletion Instructions URL.
 *
 * Meta requires every app to offer one of two things: a Data Deletion
 * Callback URL, which is an endpoint Meta calls, or a Data Deletion
 * Instructions URL, which is a page a human reads. This is the second
 * one, and it is the cheaper right answer while there is no endpoint --
 * a callback that exists but silently fails is worse than a page that
 * tells someone exactly what to send and to whom.
 *
 * Deliberately written around a REQUEST rather than a button. There is
 * no self-serve "delete my workspace" control in the product today, and
 * a legal page that describes one would be a false claim on the one page
 * a reviewer is most likely to test. When that button ships, this page
 * changes first and the request route stays as the fallback.
 *
 * The timelines here are promises. Do not lengthen them casually and do
 * not shorten them to look good -- somebody will hold us to them.
 *
 * Google Play's account-deletion policy points here too (Data safety →
 * Delete account URL), which is why the page names the Android app and
 * the developer, has a route for a team member's own login, and says
 * what happens on the phone and to AdMob's data (added 2026-10-10). The
 * in-app deletions it names are the ones the Android app actually has.
 */

const PAGE_PATH = "/data-deletion";
const PAGE_URL = `${site.url}${PAGE_PATH}`;

/** Days from a verified request to the data being gone. */
const DELETE_WITHIN_DAYS = 30;
/** Days until it is also out of the rolling backups. */
const BACKUPS_WITHIN_DAYS = 90;

export const metadata: Metadata = {
  title: "Delete your data",
  description: `How to have your ${site.name} account and all of its data deleted — what to send, what gets removed, and how long it takes.`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: `Delete your ${site.name} data`,
    description:
      "The exact steps to have your account, conversations and contacts deleted.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

const REMOVED = [
  "Your account, your workspace, and every team member in it.",
  "Every conversation, message and media file in the inbox.",
  "Call history.",
  "Every contact, note, tag and pipeline record.",
  "Quick replies and custom fields.",
  "Broadcasts, automations, flows and message templates you created here.",
  "AI Agent settings, including any stored AI provider keys and the knowledge base.",
  "API keys, MCP access and webhooks.",
  "Profile photos.",
  "The connection to your WhatsApp Business Account, and the tokens that let us send on your behalf.",
  "The notification tokens of every device signed in to the account.",
] as const;

export default function DataDeletionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        name: `Delete your ${site.name} data`,
        description:
          "How to request deletion of a hashChat account and all associated data.",
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
            name: "Delete your data",
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
          Delete your data
        </h1>

        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          Your conversations and contacts are yours. Here is how to have all of
          it removed from {site.name} — what to send, what goes, and how long it
          takes.
        </p>

        <p className="mt-4 leading-relaxed text-ink-muted">
          This page is for the {site.name} website, web app and Android app (on
          Google Play, published by {site.company}, operated by{" "}
          <span className="text-ink" dir="ltr">
            {legal.entity}
          </span>
          ).
        </p>

        <p className="mt-4 text-sm text-ink-faint">
          Last updated {legal.updated}
        </p>

        <div className="prose-invert mt-12 space-y-12">
          <section className="rounded-2xl border border-line bg-surface/60 p-7">
            <h2 className="font-display text-xl font-bold">
              The short version
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Email{" "}
              <a
                href={`mailto:${legal.contact}?subject=${encodeURIComponent("Delete my hashChat data")}`}
                className="text-brand-sky hover:underline"
                dir="ltr"
              >
                {legal.contact}
              </a>{" "}
              from the address on your account, with the words{" "}
              <strong className="text-ink">delete my account</strong> and the
              WhatsApp number connected to it. Everything is gone within{" "}
              {DELETE_WITHIN_DAYS} days and we confirm by email when it is done.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${legal.contact}?subject=${encodeURIComponent("Delete my hashChat data")}&body=${encodeURIComponent(
                  "Please delete my hashChat account and all of its data.\n\nAccount email:\nWorkspace name:\nWhatsApp Business number:\n",
                )}`}
                className="brand-gradient rounded-xl px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Email a deletion request
              </a>
              <a
                href={waLink(
                  "Assalam o alaikum — main apna hashChat account aur saara data delete karwana chahta hoon.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-line bg-surface-2 px-5 py-3 text-center text-sm font-semibold text-ink"
              >
                Ask on WhatsApp
              </a>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              What to put in the request
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              We check that a deletion request really comes from the account
              holder before we act on it — otherwise anybody could wipe somebody
              else&rsquo;s inbox. Send it from the email address on the account
              and include:
            </p>
            <ul className="mt-5 space-y-2 leading-relaxed text-ink-muted">
              <li>The email address you sign in with</li>
              <li>The workspace name</li>
              <li>The WhatsApp Business number connected to it</li>
            </ul>
            <p className="mt-5 leading-relaxed text-ink-muted">
              If you cannot write from that address, say so and we will find
              another way to confirm it is you.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              What gets deleted
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              All of it. Deletion is not a hidden flag on an account that stays
              in the database:
            </p>
            <ul className="mt-5 space-y-3 leading-relaxed text-ink-muted">
              {REMOVED.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="mt-5 leading-relaxed text-ink-muted">
              Live data is removed within {DELETE_WITHIN_DAYS} days of a
              confirmed request. Encrypted backups roll over on their own cycle,
              so a copy can survive there for up to {BACKUPS_WITHIN_DAYS} days;
              nothing is restored from them except to recover from a failure, and
              a deleted account is deleted again if it ever is.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Server logs (IP address, device and browser details, errors) are
              kept in a small rolling log that is overwritten automatically once
              it reaches its size limit, so entries are normally gone within
              days.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              <strong className="text-ink">On your phone.</strong> Signing out
              of the Android app deletes its cached chats and contacts, and
              uninstalling the app deletes everything it stored on the device.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Deleting only part of it
            </h2>
            {/* Phrased around the request first: that is the route we
                control, and this page is the one a reviewer tests. The
                in-app steps below are the ones the Android app has today
                (checked 2026-10-10) -- if a delete action moves or goes,
                that paragraph changes with it. */}
            <p className="mt-4 leading-relaxed text-ink-muted">
              You do not have to close the account to remove data. Ask us for a
              partial deletion instead — a single contact, one conversation, a
              date range, one number, one team member — and we handle it on the
              same terms and the same timeline as a full one.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              In the Android app: long-press a chat in the Inbox →{" "}
              <span className="text-ink">Delete chat</span> or{" "}
              <span className="text-ink">Delete contact</span>. In Contacts:
              select contacts → delete. These are removed immediately.
            </p>
            <p className="mt-4 leading-relaxed text-ink-muted">
              <strong className="text-ink">Only your own login.</strong> If you
              are a team member and not the workspace owner, email us from your
              login address asking to delete your user account. We remove your
              login, profile and device notification tokens. Messages you sent
              stay in the workspace, because they belong to the business, unless
              the owner asks us to remove them too.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              Disconnecting {site.name} from Meta
            </h2>
            <p className="mt-4 leading-relaxed text-ink-muted">
              Deleting your data here does not by itself revoke the permission
              you granted in Meta. To cut that link at Meta&rsquo;s end:
            </p>
            <ol className="mt-5 space-y-3 leading-relaxed text-ink-muted">
              <li>
                <strong className="text-ink">1.</strong> Open{" "}
                <a
                  href="https://business.facebook.com/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-sky hover:underline"
                >
                  Meta Business settings
                </a>{" "}
                for your business portfolio.
              </li>
              <li>
                <strong className="text-ink">2.</strong> Go to{" "}
                <span className="text-ink">Apps</span> — or{" "}
                <span className="text-ink">Business integrations</span>, which is
                where older portfolios keep it.
              </li>
              <li>
                <strong className="text-ink">3.</strong> Find {site.name} in the
                list and remove it.
              </li>
            </ol>
            <p className="mt-5 leading-relaxed text-ink-muted">
              Your WhatsApp Business Account, your number and your message
              history at Meta stay yours and are unaffected.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold">
              What we cannot delete
            </h2>
            <ul className="mt-4 space-y-3 leading-relaxed text-ink-muted">
              <li>
                <strong className="text-ink">
                  Meta&rsquo;s own copy of your messages.
                </strong>{" "}
                Everything sent over WhatsApp passes through Meta and is held
                under Meta&rsquo;s policies, not ours. Ask Meta for that.
              </li>
              <li>
                <strong className="text-ink">
                  Records we are required to keep.
                </strong>{" "}
                Invoices and payment records, kept for as long as Pakistani tax
                and company law requires (up to 10 years). These hold billing
                details, not your conversations or contacts.
              </li>
              <li>
                <strong className="text-ink">Advertising data.</strong> Ads in
                the Android app (on the Basic and Pro plans) come from Google
                AdMob, and Google holds that data under its own policy. You can
                reset or delete your advertising ID in{" "}
                <span className="text-ink">
                  Android Settings → Privacy → Ads
                </span>{" "}
                (or <span className="text-ink">Google → Ads</span>).
              </li>
              <li>
                <strong className="text-ink">
                  Data on someone else&rsquo;s account.
                </strong>{" "}
                If you messaged a business that uses {site.name}, that
                conversation sits in their workspace and they control it. Ask
                them — and if they do not respond, write to us and we will pass
                it on.
              </li>
            </ul>
          </section>

          <section className="rounded-2xl border border-line bg-surface/60 p-7">
            <h2 className="font-display text-xl font-bold">
              Still need help
            </h2>
            <p className="mt-3 leading-relaxed text-ink-muted">
              Write to{" "}
              <a
                href={`mailto:${legal.contact}`}
                className="text-brand-sky hover:underline"
                dir="ltr"
              >
                {legal.contact}
              </a>{" "}
              or message {site.whatsappDisplay} on WhatsApp. A person answers.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link href="/privacy" className="text-ink-muted hover:text-ink">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-ink-muted hover:text-ink">
                Terms of Service
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter locale="en" />
    </>
  );
}
