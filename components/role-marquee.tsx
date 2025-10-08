"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface RoleMarqueeProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function RoleMarquee({ animationsEnabled, largeFontEnabled }: RoleMarqueeProps) {
  const [isReady, setIsReady] = useState(false)
  
  const roles = [
    "Product Designer",
    "UX Researcher",
    "UX/UI Designer",
    "Full-Stack Developer",
    "Design Technologist",
    "Frontend Engineer",
    "UX Engineer",
    "Creative Technologist",
  ]

  const duplicatedRoles = [...roles, ...roles, ...roles]

  useEffect(() => {
    // Small delay to ensure smooth animation start
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [])

  const Pill = ({ role }: { role: string }) => (
    <span
      className={`bg-purple-600 text-white font-medium px-3 py-1 rounded-full shadow-lg ${
        largeFontEnabled ? "text-sm" : "text-xs"
      }`}
    >
      {role}
    </span>
  )

  return (
    <div
      className="bg-gray-100 py-4 overflow-hidden mt-16"
      tabIndex={0}
      aria-label="Professional roles and specializations"
      role="banner"
    >
      <div className="flex items-center justify-center whitespace-nowrap">
        {!isReady ? (
          <div className="flex gap-6 items-center opacity-0">
            {roles.map((role, index) => (
              <Pill key={index} role={role} />
            ))}
          </div>
        ) : animationsEnabled ? (
          <motion.div
            className="flex gap-6 items-center"
            initial={{ x: 0, opacity: 0 }}
            animate={{ 
              x: [0, -100 * roles.length],
              opacity: 1
            }}
            transition={{
              opacity: { duration: 0.85, ease: "easeOut" },
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
                delay: 0.85
              },
            }}
          >
            {duplicatedRoles.map((role, index) => (
              <Pill key={index} role={role} />
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="flex gap-6 items-center justify-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {roles.map((role, index) => (
              <Pill key={index} role={role} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
