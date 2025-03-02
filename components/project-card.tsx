// "use client"

// import type React from "react"

// import Link from "next/link"
// import Image from "next/image"
// import { ExternalLink, Github } from "lucide-react"
// import type { Project } from "@/lib/data"

// interface ProjectCardProps {
//   project: Project
// }

// export function ProjectCard({ project }: ProjectCardProps) {
//   const handleLinkClick = (e: React.MouseEvent) => {
//     e.stopPropagation()
//   }

//   return (
//     <Link href={`/projects/${project.id}`} className="group">
//       <div className="project-card overflow-hidden rounded-lg border bg-background shadow-sm h-full">
//         {/* <div className="aspect-video w-full overflow-hidden">
//           <Image
//             src={project.image || "/placeholder.svg"}
//             alt={project.title}
//             width={600}
//             height={400}
//             className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//           />
//         </div> */}
//         <div className="p-6">
//           <h3 className="text-2xl font-bold">{project.title}</h3>
//           <p className="mt-2 text-muted-foreground">{project.description}</p>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <div className="mt-6 flex items-center justify-between">
//             <span className="text-sm font-medium text-primary group-hover:underline">View Project Details</span>
//             <div className="flex space-x-2">
//               {project.githubUrl && (
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-full p-2 hover:bg-muted"
//                   onClick={handleLinkClick}
//                 >
//                   <Github className="h-4 w-4" />
//                 </a>
//               )}
//               {project.demoUrl && (
//                 <a
//                   href={project.demoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-full p-2 hover:bg-muted"
//                   onClick={handleLinkClick}
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }


// "use client"

// import type React from "react"
// import Link from "next/link"
// import { ExternalLink, Github, Layout, Smartphone, Globe, Database, Shield, Terminal } from "lucide-react"
// import type { Project } from "@/lib/data"
// import { cn } from "@/lib/utils"

// interface ProjectCardProps {
//   project: Project
// }

// const projectTypeIcons = {
//   "web-app": <Globe className="h-8 w-8" />,
//   "mobile-app": <Smartphone className="h-8 w-8" />,
//   "desktop-app": <Layout className="h-8 w-8" />,
//   backend: <Database className="h-8 w-8" />,
//   security: <Shield className="h-8 w-8" />,
//   other: <Terminal className="h-8 w-8" />,
// } as const

// const projectTypeGradients = {
//   "web-app": "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10",
//   "mobile-app": "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10",
//   "desktop-app": "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10",
//   backend: "from-orange-500/20 to-red-500/20 dark:from-orange-500/10 dark:to-red-500/10",
//   security: "from-indigo-500/20 to-purple-500/20 dark:from-indigo-500/10 dark:to-purple-500/10",
//   other: "from-gray-500/20 to-slate-500/20 dark:from-gray-500/10 dark:to-slate-500/10",
// } as const

// export function ProjectCard({ project }: ProjectCardProps) {
//   const handleLinkClick = (e: React.MouseEvent) => {
//     e.stopPropagation()
//   }

//   // Determine project type based on tags or default to "other"
//   const getProjectType = () => {
//     const tags = project.tags.map((t) => t.toLowerCase())
//     if (tags.some((t) => t.includes("react native") || t.includes("mobile"))) return "mobile-app"
//     if (tags.some((t) => t.includes("electron") || t.includes("desktop"))) return "desktop-app"
//     if (tags.some((t) => t.includes("backend") || t.includes("api"))) return "backend"
//     if (tags.some((t) => t.includes("security") || t.includes("auth"))) return "security"
//     if (tags.some((t) => t.includes("react") || t.includes("web"))) return "web-app"
//     return "other"
//   }

//   const projectType = getProjectType()

//   return (
//     <Link href={`/projects/${project.id}`} className="group">
//       <div className="project-card overflow-hidden rounded-lg border bg-background shadow-sm h-full">
//         <div
//           className={cn(
//             "aspect-video w-full overflow-hidden bg-gradient-to-br flex items-center justify-center p-8",
//             projectTypeGradients[projectType],
//           )}
//         >
//           <div className="transform transition-transform duration-300 group-hover:scale-110 text-primary">
//             {projectTypeIcons[projectType]}
//           </div>
//         </div>
//         <div className="p-6">
//           <div className="flex items-center gap-2 mb-2">
//             <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
//               {projectType
//                 .split("-")
//                 .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//                 .join(" ")}
//             </span>
//             {!project.demoUrl && !project.githubUrl && (
//               <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
//                 <Shield className="h-3 w-3 mr-1" />
//                 Private
//               </span>
//             )}
//           </div>
//           <h3 className="text-2xl font-bold">{project.title}</h3>
//           <p className="mt-2 text-muted-foreground">{project.description}</p>
//           <div className="mt-4 flex flex-wrap gap-2">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//           <div className="mt-6 flex items-center justify-between">
//             <span className="text-sm font-medium text-primary group-hover:underline">View Project Details</span>
//             <div className="flex space-x-2">
//               {project.githubUrl && (
//                 <a
//                   href={project.githubUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-full p-2 hover:bg-muted"
//                   onClick={handleLinkClick}
//                 >
//                   <Github className="h-4 w-4" />
//                 </a>
//               )}
//               {project.demoUrl && (
//                 <a
//                   href={project.demoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="rounded-full p-2 hover:bg-muted"
//                   onClick={handleLinkClick}
//                 >
//                   <ExternalLink className="h-4 w-4" />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }


"use client"

import type React from "react"
import Link from "next/link"
import {
  ExternalLink,
  Github,
  Store,
  Users,
  BarChart3,
  Building2,
  Shield,
  Camera,
  Hospital,
  Briefcase,
  Palette,
  GraduationCap,
  Car,
  Construction,
  ShoppingBag,
  Factory,
  Binary,
  Boxes,
} from "lucide-react"
import type { Project } from "@/lib/data"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
}

const projectCategories = {
  pos: {
    icon: <Store className="h-8 w-8" />,
    label: "Point of Sale",
    gradient: "from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10",
  },
  crm: {
    icon: <Users className="h-8 w-8" />,
    label: "CRM System",
    gradient: "from-blue-500/20 to-indigo-500/20 dark:from-blue-500/10 dark:to-indigo-500/10",
  },
  analytics: {
    icon: <BarChart3 className="h-8 w-8" />,
    label: "Analytics",
    gradient: "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10",
  },
  "real-estate": {
    icon: <Building2 className="h-8 w-8" />,
    label: "Real Estate",
    gradient: "from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10",
  },
  security: {
    icon: <Shield className="h-8 w-8" />,
    label: "Security",
    gradient: "from-red-500/20 to-rose-500/20 dark:from-red-500/10 dark:to-rose-500/10",
  },
  surveillance: {
    icon: <Camera className="h-8 w-8" />,
    label: "Surveillance",
    gradient: "from-slate-500/20 to-gray-500/20 dark:from-slate-500/10 dark:to-gray-500/10",
  },
  healthcare: {
    icon: <Hospital className="h-8 w-8" />,
    label: "Healthcare",
    gradient: "from-cyan-500/20 to-sky-500/20 dark:from-cyan-500/10 dark:to-sky-500/10",
  },
  enterprise: {
    icon: <Briefcase className="h-8 w-8" />,
    label: "Enterprise",
    gradient: "from-violet-500/20 to-purple-500/20 dark:from-violet-500/10 dark:to-purple-500/10",
  },
  creative: {
    icon: <Palette className="h-8 w-8" />,
    label: "Creative",
    gradient: "from-fuchsia-500/20 to-pink-500/20 dark:from-fuchsia-500/10 dark:to-pink-500/10",
  },
  education: {
    icon: <GraduationCap className="h-8 w-8" />,
    label: "Education",
    gradient: "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10",
  },
  automotive: {
    icon: <Car className="h-8 w-8" />,
    label: "Automotive",
    gradient: "from-blue-500/20 to-sky-500/20 dark:from-blue-500/10 dark:to-sky-500/10",
  },
  construction: {
    icon: <Construction className="h-8 w-8" />,
    label: "Construction",
    gradient: "from-yellow-500/20 to-amber-500/20 dark:from-yellow-500/10 dark:to-amber-500/10",
  },
  retail: {
    icon: <ShoppingBag className="h-8 w-8" />,
    label: "Retail",
    gradient: "from-lime-500/20 to-green-500/20 dark:from-lime-500/10 dark:to-green-500/10",
  },
  industrial: {
    icon: <Factory className="h-8 w-8" />,
    label: "Industrial",
    gradient: "from-zinc-500/20 to-neutral-500/20 dark:from-zinc-500/10 dark:to-neutral-500/10",
  },
  software: {
    icon: <Binary className="h-8 w-8" />,
    label: "Software Development",
    gradient: "from-indigo-500/20 to-violet-500/20 dark:from-indigo-500/10 dark:to-violet-500/10",
  },
  other: {
    icon: <Boxes className="h-8 w-8" />,
    label: "Other",
    gradient: "from-gray-500/20 to-slate-500/20 dark:from-gray-500/10 dark:to-slate-500/10",
  },
} as const

type ProjectCategory = keyof typeof projectCategories

export function ProjectCard({ project }: ProjectCardProps) {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Determine project category based on title, description, and tags
  const getProjectCategory = (): ProjectCategory => {
    const searchText = `${project.title} ${project.description} ${project.tags.join(" ")}`.toLowerCase()

    if (searchText.includes("pos") || searchText.includes("point of sale") || searchText.includes("store")) return "pos"
    if (searchText.includes("crm") || searchText.includes("customer")) return "crm"
    if (searchText.includes("analytics") || searchText.includes("statistics") || searchText.includes("dashboard"))
      return "analytics"
    if (searchText.includes("real estate") || searchText.includes("property")) return "real-estate"
    if (searchText.includes("security") || searchText.includes("auth")) return "security"
    if (searchText.includes("surveillance") || searchText.includes("camera")) return "surveillance"
    if (searchText.includes("health") || searchText.includes("medical") || searchText.includes("hospital"))
      return "healthcare"
    if (searchText.includes("enterprise") || searchText.includes("business")) return "enterprise"
    if (searchText.includes("design") || searchText.includes("creative")) return "creative"
    if (searchText.includes("education") || searchText.includes("learning")) return "education"
    if (searchText.includes("auto") || searchText.includes("car")) return "automotive"
    if (searchText.includes("construction") || searchText.includes("building")) return "construction"
    if (searchText.includes("retail") || searchText.includes("shop")) return "retail"
    if (searchText.includes("industrial") || searchText.includes("factory")) return "industrial"
    if (searchText.includes("software") || searchText.includes("development")) return "software"

    return "other"
  }

  const category = getProjectCategory()
  const { icon, label, gradient } = projectCategories[category]

  return (
    <Link href={`/projects/${project.id}`} className="group">
      <div className="project-card overflow-hidden rounded-lg border bg-background shadow-sm h-full">
        <div
          className={cn(
            "aspect-video w-full overflow-hidden bg-gradient-to-br flex items-center justify-center p-8",
            gradient,
          )}
        >
          <div className="transform transition-transform duration-300 group-hover:scale-110 text-primary">{icon}</div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {label}
            </span>
            {!project.demoUrl && !project.githubUrl && (
              <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold">
                <Shield className="h-3 w-3 mr-1" />
                Private
              </span>
            )}
          </div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-medium text-primary group-hover:underline">View Project Details</span>
            <div className="flex space-x-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 hover:bg-muted"
                  onClick={handleLinkClick}
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 hover:bg-muted"
                  onClick={handleLinkClick}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
