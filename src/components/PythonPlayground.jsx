import React, { useEffect, useRef, useState } from 'react'
import { Play, Loader2, RotateCcw } from 'lucide-react'

// Pyodide ინსტანციას ვინახავთ მოდულის დონეზე, რომ ყველა playground-მა
// გამოიყენოს ერთი და იგივე ჩატვირთული ძრავა — არ დავტვირთოთ თავიდან ყოველ ჯერზე.
let pyodideSingleton = null
let pyodideLoadingPromise = null

async function getPyodide(onStatus) {
  if (pyodideSingleton) return pyodideSingleton
  if (!pyodideLoadingPromise) {
    onStatus?.('იტვირთება Python ძრავა (Pyodide)... ეს პირველად შეიძლება 10-20 წამი გასტანოს.')
    pyodideLoadingPromise = window.loadPyodide().then((py) => {
      pyodideSingleton = py
      return py
    })
  }
  return pyodideLoadingPromise
}

export default function PythonPlayground({ starterCode, exerciseKey }) {
  const [code, setCode] = useState(starterCode || '')
  const [output, setOutput] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | running | error
  const [statusMsg, setStatusMsg] = useState('')
  const textareaRef = useRef(null)

  // exerciseKey იცვლება, როცა სხვა სავარჯიშოზე გადადის მომხმარებელი —
  // მაშინ საწყისი კოდი თავიდან ჩაიტვირთოს.
  useEffect(() => {
    setCode(starterCode || '')
    setOutput('')
  }, [exerciseKey, starterCode])

  const runCode = async () => {
    setStatus('loading')
    setOutput('')
    try {
      const py = await getPyodide(setStatusMsg)
      setStatus('running')
      setStatusMsg('')

      // stdout-ის დაჭერა Python-ის მხრიდან
      py.setStdout({
        batched: (msg) => setOutput((prev) => prev + msg + '\n'),
      })
      py.setStderr({
        batched: (msg) => setOutput((prev) => prev + msg + '\n'),
      })

      await py.runPythonAsync(code)
      setStatus('idle')
    } catch (err) {
      setOutput((prev) => prev + '\n' + String(err))
      setStatus('error')
    }
  }

  const resetCode = () => {
    setCode(starterCode || '')
    setOutput('')
    setStatus('idle')
  }

  return (
    <div className="rounded-blob border-2 border-ink/10 bg-inkdeep overflow-hidden shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-ink">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-coral" />
          <span className="w-3 h-3 rounded-full bg-mustard" />
          <span className="w-3 h-3 rounded-full bg-leaf" />
          <span className="ml-2 text-paper/70 text-xs font-code">main.py</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={resetCode}
            className="flex items-center gap-1 text-paper/70 hover:text-paper text-xs px-2 py-1 rounded-md transition-colors"
            aria-label="კოდის გადატვირთვა"
          >
            <RotateCcw size={14} /> თავიდან
          </button>
          <button
            onClick={runCode}
            disabled={status === 'loading' || status === 'running'}
            className="flex items-center gap-1 bg-leaf text-ink font-semibold text-xs px-3 py-1.5 rounded-md hover:brightness-105 disabled:opacity-60 transition"
          >
            {status === 'loading' || status === 'running' ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Play size={14} />
            )}
            გაშვება
          </button>
        </div>
      </div>

      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="code-editor w-full bg-inkdeep text-paper p-4 outline-none resize-y min-h-[140px]"
        style={{ tabSize: 4 }}
      />

      <div className="border-t border-paper/10 bg-black/30 px-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-paper/50 text-xs font-code">Output</span>
          {status === 'loading' && (
            <span className="text-mustard text-xs">{statusMsg}</span>
          )}
        </div>
        <pre className="code-editor text-paper/90 whitespace-pre-wrap min-h-[2rem]">
          {output || <span className="text-paper/30">// შედეგი აქ გამოჩნდება, დააჭირე "გაშვება"</span>}
        </pre>
      </div>
    </div>
  )
}
