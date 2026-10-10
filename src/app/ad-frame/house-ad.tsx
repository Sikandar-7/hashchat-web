"use client";

import { PANEL_ORIGIN, type AdSlot } from "@/lib/ads";

/**
 * Our own ad: shown until AdSense is set up, and whenever AdSense has nothing
 * to fill the slot with. It sells the one thing that removes ads, the
 * Business plan. Framed, a click asks the panel to open its billing page
 * (the panel's sandbox doesn't let frames navigate it); opened on its own,
 * the link goes there in a new tab.
 */
function openBilling(e: React.MouseEvent) {
  if (window.parent === window) return;
  e.preventDefault();
  window.parent.postMessage({ type: "hashchat:upgrade" }, PANEL_ORIGIN);
}

export function HouseAd({ slot, dark, upgradeUrl }: { slot: AdSlot; dark: boolean; upgradeUrl: string }) {
  const c = dark
    ? { bg: "#0f1216", border: "#26292e", text: "#f2f4f5", muted: "#9aa0a6", green: "#22c55e", onGreen: "#05070b" }
    : { bg: "#ffffff", border: "#e4e6ea", text: "#0b0d10", muted: "#5f6670", green: "#16a34a", onGreen: "#ffffff" };
  const font = "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif";

  if (slot === "top") {
    // The strip above the panel's header on desktop.
    return (
      <a
        href={upgradeUrl}
        target="_blank"
        rel="noopener"
        onClick={openBilling}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          height: "100%",
          padding: "0 20px",
          background: c.bg,
          color: c.text,
          textDecoration: "none",
          fontFamily: font,
        }}
      >
        <span
          style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.4, textTransform: "uppercase", color: c.green }}
        >
          hashChat Business
        </span>
        <span style={{ fontSize: 14, fontWeight: 600 }}>No ads. Unlimited team and contacts.</span>
        <span style={{ fontSize: 13, color: c.muted }}>Plus automations, flows, AI and the API.</span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            background: c.green,
            color: c.onGreen,
            borderRadius: 999,
            padding: "6px 14px",
          }}
        >
          Upgrade
        </span>
      </a>
    );
  }

  if (slot === "mobile") {
    return (
      <a
        href={upgradeUrl}
        target="_blank"
        rel="noopener"
        onClick={openBilling}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          height: "100%",
          padding: "0 12px",
          background: c.bg,
          color: c.text,
          textDecoration: "none",
          fontFamily: font,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 600, flex: 1, lineHeight: 1.25 }}>
          Go ad-free with hashChat Business
          <span style={{ display: "block", fontSize: 11, fontWeight: 400, color: c.muted }}>
            Unlimited team and contacts
          </span>
        </span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            background: c.green,
            color: c.onGreen,
            borderRadius: 999,
            padding: "6px 12px",
          }}
        >
          Upgrade
        </span>
      </a>
    );
  }

  return (
    <a
      href={upgradeUrl}
      target="_blank"
      rel="noopener"
      onClick={openBilling}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 8,
        height: "100%",
        boxSizing: "border-box",
        padding: 16,
        borderRadius: 10,
        border: `1px solid ${c.border}`,
        background: c.bg,
        color: c.text,
        textDecoration: "none",
        fontFamily: font,
      }}
    >
      <span
        style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0.4, textTransform: "uppercase", color: c.green }}
      >
        hashChat Business
      </span>
      <span style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>No ads. Unlimited team and contacts.</span>
      <span style={{ fontSize: 12, color: c.muted, lineHeight: 1.4 }}>Plus automations, flows, AI and the API.</span>
      <span
        style={{
          alignSelf: "flex-start",
          marginTop: 4,
          fontSize: 12,
          fontWeight: 600,
          background: c.green,
          color: c.onGreen,
          borderRadius: 999,
          padding: "6px 14px",
        }}
      >
        Upgrade
      </span>
    </a>
  );
}
