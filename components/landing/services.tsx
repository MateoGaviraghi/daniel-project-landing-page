"use client"

import Link from "next/link"
import { Briefcase, Target, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: Briefcase,
    title: "[Nombre del Servicio 1]",
    description: "[Descripción breve del servicio. Explica qué incluye y cómo beneficia al cliente.]",
    price: "[Precio / Tarifa]",
  },
  {
    icon: Target,
    title: "[Nombre del Servicio 2]",
    description: "[Descripción breve del servicio. Explica qué incluye y cómo beneficia al cliente.]",
    price: "[Precio / Tarifa]",
  },
  {
    icon: Users,
    title: "[Nombre del Servicio 3]",
    description: "[Descripción breve del servicio. Explica qué incluye y cómo beneficia al cliente.]",
    price: "[Precio / Tarifa]",
  },
  {
    icon: Lightbulb,
    title: "[Nombre del Servicio 4]",
    description: "[Descripción breve del servicio. Explica qué incluye y cómo beneficia al cliente.]",
    price: "[Precio / Tarifa]",
  },
]

export function Services() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="servicios"
      ref={ref}
      className="bg-white py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mb-16 text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1F2937] sm:text-4xl">
            Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#6B7280]">
            [Descripción general de los servicios que ofreces y tu enfoque profesional]
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={cn(
                "group border border-[#E5E7EB] bg-white transition-all duration-300 hover:border-[#DC2626] hover:shadow-lg",
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              )}
              style={{
                transitionDelay: isInView ? `${index * 100}ms` : "0ms",
              }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEE2E2] text-[#DC2626] transition-colors duration-300 group-hover:bg-[#DC2626] group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-[#1F2937]">
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
                  className="w-full border-[#DC2626] text-[#DC2626] transition-all duration-300 hover:bg-[#DC2626] hover:text-white"
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
