"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Technology {
    name: string
    icon: string
    darkModeFallback?: string
  }

  interface TechnologyCategories {
    frontend: Technology[]
    backend: Technology[]
    tools: Technology[]
    design: Technology[]
    testing: Technology[]
  }
const technologies: TechnologyCategories = {
  frontend: [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      darkModeFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      darkModeFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      darkModeFallback: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Webpack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
    },
    {
      name: "npm",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    },
    {
      name: "Yarn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
    },
  ],
  design: [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    // {
    //   name: "Adobe XD",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    // },
  ],
  testing: [
    {
      name: "Jest",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    // {
    //   name: "Testing Library",
    //   icon: "https://testing-library.com/img/octopus-128x128.png",
    // },
  ],
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function TechStack() {
    const { resolvedTheme } = useTheme()
    const isDark = resolvedTheme === "dark" // Dynamically check if the theme is dark
  return (
    <section className="py-12 border-t border-b">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Tech Stack</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are the technologies, frameworks, and tools I work with on a daily basis. I'm always learning and
          exploring new technologies to stay up-to-date with the latest trends.
        </p>

        <div className="space-y-12">
          {(Object.keys(technologies) as Array<keyof typeof technologies>).map((category) => (
            <div key={category}>
              <h3 className="text-xl font-semibold capitalize mb-6">{category}</h3>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 items-center justify-items-center"
              >
                {technologies[category].map((tech) => (
                  <motion.div key={tech.name} variants={item} className="flex flex-col items-center gap-2 group">
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-background shadow-sm border p-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
                      <img
                        // src={tech.icon || "/placeholder.svg"}
                        src={isDark && tech.darkModeFallback ? tech.darkModeFallback : tech.icon}
                        alt={tech.name}
                        className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 filter dark:invert-[]"
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
