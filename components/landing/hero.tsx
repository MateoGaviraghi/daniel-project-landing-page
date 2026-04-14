"use client"

import Link from "next/link"
import { Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function Hero() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen bg-white pt-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Text Content */}
        <div
          className={cn(
            "flex flex-1 flex-col items-center text-center transition-all duration-700 lg:items-start lg:text-left",
            isInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          )}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F9FAFB] px-4 py-2 text-sm font-medium text-[#1F2937]">
            <Award className="h-4 w-4 text-[#DC2626]" />
            <span>[+X años de experiencia]</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
            [Nombre del Profesional]
          </h1>

          <p className="mb-8 max-w-xl text-pretty text-lg leading-relaxed text-[#6B7280] sm:text-xl">
            [Especialidad y propuesta de valor. Describe brevemente qué haces y
            cómo ayudas a tus clientes a resolver sus problemas o alcanzar sus
            objetivos.]
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-[#DC2626] px-8 text-white transition-all duration-300 hover:bg-[#B91C1C]"
            >
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#DC2626] px-8 text-[#DC2626] transition-all duration-300 hover:bg-[#DC2626] hover:text-white"
            >
              <Link href="#sobre-mi">Conocer Más</Link>
            </Button>
          </div>
        </div>

        {/* Image/Illustration Placeholder */}
        <div
          className={cn(
            "flex flex-1 items-center justify-center transition-all delay-200 duration-700",
            isInView
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          )}
        >
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-[#F9FAFB] shadow-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 text-6xl text-[#E5E7EB]">
                  <svg
                    className="mx-auto h-24 w-24 text-[#D1D5DB]"
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
    </section>
  )
}
