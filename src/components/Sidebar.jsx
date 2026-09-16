import React from 'react'
import { BookOpen, Sparkles, X } from 'lucide-react'

export default function Sidebar({ lessons, activeId, onSelect, open, onClose }) {
  const basics = lessons.filter((l) => l.block === 'basics')
  const oop = lessons.filter((l) => l.block === 'oop')

  const renderGroup = (title, items) => (
    <div className="mb-6">
      <p className="px-3 text-xs font-semibold text-paper/40 mb-2">{title}</p>
      <ul className="space-y-1">
        {items.map((l) => {
          const isActive = l.id === activeId
          return (
            <li key={l.id}>
              <button
                onClick={() => onSelect(l.id)}
                className={`w-full text-left px-3 py-2 rounded-xl flex items-start gap-2 transition-colors ${
                  isActive ? 'bg-pybuse text-white' : 'text-paper/80 hover:bg-white/5'
                }`}
              >
                <span
                  className={`shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-code ${
                    isActive ? 'bg-white/20' : l.type === 'project' ? 'bg-mustard/20 text-mustard' : 'bg-white/10'
                  }`}
                >
                  {l.id}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm leading-snug truncate">{l.title}</span>
                  {l.type === 'project' && (
                    <span className="flex items-center gap-1 text-[11px] text-mustard mt-0.5">
                      <Sparkles size={11} /> პროექტი
                    </span>
                  )}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <>
      {/* mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed md:static z-40 top-0 left-0 h-full md:h-auto w-72 bg-ink text-paper shrink-0 overflow-y-auto transition-transform duration-200 ${
          open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐍</span>
            <div>
              <p className="font-display font-semibold leading-tight">Python კურსი</p>
              <p className="text-paper/40 text-xs flex items-center gap-1">
                <BookOpen size={12} /> 40 შეხვედრა
              </p>
            </div>
          </div>
          <button className="md:hidden text-paper/60" onClick={onClose} aria-label="დახურვა">
            <X size={20} />
          </button>
        </div>
        <div className="p-3">
          {renderGroup('ბლოკი A · საფუძვლები (1–25)', basics)}
          {renderGroup('ბლოკი B · OOP & Advanced (26–40)', oop)}
        </div>
      </aside>
    </>
  )
}
