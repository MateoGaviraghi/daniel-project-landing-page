"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Home, Briefcase, User, MessageSquare, ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#inicio", label: "Inicio", icon: Home },
  { href: "#servicios", label: "Servicios", icon: Briefcase },
  { href: "#sobre-mi", label: "Sobre Mi", icon: User },
  { href: "#contacto", label: "Contacto", icon: MessageSquare },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 shadow-lg shadow-black/[0.03] backdrop-blur-xl"
            : "bg-transparent"
        } ${mounted ? "animate-fade-down" : "opacity-0"}`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="#inicio"
            className={`text-xl font-bold transition-all duration-300 hover:text-[#DC2626] ${
              isScrolled ? "text-[#1F2937]" : "text-white drop-shadow-md"
            }`}
          >
            [Nombre del Profesional]
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link-animated text-sm font-medium transition-colors duration-300 hover:text-[#DC2626] ${
                  isScrolled ? "text-[#1F2937]" : "text-white/90 drop-shadow-sm"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="btn-shine bg-[#DC2626] text-white transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-lg hover:shadow-red-500/25"
            >
              <Link href="#contacto">Contactar</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden rounded-lg p-2 transition-colors duration-200 hover:bg-white/10"
            aria-label="Abrir menu"
          >
            <Menu className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? "text-[#1F2937]" : "text-white"}`} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[300px] bg-[#111827] shadow-2xl transition-transform duration-400 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <span className="text-lg font-bold text-white">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-white/60 transition-colors duration-200 hover:bg-white/10 hover:text-white"
            aria-label="Cerrar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-4 py-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="group flex items-center gap-4 rounded-xl px-4 py-4 text-white/80 transition-all duration-200 hover:bg-white/5 hover:text-white"
              style={mobileOpen ? {
                animationName: "fade-left",
                animationDuration: "0.4s",
                animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                animationFillMode: "both",
                animationDelay: `${(i + 1) * 60}ms`,
              } : undefined}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-[#DC2626] transition-all duration-200 group-hover:bg-[#DC2626] group-hover:text-white">
                <link.icon className="h-5 w-5" />
              </div>
              <span className="text-base font-medium">{link.label}</span>
              <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" />
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-6 border-t border-white/10" />

        {/* CTA Button */}
        <div className="px-6 py-6">
          <Button
            asChild
            className="btn-shine w-full bg-[#DC2626] py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-lg hover:shadow-red-500/30"
            onClick={() => setMobileOpen(false)}
          >
            <Link href="#contacto">Contactar</Link>
          </Button>
        </div>

        {/* Footer accent */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <div className="section-line mb-4" />
          <p className="text-center text-xs text-white/30">
            [Nombre del Profesional]
          </p>
        </div>
      </div>
    </>
  )
}
