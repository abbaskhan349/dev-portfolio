export type Project = {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  featured: boolean;
  details: {
    overview: string;
    challenges: string;
    solutions: string;
    technologies: string[];
    features: string[];
  };
  year?: string;
  role?: string;
  demoUrl?: string;
  githubUrl?: string;
  images?: { src: string; label: string }[];
};

export type Education = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
};

export type Skill = {
  name: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tools" | "other";
};

export type Certification = {
  name: string;
  issuer: string;
  date: string;
};

export const site = {
  name: "Muhammad Abbas Khan",
  title: "Full Stack Developer",
  tagline:
    "Full Stack Developer with 3+ years of experience specializing in React, Node.js, and TypeScript, delivering enterprise CRM platforms, 2D/3D design tools, and multi-site workforce management systems for UK and US-based clients.",
  location: "Remote (CET-friendly)",
  availability: "Available for freelance",
  email: "mabbask440@gmail.com",
  phone: "+92 309 9794981",
  socials: [
    { label: "GitHub", href: "https://github.com/abbaskhan349" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-abbas-dev/" },
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
    slug: "cm-agri",
    title: "CM Central (CM Agri)",
    tagline:
      "A poultry farm management platform with drag-and-drop layout planning, field reporting, and scheduling.",
    stack: ["React", "TypeScript", "TailwindCSS", ".NET", "MySQL", "Azure"],
    featured: true,
    demoUrl: "https://cmagri.azurewebsites.net/",
    details: {
      overview:
        "Poultry farm management platform designed to streamline planning, reporting, and scheduling using an intuitive drag-and-drop interface, enabling farm managers to visualize layouts, track field activities, and manage operational calendars.",
      challenges:
        "Building a real-time drag-and-drop layout designer and keeping field reporting and calendar-based scheduling in sync across supervisors and field staff.",
      solutions:
        "Built a drag-and-drop farm layout designer with real-time rendering, a field reporting module with photo attachments, and a calendar-integrated task manager, backed by a .NET REST API with JWT auth and Formik/Yup validation.",
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        ".NET",
        "MySQL",
        "Azure",
        "AWS Amplify",
        "JWT",
      ],
      features: [
        "Drag-and-drop farm layout designer with real-time rendering",
        "Field reporting with status updates and photo attachments",
        "Calendar-integrated task management (feed schedules, vaccinations)",
        "Role-based access for supervisors and field staff",
      ],
    },
    role: "Full‑stack",
  },
  {
    slug: "heathways-foods",
    title: "Heathways Foods",
    tagline:
      "A UK food delivery e-commerce platform with order pipelines, delivery scheduling, and inventory tracking.",
    stack: ["React", "Next.js", "Node.js", "MongoDB"],
    featured: false,
    details: {
      overview:
        "E-commerce platform for Heathways Foods, a UK-based food delivery service, covering order pipelines, delivery scheduling, and inventory tracking.",
      challenges:
        "Keeping delivery schedules and inventory levels accurate as order volume fluctuates throughout the day.",
      solutions:
        "Maintained and extended the order pipeline, delivery scheduling, and inventory tracking modules for reliability at scale.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "REST APIs"],
      features: [
        "Order pipeline management",
        "Delivery scheduling",
        "Inventory tracking",
        "Responsive storefront UI",
      ],
    },
    role: "Full‑stack (maintenance)",
  },
  {
    slug: "myvms",
    title: "myVMS (Visitor Management System)",
    tagline:
      "A digital visitor and employee check-in platform with customizable forms and branded workflows.",
    stack: ["React", "Material-UI", ".NET", "PostgreSQL", "Firebase"],
    featured: true,
    demoUrl: "https://mydis.myvms.farm",
    details: {
      overview:
        "Digital check-in solution for organizations to securely manage visitors and employees, offering customizable forms, branded interfaces, and automated workflows to replace paper-based logs.",
      challenges:
        "Supporting per-tenant branding and conditional check-in logic while keeping notifications and access rules configurable without code changes.",
      solutions:
        "Built customizable check-in forms with conditional logic, dynamic email templates, rule-based access workflows, and an audit trail dashboard, using Firebase Cloud Messaging for host notifications.",
      technologies: [
        "React",
        "Material-UI",
        "Formik",
        ".NET",
        "PostgreSQL",
        "AWS Amplify",
        "Firebase Cloud Messaging",
        "JWT",
      ],
      features: [
        "Customizable check-in forms with conditional logic",
        "Dynamic email templates and host notifications",
        "Per-tenant branding (logo, colors, domain themes)",
        "Rule-based access control and routing workflows",
        "Audit trail and visitor history dashboard",
      ],
    },
    role: "Full‑stack",
  },
  {
    slug: "aurora-identity",
    title: "Aurora Identity",
    tagline:
      "A secure identity and access management dashboard with SSO, subscriptions, and RBAC.",
    stack: ["React", "Next.js", "Node.js", "GraphQL", "Stripe", "MongoDB"],
    featured: true,
    demoUrl: "https://id.auroranexus.ai",
    details: {
      overview:
        "Secure identity and access management system allowing users to view company applications, subscribe to service plans, and manage payments from a centralized dashboard.",
      challenges:
        "Integrating SSO across multiple identity providers and tying subscription billing state to role-based access control with full audit trails.",
      solutions:
        "Implemented centralized SSO login (Google, Microsoft), Stripe-backed subscription billing, and RBAC with audit trails, on a Node.js/GraphQL backend.",
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Radix UI",
        "Node.js",
        "Express",
        "GraphQL",
        "JWT",
        "Stripe",
        "MongoDB",
        "AWS Amplify",
      ],
      features: [
        "Centralized login with SSO support (Google, Microsoft)",
        "Subscription management via Stripe billing",
        "Role-based access control with audit trails",
        "App directory for internal SaaS visibility",
        "Secure session management and password recovery",
      ],
    },
    role: "Full‑stack",
  },
  {
    slug: "surveillance-system",
    title: "Digital Security Planner",
    tagline:
      "An interactive 2D canvas tool for designing surveillance system layouts, camera placement, and coverage zones.",
    stack: ["React", "Canvas API", "D3.js", "React Native Skia", "Redux"],
    featured: true,
    details: {
      overview:
        "Interactive 2D canvas tool for designing surveillance system layouts, letting security professionals place cameras, define coverage zones, and generate technical proposals. Currently at MVP stage.",
      challenges:
        "Implementing precise drawing tools and real-time geometric coverage calculations, while keeping rendering performant on both web and mobile.",
      solutions:
        "Built a custom rendering engine on Canvas API and D3.js with SVG overlays, used React Native Skia for mobile support, Redux for state, and reactflow for node-based layout editing.",
      technologies: [
        "React",
        "TypeScript",
        "Canvas API",
        "D3.js",
        "React Native Skia",
        "Redux",
        "reactflow",
        "TailwindCSS",
      ],
      features: [
        "Drag-and-drop camera placement on interactive canvas",
        "Visual coverage modeling using geometric overlays",
        "Exportable design reports and equipment lists",
        "Zoom, pan, and grid alignment for precision",
        "Mobile support via React Native Skia",
      ],
    },
    role: "Full‑stack",
  },
  {
    slug: "aesthetic-crm",
    title: "Venus Aesthetics CRM",
    tagline:
      "A full-featured CRM for aesthetic clinics with appointments, POS, accounting, and 2D/3D treatment planning.",
    stack: ["React", "Three.js", "Canvas API", "Redux", ".NET", "MySQL"],
    featured: true,
    demoUrl: "https://crm.venusaesthetics.pk/auth/login/",
    details: {
      overview:
        "Full-featured CRM for aesthetic clinics, integrating appointment scheduling, client records, POS, and accounting into one seamless platform.",
      challenges:
        "Synchronizing appointment calendars in real time across multiple users while supporting an immersive 2D/3D treatment planning workflow.",
      solutions:
        "Implemented Redux for state management, calendar-synced appointment booking with reminders, integrated POS and invoice generation, and a Three.js/Canvas-based 2D/3D visual design module for treatment planning.",
      technologies: [
        "React",
        "Three.js",
        "Canvas API",
        "Redux",
        "TailwindCSS",
        ".NET",
        "MySQL",
        "Stripe",
      ],
      features: [
        "Appointment booking with calendar sync and reminders",
        "Client profiles with treatment history and notes",
        "Integrated POS and invoice generation",
        "Financial reporting and accounting dashboard",
        "2D/3D visual design module for treatment planning",
      ],
    },
    role: "Full‑stack",
  },
  {
    slug: "lanza-jobs",
    title: "Lanza Jobs",
    tagline:
      "A local job marketplace with a web app, admin panel, and mobile app for employers and job seekers.",
    stack: ["React", "Next.js", "React Native", "Node.js", "MongoDB"],
    featured: false,
    demoUrl: "https://lanzajobs.nl/en",
    details: {
      overview:
        "Local job marketplace connecting employers and job seekers, featuring a web app, admin panel, and mobile application.",
      challenges:
        "Keeping job listings and candidate/employer profiles consistent across web and mobile clients while supporting offline use on mobile.",
      solutions:
        "Built a shared Node.js/Express API across a Next.js web app and a React Native mobile app with offline support and push notifications via Firebase.",
      technologies: [
        "React",
        "Next.js",
        "React Native",
        "React Native Skia",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase Auth",
        "AWS Amplify",
      ],
      features: [
        "Job posting and search with filters (location, category, experience)",
        "Employer and candidate profile management",
        "Admin dashboard for moderation and analytics",
        "Mobile app with push notifications and offline support",
      ],
    },
    role: "Full‑stack",
  },
  {
    slug: "hospital-management",
    title: "Hospital Management System",
    tagline:
      "A comprehensive HMS for FGPC hospital with patient records, appointments, billing, and reporting.",
    stack: ["React", "Material-UI", "Node.js", "PostgreSQL"],
    featured: false,
    details: {
      overview:
        "Hospital dashboard built for FGPC Hospital, Islamabad, to digitize patient registration, appointments, and billing processes, reducing wait times and improving administrative efficiency.",
      challenges:
        "Managing complex workflows across roles and ensuring data security for sensitive medical information.",
      solutions:
        "Implemented role-based dashboards (admin, nurse, doctor), automated billing and receipt generation, and a reporting module for daily operations.",
      technologies: [
        "React",
        "Material-UI",
        "Chart.js",
        "Node.js",
        "Express",
        "PostgreSQL",
      ],
      features: [
        "Patient registration and electronic health records (EHR)",
        "Doctor availability and appointment scheduling",
        "Automated billing and receipt generation",
        "Role-based staff dashboards (admin, nurse, doctor)",
        "Reporting module for daily operations",
      ],
    },
    role: "Frontend",
  },
  {
    slug: "grocery-dashboard",
    title: "Grocery Dashboard",
    tagline:
      "An inventory management system for grocery stores with real-time stock, sales, and supplier tracking.",
    stack: ["React", "TailwindCSS", "Node.js", "MongoDB"],
    featured: false,
    details: {
      overview:
        "Inventory management system built for ItechExperts, tailored for grocery stores, enabling real-time tracking of stock, sales, and supplier orders.",
      challenges:
        "Keeping stock levels accurate in real time and surfacing low-stock alerts without over-notifying staff.",
      solutions:
        "Built real-time inventory tracking with low-stock alerts, sales and purchase logging, and daily profit/loss reporting.",
      technologies: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Real-time inventory tracking with low-stock alerts",
        "Sales and purchase logging",
        "Supplier management and order tracking",
        "Daily reports and profit/loss summaries",
      ],
    },
    role: "Frontend",
  },
  {
    slug: "paragon-dashboard",
    title: "Paragon Dashboard",
    tagline:
      "Real estate project management dashboard built for Paragon while at Koncept Solutions International.",
    stack: ["React", "Material-UI", "TailwindCSS"],
    featured: false,
    details: {
      overview:
        "Custom frontend dashboard built for Paragon to manage real estate project progress, developed while working with Koncept Solutions International.",
      challenges:
        "Integrating a React frontend with a Laravel backend built by another developer, while keeping data tables and views performant.",
      solutions:
        "Built responsive UIs in React and Material-UI, integrated with Laravel-powered REST APIs, with role-based views and data tables.",
      technologies: ["React", "Material-UI", "TailwindCSS", "REST APIs", "JWT"],
      features: [
        "Project progress tracking",
        "Role-based views",
        "Data tables and charts",
        "Responsive, cross-browser UI",
      ],
    },
    role: "Frontend",
  },
  {
    slug: "swati-autos-dashboard",
    title: "Swati Autos Dashboard",
    tagline:
      "Auto parts inventory and sales tracking dashboard built while at Koncept Solutions International.",
    stack: ["React", "Material-UI", "TailwindCSS"],
    featured: false,
    details: {
      overview:
        "Custom frontend dashboard for Swati Autos to track auto parts inventory and sales, developed while working with Koncept Solutions International.",
      challenges:
        "Presenting large inventory datasets clearly while integrating with a Laravel backend maintained by another developer.",
      solutions:
        "Built responsive data tables and inventory views in React and Material-UI, integrated with Laravel-powered REST APIs.",
      technologies: ["React", "Material-UI", "TailwindCSS", "REST APIs", "JWT"],
      features: [
        "Auto parts inventory tracking",
        "Sales tracking",
        "Data tables and charts",
        "Responsive, cross-browser UI",
      ],
    },
    role: "Frontend",
  },
  {
    slug: "kashmir-builders-dashboard",
    title: "Kashmir Builders Dashboard",
    tagline:
      "Construction project progress tracker built while at Koncept Solutions International.",
    stack: ["React", "Material-UI", "TailwindCSS"],
    featured: false,
    details: {
      overview:
        "Custom frontend dashboard for Kashmir Builders to track construction project progress, developed while working with Koncept Solutions International.",
      challenges:
        "Modeling multi-stage construction progress in a way that's clear to non-technical stakeholders.",
      solutions:
        "Built progress-tracking views and reporting in React and Material-UI, integrated with Laravel-powered REST APIs.",
      technologies: ["React", "Material-UI", "TailwindCSS", "REST APIs", "JWT"],
      features: [
        "Construction project progress tracking",
        "Role-based views",
        "Data tables and charts",
        "Responsive, cross-browser UI",
      ],
    },
    role: "Frontend",
  },
  {
    slug: "mia-jee-fabrics-dashboard",
    title: "Mia Jee Fabrics Dashboard",
    tagline:
      "Order and stock management dashboard for a textile business, built while at Koncept Solutions International.",
    stack: ["React", "Material-UI", "TailwindCSS"],
    featured: false,
    details: {
      overview:
        "Custom frontend dashboard for Mia Jee Fabrics to manage orders and stock for a textile business, developed while working with Koncept Solutions International.",
      challenges:
        "Tracking stock and order state across a textile catalog while integrating with a Laravel backend built by another developer.",
      solutions:
        "Built order and stock management views in React and Material-UI, integrated with Laravel-powered REST APIs.",
      technologies: ["React", "Material-UI", "TailwindCSS", "REST APIs", "JWT"],
      features: [
        "Order management",
        "Stock management",
        "Data tables and charts",
        "Responsive, cross-browser UI",
      ],
    },
    role: "Frontend",
  },
  {
    slug: "awgroup-site",
    title: "AWGroup Website",
    tagline: "Corporate website for AWGroup with responsive design and CMS integration.",
    stack: ["React", "Next.js", "TailwindCSS", "Contentful"],
    featured: false,
    demoUrl: "https://awgroup.com.pk/",
    details: {
      overview:
        "Corporate website for AWGroup featuring responsive design and CMS integration for easy content updates.",
      challenges: "Ensuring fast load times and seamless CMS integration.",
      solutions: "Used Next.js for static site generation and Contentful for CMS.",
      technologies: ["React", "Next.js", "TailwindCSS", "Contentful", "GraphQL"],
      features: [
        "Responsive design",
        "CMS integration",
        "SEO optimization",
        "Contact forms",
        "Analytics integration",
      ],
    },
    role: "Frontend",
  },
  {
    slug: "shahtaj-site",
    title: "Shahtaj Sugar Mill",
    tagline:
      "E-commerce website for Shahtaj with product listings and payment gateway integration.",
    stack: ["React", "Next.js", "Stripe", "Sanity"],
    featured: false,
    demoUrl: "https://www.shahtajsugar.com/",
    details: {
      overview:
        "E-commerce website for Shahtaj featuring product listings and secure payment gateway integration.",
      challenges: "Ensuring secure transactions and smooth user experience.",
      solutions: "Used Stripe for payments and Sanity for CMS.",
      technologies: ["React", "Next.js", "Stripe", "Sanity", "TailwindCSS"],
      features: [
        "Product listings",
        "Shopping cart",
        "Secure payments",
        "User authentication",
        "Order tracking",
      ],
    },
    role: "Full‑stack",
  },
];

export const education: Education[] = [
  {
    institution: "University of Engineering and Technology Mardan",
    degree: "Bachelor of Science",
    field: "Computer Software Engineering",
    startDate: "2019",
    endDate: "2023",
    description:
      "Focused on software development, system architecture, algorithms, and cloud computing. Covered web and mobile development, databases, and scalable software solutions. Achieved a CGPA of 3.12.",
  },
];

export const experience: Experience[] = [
  {
    company: "Backendz",
    position: "Full Stack Developer",
    startDate: "Apr 2024",
    endDate: "Present",
    description:
      "Rawalpindi, Pakistan. Delivering enterprise CRM platforms, 2D/3D design tools, and workforce management systems for UK and US-based clients.",
    achievements: [
      "Led development of Venus Aesthetics CRM, streamlining appointment scheduling and client workflows for 500+ monthly bookings, boosting operational efficiency by 25%",
      "Built a React-based 2D/3D Flashing design tool using Three.js and Canvas, enabling immersive visual configuration workflows that reduced design errors by 15%",
      "Delivered MYDis (myVMS), a UK enterprise visitor management system handling dynamic check-in forms, rule-based workflows, and multi-site workforce tracking via the MyTNA workforce module",
      "Developed CM Agri, a drag-and-drop poultry farm management tool with real-time tracking and task scheduling, cutting manual oversight effort by ~30%",
      "Maintained Heathways Foods, a UK-based food delivery e-commerce platform, managing order pipelines, delivery scheduling, and inventory tracking",
    ],
  },
  {
    company: "Aurora Nexus",
    position: "Lead Full Stack Developer",
    startDate: "Oct 2024",
    endDate: "Present",
    description:
      "Virginia Beach, VA, USA (Remote). Leading development of a US security software product suite, from architecture through client-facing delivery.",
    achievements: [
      "Lead Developer for Digital Security Planner, a flagship SaaS platform for designing and planning physical security systems, with blueprint upload, drag-and-drop device placement, and section-level CCTV/access control layout tools",
      "Architected Aurora Identity, a centralized identity and subscription management system enabling secure sign-up, RBAC, activity tracking, and shared authentication across all Aurora Nexus products",
      "Lead client-facing meetings and manage the project roadmap",
      "Mentor junior developers on architecture decisions and implementation standards",
    ],
  },
  {
    company: "Koncept Solutions International",
    position: "Full Stack Developer",
    startDate: "Jul 2023",
    endDate: "Mar 2024",
    description:
      "Rawalpindi, Pakistan. Built and deployed end-to-end business applications and admin dashboards for 4+ clients.",
    achievements: [
      "Built and deployed end-to-end business applications and admin dashboards for 4+ clients, including Paragon, Swati Autos, Kashmir Builders, and Mia Jee Fabrics, cutting manual data entry by 80%",
      "Developed full-stack solutions for construction management, hardware inventory, and POS systems",
      "Implemented RBAC, server-side optimizations, and performance tuning that decreased average page load time by 35%",
    ],
  },
  {
    company: "FGPC Hospital",
    position: "Frontend Developer",
    startDate: "Jan 2023",
    endDate: "Jun 2023",
    description: "Developed Hospital Management System for FGPC hospital, Islamabad.",
    achievements: [
      "Developed comprehensive HMS system",
      "Implemented patient management features",
      "Created appointment scheduling system",
      "Designed responsive medical dashboard",
    ],
  },
  {
    company: "ItecExperts Pvt Ltd",
    position: "React Developer - Intern",
    startDate: "Aug 2022",
    endDate: "Oct 2022",
    description: "Developed admin management system for Italian-based Grocery store.",
    achievements: [
      "Built admin dashboard for inventory management",
      "Implemented user authentication and authorization",
      "Created order management system",
      "Developed product catalog management features",
    ],
  },
];

export const skills: Skill[] = [
  { name: "React", level: 5, category: "frontend" },
  { name: "Next.js", level: 5, category: "frontend" },
  { name: "TypeScript", level: 5, category: "frontend" },
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Angular", level: 3, category: "frontend" },
  { name: "Vue.js", level: 3, category: "frontend" },
  { name: "Three.js", level: 4, category: "frontend" },
  { name: "D3.js", level: 4, category: "frontend" },
  { name: "Canvas API", level: 4, category: "frontend" },
  { name: "Redux", level: 4, category: "frontend" },
  { name: "TailwindCSS", level: 5, category: "frontend" },
  { name: "Shadcn UI", level: 4, category: "frontend" },
  { name: "Material-UI", level: 4, category: "frontend" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express.js", level: 4, category: "backend" },
  { name: "GraphQL", level: 3, category: "backend" },
  { name: "REST APIs", level: 5, category: "backend" },
  { name: "PostgreSQL", level: 4, category: "backend" },
  { name: "MongoDB", level: 4, category: "backend" },
  { name: "MySQL", level: 4, category: "backend" },
  { name: "DynamoDB", level: 3, category: "backend" },
  { name: "Redis", level: 3, category: "backend" },
  { name: "Apache Kafka", level: 2, category: "backend" },
  { name: "Supabase", level: 3, category: "backend" },
  { name: "AWS", level: 4, category: "tools" },
  { name: "AWS Amplify", level: 4, category: "tools" },
  { name: "Docker", level: 3, category: "tools" },
  { name: "Kubernetes", level: 2, category: "tools" },
  { name: "CI/CD", level: 4, category: "tools" },
  { name: "Amazon S3", level: 4, category: "tools" },
  { name: "Firebase", level: 4, category: "tools" },
  { name: "Azure DevOps", level: 3, category: "tools" },
  { name: "Git", level: 5, category: "tools" },
  { name: "Problem Solving", level: 5, category: "other" },
  { name: "Team Collaboration", level: 5, category: "other" },
  { name: "Mentoring", level: 4, category: "other" },
];

export const certifications: Certification[] = [
  {
    name: "Meta Front-End Developer Certificate",
    issuer: "Coursera",
    date: "Feb 2024",
  },
];

