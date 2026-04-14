"use client"

import Link from "next/link"
import { Briefcase, Target, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const anim = (name: string, delay = 0) => ({
  animationName: name,
  animationDuration: "0.7s",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" as const,
  animationFillMode: "both" as const,
  animationDelay: `${delay}ms`,
})

const services = [
  {
    icon: Briefcase,
    title: "[Nombre del Servicio 1]",
    description: "[Descripcion breve del servicio. Explica que incluye y como beneficia al cliente.]",
    price: "[Precio / Tarifa]",
  },
  {
    icon: Target,
    title: "[Nombre del Servicio 2]",
    description: "[Descripcion breve del servicio. Explica que incluye y como beneficia al cliente.]",
    price: "[Precio / Tarifa]",
  },
  {
    icon: Users,
    title: "[Nombre del Servicio 3]",
    description: "[Descripcion breve del servicio. Explica que incluye y como beneficia al cliente.]",
    price: "[Precio / Tarifa]",
  },
  {
    icon: Lightbulb,
    title: "[Nombre del Servicio 4]",
    description: "[Descripcion breve del servicio. Explica que incluye y como beneficia al cliente.]",
    price: "[Precio / Tarifa]",
  },
]

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="servicios"
      ref={ref}
      className="relative bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn("mb-16 text-center", !isInView && "opacity-0")}
          style={isInView ? anim("fade-up") : undefined}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1F2937] sm:text-4xl">
            Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#6B7280]">
            [Descripcion general de los servicios que ofreces y tu enfoque profesional]
          </p>
          <div className={cn(
            "mx-auto mt-4 h-1 w-16 rounded-full bg-[#DC2626] transition-all duration-700",
            isInView ? "w-16 opacity-100" : "w-0 opacity-0"
          )} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "card-glow group border border-[#E5E7EB] bg-white",
                !isInView && "opacity-0"
              )}
              style={isInView ? anim("fade-up", (index + 1) * 120) : undefined}
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEE2E2] text-[#DC2626] transition-all duration-400 group-hover:bg-[#DC2626] group-hover:text-white group-hover:shadow-lg group-hover:shadow-red-500/25 group-hover:scale-110">
                  <service.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <CardTitle className="text-lg font-semibold text-[#1F2937] transition-colors duration-300 group-hover:text-[#DC2626]">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#6B7280] leading-relaxed">
                  {service.description}
                </CardDescription>
                <p className="mt-4 text-xl font-bold text-[#DC2626]">
                  {service.price}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="btn-shine w-full border-[#DC2626] text-[#DC2626] transition-all duration-300 hover:bg-[#DC2626] hover:text-white hover:shadow-lg hover:shadow-red-500/20"
                >
                  <Link href="#contacto">Consultar</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
