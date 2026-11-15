import {
  Code2,
  Database,
  Network,
  Sparkles,
  Wrench,
  Boxes,
} from "lucide-react";
import type { SkillCategory } from "@/data/content";
import { skills } from "@/data/content";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";
import { cn } from "@/lib/cn";

const iconMap = {
  code: Code2,
  database: Database,
  api: Network,
  wrench: Wrench,
  sparkles: Sparkles,
  tools: Boxes,
} as const;

function SkillCard({
  category,
  className,
  delay,
}: {
  category: SkillCategory;
  className?: string;
  delay: number;
}) {
  const Icon = iconMap[category.icon];
  return (
    <Reveal delay={delay} className={className}>
      <article
        className={cn(
          "group h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))] hover:shadow-[0_18px_40px_rgb(0_0_0_/0.18)] sm:p-6",
        )}
      >
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-2)] text-[var(--accent)]">
            <Icon size={18} aria-hidden />
          </span>
          <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
            {category.title}
          </h3>
        </div>
        <ul className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Capabilities"
      title="Skills"
      description="Grouped by how I actually use them — languages, data, APIs, practice, AI tooling, and day-to-day tools."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => (
          <SkillCard
            key={category.id}
            category={category}
            delay={index * 0.05}
            className={cn(
              category.id === "ai" && "sm:col-span-2 lg:col-span-1",
              category.id === "languages" && "lg:col-span-1",
            )}
          />
        ))}
      </div>
    </Section>
  );
}
