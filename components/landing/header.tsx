"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
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

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menu">
              <Menu className={`h-6 w-6 transition-colors duration-300 ${isScrolled ? "text-[#1F2937]" : "text-white"}`} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-white/95 backdrop-blur-xl">
            <SheetTitle className="sr-only">Menu de navegacion</SheetTitle>
            <div className="flex flex-col gap-6 pt-8">
              <SheetClose asChild>
                <Link
                  href="#inicio"
                  className="text-xl font-bold text-[#1F2937]"
                >
                  [Nombre del Profesional]
                </Link>
              </SheetClose>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base font-medium text-[#1F2937] transition-colors duration-300 hover:text-[#DC2626]"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button
                  asChild
                  className="btn-shine mt-4 w-full bg-[#DC2626] text-white transition-all duration-300 hover:bg-[#B91C1C]"
                >
                  <Link href="#contacto">Contactar</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
