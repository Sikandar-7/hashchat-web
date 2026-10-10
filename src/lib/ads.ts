/**
 * Ads in the hashChat panel (app.hashchat.uk), for workspaces on the Basic
 * and Pro plans.
 *
 * The panel never loads Google's ad script itself. It frames /ad-frame from
 * this site instead, so AdSense runs on hashchat.uk — the domain AdSense
 * approves — and, being cross-origin, cannot read the panel's page: customer
 * names, phone numbers and chats stay out of reach of third-party code.
 *
 * Until the AdSense account is approved `client` stays empty and every slot
 * shows our own "go ad-free" card. The same card fills a slot AdSense leaves
 * empty.
 */
export type AdSlot = "sidebar" | "mobile" | "top";

export const adsense: { client: string; slots: Record<AdSlot, string> } = {
  // "ca-pub-…" from AdSense → Account → Settings.
  client: "",
  // Ad unit ids from AdSense → Ads → By ad unit (one per placement).
  slots: { sidebar: "", mobile: "", top: "" },
};

/** Only the panel may frame /ad-frame (see next.config.ts). */
export const PANEL_ORIGIN = "https://app.hashchat.uk";
