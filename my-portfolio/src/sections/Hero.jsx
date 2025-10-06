import { useState, useEffect, useMemo, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const phrases = useMemo(() => [
    "I’m a Frontend Developer",
    "I’m a Website Designer",
    "I’m a Problem Solver",
  ], [])

  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const base = "I’m a "
  const timerRef = useRef(null)

  useEffect(() => {
    const full = phrases[index]
    const nextTick = () => {
      setText((prev) => {
        if (!deleting) {
          const next = full.slice(0, prev.length + 1)
          if (next === full) {
            // Add delay before starting deletion
            setTimeout(() => {
              setDeleting(true)
            }, 1000)
          }
          return next
        } else {
          if (prev.length <= base.length) {
            setDeleting(false)
            setIndex((i) => (i + 1) % phrases.length)
            return prev
          }
          return prev.slice(0, prev.length - 1)
        }
      })
    }

    const delay = deleting ? 50 : 90
    timerRef.current = setTimeout(nextTick, delay)
    return () => clearTimeout(timerRef.current)
  }, [phrases, index, deleting, text])

  useEffect(() => {
    if (!deleting) {
      setText((prev) => (prev.length < base.length ? base.slice(0, prev.length + 1) : prev))
    }
  }, [index, deleting])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center"
    >
      <h1 className="pt-30 text-5xl font-extrabold tracking-tight sm:text-7xl">
        Hi, I'm McDonald
      </h1>

      {/* ✅ dynamic text color */}
      <div className="text-xl font-semibold sm:text-2xl" style={{ color: "var(--text)" }}>
        {text}
        {/* ✅ caret adapts to theme */}
        <div
          className="ml-1 inline-block h-6 w-1 animate-pulse align-middle"
          style={{ background: "var(--accent)" }}
        />
      </div>

      <div className="pt-6">
        {/* ✅ button adapts border/text color */}
        <a
          href="#contact"
          className="rounded-full px-10 py-4 text-xl font-regular hover:scale-105 transition-transform duration-300 inline-block text-center"
          style={{
            background: "var(--btn-bg)",
            color: "var(--btn-border)",
            border: "4px solid var(--btn-border)"
          }}
        >
          Available for work
        </a>
      </div>
    </motion.div>
  )
}
