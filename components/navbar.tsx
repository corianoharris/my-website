"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { set } from "react-hook-form"

interface NavbarProps
{
  animationsEnabled: boolean
  setAnimationsEnabled: (value: boolean) => void
  largeFontEnabled: boolean
  setLargeFontEnabled: (value: boolean) => void
}

export default function Navbar({
  animationsEnabled,
  setAnimationsEnabled,
  largeFontEnabled,
  setLargeFontEnabled,
}: NavbarProps)
{
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () =>
  {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "#top" },
    { name: "Services", href: "#services" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ]

  const contributionLinks = [
    { name: "Companies", href: "#companies" },
    { name: "Community", href: "#community" },
    { name: "Articles", href: "#articles" },
  ]

  const isContributionActive = contributionLinks.some(link => link.name === activeLink)

  return (
    <header className="fixed top-0 z-20 bg-background/80 backdrop-blur-md border-b w-full" role="banner">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="#top"
              tabIndex={1}
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md"
            >
              <img
                src="/images/favicon.svg"
                alt="Coriano Harris Portfolio Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="font-bolder text-2xl">Coriano Harris</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">

            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                tabIndex={index + 2}
                className={`rounded-md px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${activeLink === link.name
                  ? 'text-purple-900 bg-purple-100'
                  : 'text-foreground/70 hover:text-foreground hover:bg-purple-50'
                  }`}
                aria-label={`Navigate to ${link.name} section`}
                onClick={(e) =>
                {
                  // Optional: prevent default if you're handling navigation yourself
                  // e.preventDefault();

                  setActiveLink(link.name);

                  if (link.name === 'Home')
                  {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                {link.name}
              </Link>
            ))}

            {/* Contributions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger
                tabIndex={6}
                className="flex items-center gap-1 text-foreground/70 hover:text-foreground hover:bg-purple-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-3 py-2"
              >
                Contributions
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {contributionLinks.map((link, index) => (
                  <DropdownMenuItem key={link.name} asChild
                    onMouseDown={(e) =>
                    {
                      setActiveLink(link.name)
                    }}
                    className={`rounded-md px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${activeLink === link.name
                      ? 'text-purple-900 bg-purple-100'
                      : 'text-foreground/70 hover:text-foreground hover:bg-purple-50'
                      }`}
                  >
                    <Link
                      key={link.name}
                      href={link.href}
                      tabIndex={index + 2}
                      className={`rounded-md px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${activeLink === link.name
                        ? 'text-purple-900 bg-purple-100'
                        : 'text-foreground/70 hover:text-foreground hover:bg-purple-50'
                        }`}
                      aria-label={`Navigate to ${link.name} section`}
                      onClick={() =>
                      {
                        setActiveLink(link.name);
                        if (activeLink === link.name)
                        {
                          setIsMenuOpen(true)
                        } else {
                          setIsMenuOpen(false)
                        }

                      }}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Toggle Switches */}
          <div className="hidden md:flex items-center gap-4" role="group" aria-label="Accessibility controls">
            <div className="flex items-center gap-2">
              <Switch
                id="animations-toggle"
                tabIndex={7}
                checked={animationsEnabled}
                onCheckedChange={setAnimationsEnabled}
                aria-describedby="animations-description"
              />
              <Label htmlFor="animations-toggle" className="text-sm">
                Animations
              </Label>
              <span id="animations-description" className="sr-only">
                Toggle animations on or off for better accessibility
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Switch
                id="font-size-toggle"
                tabIndex={8}
                checked={largeFontEnabled}
                onCheckedChange={setLargeFontEnabled}
                aria-describedby="font-size-description"
              />
              <Label htmlFor="font-size-toggle" className="text-sm">
                Large Text
              </Label>
              <span id="font-size-description" className="sr-only">
                Toggle larger text size for better readability
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md"
            tabIndex={9}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 space-y-4" role="navigation" aria-label="Mobile navigation">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  tabIndex={isMenuOpen ? index + 10 : -1} // tabindex 10-13 when open, -1 when closed
                  className="text-foreground/70 hover:text-foreground hover:bg-purple-50 transition-all duration-200 py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  onClick={() =>
                  {
                    setIsMenuOpen(false)
                    if (link.name === "Home")
                    {
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  }}
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Contributions Links */}
              <DropdownMenu>
              <DropdownMenuTrigger
                tabIndex={6}
                className="flex items-center gap-1 text-foreground/70 hover:text-foreground hover:bg-purple-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-md px-3 py-2"
              >
                Contributions
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {contributionLinks.map((link, index) => (
                  <DropdownMenuItem key={link.name} asChild
                    onMouseDown={(e) =>
                    {
                      setActiveLink(link.name)
                    }}
                    className={`rounded-md px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${activeLink === link.name
                      ? 'text-purple-900 bg-purple-100'
                      : 'text-foreground/70 hover:text-foreground hover:bg-purple-50'
                      }`}
                  >
                    <Link
                      key={link.name}
                      href={link.href}
                      tabIndex={index + 2}
                      className={`rounded-md px-3 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${activeLink === link.name
                        ? 'text-purple-900 bg-purple-100'
                        : 'text-foreground/70 hover:text-foreground hover:bg-purple-50'
                        }`}
                      aria-label={`Navigate to ${link.name} section`}
                      onClick={() =>
                      {
                        setActiveLink(link.name);
                        toggleMenu();

                      }}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            </nav>

            <div className="pt-4 border-t flex flex-col gap-3" role="group" aria-label="Mobile accessibility controls">
              <div className="flex items-center justify-between">
                <Label htmlFor="mobile-animations-toggle" className="text-sm">
                  Animations
                </Label>
                <Switch
                  id="mobile-animations-toggle"
                  tabIndex={isMenuOpen ? 17 : -1}
                  checked={animationsEnabled}
                  onCheckedChange={setAnimationsEnabled}
                  aria-describedby="mobile-animations-description"
                />
                <span id="mobile-animations-description" className="sr-only">
                  Toggle animations on or off for better accessibility
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="mobile-font-size-toggle" className="text-sm">
                  Large Text
                </Label>
                <Switch
                  id="mobile-font-size-toggle"
                  tabIndex={isMenuOpen ? 18 : -1}
                  checked={largeFontEnabled}
                  onCheckedChange={setLargeFontEnabled}
                  aria-describedby="mobile-font-size-description"
                />
                <span id="mobile-font-size-description" className="sr-only">
                  Toggle larger text size for better readability
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
