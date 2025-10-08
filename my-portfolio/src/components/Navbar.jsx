import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import avatar from '../assets/avatar.jpg'
import ThemeToggle from './ThemeToggle'

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
        <div className="pointer-events-auto mt-4">
          {/* Keep header pill shape fixed; dropdown renders below without altering it */}
          <div
            className="rounded-full shadow-lg backdrop-blur"
            style={{ border: `1px solid var(--nav-border)`, background: 'var(--nav-bg)' }}
          >
            <nav className="flex items-center justify-between px-4 py-3" aria-label="Global">
              <a href="#home" className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-transparent">
                  <img src={avatar} alt="Avatar" className="h-full w-full object-cover" />
                </div>
              </a>

            <div className="hidden items-center justify-center gap-8 sm:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  style={{
                    color: active === l.href ? 'var(--nav-link-active)' : 'var(--nav-link)',
                  }}
                  className="text-xl font-semibold transition-colors duration-300 hover:!text-[var(--nav-link-hover)]"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                style={{ color: 'var(--nav-link)' }}
                className="sm:hidden p-2 transition-colors hover:!text-[var(--nav-link-hover)]"
                aria-expanded={open}
              >
                <span className="relative inline-block h-6 w-6">
                  <Bars3Icon
                    className={`absolute inset-0 h-6 w-6 transition-transform transition-opacity duration-300 ${open ? 'opacity-0 scale-90 rotate-90' : 'opacity-100 scale-100 rotate-0'}`}
                  />
                  <XMarkIcon
                    className={`absolute inset-0 h-6 w-6 transition-transform transition-opacity duration-300 ${open ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-90'}`}
                  />
                </span>
              </button>
            </div>
          </nav>
          </div>

          <div
            className={`sm:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${
              open ? 'max-h-64' : 'max-h-0'
            }`}
            style={{
              background: 'var(--nav-mobile-bg)',
              borderTop: `1px solid var(--nav-mobile-border)`,
            }}
            aria-hidden={!open}
          >
            <div className="px-4 py-3">
              <div className="grid gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    style={{
                      color: active === l.href ? 'var(--nav-link-active)' : 'var(--nav-link)',
                    }}
                    className="block rounded-md px-2 py-2 text-base font-semibold transition-colors hover:!bg-[var(--nav-mobile-hover)] hover:!text-[var(--nav-link-hover)]"
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
