import { Card } from "@/components/ui/card"

export type Condition = {
  id: string
  title: string
  summary: string
}

export function ConditionCard({
  condition,
  className = "",
}: {
  condition: Condition
  className?: string
}) {
  return (
    <Card
      className={`w-full sm:w-56 md:w-60 sm:shrink-0 p-4 bg-card rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${className}`}
      role="article"
      aria-labelledby={`condition-title-${condition.id}`}
      title={condition.title}
    >
      <h3
        id={`condition-title-${condition.id}`}
        className="font-serif text-lg text-foreground mb-2"
      >
        {condition.title}
      </h3>
      <p className="text-sm text-muted-foreground whitespace-normal break-words leading-relaxed">
        {condition.summary}
      </p>
    </Card>
  )
}
