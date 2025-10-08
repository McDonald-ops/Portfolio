// eslint-disable-next-line no-unused-vars
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
      className="mx-auto max-w-4xl px-4 sm:px-0"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">Get in Touch</h2>

      {/* Subtitle */}
      <p
        className="text-base sm:text-lg font-medium text-center mb-8 px-2 sm:px-0"
        style={{ color: "var(--contact-subtext)" }}
      >
        Whether it’s starting fresh, improving what’s already there, or coding side by side, I’d love to hear from you.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 justify-items-center">
        {contactInfo.map((item) => {
          const Icon = item.icon
          const isLink = Boolean(item.link)
          return (
            <div key={item.label} className="text-center">
              <div className="flex items-center justify-center gap-2">
                <Icon className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: "var(--contact-icon)" }} aria-hidden="true" />
                <div className="text-lg sm:text-xl font-semibold" style={{ color: "var(--contact-label)" }}>
                  {item.label}
                </div>
              </div>
              <div className="mt-1">
                {isLink ? (
                  <a
                    href={item.link}
                    className="text-base sm:text-lg font-normal transition-colors break-words"
                    style={{ color: "var(--contact-link)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--contact-link-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--contact-link)")}
                    target={item.link?.startsWith('http') ? '_blank' : undefined}
                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-base sm:text-lg font-normal break-words" style={{ color: "var(--contact-link)" }}>
                    {item.value}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
