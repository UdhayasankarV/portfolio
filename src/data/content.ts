/**
 * ============================================================
 * EDITABLE SITE CONTENT — update this file to change the site
 * ============================================================
 * Placeholders are marked as [ADD: ...]. Fill them, commit, push;
 * Vercel redeploys automatically.
 */

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type SkillCategory = {
  id: string;
  title: string;
  icon: "code" | "database" | "api" | "wrench" | "sparkles" | "tools";
  skills: string[];
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  bullets: string[];
  isPlaceholder?: boolean;
};

export type ProjectItem = {
  id: string;
  name: string;
  summary: string;
  problem: string;
  role: string;
  tech: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPlaceholder?: boolean;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
};

export const siteMeta = {
  title: "Udhayasankar V — Software Engineer",
  description:
    "Software Engineer based in Salem, India. Builds applications with C# and ASP.NET Core Web API, works with SQL Server and PostgreSQL, and uses AI-assisted development with Cursor.",
  canonicalUrl: "https://[ADD: your-vercel-or-custom-domain]",
  ogImage: "/images/profile.jpg",
  author: "Udhayasankar V",
  locale: "en_IN",
};

export const profile = {
  name: "Udhayasankar V",
  firstName: "Udhayasankar",
  role: "Software Engineer",
  location: "Salem, India",
  email: "udhayasanklar2002@gmail.com",
  githubUrl: "https://github.com/vudhayasankar",
  linkedinUrl: "https://www.linkedin.com/in/udhayasankar-v-11a126211/",
  resumePath: "/resume.pdf",
  photoPath: "/images/profile.jpg",
  photoAlt: "Portrait of Udhayasankar V, Software Engineer",
  /** Set to true only when you want the status chip shown in the hero */
  availableForOpportunities: false,
  shortIntro:
    "I build and maintain applications with C# and ASP.NET Core Web API, design and integrate SQL Server and PostgreSQL databases, and ship clear REST APIs. I use AI-assisted development every day — especially Cursor — with deliberate prompts and careful review.",
};

export const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "ai", label: "AI Workflow", href: "#ai" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const about = {
  heading: "About",
  body: [
    "Software Engineer with hands-on experience building and maintaining applications with C# and ASP.NET Core Web API. I work with SQL Server and PostgreSQL for database design, development and integration, build REST APIs, and enjoy debugging and solving practical problems.",
    "I use AI-assisted development in my daily workflow, with deliberate prompt design and advanced use of Cursor AI for coding, debugging, code analysis and productivity.",
  ],
  highlights: [
    "C# & ASP.NET Core Web API",
    "SQL Server & PostgreSQL",
    "REST API design",
    "AI-assisted development (Cursor)",
  ],
};

export const skills: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages & frameworks",
    icon: "code",
    skills: [
      "C#",
      "ASP.NET Core Web API",
      "[ADD: JavaScript/TypeScript, React if applicable]",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "Schema design",
      "Queries & integration",
    ],
  },
  {
    id: "api",
    title: "API & backend",
    icon: "api",
    skills: [
      "REST API design & development",
      "Authentication [ADD if applicable]",
      "Swagger / OpenAPI",
    ],
  },
  {
    id: "practices",
    title: "Engineering practices",
    icon: "wrench",
    skills: [
      "Problem-solving",
      "Debugging",
      "Code analysis",
      "Git & GitHub",
    ],
  },
  {
    id: "ai",
    title: "AI-assisted development",
    icon: "sparkles",
    skills: [
      "Cursor AI (advanced usage)",
      "Prompt engineering & design",
      "AI-assisted debugging",
      "AI-assisted code review",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "tools",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio / VS Code",
      "Postman",
      "Swagger",
      "[ADD others]",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "placeholder-1",
    company: "[ADD: Company name]",
    role: "[ADD: Role title]",
    duration: "[ADD: Start – End, e.g. Jan 2023 – Present]",
    location: "[ADD: City, Country]",
    bullets: [
      "[ADD: Factual responsibility or outcome — what you built or owned]",
      "[ADD: Factual responsibility or outcome — APIs, databases, features]",
      "[ADD: Factual responsibility or outcome — collaboration or process]",
    ],
    isPlaceholder: true,
  },
];

export const projects: ProjectItem[] = [
  {
    id: "placeholder-1",
    name: "[ADD: Project name]",
    summary: "[ADD: One-line summary of what the project does]",
    problem: "[ADD: The problem this project addresses]",
    role: "[ADD: Your role — e.g. Solo developer / Backend contributor]",
    tech: ["[ADD: Tech 1]", "[ADD: Tech 2]", "[ADD: Tech 3]"],
    features: [
      "[ADD: Key feature 1]",
      "[ADD: Key feature 2]",
      "[ADD: Key feature 3]",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    name: "[ADD: Project name]",
    summary: "[ADD: One-line summary of what the project does]",
    problem: "[ADD: The problem this project addresses]",
    role: "[ADD: Your role]",
    tech: ["[ADD: Tech 1]", "[ADD: Tech 2]"],
    features: ["[ADD: Key feature 1]", "[ADD: Key feature 2]"],
    githubUrl: undefined,
    liveUrl: undefined,
    isPlaceholder: true,
  },
];

export const aiDevelopment = {
  heading: "AI-assisted development",
  intro:
    "AI is part of how I work every day — not as a shortcut past understanding, but as a force multiplier I keep under review. Cursor accelerates exploration and drafting; I still read, test, and own every line that ships.",
  howIUse: {
    title: "How I use Cursor AI",
    items: [
      "Code analysis across unfamiliar modules and stacks",
      "Debugging with shared context from errors and surrounding code",
      "Refactoring for clarity while preserving behaviour",
      "Writing and refining tests",
      "Exploring unfamiliar codebases before changing them",
    ],
  },
  promptApproach: {
    title: "Prompt engineering approach",
    items: [
      "Give context — stack, constraints, and relevant files",
      "Set constraints — what must not change, style, boundaries",
      "Define the expected output — format, scope, acceptance",
      "Iterate, then verify against tests and review",
    ],
  },
  principle: {
    title: "Human-in-the-loop",
    body: "AI accelerates the work. I review, test, and own every line of code before it reaches production.",
  },
  workflow: [
    {
      step: "01",
      title: "Context",
      description: "Share the problem, stack, and the files that matter.",
    },
    {
      step: "02",
      title: "Prompt",
      description: "State constraints and the shape of a good answer.",
    },
    {
      step: "03",
      title: "Review",
      description: "Read the diff, run tests, and challenge assumptions.",
    },
    {
      step: "04",
      title: "Ship",
      description: "Integrate only what you understand and stand behind.",
    },
  ],
};

export const contact = {
  heading: "Contact",
  intro:
    "Open to conversations about software engineering roles, collaborations, and interesting problems. Reach out by email or connect on GitHub and LinkedIn.",
  /** Optional Formspree endpoint — leave empty to use mailto only */
  formspreeEndpointEnv: "VITE_FORMSPREE_ENDPOINT",
};

export const socialLinks: SocialLink[] = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "email",
  },
  {
    id: "github",
    label: "GitHub",
    href: profile.githubUrl,
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.linkedinUrl,
    icon: "linkedin",
  },
];

export const heroCodeCard = {
  method: "GET",
  path: "/api/engineer",
  response: {
    name: profile.name,
    role: profile.role,
    location: profile.location,
    stack: ["C#", "ASP.NET Core", "SQL Server", "PostgreSQL"],
  },
};

export const footer = {
  note: "Built with care — Engineer’s Workbench.",
};

/**
 * PLACEHOLDER INDEX (fill these, then remove [ADD:] markers)
 * ----------------------------------------------------------
 * siteMeta.canonicalUrl — your live domain
 * skills[languages] — JS/TS/React if applicable
 * skills[api] — authentication details if applicable
 * skills[tools] — other tools
 * experience[0] — company, role, duration, location, 3–5 bullets
 * projects[0], projects[1] — (and add 3rd/4th if needed) full case-study fields
 * Optional: profile.availableForOpportunities = true
 * Optional: VITE_FORMSPREE_ENDPOINT in .env for contact form
 */
