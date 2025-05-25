"use client"

import { motion } from "framer-motion"

interface RoleMarqueeProps {
  animationsEnabled: boolean
  largeFontEnabled: boolean
}

export default function RoleMarquee({ animationsEnabled, largeFontEnabled }: RoleMarqueeProps) {
  const roles = [
    "UX/UI Designer",
    "Full-Stack Developer",
    "Design Technologist",
    "Frontend Engineer",
    "UX Engineer",
    "Creative Technologist",
  ]

  const duplicatedRoles = [...roles, ...roles, ...roles]

  return (
    <div
      className="bg-gray-100 py-4 overflow-hidden"
      tabIndex={0}
      aria-label="Professional roles and specializations"
      role="banner"
    >
      <div className="flex items-center justify-center whitespace-nowrap">
        {animationsEnabled ? (
          <motion.div
            className="flex gap-6 items-center"
            animate={{
              x: [0, -100 * roles.length],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedRoles.map((role, index) => (
              <span
                key={index}
                className={`bg-purple-600 text-white font-medium px-3 py-1 rounded-full shadow-lg ${
                  largeFontEnabled ? "text-sm" : "text-xs"
                }`}
              >
                {role}
              </span>
            ))}
          </motion.div>
        ) : (
          <div className="flex gap-6 items-center">
            {roles.map((role, index) => (
              <span
                key={index}
                className={`bg-purple-600 text-white font-medium px-3 py-1 rounded-full shadow-lg ${
                  largeFontEnabled ? "text-sm" : "text-xs"
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
