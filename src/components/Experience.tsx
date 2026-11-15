import { experience } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 — Work"
      title="Experience"
      description="A concise timeline of roles. Placeholder entries are marked until you fill in real company details."
    >
      <ol className="relative space-y-8 border-l border-[color-mix(in_oklab,var(--accent)_35%,var(--border))] pl-6 sm:pl-8">
        {experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 0.06} y={20}>
            <li className="relative">
              <span
                className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] sm:-left-[2.4rem]"
                aria-hidden
              />
              <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
                {item.isPlaceholder ? (
                  <p className="mono-label mb-3 text-[var(--accent)]">Placeholder — fill in content.ts</p>
                ) : null}
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-[var(--fg)]">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-[var(--muted)]">{item.duration}</p>
                </div>
                <p className="mt-1 text-[var(--accent)]">{item.company}</p>
                {item.location ? (
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.location}</p>
                ) : null}
                <ul className="mt-4 space-y-2 text-[var(--muted)]">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
