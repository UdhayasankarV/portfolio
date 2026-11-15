import { lazy, Suspense, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

const About = lazy(() =>
  import("./components/About").then((m) => ({ default: m.About })),
);
const Skills = lazy(() =>
  import("./components/Skills").then((m) => ({ default: m.Skills })),
);
const Experience = lazy(() =>
  import("./components/Experience").then((m) => ({ default: m.Experience })),
);
const Projects = lazy(() =>
  import("./components/Projects").then((m) => ({ default: m.Projects })),
);
const AIDevelopment = lazy(() =>
  import("./components/AIDevelopment").then((m) => ({ default: m.AIDevelopment })),
);
const Contact = lazy(() =>
  import("./components/Contact").then((m) => ({ default: m.Contact })),
);

function SectionFallback() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20" aria-hidden>
      <div className="h-8 w-48 animate-pulse rounded bg-[var(--surface)]" />
      <div className="mt-6 h-40 animate-pulse rounded-2xl bg-[var(--surface)]" />
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-dvh bg-[var(--bg)] text-[var(--fg)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-[#12141A]"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <AIDevelopment />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
