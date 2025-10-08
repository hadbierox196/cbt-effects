"use client"

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Tooltip } from "recharts"
import { nightingaleData } from "@/lib/data"

export default function Nightingale() {
  return (
    <div className="h-56 sm:h-64 md:h-80 px-1 pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart data={nightingaleData} innerRadius="15%" outerRadius="80%" startAngle={90} endAngle={-270}>
          <PolarAngleAxis type="number" tick={false} />
          <RadialBar dataKey="value" background minAngle={4} clockWise cornerRadius={6} fill="hsl(var(--chart-3))" />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value, name, props) => [`${value}`, props?.payload?.label as string]}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
