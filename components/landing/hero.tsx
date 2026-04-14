"use client"

import Link from "next/link"
import Image from "next/image"
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
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Club Atletico Union - Sede Social"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        {/* Subtle red accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#DC2626]/10 via-transparent to-transparent" />
      </div>

      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-red-500/10 to-transparent blur-3xl" style={anim("float")} />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-red-500/8 to-transparent blur-3xl" style={{ ...anim("float-delayed"), animationDuration: "8s" }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Text Content - now centered and full width since no image placeholder needed */}
        <div
          className={cn(
            "flex flex-1 flex-col items-center text-center",
            !isInView && "opacity-0"
          )}
        >
          <div
            className={cn(
              "mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/20",
              !isInView && "opacity-0"
            )}
            style={isInView ? anim("fade-up", 0) : undefined}
          >
            <Award className="h-4 w-4 text-[#DC2626]" />
            <span>[+X anos de experiencia]</span>
          </div>

          <h1
            className={cn(
              "mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl",
              !isInView && "opacity-0"
            )}
            style={isInView ? anim("fade-up", 100) : undefined}
          >
            [Nombre del Profesional]
          </h1>

          <p
            className={cn(
              "mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl",
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
              className="btn-shine bg-[#DC2626] px-8 text-white transition-all duration-300 hover:bg-[#B91C1C] hover:shadow-lg hover:shadow-red-500/40"
            >
              <Link href="#servicios">Ver Servicios</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/50"
            >
              <Link href="#sobre-mi">Conocer Mas</Link>
            </Button>
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
