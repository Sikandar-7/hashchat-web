import { site } from "@/lib/content";

/**
 * "Get it on Google Play" badge, drawn inline (no image request): black
 * pill, the four-colour Play mark, Google's two-line wording. Links to the
 * live listing. The trademark line it needs is in the footer's legal strip.
 */
export function PlayBadge({ className = "" }: { className?: string }) {
  return (
    <a
      href={site.playStore}
      target="_blank"
      rel="noopener"
      aria-label="Get it on Google Play"
      className={`inline-flex h-12 items-center gap-2.5 rounded-xl border border-white/25 bg-black px-3.5 text-white transition-opacity hover:opacity-85 ${className}`}
    >
      <svg viewBox="0 0 30 32" className="h-7 w-auto shrink-0" aria-hidden>
        <path d="M1.3.6C.9 1 .7 1.7.7 2.5v27c0 .8.2 1.5.6 1.9l.1.1L16.6 16.3V16L1.4.5z" fill="#00D7FE" />
        <path d="M21.6 21.4l-5-5V16l5-5 .1.1 6 3.4c1.7 1 1.7 2.6 0 3.6l-6 3.4z" fill="#FFD500" />
        <path d="M21.7 21.3L16.6 16.2 1.3 31.5c.6.6 1.5.7 2.6.1l17.8-10.3" fill="#FF3A44" />
        <path d="M21.7 11.1L3.9.9C2.8.3 1.9.4 1.3 1L16.6 16.2z" fill="#00F076" />
      </svg>
      <span className="flex flex-col items-start leading-none" dir="ltr">
        <span className="text-[9px] font-medium uppercase tracking-wide">Get it on</span>
        <span className="mt-0.5 text-[19px] font-semibold tracking-tight">Google Play</span>
      </span>
    </a>
  );
}
