// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { ArrowRight, Code, ExternalLink, Github, Layers, Zap } from "lucide-react"
// import { projects } from "@/lib/data"

// export default function Home() {
//   // Get featured projects
//   const featuredProjects = projects.filter((project) => project.featured)

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
//         <div className="container px-4 md:px-6">
//           <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//             <div className="flex flex-col justify-center space-y-4">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                   Hi, I'm <span className="text-primary">John Doe</span>
//                 </h1>
//                 <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                   A passionate full-stack developer specializing in creating exceptional digital experiences. I build
//                   accessible, responsive, and performant web applications.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                 <Link href="/projects">
//                   <Button className="w-full min-[400px]:w-auto">
//                     View My Work
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button variant="outline" className="w-full min-[400px]:w-auto">
//                     Contact Me
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
//                 <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden">
//                   <Image
//                     src="/placeholder.svg?height=500&width=500"
//                     alt="Developer Portrait"
//                     width={500}
//                     height={500}
//                     className="object-cover"
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
//               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 I specialize in building modern web applications using the latest technologies and best practices.
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//             <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
//               <div className="rounded-full bg-primary/10 p-3">
//                 <Code className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold">Frontend Development</h3>
//               <p className="text-center text-muted-foreground">
//                 Creating responsive and accessible user interfaces with React, Next.js, and modern CSS frameworks.
//               </p>
//             </div>
//             <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
//               <div className="rounded-full bg-primary/10 p-3">
//                 <Layers className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold">Backend Development</h3>
//               <p className="text-center text-muted-foreground">
//                 Building robust server-side applications with Node.js, Express, and various database technologies.
//               </p>
//             </div>
//             <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
//               <div className="rounded-full bg-primary/10 p-3">
//                 <Zap className="h-6 w-6 text-primary" />
//               </div>
//               <h3 className="text-xl font-bold">Performance Optimization</h3>
//               <p className="text-center text-muted-foreground">
//                 Improving application speed and efficiency through code optimization and modern web techniques.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
//               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 Check out some of my recent work. These projects showcase my skills and expertise.
//               </p>
//             </div>
//           </div>
//           <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
//             {featuredProjects.map((project) => (
//               <Link key={project.id} href={`/projects/${project.id}`} className="group">
//                 <div className="project-card overflow-hidden rounded-lg border bg-background shadow-sm">
//                   <div className="aspect-video w-full overflow-hidden">
//                     <Image
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       width={600}
//                       height={400}
//                       className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <h3 className="text-2xl font-bold">{project.title}</h3>
//                     <p className="mt-2 text-muted-foreground">{project.description}</p>
//                     <div className="mt-4 flex flex-wrap gap-2">
//                       {project.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="mt-6 flex items-center justify-between">
//                       <span className="text-sm font-medium text-primary group-hover:underline">
//                         View Project Details
//                       </span>
//                       <div className="flex space-x-2">
//                         {project.githubUrl && (
//                           <a
//                             href={project.githubUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="rounded-full p-2 hover:bg-muted"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             <Github className="h-4 w-4" />
//                           </a>
//                         )}
//                         {project.demoUrl && (
//                           <a
//                             href={project.demoUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="rounded-full p-2 hover:bg-muted"
//                             onClick={(e) => e.stopPropagation()}
//                           >
//                             <ExternalLink className="h-4 w-4" />
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div className="flex justify-center">
//             <Link href="/projects">
//               <Button variant="outline" size="lg">
//                 View All Projects
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="w-full py-12 md:py-24 lg:py-32 border-t">
//         <div className="container px-4 md:px-6">
//           <div className="flex flex-col items-center justify-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
//               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                 I'm currently available for freelance projects, full-time positions, or consulting work. If you're
//                 interested in working together, get in touch!
//               </p>
//             </div>
//             <div className="flex flex-col gap-2 min-[400px]:flex-row">
//               <Link href="/contact">
//                 <Button size="lg">Contact Me</Button>
//               </Link>
//               <Link href="/about">
//                 <Button variant="outline" size="lg">
//                   Learn More About Me
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Layers, Zap } from "lucide-react"
import { projects } from "@/lib/data"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  // Get featured projects
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-20 bg-gradient-t from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I'm <span className="text-primary">Muhammad Abbas</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A passionate full-stack developer specializing in creating exceptional digital experiences. I build
                  accessible, responsive, and performant web applications.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projects">
                  <Button className="w-full min-[400px]:w-auto">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full min-[400px]:w-auto">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <Image
                    src="/profilepic1.png"
                    alt="Developer Portrait"
                    width={500}
                    height={500}
                    className="object-cove"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I specialize in building modern web applications using the latest technologies and best practices.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Frontend Development</h3>
              <p className="text-center text-muted-foreground">
                Creating responsive and accessible user interfaces with React, Next.js, and modern CSS frameworks.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Backend Development</h3>
              <p className="text-center text-muted-foreground">
                Building robust server-side applications with Node.js, Express, and various database technologies.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Performance Optimization</h3>
              <p className="text-center text-muted-foreground">
                Improving application speed and efficiency through code optimization and modern web techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my recent work. These projects showcase my skills and expertise.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I'm currently available for freelance projects, full-time positions, or consulting work. If you're
                interested in working together, get in touch!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">Contact Me</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Learn More About Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
