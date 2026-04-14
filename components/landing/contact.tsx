"use client"

import { useState } from "react"
import { Send, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  "[Nombre del Servicio 1]",
  "[Nombre del Servicio 2]",
  "[Nombre del Servicio 3]",
  "[Nombre del Servicio 4]",
]

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative overflow-hidden bg-[#F9FAFB] py-20 lg:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-gradient-to-r from-red-100/20 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-gradient-to-l from-red-50/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn("mb-12 text-center", !isInView && "opacity-0")}
          style={isInView ? anim("fade-up") : undefined}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1F2937] sm:text-4xl">
            Contactame
          </h2>
          <p className="text-lg text-[#6B7280]">
            Tenes alguna consulta o queres conocer mas sobre mis servicios?
            Completa el formulario y te respondo a la brevedad.
          </p>
          <div className={cn(
            "mx-auto mt-4 h-1 rounded-full bg-[#DC2626] transition-all duration-700",
            isInView ? "w-16 opacity-100" : "w-0 opacity-0"
          )} />
        </div>

        <div
          className={cn(
            "rounded-2xl bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-xl sm:p-10",
            !isInView && "opacity-0"
          )}
          style={isInView ? anim("fade-up", 200) : undefined}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="nombre"
                  className="text-sm font-medium text-[#1F2937]"
                >
                  Nombre *
                </label>
                <Input
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  required
                  className="input-glow border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#1F2937]"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  className="input-glow border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="telefono"
                  className="text-sm font-medium text-[#1F2937]"
                >
                  Telefono
                </label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+54 11 1234 5678"
                  className="input-glow border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="servicio"
                  className="text-sm font-medium text-[#1F2937]"
                >
                  Servicio de interes *
                </label>
                <Select name="servicio" required>
                  <SelectTrigger className="input-glow border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="mensaje"
                className="text-sm font-medium text-[#1F2937]"
              >
                Mensaje *
              </label>
              <Textarea
                id="mensaje"
                name="mensaje"
                placeholder="Contame en que puedo ayudarte..."
                rows={5}
                required
                className="input-glow border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={cn(
                "btn-shine w-full py-6 text-lg font-semibold text-white transition-all duration-300 disabled:opacity-70",
                isSubmitted
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-[#DC2626] hover:bg-[#B91C1C] hover:shadow-lg hover:shadow-red-500/25"
              )}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Enviando...
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Mensaje enviado con exito!
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Enviar Consulta
                </span>
              )}
            </Button>

            <p className="flex items-center justify-center gap-2 text-center text-sm text-[#6B7280]">
              <Clock className="h-4 w-4 text-[#DC2626]" />
              Respuesta en menos de 24hs
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
