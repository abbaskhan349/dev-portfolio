// import Link from "next/link"
// import Image from "next/image"
// import { projects } from "@/lib/data"
// import { ExternalLink, Github } from "lucide-react"

// export default function ProjectsPage() {
//   return (
//     <div className="container py-12 px-4 md:px-6">
//       <h1 className="text-4xl font-bold mb-8">My Projects</h1>
//       <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
//         Here's a collection of my recent work. Each project represents a unique challenge and showcases different skills
//         and technologies. Click on a project to view more details.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <Link key={project.id} href={`/projects/${project.id}`} className="group">
//             <div className="project-card h-full overflow-hidden rounded-lg border bg-background shadow-sm">
//               <div className="aspect-video w-full overflow-hidden">
//                 <Image
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   width={600}
//                   height={400}
//                   className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-2xl font-bold">{project.title}</h2>
//                 <p className="mt-2 text-muted-foreground">{project.description}</p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="mt-6 flex items-center justify-between">
//                   <span className="text-sm font-medium text-primary group-hover:underline">View Project Details</span>
//                   <div className="flex space-x-2">
//                     {project.githubUrl && (
//                       <a
//                         href={project.githubUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="rounded-full p-2 hover:bg-muted"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         <Github className="h-4 w-4" />
//                       </a>
//                     )}
//                     {project.demoUrl && (
//                       <a
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="rounded-full p-2 hover:bg-muted"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }



import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Here's a collection of my recent work. Each project represents a unique challenge and showcases different skills
        and technologies. Click on a project to view more details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
