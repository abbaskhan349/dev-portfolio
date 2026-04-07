export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
};

export const site = {
  name: "Clark Gil",
  title: "Full‑stack developer",
  tagline:
    "I build fast, minimal, high-contrast products—frontend polish, backend reliability, and thoughtful UX.",
  location: "Amsterdam, NL",
  availability: "Available for freelance",
  email: "hello@example.com",
  socials: [
    { label: "X", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "atlas-crm",
    title: "Atlas CRM",
    tagline: "A clean CRM that feels instant at scale.",
    year: "2026",
    role: "Full‑stack",
    stack: ["Next.js", "Postgres", "Redis", "tRPC"],
    highlights: [
      "Sub‑200ms interactions with optimistic UI.",
      "Role-based access with audit trails.",
      "Search that feels like a command palette.",
    ],
  },
  {
    slug: "noir-analytics",
    title: "Noir Analytics",
    tagline: "Metrics with zero noise.",
    year: "2025",
    role: "Frontend",
    stack: ["React", "D3", "Web Workers"],
    highlights: [
      "Streaming charts without frame drops.",
      "Accessible, keyboard-first dashboards.",
      "Export-ready reporting flows.",
    ],
  },
  {
    slug: "ledger-payments",
    title: "Ledger Payments",
    tagline: "A payments console built for operators.",
    year: "2024",
    role: "Backend",
    stack: ["Node.js", "Kafka", "Postgres"],
    highlights: [
      "Event-driven reconciliation pipeline.",
      "Idempotent APIs and safe retries.",
      "Observability from day one.",
    ],
  },
];

