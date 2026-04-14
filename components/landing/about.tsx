"use client"

import { useEffect, useState, useRef } from "react"
import { Clock, Award, Heart, UserCheck } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const anim = (name: string, delay = 0) => ({
  animationName: name,
  animationDuration: "0.7s",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" as const,
  animationFillMode: "both" as const,
  animationDelay: `${delay}ms`,
})

const highlights = [
  {
    icon: Clock,
    value: "+X",
    label: "Anos de Experiencia",
    description: "[Breve descripcion de tu trayectoria]",
  },
  {
    icon: Award,
    value: "+X",
    label: "Proyectos Completados",
    description: "[Breve descripcion de tus logros]",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Compromiso",
    description: "[Breve descripcion de tu dedicacion]",
  },
  {
    icon: UserCheck,
    value: "+X",
    label: "Clientes Satisfechos",
    description: "[Breve descripcion de tu relacion con clientes]",
  },
]

function AnimatedCounter({ value, isInView }: { value: string; isInView: boolean }) {
  const [displayValue, setDisplayValue] = useState(value)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    const numMatch = value.match(/(\d+)/)
    if (!numMatch) return

    const target = parseInt(numMatch[1])
    const prefix = value.slice(0, value.indexOf(numMatch[1]))
    const suffix = value.slice(value.indexOf(numMatch[1]) + numMatch[1].length)
    const duration = 1500
    const steps = 40
    const stepTime = duration / steps

    let current = 0
    const increment = target / steps
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setDisplayValue(`${prefix}${Math.round(current)}${suffix}`)
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span>{displayValue}</span>
}

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="relative overflow-hidden bg-[#F9FAFB] py-20 lg:py-28"
    >
      {/* Subtle background orb */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-gradient-to-bl from-red-100/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Placeholder */}
          <div
            className={cn(!isInView && "opacity-0")}
            style={isInView ? anim("fade-left") : undefined}
          >
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10">
              <div className="absolute left-0 top-0 h-20 w-20 border-l-2 border-t-2 border-[#DC2626]/20 transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:border-[#DC2626]/40" />
              <div className="absolute bottom-0 right-0 h-20 w-20 border-b-2 border-r-2 border-[#DC2626]/20 transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:border-[#DC2626]/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center transition-transform duration-500 group-hover:scale-105">
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
                  <p className="mt-4 text-sm text-[#9CA3AF]">
                    [Foto del profesional]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={cn(!isInView && "opacity-0")}
            style={isInView ? anim("fade-right", 200) : undefined}
          >
            <h2 className="mb-2 text-3xl font-bold text-[#1F2937] sm:text-4xl">
              Sobre Mi
            </h2>
            <div className={cn(
              "mb-6 h-1 rounded-full bg-[#DC2626] transition-all duration-700",
              isInView ? "w-12 opacity-100" : "w-0 opacity-0"
            )} style={{ transitionDelay: "400ms" }} />

            <div className="space-y-4 text-lg leading-relaxed text-[#6B7280]">
              <p>
                [Parrafo de presentacion. Cuenta quien eres, tu formacion
                profesional y que te motiva en tu trabajo. Habla de tu pasion
                por ayudar a los clientes.]
              </p>
              <p>
                [Segundo parrafo sobre tu experiencia y metodologia de trabajo.
                Describe como enfocas cada proyecto y que te diferencia de
                otros profesionales en tu area.]
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "card-glow group rounded-xl bg-white p-4 shadow-sm",
                    !isInView && "opacity-0"
                  )}
                  style={isInView ? anim("fade-up", (index + 3) * 120) : undefined}
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FEE2E2] text-[#DC2626] transition-all duration-300 group-hover:bg-[#DC2626] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-500/25">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-bold text-[#DC2626]">
                    <AnimatedCounter value={item.value} isInView={isInView} />
                  </p>
                  <p className="font-medium text-[#1F2937]">{item.label}</p>
                  <p className="mt-1 text-sm text-[#6B7280]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
