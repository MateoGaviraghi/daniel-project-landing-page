"use client"

import { useState } from "react"
import { Send, Clock } from "lucide-react"
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
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success message
    setTimeout(() => {
      setIsSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section
      id="contacto"
      ref={ref}
      className="bg-[#F9FAFB] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mb-12 text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h2 className="mb-4 text-3xl font-bold text-[#1F2937] sm:text-4xl">
            Contactame
          </h2>
          <p className="text-lg text-[#6B7280]">
            ¿Tenés alguna consulta o querés conocer más sobre mis servicios?
            Completá el formulario y te respondo a la brevedad.
          </p>
        </div>

        <div
          className={cn(
            "rounded-2xl bg-white p-6 shadow-lg transition-all delay-200 duration-700 sm:p-10",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
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
                  className="border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
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
                  className="border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="telefono"
                  className="text-sm font-medium text-[#1F2937]"
                >
                  Teléfono
                </label>
                <Input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  placeholder="+54 11 1234 5678"
                  className="border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="servicio"
                  className="text-sm font-medium text-[#1F2937]"
                >
                  Servicio de interés *
                </label>
                <Select name="servicio" required>
                  <SelectTrigger className="border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]">
                    <SelectValue placeholder="Seleccioná un servicio" />
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
                placeholder="Contame en qué puedo ayudarte..."
                rows={5}
                required
                className="border-[#E5E7EB] transition-all duration-300 focus:border-[#DC2626] focus:ring-[#DC2626]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full bg-[#DC2626] py-6 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#B91C1C] disabled:opacity-70"
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
                  ¡Mensaje enviado con éxito!
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
