import { motion } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

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
            setDeleting(true)
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
      <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">Hi, I'm Mcdonald</h1>
      <p className="text-xl text-gray-700 sm:text-2xl">
        {text}
        <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-gray-800 align-middle" />
      </p>
      <div className="pt-2">
        <a href="#contact" className="rounded-full bg-blue-600 px-10 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700">Available for work</a>
      </div>
    </motion.div>
  )
}
