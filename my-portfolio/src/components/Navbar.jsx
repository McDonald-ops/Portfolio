import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('#about')
  const [open, setOpen] = useState(false)
  const [isSunny, setIsSunny] = useState(true)

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onHashLinkClick = (e) => {
      const target = e.target
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onHashLinkClick)
    return () => document.removeEventListener('click', onHashLinkClick)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl container-x">
        <div className="pointer-events-auto mt-4 rounded-full border border-gray-200 bg-white/90 shadow-lg backdrop-blur">
          <nav className="flex items-center justify-between px-4 py-3" aria-label="Global">
            <a href="#home" className="flex items-center gap-3">
              <span className="inline-block h-10 w-10 rounded-full bg-gray-200" />
            </a>
        
        <div className="hidden items-center justify-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-base font-semibold hover:text-gray-900 transition-colors duration-300 ${active === l.href ? 'text-blue-500' : 'text-gray-600'}`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition"
            aria-label="Toggle theme icon"
            onClick={() => setIsSunny((v) => !v)}
          >
            {isSunny ? (
              <SunIcon className="h-5 w-5 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </button>
          <button
            type="button"
            className="sm:hidden p-2 text-gray-700 hover:text-gray-900 transition"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
          </nav>
          <div
            className={`sm:hidden border-t border-gray-200 bg-white/95 overflow-hidden transition-[max-height] duration-300 ease-out ${open ? 'max-h-64' : 'max-h-0'}`}
            aria-hidden={!open}
          >
            <div className="px-4 py-3">
              <div className="grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`block rounded-md px-2 py-2 text-base font-semibold hover:bg-gray-100 ${active === l.href ? 'text-blue-500' : 'text-gray-600'}`}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
