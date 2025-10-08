"use client"

import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { radialData } from "@/lib/data"

export default function RadialBars() {
  return (
    <div className="h-56 sm:h-64 md:h-80 px-1 pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius="20%" outerRadius="80%" data={radialData} startAngle={90} endAngle={-270}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar background dataKey="value" cornerRadius={6} fill="hsl(var(--chart-2))" />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value, name, props) => [`${value}%`, props?.payload?.label]}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ color: "hsl(var(--muted-foreground))" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
