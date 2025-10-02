import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

// Local images
import kreaImg from '../assets/Krea-ai.png'
import githubImg from '../assets/githubsearch.png'
import recipeImg from '../assets/recipeshare.png'
import weatherImg from '../assets/weather-dashboard.png'
import portfolioV1Img from '../assets/Portfolio-v1.png'
import taskManagerImg from '../assets/taskmanager.png'

const projectsData = [
  // PROJECT 1: Krea (Top-Left)
  {
    id: 1,
    title: 'Krea-AI',
    description:
      'Built replica of a modern, responsive web application showcasing AI-powered generation tools with a beautiful carousel interface and comprehensive tool grid.',
    imageSrc: kreaImg,
    liveUrl: 'https://cartolinks-chi.vercel.app/',
    tags: ['Next.js', 'Typescript', 'Framer Motion'],
  },
  // PROJECT 2: Github Explorer (Top-Right)
  {
    id: 2,
    title: 'Github User Finder',
    description:
      'A web tool used to search GitHub users and browse their public profiles and repositories in a clean, responsive interface.',
    imageSrc: githubImg,
    liveUrl: 'https://alx-fe-reactjs-ruby.vercel.app/',
    tags: ['React', 'Javascript', 'Tailwind CSS'],
  },
  // PROJECT 3 Recipe App (bottom left)
  {
    id: 3,
    title: 'RecipeShare',
    description:
      'A simple recipe sharing app where users can explore, view, and share recipes with a clean, responsive design.',
    imageSrc: recipeImg,
    liveUrl: 'https://recipe-sharing-platform-weld.vercel.app/',
    tags: ['React', 'Javascript', 'Tailwind CSS'],
  },
  // PROJECT 4  Weather Dashboard (bottom right)
  {
    id: 4,
    title: 'Forecast Hub',
    description:
      'A modern, responsive weather dashboard that provides current weather conditions and 5-day forecasts for any city worldwide.',
    imageSrc: weatherImg,
    liveUrl: 'https://weather-dashboard-six-lac.vercel.app/',
    tags: ['React', 'Javascript', 'Tailwind CSS'],
  },
  // PROJECT 5: Portfolio (New Project, will be hidden initially)
  {
    id: 5,
    title: 'Portfolio Website v 1.0',
    description: 'My first no-code personal portfolio site built with Google site.',
    imageSrc: portfolioV1Img,
    liveUrl: 'https://sites.google.com/view/mcdonald-dev?usp=sharing',
    tags: ['Google site'],
  },
  // PROJECT 6: To-do App (New Project, will be hidden initially)
  {
    id: 6,
    title: 'Task Manager',
    description:
      'A simple, fast to‑do list app with an inline calendar and filters that helps users track their daily tasks and activities.',
    imageSrc: taskManagerImg,
    liveUrl: 'https://task-manager-roan-iota.vercel.app/',
    tags: ['HTML', 'CSS', 'Javascript'],
  },
]

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4)

  return (
    <div className="mx-auto max-w-7xl py-24 bg-white">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-16">Portfolio</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {visibleProjects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group bg-white rounded-2xl shadow-xl p-4"
          >
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
              <img
                src={p.imageSrc}
                alt={`${p.title} thumbnail`}
                className="h-64 w-full rounded-xl object-cover"
              />
            </a>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="inline-flex"
                >
                  <ExternalLink className="h-5 w-5 text-gray-500 transition-colors group-hover:text-gray-700" />
                </a>
              </div>
              <p className="mt-2 text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-12 rounded-full bg-gray-900 px-6 py-3 text-white font-semibold hover:bg-gray-800 transition-colors"
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  )
}

