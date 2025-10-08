import { HorizontalNav } from "@/components/horizontal-nav"
import { Hero } from "@/components/hero"
import { ChartsSection } from "@/components/charts/charts-section"
import { Quiz } from "@/components/quiz"

export default function Page() {
  return (
    <main className="min-h-dvh">
      <HorizontalNav />
      <section id="overview" className="container mx-auto px-4 pt-16 sm:pt-20 pb-6 sm:pb-8">
        <Hero />
      </section>

      <section id="charts" className="container mx-auto px-4 py-8">
        <ChartsSection />
      </section>

      <section id="quiz" className="container mx-auto px-4 py-8">
        <Quiz />
      </section>
    </main>
  )
}
