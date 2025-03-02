// export type Project = {
//   id: string
//   title: string
//   description: string
//   image: string
//   tags: string[]
//   demoUrl?: string
//   githubUrl?: string
//   featured: boolean
//   details: {
//     overview: string
//     challenges: string
//     solutions: string
//     technologies: string[]
//     features: string[]
//     images: string[]
//   }
// }

// export type Education = {
//   institution: string
//   degree: string
//   field: string
//   startDate: string
//   endDate: string
//   description: string
// }

// export type Experience = {
//   company: string
//   position: string
//   startDate: string
//   endDate: string
//   description: string
//   achievements: string[]
// }

// export type Skill = {
//   name: string
//   level: number // 1-5
//   category: "frontend" | "backend" | "tools" | "other"
// }

// export const projects: Project[] = [
//   {
//     id: "ecommerce-platform",
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
//     image: "/placeholder.svg?height=600&width=800",
//     tags: ["React", "Node.js", "MongoDB", "Stripe"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     featured: true,
//     details: {
//       overview:
//         "This e-commerce platform provides businesses with a complete solution for selling products online. It includes product management, inventory tracking, shopping cart functionality, and secure payment processing.",
//       challenges:
//         "Implementing a secure payment system and ensuring real-time inventory updates across multiple concurrent sessions were the main challenges.",
//       solutions:
//         "I integrated Stripe for secure payments and implemented WebSockets for real-time inventory updates. The application uses optimistic UI updates with server validation to provide a responsive experience.",
//       technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API", "WebSockets", "Docker"],
//       features: [
//         "User authentication and profiles",
//         "Product catalog with search and filtering",
//         "Shopping cart and wishlist",
//         "Secure checkout with Stripe",
//         "Order history and tracking",
//         "Admin dashboard for product and order management",
//       ],
//       images: [
//         "/placeholder.svg?height=600&width=800",
//         "/placeholder.svg?height=600&width=800",
//         "/placeholder.svg?height=600&width=800",
//       ],
//     },
//   },
//   {
//     id: "task-management-app",
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates and team features.",
//     image: "/placeholder.svg?height=600&width=800",
//     tags: ["React", "Firebase", "Tailwind CSS"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     featured: true,
//     details: {
//       overview:
//         "This task management application helps teams organize and track their work. It features real-time updates, task assignments, due dates, and progress tracking.",
//       challenges:
//         "Creating a responsive UI that works well on all devices while maintaining real-time synchronization between team members was challenging.",
//       solutions:
//         "I used Firebase Realtime Database for instant data synchronization and implemented a responsive design with Tailwind CSS that adapts to different screen sizes. The application uses React context for state management and custom hooks for Firebase interactions.",
//       technologies: ["React", "Firebase", "Tailwind CSS", "React DnD", "React Router", "Jest"],
//       features: [
//         "Drag-and-drop task organization",
//         "Real-time collaboration",
//         "Task assignments and due dates",
//         "Comment threads on tasks",
//         "File attachments",
//         "Customizable workflows",
//       ],
//       images: [
//         "/placeholder.svg?height=600&width=800",
//         "/placeholder.svg?height=600&width=800",
//         "/placeholder.svg?height=600&width=800",
//       ],
//     },
//   },
//   {
//     id: "fitness-tracker",
//     title: "Fitness Tracker",
//     description: "A mobile-first fitness tracking application with workout plans and progress visualization.",
//     image: "/placeholder.svg?height=600&width=800",
//     tags: ["React Native", "GraphQL", "TypeScript"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     featured: false,
//     details: {
//       overview:
//         "This fitness tracking application helps users monitor their workouts, track progress, and follow customized fitness plans. It provides visual representations of progress and personalized recommendations.",
//       challenges:
//         "Designing an intuitive interface for complex fitness data and ensuring accurate tracking across different workout types was challenging.",
//       solutions:
//         "I implemented a modular architecture with TypeScript for type safety and used GraphQL for efficient data fetching. The app uses SVG-based charts for data visualization and implements a custom animation system for interactive elements.",
//       technologies: ["React Native", "TypeScript", "GraphQL", "Apollo Client", "D3.js", "Jest", "Detox"],
//       features: [
//         "Customizable workout plans",
//         "Progress tracking with visual charts",
//         "Exercise library with video demonstrations",
//         "Nutrition tracking and recommendations",
//         "Social sharing and challenges",
//         "Offline support",
//       ],
//       images: [
//         "/placeholder.svg?height=600&width=800",
//         "/placeholder.svg?height=600&width=800",
//         "/placeholder.svg?height=600&width=800",
//       ],
//     },
//   },
//   {
//     id: "weather-dashboard",
//     title: "Weather Dashboard",
//     description: "A weather dashboard with location-based forecasts and interactive maps.",
//     image: "/placeholder.svg?height=600&width=800",
//     tags: ["JavaScript", "APIs", "CSS"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     featured: false,
//     details: {
//       overview:
//         "This weather dashboard provides users with current weather conditions and forecasts for any location. It features interactive maps, severe weather alerts, and historical weather data.",
//       challenges:
//         "Integrating multiple weather APIs with different data formats and ensuring accurate location-based forecasts was challenging.",
//       solutions:
//         "I created a unified data model that normalizes information from different APIs and implemented a geolocation service with fallback options. The application uses a caching layer to reduce API calls and improve performance.",
//       technologies: ["JavaScript", "OpenWeatherMap API", "Mapbox", "Chart.js", "Geolocation API", "LocalStorage"],
//       features: [
//         "Current conditions and 7-day forecast",
//         "Interactive weather maps",
//         "Location search and favorites",
//         "Weather alerts and notifications",
//         "Historical weather data",
//         "Offline access to recent forecasts",
//       ],
//       images: [
//         "/placeholder.svg?height=600&width=800",
//         "/placeholder.svg?height=600&width=800",
//         "/placeholder.svg?height=600&width=800",
//       ],
//     },
//   },
// ]

// export const education: Education[] = [
//   {
//     institution: "University of Technology",
//     degree: "Master of Science",
//     field: "Computer Science",
//     startDate: "2018",
//     endDate: "2020",
//     description:
//       "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Neural Networks for Natural Language Processing'.",
//   },
//   {
//     institution: "State University",
//     degree: "Bachelor of Science",
//     field: "Software Engineering",
//     startDate: "2014",
//     endDate: "2018",
//     description:
//       "Graduated with honors. Participated in multiple hackathons and coding competitions. Led the university's web development club.",
//   },
// ]

// export const experience: Experience[] = [
//   {
//     company: "Tech Innovations Inc.",
//     position: "Senior Frontend Developer",
//     startDate: "2021",
//     endDate: "Present",
//     description:
//       "Lead the frontend development team in building and maintaining modern web applications. Collaborate with designers and backend developers to implement new features and improve user experience.",
//     achievements: [
//       "Reduced application load time by 40% through code optimization and lazy loading",
//       "Implemented a component library that increased development speed by 30%",
//       "Led the migration from Angular to React, improving performance and developer productivity",
//       "Mentored junior developers and conducted code reviews",
//     ],
//   },
//   {
//     company: "Digital Solutions LLC",
//     position: "Full Stack Developer",
//     startDate: "2018",
//     endDate: "2021",
//     description:
//       "Developed and maintained web applications for clients in various industries. Worked on both frontend and backend aspects of projects using modern technologies and best practices.",
//     achievements: [
//       "Built a custom e-commerce platform that increased client sales by 25%",
//       "Implemented automated testing that reduced bugs in production by 60%",
//       "Developed a real-time notification system using WebSockets",
//       "Created a custom CMS that improved content management efficiency by 45%",
//     ],
//   },
//   {
//     company: "StartUp Ventures",
//     position: "Junior Web Developer",
//     startDate: "2016",
//     endDate: "2018",
//     description:
//       "Assisted in the development of web applications and websites for early-stage startups. Worked closely with founders to implement features and fix bugs.",
//     achievements: [
//       "Developed responsive websites for 10+ clients",
//       "Implemented SEO best practices that improved client search rankings",
//       "Created a reusable template system that reduced development time by 20%",
//       "Contributed to the company's internal tool for project management",
//     ],
//   },
// ]

// export const skills: Skill[] = [
//   { name: "JavaScript", level: 5, category: "frontend" },
//   { name: "TypeScript", level: 4, category: "frontend" },
//   { name: "React", level: 5, category: "frontend" },
//   { name: "Next.js", level: 4, category: "frontend" },
//   { name: "HTML/CSS", level: 5, category: "frontend" },
//   { name: "Tailwind CSS", level: 4, category: "frontend" },
//   { name: "Node.js", level: 4, category: "backend" },
//   { name: "Express", level: 4, category: "backend" },
//   { name: "MongoDB", level: 3, category: "backend" },
//   { name: "PostgreSQL", level: 3, category: "backend" },
//   { name: "GraphQL", level: 3, category: "backend" },
//   { name: "Docker", level: 3, category: "tools" },
//   { name: "Git", level: 4, category: "tools" },
//   { name: "Jest", level: 4, category: "tools" },
//   { name: "Webpack", level: 3, category: "tools" },
//   { name: "UI/UX Design", level: 3, category: "other" },
//   { name: "Agile/Scrum", level: 4, category: "other" },
//   { name: "Technical Writing", level: 3, category: "other" },
// ]




export type Project = {
    id: string
    title: string
    description: string
    image?: string
    tags: string[]
    demoUrl?: string
    githubUrl?: string
    featured: boolean
    details: {
      overview: string
      challenges: string
      solutions: string
      technologies: string[]
      features: string[]
      images?: string[]
    }
  }

  export type Education = {
    institution: string
    degree: string
    field: string
    startDate: string
    endDate: string
    description: string
  }

  export type Experience = {
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
    achievements: string[]
  }

  export type Skill = {
    name: string
    level: number // 1-5
    category: "frontend" | "backend" | "tools" | "other"
  }

//   export const projects: Project[] = [
//     {
//       id: "surveillance-system",
//       title: "Surveillance System Designer",
//       description:
//         "A sophisticated surveillance system design software utilizing canvas, d3.js, and Skia for precise layout planning.",
//       image: "/placeholder.svg?height=600&width=800",
//       tags: ["React", "Canvas", "D3.js", "Skia"],
//       demoUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       featured: true,
//       details: {
//         overview:
//           "Advanced surveillance system design software that enables users to create and manage complex security layouts.",
//         challenges: "Implementing precise drawing tools and handling complex geometric calculations in real-time.",
//         solutions: "Utilized Canvas API and D3.js for rendering, with Skia for high-performance graphics processing.",
//         technologies: ["React", "Canvas API", "D3.js", "Skia", "TypeScript", "WebGL"],
//         features: [
//           "Interactive layout designer",
//           "Real-time rendering",
//           "Camera placement optimization",
//           "Coverage analysis",
//           "Export to CAD formats",
//         ],
//         images: [
//           "/placeholder.svg?height=600&width=800",
//           "/placeholder.svg?height=600&width=800",
//           "/placeholder.svg?height=600&width=800",
//         ],
//       },
//     },
//     {
//       id: "aesthetic-crm",
//       title: "Aesthetic Company CRM",
//       description: "A comprehensive CRM system for aesthetic companies with appointment management and client tracking.",
//       image: "/placeholder.svg?height=600&width=800",
//       tags: ["Next.js", "TypeScript", "Redux", "React Big Calendar"],
//       demoUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       featured: true,
//       details: {
//         overview:
//           "Full-featured CRM system designed specifically for aesthetic companies to manage clients and appointments.",
//         challenges: "Complex state management and real-time calendar synchronization across multiple users.",
//         solutions: "Implemented Redux for state management and React Big Calendar for appointment handling.",
//         technologies: ["Next.js", "TypeScript", "Redux", "React Big Calendar", "TailwindCSS"],
//         features: [
//           "Appointment scheduling",
//           "Client management",
//           "Treatment tracking",
//           "Inventory management",
//           "Reports and analytics",
//         ],
//         images: [
//           "/placeholder.svg?height=600&width=800",
//           "/placeholder.svg?height=600&width=800",
//           "/placeholder.svg?height=600&width=800",
//         ],
//       },
//     },
//     {
//       id: "hospital-management",
//       title: "Hospital Management System",
//       description: "A comprehensive HMS for FGPC hospital with patient management and appointment scheduling.",
//       image: "/placeholder.svg?height=600&width=800",
//       tags: ["JavaScript", "React", "Node.js"],
//       demoUrl: "https://example.com",
//       githubUrl: "https://github.com",
//       featured: false,
//       details: {
//         overview:
//           "Complete hospital management system with features for patient records, appointments, and staff management.",
//         challenges: "Managing complex workflows and ensuring data security for sensitive medical information.",
//         solutions: "Implemented role-based access control and efficient data structures for quick retrieval.",
//         technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
//         features: [
//           "Patient records management",
//           "Appointment scheduling",
//           "Staff management",
//           "Inventory tracking",
//           "Billing system",
//         ],
//         images: [
//           "/placeholder.svg?height=600&width=800",
//           "/placeholder.svg?height=600&width=800",
//           "/placeholder.svg?height=600&width=800",
//         ],
//       },
//     },
//   ]


export const projects: Project[] = [
    {
      id: "surveillance-system",
      title: "Surveillance System Designer",
      description:
        "A sophisticated surveillance system design software utilizing canvas, d3.js, and Skia for precise layout planning.",
    //   image: "/paragon1.jpg",
      tags: ["React", "Canvas", "D3.js", "Skia"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: true,
      details: {
        overview:
          "Advanced surveillance system design software that enables users to create and manage complex security layouts.",
        challenges: "Implementing precise drawing tools and handling complex geometric calculations in real-time.",
        solutions: "Utilized Canvas API and D3.js for rendering, with Skia for high-performance graphics processing.",
        technologies: ["React", "Canvas API", "D3.js", "Skia", "TypeScript", "WebGL"],
        features: [
          "Interactive layout designer",
          "Real-time rendering",
          "Camera placement optimization",
          "Coverage analysis",
          "Export to CAD formats",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "aesthetic-crm",
      title: "Aesthetic Company CRM",
      description: "A comprehensive CRM system for aesthetic companies with appointment management and client tracking.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Redux", "React Big Calendar"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: true,
      details: {
        overview:
          "Full-featured CRM system designed specifically for aesthetic companies to manage clients and appointments.",
        challenges: "Complex state management and real-time calendar synchronization across multiple users.",
        solutions: "Implemented Redux for state management and React Big Calendar for appointment handling.",
        technologies: ["Next.js", "TypeScript", "Redux", "React Big Calendar", "TailwindCSS"],
        features: [
          "Appointment scheduling",
          "Client management",
          "Treatment tracking",
          "Inventory management",
          "Reports and analytics",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "hospital-management",
      title: "Hospital Management System",
      description: "A comprehensive HMS for FGPC hospital with patient management and appointment scheduling.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["JavaScript", "React", "Node.js"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Complete hospital management system with features for patient records, appointments, and staff management.",
        challenges: "Managing complex workflows and ensuring data security for sensitive medical information.",
        solutions: "Implemented role-based access control and efficient data structures for quick retrieval.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
        features: [
          "Patient records management",
          "Appointment scheduling",
          "Staff management",
          "Inventory tracking",
          "Billing system",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    // Admin Dashboards
    {
      id: "paragon-dashboard",
      title: "Paragon Interiors Admin Dashboard",
      description: "Admin dashboard for Paragon Interiors with inventory and order management.",
    //   image: "/paragon1.jpg",
      tags: ["React", "TypeScript", "TailwindCSS", "Chart.js"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Custom-built admin dashboard for Paragon Interiors to streamline inventory and order management.",
        challenges: "Integrating real-time data updates and ensuring responsive design across devices.",
        solutions: "Used React with TypeScript for type safety and Chart.js for data visualization.",
        technologies: ["React", "TypeScript", "TailwindCSS", "Chart.js", "Axios"],
        features: [
          "Inventory tracking",
          "Order management",
          "Sales analytics",
          "User authentication",
          "Responsive design",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "kashmir-builders-dashboard",
      title: "Kashmir Builders Admin Dashboard",
      description: "Admin dashboard for Kashmir Builders with project tracking and client management.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Redux", "Material-UI", "Firebase"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Comprehensive admin dashboard for Kashmir Builders to manage construction projects and clients.",
        challenges: "Handling large datasets and ensuring seamless navigation.",
        solutions: "Implemented Redux for state management and Firebase for real-time updates.",
        technologies: ["React", "Redux", "Material-UI", "Firebase", "TypeScript"],
        features: [
          "Project tracking",
          "Client management",
          "Task assignments",
          "Progress reports",
          "Notifications",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "swati-autos-dashboard",
      title: "Swati Autos Admin Dashboard",
      description: "Admin dashboard for Swati Autos with vehicle inventory and sales tracking.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Next.js", "Chakra UI", "GraphQL"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Dynamic admin dashboard for Swati Autos to manage vehicle inventory and track sales performance.",
        challenges: "Optimizing GraphQL queries for efficient data fetching.",
        solutions: "Used Next.js for server-side rendering and Chakra UI for a clean interface.",
        technologies: ["React", "Next.js", "Chakra UI", "GraphQL", "Apollo Client"],
        features: [
          "Vehicle inventory",
          "Sales tracking",
          "Customer management",
          "Performance analytics",
          "User roles",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "meelu-dashboard",
      title: "Meelu Admin Dashboard",
      description: "Admin dashboard for Meelu with user management and reporting tools.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Redux", "Ant Design", "Node.js"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Admin dashboard for Meelu to manage users, generate reports, and track business metrics.",
        challenges: "Ensuring secure user management and optimizing report generation.",
        solutions: "Used Redux for state management and Ant Design for a professional UI.",
        technologies: ["React", "Redux", "Ant Design", "Node.js", "Express"],
        features: [
          "User management",
          "Report generation",
          "Business analytics",
          "Role-based access",
          "Activity logs",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "zaidi-traders-dashboard",
      title: "Zaidi Traders Admin Dashboard",
      description: "Admin dashboard for Zaidi Traders with product catalog and order tracking.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Next.js", "TailwindCSS", "Prisma"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Admin dashboard for Zaidi Traders to manage their product catalog and track orders efficiently.",
        challenges: "Handling large product catalogs and ensuring fast search functionality.",
        solutions: "Used Prisma ORM for database interactions and TailwindCSS for styling.",
        technologies: ["React", "Next.js", "TailwindCSS", "Prisma", "PostgreSQL"],
        features: [
          "Product catalog management",
          "Order tracking",
          "Inventory management",
          "Sales reports",
          "Search functionality",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "mmh-pindi-dashboard",
      title: "MMH Pindi Admin Dashboard",
      description: "Admin dashboard for MMH Pindi with customer relationship management (CRM).",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "TypeScript", "Mantine", "Supabase"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Admin dashboard for MMH Pindi to manage customer relationships and track interactions.",
        challenges: "Building a scalable CRM system with real-time updates.",
        solutions: "Used Supabase for backend services and Mantine for a modern UI.",
        technologies: ["React", "TypeScript", "Mantine", "Supabase", "PostgreSQL"],
        features: [
          "Customer management",
          "Interaction tracking",
          "Sales pipeline",
          "Email integration",
          "Analytics dashboard",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "rehbar-society-dashboard",
      title: "Rehbar Society Admin Dashboard",
      description: "Admin dashboard for Rehbar Society with membership management and event tracking.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Redux", "Bootstrap", "Firebase"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Admin dashboard for Rehbar Society to manage memberships and track events.",
        challenges: "Ensuring secure membership data and real-time event updates.",
        solutions: "Used Firebase for real-time updates and Bootstrap for responsive design.",
        technologies: ["React", "Redux", "Bootstrap", "Firebase", "TypeScript"],
        features: [
          "Membership management",
          "Event tracking",
          "Payment processing",
          "Notifications",
          "Reports",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "green-hardware-dashboard",
      title: "Green Hardware Admin Dashboard",
      description: "Admin dashboard for Green Hardware with inventory and supplier management.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Next.js", "Chakra UI", "GraphQL"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Admin dashboard for Green Hardware to manage inventory and suppliers effectively.",
        challenges: "Optimizing inventory tracking and supplier communication.",
        solutions: "Used GraphQL for efficient data fetching and Chakra UI for a clean interface.",
        technologies: ["React", "Next.js", "Chakra UI", "GraphQL", "Apollo Client"],
        features: [
          "Inventory management",
          "Supplier tracking",
          "Purchase orders",
          "Stock alerts",
          "Analytics",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "paragon-dha-dashboard",
      title: "Paragon DHA Admin Dashboard",
      description: "Admin dashboard for Paragon DHA with property listings and tenant management.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Redux", "Material-UI", "Node.js"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Admin dashboard for Paragon DHA to manage property listings and tenant information.",
        challenges: "Handling property data and ensuring tenant privacy.",
        solutions: "Used Redux for state management and Material-UI for a professional UI.",
        technologies: ["React", "Redux", "Material-UI", "Node.js", "Express"],
        features: [
          "Property listings",
          "Tenant management",
          "Lease agreements",
          "Rent tracking",
          "Maintenance requests",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "autoparts-crm-dashboard",
      title: "Autoparts CRM Admin Dashboard",
      description: "Admin dashboard for Autoparts CRM with lead tracking and sales pipeline management.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Next.js", "TailwindCSS", "Supabase"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Admin dashboard for Autoparts CRM to track leads and manage the sales pipeline.",
        challenges: "Building a scalable CRM system with real-time updates.",
        solutions: "Used Supabase for backend services and TailwindCSS for styling.",
        technologies: ["React", "Next.js", "TailwindCSS", "Supabase", "PostgreSQL"],
        features: [
          "Lead tracking",
          "Sales pipeline",
          "Deal management",
          "Email integration",
          "Analytics dashboard",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "mia-jee-fabrics-dashboard",
      title: "Mia Jee Fabrics Admin Dashboard",
      description: "Admin dashboard for Mia Jee Fabrics with product catalog and order tracking.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Redux", "Ant Design", "Node.js"],
    //   demoUrl: "https://example.com",
    //   githubUrl: "https://github.com",
      featured: false,
      details: {
        overview:
          "Admin dashboard for Mia Jee Fabrics to manage their product catalog and track orders efficiently.",
        challenges: "Handling large product catalogs and ensuring fast search functionality.",
        solutions: "Used Redux for state management and Ant Design for a professional UI.",
        technologies: ["React", "Redux", "Ant Design", "Node.js", "Express"],
        features: [
          "Product catalog management",
          "Order tracking",
          "Inventory management",
          "Sales reports",
          "Search functionality",
        ],
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "awgroup-site",
      title: "AWGroup Website",
      description: "Corporate website for AWGroup with responsive design and CMS integration.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Next.js", "TailwindCSS", "Contentful"],
      demoUrl: "https://awgroup.com.pk/",
    //   githubUrl: "https://github.com",
      featured: false,
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
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
    },
    {
      id: "shahtaj-site",
      title: "Shahtaj Sugar Mill",
      description: "E-commerce website for Shahtaj with product listings and payment gateway integration.",
    //   image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Next.js", "Stripe", "Sanity"],
      demoUrl: "https://www.shahtajsugar.com/",
    //   githubUrl: "https://github.com",
      featured: false,
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
        images: [
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        //   "/placeholder.svg?height=600&width=800",
        ],
      },
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
  ]

  export const experience: Experience[] = [

    {
        "company": "Backendz",
        "position": "Full Stack Engineer",
        "startDate": "Apr 2024",
        "endDate": "Present",
        "description": "Developed and optimized surveillance system design software and CRM solutions using advanced web technologies.",
        "achievements": [
          "Developed surveillance system design software using Canvas, D3.js, and Skia",
          "Implemented complex geometric calculations for camera placement",
          "Created interactive drawing tools for system layout design",
          "Optimized rendering performance for large-scale systems",
          "Developed a CRM system for an aesthetic company using Next.js and TypeScript",
          "Managed state with Redux and handled appointments with React Big Calendar",
          "Collaborated in 2D/3D Flashing design software using Three.js and Canvas",
          "Implemented responsive and intuitive user interfaces"
        ]
      }
,
    {
      company: "Koncept Solutions International",
      position: "Frontend Developer",
      startDate: "Jul 2023",
      endDate: "Mar 2024",
      description: "Designed and developed business software and admin dashboards for various clients.",
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
  ]

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
    { name: "Git", level: 4, category: "tools" },
    { name: "VS Code", level: 5, category: "tools" },
    { name: "Webpack", level: 3, category: "tools" },
    { name: "Problem Solving", level: 4, category: "other" },
    { name: "Team Collaboration", level: 4, category: "other" },
  ]
