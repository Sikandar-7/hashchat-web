import type { NextConfig } from "next";

/**
 * Baseline security headers.
 *
 * Vercel already sends HSTS, but not these. They cost nothing on a
 * static marketing page and their absence is the kind of thing a
 * prospective customer's IT person notices when they scan the site of
 * a tool that will hold their customer conversations.
 *
 * No CSP here yet: the page loads only its own assets today, so a CSP
 * would be trivially satisfiable — but adding analytics or a chat
 * widget later would break silently against a policy nobody remembers
 * writing. Worth doing deliberately, with report-only first, rather
 * than as a drive-by.
 */
const SECURITY_HEADERS = [
  // Stops a browser from second-guessing a declared content type —
  // the classic vector for a served asset being executed as script.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Nothing here is meant to be framed; refusing removes clickjacking.
  { key: "X-Frame-Options", value: "DENY" },
  // Send the origin to other sites, never the full path.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site asks for none of these; deny them so a future dependency
  // can't quietly start asking.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
