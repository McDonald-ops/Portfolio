import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Global smooth-scroll for in-page hash links
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]')
  if (!anchor) return
  const href = anchor.getAttribute('href')
  if (!href || href.length < 2) return
  const targetId = href.slice(1)
  const el = document.getElementById(targetId)
  if (!el) return
  e.preventDefault()
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // Update the URL hash without triggering default jump
  history.pushState(null, '', href)
})
