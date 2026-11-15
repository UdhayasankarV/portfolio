import { footer, profile } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[var(--muted)]">
          © {year} {profile.name}. {footer.note}
        </p>
        <p className="font-mono text-xs text-[var(--muted)]">
          Salem, India · C# · ASP.NET Core · SQL
        </p>
      </div>
    </footer>
  );
}
