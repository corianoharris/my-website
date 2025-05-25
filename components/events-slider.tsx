"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Calendar, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface EventsSliderProps
{
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function EventsSlider({ animationsEnabled, largeFontEnabled }: EventsSliderProps)
{
  const events = [
    {
      title: "ColorCode Buffalo",
      image: "/images/colorcode.png",
      date: "May 3, 2025",
      location: "Buffalo, NY",
      role: "Speaker",
      topic:
        "Utilizing Coloristic to drive user engagement and conversion rates in the digital world",
      url: "https://colorcode.events/speaker/coriano-harris/",
    },
    {
      title: "BDPA Lunch and Learn",
      image: "/images/bdpa.png",
      date: "May 1, 2025",
      location: "Memphis, TN",
      role: "Panelist",
      topic:
        "A panel discussion and QA session with Memphis-based industry leaders on the future of tech",
      url: "https://bdpamemphis.org/",
    },
    {
      title: "World Design Captial 2024 Friends of Figma SD",
      image: "/images/sddtk.png",
      date: "September 18–25, 2024",
      location: "San Diego, CA",
      role: "Speaker",
      topic:
        "A 2 hour workshop on UX Leadership Best Practices and Tools for Design Teams",
      url: "https://wdo.org/programmes/wdc/wdc-san-diego-tijuana-2024/why-san-diego-and-tijuana/",
    },
    {
      title: "Breakthrough Leadership Foundation Event",
      image: "/images/breakthroughLeadership.png",
      date: "April 18, 2025",
      location: "Memphis, TN",
      role: "Speaker",
      topic:
        "A Talk about how to apply Ethical AI to your business and how to make sure you are doing it right",
      url: "https://breakthroughleadershipfoundation.org/",
    },
     {
      title: "Memphis Voyager - A Conversation with Coriano Harris",
      image: "/icons/memphisvoyager.png",
      date: "March 25, 2025",
      location: "Memphis, TN",
      role: "Inteviewee",
      topic:
        "A fun article about Coriano Harris ux/ui and developement journery",
      url: "https://memphisvoyager.com/interview/conversations-with-coriano-harris",
    },
     {
      title: "Never Be a Spectator - A Conversation with Coriano Harris",
      image: "/icons/iheart.png",
      date: "May 1, 2020",
      location: "Virtual",
      role: "Inteviewee",
      topic:
        "A fun and inimate conversation with Coriano Harris about his ux/ui and developement journery and why he can't stand to be a spectator",
      url: "https://www.iheart.com/podcast/269-the-code-to-life-62799139/episode/coriano-harris-never-be-a-spectator-62810785/",
    },
  ]

  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const scrollToSlide = (index: number) =>
  {
    if (sliderRef.current)
    {
      const slideWidth = window.innerWidth < 768 ? 320 + 16 : 400 + 16
      sliderRef.current.scrollTo({ left: index * slideWidth, behavior: "smooth" })
      setCurrentSlide(index)
    }
  }

  const scrollLeft = () =>
  {
    const newIndex = Math.max(0, currentSlide - 1)
    scrollToSlide(newIndex)
  }

  const scrollRight = () =>
  {
    const newIndex = Math.min(events.length - 1, currentSlide + 1)
    scrollToSlide(newIndex)
  }

  const toggleExpanded = (index: number) =>
  {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index))
    {
      newExpanded.delete(index)
    } else
    {
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

  const EventCard = ({ event, index }: { event: (typeof events)[0]; index: number }) =>
  {
    const isExpanded = expandedCards.has(index)
    const shouldTruncate = event.topic.length > 50

    return (
      <Card className="h-full bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            {/* Event image */}
            <div className="flex-shrink-0 relative" tabIndex={0} aria-label={`${event.title} event`}>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-purple-200">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <Badge
                className={`absolute -top-1 -right-1 px-1 py-0 h-5 bg-purple-600 text-white ${largeFontEnabled ? "text-xs" : "text-xs"
                  }`}
              >
                {event.role.split(" ")[0]}
              </Badge>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3
                className={`font-semibold text-gray-900 mb-2 ${largeFontEnabled ? "text-xl" : "text-lg"}`}
                tabIndex={0}
              >
                {event.title}
              </h3>

              <div className="space-y-1 mb-3">
                <div
                  className={`flex items-center gap-2 text-gray-600 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                  tabIndex={0}
                >
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div
                  className={`flex items-center gap-2 text-gray-600 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                  tabIndex={0}
                >
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div
                className={`text-gray-600 leading-relaxed mb-3 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                tabIndex={0}
              >
                <span className="font-medium">Topic:</span>{" "}
                {shouldTruncate && !isExpanded ? (
                  <span>
                    {event.topic.substring(0, 50)}
                    <span className="opacity-70">...</span>
                  </span>
                ) : (
                  event.topic
                )}
              </div>

              {shouldTruncate && (
                <button
                  onClick={() => toggleExpanded(index)}
                  tabIndex={0}
                  className={`text-purple-600 hover:text-purple-700 font-medium mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded ${largeFontEnabled ? "text-base" : "text-sm"
                    }`}
                  aria-expanded={isExpanded}
                  aria-controls={`event-topic-${index}`}
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className={largeFontEnabled ? "text-sm" : "text-xs"} tabIndex={0}>
                  {event.role}
                </Badge>
                {event.url ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    tabIndex={0}
                    aria-label={`View details for ${event.title} event`}
                    className={`h-8 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                  >
                    <Link
                      href={event.url}
                      className="text-purple-600 hover:text-purple-700"
                      aria-label={`View details for ${event.title} event`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    tabIndex={-1}
                    disabled
                    aria-label={`No details available for ${event.title} event`}
                    className={`h-8 px-3 opacity-50 cursor-not-allowed ${largeFontEnabled ? "text-base" : "text-sm"}`}
                  >
                    View
                  </Button>
                )}

              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section
      id="events"
      className="py-16 md:py-24 bg-gradient-to-brfrom-white via-purple-50 to-purple-100"
      tabIndex={0}
      aria-labelledby="events-heading"
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
              id="events-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Event Appearances
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Speaking engagements, workshops, and conferences where I share expertise and connect with the community.
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-12">
            <h2
              id="events-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Event Appearances
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Speaking engagements, workshops, and conferences where I share expertise and connect with the community.
            </p>
          </div>
        )}

        <div className="relative">
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background shadow-lg border-purple-200 hover:border-purple-300"
              onClick={scrollLeft}
              disabled={currentSlide === 0}
              tabIndex={0}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>

          {animationsEnabled ? (
            <motion.div
              ref={sliderRef}
              className="flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory hide-scrollbar"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {events.map((event, index) => (
                <motion.div key={index} className="min-w-[320px] md:min-w-[400px] snap-start" variants={itemVariants}>
                  <EventCard event={event} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div ref={sliderRef} className="flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory hide-scrollbar">
              {events.map((event, index) => (
                <div key={index} className="min-w-[320px] md:min-w-[400px] snap-start">
                  <EventCard event={event} index={index} />
                </div>
              ))}
            </div>
          )}

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background shadow-lg border-purple-200 hover:border-purple-300"
              onClick={scrollRight}
              disabled={currentSlide === events.length - 1}
              tabIndex={0}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-purple-500" : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
