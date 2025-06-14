"use client"

import { useRef, useState } from "react"
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
 const ref = useRef<HTMLDivElement | null>(null);

  const toggleExpanded = () =>
  {
    setIsExpanded(!isExpanded)
    window.scrollTo({ top: ref.current?.offsetTop ?? 0, behavior: "smooth" });

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

  const shortText = `Advocating SOLID and DRY principles, favoring simple tools through the Rule of Least Power. In design, I focus on visual hierarchy, balance, and contrast to create clear, accessible, and organized experiences`

  const expandedText = `Futhermore, I prioritize Fitts’ Law in mind—making key actions easy to access and reducing user effort. I follow a mobile-first strategy to ensure seamless experiences across all devices. My modular, component-driven approach is backed by RAPID for decision-making and the AAA pattern for testing. Data guides my choices, while empathy and accessibility shape inclusive, user-friendly designs. I value collaboration, clear communication, and creative problem-solving to deliver thoughtful, scalable solutions`

  return (
    <section
      className="py-16 md:py-20 bg-gradient-to-brfrom-white via-purple-50 to-purple-100"
      tabIndex={0}
      aria-labelledby="approach-heading"
      ref={ref}
    >
      <div className="container mx-auto px-4 max-h">
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
