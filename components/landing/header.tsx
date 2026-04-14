"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/95"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="text-xl font-bold text-[#1F2937] transition-colors duration-300 hover:text-[#DC2626]"
        >
          [Nombre del Profesional]
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#1F2937] transition-colors duration-300 hover:text-[#DC2626]"
            >
              {link.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#DC2626] text-white transition-all duration-300 hover:bg-[#B91C1C]"
          >
            <Link href="#contacto">Contactar</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Abrir menú">
              <Menu className="h-6 w-6 text-[#1F2937]" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-white">
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
                  className="mt-4 w-full bg-[#DC2626] text-white transition-all duration-300 hover:bg-[#B91C1C]"
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
