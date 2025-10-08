"use client"

import dynamic from "next/dynamic"
import { Card } from "@/components/ui/card"

const Bar = dynamic(() => import("./bar-chart"), { ssr: false })
const RadialBars = dynamic(() => import("./radial-bar-chart"), { ssr: false })
const Nightingale = dynamic(() => import("./nightingale-chart"), { ssr: false })
const RadarConsistency = dynamic(() => import("./radar-chart"), { ssr: false })
const StudyTypePie = dynamic(() => import("./study-type-pie"), { ssr: false })

export function ChartsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Bar */}
      <Card className="p-4">
        <h2 className="font-serif text-xl mb-2">Bar Chart</h2>
        <p className="text-muted-foreground text-sm mb-4">
          Grouped bars show Number of Studies (left axis) + Effect and Consistency (0–1 on right axis).
        </p>
        <div className="w-full h-auto overflow-x-auto">
          <Bar />
        </div>
      </Card>

      {/* Radial Bar */}
      <Card className="p-4">
        <h2 className="font-serif text-xl mb-2">Radial Bar Chart</h2>
        <p className="text-muted-foreground text-sm mb-4">Percent of studies showing improvement by outcome domain.</p>
        <div className="w-full h-64">
          <RadialBars />
        </div>
      </Card>

      {/* Nightingale */}
      <Card className="p-4 md:col-span-2">
        <h2 className="font-serif text-xl mb-2">Nightingale Chart</h2>
        <p className="text-muted-foreground text-sm mb-4">
          Polar area lengths represent studies × consistency by domain.
        </p>
        <div className="w-full h-72">
          <Nightingale />
        </div>
      </Card>

      {/* Radar: Consistency by Domain */}
      <Card className="p-4">
        <h2 className="font-serif text-xl mb-2">Radar: Consistency</h2>
        <p className="text-muted-foreground text-sm mb-4">Higher radius indicates stronger consistency of findings.</p>
        <div className="w-full h-64">
          <RadarConsistency />
        </div>
      </Card>

      {/* Pie: Study Types */}
      <Card className="p-4">
        <h2 className="font-serif text-xl mb-2">Study Types</h2>
        <p className="text-muted-foreground text-sm mb-4">Distribution of study designs across included trials.</p>
        <div className="w-full h-64">
          <StudyTypePie />
        </div>
      </Card>
    </div>
  )
}
