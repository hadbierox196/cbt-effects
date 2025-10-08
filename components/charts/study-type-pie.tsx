"use client"

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts"
import { studyTypePie } from "@/lib/data"

export default function StudyTypePie() {
  return (
    <div className="h-56 sm:h-64 md:h-80 px-1 pb-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
          <Pie data={studyTypePie} dataKey="value" nameKey="name" innerRadius={50} outerRadius="72%" paddingAngle={2}>
            {studyTypePie.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={entry.fill} stroke="hsl(var(--card))" />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--foreground))",
            }}
            formatter={(value, name) => [value as number, name as string]}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ color: "hsl(var(--muted-foreground))" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
