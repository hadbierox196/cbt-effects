"use client"

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts"
import { radarData } from "@/lib/data"

export default function RadarConsistency() {
  return (
    <div className="h-56 sm:h-64 md:h-80 px-1 pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData} margin={{ top: 8, right: 8, bottom: 16, left: 8 }}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="domain" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar dataKey="consistency" fill="hsl(var(--chart-4))" stroke="hsl(var(--chart-5))" fillOpacity={0.6} />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value) => [`${value}`, "Consistency score"]}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
