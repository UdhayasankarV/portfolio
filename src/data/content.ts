/**
 * ============================================================
 * EDITABLE SITE CONTENT — update this file to change the site
 * ============================================================
 * Source of truth for copy. After Vercel deploy, set canonicalUrl
 * (and matching SEO files) to your live domain.
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
    "Software Engineer with experience in C#, ASP.NET Core, REST APIs, PostgreSQL, SQL Server, and MySQL. Based in Chennai, India. Currently building trading technology components with MetaTrader 5 integration.",
  canonicalUrl: "https://[ADD: your-vercel-or-custom-domain]",
  ogImage: "/images/profile.jpg",
  author: "Udhayasankar V",
  locale: "en_IN",
};

export const profile = {
  name: "Udhayasankar V",
  firstName: "Udhayasankar",
  role: "Software Engineer",
  location: "Chennai, India",
  email: "udhayasankar2002@gmail.com",
  phone: "+91 84890 03502",
  phoneHref: "tel:+918489003502",
  githubUrl: "https://github.com/UdhayasankarV",
  linkedinUrl: "https://www.linkedin.com/in/udhayasankar-v-11a126211/",
  resumePath: "/resume.pdf",
  photoPath: "/images/profile.jpg",
  photoAlt: "Portrait of Udhayasankar V, Software Engineer",
  /** Set to true only when you want the status chip shown in the hero */
  availableForOpportunities: false,
  shortIntro:
    "Software Engineer with experience in C#, .NET, and ASP.NET Core Web API. I design databases, build REST APIs, and integrate systems — including MetaTrader 5 trading components. I use Cursor daily with deliberate prompts and careful review.",
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
  tagline: "Software Engineer | Building Ideas into Software",
  greeting: "Hey!",
  waveEmoji: "👋",
  body: [
    "I'm a Software Engineer who enjoys turning ideas into practical software solutions. I love exploring technology, solving challenging problems, and building applications that make a difference.",
    "Always learning, experimenting, and creating — with a little help from AI-powered development along the way.",
  ],
  education: {
    degree: "Bachelor of Engineering (Electronics & Communication)",
    school: "Knowledge Institute of Technology, Salem",
    duration: "2019 – 2023",
  },
  highlights: [
    "C# · .NET 8 · ASP.NET Core",
    "PostgreSQL · SQL Server · MySQL",
    "JWT · REST APIs · Swagger",
    "MT5 trading integrations",
  ],
};

export const skills: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages & frameworks",
    icon: "code",
    skills: [
      "C#",
      "SQL",
      "JavaScript",
      "C",
      ".NET 8",
      "ASP.NET Core",
      "ASP.NET Core Web API",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "Dapper",
      "LINQ",
      "React JS",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    skills: [
      "PostgreSQL",
      "SQL Server",
      "MySQL",
      "Database design",
      "SQL query optimization",
      "Migrations",
    ],
  },
  {
    id: "api",
    title: "API, security & backend",
    icon: "api",
    skills: [
      "REST APIs",
      "Async/Await",
      "JWT",
      "Role-based authorization",
      "Swagger / OpenAPI",
      "API integration",
      "Validation",
      "Exception handling",
      "Postman",
    ],
  },
  {
    id: "practices",
    title: "Architecture & practices",
    icon: "wrench",
    skills: [
      "OOP",
      "SOLID",
      "Dependency Injection",
      "Design patterns",
      "Repository pattern",
      "Modular architecture",
      "Microservices",
      "Agile / Scrum",
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
    title: "Integrations & tools",
    icon: "tools",
    skills: [
      "MetaTrader 5 (MT5)",
      "SAP integration",
      "QuickBooks integration",
      "SignalR",
      "IIS",
      "GitLab",
      "Visual Studio",
      "VS Code",
      "pgAdmin",
      "SSMS",
      "DBeaver",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "aetram",
    company: "Aetram Infotech Pvt Ltd",
    role: "Software Engineer",
    duration: "Aug 2026 – Present",
    location: "Chennai, India",
    bullets: [
      "Develop backend components for Aetram Trades, a trading technology platform integrated with MetaTrader 5 (MT5).",
      "Built Dynamic Leverage functionality to evaluate open positions, apply account leverage rules, and support margin-related updates through MT5 integration.",
      "Built Swap Engine logic using symbol, trade direction, swap rate, holding duration, free-holding days, and chargeable days.",
      "Implemented position-event processing, validation, diagnostics, and detailed logging for trading calculations and troubleshooting.",
      "Worked on performance optimization for MT5 leverage and margin update processing and validated multiple-symbol and multiple-position scenarios.",
    ],
  },
  {
    id: "hakuna",
    company: "Hakuna Matata Solutions Pvt Ltd",
    role: "Software Engineer",
    duration: "June 2023 – July 2026",
    location: "Chennai, India",
    bullets: [
      "Developed and maintained RESTful APIs using ASP.NET Core for multiple applications, including an internal survey tool, tailoring system, online auction platform, and dealer management system.",
      "Optimized SQL queries and database access in MySQL and PostgreSQL using Dapper and Entity Framework Core, improving application performance and stability.",
      "Implemented JWT authentication, role-based authorization, real-time bidding, dynamic watchlists, and payment processing modules for secure transaction workflows.",
      "Collaborated with QA teams for end-to-end testing, prepared technical specifications, and reviewed validation scenarios for feature accuracy.",
      "Managed database schema design, version-controlled migrations, and API versioning to support scalable feature delivery.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "dynamic-leverage",
    name: "Dynamic Leverage",
    summary:
      "Trading backend module that evaluates open positions, applies account leverage rules, and supports margin-related updates through MetaTrader 5 integration.",
    problem:
      "Leverage and margin updates needed reliable rule evaluation across multiple symbols and positions with clear diagnostics.",
    role: "Software Engineer — backend development (.NET stack)",
    tech: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "ASP.NET Core Web API",
      "MetaTrader 5 (MT5)",
      "Async/Await",
    ],
    features: [
      "Open-position evaluation and leverage rule application",
      "Margin-related updates via MT5 integration",
      "Validation, diagnostics, and logging for trading calculations",
      "Performance work for multi-symbol and multi-position scenarios",
    ],
  },
  {
    id: "monitoring-app",
    name: "Monitoring Application",
    summary:
      "Internal monitoring system that watches company applications, servers, MT5, and integrations, then alerts the right team when something goes down or fails.",
    problem:
      "When application servers, MetaTrader 5, or other integrations failed, teams needed a clear way to detect issues early and notify the people responsible.",
    role: "Software Engineer — designed and built the application",
    tech: [
      "ASP.NET Core Web API 10",
      "ASP.NET Core MVC",
      "C#",
      "SQL Server",
      ".NET",
    ],
    features: [
      "Monitors company applications and related services",
      "Detects server downtime and MT5 / integration failures",
      "Captures issue details for troubleshooting",
      "Shares alerts with the concerned team",
    ],
  },
  {
    id: "isteel",
    name: "ISTEEL — Dealer Management Application",
    summary:
      "ASP.NET Core dealer management platform with SAP and PostgreSQL for onboarding, orders, payments, and operations.",
    problem:
      "Dealers needed a reliable system for onboarding, order placement, payments, and day-to-day business operations tied into SAP.",
    role: "Software Engineer — backend development and enhancement",
    tech: ["ASP.NET Core", "PostgreSQL", "SAP integration", "REST APIs"],
    features: [
      "Dealer onboarding workflows",
      "Order placement and payment workflows",
      "SAP-integrated business operations support",
    ],
  },
  {
    id: "auction",
    name: "Online Auction Platform",
    summary:
      "Scalable ASP.NET Core and MySQL backend for high-traffic auction operations with real-time bidding.",
    problem:
      "Auction operations needed secure auth, real-time bidding, payments, and watchlists under high traffic.",
    role: "Software Engineer — backend system development",
    tech: ["ASP.NET Core", "MySQL", "JWT", "Real-time bidding"],
    features: [
      "Real-time bidding",
      "Secure authentication",
      "Payment processing",
      "Dynamic watchlists",
    ],
  },
  {
    id: "senszio",
    name: "Senszio — Tailoring Management Application",
    summary:
      "Backend enhancements for a tailoring management application using .NET Core, PostgreSQL, and Dapper.",
    problem:
      "Existing workflow modules and APIs needed bug fixes, clearer workflows, and better async performance.",
    role: "Software Engineer — backend features, bug fixes, API optimization",
    tech: [".NET Core 3.1", "PostgreSQL", "Dapper", "Async/Await"],
    features: [
      "Enhanced backend workflow modules",
      "Bug resolution and maintenance",
      "API optimization with async/await",
    ],
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
    "Open to conversations about software engineering roles, collaborations, and interesting problems. Reach out by email, phone, or connect on GitHub and LinkedIn.",
  mailtoCardTitle: "Send a message",
  mailtoCardBody:
    "The fastest way to reach me is email. Use the button below and I’ll get back to you as soon as I can.",
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

export const footer = {
  note: "Built with care — Engineer’s Workbench.",
};

/**
 * Remaining placeholders
 * ---------------------
 * siteMeta.canonicalUrl — set after Vercel gives you a live URL
 * Also update index.html, public/robots.txt, public/sitemap.xml
 * Optional: profile.availableForOpportunities = true
 * Optional: VITE_FORMSPREE_ENDPOINT for on-site contact form
 */
