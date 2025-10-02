import { useState, useEffect } from 'react'
import { Sun } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('#about')
  const [open, setOpen] = useState(false)

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
        <div className="pointer-events-auto mt-4 rounded-full border border-gray-200 bg-[#F9FAFB] shadow-lg backdrop-blur">
          <nav className="flex items-center justify-between px-4 py-3" aria-label="Global">
            <a href="#home" className="flex items-center gap-3">
              <span className="inline-block h-10 w-10 rounded-full bg-gray-200" />
            </a>
        <button
          className="sm:hidden rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-600"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          Menu
        </button>
        <div className="hidden items-center justify-center gap-8 sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-lg font-semibold hover:text-gray-900 transition-colors duration-300 ${active === l.href ? 'text-blue-500' : 'text-gray-600'}`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden sm:block">
          <button className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300 transition" aria-label="Toggle theme">
            <Sun className="h-5 w-5 text-gray-700" />
          </button>
        </div>
          </nav>
          {open && (
            <div className="sm:hidden border-t border-gray-200 bg-[#F9FAFB]/95">
              <div className="px-4 py-3">
                <div className="grid gap-2">
                  {links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className={`block rounded-md px-2 py-2 text-lg font-semibold hover:bg-gray-100 ${active === l.href ? 'text-blue-500' : 'text-gray-600'}`}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
