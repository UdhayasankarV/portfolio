import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: ReactNode;
};

const variants = {
  primary:
    "bg-[var(--accent)] text-[#12141A] hover:brightness-105 shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_40%,transparent)]",
  secondary:
    "bg-transparent text-[var(--fg)] border border-[var(--border)] hover:border-[color-mix(in_oklab,var(--accent)_50%,var(--border))] hover:bg-[color-mix(in_oklab,var(--surface-2)_70%,transparent)]",
  ghost: "bg-transparent text-[var(--muted)] hover:text-[var(--fg)]",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
    variants[variant],
    className,
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        className={classes}
        {...(external
          ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
          : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
