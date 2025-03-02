
// import Image from "next/image"
// import Link from "next/link"
// import { notFound } from "next/navigation"
// import { projects } from "@/lib/data"
// import { Button } from "@/components/ui/button"
// import { ArrowLeft, ExternalLink, Github, Lock } from "lucide-react"

// interface ProjectPageProps {
//   params: {
//     id: string
//   }
// }

// export default function ProjectPage({ params }: ProjectPageProps) {
//   const project = projects.find((p) => p.id === params.id)

//   if (!project) {
//     notFound()
//   }

//   return (
//     <div className="container py-12 px-4 md:px-6">
//       <Link href="/projects" className="inline-flex items-center mb-8 hover:text-primary">
//         <ArrowLeft className="mr-2 h-4 w-4" />
//         Back to Projects
//       </Link>

//       <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
//         <div>
//           <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
//           <div className="flex flex-wrap gap-2 mb-6">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* <div className="aspect-video w-full overflow-hidden rounded-lg border mb-8">
//             <Image
//               src={project.image || "/placeholder.svg"}
//               alt={project.title}
//               width={1200}
//               height={675}
//               className="h-full w-full object-cover"
//             />
//           </div> */}

//           <div className="space-y-8">
//             <section>
//               <h2 className="text-2xl font-bold mb-4">Overview</h2>
//               <p className="text-muted-foreground">{project.details.overview}</p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">Challenges</h2>
//               <p className="text-muted-foreground">{project.details.challenges}</p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">Solutions</h2>
//               <p className="text-muted-foreground">{project.details.solutions}</p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">Key Features</h2>
//               <ul className="list-disc pl-5 space-y-2">
//                 {project.details.features.map((feature, index) => (
//                   <li key={index} className="text-muted-foreground">
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {project.details.images.map((image, index) => (
//                   <div key={index} className="overflow-hidden rounded-lg border">
//                     <Image
//                       src={image || "/placeholder.svg"}
//                       alt={`${project.title} screenshot ${index + 1}`}
//                       width={600}
//                       height={400}
//                       className="h-full w-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>
//         </div>

//         <div className="space-y-8">
//           <div className="rounded-lg border p-6 shadow-sm">
//             <h3 className="text-xl font-bold mb-4">Project Details</h3>
//             <div className="space-y-4">
//               <div>
//                 <h4 className="font-medium text-muted-foreground">Technologies Used</h4>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {project.details.technologies.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="pt-4 flex flex-col gap-3">
//                 {/* Live Demo Button */}
//                 {0 ? (
//                   <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//                     <Button className="w-full">
//                       Live Demo
//                       <ExternalLink className="ml-2 h-4 w-4" />
//                     </Button>
//                   </a>
//                 ) : (
//                   <Button variant="outline" className="w-full cursor-not-allowed" disabled>
//                     Private Property - Credentials Based
//                     <Lock className="ml-2 h-4 w-4" />
//                   </Button>
//                 )}

//                 {/* GitHub Button */}
//                 {0 ? (
//                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                     <Button variant="outline" className="w-full">
//                       View Source
//                       <Github className="ml-2 h-4 w-4" />
//                     </Button>
//                   </a>
//                 ) : (
//                   <Button variant="outline" className="w-full cursor-not-allowed" disabled>
//                     Private Property
//                     <Lock className="ml-2 h-4 w-4" />
//                   </Button>
//                 )}
//               </div>
//             </div>
//           </div>

//           <div className="rounded-lg border p-6 shadow-sm">
//             <h3 className="text-xl font-bold mb-4">Need a similar project?</h3>
//             <p className="text-muted-foreground mb-4">
//               I'm available for freelance projects and full-time positions. Let's discuss how I can help bring your
//               ideas to life.
//             </p>
//             <Link href="/contact">
//               <Button className="w-full">Get in Touch</Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, Lock, Shield } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  // Check if project has no gallery images or demo/github URLs
  const isPrivate = !project.details?.images?.length || (!project.demoUrl && !project.githubUrl)

  return (
    <div className="container py-12 px-4 md:px-6">
      <Link href="/projects" className="inline-flex items-center mb-8 hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* <div className="aspect-video w-full overflow-hidden rounded-lg border mb-8">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover"
            />
          </div> */}

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground">{project.details.overview}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Challenges</h2>
              <p className="text-muted-foreground">{project.details.challenges}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Solutions</h2>
              <p className="text-muted-foreground">{project.details.solutions}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="text-muted-foreground">
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
              {isPrivate ? (
                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center p-6 space-y-4">
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold tracking-tight">Private Project</h3>
                        <p className="text-muted-foreground">
                          This project was developed for a client and is protected by an NDA. Screenshots and additional
                          details cannot be publicly shared. However, I'd be happy to discuss the technical aspects and
                          my role in the project during an interview.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Lock className="h-4 w-4" />
                        <span>Client confidentiality protected</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.details?.images?.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg border">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-muted-foreground">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full">
                      Live Demo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      View Source
                      <Github className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                )}
                {isPrivate && (
                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertTitle>Private Repository</AlertTitle>
                    <AlertDescription>
                      This project's source code is maintained in a private repository due to client requirements.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">Need a similar project?</h3>
            <p className="text-muted-foreground mb-4">
              I'm available for freelance projects and full-time positions. Let's discuss how I can help bring your
              ideas to life.
            </p>
            <Link href="/contact">
              <Button className="w-full">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
