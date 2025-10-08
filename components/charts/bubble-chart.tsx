"use client"

import { ResponsiveContainer, ScatterChart, XAxis, YAxis, ZAxis, Tooltip, Scatter, CartesianGrid } from "recharts"
import { bubbleData } from "@/lib/data"

export default function BubbleChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
        <CartesianGrid stroke="hsl(var(--muted-foreground)/0.2)" />
        <XAxis type="number" dataKey="x" name="Domain" tick={false} axisLine={false} />
        <YAxis type="number" dataKey="y" name="Outcome" tick={false} axisLine={false} />
        <ZAxis type="number" dataKey="size" range={[60, 400]} />
        <Tooltip
          cursor={{ strokeDasharray: "3 3" }}
          contentStyle={{
            background: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            color: "hsl(var(--foreground))",
          }}
          formatter={(value, name, props) => {
            if (name === "size") return [`${value}`, "Magnitude"]
            return [value, name]
          }}
          labelFormatter={() => ""}
        />
        <Scatter data={bubbleData} fill="hsl(var(--chart-1))" stroke="hsl(var(--chart-3))" strokeWidth={1} />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
