import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

import { site, waLink } from "@/lib/content";
import { t, type Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale: Locale }) {
  const c = t(locale).hero;
  return (
    <section className="relative overflow-hidden">
      {/* Aurora bloom behind the headline. Two soft radial washes in the
          logo's own indigo and teal — decorative, so it is aria-hidden
          and sits behind everything with no hit area. `blur-3xl` keeps
          the edges off the type. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-18rem] size-[46rem] -translate-x-1/2 rounded-full bg-brand-indigo/25 blur-3xl" />
        <div className="absolute left-[62%] top-[-8rem] size-[30rem] rounded-full bg-brand-teal/15 blur-3xl" />
        {/* Hairline grid, fading out before it reaches the copy. */}
        <div
          className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #232840 1px, transparent 1px), linear-gradient(to bottom, #232840 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-8 sm:pb-28 sm:pt-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* What is new, above the headline and linked to the section
              that explains it. Coexistence lived only in the FAQ at the
              bottom, and "can I keep my WhatsApp Business app?" is the
              question that decides whether someone moves at all. */}
          <a
            href="#keep-app"
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/40 bg-brand-teal/10 py-1 pe-3 ps-1 text-xs font-medium text-ink transition-colors hover:border-brand-teal/70 hover:bg-brand-teal/15"
          >
            <span className="brand-gradient rounded-full px-2 py-0.5 text-[11px] font-semibold text-white">
              {c.newTag}
            </span>
            {c.newText}
            <ArrowRight
              className="size-3.5 shrink-0 text-brand-teal rtl:rotate-180"
              aria-hidden
            />
          </a>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            {c.titleLead}{" "}
            <span className="brand-text">{c.titleAccent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            {c.lead}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${site.appUrl}/signup`}
              className="brand-gradient w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              {c.ctaPrimary}
            </a>
            {/* A WhatsApp button, not a second in-page link. Every
                competitor in this market closes on one, with the number
                visible — buyers here ask a question before they create
                an account, and sending them to a signup form instead is
                where the conversation ends. */}
            <a
              href={waLink(c.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-surface-2 sm:w-auto"
            >
              <MessageCircle className="size-4 text-brand-teal" aria-hidden />
              {c.ctaWhatsapp}
            </a>
          </div>

          {/* The free trial, right under the button it applies to. It
              was the pill above the headline until the announcement took
              that spot. */}
          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-ink-muted">
            <span className="size-1.5 shrink-0 rounded-full bg-brand-teal" />
            {c.badge}
          </p>

          <p className="mt-2 text-sm text-ink-faint">
            {c.footnote}{" "}
            <span className="text-ink-muted" dir="ltr">
              {site.whatsappDisplay}
            </span>
          </p>
        </div>

        {/* Product surface. A framed panel rather than a floating
            screenshot — a real screenshot goes here once the app has a
            populated demo account to shoot; showing an empty inbox would
            sell the product short. */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="brand-gradient absolute -inset-px rounded-2xl opacity-40 blur-sm" />
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
            <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-4 py-3">
              <span className="size-2.5 rounded-full bg-ink-faint/40" />
              <span className="size-2.5 rounded-full bg-ink-faint/40" />
              <span className="size-2.5 rounded-full bg-ink-faint/40" />
              <span className="ml-3 text-xs text-ink-faint">
                app.hashchat.uk
              </span>
            </div>
            <div className="flex aspect-[16/9] items-center justify-center">
              <Image
                src="/logo-192.png"
                alt=""
                width={96}
                height={96}
                className="size-24 opacity-25"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
