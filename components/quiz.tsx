"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { quiz } from "@/lib/data"

export function Quiz() {
  return (
    <div className="grid gap-4">
      <header>
        <h2 className="font-serif text-2xl">Quick Awareness Quiz</h2>
        <p className="text-sm text-muted-foreground">Tap a card to reveal the answer and an awareness note.</p>
      </header>
      <ul className="grid gap-3">
        {quiz.map((q, i) => (
          <li key={i}>
            <QuizCard question={q.question} answer={q.answer} note={q.note} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function QuizCard({
  question,
  answer,
  note,
}: {
  question: string
  answer: string
  note: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <button type="button" className="w-full text-left" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
      <Card className="p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        <p className="font-medium">{question}</p>
        {open ? (
          <div className="mt-2">
            <p className="text-primary font-semibold">{answer}</p>
            <p className="text-sm text-muted-foreground mt-1">{note}</p>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground mt-2">Tap to reveal</p>
        )}
      </Card>
    </button>
  )
}
