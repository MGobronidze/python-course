import React, { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import Sidebar from './components/Sidebar.jsx'
import LessonView from './components/LessonView.jsx'
import { lessons } from './data/lessons.js'

const STORAGE_KEY = 'py-course-active-lesson'

export default function App() {
  const [activeId, setActiveId] = useState(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEY))
    return saved && lessons.some((l) => l.id === saved) ? saved : 1
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(activeId))
  }, [activeId])

  const activeLesson = lessons.find((l) => l.id === activeId) || lessons[0]

  const selectLesson = (id) => {
    setActiveId(id)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex bg-paper">
      <Sidebar
        lessons={lessons}
        activeId={activeId}
        onSelect={selectLesson}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 min-w-0">
        <header className="md:hidden sticky top-0 z-20 bg-paper/90 backdrop-blur border-b border-ink/10 px-4 py-3 flex items-center gap-3">
          <button onClick={() => setSidebarOpen(true)} aria-label="მენიუს გახსნა">
            <Menu size={22} className="text-ink" />
          </button>
          <p className="font-display font-semibold text-ink">
            შეხვედრა #{activeLesson.id}: {activeLesson.title}
          </p>
        </header>

        <main className="px-4 sm:px-8 py-10">
          <LessonView lesson={activeLesson} />
        </main>
      </div>
    </div>
  )
}
