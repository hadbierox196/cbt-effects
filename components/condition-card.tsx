import React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface ConditionCardProps {
  conditions: {
    title: string
    description: string
  }[]
}

export default function ConditionCard({ conditions }: ConditionCardProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div
        className="flex gap-4 p-2 snap-x snap-mandatory overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {conditions.map((condition, index) => (
          <Card
            key={index}
            className="min-w-[250px] max-w-[300px] flex-shrink-0 snap-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{condition.title}</h3>
              <p className="text-sm text-gray-600">{condition.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
