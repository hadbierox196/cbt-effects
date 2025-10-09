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
          Effectiveness of Cognitive Behavioral Therapy Delivered During Active Treatment of Breast Cancer
        </h1>
        <p className="text-muted-foreground leading-relaxed">
A lot of psychological distress is observed during the active treatments for example chemotherapy or radiotherapy of breast cancer. This can induce anxiety, depression and stress in the patients. These effects very negatively impact the patient's treatment, quality of life and in general the recovery process. Even though cognitive behavioural therapy is proven to be quite effective for managing psychological distress in cancer survivors its effect during the active treatment is less explored.¹ Conclusions drawn from several RCTs show that CBT can reduce depression and induce an improved state of the mind in the patients.² Understanding the role of CBT can be really helpful and crucial as providing support during this period of time can cause a significant reduction in burden and can also help with improving the results of treatment. This review aims to evaluate the effectiveness of CBT during active treatment of breast cancer to guide its integration in standard oncological care.
          
        </p>

        {/* Cards row: fixed classes so Tailwind works correctly and prevents the weird gap */}
        <div
          className="w-full -mx-4 px-4 flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-px-4 scroll-smooth overscroll-x-contain py-2"
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
