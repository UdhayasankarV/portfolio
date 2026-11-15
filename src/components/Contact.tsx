import { useState, type FormEvent } from "react";
import { Download, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { contact, profile, socialLinks } from "@/data/content";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Section } from "./ui/Section";

const iconMap = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
} as const;

export function Contact() {
  const formspree = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formspree) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    try {
      const res = await fetch(formspree, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="06 — Connect"
      title={contact.heading}
      description={contact.intro}
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="space-y-4">
            <ul className="space-y-3">
              <li>
                <a
                  href={profile.phoneHref}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--accent)]">
                    <Phone size={16} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-medium text-[var(--fg)]">Phone</span>
                    <span className="block text-sm text-[var(--muted)]">{profile.phone}</span>
                  </span>
                </a>
              </li>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target={link.icon === "email" ? undefined : "_blank"}
                      rel={link.icon === "email" ? undefined : "noopener noreferrer"}
                      className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 transition hover:border-[color-mix(in_oklab,var(--accent)_35%,var(--border))]"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--accent)]">
                        <Icon size={16} aria-hidden />
                      </span>
                      <span>
                        <span className="block font-medium text-[var(--fg)]">{link.label}</span>
                        <span className="block text-sm text-[var(--muted)]">
                          {link.icon === "email" ? profile.email : link.href.replace(/^https?:\/\//, "")}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <Button href={profile.resumePath} variant="secondary" className="w-full sm:w-auto">
              <Download size={16} aria-hidden />
              Download Resume
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          {formspree ? (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
              noValidate
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mono-label mb-2 block">Name</span>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-[var(--fg)] outline-none focus:border-[var(--accent)]"
                  />
                </label>
                <label className="block text-sm">
                  <span className="mono-label mb-2 block">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-[var(--fg)] outline-none focus:border-[var(--accent)]"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="mono-label mb-2 block">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-y rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 py-2.5 text-[var(--fg)] outline-none focus:border-[var(--accent)]"
                />
              </label>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button type="submit" disabled={status === "sending"}>
                  <Send size={16} aria-hidden />
                  {status === "sending" ? "Sending…" : "Send message"}
                </Button>
                {status === "sent" ? (
                  <p className="text-sm text-[var(--accent-2)]" role="status">
                    Message sent. Thank you.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-red-400" role="alert">
                    Something went wrong. Email me directly instead.
                  </p>
                ) : null}
              </div>
            </form>
          ) : (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">
              <p className="font-display text-xl font-semibold text-[var(--fg)]">
                {contact.mailtoCardTitle}
              </p>
              <p className="mt-3 text-[var(--muted)]">{contact.mailtoCardBody}</p>
              <div className="mt-6">
                <Button href={`mailto:${profile.email}?subject=Hello%20from%20your%20portfolio`}>
                  <Mail size={16} aria-hidden />
                  Email {profile.firstName}
                </Button>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
