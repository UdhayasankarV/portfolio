import { aiDevelopment } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function AIDevelopment() {
  return (
    <Section
      id="ai"
      eyebrow="05 — Workflow"
      title={aiDevelopment.heading}
      description={aiDevelopment.intro}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
            <h3 className="font-display text-xl font-semibold text-[var(--fg)]">
              {aiDevelopment.howIUse.title}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[var(--muted)]">
              {aiDevelopment.howIUse.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-7">
            <h3 className="font-display text-xl font-semibold text-[var(--fg)]">
              {aiDevelopment.promptApproach.title}
            </h3>
            <ol className="mt-4 space-y-2.5 text-[var(--muted)]">
              {aiDevelopment.promptApproach.items.map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-xs text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-6">
        <aside className="rounded-2xl border border-[color-mix(in_oklab,var(--accent-2)_25%,var(--border))] bg-[color-mix(in_oklab,var(--accent-2)_8%,var(--surface))] p-6 sm:p-7">
          <p className="mono-label mb-2 text-[var(--accent-2)]">
            {aiDevelopment.principle.title}
          </p>
          <p className="text-lg text-[var(--fg)]">{aiDevelopment.principle.body}</p>
        </aside>
      </Reveal>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {aiDevelopment.workflow.map((step, index) => (
          <Reveal key={step.step} delay={0.05 * index}>
            <article className="relative h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <p className="font-mono text-xs text-[var(--accent)]">{step.step}</p>
              <h4 className="mt-2 font-display text-lg font-semibold text-[var(--fg)]">
                {step.title}
              </h4>
              <p className="mt-2 text-sm text-[var(--muted)]">{step.description}</p>
              {index < aiDevelopment.workflow.length - 1 ? (
                <span
                  className="pointer-events-none absolute right-3 top-5 hidden text-[var(--muted)] lg:inline"
                  aria-hidden
                >
                  →
                </span>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
