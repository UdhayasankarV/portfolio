import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 px-4 py-20 sm:px-6 md:py-28 lg:px-8", className)}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="mb-10 max-w-2xl md:mb-14">
            {eyebrow ? <p className="mono-label mb-3">{eyebrow}</p> : null}
            <h2
              id={`${id}-heading`}
              className="text-3xl font-semibold tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl"
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-base text-[var(--muted)] sm:text-lg">{description}</p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
