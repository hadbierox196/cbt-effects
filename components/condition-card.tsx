"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer } from "recharts"
import dynamic from "next/dynamic"
import type { Condition } from "@/lib/data"

const Chart = dynamic(() => import("./chart"), { ssr: false })

interface ConditionCardProps {
  condition: Condition
}

export function ConditionCard({ condition }: ConditionCardProps) {
  return (
    <Card
      className="w-[280px] sm:w-[300px] md:w-[320px] flex-shrink-0 rounded-2xl border border-border/40 shadow-md bg-background/80 backdrop-blur"
    >
      <CardHeader>
        <CardTitle className="text-base md:text-lg font-semibold">{condition.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="h-[220px] sm:h-[250px] flex items-center justify-center overflow-hidden"
        >
          {/* 
            The chart wrapper is forced to stay within the card boundaries 
            and scale responsively instead of stretching the layout.
          */}
          <ResponsiveContainer width="100%" height="100%">
            <Chart data={condition.data} type={condition.chartType} />
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
