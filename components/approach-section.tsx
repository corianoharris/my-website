"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ApproachSectionProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function ApproachSection({ animationsEnabled, largeFontEnabled }: ApproachSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
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

  const shortText = `The document discusses how marketing analytics uses procedures and technologies to assess the success of marketing initiatives by estimating performance metrics. It aims to determine how marketing analytics benefits from big data and its implications for marketing strategies and decision-making processes.`

  const expandedText = `Marketing analytics leverages advanced statistical methods and machine learning algorithms to extract meaningful insights from vast datasets. These insights enable marketers to optimize campaign performance, improve customer segmentation, and enhance return on investment. The integration of real-time data processing capabilities allows for dynamic adjustment of marketing strategies based on current market conditions and consumer behavior patterns. Furthermore, predictive analytics helps forecast future trends and customer preferences, enabling proactive marketing approaches that drive sustainable business growth and competitive advantage in today's data-driven marketplace.`

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
              className={`font-bold mb-6 text-gray-900 ${
                largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
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
                  className={`text-primary hover:text-primary/80 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    largeFontEnabled ? "text-lg px-6 py-3 h-auto" : ""
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
              className={`font-bold mb-6 text-gray-900 ${
                largeFontEnabled ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
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
                  className={`text-primary hover:text-primary/80 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    largeFontEnabled ? "text-lg px-6 py-3 h-auto" : ""
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
