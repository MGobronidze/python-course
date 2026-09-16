import React, { useState } from 'react'
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react'

export default function Quiz({ questions }) {
  const [answers, setAnswers] = useState({}) // { qIndex: optionIndex }
  const [revealed, setRevealed] = useState({})

  const choose = (qIndex, optIndex) => {
    if (revealed[qIndex]) return
    setAnswers((prev) => ({ ...prev, [qIndex]: optIndex }))
    setRevealed((prev) => ({ ...prev, [qIndex]: true }))
  }

  const score = questions.reduce(
    (acc, q, i) => acc + (revealed[i] && answers[i] === q.correctIndex ? 1 : 0),
    0
  )
  const answeredCount = Object.keys(revealed).length

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => {
        const isRevealed = !!revealed[qi]
        const chosen = answers[qi]
        return (
          <div key={qi} className="rounded-2xl border border-ink/10 bg-white p-4">
            <div className="flex items-start gap-2 mb-3">
              <HelpCircle size={18} className="text-pybuse mt-0.5 shrink-0" />
              <p className="font-semibold text-ink">{q.question}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                const isCorrect = oi === q.correctIndex
                const isChosen = oi === chosen
                let cls = 'border-ink/15 hover:border-pybuse/60 hover:bg-pybuse/5'
                if (isRevealed && isCorrect) cls = 'border-leaf bg-leaf/10'
                else if (isRevealed && isChosen && !isCorrect) cls = 'border-coral bg-coral/10'
                return (
                  <button
                    key={oi}
                    onClick={() => choose(qi, oi)}
                    className={`text-left px-3 py-2 rounded-xl border text-sm transition-colors flex items-center justify-between gap-2 ${cls}`}
                  >
                    <span>{opt}</span>
                    {isRevealed && isCorrect && <CheckCircle2 size={16} className="text-leaf shrink-0" />}
                    {isRevealed && isChosen && !isCorrect && <XCircle size={16} className="text-coral shrink-0" />}
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
      <div className="text-sm text-slate">
        {answeredCount === questions.length
          ? `შედეგი: ${score} / ${questions.length} სწორი პასუხი 🎉`
          : `უპასუხე ყველა კითხვას (${answeredCount}/${questions.length})`}
      </div>
    </div>
  )
}
