import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="grid gap-8 md:grid-cols-2"
    >
      <div>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
        <p className="mt-4 text-neutral-300">Im a frontend developer specializing in React and modern UI engineering. I focus on clean architectures, strong accessibility, and delightful interactions.</p>
      </div>
      <div>
        <h3 className="text-sm font-medium text-neutral-400">Skills</h3>
        <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-neutral-200 sm:grid-cols-3">
          <li className="rounded-md border border-neutral-800 px-3 py-2">React</li>
          <li className="rounded-md border border-neutral-800 px-3 py-2">TypeScript</li>
          <li className="rounded-md border border-neutral-800 px-3 py-2">Tailwind</li>
          <li className="rounded-md border border-neutral-800 px-3 py-2">Node</li>
          <li className="rounded-md border border-neutral-800 px-3 py-2">Framer Motion</li>
          <li className="rounded-md border border-neutral-800 px-3 py-2">Accessibility</li>
        </ul>
      </div>
    </motion.div>
  )
}
