/**
 * Every claim the site makes, in one place.
 *
 * The numbers here are the live ones — plan prices and ceilings are what
 * the product's `plans` table actually holds, and the trial length is
 * what the signup trigger actually grants. Nothing here is aspirational;
 * if a value changes in the product it has to change here too.
 *
 * NB: don't name an export `process` — it shadows the Node global and
 * crashes the module at init with a TDZ error. (Learned on buraqtech.)
 */

export const site = {
  name: "hashChat",
  url: "https://hashchat.uk",
  // Every CTA on the site reads this one value.
  appUrl: "https://app.hashchat.uk",
  tagline: "WhatsApp CRM for teams",
  company: "Buraq Tech",
  companyUrl: "https://buraqtech.uk",
  // Every competitor ad in this market closes on a WhatsApp button with
  // a visible number, not a signup link — buyers here want to ask a
  // question before they create an account. Digits only for wa.me.
  whatsapp: "923119407860",
  whatsappDisplay: "+92 311 9407860",
  // The Android app the "Phone par bhi" feature and every plan's list
  // already promise. Until now the site claimed it and gave no way to
  // get it.
  //
  // Served from /public rather than a store link because it is not on
  // Play yet. That makes the version and size part of the claim: a
  // sideloaded APK never auto-updates, so a reader has to be able to
  // tell whether the one on their phone is the current one, and a
  // 5 MB download over mobile data deserves a warning before the tap.
  androidApk: "/hashChat.apk",
  androidApkVersion: "1.1",
  androidApkSize: "5.3 MB",
} as const;

/**
 * The named human behind the product.
 *
 * Until now every piece of structured data on this site credited an
 * organisation and nobody in particular. Search engines and answer
 * engines both weight who wrote something, not just which company
 * published it -- a page attributable to a person with a traceable
 * history is a stronger thing to cite than an anonymous brand.
 *
 * `url` points at the portfolio rather than this site, because that is
 * where the person exists independently of the product. `sameAs` is for
 * other profiles of the SAME entity, so the company site does not belong
 * in it -- that relationship is `worksFor` / `founder` instead.
 */
export const founder = {
  name: "Sikandar Abbas",
  jobTitle: "Founder & Full Stack Developer",
  url: "https://portfolio-five-black-18.vercel.app",
  sameAs: ["https://github.com/Sikandar-7"],
} as const;

/**
 * The operating company, letter for letter off the SECP documents.
 *
 * `entity` is the same string the footer prints and Meta's business
 * verification looks for -- it is never translated and never tidied.
 *
 * `address` is here because /privacy and /terms have to carry it: a
 * privacy policy without a postal address for the controller is not one,
 * and Meta's reviewer follows the URL to check the operator is real. It
 * is deliberately NOT in the sitewide footer -- see the note in
 * site-footer.tsx. It is a home address, so it appears on the two pages
 * that need it and nowhere else.
 *
 * `contact` is the mailbox that actually receives mail today, and it is
 * deliberately the SAME one the app's own /privacy, /terms and
 * /data-deletion print. Both admin@ and support@ are Porkbun forwards to
 * the same inbox, so either would arrive -- but a customer reading two of
 * our pages should not be given two addresses, and support@ is the one
 * the app has carried since July.
 *
 * Do not swap it for a prettier privacy@ or legal@ until that forward
 * actually exists: a dead contact address on a policy page is worse than
 * a plain one, and it is the address a reviewer may write to.
 *
 * `dataRegion` is where the servers actually are. Stated because a
 * policy has to say where the data lives, and guessed data residency is
 * how these pages start lying.
 */
export const legal = {
  entity: "LOVE & JOY (SMC-PRIVATE) LIMITED",
  cuin: "0324937",
  /** SECP, Companies Act 2017, limited by shares. */
  incorporated: "30 January 2026",
  address: {
    street: "h#22 st#06 BS winner gulshan bund road lahore",
    city: "Lahore",
    province: "Punjab",
    country: "Pakistan",
  },
  contact: "support@hashchat.uk",
  dataRegion: "Kuala Lumpur, Malaysia",
  /**
   * Meta's domain-verification token for hashchat.uk, issued 2026-09-03 in
   * Business settings → Brand safety and suitability → Domains.
   *
   * It proves to Meta that whoever controls the business portfolio also
   * controls this domain. Not cosmetic: it is a documented unblocker for
   * Access Verification (Tech Provider), which is the gate Embedded Signup
   * sits behind.
   *
   * Meta rejects the tag if it is outside <head> or injected by client-side
   * JavaScript, which is why it goes through Next's `metadata` (rendered
   * server-side into <head>) rather than any runtime script. It must be on
   * the home page; the root layout puts it on every page, which satisfies
   * that and costs nothing.
   *
   * Once verified, do NOT delete it — Meta re-checks, and removing the tag
   * un-verifies the domain.
   */
  metaDomainVerification: "b2am2s63ti62l1iuhxa7j5e5zvucfu",
  /** Bump when the wording of /privacy or /terms actually changes. */
  updated: "2026-09-13",
} as const;

/** One line, for the places that print the address inline. */
export const legalAddressLine = [
  legal.address.street,
  legal.address.city,
  legal.address.province,
  legal.address.country,
].join(", ");

/** Prefilled so the first message says something useful. */
export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

// ------------------------------------------------------------
// Features, steps, plans — the FACTS and the stable ids.
//
// The wording lives in `i18n.ts`, keyed by these same ids (`icon`, `n`,
// `slug`), so a price or a ceiling still has exactly one definition
// while the sentence around it exists in three languages. Translating
// the site cannot make a number true in one language and wrong in
// another, which is the usual way this goes bad.
// ------------------------------------------------------------

/** Order is the order they render in. `icon` keys both the lucide map
 *  and the copy. */
export const featureKeys = [
  "inbox",
  "contacts",
  "pipeline",
  "broadcast",
  "automation",
  "flow",
  "ai",
  "mobile",
] as const;

export const stepKeys = ["01", "02", "03"] as const;

// ------------------------------------------------------------
// Pricing — from the product's own `plans` table.
//
// Every ceiling here is enforced by the database, not merely displayed.
// Three statement triggers raise on the row that would cross the line:
// enforce_member_limit_on_insert on profiles, enforce_contact_limit_on_insert
// on contacts, and enforce_broadcast_msg_limit_on_insert on
// broadcast_recipients. That is exactly why they belong on a public page
// — a Basic customer sending their 251st broadcast message this month
// gets a hard error, and send time is the worst moment to learn that.
//
// NB: read prices off the live `plans` table, never from memory. This
// file said 2,000 for Basic from launch until Aug 2026; the product had
// always charged 1,500. On 2026-09-13 the owner set 2,000 / 3,500 /
// 6,500 with 2 / 4 / unlimited members and 250 / 2,000 / unlimited
// broadcast messages, and the plans table was changed to match (the
// product's migration 064) before this file was.
// ------------------------------------------------------------
export const plans = [
  {
    slug: "basic",
    name: "Basic",
    price: 2000,
    members: 2,
    contacts: 1000,
    broadcasts: 250,
    highlight: false,
  },
  {
    slug: "pro",
    name: "Pro",
    price: 3500,
    members: 4,
    contacts: 10000,
    broadcasts: 2000,
    highlight: true,
  },
  {
    slug: "business",
    name: "Business",
    price: 6500,
    members: null, // unlimited
    contacts: null, // unlimited
    broadcasts: null, // unlimited
    highlight: false,
  },
] as const;

/** The free trial, in hours since 2026-09-13 (the product's migration 063).
 *  It was 3 days here while the product had already cut it to 1. */
export const TRIAL_HOURS = 12;
export const CURRENCY = "PKR";

// ------------------------------------------------------------
// Coexistence — the WhatsApp Business app and hashChat on one number.
//
// Live on hashChat since 2026-09-13 and tested end to end. Only what
// has been seen working goes here; nothing about it reaches the site
// before that. The history window is Meta's. The button label is the
// app's own, quoted in English on every page because that is what the
// screen says.
// ------------------------------------------------------------
export const coexistence = {
  /** Past one-to-one chats Meta sends, once, at connect time. */
  historyDays: 180,
  /** The same window in the unit the landing page speaks in. */
  historyMonths: 6,
  /** Oldest WhatsApp Business app version Meta accepts for this. */
  minAppVersion: "2.24.17",
  /** Where the option lives in hashChat, and its exact label. */
  settingsPath: "Settings → WhatsApp",
  connectLabel: "Connect my WhatsApp Business app number",
} as const;

/** The landing page's three "keep your app" points, in render order.
 *  Keys the icons and the copy, like `featureKeys`. */
export const keepAppPointKeys = ["app", "history", "free"] as const;

// ------------------------------------------------------------
// Meta's messaging limits.
//
// Read off Meta's own developer docs, not off a competitor's blog —
// this is the number every provider in this market quotes wrong. The
// tier after verification is 2,000; the widely-copied "1,000" is the
// OLD ladder and this site was repeating it until 2026-08-31.
//
// The definition matters as much as the number: "the maximum number of
// unique WhatsApp user phone numbers your business can deliver messages
// to, outside of a customer service window, within a moving 24-hour
// period". It counts PEOPLE, not messages, and only the ones reached
// outside the 24-hour service window — replies to a customer never
// count against it.
//
// Meta revises these. Check the doc before quoting them anywhere new.
// ------------------------------------------------------------
export const metaLimits = {
  /** A new business portfolio starts here. */
  unverified: 250,
  /** Reached by verifying the business (or by 2,000 delivered
   *  high-quality template messages over a moving 30 days). */
  verified: 2000,
  /** Automatic from there, if quality holds and you use half your
   *  current limit in 7 days. */
  ladder: [10000, 100000] as const,
  /** Phone numbers a portfolio may register. */
  numbersUnverified: 2,
  numbersVerified: 20,
  /** Message templates per WhatsApp Business Account. */
  templatesUnverified: 250,
  templatesVerified: 6000,
  docsUrl:
    "https://developers.facebook.com/documentation/business-messaging/whatsapp/messaging-limits",
} as const;
