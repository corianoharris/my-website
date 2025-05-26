"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ArticlesSliderProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function ArticlesSlider({ animationsEnabled, largeFontEnabled }: ArticlesSliderProps) {
  const articles = [
    {
      title: "Custom CSS Typography Rules",
      image: "/placeholder.svg?height=120&width=120&query=ux design trends graphic with modern elements",
      excerpt:
        "A guide to understand and implement my custom CSS typography rules.",
      date: "March 15, 2024",
      url: "https://www.linkedin.com/pulse/unlock-power-custom-css-typography-game-changer-me-design-harris-bqxec/?trackingId=CjgAFkrtXX5VjrGzMUfP%2FQ%3D%3D",
    },
    {
      title: "Prediabetes Risk Test",
      image: "/placeholder.svg?height=120&width=120&query=web accessibility illustration with inclusive design",
      excerpt:
        "An A/B Website test comparsion between the CDC Prediabetes Risk Test website and my version.",
      date: "February 28, 2024",
      url: "https://www.linkedin.com/pulse/ab-testing-my-version-enhancing-prediabetes-risk-test-coriano-harris-0ozoc/?trackingId=Yg6iIT7JSmYzZ6b3n3GOLQ%3D%3D",
    },
    {
      title: "Donate to Gracie Mobile Profile Screen",
      image: "/placeholder.svg?height=120&width=120&query=design system components with organized elements",
      excerpt:
        "A UX/UI walkthrough of my design thinking process in creating the Gracie profile screen.",
      date: "January 12, 2024",
      url: "https://www.linkedin.com/pulse/case-study-automotives-website-initial-mockup-designs-coriano-harris-0jzvc/?trackingId=QeL96WYOQAmdDGHMi9cioA%3D%3D",
    },
    {
      title: "A+ Automotive's Website Design Mockups",
      image: "/placeholder.svg?height=120&width=120&query=ai and ux design concept with futuristic elements",
      excerpt:
        "A walkthrough my approach to creating the mockups for A+ Automotive's website design, including the rationale behind my design decisions.",
      date: "December 5, 2023",
      url: "https://www.linkedin.com/pulse/case-study-automotives-website-initial-mockup-designs-coriano-harris-0jzvc/?trackingId=QeL96WYOQAmdDGHMi9cioA%3D%3D",
    },
  ]

  const sliderRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

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
    const newIndex = Math.min(articles.length - 1, currentSlide + 1)
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

  const ArticleCard = ({ article, index }: { article: (typeof articles)[0]; index: number }) => {
    const isExpanded = expandedCards.has(index)
    const shouldTruncate = article.excerpt.length > 100

    return (
      <Card className="h-full bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow w-full sm:w-11/12 md:w-10/12">
        <CardContent className="p-4">
          <div className="p-4">
            <div className="space-y-3">
              <h3 className={`font-semibold text-gray-900 ${largeFontEnabled ? "text-xl" : "text-lg"}`} tabIndex={0}>
                {article.title}
              </h3>
              <div
                className={`text-gray-600 leading-relaxed ${largeFontEnabled ? "text-base" : "text-sm"}`}
                tabIndex={0}
              >
                {shouldTruncate && !isExpanded ? (
                  <span>
                    {article.excerpt.substring(0, 100)}
                    <span className="opacity-70">...</span>
                  </span>
                ) : (
                  article.excerpt
                )}
              </div>

              {shouldTruncate && (
                <button
                  onClick={() => toggleExpanded(index)}
                  tabIndex={0}
                  className={`text-purple-600 hover:text-purple-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded ${
                    largeFontEnabled ? "text-base" : "text-sm"
                  }`}
                  aria-expanded={isExpanded}
                  aria-controls={`article-excerpt-${index}`}
                >
                  {isExpanded ? "Show less" : "Show more"}
                </button>
              )}

              <div className="flex items-center justify-between pt-2">

                <span className={`text-gray-400 ${largeFontEnabled ? "text-sm" : "text-xs"} hidden`} tabIndex={0}>
                  {article.date}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  tabIndex={0}
                  className={`h-8 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${largeFontEnabled ? "text-base" : "text-sm"}`}
                >
                  <Link
                    href={article.url}
                    className="text-purple-600 hover:text-purple-700"
                    aria-label={`Read full article: ${article.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read <ExternalLink className="ml-1 h-3 w-3" />
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
      id="articles"
      className="py-16 md:py-24 bg-gradient-to-br from-white via-purple-50 to-purple-100"
      tabIndex={0}
      aria-labelledby="articles-heading"
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
              id="articles-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Article Contributions
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Sharing knowledge and insights through articles and publications.
            </p>
          </motion.div>
        ) : (
          <div className="text-center mb-12">
            <h2
              id="articles-heading"
              className={`font-bold mb-4 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              tabIndex={0}
            >
              Article Contributions
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${largeFontEnabled ? "text-2xl" : "text-xl"}`}
              tabIndex={0}
            >
              Sharing knowledge and insights through articles and publications.
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
              {articles.map((article, index) => (
                <motion.div key={index} className="min-w-[320px] md:min-w-[400px] snap-start" variants={itemVariants}>
                  <ArticleCard article={article} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div ref={sliderRef} className="flex overflow-x-auto space-x-4 pb-6 snap-x snap-mandatory hide-scrollbar">
              {articles.map((article, index) => (
                <div key={index} className="min-w-[320px] md:min-w-[400px] snap-start">
                  <ArticleCard article={article} index={index} />
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
              disabled={currentSlide === articles.length - 1}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {articles.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-purple-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
