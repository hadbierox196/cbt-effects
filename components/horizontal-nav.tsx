"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function HorizontalNav() {
  const [active, setActive] = useState<string>("overview")

  useEffect(() => {
    const ids = ["overview", "charts", "quiz"]
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id)
          })
        },
        { rootMargin: "-40% 0px -55% 0px" },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "charts", label: "Charts" },
    { id: "quiz", label: "Quiz" },
  ]

  return (
    <nav
      className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
      aria-label="Section navigation"
    >
      <div className="container mx-auto px-4">
        <ul className="flex overflow-x-auto gap-2 py-3 no-scrollbar">
          {tabs.map((t) => (
            <li key={t.id}>
              <Link
                href={`#${t.id}`}
                className={[
                  "inline-block whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors",
                  active === t.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground hover:bg-primary/10",
                ].join(" ")}
              >
                <span className="sr-only">Go to </span>
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
