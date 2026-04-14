"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const anim = (name: string, delay = 0) => ({
  animationName: name,
  animationDuration: "0.7s",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" as const,
  animationFillMode: "both" as const,
  animationDelay: `${delay}ms`,
})

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#contacto", label: "Contacto" },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <footer ref={ref} className="relative overflow-hidden bg-[#111827] text-white">
      {/* Top accent line */}
      <div className="section-line" />

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#DC2626]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div
          className={cn("grid gap-8 lg:grid-cols-4", !isInView && "opacity-0")}
          style={isInView ? anim("fade-up") : undefined}
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="#inicio"
              className="text-xl font-bold text-white transition-colors duration-300 hover:text-[#DC2626]"
            >
              [Nombre del Profesional]
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#9CA3AF]">
              [Breve descripcion del profesional y su especialidad. Una o dos
              lineas que resuman tu propuesta de valor.]
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9CA3AF]">
              Enlaces Rapidos
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link-animated w-fit text-sm text-[#D1D5DB] transition-colors duration-300 hover:text-[#DC2626]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9CA3AF]">
              Contacto
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:[email@ejemplo.com]"
                className="group flex items-center gap-2 text-sm text-[#D1D5DB] transition-colors duration-300 hover:text-[#DC2626]"
              >
                <Mail className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                [email@ejemplo.com]
              </a>
              <a
                href="tel:[+54 11 1234 5678]"
                className="group flex items-center gap-2 text-sm text-[#D1D5DB] transition-colors duration-300 hover:text-[#DC2626]"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                [+54 11 1234 5678]
              </a>
              <p className="flex items-center gap-2 text-sm text-[#D1D5DB]">
                <MapPin className="h-4 w-4" />
                [Ciudad, Pais]
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9CA3AF]">
              Redes Sociales
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="social-icon-hover flex h-10 w-10 items-center justify-center rounded-full bg-[#1F2937] text-[#D1D5DB] hover:bg-[#DC2626] hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={cn("mt-12 border-t border-[#374151] pt-8", !isInView && "opacity-0")}
          style={isInView ? anim("fade-up", 300) : undefined}
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-[#9CA3AF]">
              &copy; {new Date().getFullYear()} [Nombre del Profesional]. Todos los
              derechos reservados.
            </p>
            <p className="text-sm text-[#9CA3AF]">
              Desarrollado por{" "}
              <a
                href="https://nodotech.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DC2626] transition-all duration-300 hover:text-[#EF4444] hover:underline"
              >
                nodotech.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
