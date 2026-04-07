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

export const site = {
  name: "Muhammad Abbas Khan",
  title: "Full Stack Developer",
  tagline:
    "Full Stack Developer with experience building scalable web apps using React, Next.js, TypeScript, Node.js, and cloud tooling.",
  location: "Remote (CET-friendly)",
  availability: "Available for freelance",
  email: "mabbask440@gmail.com",
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
    slug: "surveillance-system",
    title: "Surveillance System Designer",
    tagline:
      "A sophisticated surveillance system design software utilizing canvas, D3.js, and Skia for precise layout planning.",
    stack: ["React", "Canvas", "D3.js", "Skia"],
    featured: true,
    details: {
      overview:
        "Advanced surveillance system design software that enables users to create and manage complex security layouts.",
      challenges:
        "Implementing precise drawing tools and handling complex geometric calculations in real-time.",
      solutions:
        "Utilized Canvas API and D3.js for rendering, with Skia for high-performance graphics processing.",
      technologies: ["React", "Canvas API", "D3.js", "Skia", "TypeScript", "WebGL"],
      features: [
        "Interactive layout designer",
        "Real-time rendering",
        "Camera placement optimization",
        "Coverage analysis",
        "Export to CAD formats",
      ],
    },
    role: "Full‑stack",
  },
  {
    slug: "aesthetic-crm",
    title: "Aesthetic Company CRM",
    tagline:
      "A comprehensive CRM system for aesthetic companies with appointment management and client tracking.",
    stack: ["Next.js", "TypeScript", "Redux", "React Big Calendar"],
    featured: true,
    details: {
      overview:
        "Full-featured CRM system designed specifically for aesthetic companies to manage clients and appointments.",
      challenges:
        "Complex state management and real-time calendar synchronization across multiple users.",
      solutions:
        "Implemented Redux for state management and React Big Calendar for appointment handling.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux",
        "React Big Calendar",
        "TailwindCSS",
      ],
      features: [
        "Appointment scheduling",
        "Client management",
        "Treatment tracking",
        "Inventory management",
        "Reports and analytics",
      ],
    },
    role: "Full‑stack",
  },
  {
    slug: "hospital-management",
    title: "Hospital Management System",
    tagline:
      "A comprehensive HMS for FGPC hospital with patient management and appointment scheduling.",
    stack: ["JavaScript", "React", "Node.js"],
    featured: false,
    details: {
      overview:
        "Complete hospital management system with features for patient records, appointments, and staff management.",
      challenges:
        "Managing complex workflows and ensuring data security for sensitive medical information.",
      solutions:
        "Implemented role-based access control and efficient data structures for quick retrieval.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Patient records management",
        "Appointment scheduling",
        "Staff management",
        "Inventory tracking",
        "Billing system",
      ],
    },
    role: "Frontend",
  },
  {
    slug: "paragon-dashboard",
    title: "Paragon Interiors Admin Dashboard",
    tagline:
      "Admin dashboard for Paragon Interiors with inventory and order management.",
    stack: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
    featured: false,
    details: {
      overview:
        "Custom-built admin dashboard for Paragon Interiors to streamline inventory and order management.",
      challenges:
        "Integrating real-time data updates and ensuring responsive design across devices.",
      solutions:
        "Used React with TypeScript for type safety and Chart.js for data visualization.",
      technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js", "Axios"],
      features: [
        "Inventory tracking",
        "Order management",
        "Sales analytics",
        "User authentication",
        "Responsive design",
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
    position: "Full Stack Engineer",
    startDate: "Apr 2024",
    endDate: "Present",
    description:
      "Developed and optimized surveillance system design software and CRM solutions using advanced web technologies.",
    achievements: [
      "Developed surveillance system design software using Canvas, D3.js, and Skia",
      "Implemented complex geometric calculations for camera placement",
      "Created interactive drawing tools for system layout design",
      "Optimized rendering performance for large-scale systems",
      "Developed a CRM system for an aesthetic company using Next.js and TypeScript",
      "Managed state with Redux and handled appointments with React Big Calendar",
      "Collaborated in 2D/3D Flashing design software using Three.js and Canvas",
      "Implemented responsive and intuitive user interfaces",
    ],
  },
  {
    company: "Koncept Solutions International",
    position: "Frontend Developer",
    startDate: "Jul 2023",
    endDate: "Mar 2024",
    description:
      "Designed and developed business software and admin dashboards for various clients.",
    achievements: [
      "Built dashboards for clients including Paragon, Swati Autos, and Kashmir Builders",
      "Developed frontend applications for construction, hardware, and POS systems",
      "Implemented efficient state management and version control practices",
      "Ensured responsive and intuitive user interfaces across all projects",
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
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "JavaScript", level: 5, category: "frontend" },
  { name: "HTML/CSS", level: 5, category: "frontend" },
  { name: "Canvas API", level: 4, category: "frontend" },
  { name: "D3.js", level: 4, category: "frontend" },
  { name: "Three.js", level: 3, category: "frontend" },
  { name: "Redux", level: 4, category: "frontend" },
  { name: "Node.js", level: 3, category: "backend" },
  { name: "Express", level: 3, category: "backend" },
  { name: "MongoDB", level: 3, category: "backend" },
  { name: "REST APIs", level: 4, category: "backend" },
  { name: "AWS", level: 4, category: "tools" },
  { name: "AWS Amplify", level: 4, category: "tools" },
  { name: "Git", level: 4, category: "tools" },
  { name: "VS Code", level: 5, category: "tools" },
  { name: "Webpack", level: 3, category: "tools" },
  { name: "Problem Solving", level: 4, category: "other" },
  { name: "Team Collaboration", level: 4, category: "other" },
];

