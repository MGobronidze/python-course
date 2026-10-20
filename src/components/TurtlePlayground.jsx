import React, { useEffect, useRef, useState } from 'react'
import { Play, Loader2, RotateCcw } from 'lucide-react'
import { getPyodide, runInFreshNamespace } from '../pyodideLoader.js'
import { TURTLE_SHIM } from '../turtleShim.js'

const SIZE = 480
const HALF = SIZE / 2

// turtle-ის კოორდინატებიდან (ცენტრი 0,0; y ზევით) canvas-ის კოორდინატებში
const px = (x) => HALF + x
const py = (y) => HALF - y

const SETUP_CODE = `
import sys, types
_turtle_module = types.ModuleType("turtle")
exec(__turtle_src__, _turtle_module.__dict__)
sys.modules["turtle"] = _turtle_module
del _turtle_module
`

function drawTurtleShape(ctx, x, y, headingDeg, color) {
  const a = (-headingDeg * Math.PI) / 180 // y ღერძი canvas-ზე შებრუნებულია
  const cx = px(x)
  const cy = py(y)
  const pts = [
    [cx + Math.cos(a) * 12, cy + Math.sin(a) * 12], // წვერი
    [cx + Math.cos(a + 2.4) * 9, cy + Math.sin(a + 2.4) * 9], // მარცხენა "ფრთა"
    [cx - Math.cos(a) * 3, cy - Math.sin(a) * 3], // ჩაღრმავება უკან
    [cx + Math.cos(a - 2.4) * 9, cy + Math.sin(a - 2.4) * 9], // მარჯვენა "ფრთა"
  ]
  ctx.beginPath()
  ctx.moveTo(pts[0][0], pts[0][1])
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1])
  ctx.closePath()
  ctx.fillStyle = color
  ctx.globalAlpha = 0.85
  ctx.fill()
  ctx.globalAlpha = 1
  ctx.lineWidth = 1
  ctx.strokeStyle = '#1B1F3B'
  ctx.stroke()
}

// ხატავს პირველ `progress` ბრძანებას. finished=true-ზე ბოლოს turtle-ების ისრებსაც აჩვენებს.
function render(canvas, data, progress, finished) {
  const ctx = canvas.getContext('2d')
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fillStyle = data.bg || 'white'
  ctx.fillRect(0, 0, SIZE, SIZE)
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'

  let last = null
  for (let j = 0; j < progress && j < data.cmds.length; j++) {
    const c = data.cmds[j]
    const type = c[0]
    if (type === 'line') {
      ctx.beginPath()
      ctx.moveTo(px(c[1]), py(c[2]))
      ctx.lineTo(px(c[3]), py(c[4]))
      ctx.strokeStyle = c[5]
      ctx.lineWidth = c[6]
      ctx.stroke()
      last = [c[3], c[4]]
    } else if (type === 'fill') {
      // შევსება ჩნდება მხოლოდ მაშინ, როცა მისი კონტური მთლიანად დახატულია
      if (progress > j + c[3]) {
        const pts = c[1]
        ctx.beginPath()
        ctx.moveTo(px(pts[0][0]), py(pts[0][1]))
        for (let k = 1; k < pts.length; k++) ctx.lineTo(px(pts[k][0]), py(pts[k][1]))
        ctx.closePath()
        ctx.fillStyle = c[2]
        ctx.fill()
      }
    } else if (type === 'dot') {
      ctx.beginPath()
      ctx.arc(px(c[1]), py(c[2]), c[3] / 2, 0, Math.PI * 2)
      ctx.fillStyle = c[4]
      ctx.fill()
    } else if (type === 'text') {
      ctx.fillStyle = c[4]
      ctx.font = `${c[7] || 'normal'} ${c[5]}px sans-serif`
      ctx.textAlign = c[6] === 'center' ? 'center' : c[6] === 'right' ? 'right' : 'left'
      ctx.fillText(c[3], px(c[1]), py(c[2]))
    } else if (type === 'stamp') {
      drawTurtleShape(ctx, c[1], c[2], c[3], c[4])
    }
  }

  if (finished) {
    for (const t of data.turtles) {
      if (t.visible) drawTurtleShape(ctx, t.x, t.y, t.h, t.color)
    }
  } else if (last) {
    ctx.beginPath()
    ctx.arc(px(last[0]), py(last[1]), 4, 0, Math.PI * 2)
    ctx.fillStyle = '#E1604D'
    ctx.fill()
  }
}

export default function TurtlePlayground({ starterCode, exerciseKey }) {
  const [code, setCode] = useState(starterCode || '')
  const [output, setOutput] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | running | error
  const [statusMsg, setStatusMsg] = useState('')
  const [animate, setAnimate] = useState(true)
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  const stopAnimation = () => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current)
      animRef.current = null
    }
  }

  const clearCanvas = () => {
    if (canvasRef.current) {
      render(canvasRef.current, { cmds: [], bg: 'white', turtles: [] }, 0, true)
    }
  }

  useEffect(() => {
    setCode(starterCode || '')
    setOutput('')
    stopAnimation()
    clearCanvas()
  }, [exerciseKey, starterCode])

  useEffect(() => stopAnimation, [])

  const play = (data) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const total = data.cmds.length
    if (!animate || total === 0) {
      render(canvas, data, total, true)
      return
    }
    let progress = 0
    let lastTime = 0
    const perFrame = Math.max(1, Math.ceil(total / 180))
    const delay = total <= 60 ? 50 : 0
    const tick = (now) => {
      if (now - lastTime >= delay) {
        progress = Math.min(total, progress + perFrame)
        render(canvas, data, progress, progress >= total)
        lastTime = now
      }
      if (progress < total) animRef.current = requestAnimationFrame(tick)
      else animRef.current = null
    }
    animRef.current = requestAnimationFrame(tick)
  }

  const runCode = async () => {
    stopAnimation()
    setStatus('loading')
    setOutput('')
    clearCanvas()
    try {
      const py = await getPyodide(setStatusMsg)
      setStatus('running')
      setStatusMsg('')

      let out = ''
      const append = (msg) => {
        out += msg + '\n'
        setOutput(out)
      }
      py.setStdout({ batched: append })
      py.setStderr({ batched: append })

      py.globals.set('__turtle_src__', TURTLE_SHIM)
      py.runPython(SETUP_CODE)

      let hadError = false
      try {
        await runInFreshNamespace(py, code)
      } catch (err) {
        hadError = true
        append(String(err && err.message ? err.message : err))
      }

      // შეცდომის შემთხვევაშიც ვაჩვენებთ იმას, რაც დროულად დაიხატა
      const json = py.runPython("import sys\nsys.modules['turtle']._snapshot()")
      play(JSON.parse(json))
      setStatus(hadError ? 'error' : 'idle')
    } catch (err) {
      setOutput((prev) => prev + '\n' + String(err))
      setStatus('error')
    }
  }

  const resetCode = () => {
    stopAnimation()
    setCode(starterCode || '')
    setOutput('')
    setStatus('idle')
    clearCanvas()
  }

  const busy = status === 'loading' || status === 'running'

  return (
    <div className="rounded-blob border-2 border-ink/10 bg-inkdeep overflow-hidden shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-ink">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-coral" />
          <span className="w-3 h-3 rounded-full bg-mustard" />
          <span className="w-3 h-3 rounded-full bg-leaf" />
          <span className="ml-2 text-paper/70 text-xs font-code">turtle.py 🐢</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="hidden sm:flex items-center gap-1 text-paper/70 text-xs cursor-pointer select-none">
            <input
              type="checkbox"
              checked={animate}
              onChange={(e) => setAnimate(e.target.checked)}
              className="accent-leaf"
            />
            ანიმაცია
          </label>
          <button
            onClick={resetCode}
            className="flex items-center gap-1 text-paper/70 hover:text-paper text-xs px-2 py-1 rounded-md transition-colors"
            aria-label="კოდის გადატვირთვა"
          >
            <RotateCcw size={14} /> თავიდან
          </button>
          <button
            onClick={runCode}
            disabled={busy}
            className="flex items-center gap-1 bg-leaf text-ink font-semibold text-xs px-3 py-1.5 rounded-md hover:brightness-105 disabled:opacity-60 transition"
          >
            {busy ? <Loader2 size={14} className="animate-spin" /> : <Play size={14} />}
            გაშვება
          </button>
        </div>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="code-editor w-full bg-inkdeep text-paper p-4 outline-none resize-y min-h-[200px]"
        style={{ tabSize: 4 }}
      />

      <div className="border-t border-paper/10 bg-black/30 p-3 flex flex-col md:flex-row gap-3">
        <canvas
          ref={canvasRef}
          width={SIZE}
          height={SIZE}
          className="rounded-lg bg-white shrink-0"
          style={{ width: '100%', maxWidth: SIZE, aspectRatio: '1 / 1' }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-paper/50 text-xs font-code">Output</span>
            {status === 'loading' && <span className="text-mustard text-xs">{statusMsg}</span>}
          </div>
          <pre className="code-editor text-paper/90 whitespace-pre-wrap min-h-[2rem]">
            {output || <span className="text-paper/30">// ნახატი მარცხნივ გამოჩნდება, ბეჭდვა და შეცდომები — აქ</span>}
          </pre>
        </div>
      </div>
    </div>
  )
}
