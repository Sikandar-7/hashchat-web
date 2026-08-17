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
  appUrl: "https://app.hashchat.uk",
  tagline: "WhatsApp CRM for teams",
  company: "Buraq Tech",
  companyUrl: "https://buraqtech.uk",
} as const;

// ------------------------------------------------------------
// Features — each one is something the product actually does.
// ------------------------------------------------------------
export const features = [
  {
    title: "Shared team inbox",
    body: "Ek WhatsApp number, poori team. Har message kis ke paas gaya, kis ne parha, kis ne jawab diya — sab nazar mein.",
    icon: "inbox",
  },
  {
    title: "Contacts jo aapke hisaab se hon",
    body: "Custom fields aur tags apni marzi ke banayein. CSV se import karein. Har contact ki poori baat-cheet ek jagah.",
    icon: "contacts",
  },
  {
    title: "Sales pipeline",
    body: "Har lead ko stage ke hisaab se aage barhayein — New Lead se Won tak. Drag karein, deal ki value dekhein.",
    icon: "pipeline",
  },
  {
    title: "Broadcasts",
    body: "Approved WhatsApp templates se sainkron logon ko ek saath bhejein. Kis tak pohancha, kis ne parha, kis ne jawab diya — sab track hota hai.",
    icon: "broadcast",
  },
  {
    title: "Automations",
    body: "Keyword par khud jawab. Koi 'pricing' likhe to rate list chali jaye, 'demo' likhe to demo ka silsila shuru ho — aap so rahe hon tab bhi.",
    icon: "automation",
  },
  {
    title: "No-code flows",
    body: "Sawaal-jawab ka poora silsila bina code ke banayein. Customer se maloomat lein, buttons dikhayein, phir team ko handover.",
    icon: "flow",
  },
  {
    title: "AI jawab",
    body: "AI aapke apne knowledge base se jawab deta hai. Jab baat aage barhe to khud team ko handover kar deta hai.",
    icon: "ai",
  },
  {
    title: "Phone par bhi",
    body: "Android app — notifications ke saath. Dukan par hon ya bahar, koi message miss nahi hota.",
    icon: "mobile",
  },
] as const;

// ------------------------------------------------------------
// How it works
// ------------------------------------------------------------
export const steps = [
  {
    n: "01",
    title: "Account banayein",
    body: "Email se sign up karein. 3 din free — card ki zaroorat nahi.",
  },
  {
    n: "02",
    title: "WhatsApp jorein",
    body: "Apna WhatsApp Business number connect karein. Aapka number, aapka account — hum beech mein nahi aate.",
  },
  {
    n: "03",
    title: "Team ko bulayein",
    body: "Members ko invite karein, unke roles tay karein, aur kaam shuru.",
  },
] as const;

// ------------------------------------------------------------
// Pricing — from the product's own `plans` table.
//
// Member and contact ceilings are listed because the database enforces
// them (migration 047). The per-month broadcast cap is NOT listed: the
// column exists but nothing enforces it yet, and advertising a limit
// that isn't applied is a promise the product doesn't keep. It goes in
// once the usage counter ships.
// ------------------------------------------------------------
export const plans = [
  {
    slug: "basic",
    name: "Basic",
    price: 2000,
    tagline: "Chhote setups ke liye",
    members: 3,
    contacts: 1000,
    highlight: false,
    includes: [
      "Shared inbox",
      "Contacts + tags + custom fields",
      "Sales pipelines",
      "Broadcasts",
      "Android app",
    ],
  },
  {
    slug: "pro",
    name: "Pro",
    price: 3500,
    tagline: "Barhti hui teams ke liye",
    members: 10,
    contacts: 10000,
    highlight: true,
    includes: [
      "Basic ka sab kuch",
      "Automations (keyword auto-reply)",
      "No-code flows",
      "AI jawab",
      "Public API",
    ],
  },
  {
    slug: "business",
    name: "Business",
    price: 7000,
    tagline: "Bari teams ke liye",
    members: 25,
    contacts: null, // unlimited
    highlight: false,
    includes: [
      "Pro ka sab kuch",
      "Unlimited contacts",
      "Priority support",
    ],
  },
] as const;

export const TRIAL_DAYS = 3;
export const CURRENCY = "PKR";

// ------------------------------------------------------------
// FAQ — the questions a real buyer asks first.
// ------------------------------------------------------------
export const faqs = [
  {
    q: "Kya mujhe apna WhatsApp number dena parega?",
    a: "Aapka number aapke apne WhatsApp Business account se juda rehta hai. hashChat us se connect hota hai — number kabhi hamare paas transfer nahi hota, aur aap jab chahein connection hata sakte hain.",
  },
  {
    q: "Kya yeh WhatsApp Business app ki jagah lega?",
    a: "Yeh WhatsApp Business API par chalta hai, jo aapke number ko poori team ke liye khol deta hai. Ek hi number par kai log ek saath kaam kar sakte hain — jo normal WhatsApp app mein mumkin nahi.",
  },
  {
    q: "Message bhejne ka koi alag kharcha hai?",
    a: "Haan, aur woh Meta leta hai, hum nahi. Broadcast/marketing messages par Meta apna charge lagata hai (Pakistan mein takreeban Rs 2-3 per conversation). Customer ke message ka jawab 24 ghante ke andar dena free hai — automations aur auto-replies bhi isi mein aate hain.",
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
] as const;
