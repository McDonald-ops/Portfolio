import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    { title: 'Project One', desc: 'A cool project description.', href: '#' },
    { title: 'Project Two', desc: 'Another cool project description.', href: '#' },
    { title: 'Project Three', desc: 'Yet another project.', href: '#' },
    { title: 'Project Four', desc: 'Something impressive.', href: '#' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Portfolio</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700"
          >
            <div className="aspect-video w-full rounded-lg bg-neutral-800"></div>
            <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-1 text-sm text-neutral-300">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

