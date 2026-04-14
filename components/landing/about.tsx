"use client"

import { Clock, Award, Heart, UserCheck } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const highlights = [
  {
    icon: Clock,
    value: "[+X]",
    label: "Años de Experiencia",
    description: "[Breve descripción de tu trayectoria]",
  },
  {
    icon: Award,
    value: "[+X]",
    label: "Proyectos Completados",
    description: "[Breve descripción de tus logros]",
  },
  {
    icon: Heart,
    value: "[100%]",
    label: "Compromiso",
    description: "[Breve descripción de tu dedicación]",
  },
  {
    icon: UserCheck,
    value: "[+X]",
    label: "Clientes Satisfechos",
    description: "[Breve descripción de tu relación con clientes]",
  },
]

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="bg-[#F9FAFB] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Placeholder */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            )}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
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
                  <p className="mt-4 text-sm text-[#9CA3AF]">
                    [Foto del profesional]
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={cn(
              "transition-all delay-200 duration-700",
              isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            )}
          >
            <h2 className="mb-6 text-3xl font-bold text-[#1F2937] sm:text-4xl">
              Sobre Mí
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-[#6B7280]">
              <p>
                [Párrafo de presentación. Cuenta quién eres, tu formación
                profesional y qué te motiva en tu trabajo. Habla de tu pasión
                por ayudar a los clientes.]
              </p>
              <p>
                [Segundo párrafo sobre tu experiencia y metodología de trabajo.
                Describe cómo enfocas cada proyecto y qué te diferencia de
                otros profesionales en tu área.]
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "group rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md",
                    isInView
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  )}
                  style={{
                    transitionDelay: isInView ? `${(index + 2) * 100}ms` : "0ms",
                  }}
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#FEE2E2] text-[#DC2626] transition-colors duration-300 group-hover:bg-[#DC2626] group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-bold text-[#DC2626]">
                    {item.value}
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
