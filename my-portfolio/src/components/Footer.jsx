import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, url: 'https://github.com/mcdonald-ops', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/mcdonald-odiase-68071535a', label: 'LinkedIn' },
  { icon: Mail, url: 'mailto:odiasemcdonald1@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <>
      {/* Divider aligned to floating header width */}
      <div className="mx-auto max-w-7xl container-x">
        <hr className="my-0 border-gray-300" />
      </div>

      <footer>
        <div className="mx-auto max-w-4xl py-16 text-center">
          {/* Social icons row */}
          <div className="flex items-center justify-center space-x-6 mb-4">
            {socialLinks.map((s) => {
              const Icon = s.icon
              const isExternal = s.url.startsWith('http')
              return (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.label}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="text-gray-700 hover:text-gray-900 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              )
            })}
          </div>
          {/* Copyright */}
          <p className="text-md text-gray-500">© 2025 McDonald Odiase. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}





