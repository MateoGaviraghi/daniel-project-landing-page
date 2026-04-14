import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
