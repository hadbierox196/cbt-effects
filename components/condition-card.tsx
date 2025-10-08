import { Card } from "@/components/ui/card"

export type Condition = {
  id: string
  title: string
  summary: string
}

export function ConditionCard({ condition }: { condition: Condition }) {
  return (
    <Card className="w-56 sm:w-60 shrink-0 p-4 bg-card">
      <h3 className="font-serif text-lg">{condition.title}</h3>
      <p className="text-sm text-muted-foreground mt-2 whitespace-normal break-words hyphens-auto leading-relaxed text-pretty">
        {condition.summary}
      </p>
    </Card>
  )
}
