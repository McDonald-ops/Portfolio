import { useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export default function LoadingScreen({ onReady }) {
  useEffect(() => {
    // Fixed 6-second loading duration for improved readability
    const timeout = setTimeout(() => onReady?.(), 6000)
    return () => clearTimeout(timeout)
  }, [onReady])

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center will-change-transform"
      style={{ background: 'var(--bg)', color: 'var(--text)' }}
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="text-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center flex-wrap sm:flex-nowrap gap-3 sm:gap-4 md:gap-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-[90vw] break-words"
        >
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-[1em] h-[1em] rounded-full align-middle"
            style={{ color: '#3B82F6' }}
          >
            <Code className="w-[1em] h-[1em]" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 1, 0.7, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="font-extrabold italic"
          >
            Welcome to Mcdonald dev...
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  )
}