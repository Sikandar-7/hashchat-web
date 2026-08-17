import type { ReactNode } from "react";

/**
 * Shared section chrome — one place that owns vertical rhythm, max
 * width and heading scale, so eight sections can't drift apart.
 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      // `scroll-mt` keeps the sticky header from covering the heading
      // when a nav link jumps here.
      className={`scroll-mt-20 border-t border-line/60 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-sky">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {lead ? (
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-muted">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
