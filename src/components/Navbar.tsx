import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import type { Theme } from "@/hooks/useTheme";
import { ThemeToggle } from "./ui/ThemeToggle";
import { cn } from "@/lib/cn";

type NavbarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const sectionIds = navItems.map((item) => item.id);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-4">
      <nav
        className={cn(
          "pointer-events-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-xl transition sm:px-4",
          scrolled
            ? "border-[var(--border)] bg-[var(--nav-bg)] shadow-[0_10px_40px_rgb(0_0_0_/0.18)]"
            : "border-transparent bg-[color-mix(in_oklab,var(--nav-bg)_55%,transparent)]",
        )}
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display flex shrink-0 items-center gap-2 px-2 text-sm font-semibold tracking-tight text-[var(--fg)] sm:text-base"
          onClick={close}
        >
          <img
            src="/images/logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7 rounded-full"
            aria-hidden
          />
          {profile.firstName}
          <span className="text-[var(--accent)]">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = activeId === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => {
                    // Immediate feedback while smooth-scroll settles
                    window.history.replaceState(null, "", item.href);
                    window.dispatchEvent(new HashChangeEvent("hashchange"));
                  }}
                  className={cn(
                    "relative rounded-full px-3 py-2 text-sm transition",
                    active ? "text-[var(--fg)]" : "text-[var(--muted)] hover:text-[var(--fg)]",
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId={reduce ? undefined : "nav-pill"}
                      className="absolute inset-0 rounded-full bg-[color-mix(in_oklab,var(--accent)_14%,transparent)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="pointer-events-auto fixed inset-0 z-40 md:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[rgb(0_0_0_/0.55)]"
              aria-label="Close menu overlay"
              onClick={close}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col gap-2 border-l border-[var(--border)] bg-[var(--bg)] p-6 pt-24 shadow-2xl"
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    window.history.replaceState(null, "", item.href);
                    window.dispatchEvent(new HashChangeEvent("hashchange"));
                    close();
                  }}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-lg font-medium",
                    activeId === item.id
                      ? "bg-[color-mix(in_oklab,var(--accent)_14%,transparent)] text-[var(--fg)]"
                      : "text-[var(--muted)]",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
