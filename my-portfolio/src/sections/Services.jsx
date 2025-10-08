// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Code, Laptop, PenTool } from 'lucide-react'

export default function Services() {
  const servicesData = [
    {
      id: 1,
      icon: 'Code',
      title: 'Frontend Development',
      description: 'Turning ideas into fast, flexible, and human-centered web applications with React, Next.js, and more.'
    },
    {
      id: 2,
      icon: 'Computer',
      title: 'Website Design',
      description: 'From big monitors to small phones, I build designs that adjust beautifully everywhere.'
    },
    {
      id: 3,
      icon: 'Pen tool',
      title: 'UI/UX Design',
      description: 'Crafting intuitive layouts that guide users smoothly while keeping them engaged.'
    }
  ];

  // Function to render the appropriate Lucide icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Code':
        return <Code size={24} className="text-blue-500" />
      case 'Computer':
        return <Laptop size={24} className="text-blue-500" />
      case 'Pen tool':
        return <PenTool size={24} className="text-blue-500" />
      default:
        return <Code size={24} className="text-blue-500" />
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-0 pt-0 pb-0 px-4"
    >
        {/* Services Title */}
        <h2 className="text-4xl font-extrabold mb-10 text-center">Services</h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl p-6 sm:p-10 text-center"
              style={{ background: "var(--service-card-bg)" }}
              whileHover={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
            >
              {/* Icon with light background */}
              <div className="flex justify-center items-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-50 mx-auto mb-6">
                {renderIcon(service.icon)}
              </div>
              
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 whitespace-nowrap">{service.title}</h3>
              
              {/* Description */}
              <p className="text-base sm:text-lg font-medium" style={{ color: "var(--text-secondary)" }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
    </motion.section>
  )
}
