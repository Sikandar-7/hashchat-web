import { TRIAL_DAYS, site } from "@/lib/content";

export function Cta() {
  return (
    <section className="border-t border-line/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-14">
          <div
            aria-hidden
            className="brand-gradient pointer-events-none absolute inset-x-0 top-0 h-px opacity-60"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 size-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-indigo/20 blur-3xl"
          />

          <h2 className="relative font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Aaj hi shuru karein
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-ink-muted">
            {TRIAL_DAYS} din free. Card ki zaroorat nahi. Setup dus minute ka
            hai.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${site.appUrl}/signup`}
              className="brand-gradient w-full rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-indigo/25 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Free trial shuru karein
            </a>
            <a
              href="#pricing"
              className="w-full rounded-xl border border-line bg-surface-2 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-line/40 sm:w-auto"
            >
              Pricing dekhein
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
