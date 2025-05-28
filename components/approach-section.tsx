"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ApproachSectionProps
{
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function ApproachSection({ animationsEnabled, largeFontEnabled }: ApproachSectionProps)
{
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () =>
  {
    setIsExpanded(!isExpanded)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const shortText = ` I focus on keeping code clean and maintainable using the SOLID principles (like Single Responsibility and
              Dependency Inversion) and the DRY principle (Don’t Repeat Yourself). I also stick to
              simple, effective tools through the Rule of Least Power. In design, I prioritize visual hierarchy to guide
              users through the page and balance to keep things organized and uncluttered. Contrast is key to making
              important elements stand out and accessible for all users.`

  const expandedText = `I also incorporate Fitts’
              Law—designing interfaces so that the most important elements are the easiest to interact with,
              reducing user effort and improving the experience. For web strategy, I follow mobile-first
              design, ensuring that the site is optimized for smaller screens first and then scaling up. This
              ensures a seamless experience across all devices, especially as mobile traffic continues to rise. I
              approach challenges with a modular, component-driven process, using RAPID principles (Recommend,
              Agree, Perform, Input, Decide) for decisions and the AAA ( Arrange, Act, Acceptance)
              pattern for testing. Data is always my guide for informed decisions. Empathy and
              accessibility guide my design decisions to create user-friendly and inclusive solutions. I value
              collaboration, clear communication, and creative
              problem-solving to find the best answers.`

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-brfrom-white via-purple-50 to-purple-100"
      tabIndex={0}
      aria-labelledby="approach-heading"
    >
      <div className="container mx-auto px-4">
        {animationsEnabled ? (
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              id="approach-heading"
              className={`font-bold mb-6 text-gray-900 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              tabIndex={0}
            >
              What I Apply to Everything I Do
            </motion.h2>

            <motion.div
              className={`leading-relaxed text-gray-700 space-y-4 ${largeFontEnabled ? "text-xl" : "text-lg"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p tabIndex={0}>{shortText}</p>

              {isExpanded && (
                <motion.div
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="space-y-4"
                >
                  <p tabIndex={0}>{expandedText}</p>
                </motion.div>
              )}

              <motion.div
                className="pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  variant="ghost"
                  tabIndex={0}
                  onClick={toggleExpanded}
                  className={`text-primary hover:text-primary/80 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${largeFontEnabled ? "text-lg px-6 py-3 h-auto" : ""
                    }`}
                  aria-expanded={isExpanded}
                  aria-controls="expanded-content"
                >
                  {isExpanded ? (
                    <>
                      ...less <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      ...more <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <h2
              id="approach-heading"
              className={`font-bold mb-6 text-gray-900 ${largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
                }`}
              tabIndex={0}
            >
              What I Apply to Everything I Do
            </h2>

            <div className={`leading-relaxed text-gray-700 space-y-4 ${largeFontEnabled ? "text-xl" : "text-lg"}`}>
              <p tabIndex={0}>{shortText}</p>

              {isExpanded && (
                <div className="space-y-4" id="expanded-content">
                  <p tabIndex={0}>{expandedText}</p>
                </div>
              )}

              <div className="pt-4">
                <Button
                  variant="ghost"
                  tabIndex={0}
                  onClick={toggleExpanded}
                  className={`text-primary hover:text-primary/80 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${largeFontEnabled ? "text-lg px-6 py-3 h-auto" : ""
                    }`}
                  aria-expanded={isExpanded}
                  aria-controls="expanded-content"
                >
                  {isExpanded ? (
                    <>
                      ...less <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      ...more <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
