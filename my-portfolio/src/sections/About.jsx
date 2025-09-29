import { useState, useEffect, useMemo } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import vectorImage from '../assets/vector.png'
import CSS3_logo from '../assets/CSS3_logo.png'
import ESLint_logo from '../assets/ESLint_logo.png'
import Git from '../assets/Git.png'
import HTML5_logo from '../assets/HTML5_logo.png'
import JavaScript_logo from '../assets/JavaScript-logo.png'
import React_icon from '../assets/React-icon.png'
import Typescript_logo from '../assets/Typescript_logo.png'
import Vitejs_logo from '../assets/Vitejs-logo.png'
import next_js_logo from '../assets/next-js-logo.png'
import redux from '../assets/redux.png'
import tailwind_css_logo from '../assets/tailwind-css-logo.png'

export default function About() {
  const journeyStages = [
    { title: "🌱 Curiosity Sparked", description: "Started with a love for solving puzzles and tinkering with tech, which grew into a curiosity for how software is built." },
    { title: "🔍 Self Discovery", description: "Explored coding through self-study, building small projects with HTML, CSS, and JavaScript to understand the basics of the web." },
    { title: "🎓 Structured Growth", description: "Joined ALX Africa Software Engineering Program, where I learned problem-solving, collaboration, and built real-world projects under guidance." },
    { title: "💻 Frontend Focus", description: "Specialized in frontend development, diving deeper into React, Next.js, and TailwindCSS to create clean, responsive, and user-friendly applications." },
    { title: "🌍 Ongoing Adventure", description: "Now continuously sharpening my skills through personal projects, open-source contributions, and self-study - always aiming to build better, faster, and more human-centered solutions." }
  ]

  return (
    <div>
      {/* About Me Section Container */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto">
          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 items-center"
          >
            {/* Left Column - Image */}
            <div className="flex justify-center">
              <img 
                src={vectorImage} 
                alt="About Me Illustration" 
                className="w-full h-auto max-w-md object-contain"
              />
            </div>
            
            {/* Right Column - Content */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey into tech started from curiosity and a love for solving puzzles.
                   As a kid, I was always tinkering with things, and that curiosity eventually turned into building solutions with code.<br/> Today, I’m a frontend developer who enjoys creating clean, responsive, and user-friendly web apps with React, Next.js, and Tailwind CSS. I love the challenge of turning complex ideas into simple, elegant designs. Just like Alan Kay said “The best way to predict the future is to build it”. Outside of coding, you’ll usually<br/> find me gaming, working out, or catching a good football match.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-6">
                <a href="#contact" className="rounded-full bg-transparent px-10 py-4 text-xl font-regular text-gray-900 border-4 border-gray-900 hover:scale-105 transition-transform duration-300 inline-block text-center">
                  Get in Touch
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Learning Journey Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-24 py-16"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Learning Journey</h2>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Stages with broken vertical lines */}
              <div className="relative">
                {journeyStages.map((stage, index) => (
                  <div key={index} className="mb-12 relative">
                    {/* Central Vertical Line segment - Stops at bottom of each card */}
                    {index < journeyStages.length - 1 && (
                      <div className="absolute left-1/2 top-8 bottom-0 h-full w-0.5 bg-gray-300 transform -translate-x-1/2 z-0" />
                    )}
                    
                    {/* Stage Card */}
                    <motion.div 
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-white rounded-xl shadow-md p-6 w-full max-w-sm md:max-w-md min-h-48 md:min-h-56 ${index % 2 === 0 ? 'md:ml-0 md:mr-auto ' : 'md:ml-auto md:mr-0 '}`}
                      style={{
                        zIndex: 1, // Ensure cards are above the central line
                      }}
                    >
                      <h3 className="text-2xl font-semibold mb-2">{stage.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{stage.description}</p>
                    </motion.div>
                    
                    {/* Stage Marker - Positioned at the top edge of the card */}
                    <div className={`absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 z-20`} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Stacks Section - Outside the About Me container */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className="mt-8 py-16"
      >
        <motion.h3 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Stacks
        </motion.h3>
        
        {/* StackGrid is now a standalone component call */}
        <StackGrid />
      </motion.div>
    </div>
  )
}

// =========================================================================
// 2. STACK GRID COMPONENT (AUTO-SLIDING CAROUSEL)
// The logic is moved here and updated for the carousel effect.
// =========================================================================

function StackGrid() {
  const stackItems = useMemo(() => [
    { id: 1, logo: HTML5_logo, name: 'HTML5' },
    { id: 2, logo: CSS3_logo, name: 'CSS3' },
    { id: 3, logo: JavaScript_logo, name: 'JavaScript' },
    { id: 4, logo: React_icon, name: 'React' },
    { id: 5, logo: next_js_logo, name: 'Next.js' },
    { id: 6, logo: Typescript_logo, name: 'TypeScript' },
    { id: 7, logo: tailwind_css_logo, name: 'Tailwind CSS' },
    { id: 8, logo: redux, name: 'Redux' },
    { id: 9, logo: Vitejs_logo, name: 'Vite' },
    { id: 10, logo: ESLint_logo, name: 'ESLint' },
    { id: 11, logo: Git, name: 'Git' }
  ], []);

  const [startIndex, setStartIndex] = useState(0);

  // Configuration
  const itemsPerPage = 6; // 6 items visible on desktop
  const intervalDuration = 3000; // Slide every 3 seconds

  // Duplicate the first few items to create a seamless visual loop
  const duplicatedItems = stackItems.concat(stackItems.slice(0, itemsPerPage));
  const maxStartIndex = stackItems.length; // Max index before reset

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex(prevIndex => 
        // Advance index; reset to 0 when it hits the start of the duplicates
        (prevIndex + 1) % maxStartIndex
      );
    }, intervalDuration);

    return () => clearInterval(timer);
  }, [maxStartIndex]);

  // Calculate the translateX value (Percentage shift)
  const translateX = -(startIndex * (100 / itemsPerPage));

  // Define the Framer Motion transition properties
  const slideTransition = {
    duration: 1.0, // 1 second slide animation
    ease: "easeInOut",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      // Tailwind classes for the main carousel viewport
      className="max-w-6xl mx-auto overflow-hidden px-4" 
    >
      {/* Inner track uses animate prop for sliding */}
      <motion.div 
        className="flex" 
        animate={{ x: `${translateX}%` }}
        transition={slideTransition}
      >
        {duplicatedItems.map((item, index) => (
          // Item wrapper uses w-1/6 to ensure 6 items fit on large screens
          <div
            key={index}
            // w-full on mobile, w-1/3 on small/medium screens, w-1/6 on large screens
            className={`flex-shrink-0 w-full sm:w-1/3 lg:w-1/${itemsPerPage}`} 
          >
            {/* Inner padding for spacing between cards */}
            <div className="p-3">
              {/* Individual stack card styling */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow-md h-32 flex flex-col items-center justify-center p-4 border border-gray-100 transition duration-300 hover:shadow-xl"
              >
                <img 
                  src={item.logo} 
                  alt={item.name} 
                  className="w-16 h-16 object-contain mb-1"
                />
                <span className="text-sm font-semibold text-gray-700">{item.name}</span>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}