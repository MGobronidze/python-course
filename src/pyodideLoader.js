// Pyodide ძრავის საერთო ჩამტვირთავი — ყველა Playground ერთსა და იმავე ინსტანციას იყენებს.

let pyodideSingleton = null
let pyodideLoadingPromise = null

export async function getPyodide(onStatus) {
  if (pyodideSingleton) return pyodideSingleton
  if (!pyodideLoadingPromise) {
    onStatus?.('იტვირთება Python ძრავა (Pyodide)... ეს პირველად შეიძლება 10-20 წამი გასტანოს.')
    pyodideLoadingPromise = window
      .loadPyodide()
      .then((py) => {
        pyodideSingleton = py
        return py
      })
      .catch((err) => {
        // წარუმატებლობის შემდეგ შემდეგ ღილაკზე დაჭერას თავიდან შევძლოთ ცდა
        pyodideLoadingPromise = null
        throw err
      })
  }
  return pyodideLoadingPromise
}

// კოდს ყოველ გაშვებაზე ახალ, სუფთა namespace-ში ვუშვებთ, რომ წინა სავარჯიშოს
// ცვლადებმა შემთხვევით არ "გადაარჩინონ" ან არ დააბნიონ მოსწავლე.
// Pyodide-ის ვირტუალური ფაილური სისტემა გაშვებებს შორის ინახება (ერთი და იგივე ძრავაა),
// ამიტომ ყოველ გაშვებამდე ვშლით წინა გაშვებებში შექმნილ ფაილებს მიმდინარე საქაღალდეში.
// ასე "a" (append) რეჟიმის სავარჯიშო ყოველ გაშვებაზე ერთსა და იმავე შედეგს იძლევა.
const CLEANUP_CODE = String.raw`
import os as _os
for _f in _os.listdir("."):
    if _os.path.isfile(_f):
        _os.remove(_f)
`

export async function runInFreshNamespace(py, code) {
  py.runPython(CLEANUP_CODE)
  const ns = py.runPython('dict()')
  ns.set('__name__', '__main__')
  try {
    await py.runPythonAsync(code, { globals: ns })
  } finally {
    ns.destroy()
  }
}
