"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { cbtBarData } from "@/lib/data"

export default function CbtEffectivenessBarChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-pretty">CBT Effectiveness During Active Breast Cancer Treatment</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <div className="h-60 sm:h-64 md:h-[320px] md:min-w-[640px]">
            <ChartContainer
              className="h-full"
              config={{
                studies: { label: "Number of Studies", color: "hsl(var(--chart-1))" },
                effect: { label: "Effect Direction", color: "hsl(var(--chart-2))" },
                consistency: { label: "Consistency", color: "hsl(var(--chart-3))" },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cbtBarData}
                  margin={{ top: 6, right: 12, bottom: 56, left: 12 }}
                  barSize={10}
                  barCategoryGap={16}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="domain"
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    tick={{ fontSize: 10 }}
                    height={62}
                    tickMargin={10}
                  />
                  <YAxis
                    yAxisId="left"
                    width={32}
                    tick={{ fontSize: 10 }}
                    label={{ value: "Studies", angle: -90, position: "insideLeft", offset: 4 }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    domain={[0, 1]}
                    ticks={[0, 0.5, 1]}
                    width={28}
                    tick={{ fontSize: 10 }}
                    label={{ value: "0–1", angle: 90, position: "insideRight", offset: 4 }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend verticalAlign="top" height={28} />
                  <Bar
                    dataKey="studies"
                    yAxisId="left"
                    name="Number of Studies"
                    fill="var(--color-studies)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="effect"
                    yAxisId="right"
                    name="Effect Direction"
                    fill="var(--color-effect)"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="consistency"
                    yAxisId="right"
                    name="Consistency"
                    fill="var(--color-consistency)"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
