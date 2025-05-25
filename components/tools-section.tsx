"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ToolsSectionProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function ToolsSection({ animationsEnabled, largeFontEnabled }: ToolsSectionProps) {
  const uxTools = [
    {
      name: "Figma",
      icon: "/icons/figma.svg",
      category: "Design",
    },
    {
      name: "Sketch",
      icon: "/icons/sketch.svg",
      category: "Design",
    },
    {
      name: "Framer",
      icon: "/icons/framer.svg",
      category: "Prototyping",
    },
    {
      name: "Fullstory",
      icon: "/icons/fullstory.png",
      category: "Analytics",
    },
    {
      name: "Axe",
      icon: "/icons/axe.png",
      category: "Accessibility",
    },
  ]

  const devTools = [
    {
      name: "React",
      icon: "/icons/react.svg",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs.svg",
      category: "Framework",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
      category: "Language",
    },
    {
      name: "Node.js",
      icon: "/icons/nodejs.svg",
      category: "Backend",
    },
    {
      name: "Express",
      icon: "/icons/express.png",
      category: "API",
    },
    {
      name: "MongoDB",
      icon: "/icons/mongoDB.png",
      category: "Database",
    },
    {
      name: "Supabase",
      icon: "/icons/supabase.png",
      category: "Database",
    },
    {
      name: "Git",
      icon: "/icons/git.svg",
      category: "Version Control",
    },
    {
      name: "Angular",
      icon: "/icons/angular.svg",
      category: "Framework",
    },
    {
      name: "Tailwind CSS",
      icon: "/icons/tailwind.svg",
      category: "Styling",
    },
    {
      name: "Cypress",
      icon: "/icons/cypress.png",
      category: "Testing",
    },
    {
      name: "Lighthouse",
      icon: "/icons/lighthouse.png",
      category: "Performance",
    },
    {
      name: "Storybook",
      icon: "/icons/storybook.svg",
      category: "Documentation",
    },
    {
      name: "Jira",
      icon: "/icons/jira.png",
      category: "Project Management",
    },
    {
      name: "Markdown",
      icon: "/icons/markdown.png",
      category: "Documentation",
    },
    {
      name: "Ollama",
      icon: "/icons/ollama.png",
      category: "Machine Learning Model",
    },
    {
      name: "Huggingface",
      icon: "/icons/huggingface.png",
      category: "Machine Learning Model",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const ToolIcon = ({ tool }: { tool: (typeof uxTools)[0] }) => (
    <div className="group relative" tabIndex={0} role="img" aria-label={`${tool.name} - ${tool.category} tool`}>
      <div className="w-16 h-16 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-110 border border-purple-100 hover:border-purple-200 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2">
        <Image
          src={tool.icon}
          alt={`${tool.name} icon`}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Tooltip */}
      <div
        className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white rounded-lg opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 ${
          largeFontEnabled ? "text-base" : "text-sm"
        }`}
      >
        {tool.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  )

  return (
    <section
      id="tools"
      className="py-16 md:py-24 bg-gradient-to-br from-white via-purple-50 to-purple-100"
      tabIndex={0}
      aria-labelledby="tools-heading"
    >
      <div className="container mx-auto px-4">
        {animationsEnabled ? (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="tools-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Tools & Technologies
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              The design and development tools I use to create exceptional digital experiences.
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-12">
            <h2
              id="tools-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Tools & Technologies
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              The design and development tools I use to create exceptional digital experiences.
            </p>
          </div>
        )}

        <div className="grid items-start justify-items-center grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* UX/UI Tools */}
          <div>
            <h3
              className={`font-bold mb-6 text-center ${largeFontEnabled ? "text-3xl" : "text-2xl"}`}
              tabIndex={0}
            >
              UX/UI Design
            </h3>
            {animationsEnabled ? (
              <motion.div
                className="grid grid-cols-3 gap-6 md:grid-cols-4 place-items-center max-w-sm mx-auto lg:mx-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                role="group"
                aria-label="UX/UI Design tools"
              >
                {uxTools.map((tool, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ToolIcon tool={tool} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div
                className="grid grid-cols-3 gap-6 md:grid-cols-4 justify-items-center max-w-sm mx-auto lg:mx-0"
                role="group"
                aria-label="UX/UI Design tools"
              >
                {uxTools.map((tool, index) => (
                  <div key={index}>
                    <ToolIcon tool={tool} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-200 to-transparent transform -translate-x-1/2"></div>

          {/* Developer Tools */}
          <div>
            <h3
              className={`font-bold mb-6 text-center ${largeFontEnabled ? "text-3xl" : "text-2xl"}`}
              tabIndex={0}
            >
              Development
            </h3>
            {animationsEnabled ? (
              <motion.div
                className="grid grid-cols-3 gap-6 md:grid-cols-4 justify-items-center max-w-sm mx-auto lg:mx-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                role="group"
                aria-label="Development tools"
              >
                {devTools.map((tool, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <ToolIcon tool={tool} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="grid grid-cols-3 gap-6 md:grid-cols-4 justify-items-center max-w-sm mx-auto lg:mx-0" role="group" aria-label="Development tools">
                {devTools.map((tool, index) => (
                  <div key={index}>
                    <ToolIcon tool={tool} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
