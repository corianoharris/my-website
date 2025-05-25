"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import RoleMarquee from "@/components/role-marquee"
import TeaserSection from "@/components/teaser-section"
import ApproachSection from "@/components/approach-section"
import ServicesSection from "@/components/services-section"
import ToolsSection from "@/components/tools-section"
import CompaniesSlider from "@/components/companies-slider"
import CommunitySection from "@/components/community-section"
import ArticlesSlider from "@/components/articles-slider"
import EventsSlider from "@/components/events-slider"
import Footer from "@/components/footer"

import "@/styles/custom.css"

export default function Home() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true)
  const [largeFontEnabled, setLargeFontEnabled] = useState(false)

  return (
    <main className={largeFontEnabled ? "text-xl" : "text-base"}>
      <Navbar
        animationsEnabled={animationsEnabled}
        setAnimationsEnabled={setAnimationsEnabled}
        largeFontEnabled={largeFontEnabled}
        setLargeFontEnabled={setLargeFontEnabled}
      />
      <RoleMarquee animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} />
      <TeaserSection animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} /> <ServicesSection animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} />
      <ToolsSection animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} />
      <ApproachSection animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} />
      <CompaniesSlider animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} />
      <CommunitySection animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} />
      <ArticlesSlider animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} />
      <EventsSlider animationsEnabled={animationsEnabled} largeFontEnabled={largeFontEnabled} />
      <Footer largeFontEnabled={largeFontEnabled} />
    </main>
  )
}
