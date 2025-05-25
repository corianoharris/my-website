"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Palette, Lightbulb, Users, LineChart, Search, Shield, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServicesSectionProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function ServicesSection({ animationsEnabled, largeFontEnabled }: ServicesSectionProps) {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      icon: <Palette className="h-6 w-6 text-white flex-shrink-0" />,
      title: "UX/UI Design",
      description: "Creating intuitive, engaging user experiences with a focus on accessibility and usability.",
      details: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing and iteration",
      ],
    },
    {
      icon: <Code className="h-6 w-6 text-white flex-shrink-0" />,
      title: "Full-Stack Development",
      description: "Building robust, scalable applications with modern technologies and best practices.",
      details: [
        "React, Next.js, and TypeScript development",
        "Node.js, MongoDB, GraphQL,and other database integration",
        "API design and implementation",
        "Performance optimization",
        "Testing and deployment",
      ],
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-white flex-shrink-0" />,
      title: "Design Systems",
      description: "Developing comprehensive design systems that ensure consistency and efficiency.",
      details: [
        "Design system creation",
        "Component library development",
        "Design token management",
        "Documentation and guidelines",
        "Cross-platform consistency",
        "Team training and adoption",
      ],
    },
    {
      icon: <Users className="h-6 w-6 text-white flex-shrink-0" />,
      title: "User Research",
      description: "Conducting thorough research to understand user needs and behaviors.",
      details: [
        "User interviews and surveys",
        "Competitive analysis",
        "Journey mapping",
        "A/B testing setup",
        "Data analysis and insights",
      ],
    },
    {
      icon: <LineChart className="h-6 w-6 text-white flex-shrink-0" />,
      title: "Analytics & Optimization",
      description: "Using data to optimize user experiences and improve conversion rates.",
      details: [
        "Google Analytics setup",
        "Conversion funnel analysis",
        "Performance monitoring",
        "User behavior tracking",
        "ROI measurement",
      ],
    },
    {
      icon: <Palette className="h-6 w-6 text-white flex-shrink-0" />,
      title: "Color Analysis",
      description: "Professional color analysis and palette development for brands and digital products.",
      details: [
        "Personal and brand color analysis",
        "Seasonal color palette creation",
        "Color psychology consultation",
        "Accessibility-focused color schemes",
        "Brand color strategy development",
      ],
    },
    {
      icon: <Search className="h-6 w-6 text-white flex-shrink-0" />,
      title: "Website Audit",
      description: "Comprehensive analysis of your website's performance, SEO, and user experience.",
      details: [
        "Technical SEO analysis",
        "Performance and speed testing",
        "Mobile responsiveness review",
        "Content and structure evaluation",
        "Competitive benchmarking",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-white flex-shrink-0" />,
      title: "Accessibility Audit",
      description: "Ensuring your digital products are accessible to all users, including those with disabilities.",
      details: [
        "WCAG 2.1 compliance assessment",
        "Screen reader compatibility testing",
        "Keyboard navigation evaluation",
        "Color contrast analysis",
        "Remediation recommendations",
      ],
    },
  ]

  const toggleExpanded = (index: number) => {
    setExpandedService(expandedService === index ? null : index)
  }

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

  const ServiceCard = ({ service, index }: { service: (typeof services)[0]; index: number }) => {
    const isExpanded = expandedService === index

    return (
      <Card className="overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 transition-all duration-300 border-0 shadow-lg hover:shadow-xl">
        <CardContent className="p-0">
          {/* Main service card */}
          <button
            className={`w-full p-4 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-inset ${
              largeFontEnabled ? "h-[60px]" : "h-[50px]"
            }`}
            tabIndex={0}
            onClick={() => toggleExpanded(index)}
            role="button"
            aria-expanded={isExpanded}
            aria-controls={`service-details-${index}`}
            aria-label={`${service.title} service. ${service.description}. Click to ${isExpanded ? "collapse" : "expand"} service details and features.`}
          >
            <div className="flex-shrink-0" aria-hidden="true">
              {service.icon}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <h3
                className={`text-white font-semibold truncate group-hover:text-purple-100 transition-colors ${
                  largeFontEnabled ? "text-base" : "text-sm"
                }`}
              >
                {service.title}
              </h3>
            </div>
            <div className="flex-shrink-0">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-white" />
              ) : (
                <ChevronDown className="h-4 w-4 text-white" />
              )}
            </div>
          </button>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                id={`service-details-${index}`}
                initial={animationsEnabled ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={animationsEnabled ? { height: 0, opacity: 0 } : { height: 0, opacity: 1 }}
                transition={animationsEnabled ? { duration: 0.3, ease: "easeInOut" } : { duration: 0 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 bg-purple-800/50">
                  <p className={`text-purple-100 mb-3 leading-relaxed ${largeFontEnabled ? "text-base" : "text-sm"}`}>
                    {service.description}
                  </p>
                  <ul className="space-y-2" role="list">
                    {service.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className={`flex items-start gap-2 text-purple-200 ${largeFontEnabled ? "text-sm" : "text-xs"}`}
                      >
                        <span className="w-1 h-1 bg-purple-300 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    )
  }

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-br from-white to-purple-50"
      tabIndex={0}
      aria-labelledby="services-heading"
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
              id="services-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Services
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Stratergy, research, design and development services to bring your digital vision to life.
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-12">
            <h2
              id="services-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Services
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Comprehensive design and development services to bring your digital vision to life.
            </p>
          </div>
        )}

        {animationsEnabled ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard service={service} index={index} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index}>
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
