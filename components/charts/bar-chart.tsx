"use client"

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { cbtBarData } from "@/lib/data"

export default function CbtEffectivenessBarChart() {
  return (
    <Card className="w-full min-w-0">
      <CardHeader>
        <CardTitle className="text-pretty">CBT Effectiveness During Active Breast Cancer Treatment</CardTitle>
      </CardHeader>
      <CardContent>
        {/* outer scroller — keeps the chart area from forcing layout */}
        <div className="w-full overflow-x-auto">
          {/* chart box: allow shrinking inside flex parents (min-w-0), keep responsive height */}
          <div className="h-56 sm:h-64 md:h-[320px] min-w-0 max-w-full">
            <ChartContainer
              className="h-full w-full min-w-0"
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
                  barSize={8}
                  barCategoryGap={8}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="label" interval={0} angle={-30} textAnchor="end" height={56} />
                  <YAxis />
                  <Tooltip />
                  <Legend verticalAlign="top" height={36} />
                  <Bar dataKey="studies" name="Studies" fill="var(--color-studies)" radius={[4,4,0,0]} />
                  <Bar dataKey="effect" name="Effect" fill="var(--color-effect)" radius={[4,4,0,0]} />
                  <Bar dataKey="consistency" name="Consistency" fill="var(--color-consistency)" radius={[4,4,0,0]} yAxisId="right" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
