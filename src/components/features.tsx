import {
  Bot,
  Inbox,
  Megaphone,
  Smartphone,
  Tags,
  KanbanSquare,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { features } from "@/lib/content";
import { Section } from "./section";

/** content.ts stays free of component imports; this maps its names. */
const ICONS: Record<string, LucideIcon> = {
  inbox: Inbox,
  contacts: Tags,
  pipeline: KanbanSquare,
  broadcast: Megaphone,
  automation: Zap,
  flow: Workflow,
  ai: Bot,
  mobile: Smartphone,
};

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Features"
      title="Sab kuch ek jagah"
      lead="Har cheez jo ek WhatsApp par chalne wale business ko chahiye — bina teen alag tools ke."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => {
          const Icon = ICONS[f.icon] ?? Inbox;
          return (
            <li
              key={f.title}
              className="group rounded-2xl border border-line bg-surface/60 p-6 transition-colors hover:border-brand-indigo/40 hover:bg-surface-2/60"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-surface-2 text-brand-sky transition-colors group-hover:border-brand-indigo/40">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-base font-semibold">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {f.body}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
