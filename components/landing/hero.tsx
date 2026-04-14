"use client"

import Link from "next/link"
import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const anim = (name: string, delay = 0) => ({
  animationName: name,
  animationDuration: name === "float" || name === "float-delayed" ? "6s" : "0.7s",
  animationTimingFunction: name === "float" || name === "float-delayed" ? "ease-in-out" : "cubic-bezier(0.16, 1, 0.3, 1)",
  animationFillMode: "both" as const,
  animationIterationCount: name === "float" || name === "float-delayed" ? "infinite" : 1,
  animationDelay: `${delay}ms`,
})

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-white pt-20"
    >
      {/* Subtle gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-red-100/40 to-transparent blur-3xl" style={anim("float")} />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-red-50/30 to-transparent blur-3xl" style={{ ...anim("float-delayed"), animationDuration: "8s" }} />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-bl from-gray-100/50 to-transparent blur-3xl" style={{ ...anim("float"), animationDuration: "7s", animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Text Content */}
        <div
          className={cn(
            "flex flex-1 flex-col items-center text-center lg:items-start lg:text-left",
            !isInView && "opacity-0"
          )}
        >
          <div
            className={cn(
              "mb-6 inline-flex items-center gap-2 rounded-full bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#1F2937] shadow-sm transition-all duration-300 hover:shadow-md",
              !isInView && "opacity-0"
            )}
            style={isInView ? anim("fade-up", 0) : undefined}
          >
            <Award className="h-4 w-4 text-[#DC2626]" />
            <span>[+X anos de experiencia]</span>
          </div>

          <h1
            className={cn(
              "mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl",
              !isInView && "opacity-0"
            )}
            style={isInView ? anim("fade-up", 100) : undefined}
          >
            [Nombre del Profesional]
          </h1>

          <p
            className={cn(
              "mb-8 max-w-xl text-pretty text-lg leading-relaxed text-[#6B7280] sm:text-xl",
              !isInView && "opacity-0"
            )}
            style={isInView ? anim("fade-up", 200) : undefined}
          >
            [Especialidad y propuesta de valor. Describe brevemente que haces y
            como ayudas a tus clientes a resolver sus problemas o alcanzar sus
            objetivos.]
          </p>

          <div
            className={cn(
              "flex flex-col gap-4 sm:flex-row",
              !isInView && "opacity-0"
            )}
            style={isInView ? anim("fade-up", 300) : undefined}
          >
            <Button
              asChild
              size="lg"
              className="btn-shine bg-[#DC2626] px-8 text-white transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-lg hover:shadow-red-500/25"
            >
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#DC2626] px-8 text-[#DC2626] transition-all duration-300 hover:bg-[#DC2626] hover:text-white hover:shadow-lg hover:shadow-red-500/20"
            >
              <Link href="#sobre-mi">Conocer Mas</Link>
            </Button>
          </div>
        </div>

        {/* Image/Illustration Placeholder */}
        <div
          className={cn(
            "flex flex-1 items-center justify-center",
            !isInView && "opacity-0"
          )}
          style={isInView ? { ...anim("scale-in", 300), animationDuration: "0.5s" } : undefined}
        >
          <div className="group relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-[#F9FAFB] shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-200/20 via-transparent to-red-100/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center transition-transform duration-500 group-hover:scale-105">
                <div className="mb-4 text-6xl text-[#E5E7EB]">
                  <svg
                    className="mx-auto h-24 w-24 text-[#D1D5DB] transition-colors duration-300 group-hover:text-[#DC2626]/30"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-[#9CA3AF]">[Imagen del profesional]</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className={cn(
          "section-line mx-auto max-w-7xl",
          isInView ? "opacity-100" : "opacity-0"
        )} />
      </div>
    </section>
  )
}
