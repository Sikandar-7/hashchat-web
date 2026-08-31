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
// — a Basic customer sending their 2,001st broadcast message this month
// gets a hard error, and send time is the worst moment to learn that.
//
// NB: read prices off the live `plans` table, never from memory. This
// file said 2,000 for Basic from launch until Aug 2026; the product had
// always charged 1,500.
// ------------------------------------------------------------
export const plans = [
  {
    slug: "basic",
    name: "Basic",
    price: 1500,
    members: 3,
    contacts: 1000,
    broadcasts: 2000,
    highlight: false,
  },
  {
    slug: "pro",
    name: "Pro",
    price: 3500,
    members: 10,
    contacts: 10000,
    broadcasts: 10000,
    highlight: true,
  },
  {
    slug: "business",
    name: "Business",
    price: 7000,
    members: 25,
    contacts: null, // unlimited
    broadcasts: null, // unlimited
    highlight: false,
  },
] as const;

export const TRIAL_DAYS = 3;
export const CURRENCY = "PKR";
