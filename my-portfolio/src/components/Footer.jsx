import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const socialLinks = [
  { icon: Github, url: 'https://github.com/mcdonald-ops', label: 'GitHub' },
  { icon: Linkedin, url: 'https://www.linkedin.com/in/mcdonald-odiase-68071535a', label: 'LinkedIn' },
  { icon: Twitter, url: 'https://x.com/thisismcdonald_?s=21', label: 'X (Twitter)' },
  { icon: Mail, url: 'mailto:odiasemcdonald1@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <>
      {/* Divider aligned to floating header width */}
      <div className="mx-auto max-w-7xl container-x">
        <hr className="my-0" style={{ borderColor: 'var(--divider)' }} />
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
                  style={{ color: 'var(--footer-icon)' }}
                  className="transition-colors"
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--footer-icon-hover)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--footer-icon)')}
                >
                  <Icon className="h-6 w-6" />
                </a>
              )
            })}
          </div>
          {/* Copyright */}
          <p className="text-md" style={{ color: 'var(--footer-text)' }}>
            © 2025 McDonald Odiase. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
