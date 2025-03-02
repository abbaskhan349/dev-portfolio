"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Code2, Star, Trophy, Users } from "lucide-react"

const stats = [
  {
    value: "20+",
    label: "Projects Completed",
    icon: <Trophy className="h-5 w-5" />,
    description: "Successfully delivered projects across various industries",
  },
  {
    value: "15+",
    label: "Satisfied Clients",
    icon: <Users className="h-5 w-5" />,
    description: "Happy clients who trust my expertise",
  },
  {
    value: "2+",
    label: "Years Experience",
    icon: <Clock className="h-5 w-5" />,
    description: "Professional experience in software development",
  },
  {
    value: "100%",
    label: "Project Success Rate",
    icon: <CheckCircle className="h-5 w-5" />,
    description: "Track record of successful project deliveries",
  },
  {
    value: "50K+",
    label: "Lines of Code",
    icon: <Code2 className="h-5 w-5" />,
    description: "Written and maintained across projects",
  },
  {
    value: "4.9/5",
    label: "Client Rating",
    icon: <Star className="h-5 w-5" />,
    description: "Average client satisfaction rating",
  },
]

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

export function StatsSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">By the Numbers</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A track record of delivering successful projects and maintaining high client satisfaction
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
                  <div className="text-sm font-medium text-primary">{stat.label}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{stat.description}</p>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 rounded-lg border bg-muted/50 p-8 text-center"
        >
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              <div className="absolute -left-4 -top-4 text-6xl text-primary/20">"</div>
              <blockquote className="relative text-xl font-medium italic text-muted-foreground">
                Working with this developer was a great experience. They delivered high-quality work on time and were
                always responsive to our needs. Their technical expertise and problem-solving skills were invaluable to
                our project's success.
              </blockquote>
              <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20">"</div>
            </div>
            <div className="mt-6">
              <div className="font-semibold">Muhammad Hamid</div>
              <div className="text-sm text-muted-foreground">CEO, Backenz pvt ltd.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
