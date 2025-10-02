import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'odiasemcdonald1@gmail.com', link: 'mailto:odiasemcdonald1@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 814 732 3712', link: 'tel:+2348147323712' },
  { icon: MapPin, label: 'Location', value: 'Nigeria (Remote Available)' },
]

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mx-auto max-w-4xl"
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-6">Get in Touch</h2>
      {/* Subtitle */}
      <p className="text-lg text-gray-600 font-medium text-center mb-8 ">
        Whether it’s starting fresh, improving what’s already there, or coding side by side, I’d love to hear from you.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 justify-items-center">
        {contactInfo.map((item) => {
          const Icon = item.icon
          const isLink = Boolean(item.link)
          return (
            <div key={item.label} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Icon className="h-8 w-8 text-gray-800" aria-hidden="true" />
                <div className="text-xl font-semibold text-gray-900">{item.label}</div>
              </div>
              <div className="mt-1">
                {isLink ? (
                  <a
                    href={item.link}
                    className="text-lg font-normal text-gray-700 hover:text-gray-900 transition-colors"
                    target={item.link?.startsWith('http') ? '_blank' : undefined}
                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-lg font-normal text-gray-700">{item.value}</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}

