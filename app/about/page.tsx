// import Image from "next/image"
// import { education, experience, skills } from "@/lib/data"
// import { Github, Linkedin, Mail, Twitter } from "lucide-react"
// import Link from "next/link"

// export default function AboutPage() {
//   // Group skills by category
//   const skillsByCategory = skills.reduce(
//     (acc, skill) => {
//       if (!acc[skill.category]) {
//         acc[skill.category] = []
//       }
//       acc[skill.category].push(skill)
//       return acc
//     },
//     {} as Record<string, typeof skills>,
//   )

//   return (
//     <div className="container py-12 px-4 md:px-6">
//       {/* About Me Section */}
//       <section className="mb-16">
//         <h1 className="text-4xl font-bold mb-8">About Me</h1>
//         <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
//           <div className="space-y-4">
//             <p className="text-lg">
//                 I’m Muhammad Abbas Khan, a Full Stack Developer with experience of 2+ years and expertise in building scalable web applications using ReactJS, Next.js, TypeScript, Node.js, and cloud technologies like AWS Amplify and Firebase Cloud Messaging (FCM).
//             </p>
//             <p>
//                 Over the past few years, I’ve worked on diverse projects, including developing CRM systems , admin dashboards , and 2D/3D design software using tools like Three.js, Canvas, and D3.js. For example, I built a Client Appointments Management System for an aesthetic company, integrating features like POS and accounting. I’ve also collaborated on surveillance system design software and contributed to projects like Lanza Jobs , a local hiring platform, and a real estate and vehicle ad-posting site.
//             </p>
//             <p>
//                 What drives me is solving complex problems through clean, efficient code and delivering solutions that make a tangible impact. I’m passionate about leveraging my skills in frontend and backend development to create seamless user experiences and robust systems.
//             </p>
//             <div className="flex space-x-4 pt-4">
//               <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
//                 <Github className="h-6 w-6" />
//               </Link>
//               <Link
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-primary"
//               >
//                 <Linkedin className="h-6 w-6" />
//               </Link>
//               <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
//                 <Twitter className="h-6 w-6" />
//               </Link>
//               <Link href="mailto:contact@example.com" className="hover:text-primary">
//                 <Mail className="h-6 w-6" />
//               </Link>
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
//               <Image src="/placeholder.svg?height=400&width=400" alt="John Doe" fill className="object-cover" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="mb-16">
//         <h2 className="text-3xl font-bold mb-8">Skills</h2>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
//           {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
//             <div key={category} className="border rounded-lg p-6 shadow-sm">
//               <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
//               <div className="space-y-4">
//                 {categorySkills.map((skill) => (
//                   <div key={skill.name} className="space-y-1">
//                     <div className="flex justify-between">
//                       <span>{skill.name}</span>
//                       <span className="text-muted-foreground">{skill.level}/5</span>
//                     </div>
//                     <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
//                       <div
//                         className="h-full bg-primary rounded-full"
//                         style={{ width: `${(skill.level / 5) * 100}%` }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section className="mb-16">
//         <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
//         <div className="space-y-8">
//           {experience.map((job, index) => (
//             <div key={index} className="timeline-item">
//               <div className="border rounded-lg p-6 shadow-sm">
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
//                   <h3 className="text-xl font-bold">{job.position}</h3>
//                   <div className="text-muted-foreground">
//                     {job.startDate} - {job.endDate}
//                   </div>
//                 </div>
//                 <div className="text-lg font-medium mb-2">{job.company}</div>
//                 <p className="mb-4">{job.description}</p>
//                 <h4 className="font-medium mb-2">Key Achievements:</h4>
//                 <ul className="list-disc pl-5 space-y-1">
//                   {job.achievements.map((achievement, i) => (
//                     <li key={i}>{achievement}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Education Section */}
//       <section>
//         <h2 className="text-3xl font-bold mb-8">Education</h2>
//         <div className="space-y-8">
//           {education.map((edu, index) => (
//             <div key={index} className="timeline-item">
//               <div className="border rounded-lg p-6 shadow-sm">
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
//                   <h3 className="text-xl font-bold">
//                     {edu.degree} in {edu.field}
//                   </h3>
//                   <div className="text-muted-foreground">
//                     {edu.startDate} - {edu.endDate}
//                   </div>
//                 </div>
//                 <div className="text-lg font-medium mb-2">{edu.institution}</div>
//                 <p>{edu.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }


import Image from "next/image"
import { education, experience, skills } from "@/lib/data"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import { TechStack } from "@/components/tech-stack"

export default function AboutPage() {
  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <div className="container py-12 px-4 md:px-6">
      {/* About Me Section */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
          <p className="text-lg">
                I’m Muhammad Abbas Khan, a Full Stack Developer with experience of 2+ years and expertise in building scalable web applications using ReactJS, Next.js, TypeScript, Node.js, and cloud technologies like AWS Amplify and Firebase Cloud Messaging (FCM).
            </p>
            <p>
                Over the past few years, I’ve worked on diverse projects, including developing CRM systems , admin dashboards , and 2D/3D design software using tools like Three.js, Canvas, and D3.js. For example, I built a Client Appointments Management System for an aesthetic company, integrating features like POS and accounting. I’ve also collaborated on surveillance system design software and contributed to projects like Lanza Jobs , a local hiring platform, and a real estate and vehicle ad-posting site.
            </p>
            <p>
                What drives me is solving complex problems through clean, efficient code and delivering solutions that make a tangible impact. I’m passionate about leveraging my skills in frontend and backend development to create seamless user experiences and robust systems.
            </p>

            <div className="flex space-x-4 pt-4">
              <Link href="https://github.com/abbaskhan349" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muhammad-abbas-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              {/* <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link> */}
              <Link href="mailto:mabbask440@gmail.com" className="hover:text-primary">
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
              <Image src="/profilepic2.png" alt="John Doe" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4 capitalize">{category}</h3>
              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}/5</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="border rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{job.position}</h3>
                  <div className="text-muted-foreground">
                    {job.startDate} - {job.endDate}
                  </div>
                </div>
                <div className="text-lg font-medium mb-2">{job.company}</div>
                <p className="mb-4">{job.description}</p>
                <h4 className="font-medium mb-2">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="border rounded-lg p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">
                    {edu.degree} in {edu.field}
                  </h3>
                  <div className="text-muted-foreground">
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                <div className="text-lg font-medium mb-2">{edu.institution}</div>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
