import type { Condition } from "@/components/condition-card"

export const conditions: Condition[] = [
  {
    id: "anxiety",
    title: "Anxiety",
    summary: "Elevated state anxiety observed during active treatment; screening and referral improve outcomes.",
  },
  {
    id: "depression",
    title: "Depression",
    summary: "Mild to moderate symptoms common; routine assessment aligns with best-practice survivorship care.",
  },
  {
    id: "distress",
    title: "Distress",
    summary: "Multi-factor distress peaks near diagnosis and major milestones; supportive care mitigates risk.",
  },
  {
    id: "phys",
    title: "Physiological",
    summary: "Fatigue and sleep disturbance most reported; gentle activity and CBT-I demonstrate benefit.",
  },
]

/* Bubble chart: x/y for grouping clusters; size encodes magnitude */
type OutcomeDomain = "Depression/Anxiety/Distress" | "Fatigue" | "Quality of Life" | "Pain" | "Biological/Physiological"

type Consistency = "Low" | "Moderate" | "High"
type Direction = "Decrease" | "Increase" | "No change"

type OutcomeSummary = {
  domain: OutcomeDomain
  studies: number
  direction: Direction
  consistency: Consistency
}

// Mapped from your attachment (Section 2: Quantitative Summary by Outcome Domain)
export const outcomeSummaries: OutcomeSummary[] = [
  { domain: "Depression/Anxiety/Distress", studies: 6, direction: "Decrease", consistency: "High" }, // Moderate–Strong → treat as High for visualization
  { domain: "Fatigue", studies: 2, direction: "Decrease", consistency: "High" },
  { domain: "Quality of Life", studies: 3, direction: "Increase", consistency: "Moderate" },
  { domain: "Pain", studies: 1, direction: "Decrease", consistency: "Low" }, // within-group only, no between-group difference
  { domain: "Biological/Physiological", studies: 3, direction: "Decrease", consistency: "High" },
]

// Utility mappings
const consistencyScore = (c: Consistency) => (c === "Low" ? 1 : c === "Moderate" ? 2 : 3)

// 1) Bubble chart data: position by index; size encodes studies × consistency
export const bubbleData = outcomeSummaries.map((d, i) => ({
  x: i + 1,
  y: 1,
  size: d.studies * (5 + 3 * consistencyScore(d.consistency)), // scaled for visual separation
  label: d.domain,
}))

// 2) Radial bars: percent of studies showing improvement (derived from direction)
// Note: Pain had within-group reduction only; encoded as partial effect visually (50%)
export const radialData = outcomeSummaries.map((d) => {
  const percent =
    d.domain === "Quality of Life" ? 100 : d.domain === "Pain" ? 50 : d.direction === "Decrease" ? 100 : 100
  return {
    label: d.domain,
    value: percent,
    fill: "hsl(var(--chart-2))",
  }
})

// 3) Nightingale (polar area): studies × consistency as magnitude
export const nightingaleData = outcomeSummaries.map((d) => ({
  label: d.domain,
  value: d.studies * consistencyScore(d.consistency),
  fill: "hsl(var(--chart-3))",
}))

// 4) Radar chart: encode consistency levels numerically by domain
export const radarData = outcomeSummaries.map((d) => ({
  domain: d.domain,
  consistency: consistencyScore(d.consistency) * 10, // scale to 10/20/30
}))

// 5) Study type distribution pie (Section 1)
export const studyTypePie = [
  { name: "RCT", value: 8, fill: "hsl(var(--chart-1))" },
  { name: "Quasi-experimental", value: 1, fill: "hsl(var(--chart-4))" },
  { name: "Exploratory", value: 1, fill: "hsl(var(--chart-5))" },
]

/* Quiz: tap to reveal */
export const quiz = [
  {
    question: "Are anxiety symptoms common during chemotherapy?",
    answer: "Yes—symptoms are common and should be routinely screened.",
    note: "Brief tools (e.g., GAD‑7) enable early identification and referral.",
  },
  {
    question: "Does routine depression screening improve care?",
    answer: "Yes—screening supports timely counseling or pharmacotherapy.",
    note: "Shared decision-making reduces dropout and improves adherence.",
  },
  {
    question: "When does cancer-related distress typically peak?",
    answer: "Near diagnosis and major treatment transitions.",
    note: "Proactive check-ins at milestones can prevent escalation.",
  },
  {
    question: "Are fatigue interventions effective during treatment?",
    answer: "Yes—graded activity and energy conservation help.",
    note: "Tailored plans are safe and improve quality of life.",
  },
  {
    question: "Can CBT‑I help sleep during survivorship?",
    answer: "Yes—CBT‑I shows durable improvements.",
    note: "Consider digital CBT‑I options where in-person access is limited.",
  },
]

export const cbtBarData = [
  { domain: "Depression / Anxiety / Distress", studies: 6, effect: 1, consistency: 0.75 },
  { domain: "Fatigue", studies: 2, effect: 1, consistency: 1 },
  { domain: "Quality of Life (QoL)", studies: 3, effect: 1, consistency: 0.75 },
  { domain: "Pain & Catastrophising", studies: 1, effect: 0.5, consistency: 0.5 },
  { domain: "Biological / Physiological", studies: 3, effect: 1, consistency: 1 },
]
