"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ExternalLink, X, Calendar, Users, TrendingUp, Award, Maximize2, ChevronUp, ChevronDown, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface CompaniesSliderProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function CompaniesSlider({ animationsEnabled, largeFontEnabled }: CompaniesSliderProps) {
  const companies = [
    {
      name: "Bravery Over Bullying",
      logo: "/images/bob-logo.png",
      role: "UX Engineer",
      description:
        "Tasked with redesign of the Bravery Over Bullying website to increase user pledge engagement.",
      date: "2025-2025",
      url: "https://braveryoverbullying.org/",
      project: {
        title: "Redesign of Bravery Over Bullying website",
        duration: "3 days",
        teamSize: "6 people",
        impact: "Increased pledge completion rate by 32%",
        images: [
          {
            src: "/images/bob-1.png",
            title: "Home Page",
            description: "Improved the CTA call to action content and layout",
          },
          {
            src: "/images/bob-2.png",
            title: "Added Donation CTA button to navigation",
            description: "Red button to immediately draw user attention to take action",
          },
        ],
        technologies: ["WordPress", "Divi", "Figma", "Jot Forms", "QR Code"],
        achievements: [
          "Added a Donation CTA button to navigation",
          "Create a Pledge contract form",
          "Added merchandising page",
          "Added donation transaction page",
        ],
        metrics: {
          pledgeFormCompletion: "+32%",
          merchSales: "+10 per month",
          donation: "+12% over previous month",
        },
        // ctaText: "View Documentation",
        // ctaUrl: "#",
      },
    },
    {
      name: "Cetera Financial Group",
      logo: "/images/cetera-logo.png",
      role: "Lead Design Technologist",
      description:
        "Tasked with implementing a Storybook Angular library",
      date: "2023-2024",
      url: "https://advisor.adviceworks.net/auth/login",
      project: {
        title: "Create a Storybook Angular UI Library",
        duration: "8 months",
        teamSize: "4 designers and 2 developments teams",
        impact: "Increased developer productivity by 50%",
        images: [
          {
            src: "/images/cetera-1.png",
            title: "Before: 11 custom variants in the main product application.",
            description: "Conducted a UI Components usage audit",
          },
          {
            src: "/images/cetera-2.png",
            title: "After: Created a resuable button component",
            description: "Flexible button allowing developers to dynamically customize text, size, colors, states, and left/right icons.",
          },
        ],
        technologies: ["Angular", "TypeScript", "Figma", "Analytics", "Storybook", "SASS"],
        achievements: [
          "Reduced developer UI components button customization time by 90%",
          "Improved button accessibility score to 98%",
        ],
        metrics: {
          developerEngagement: "+40%",
          taskCompletion: "+35%",
          accessibilityScore: "98%",
        },
        // ctaText: "View Case Study",
        // ctaUrl: "#",
      },
    },
    {
      name: "Ally Financial",
      logo: "/images/ally-logo.png",
      role: "Senior Front End Developer",
      description:
        "Tasked with migrating a legacy Ember application to a React platform to take adavantage of SSR / SSG capabilities.",
      date: "2022-2023",
      url: "https://www.ally.com/",
      project: {
        title: "Redesign Dashboard Interface",
        duration: "6 months",
        teamSize: "9 people",
        impact: "Increased Google ranking by 30%.",
        images: [
          {
            src: "/images/ally-1.png",
            title: "Rendered Dashboard",
            description: "Dashboard was slow to render, so we implemented server side rendering to improve performance.",
          },
          {
            src: "/images/ally-2.png",
            title: "Added breadcrumbs navigation",
            description: "User were frustrated by the lack of navigation, so we added breadcrumbs to make it easy to navigate the dashboard.",
          }
        ],
        technologies: ["Ember.js", "React.js", "Node.js", "Mirage.js", "Faker.js", "SASS"],
        achievements: [
          "Incorporated mortage and auto accounts to the dashboard within 2 months",
          "Resolved user pain point of lack on navigation guidance",
          "Resolved Google Ads bug that was causing a UI jump of dashboard sub navigation",
        ],
        metrics: {
          firstContentfulPaint: "0.8s",
          SEO: "93%",
          largestContentfulPaint : "1.0s",
          userSatisfication: "+32%",
        },
        // ctaText: "Explore Project",
        // ctaUrl: "#",
      },
    },
    {
      name: "FedEX Services",
      logo: "/images/fedex-logo.png",
      role: "UX/UI Designer",
      description:
        "Tasked with redesign on the FedEx Tracking package statuses page.",
      date: "2019-2020",
      url: "https://www.fedex.com/en-us/tracking.html",
      project: {
        title: "Redesign Tracking Package Status Page",
        duration: "4 months",
        teamSize: "6 people",
        impact: "+35% user satisfaction with package tracking statuses page.",
        images: [
          {
            src: "/images/fedex-1.png",
            title: "Navigation Links",
            description: "Consistent navigation links",
          },
          {
            src: "/images/fedex-2.png",
            title: "Tabs Navigation",
            description: "Improved the focus on tabs navigation to improve accessibility experience",
          },
        ],
        technologies: ["Stectck", "Adobe XD", "UserTesting.com", "Design System"],
        achievements: [
          "Created comprehensive Design System",
          "Implemented a status title filter experience",
        ],
        metrics: {
          developmentSpeed: "+35%",
          designConsistency: "+80%",
          codeReusability: "+65%",
          teamProductivity: "+50%",
        },
        // ctaText: "View Documentation",
        // ctaUrl: "#",
      },
    },
  ]

  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
   const [selectedImage, setSelectedImage] = useState<{ image: any; projectName: string } | null>(null)
  const [isImageExpanded, setIsImageExpanded] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof companies)[0] | null>(null)

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = window.innerWidth < 768 ? 320 + 16 : 400 + 16
      sliderRef.current.scrollTo({ left: index * slideWidth, behavior: "smooth" })
      setCurrentSlide(index)
    }
  }

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentSlide - 1)
    scrollToSlide(newIndex)
  }

  const scrollRight = () => {
    const newIndex = Math.min(companies.length - 1, currentSlide + 1)
    scrollToSlide(newIndex)
  }

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCards(newExpanded)
  }

    const openImageModal = (image: any, projectName: string) => {
    setSelectedImage({ image, projectName })
    setIsImageExpanded(false) // Reset expansion state
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setIsImageExpanded(false)
  }

  const openProjectModal = (company: (typeof companies)[0]) => {
    setSelectedProject(company)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

   const toggleImageExpansion = () => {
    setIsImageExpanded(!isImageExpanded)
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
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const CompanyCard = ({ company, index }: { company: (typeof companies)[0]; index: number }) => {
    const isExpanded = expandedCards.has(index)
    const shouldTruncate = company.description.length > 100

    return (
      <Card className="h-full bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow w-full sm:w-11/12 md:w-10/12">
        <CardContent className="p-4">
          <div className="flex flex-col justify-between h-full">
            {/* Company logo */}
            <div className="flex flex-cols justify-start items-center gap-4 flex-wrap mb-4 bg-purple-800 rounded-sm p-2 text-white shadow-2xl">
              <div className="flex-shrink-0" tabIndex={0} aria-label={`${company.name} company logo`}>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 border-neutral-400 border shadow-2xl">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  loading="eager"
                />
              </div>
            </div>
              <h3
                className={`font-semibold  mb-1 ${largeFontEnabled ? "text-xl" : "text-lg"}`}
                tabIndex={0}
              >
                {company.name}
              </h3>

            </div>
            

            {/* Content */}
            <div className="flex-1 min-w-0">
              
              <p
                className={`text-purple-600 font-medium mb-2 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                tabIndex={0}
              >
                {company.role}
              </p>
              <div
                className={`text-gray-600 leading-relaxed mb-3 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                tabIndex={0}
              >
                {shouldTruncate && !isExpanded ? (
                  <span>
                    {company.description.substring(0, 100)}
                    <span className="opacity-70">...</span>
                  </span>
                ) : (
                  company.description
                )}
              </div>

              {shouldTruncate && (
                <button
                  onClick={() => toggleExpanded(index)}
                  tabIndex={0}
                  className={`text-purple-600 hover:text-purple-700 font-medium mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded ${
                    largeFontEnabled ? "text-base" : "text-sm"
                  }`}
                  aria-expanded={isExpanded}
                  aria-controls={`company-description-${index}`}
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}

              <div className="flex items-center justify-between">
                <span className={`text-gray-400 ${largeFontEnabled ? "text-sm" : "text-xs"}`} tabIndex={0}>
                  {company.date}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  tabIndex={0}
                  onClick={() => openProjectModal(company)}
                  className={`h-8 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                  aria-label={`View detailed project information for ${company.name}`}
                >
                  <span className="flex text-purple-600 hover:text-purple-700">
                    View <ExternalLink className="ml-1 h-3 w-3" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const ImageModal = ({ image, projectName }: { image: any; projectName: string }) => {
    const shouldTruncate = image.description.length > 150

    return (
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeImageModal}
      >
        <motion.div
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-200">
            <button
              onClick={closeImageModal}
              tabIndex={1}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Close image details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{image.title}</h2>
              <p className="text-lg text-purple-600 font-medium">{projectName}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Image */}
            <div className="relative h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden mb-6">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="object-contain w-full h-full"
                draggable={false}
              />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Description</h3>

              <AnimatePresence mode="wait">
                <motion.div
                  key={isImageExpanded ? "expanded" : "collapsed"}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {shouldTruncate && !isImageExpanded ? (
                      <span>
                        {image.description.substring(0, 150)}
                        <span className="opacity-70">...</span>
                      </span>
                    ) : (
                      image.description
                    )}
                  </p>
                </motion.div>
              </AnimatePresence>

              {shouldTruncate && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleImageExpansion}
                  tabIndex={2}
                  className="text-purple-600 hover:text-purple-700 border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  aria-expanded={isImageExpanded}
                  aria-controls="image-description-content"
                >
                  {isImageExpanded ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-1" />
                      Read More
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  const ProjectModal = ({ project }: { project: (typeof companies)[0] }) => {
    return (
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeProjectModal}
      >
        <motion.div
          className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-200">
            <button
              onClick={closeProjectModal}
              tabIndex={1}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              {/* <div className="hidden w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
                <img
                  src={project.logo || "/placeholder.svg"}
                  alt={`${project.name} logo`}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div> */}
              <div>
                <h2 className="text-1xl md:text-2xl font-bold text-gray-900">{project.project.title}</h2>
                <p className="text-lg text-purple-600 font-medium">
                  {project.name} • {project.role}
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{project.project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="h-4 w-4" />
                <span>{project.project.teamSize}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4" />
                <span>{project.project.impact}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Award className="h-4 w-4" />
                <span>{project.date}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Project Images - Clickable Cards */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Project Showcase</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.project.images.map((image, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-all duration-200 cursor-pointer group"
                    onClick={() => openImageModal(image, project.name)}
                  >
                    <CardContent className="p-0">
                      <div className="relative h-64 md:h-80 bg-gray-100 rounded-lg overflow-y-auto mb-6">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.title}
                          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-200"
                          draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
                            <Maximize2 className="h-5 w-5 text-gray-700" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{image.title}</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{image.description.substring(0, 80)}...</p>
                        <div className="mt-2 flex items-center text-purple-600 text-sm font-medium">
                          <span>View details</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Metrics & Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.project.metrics).map(([key, value]) => (
                  <div key={key} className="bg-purple-50 rounded-lg p-2 text-center sm:w-fit md:w-fit">
                    <div className=" text-lg md:text-2xl lg:text-3xl font-semibold text-purple-600">{value}</div>
                    <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.project.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.project.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Interested in this project?</h3>
              <p className="text-purple-100 mb-4">
                Learn more about the process, challenges, and solutions implemented in this project.
              </p>
              {/* <Button
                asChild
                tabIndex={2}
                className="bg-white text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              >
                {project.project.ctaUrl ? (<Link href={project.project.ctaUrl}>
                  {project.project.ctaText} <ExternalLink className="ml-2 h-4 w-4" />
                </Link>) : null}
                
              </Button> */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section id="companies" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        {animationsEnabled ? (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              id="companies-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Company Contributions
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Collaborations with innovative companies to deliver exceptional digital experiences.
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-12">
            <h2
              id="companies-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Company Contributions
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Collaborations with innovative companies to deliver exceptional digital experiences.
            </p>
          </div>
        )}

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              tabIndex={0}
              className="rounded-full bg-background shadow-lg border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              onClick={scrollLeft}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>

          {/* Slider Content */}
          {animationsEnabled ? (
            <motion.div
              ref={sliderRef}
              className="flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory hide-scrollbar"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {companies.map((company, index) => (
                <motion.div key={index} className="min-w-[320px] md:min-w-[400px] snap-start" variants={itemVariants}>
                  <CompanyCard company={company} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div ref={sliderRef} className="flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory hide-scrollbar">
              {companies.map((company, index) => (
                <div key={index} className="min-w-[320px] md:min-w-[400px] snap-start">
                  <CompanyCard company={company} index={index} />
                </div>
              ))}
            </div>
          )}

          {/* Right Arrow */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              tabIndex={0}
              className="rounded-full bg-background shadow-lg border-purple-200 hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              onClick={scrollRight}
              disabled={currentSlide === companies.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {companies.map((_, index) => (
            <button
              key={index}
              tabIndex={0}
              onClick={() => scrollToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-1 ${
                index === currentSlide ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} />}</AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && <ImageModal image={selectedImage.image} projectName={selectedImage.projectName} />}
      </AnimatePresence>
    </section>
  )
}
