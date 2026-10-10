import type { Metadata } from "next";

import { adsense, PANEL_ORIGIN, type AdSlot } from "@/lib/ads";

import { AdsenseUnit } from "./adsense-unit";
import { HouseAd } from "./house-ad";

/**
 * One ad slot of the hashChat panel, framed by app.hashchat.uk (see
 * lib/ads.ts for why it lives here). `?slot=sidebar|mobile|top` picks the size,
 * `?theme=dark|light` matches the panel's colours. Not a page anyone should
 * land on, so it stays out of search.
 */
export const metadata: Metadata = {
  title: "Advertisement",
  robots: { index: false, follow: false },
};

export default async function AdFrame({
  searchParams,
}: {
  searchParams: Promise<{ slot?: string; theme?: string }>;
}) {
  const sp = await searchParams;
  const slot: AdSlot = sp.slot === "mobile" || sp.slot === "top" ? sp.slot : "sidebar";
  const dark = sp.theme !== "light";
  const unit = adsense.client ? adsense.slots[slot] : "";
  const house = <HouseAd slot={slot} dark={dark} upgradeUrl={`${PANEL_ORIGIN}/subscription`} />;

  return (
    <div style={{ position: "fixed", inset: 0, background: dark ? "#0f1216" : "#ffffff", overflow: "hidden" }}>
      {unit ? <AdsenseUnit client={adsense.client} unit={unit} slot={slot} fallback={house} /> : house}
    </div>
  );
}
