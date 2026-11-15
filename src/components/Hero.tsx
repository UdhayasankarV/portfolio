import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "@/data/content";
import { Button } from "./ui/Button";

export function Hero() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const el = stageRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };

    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce]);

  return (
    <section
      id="top"
      ref={stageRef}
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      {!reduce ? (
        <div className="pointer-events-none absolute inset-0 spotlight opacity-80" aria-hidden />
      ) : null}

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <motion.p
            className="mono-label mb-5 inline-flex items-center gap-2"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <MapPin size={12} aria-hidden />
            {profile.location}
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="max-w-xl text-5xl font-semibold tracking-tight text-[var(--fg)] sm:text-6xl md:text-7xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="mt-3 font-display text-xl text-[var(--accent)] sm:text-2xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {profile.role}
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base text-[var(--muted)] sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            {profile.shortIntro}
          </motion.p>

          {profile.availableForOpportunities ? (
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--accent-2)_35%,var(--border))] bg-[color-mix(in_oklab,var(--accent-2)_10%,transparent)] px-3 py-1.5 font-mono text-xs text-[var(--accent-2)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-2)]" aria-hidden />
              Available for opportunities
            </p>
          ) : null}

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <Button href="#projects">
              View Projects
              <ArrowDownRight size={16} aria-hidden />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:justify-self-end"
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative ml-2 mt-2 sm:ml-6 sm:mt-6">
            <div
              className="absolute -inset-2 rounded-[1.75rem] border border-[color-mix(in_oklab,var(--accent)_55%,transparent)] sm:-inset-4"
              aria-hidden
            />
            <div className="relative overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_80px_rgb(0_0_0_/0.28)]">
              <img
                src={profile.photoPath}
                alt={profile.photoAlt}
                width={640}
                height={640}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="aspect-square h-auto w-full object-cover"
              />
              {/* Soft display cover for any leftover mark */}
              <div
                className="pointer-events-none absolute bottom-0 right-0 h-[16%] w-[24%] bg-gradient-to-tl from-[#2a3344]/55 via-[#2a3344]/25 to-transparent mix-blend-normal"
                aria-hidden
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
