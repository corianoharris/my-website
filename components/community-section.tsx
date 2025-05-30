"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Code, MessageCircle, Award, Globe, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CommunitySectionProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function CommunitySection({ animationsEnabled, largeFontEnabled }: CommunitySectionProps) {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const contributions = [
    {
      title: "Code Connector",
      role: "Coummunity Advocate | Mentor",
      icon: <Users className="h-5 w-5 text-purple-600" />,
      image: "/images/fofsd.svg",
      description:
      "Code Connector is a community of tech-enthusiasts who are passionate about coding and technology.",
      stats: "+2000 members",
      // link expires every 30 days
      link: "https://join.slack.com/t/code-connector/shared_invite/zt-369qmi7lu-apUn_DzwRCWq8JR9rZUYiQ",
    },
    {
      title: "UX/UI Bytes",
      role: "Creator | Host",
      icon: <Heart className="h-5 w-5 text-purple-600" />,
      image: "/images/ux-ui-bytes.png",
      description:
        "An hour open forum for everyone interested in UX and UI design to come a discuss, share, and learn from one another.",
      stats: "Avg. 28 attendees",
      link: "https://www.meetup.com/memphis-technology-user-groups/events/308003044/?eventOrigin=group_events_list",
    },
    {
      title: "ImagineU UoM",
      icon: <MessageCircle className="h-5 w-5 text-purple-600" />,
      image: "/images/uom.png",
      description:
      "A mentor for the University of Memphis summer immersive and intensive 12-week entrepreneurial experience.",
      role: "Mentor",
      stats: "12 students",
      link: "https://www.memphis.edu/crews/opportunities/imagineu.php",
    },
    {
      title: "Friends of Figma SD",
      role: "Advocate | Co-Coummunity Leader",
      icon: <Users className="h-5 w-5 text-purple-600" />,
      image: "/images/fofsd.svg",
      description:
      "The Figma Community Group is a monthly meetup where we share our knowledge and tips on Figma with like-minded designers. We also have a mentorship program for those who want to learn Figma.",
      stats: "+594 members",
      link: "https://friends.figma.com/san-diego/",
    },
    {
      title: "Memphis Technology",
      role: "Contributor",
      icon: <Code className="h-5 w-5 text-purple-600" />,
      image: "/images/mtf.png",
      description:
        "Memphis Technology Foundation open source projects.",
      stats: "+28 PRs",
      link: "https://github.com/orgs/memtech/teams/designandcode",
    },
  ]

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
    const newIndex = Math.min(contributions.length - 1, currentSlide + 1)
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

  const CommunityCard = ({ contribution, index }: { contribution: (typeof contributions)[0]; index: number }) => {
    const isExpanded = expandedCards.has(index)
    const shouldTruncate = contribution.description.length > 100

    return (
      <Card className="h-full bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow w-full sm:w-12/12 md:w-10/12">
        <CardContent className="p-4">
          <div className="flex flex-col justify-between h-full">
            {/* Contribution image */}
            <div className="flex flex-cols justify-start items-center gap-4 flex-wrap mb-4 bg-purple-800 rounded-sm p-2 text-white shadow-2xl">
            <div className="flex-shrink-0" tabIndex={0} aria-label={`${contribution.title} contribution`}>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200 flex flex-col justify-between  border-gray-200">
                <Image
                  src={contribution.image || "/placeholder.svg"}
                  alt={contribution.title}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* <div className="absolute -top-1 right-1">{contribution.icon}</div> */}
            </div>

              <h3
                className={`font-semibold text-white mb-1 ${largeFontEnabled ? "text-lg" : "text-md"}`}
                tabIndex={0}
              >
                {contribution.title}
              </h3>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div
                className={`text-gray-600 leading-relaxed mb-3 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                tabIndex={0}
              >
                {shouldTruncate && !isExpanded ? (
                  <span>
                    {contribution.description.substring(0, 100)}
                    <span className="opacity-70">...</span>
                  </span>
                ) : (
                  contribution.description
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
                  aria-controls={`contribution-description-${index}`}
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}

              <div>
                <span
                  className={`font-medium text-white inline-block ${largeFontEnabled ? "text-base" : "text-sm"} rounded-md px-2 py-1 bg-purple-600`}
                  tabIndex={0}
                >
                  {contribution.role}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`font-medium text-purple-600 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                  tabIndex={0}
                >
                  {contribution.stats}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  tabIndex={0}
                  className={`h-8 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                >
                  <Link
                    href={contribution.link}
                    className="text-purple-600 hover:text-purple-700"
                    aria-label={`Learn more about ${contribution.title} contribution`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section
      id="community"
      className="py-16 md:py-24 bg-gradient-to-brfrom-white via-purple-50 to-purple-100"
      aria-labelledby="community-heading"
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
              id="community-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Community Contributions
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Giving back to the design and development community through mentoring, open source, and knowledge sharing.
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-12">
            <h2
              id="community-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Community Contributions
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Giving back to the design and development community through mentoring, open source, and knowledge sharing.
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
              {contributions.map((contribution, index) => (
                <motion.div key={index} className="min-w-[320px] md:min-w-[400px] snap-start" variants={itemVariants}>
                  <CommunityCard contribution={contribution} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div ref={sliderRef} className="flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory hide-scrollbar">
              {contributions.map((contribution, index) => (
                <div key={index} className="min-w-[320px] md:min-w-[400px] snap-start">
                  <CommunityCard contribution={contribution} index={index} />
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
              disabled={currentSlide === contributions.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {contributions.map((_, index) => (
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
    </section>
  )
}
