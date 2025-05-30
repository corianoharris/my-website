"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TeaserSectionProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function TeaserSection({ animationsEnabled, largeFontEnabled }: TeaserSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    start: { opacity: 0.7, scale: 0.9 },
  }

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  }

  return (
    <section
      id="top"
      className="py-8 md:py-16 bg-purple-100 shadow-bottom-lg text-poppins"
      tabIndex={0}
      aria-label="Hero section - Coriano Harris introduction"
    >
      <div className="container mx-auto px-4">
        {animationsEnabled ? (
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            initial="start"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="lg:col-span-8 xl:col-span-7 space-y-6" variants={textVariants}>
              <h1
                className={`text-wave-animation font-bold  text-white tracking-wider ${
                  largeFontEnabled ? "text-5xl md:text-7xl xl:text-8xl" : "text-4xl md:text-6xl xl:text-7xl"
                }`}
                tabIndex={0}
              >
                Crafting human-first solutions for organizations.
              </h1>
              {/* <p className={`text-purple-800 font-semibold max-w-2xl ${largeFontEnabled ? "text-2xl" : "text-xl"}`} tabIndex={0}>
                Full-stack UX designer and developer creating intuitive, engaging, and accessible digital solutions.
              </p> */}
              <p className={`text-purple-900 font-semibold ${largeFontEnabled ? "text-lg" : "text-base"}`} tabIndex={0}>
                Available for freelance projects and full-time opportunities.
              </p>
              {/* Button styles when needed: flex flex-wrap gap-4 */}
              <div className="hidden">
                <Button
                  size={largeFontEnabled ? "lg" : "lg"}
                  className={`bg-white text-purple-600 hover:bg-purple-50 ${
                    largeFontEnabled ? "text-lg px-8 py-4 h-auto" : ""
                  }`}
                >
                  Explore Services
                </Button>
                <Button
                  size={largeFontEnabled ? "lg" : "lg"}
                  variant="outline"
                  className={`border-white text-white hover:bg-white hover:text-purple-600 ${
                    largeFontEnabled ? "text-lg px-8 py-4 h-auto" : ""
                  }`}
                >
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-4 xl:col-span-5 relative"
              variants={imageVariants}
              tabIndex={0}
              aria-label="Coriano speaking to designers and developers about accessibility"
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl transform md:skew-y-6 transition duration-300">
                <Image
                  src="/images/sd_a11y.jpg"
                  alt="Coriano spesking to designers and developers about accessibility"
                  title="Coriano speaking to designers and developers about accessibility"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 xl:col-span-7 space-y-6">
              <h1
                className={`font-bold text-purple-900 tracking-wider leading-10 ${
                  largeFontEnabled ? "text-5xl md:text-7xl xl:text-8xl" : "text-4xl md:text-6xl xl:text-7xl"
                }`}
                tabIndex={0}
              >
                Crafting {""}<span className="text-purple-600">human-first solutions</span>
                <span className="text-purple-400"> for organizations</span>
              </h1>
              {/* <p className={`text-purple-900 font-semibold max-w-2xl ${largeFontEnabled ? "text-2xl" : "text-xl"}`} tabIndex={0}>
                Full-stack UX designer and developer creating intuitive, engaging, and accessible digital solutions.
              </p> */}
              <p className={`text-purple-900 font-semibold ${largeFontEnabled ? "text-lg" : "text-base"}`} tabIndex={0}>
                Available for freelance projects and full-time opportunities.
              </p>
              {/* Button styles when needed: flex flex-wrap gap-4 */}
              <div className="hidden">
                <Button
                  size={largeFontEnabled ? "lg" : "lg"}
                  className={`bg-white text-purple-600 hover:bg-purple-50 ${
                    largeFontEnabled ? "text-lg px-8 py-4 h-auto" : ""
                  }`}
                >
                  Explore Services
                </Button>
                <Button
                  size={largeFontEnabled ? "lg" : "lg"}
                  variant="outline"
                  className={`border-white text-white hover:bg-white hover:text-purple-600 ${
                    largeFontEnabled ? "text-lg px-8 py-4 h-auto" : ""
                  } hidden`}
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            <div
              className="lg:col-span-4 xl:col-span-5 relative"
              tabIndex={0}
              aria-label="Creative workspace showcase image"
            >
              <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl p-2 transform lg:skew-y-3 transition duration-300 mt-4 lg:mt-0">
                <Image
                  src="/images/sd_a11y.jpg"
                  alt="Coriano spesking to designers and developers about accessibility"
                  title="Coriano speaking to designers and developers about accessibility"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
