import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    { title: 'UI Engineering', desc: 'Design systems, component libraries, and pixel-perfect interfaces.' },
    { title: 'Frontend Development', desc: 'React, TypeScript, performance optimization, and testing.' },
    { title: 'Interaction Design', desc: 'Micro-interactions and motion for delightful UX.' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Services</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6"
          >
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
