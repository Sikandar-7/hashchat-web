"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

import type { AdSlot } from "@/lib/ads";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * One AdSense unit. When AdSense reports the slot unfilled
 * (`data-ad-status="unfilled"` on the <ins>), the house ad takes its place
 * instead of leaving a blank box in the panel.
 */
export function AdsenseUnit({
  client,
  unit,
  slot,
  fallback,
}: {
  client: string;
  unit: string;
  slot: AdSlot;
  fallback: React.ReactNode;
}) {
  const ins = useRef<HTMLModElement>(null);
  const [unfilled, setUnfilled] = useState(false);

  useEffect(() => {
    const el = ins.current;
    if (!el) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense blocked or broken: fall back on the next tick (not inside the effect body).
      queueMicrotask(() => setUnfilled(true));
      return;
    }
    const watch = new MutationObserver(() => {
      if (el.getAttribute("data-ad-status") === "unfilled") setUnfilled(true);
    });
    watch.observe(el, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => watch.disconnect();
  }, []);

  if (unfilled) return <>{fallback}</>;

  return (
    <>
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        ref={ins}
        className="adsbygoogle"
        style={
          slot === "mobile"
            ? { display: "inline-block", width: "100%", height: 50 }
            : { display: "block", width: "100%", height: "100%" }
        }
        data-ad-client={client}
        data-ad-slot={unit}
        {...(slot === "sidebar" ? { "data-ad-format": "rectangle" } : {})}
      />
    </>
  );
}
