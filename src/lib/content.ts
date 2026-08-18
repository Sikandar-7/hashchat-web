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
  // Every competitor ad in this market closes on a WhatsApp button with
  // a visible number, not a signup link — buyers here want to ask a
  // question before they create an account. Digits only for wa.me.
  whatsapp: "923119407860",
  whatsappDisplay: "+92 311 9407860",
} as const;

/** Prefilled so the first message says something useful. */
export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

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
    // The language line is verifiable: the AI's system prompt tells it
    // to answer in whatever language the customer wrote in. A
    // competitor in this market sells exactly this as a headline
    // feature, and hashChat already does it.
    title: "AI jawab — customer ki apni zubaan mein",
    body: "AI aapke apne knowledge base se jawab deta hai, aur usi zubaan mein jis mein customer ne likha — Roman Urdu, Urdu ya English. Baat aage barhe to khud team ko handover kar deta hai.",
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
  // The question this entire market advertises against. Every Pakistani
  // competitor leads with the ban; answering it plainly, without the
  // "anti-ban" language they use, is the honest version of that pitch —
  // nobody can promise Meta will never act, and the real protection is
  // being on the official channel in the first place.
  {
    q: "Mera WhatsApp number ban ho jata hai — kya yeh us ka hal hai?",
    a: "Zyada tar aisa tab hota hai jab aap Facebook/Instagram ads chalate hain aur achanak messages ka sailab aata hai — normal WhatsApp Business app usay spam samajh kar number block kar deti hai. hashChat official WhatsApp Business API par chalta hai, jo bulk aur ads ka traffic sambhalne ke liye hi bana hai — yani aap Meta ke apne raaste par hote hain, us ke khilaf nahi. Yeh koi 'anti-ban trick' nahi hai (aur jo koi aisa daawa kare us par shak karein) — farq sirf yeh hai ke aap qanooni channel par ho aur Meta ke qawaid ke andar rehte ho.",
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
] as const;
