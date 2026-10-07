"use client";

import { useEffect } from "react";

/** Starts the APK download once the page has rendered (the button stays as the fallback). */
export function AutoDownload({ href }: { href: string }) {
  useEffect(() => {
    const id = window.setTimeout(() => {
      window.location.href = href;
    }, 800);
    return () => window.clearTimeout(id);
  }, [href]);
  return null;
}
