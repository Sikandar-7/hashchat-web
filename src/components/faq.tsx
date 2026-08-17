import { Plus } from "lucide-react";

import { faqs } from "@/lib/content";
import { Section } from "./section";

export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Jo sawaal sab se pehle aate hain"
    >
      <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-surface/60">
        {faqs.map((f) => (
          // <details> rather than a JS accordion: keyboard and screen
          // reader behaviour comes free, it works before hydration, and
          // it keeps this whole page a server component.
          <details key={f.q} className="group px-6 py-5 [&_summary]:list-none">
            <summary className="flex cursor-pointer items-start justify-between gap-4 font-medium">
              <span>{f.q}</span>
              <Plus
                className="mt-0.5 size-5 shrink-0 text-ink-faint transition-transform duration-200 group-open:rotate-45"
                aria-hidden
              />
            </summary>
            <p className="mt-3 pr-9 text-sm leading-relaxed text-ink-muted">
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
