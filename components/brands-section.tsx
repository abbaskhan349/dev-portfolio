// "use client"

// import { motion } from "framer-motion"
// import { useTheme } from "next-themes"

// const brands = [
//   {
//     name: "Paragon City",
//     logo: "/github.svg",
//     darkLogo: "/github.svg",
//   },
//   {
//     name: "Swati Autos",
//     logo: "/placeholder.svg",
//     darkLogo: "/placeholder.svg",
//   },
//   {
//     name: "Kashmir Builders",
//     logo: "/placeholder.svg",
//     darkLogo: "/placeholder.svg",
//   },
//   {
//     name: "Mia Jee Fabrics",
//     logo: "/placeholder.svg",
//     darkLogo: "/placeholder.svg",
//   },
//   {
//     name: "FGPC Hospital",
//     logo: "/placeholder.svg",
//     darkLogo: "/placeholder.svg",
//   },
//   {
//     name: "ItecExperts",
//     logo: "/placeholder.svg",
//     darkLogo: "/placeholder.svg",
//   },
// ]

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0 },
// }

// export function BrandsSection() {
//   const { theme } = useTheme()
//   const isDark = theme === "dark"

//   return (
//     <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
//       <div className="container px-4">
//         <div className="flex flex-col items-center justify-center text-center mb-12">
//           <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted By</h2>
//           <p className="mt-4 text-muted-foreground md:text-xl">
//             I've had the privilege of working with these amazing companies
//           </p>
//         </div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
//         >
//           {brands.map((brand) => (
//             <motion.div
//               key={brand.name}
//               variants={item}
//               className="group relative w-full max-w-[180px] h-20 flex items-center justify-center"
//             >
//               <div className="absolute inset-0 rounded-lg bg-background shadow-sm border opacity-0 group-hover:opacity-100 transition-opacity" />
//               <div className="relative p-4">
//                 {/* Replace with actual brand logos */}
//                 <div className="w-full h-12 rounded bg-primary/10 flex items-center justify-center text-primary font-medium">
//                   {brand.name}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Building2, Briefcase, Store, Hospital, Construction, Factory } from "lucide-react"

const brands = [
  {
    name: "Paragon City",
    icon: Building2,
    description: "Real Estate Development",
  },
  {
    name: "Swati Autos",
    icon: Factory,
    description: "Automotive Industry",
  },
  {
    name: "Kashmir Builders",
    icon: Construction,
    description: "Construction Company",
  },
  {
    name: "Mia Jee Fabrics",
    icon: Store,
    description: "Retail & Textiles",
  },
  {
    name: "FGPC Hospital",
    icon: Hospital,
    description: "Healthcare",
  },
  {
    name: "ItecExperts",
    icon: Briefcase,
    description: "IT Solutions",
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

export function BrandsSection() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Companies I've Worked With</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Proud to have collaborated with these amazing organizations
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center justify-items-center max-w-4xl mx-auto"
        >
          {brands.map((brand) => (
            <motion.div key={brand.name} variants={item} className="group relative w-full p-6">
              <div className="rounded-xl border bg-background shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:scale-105">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <brand.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{brand.name}</h3>
                    <p className="text-sm text-muted-foreground">{brand.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Due to NDAs and client confidentiality, some project details and assets cannot be publicly shared.
          </p>
        </div>
      </div>
    </section>
  )
}
