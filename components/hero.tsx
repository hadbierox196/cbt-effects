import { ConditionCard } from "./condition-card"
import { conditions } from "@/lib/data"

export function Hero() {
  return (
    <div className="relative grid gap-5 sm:gap-6 md:grid-cols-5 items-start">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 bg-[url('/images/awareness-watermark.jpg')] bg-no-repeat bg-right-top bg-contain"
      />
      <div className="md:col-span-5 flex flex-col gap-4 min-w-0">
        <h1 className="font-serif text-balance text-3xl md:text-4xl lg:text-5xl">
          Outcomes in Women with Breast Cancer
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          A concise view of patient-reported outcomes and psychosocial factors, designed for quick review on mobile and
          desktop.
        </p>

        <div
          className="w-full -mx-4 px-4 flex gap-3 overflow-x-auto py-2 snap-x snap-mandatory scroll-px-4 scroll-smooth overscroll-x-contain"
          aria-label="Outcome domains"
          role="list"
        >
          {conditions.map((c) => (
            <div key={c.id} className="snap-start flex-none mr-3 last:mr-0" role="listitem">
              <ConditionCard condition={c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
