import React, { useState } from 'react'
import { Clock, Lightbulb, Code2, Dumbbell, Rocket, ListChecks, Construction } from 'lucide-react'
import PythonPlayground from './PythonPlayground.jsx'
import Quiz from './Quiz.jsx'
import { lessonContentMap } from '../data/lessons.js'

const LEVEL_STYLES = {
  Easy: 'bg-leaf/15 text-leaf',
  Medium: 'bg-mustard/15 text-mustard',
  Challenge: 'bg-coral/15 text-coral',
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon size={20} className="text-pybuse" />
      <h2 className="font-display font-semibold text-xl text-ink">{children}</h2>
    </div>
  )
}

function ComingSoon({ lesson }) {
  return (
    <div className="pop-in max-w-2xl mx-auto text-center py-16 px-6">
      <Construction size={40} className="mx-auto text-mustard mb-4" />
      <h2 className="font-display text-2xl font-semibold text-ink mb-2">
        შეხვედრა #{lesson.id}: {lesson.title}
      </h2>
      <p className="text-slate mb-6">{lesson.subtitle}</p>
      <div className="bg-white border border-ink/10 rounded-2xl p-5 text-left text-sm text-ink/80">
        ეს შეხვედრა ჯერ არ არის სრულად შევსებული. გამოიყენე README-ში მოცემული
        <span className="font-semibold"> Prompt-შაბლონი</span>, რომ Claude-ისგან მიიღო ამ
        შეხვედრის სრული, მზა კოდი (თეორია, კოდის მაგალითები, სავარჯიშოები და ქვიზი) და ჩასვი{' '}
        <code className="font-code bg-ink/5 px-1 rounded">lessons.js</code> ფაილში, ისე როგორც
        შეხვედრა #1-ია გაკეთებული.
      </div>
    </div>
  )
}

export default function LessonView({ lesson }) {
  const [activeExercise, setActiveExercise] = useState(0)

  const c = lessonContentMap[lesson.id]

  if (!c) {
    return <ComingSoon lesson={lesson} />
  }

  return (
    <div className="pop-in max-w-3xl mx-auto pb-20">
      <header className="mb-8">
        <p className="text-pybuse font-code text-sm mb-1">შეხვედრა #{lesson.id}</p>
        <h1 className="font-display text-3xl font-bold text-ink mb-2">{lesson.title}</h1>
        <p className="text-slate">{lesson.subtitle}</p>
      </header>

      {/* Agenda */}
      <section className="mb-10">
        <SectionHeading icon={Clock}>60-წუთიანი გეგმა</SectionHeading>
        <div className="grid sm:grid-cols-2 gap-3">
          {c.agenda.map((a, i) => (
            <div key={i} className="bg-white border border-ink/10 rounded-2xl p-4">
              <p className="text-pybuse font-code text-xs mb-1">{a.time}</p>
              <p className="font-semibold text-ink text-sm mb-1">{a.title}</p>
              <p className="text-slate text-sm">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="snake-divider mb-10" />

      {/* Theory */}
      <section className="mb-10">
        <SectionHeading icon={Lightbulb}>თეორია და ანალოგიები</SectionHeading>
        <div className="space-y-4">
          {c.theory.map((t, i) => (
            <div key={i}>
              <h3 className="font-semibold text-ink mb-1">{t.heading}</h3>
              <p className="text-ink/80 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code demo */}
      <section className="mb-10">
        <SectionHeading icon={Code2}>კოდი და დემო</SectionHeading>
        <div className="space-y-4">
          {c.codeExamples.map((ex, i) => (
            <div key={i}>
              <p className="text-sm font-semibold text-ink/70 mb-2">{ex.title}</p>
              <PythonPlayground starterCode={ex.code} exerciseKey={`demo-${lesson.id}-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Exercises */}
      <section className="mb-10">
        <SectionHeading icon={Dumbbell}>პრაქტიკული სავარჯიშოები</SectionHeading>
        <div className="flex gap-2 mb-4 flex-wrap">
          {c.exercises.map((ex, i) => (
            <button
              key={i}
              onClick={() => setActiveExercise(i)}
              className={`px-3 py-1.5 rounded-full text-sm font-semibold transition ${
                activeExercise === i ? 'bg-ink text-paper' : `${LEVEL_STYLES[ex.level]}`
              }`}
            >
              {ex.level}
            </button>
          ))}
        </div>
        {c.exercises[activeExercise] && (
          <div>
            <p className="font-semibold text-ink mb-1">{c.exercises[activeExercise].title}</p>
            <p className="text-ink/80 mb-3">{c.exercises[activeExercise].prompt}</p>
            <PythonPlayground
              starterCode={c.exercises[activeExercise].starter}
              exerciseKey={`ex-${lesson.id}-${activeExercise}`}
            />
          </div>
        )}
      </section>

      {/* Quiz */}
      <section className="mb-10">
        <SectionHeading icon={ListChecks}>თვითშემოწმების ქვიზი</SectionHeading>
        <Quiz questions={c.quiz} />
      </section>

      {/* Challenge */}
      <section>
        <SectionHeading icon={Rocket}>გამოწვევა</SectionHeading>
        <div className="bg-ink text-paper rounded-2xl p-5">
          <p className="font-semibold mb-1">{c.challenge.title}</p>
          <p className="text-paper/80 text-sm leading-relaxed">{c.challenge.prompt}</p>
        </div>
      </section>
    </div>
  )
}
