"use client";

import { useEffect } from "react";

/**
 * On an Android phone, opens the app's Google Play page once this page has
 * rendered (Play then installs it, or offers "Update" over an older copy).
 * Anywhere else nothing happens: a laptop can't install it, and the
 * buttons stay as the way in.
 */
export function AutoDownload({ href }: { href: string }) {
  useEffect(() => {
    if (!/Android/i.test(navigator.userAgent)) return;
    const id = window.setTimeout(() => {
      window.location.href = href;
    }, 800);
    return () => window.clearTimeout(id);
  }, [href]);
  return null;
}
