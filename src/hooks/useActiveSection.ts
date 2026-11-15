import { useEffect, useState } from "react";

/**
 * Tracks which section is active based on scroll position + URL hash.
 * Uses a focus line (~28% from the top) so the nav pill matches the
 * section the user is actually viewing — not a misleading IntersectionObserver race.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const idsKey = sectionIds.join("|");

  useEffect(() => {
    const ids = idsKey.split("|").filter(Boolean);
    if (ids.length === 0) return;

    const resolveFromScroll = () => {
      const focusY = window.scrollY + window.innerHeight * 0.28;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= focusY) {
          current = id;
        }
      }

      // Near page bottom → last section (Contact)
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (nearBottom) {
        current = ids[ids.length - 1] ?? current;
      }

      setActiveId(current);
    };

    const resolveFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash && ids.includes(hash)) {
        setActiveId(hash);
        return true;
      }
      return false;
    };

    // Prefer hash on first paint / click navigation, then sync with scroll
    if (!resolveFromHash()) {
      resolveFromScroll();
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        resolveFromScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", resolveFromHash);
    window.addEventListener("resize", resolveFromScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", resolveFromHash);
      window.removeEventListener("resize", resolveFromScroll);
    };
  }, [idsKey]);

  return activeId;
}
