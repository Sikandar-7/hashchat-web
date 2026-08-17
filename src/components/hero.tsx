import Image from "next/image";

import { TRIAL_DAYS, site } from "@/lib/content";

export function Hero() {
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

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-ink-muted">
            <span className="size-1.5 rounded-full bg-brand-teal" />
            {TRIAL_DAYS} din free — card ki zaroorat nahi
          </p>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
            Poori team ka{" "}
            <span className="brand-text">ek WhatsApp inbox</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-muted">
            Customers ke messages ab ek banday ke phone mein nahi atkte.
            Contacts, sales pipeline, broadcasts aur automations — sab ek
            jagah, poori team ke liye.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${site.appUrl}/signup`}
              className="brand-gradient w-full rounded-xl px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Free trial shuru karein
            </a>
            <a
              href="#features"
              className="w-full rounded-xl border border-line bg-surface/60 px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-surface-2 sm:w-auto"
            >
              Pehle dekhein kya hai
            </a>
          </div>

          <p className="mt-5 text-sm text-ink-faint">
            Aapka apna WhatsApp number · Lahore se banaya gaya
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
