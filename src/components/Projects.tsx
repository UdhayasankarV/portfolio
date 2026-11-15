import { useRef, type PointerEvent } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[number];
  delay: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal delay={delay}>
      <article
        ref={cardRef}
        onPointerMove={onMove}
        className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:border-[color-mix(in_oklab,var(--accent)_30%,var(--border))] sm:p-8"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 40%), color-mix(in oklab, var(--accent) 14%, transparent), transparent 40%)",
          }}
          aria-hidden
        />

        <div className="relative">
          {project.isPlaceholder ? (
            <p className="mono-label mb-3 text-[var(--accent)]">Placeholder — fill in content.ts</p>
          ) : null}

          <div className="flex flex-wrap items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold text-[var(--fg)]">
              {project.name}
            </h3>
            <div className="flex gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--accent)]"
                  aria-label={`${project.name} on GitHub`}
                >
                  <Github size={16} />
                </a>
              ) : null}
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] transition hover:border-[var(--accent)]"
                  aria-label={`${project.name} live site`}
                >
                  <ExternalLink size={16} />
                </a>
              ) : null}
            </div>
          </div>

          <p className="mt-3 text-[var(--muted)]">{project.summary}</p>

          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="mono-label mb-1">Problem</dt>
              <dd className="text-sm text-[var(--fg)]">{project.problem}</dd>
            </div>
            <div>
              <dt className="mono-label mb-1">My role</dt>
              <dd className="text-sm text-[var(--fg)]">{project.role}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <p className="mono-label mb-2">Key features</p>
            <ul className="space-y-1.5 text-sm text-[var(--muted)]">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-[var(--accent)]" aria-hidden>
                    +
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 — Selected work"
      title="Featured projects"
      description="Selected applications and APIs from professional work and personal development."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 0.08} />
        ))}
      </div>
    </Section>
  );
}
