import { about, profile } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

export function About() {
  return (
    <Section id="about" eyebrow="01 — Profile" title={about.heading}>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <div className="space-y-5 text-base text-[var(--muted)] sm:text-lg">
            <p className="font-display text-lg font-semibold text-[var(--fg)] sm:text-xl">
              {about.tagline}
            </p>
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p>
              Based in <span className="text-[var(--fg)]">{profile.location}</span>.
            </p>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
              <p className="mono-label mb-2">Education</p>
              <p className="font-display text-base font-semibold text-[var(--fg)]">
                {about.education.degree}
              </p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {about.education.school}
              </p>
              <p className="mt-1 font-mono text-xs text-[var(--accent)]">
                {about.education.duration}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {about.highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 font-mono text-sm text-[var(--fg)]"
              >
                <span className="mr-2 text-[var(--accent)]" aria-hidden>
                  ▸
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
