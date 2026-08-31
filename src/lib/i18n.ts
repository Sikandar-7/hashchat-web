/**
 * Every word on the landing page, in three languages.
 *
 * The split with `content.ts` is deliberate and load-bearing: that file
 * owns the *facts* (prices, ceilings, trial length, URLs, the phone
 * number) and this one owns the *words*. A price still lives in exactly
 * one place, so translating the site cannot make it lie in one language
 * and tell the truth in another — which is the way multilingual
 * marketing sites usually go wrong.
 *
 * Three locales, and why these three:
 *
 *   roman — the default at `/`. Kept as the root URL because that is
 *           what is already indexed, and because it is how this market
 *           actually writes. Moving it to `/roman` to make the routing
 *           tidier would throw away the ranking the page has.
 *   en    — the language buyers type their searches in, and the one an
 *           overseas or enterprise reader expects.
 *   ur    — proper Urdu script, right-to-left. Not a transliteration of
 *           the Roman version: the register is different, so it is
 *           written rather than converted.
 *
 * Feature / step / plan wording is keyed by the same stable ids the
 * facts use (`icon`, `n`, `slug`), so a missing translation is a
 * TypeScript error rather than a blank card on a live page.
 */

import { TRIAL_DAYS, site } from "./content";

export type Locale = "roman" | "en" | "ur";

export const DEFAULT_LOCALE: Locale = "roman";

export interface LocaleMeta {
  code: Locale;
  /** Shown in the switcher, in the language it selects. */
  label: string;
  /** Two-or-three letter chip for the narrow mobile switcher. */
  short: string;
  /** Path this locale lives at. The default keeps the root. */
  href: string;
  dir: "ltr" | "rtl";
  /** BCP-47. `ur-Latn-PK` is the registered way to say Urdu in Latin
   *  script — not a tag anyone invented for this site. */
  htmlLang: string;
  ogLocale: string;
}

export const LOCALES: readonly LocaleMeta[] = [
  {
    code: "roman",
    label: "Roman Urdu",
    short: "RU",
    href: "/",
    dir: "ltr",
    htmlLang: "ur-Latn-PK",
    ogLocale: "en_PK",
  },
  {
    code: "en",
    label: "English",
    short: "EN",
    href: "/en",
    dir: "ltr",
    htmlLang: "en",
    ogLocale: "en_PK",
  },
  {
    code: "ur",
    label: "اردو",
    short: "اردو",
    href: "/ur",
    dir: "rtl",
    htmlLang: "ur-PK",
    ogLocale: "ur_PK",
  },
] as const;

export const localeMeta = (code: Locale): LocaleMeta =>
  LOCALES.find((l) => l.code === code) ?? LOCALES[0];

// ------------------------------------------------------------
// Shape
// ------------------------------------------------------------

type FeatureKey =
  | "inbox"
  | "contacts"
  | "pipeline"
  | "broadcast"
  | "automation"
  | "flow"
  | "ai"
  | "mobile";

type StepKey = "01" | "02" | "03";
type PlanKey = "basic" | "pro" | "business";

interface Copy {
  meta: { title: string; description: string };
  nav: {
    features: string;
    how: string;
    pricing: string;
    verify: string;
    faq: string;
    signIn: string;
    trial: string;
    language: string;
  };
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    lead: string;
    ctaPrimary: string;
    ctaWhatsapp: string;
    whatsappMessage: string;
    footnote: string;
  };
  ban: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    p1: string;
    p2: string;
    cardTitle: string;
    cardBodyBefore: string;
    cardBodyStrong: string;
    cardBodyAfter: string;
    disclaimer: string;
    cta: string;
    ctaMessage: string;
    badLabel: string;
    bad: readonly string[];
    goodLabel: string;
    good: readonly string[];
  };
  verify: {
    eyebrow: string;
    title: string;
    lead: string;
    /** The two things people conflate. */
    aTitle: string;
    aBody: string;
    aTag: string;
    bTitle: string;
    bBody: string;
    bTag: string;
    routesTitle: string;
    routes: readonly string[];
    honest: string;
    guideLink: string;
    cta: string;
    ctaMessage: string;
  };
  features: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Record<FeatureKey, { title: string; body: string }>;
  };
  how: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Record<StepKey, { title: string; body: string }>;
  };
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    popular: string;
    perMonth: string;
    members: string;
    contacts: string;
    broadcasts: string;
    unlimited: string;
    cta: string;
    plans: Record<PlanKey, { tagline: string; includes: readonly string[] }>;
    metaTitle: string;
    metaBodyBefore: string;
    metaBodyOwn: string;
    metaBodyAfter: string;
    rateMarketing: string;
    rateUtility: string;
    rateReply: string;
    rateFree: string;
    rateNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly { q: string; a: string }[];
  };
  cta: { title: string; lead: string; primary: string; secondary: string };
  footer: {
    blurb: string;
    features: string;
    pricing: string;
    faq: string;
    android: string;
    signIn: string;
    productOfBefore: string;
    productOfAfter: string;
    legalBefore: string;
    legalAfter: string;
  };
}

// ------------------------------------------------------------
// Roman Urdu — the original copy, unchanged.
// ------------------------------------------------------------

const roman: Copy = {
  meta: {
    title: "hashChat — WhatsApp CRM for teams",
    description:
      "Ek shared WhatsApp inbox jise poori team chala sake. Contacts, sales pipelines, broadcasts aur automations — sab ek jagah.",
  },
  nav: {
    features: "Features",
    how: "Kaise chalta hai",
    pricing: "Pricing",
    verify: "Verification",
    faq: "FAQ",
    signIn: "Sign in",
    trial: "Free trial",
    language: "Zubaan",
  },
  hero: {
    badge: `${TRIAL_DAYS} din free — card ki zaroorat nahi`,
    titleLead: "Poori team ka",
    titleAccent: "ek WhatsApp inbox",
    lead: "Customers ke messages ab ek banday ke phone mein nahi atkte. Contacts, sales pipeline, broadcasts aur automations — sab ek jagah, poori team ke liye.",
    ctaPrimary: "Free trial shuru karein",
    ctaWhatsapp: "WhatsApp par baat karein",
    whatsappMessage:
      "Assalam o alaikum — hashChat ke bare mein maloomat chahiye.",
    footnote: "Aapka apna WhatsApp number · Lahore se banaya gaya ·",
  },
  ban: {
    eyebrow: "Sab se aam masla",
    titleLead: "Ads chalate hi",
    titleAccent: "number ban ho jata hai?",
    p1: "Aap Facebook ya Instagram par ad chalate hain, messages ka sailab aata hai — aur normal WhatsApp Business app usay spam samajh kar aapka number block kar deti hai. Jo number par poora business chal raha tha, woh ek din mein band.",
    p2: "Wajah yeh hai ke woh app ek banday ki personal baat-cheet ke liye bani hai, sainkron customers ke liye nahi.",
    cardTitle: "hashChat official WhatsApp Business API par chalta hai",
    cardBodyBefore:
      "Yeh wohi raasta hai jo Meta ne bulk aur ads ke traffic ke liye khud banaya hai. Yani aap Meta ke qawaid ke ",
    cardBodyStrong: "andar",
    cardBodyAfter: " hote hain, un ke khilaf nahi.",
    disclaimer:
      "Hum yeh nahi kahenge ke “aapka number kabhi ban nahi hoga” — koi bhi yeh waada sach mein nahi kar sakta, aur jo kare us par shak karein. Qawaid Meta ke hain. Farq yeh hai ke aap qanooni channel par hain, jahan yeh traffic mana hi nahi.",
    cta: "Is bare mein baat karein",
    ctaMessage:
      "Assalam o alaikum — mera WhatsApp number ads ki wajah se ban hota hai. hashChat ke bare mein maloomat chahiye.",
    badLabel: "Normal WhatsApp Business app",
    bad: [
      "Ek phone, ek banda — team ka koi tasawwur nahi",
      "Bulk bhejne par spam ka flag",
      "Ads ka traffic sambhalne ke liye nahi bani",
      "Ban ho jaye to koi appeal ka raasta nahi",
    ],
    goodLabel: `Official API + ${site.name}`,
    good: [
      "Poori team ek number par, alag alag logins se",
      "Bulk bhejna Meta ke approved templates se",
      "Ads ka traffic isi ke liye bana hai",
      "Business verification aur official status",
    ],
  },
  verify: {
    eyebrow: "Verification",
    title: "Green tick ka sach",
    lead: "Yeh sawaal roz aata hai, aur is ka jawab market mein aksar ghalat diya jata hai. Do bilkul alag cheezein hain jo log ek samajh lete hain.",
    aTitle: "Business Verification",
    aBody:
      "Meta Business Manager mein aapki company ki tasdeeq — SECP documents, business ka naam, address. Yeh aap ke apne haath mein hai, aur yehi cheez API par display name aur zyada messaging limits kholti hai. hashChat ka setup isi qadam se guzarta hai, aur hum poora saath dete hain.",
    aTag: "Aap kar sakte hain",
    bTitle: "Badge (tick) — jise log “green tick” kehte hain",
    bBody:
      "Yeh alag cheez hai. Meta apni marzi se deta hai, aur 2024 se yeh green nahi — neela hai (Meta ne apni saari apps mein badge ka rang ek kar diya). API chalane ke liye is ki zaroorat bilkul nahi: inbox, broadcasts, automations, sab is ke baghair chalte hain.",
    bTag: "Meta ke haath mein",
    routesTitle: "Badge ke sirf do raaste hain",
    routes: [
      "Notability — asli news coverage jo aapke business ke bare mein ho. Paid ya sponsored articles nahi ginte.",
      "Meta Verified — paid subscription jis mein notability nahi chahiye, magar yeh har mulk mein available nahi. Apne Business Manager mein khud dekhein ke aap ko offer ho raha hai ya nahi.",
    ],
    honest:
      "Koi bhi provider — hum bhi nahi — badge ka waada nahi kar sakta, kyunki koi provider us faisle mein shamil hi nahi hota. Jo “green tick guaranteed” beche, woh ya to process nahi jaanta ya samajhta hai ke aap nahi jaante.",
    guideLink: "Poori tafseel parhein — green tick guide",
    cta: "Verification ke bare mein poochein",
    ctaMessage:
      "Assalam o alaikum — WhatsApp business verification aur green tick ke bare mein poochna tha.",
  },
  features: {
    eyebrow: "Features",
    title: "Sab kuch ek jagah",
    lead: "Har cheez jo ek WhatsApp par chalne wale business ko chahiye — bina teen alag tools ke.",
    items: {
      inbox: {
        title: "Shared team inbox",
        body: "Ek WhatsApp number, poori team. Har message kis ke paas gaya, kis ne parha, kis ne jawab diya — sab nazar mein.",
      },
      contacts: {
        title: "Contacts jo aapke hisaab se hon",
        body: "Custom fields aur tags apni marzi ke banayein. CSV se import karein. Har contact ki poori baat-cheet ek jagah.",
      },
      pipeline: {
        title: "Sales pipeline",
        body: "Har lead ko stage ke hisaab se aage barhayein — New Lead se Won tak. Drag karein, deal ki value dekhein.",
      },
      broadcast: {
        title: "Broadcasts",
        body: "Approved WhatsApp templates se sainkron logon ko ek saath bhejein. Kis tak pohancha, kis ne parha, kis ne jawab diya — sab track hota hai.",
      },
      automation: {
        title: "Automations",
        body: "Keyword par khud jawab. Koi 'pricing' likhe to rate list chali jaye, 'demo' likhe to demo ka silsila shuru ho — aap so rahe hon tab bhi.",
      },
      flow: {
        title: "No-code flows",
        body: "Sawaal-jawab ka poora silsila bina code ke banayein. Customer se maloomat lein, buttons dikhayein, phir team ko handover.",
      },
      ai: {
        title: "AI jawab — customer ki apni zubaan mein",
        body: "AI aapke apne knowledge base se jawab deta hai, aur usi zubaan mein jis mein customer ne likha — Roman Urdu, Urdu ya English. Baat aage barhe to khud team ko handover kar deta hai.",
      },
      mobile: {
        title: "Phone par bhi",
        body: "Android app — notifications ke saath. Dukan par hon ya bahar, koi message miss nahi hota.",
      },
    },
  },
  how: {
    eyebrow: "Kaise chalta hai",
    title: "Teen qadam, aur aap chal parre",
    lead: "Koi installation nahi, koi developer nahi. Dus minute mein setup.",
    items: {
      "01": {
        title: "Account banayein",
        body: `Email se sign up karein. ${TRIAL_DAYS} din free — card ki zaroorat nahi.`,
      },
      "02": {
        title: "WhatsApp jorein",
        body: "Apna WhatsApp Business number connect karein. Aapka number, aapka account — hum beech mein nahi aate.",
      },
      "03": {
        title: "Team ko bulayein",
        body: "Members ko invite karein, unke roles tay karein, aur kaam shuru.",
      },
    },
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Saaf pricing, koi chhupi hui baat nahi",
    lead: `Har plan ${TRIAL_DAYS} din free se shuru hota hai. Card ki zaroorat nahi — pasand na aaye to bas chhor dein.`,
    popular: "Sab se zyada liya jata hai",
    perMonth: "/month",
    members: "Team members",
    contacts: "Contacts",
    broadcasts: "Broadcast messages / month",
    unlimited: "Unlimited",
    cta: `${TRIAL_DAYS} din free try karein`,
    plans: {
      basic: {
        tagline: "Chhote setups ke liye",
        includes: [
          "Shared inbox",
          "Contacts + tags + custom fields",
          "Sales pipelines",
          "Broadcasts",
          "Android app",
        ],
      },
      pro: {
        tagline: "Barhti hui teams ke liye",
        includes: [
          "Basic ka sab kuch",
          "Automations (keyword auto-reply)",
          "No-code flows",
          "AI jawab",
          "Public API",
        ],
      },
      business: {
        tagline: "Bari teams ke liye",
        includes: [
          "Pro ka sab kuch",
          "Unlimited contacts aur broadcasts",
          "Priority support",
        ],
      },
    },
    metaTitle: "Meta ke charges alag hain — aur woh seedha aap ke paas jate hain",
    metaBodyBefore: "hashChat aapke ",
    metaBodyOwn: "apne",
    metaBodyAfter:
      " WhatsApp Business account se connect hota hai. Meta ka bill seedha aap ko jata hai — hamare paas se ho kar nahi. Yani hum us par kuch jor hi nahi sakte. Bohot se providers Meta se khareed kar aage bechte hain aur 12-20% markup lagate hain; isi liye unhein “0% markup” ka daawa karna parta hai. Hum us silsile mein hain hi nahi.",
    rateMarketing: "Marketing (broadcast, offer)",
    rateUtility: "Utility (order, reminder)",
    rateReply: "Customer ka jawab (24h)",
    rateFree: "Free",
    rateNote:
      "Yeh Meta ke rates hain aur woh inhein waqtan fauqtan badalta rehta hai. Automations, flows aur team ke jawab — sab 24-ghante wale free hisse mein aate hain.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Jo sawaal sab se pehle aate hain",
    items: [
      {
        q: "Kya mujhe apna WhatsApp number dena parega?",
        a: "Aapka number aapke apne WhatsApp Business account se juda rehta hai. hashChat us se connect hota hai — number kabhi hamare paas transfer nahi hota, aur aap jab chahein connection hata sakte hain.",
      },
      {
        q: "Mera WhatsApp number ban ho jata hai — kya yeh us ka hal hai?",
        a: "Zyada tar aisa tab hota hai jab aap Facebook/Instagram ads chalate hain aur achanak messages ka sailab aata hai — normal WhatsApp Business app usay spam samajh kar number block kar deti hai. hashChat official WhatsApp Business API par chalta hai, jo bulk aur ads ka traffic sambhalne ke liye hi bana hai — yani aap Meta ke apne raaste par hote hain, us ke khilaf nahi. Yeh koi 'anti-ban trick' nahi hai (aur jo koi aisa daawa kare us par shak karein) — farq sirf yeh hai ke aap qanooni channel par ho aur Meta ke qawaid ke andar rehte ho.",
      },
      {
        q: "Kya mujhe green tick mil jayega?",
        a: "Badge Meta apni marzi se deta hai — koi provider, reseller ya agency us faisle mein shamil nahi hoti, is liye koi bhi (hum bhi nahi) is ka waada nahi kar sakta. Do raaste hain: notability (aapke business par asli news coverage; paid ya sponsored articles nahi ginte) aur Meta Verified (paid subscription, notability ke baghair, magar har mulk mein available nahi). Do baatein aur: badge 2024 se green nahi, neela hai; aur API chalane ke liye is ki zaroorat bilkul nahi. Jis cheez par aap ka apna ikhtiyar hai woh Business Verification aur approved display name hai — aur usi mein hum aap ke saath hote hain.",
      },
      {
        q: "Kya aap Meta ke message charges par apna markup lagate hain?",
        a: "Nahi — aur na hi laga sakte hain. hashChat aapke apne WhatsApp Business account se connect hota hai, to Meta ka bill seedha aap ke paas jata hai, hamare paas se ho kar nahi. Bohot se providers Meta se khareed kar aage bechte hain aur us par 12-20% markup lagate hain, isi liye unhein '0% markup' ka daawa karna parta hai. Hum us silsile mein hain hi nahi. Aap se sirf hashChat ki subscription li jati hai.",
      },
      {
        q: "Kya yeh WhatsApp Business app ki jagah lega?",
        a: "Yeh WhatsApp Business API par chalta hai, jo aapke number ko poori team ke liye khol deta hai. Ek hi number par kai log ek saath kaam kar sakte hain — jo normal WhatsApp app mein mumkin nahi.",
      },
      {
        q: "Message bhejne ka koi alag kharcha hai?",
        a: "Haan, aur woh Meta leta hai — hum nahi. Meta har message par charge karta hai aur rate is par hai ke message kis qism ka hai. Pakistan mein takreeban: marketing (broadcast, offers) ~Rs 13 per message; utility (order update, reminder) ~Rs 2.8 per message. Sab se ahem: customer ke apne message ka jawab agar 24 ghante ke andar diya jaye to woh bilkul FREE hai — automations, auto-replies aur team ke jawab sab isi mein aate hain. Yeh rates Meta khud waqtan fauqtan badalta rehta hai.",
      },
      {
        q: "Free trial mein kya milta hai?",
        a: `${TRIAL_DAYS} din, poora product, bina card ke. Trial khatam hone par aap plan chun sakte hain — aapka data waise ka waisa rehta hai.`,
      },
      {
        q: "Payment kaise karni hoti hai?",
        a: "Bank transfer, JazzCash ya Easypaisa. Payment ki screenshot upload kar dein, hum verify kar ke plan chalu kar dete hain.",
      },
      {
        q: "Data kahan rehta hai, aur kya mera hai?",
        a: "Aapka data aapka hai. Har account alag rehta hai — koi doosra account aapke contacts ya conversations nahi dekh sakta. Chahein to contacts kabhi bhi export kar sakte hain.",
      },
    ],
  },
  cta: {
    title: "Aaj hi shuru karein",
    lead: `${TRIAL_DAYS} din free. Card ki zaroorat nahi. Setup dus minute ka hai.`,
    primary: "Free trial shuru karein",
    secondary: "Pricing dekhein",
  },
  footer: {
    blurb: `${site.tagline}. Lahore, Pakistan se banaya gaya.`,
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    android: "Android app",
    signIn: "Sign in",
    productOfBefore: "Ek product ",
    productOfAfter: " ka",
    legalBefore: `${site.name} ko `,
    legalAfter: " chalati hai — Pakistan mein registered company, CUIN 0324937.",
  },
};

// ------------------------------------------------------------
// English
// ------------------------------------------------------------

const en: Copy = {
  meta: {
    title: "hashChat — WhatsApp CRM for teams",
    description:
      "One shared WhatsApp inbox your whole team can run. Contacts, sales pipelines, broadcasts and automations — in one place.",
  },
  nav: {
    features: "Features",
    how: "How it works",
    pricing: "Pricing",
    verify: "Verification",
    faq: "FAQ",
    signIn: "Sign in",
    trial: "Free trial",
    language: "Language",
  },
  hero: {
    badge: `${TRIAL_DAYS} days free — no card needed`,
    titleLead: "One WhatsApp inbox for",
    titleAccent: "your whole team",
    lead: "Customer messages stop getting stuck on one person's phone. Contacts, sales pipeline, broadcasts and automations — in one place, for everyone.",
    ctaPrimary: "Start free trial",
    ctaWhatsapp: "Talk to us on WhatsApp",
    whatsappMessage: "Hello — I'd like to know more about hashChat.",
    footnote: "Your own WhatsApp number · Built in Lahore ·",
  },
  ban: {
    eyebrow: "The most common problem",
    titleLead: "Number gets banned",
    titleAccent: "the moment you run ads?",
    p1: "You run a Facebook or Instagram ad, the replies flood in — and the ordinary WhatsApp Business app reads that as spam and blocks your number. The number your whole business ran on is gone in a day.",
    p2: "The reason is simple: that app was built for one person's private conversations, not for hundreds of customers.",
    cardTitle: "hashChat runs on the official WhatsApp Business API",
    cardBodyBefore:
      "That is the channel Meta built for bulk and ad traffic in the first place. It means you are ",
    cardBodyStrong: "inside",
    cardBodyAfter: " Meta's rules rather than working against them.",
    disclaimer:
      "We will not tell you “your number will never be banned” — nobody can honestly promise that, and you should distrust anyone who does. The rules are Meta's. What changes is that you are on the legitimate channel, where this traffic is expected.",
    cta: "Talk to us about this",
    ctaMessage:
      "Hello — my WhatsApp number keeps getting banned when I run ads. I'd like to know more about hashChat.",
    badLabel: "Ordinary WhatsApp Business app",
    bad: [
      "One phone, one person — no concept of a team",
      "Bulk sending gets flagged as spam",
      "Not built to handle ad traffic",
      "If it's banned, there is no real appeal",
    ],
    goodLabel: `Official API + ${site.name}`,
    good: [
      "The whole team on one number, each with their own login",
      "Bulk sending through Meta-approved templates",
      "Ad traffic is exactly what it was built for",
      "Business verification and official status",
    ],
  },
  verify: {
    eyebrow: "Verification",
    title: "The truth about the green tick",
    lead: "We get asked this every week, and the answer sold in this market is usually wrong. Two completely different things get treated as one.",
    aTitle: "Business Verification",
    aBody:
      "Meta Business Manager confirming your company — registration documents, business name, address. This one is within your control, and it is what unlocks your display name on the API and higher messaging limits. Every hashChat setup goes through it, and we walk you through it.",
    aTag: "You can do this",
    bTitle: "The badge — what people call the “green tick”",
    bBody:
      "A separate thing entirely. Meta grants it at its own discretion, and since 2024 it is not green but blue (Meta unified badge colours across its apps). You do not need it to use the API at all: the inbox, broadcasts and automations all work without it.",
    bTag: "Meta's decision",
    routesTitle: "There are only two routes to the badge",
    routes: [
      "Notability — genuine news coverage about your business. Paid or sponsored placements do not count.",
      "Meta Verified — a paid subscription that skips the notability test, but is not switched on in every country. Check your own Business Manager to see whether it is offered to you.",
    ],
    honest:
      "No provider — us included — can promise you the badge, because no provider is part of that decision. Anyone selling a “guaranteed green tick” either misunderstands the process or is counting on you not knowing it.",
    guideLink: "Read the full guide on the green tick",
    cta: "Ask us about verification",
    ctaMessage:
      "Hello — I have a question about WhatsApp business verification and the green tick.",
  },
  features: {
    eyebrow: "Features",
    title: "Everything in one place",
    lead: "Everything a business running on WhatsApp needs — without stitching three separate tools together.",
    items: {
      inbox: {
        title: "Shared team inbox",
        body: "One WhatsApp number, the whole team. Who a message went to, who read it, who replied — all visible.",
      },
      contacts: {
        title: "Contacts on your terms",
        body: "Custom fields and tags you define. Import from CSV. Every conversation with a contact in one place.",
      },
      pipeline: {
        title: "Sales pipeline",
        body: "Move each lead through stages — New Lead to Won. Drag cards, see deal values.",
      },
      broadcast: {
        title: "Broadcasts",
        body: "Send to hundreds at once using approved WhatsApp templates. Delivered, read, replied — all tracked.",
      },
      automation: {
        title: "Automations",
        body: "Auto-reply on keywords. Someone types 'pricing' and the rate list goes out; 'demo' starts the demo sequence — even while you sleep.",
      },
      flow: {
        title: "No-code flows",
        body: "Build a whole question-and-answer sequence without code. Collect details, show buttons, then hand over to the team.",
      },
      ai: {
        title: "AI replies — in the customer's own language",
        body: "The AI answers from your own knowledge base, in whichever language the customer wrote in — Roman Urdu, Urdu or English. When it gets beyond that, it hands over to a human.",
      },
      mobile: {
        title: "On your phone too",
        body: "An Android app with notifications. At the shop or out of it, nothing gets missed.",
      },
    },
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps and you're running",
    lead: "No installation, no developer. Set up in ten minutes.",
    items: {
      "01": {
        title: "Create an account",
        body: `Sign up with your email. ${TRIAL_DAYS} days free — no card needed.`,
      },
      "02": {
        title: "Connect WhatsApp",
        body: "Connect your own WhatsApp Business number. Your number, your account — we never sit in the middle.",
      },
      "03": {
        title: "Invite your team",
        body: "Add members, set their roles, and start working.",
      },
    },
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Plain pricing, nothing hidden",
    lead: `Every plan starts with ${TRIAL_DAYS} days free. No card needed — if it isn't for you, just walk away.`,
    popular: "Most popular",
    perMonth: "/month",
    members: "Team members",
    contacts: "Contacts",
    broadcasts: "Broadcast messages / month",
    unlimited: "Unlimited",
    cta: `Try ${TRIAL_DAYS} days free`,
    plans: {
      basic: {
        tagline: "For small setups",
        includes: [
          "Shared inbox",
          "Contacts + tags + custom fields",
          "Sales pipelines",
          "Broadcasts",
          "Android app",
        ],
      },
      pro: {
        tagline: "For growing teams",
        includes: [
          "Everything in Basic",
          "Automations (keyword auto-reply)",
          "No-code flows",
          "AI replies",
          "Public API",
        ],
      },
      business: {
        tagline: "For larger teams",
        includes: [
          "Everything in Pro",
          "Unlimited contacts and broadcasts",
          "Priority support",
        ],
      },
    },
    metaTitle: "Meta's charges are separate — and they go straight to you",
    metaBodyBefore: "hashChat connects to your ",
    metaBodyOwn: "own",
    metaBodyAfter:
      " WhatsApp Business account. Meta bills you directly — not through us. Which means we could not add anything on top even if we wanted to. Plenty of providers buy from Meta and resell with a 12-20% markup; that is exactly why they all have to advertise “0% markup”. We are not in that chain at all.",
    rateMarketing: "Marketing (broadcast, offer)",
    rateUtility: "Utility (order, reminder)",
    rateReply: "Reply to a customer (24h)",
    rateFree: "Free",
    rateNote:
      "These are Meta's rates and Meta changes them from time to time. Automations, flows and your team's replies all fall inside the free 24-hour window.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "The questions people ask first",
    items: [
      {
        q: "Do I have to hand over my WhatsApp number?",
        a: "Your number stays attached to your own WhatsApp Business account. hashChat connects to it — the number is never transferred to us, and you can disconnect whenever you want.",
      },
      {
        q: "My WhatsApp number keeps getting banned — does this fix that?",
        a: "It usually happens when you run Facebook/Instagram ads and a flood of messages arrives at once — the ordinary WhatsApp Business app reads that as spam and blocks the number. hashChat runs on the official WhatsApp Business API, which was built for bulk and ad traffic, so you are on Meta's own channel rather than working against it. This is not an 'anti-ban trick' (and you should distrust anyone selling one) — the difference is simply that you are on the legitimate channel and inside Meta's rules.",
      },
      {
        q: "Will I get the green tick?",
        a: "The badge is granted by Meta at its own discretion — no provider, reseller or agency is part of that decision, so nobody (us included) can promise it. There are two routes: notability (genuine news coverage about your business; paid or sponsored articles do not count) and Meta Verified (a paid subscription that skips notability, but is not available in every country). Two more things worth knowing: the badge has not been green since 2024, it is blue; and you do not need it to use the API. What you can actually control is Business Verification and an approved display name — and that is the part we help with.",
      },
      {
        q: "Do you add a markup to Meta's message charges?",
        a: "No — and we could not. hashChat connects to your own WhatsApp Business account, so Meta bills you directly rather than through us. Many providers buy from Meta and resell with a 12-20% markup, which is why they have to advertise '0% markup'. We are not in that chain at all. You only pay us the hashChat subscription.",
      },
      {
        q: "Does this replace the WhatsApp Business app?",
        a: "It runs on the WhatsApp Business API, which opens your number up to the whole team. Several people can work on one number at the same time — something the ordinary app cannot do.",
      },
      {
        q: "Is there a separate cost to send messages?",
        a: "Yes, and Meta charges it — not us. Meta charges per message and the rate depends on the message type. In Pakistan, roughly: marketing (broadcasts, offers) ~Rs 13 per message; utility (order updates, reminders) ~Rs 2.8 per message. The important part: replying to a customer's own message within 24 hours is completely FREE — automations, auto-replies and your team's answers all fall inside that. Meta revises these rates from time to time.",
      },
      {
        q: "What do I get in the free trial?",
        a: `${TRIAL_DAYS} days, the whole product, no card. When the trial ends you pick a plan — your data stays exactly as it is.`,
      },
      {
        q: "How do I pay?",
        a: "Bank transfer, JazzCash or Easypaisa. Upload the payment screenshot and we verify it and switch your plan on.",
      },
      {
        q: "Where does my data live, and is it mine?",
        a: "Your data is yours. Every account is isolated — no other account can see your contacts or conversations. You can export your contacts at any time.",
      },
    ],
  },
  cta: {
    title: "Start today",
    lead: `${TRIAL_DAYS} days free. No card needed. Setup takes ten minutes.`,
    primary: "Start free trial",
    secondary: "See pricing",
  },
  footer: {
    blurb: `${site.tagline}. Built in Lahore, Pakistan.`,
    features: "Features",
    pricing: "Pricing",
    faq: "FAQ",
    android: "Android app",
    signIn: "Sign in",
    productOfBefore: "A product of ",
    productOfAfter: "",
    legalBefore: `${site.name} is operated by `,
    legalAfter: " — a company registered in Pakistan, CUIN 0324937.",
  },
};

// ------------------------------------------------------------
// Urdu
// ------------------------------------------------------------

const ur: Copy = {
  meta: {
    title: "hashChat — ٹیموں کے لیے واٹس ایپ CRM",
    description:
      "ایک مشترکہ واٹس ایپ اِن باکس جسے پوری ٹیم چلا سکے۔ رابطے، سیلز پائپ لائن، براڈکاسٹ اور آٹومیشن — سب ایک جگہ۔",
  },
  nav: {
    features: "خصوصیات",
    how: "کیسے چلتا ہے",
    pricing: "قیمت",
    verify: "تصدیق",
    faq: "سوالات",
    signIn: "سائن اِن",
    trial: "مفت ٹرائل",
    language: "زبان",
  },
  hero: {
    badge: `${TRIAL_DAYS} دن مفت — کارڈ کی ضرورت نہیں`,
    titleLead: "پوری ٹیم کا",
    titleAccent: "ایک واٹس ایپ اِن باکس",
    lead: "کسٹمرز کے پیغامات اب کسی ایک شخص کے فون میں نہیں رکتے۔ رابطے، سیلز پائپ لائن، براڈکاسٹ اور آٹومیشن — سب ایک جگہ، پوری ٹیم کے لیے۔",
    ctaPrimary: "مفت ٹرائل شروع کریں",
    ctaWhatsapp: "واٹس ایپ پر بات کریں",
    whatsappMessage: "السلام علیکم — hashChat کے بارے میں معلومات چاہیے۔",
    footnote: "آپ کا اپنا واٹس ایپ نمبر · لاہور میں بنایا گیا ·",
  },
  ban: {
    eyebrow: "سب سے عام مسئلہ",
    titleLead: "ایڈ چلاتے ہی",
    titleAccent: "نمبر بند ہو جاتا ہے؟",
    p1: "آپ فیس بک یا انسٹاگرام پر ایڈ چلاتے ہیں، پیغامات کا سیلاب آتا ہے — اور عام واٹس ایپ بزنس ایپ اسے سپیم سمجھ کر آپ کا نمبر بلاک کر دیتی ہے۔ جس نمبر پر پورا کاروبار چل رہا تھا، وہ ایک دن میں بند۔",
    p2: "وجہ یہ ہے کہ وہ ایپ ایک شخص کی ذاتی گفتگو کے لیے بنی ہے، سینکڑوں کسٹمرز کے لیے نہیں۔",
    cardTitle: "hashChat آفیشل واٹس ایپ بزنس API پر چلتا ہے",
    cardBodyBefore:
      "یہ وہی راستہ ہے جو میٹا نے بلک اور ایڈ کے ٹریفک کے لیے خود بنایا ہے۔ یعنی آپ میٹا کے قواعد کے ",
    cardBodyStrong: "اندر",
    cardBodyAfter: " ہوتے ہیں، اُن کے خلاف نہیں۔",
    disclaimer:
      "ہم یہ نہیں کہیں گے کہ ”آپ کا نمبر کبھی بند نہیں ہوگا“ — کوئی بھی یہ وعدہ سچ میں نہیں کر سکتا، اور جو کرے اُس پر شک کریں۔ قواعد میٹا کے ہیں۔ فرق یہ ہے کہ آپ قانونی چینل پر ہیں، جہاں یہ ٹریفک منع ہی نہیں۔",
    cta: "اِس بارے میں بات کریں",
    ctaMessage:
      "السلام علیکم — میرا واٹس ایپ نمبر ایڈز کی وجہ سے بند ہو جاتا ہے۔ hashChat کے بارے میں معلومات چاہیے۔",
    badLabel: "عام واٹس ایپ بزنس ایپ",
    bad: [
      "ایک فون، ایک شخص — ٹیم کا کوئی تصور نہیں",
      "بلک بھیجنے پر سپیم کا فلیگ",
      "ایڈ کا ٹریفک سنبھالنے کے لیے نہیں بنی",
      "بند ہو جائے تو اپیل کا کوئی راستہ نہیں",
    ],
    goodLabel: `آفیشل API + ${site.name}`,
    good: [
      "پوری ٹیم ایک نمبر پر، الگ الگ لاگ اِن سے",
      "بلک بھیجنا میٹا کے منظور شدہ ٹیمپلیٹس سے",
      "ایڈ کا ٹریفک اسی کے لیے بنا ہے",
      "بزنس ویریفکیشن اور آفیشل حیثیت",
    ],
  },
  verify: {
    eyebrow: "تصدیق",
    title: "گرین ٹک کا سچ",
    lead: "یہ سوال ہر ہفتے آتا ہے، اور مارکیٹ میں اس کا جواب اکثر غلط دیا جاتا ہے۔ دو بالکل الگ چیزیں ہیں جنہیں لوگ ایک سمجھ لیتے ہیں۔",
    aTitle: "بزنس ویریفکیشن",
    aBody:
      "میٹا بزنس مینیجر میں آپ کی کمپنی کی تصدیق — رجسٹریشن دستاویزات، کاروبار کا نام، پتہ۔ یہ آپ کے اپنے اختیار میں ہے، اور یہی چیز API پر ڈسپلے نیم اور زیادہ میسجنگ لِمٹ کھولتی ہے۔ hashChat کا ہر سیٹ اپ اسی مرحلے سے گزرتا ہے، اور ہم پورا ساتھ دیتے ہیں۔",
    aTag: "آپ کر سکتے ہیں",
    bTitle: "بیج (ٹک) — جسے لوگ ”گرین ٹک“ کہتے ہیں",
    bBody:
      "یہ الگ چیز ہے۔ میٹا اپنی مرضی سے دیتا ہے، اور 2024 سے یہ سبز نہیں بلکہ نیلا ہے (میٹا نے اپنی تمام ایپس میں بیج کا رنگ ایک کر دیا)۔ API چلانے کے لیے اس کی ضرورت بالکل نہیں: اِن باکس، براڈکاسٹ اور آٹومیشن سب اس کے بغیر چلتے ہیں۔",
    bTag: "میٹا کے اختیار میں",
    routesTitle: "بیج کے صرف دو راستے ہیں",
    routes: [
      "نوٹیبلٹی — آپ کے کاروبار کے بارے میں اصل خبری کوریج۔ پیڈ یا سپانسرڈ مضامین شمار نہیں ہوتے۔",
      "میٹا ویریفائیڈ — ادائیگی والی سبسکرپشن جس میں نوٹیبلٹی کی شرط نہیں، مگر یہ ہر ملک میں دستیاب نہیں۔ اپنے بزنس مینیجر میں خود دیکھیں کہ آپ کو پیشکش ہو رہی ہے یا نہیں۔",
    ],
    honest:
      "کوئی بھی فراہم کنندہ — ہم بھی نہیں — بیج کا وعدہ نہیں کر سکتا، کیونکہ کوئی فراہم کنندہ اُس فیصلے میں شامل ہی نہیں ہوتا۔ جو ”گرین ٹک گارنٹی“ بیچے، وہ یا تو عمل نہیں جانتا یا سمجھتا ہے کہ آپ نہیں جانتے۔",
    guideLink: "پوری تفصیل پڑھیں — گرین ٹک گائیڈ (انگریزی)",
    cta: "تصدیق کے بارے میں پوچھیں",
    ctaMessage:
      "السلام علیکم — واٹس ایپ بزنس ویریفکیشن اور گرین ٹک کے بارے میں پوچھنا تھا۔",
  },
  features: {
    eyebrow: "خصوصیات",
    title: "سب کچھ ایک جگہ",
    lead: "ہر وہ چیز جو واٹس ایپ پر چلنے والے کاروبار کو چاہیے — تین الگ ٹولز جوڑے بغیر۔",
    items: {
      inbox: {
        title: "مشترکہ ٹیم اِن باکس",
        body: "ایک واٹس ایپ نمبر، پوری ٹیم۔ کون سا پیغام کس کے پاس گیا، کس نے پڑھا، کس نے جواب دیا — سب نظر میں۔",
      },
      contacts: {
        title: "رابطے آپ کے حساب سے",
        body: "اپنی مرضی کے کسٹم فیلڈز اور ٹیگز بنائیں۔ CSV سے اِمپورٹ کریں۔ ہر رابطے کی پوری گفتگو ایک جگہ۔",
      },
      pipeline: {
        title: "سیلز پائپ لائن",
        body: "ہر لیڈ کو مرحلے کے حساب سے آگے بڑھائیں — نئی لیڈ سے ڈیل مکمل تک۔ ڈریگ کریں، ڈیل کی مالیت دیکھیں۔",
      },
      broadcast: {
        title: "براڈکاسٹ",
        body: "منظور شدہ واٹس ایپ ٹیمپلیٹس سے سینکڑوں لوگوں کو ایک ساتھ بھیجیں۔ کس تک پہنچا، کس نے پڑھا، کس نے جواب دیا — سب ٹریک ہوتا ہے۔",
      },
      automation: {
        title: "آٹومیشن",
        body: "کی ورڈ پر خودکار جواب۔ کوئی ’pricing‘ لکھے تو ریٹ لسٹ چلی جائے، ’demo‘ لکھے تو ڈیمو کا سلسلہ شروع ہو — آپ سو رہے ہوں تب بھی۔",
      },
      flow: {
        title: "بغیر کوڈ کے فلو",
        body: "سوال و جواب کا پورا سلسلہ بغیر کوڈ کے بنائیں۔ کسٹمر سے معلومات لیں، بٹن دکھائیں، پھر ٹیم کو منتقل کریں۔",
      },
      ai: {
        title: "AI جواب — کسٹمر کی اپنی زبان میں",
        body: "AI آپ کے اپنے نالج بیس سے جواب دیتا ہے، اور اُسی زبان میں جس میں کسٹمر نے لکھا — رومن اردو، اردو یا انگریزی۔ بات آگے بڑھے تو خود ٹیم کو منتقل کر دیتا ہے۔",
      },
      mobile: {
        title: "فون پر بھی",
        body: "اینڈرائیڈ ایپ — نوٹیفکیشن کے ساتھ۔ دکان پر ہوں یا باہر، کوئی پیغام مِس نہیں ہوتا۔",
      },
    },
  },
  how: {
    eyebrow: "کیسے چلتا ہے",
    title: "تین قدم، اور آپ چل پڑے",
    lead: "کوئی انسٹالیشن نہیں، کوئی ڈویلپر نہیں۔ دس منٹ میں سیٹ اپ۔",
    items: {
      "01": {
        title: "اکاؤنٹ بنائیں",
        body: `ای میل سے سائن اپ کریں۔ ${TRIAL_DAYS} دن مفت — کارڈ کی ضرورت نہیں۔`,
      },
      "02": {
        title: "واٹس ایپ جوڑیں",
        body: "اپنا واٹس ایپ بزنس نمبر جوڑیں۔ آپ کا نمبر، آپ کا اکاؤنٹ — ہم بیچ میں نہیں آتے۔",
      },
      "03": {
        title: "ٹیم کو بلائیں",
        body: "ممبرز کو دعوت دیں، اُن کے کردار طے کریں، اور کام شروع۔",
      },
    },
  },
  pricing: {
    eyebrow: "قیمت",
    title: "صاف قیمت، کوئی چھپی ہوئی بات نہیں",
    lead: `ہر پلان ${TRIAL_DAYS} دن مفت سے شروع ہوتا ہے۔ کارڈ کی ضرورت نہیں — پسند نہ آئے تو بس چھوڑ دیں۔`,
    popular: "سب سے زیادہ لیا جاتا ہے",
    perMonth: "/ماہ",
    members: "ٹیم ممبرز",
    contacts: "رابطے",
    broadcasts: "براڈکاسٹ پیغامات / ماہ",
    unlimited: "لامحدود",
    cta: `${TRIAL_DAYS} دن مفت آزمائیں`,
    plans: {
      basic: {
        tagline: "چھوٹے سیٹ اپ کے لیے",
        includes: [
          "مشترکہ اِن باکس",
          "رابطے + ٹیگز + کسٹم فیلڈز",
          "سیلز پائپ لائن",
          "براڈکاسٹ",
          "اینڈرائیڈ ایپ",
        ],
      },
      pro: {
        tagline: "بڑھتی ہوئی ٹیموں کے لیے",
        includes: [
          "Basic کا سب کچھ",
          "آٹومیشن (کی ورڈ خودکار جواب)",
          "بغیر کوڈ کے فلو",
          "AI جواب",
          "پبلک API",
        ],
      },
      business: {
        tagline: "بڑی ٹیموں کے لیے",
        includes: [
          "Pro کا سب کچھ",
          "لامحدود رابطے اور براڈکاسٹ",
          "ترجیحی سپورٹ",
        ],
      },
    },
    metaTitle: "میٹا کے چارجز الگ ہیں — اور وہ سیدھے آپ کے پاس جاتے ہیں",
    metaBodyBefore: "hashChat آپ کے ",
    metaBodyOwn: "اپنے",
    metaBodyAfter:
      " واٹس ایپ بزنس اکاؤنٹ سے جڑتا ہے۔ میٹا کا بل سیدھا آپ کو جاتا ہے — ہمارے پاس سے ہو کر نہیں۔ یعنی ہم اُس پر کچھ جوڑ ہی نہیں سکتے۔ بہت سے فراہم کنندہ میٹا سے خرید کر آگے بیچتے ہیں اور 12-20% مارک اپ لگاتے ہیں؛ اسی لیے انہیں ”0% مارک اپ“ کا دعویٰ کرنا پڑتا ہے۔ ہم اُس سلسلے میں ہیں ہی نہیں۔",
    rateMarketing: "مارکیٹنگ (براڈکاسٹ، آفر)",
    rateUtility: "یوٹیلیٹی (آرڈر، یاد دہانی)",
    rateReply: "کسٹمر کا جواب (24 گھنٹے)",
    rateFree: "مفت",
    rateNote:
      "یہ میٹا کے ریٹ ہیں اور وہ انہیں وقتاً فوقتاً بدلتا رہتا ہے۔ آٹومیشن، فلو اور ٹیم کے جواب — سب 24 گھنٹے والے مفت حصے میں آتے ہیں۔",
  },
  faq: {
    eyebrow: "سوالات",
    title: "جو سوال سب سے پہلے آتے ہیں",
    items: [
      {
        q: "کیا مجھے اپنا واٹس ایپ نمبر دینا پڑے گا؟",
        a: "آپ کا نمبر آپ کے اپنے واٹس ایپ بزنس اکاؤنٹ سے جڑا رہتا ہے۔ hashChat اُس سے جڑتا ہے — نمبر کبھی ہمارے پاس منتقل نہیں ہوتا، اور آپ جب چاہیں کنکشن ہٹا سکتے ہیں۔",
      },
      {
        q: "میرا واٹس ایپ نمبر بند ہو جاتا ہے — کیا یہ اُس کا حل ہے؟",
        a: "زیادہ تر ایسا تب ہوتا ہے جب آپ فیس بک/انسٹاگرام ایڈز چلاتے ہیں اور اچانک پیغامات کا سیلاب آتا ہے — عام واٹس ایپ بزنس ایپ اسے سپیم سمجھ کر نمبر بلاک کر دیتی ہے۔ hashChat آفیشل واٹس ایپ بزنس API پر چلتا ہے، جو بلک اور ایڈ کا ٹریفک سنبھالنے کے لیے ہی بنا ہے — یعنی آپ میٹا کے اپنے راستے پر ہوتے ہیں، اُس کے خلاف نہیں۔ یہ کوئی ’اینٹی بین ٹرک‘ نہیں (اور جو کوئی ایسا دعویٰ کرے اُس پر شک کریں) — فرق صرف یہ ہے کہ آپ قانونی چینل پر ہیں اور میٹا کے قواعد کے اندر رہتے ہیں۔",
      },
      {
        q: "کیا مجھے گرین ٹک مل جائے گا؟",
        a: "بیج میٹا اپنی مرضی سے دیتا ہے — کوئی فراہم کنندہ، ری سیلر یا ایجنسی اُس فیصلے میں شامل نہیں ہوتی، اس لیے کوئی بھی (ہم بھی نہیں) اِس کا وعدہ نہیں کر سکتا۔ دو راستے ہیں: نوٹیبلٹی (آپ کے کاروبار پر اصل خبری کوریج؛ پیڈ یا سپانسرڈ مضامین شمار نہیں ہوتے) اور میٹا ویریفائیڈ (ادائیگی والی سبسکرپشن، نوٹیبلٹی کے بغیر، مگر ہر ملک میں دستیاب نہیں)۔ دو باتیں اور: بیج 2024 سے سبز نہیں، نیلا ہے؛ اور API چلانے کے لیے اس کی ضرورت بالکل نہیں۔ جس چیز پر آپ کا اپنا اختیار ہے وہ بزنس ویریفکیشن اور منظور شدہ ڈسپلے نیم ہے — اور اسی میں ہم آپ کے ساتھ ہوتے ہیں۔",
      },
      {
        q: "کیا آپ میٹا کے میسج چارجز پر اپنا مارک اپ لگاتے ہیں؟",
        a: "نہیں — اور نہ ہی لگا سکتے ہیں۔ hashChat آپ کے اپنے واٹس ایپ بزنس اکاؤنٹ سے جڑتا ہے، تو میٹا کا بل سیدھا آپ کے پاس جاتا ہے، ہمارے پاس سے ہو کر نہیں۔ بہت سے فراہم کنندہ میٹا سے خرید کر آگے بیچتے ہیں اور اُس پر 12-20% مارک اپ لگاتے ہیں، اسی لیے انہیں ’0% مارک اپ‘ کا دعویٰ کرنا پڑتا ہے۔ ہم اُس سلسلے میں ہیں ہی نہیں۔ آپ سے صرف hashChat کی سبسکرپشن لی جاتی ہے۔",
      },
      {
        q: "کیا یہ واٹس ایپ بزنس ایپ کی جگہ لے گا؟",
        a: "یہ واٹس ایپ بزنس API پر چلتا ہے، جو آپ کے نمبر کو پوری ٹیم کے لیے کھول دیتا ہے۔ ایک ہی نمبر پر کئی لوگ ایک ساتھ کام کر سکتے ہیں — جو عام واٹس ایپ ایپ میں ممکن نہیں۔",
      },
      {
        q: "پیغام بھیجنے کا کوئی الگ خرچ ہے؟",
        a: "ہاں، اور وہ میٹا لیتا ہے — ہم نہیں۔ میٹا ہر پیغام پر چارج کرتا ہے اور ریٹ اس پر ہے کہ پیغام کس قسم کا ہے۔ پاکستان میں تقریباً: مارکیٹنگ (براڈکاسٹ، آفرز) ~13 روپے فی پیغام؛ یوٹیلیٹی (آرڈر اپ ڈیٹ، یاد دہانی) ~2.8 روپے فی پیغام۔ سب سے اہم: کسٹمر کے اپنے پیغام کا جواب اگر 24 گھنٹے کے اندر دیا جائے تو وہ بالکل مفت ہے — آٹومیشن، خودکار جواب اور ٹیم کے جواب سب اسی میں آتے ہیں۔ یہ ریٹ میٹا خود وقتاً فوقتاً بدلتا رہتا ہے۔",
      },
      {
        q: "مفت ٹرائل میں کیا ملتا ہے؟",
        a: `${TRIAL_DAYS} دن، پورا پروڈکٹ، بغیر کارڈ کے۔ ٹرائل ختم ہونے پر آپ پلان چن سکتے ہیں — آپ کا ڈیٹا ویسے کا ویسا رہتا ہے۔`,
      },
      {
        q: "ادائیگی کیسے کرنی ہوتی ہے؟",
        a: "بینک ٹرانسفر، جاز کیش یا ایزی پیسہ۔ ادائیگی کا اسکرین شاٹ اپ لوڈ کر دیں، ہم تصدیق کر کے پلان چالو کر دیتے ہیں۔",
      },
      {
        q: "ڈیٹا کہاں رہتا ہے، اور کیا میرا ہے؟",
        a: "آپ کا ڈیٹا آپ کا ہے۔ ہر اکاؤنٹ الگ رہتا ہے — کوئی دوسرا اکاؤنٹ آپ کے رابطے یا گفتگو نہیں دیکھ سکتا۔ چاہیں تو رابطے کبھی بھی ایکسپورٹ کر سکتے ہیں۔",
      },
    ],
  },
  cta: {
    title: "آج ہی شروع کریں",
    lead: `${TRIAL_DAYS} دن مفت۔ کارڈ کی ضرورت نہیں۔ سیٹ اپ دس منٹ کا ہے۔`,
    primary: "مفت ٹرائل شروع کریں",
    secondary: "قیمت دیکھیں",
  },
  footer: {
    blurb: "ٹیموں کے لیے واٹس ایپ CRM۔ لاہور، پاکستان میں بنایا گیا۔",
    features: "خصوصیات",
    pricing: "قیمت",
    faq: "سوالات",
    android: "اینڈرائیڈ ایپ",
    signIn: "سائن اِن",
    productOfBefore: "ایک پروڈکٹ ",
    productOfAfter: " کا",
    legalBefore: `${site.name} کو `,
    legalAfter: " چلاتی ہے — پاکستان میں رجسٹرڈ کمپنی، CUIN 0324937۔",
  },
};

export const copy: Record<Locale, Copy> = { roman, en, ur };

export const t = (locale: Locale): Copy => copy[locale] ?? copy[DEFAULT_LOCALE];

/**
 * hreflang map for `alternates.languages`.
 *
 * `x-default` points at the root rather than the English page: a reader
 * whose language we do not serve lands where the market that actually
 * buys this product reads.
 */
export const hrefLangs = Object.fromEntries([
  ...LOCALES.map((l) => [l.htmlLang, new URL(l.href, site.url).toString()]),
  ["x-default", site.url],
]) as Record<string, string>;
