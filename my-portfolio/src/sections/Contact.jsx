import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-xl"
    >
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Contact</h2>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none" placeholder="Your name" />
        <input type="email" className="w-full rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none" placeholder="Your email" />
        <textarea rows="5" className="w-full resize-none rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-white placeholder-neutral-500 focus:border-neutral-600 focus:outline-none" placeholder="Your message"></textarea>
        <button type="submit" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200">Send Message</button>
      </form>
    </motion.div>
  )
}

