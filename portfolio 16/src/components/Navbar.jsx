import { useEffect, useState } from 'react'
import { Sun, Moon, Command } from 'lucide-react'
import { profile } from '../data/content'

const sections = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'experience', num: '02', label: 'Experience' },
  { id: 'projects', num: '03', label: 'Projects' },
  { id: 'skills', num: '04', label: 'Skills' },
  { id: 'contact', num: '05', label: 'Contact' },
]

function useUtcClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const hh = String(now.getUTCHours()).padStart(2, '0')
      const mm = String(now.getUTCMinutes()).padStart(2, '0')
      const ss = String(now.getUTCSeconds()).padStart(2, '0')
      setTime(`${hh}:${mm}:${ss} UTC`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Navbar({ theme, onToggleTheme, active, onOpenPalette }) {
  const time = useUtcClock()
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-hair bg-panel/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 mono text-sm tracking-wide"
          aria-label="Go to top"
        >
          <span className="flex h-6 w-6 items-center justify-center border border-hair text-xs accent">
            {profile.firstName[0]}
          </span>
          <span className="hidden sm:inline">{profile.firstName}.{profile.lastName}</span>
        </button>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Section navigation">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`mono text-sm transition-colors ${
                active === s.id ? 'accent border-b border-current pb-1' : 'text-dim hover:text-current'
              }`}
            >
              <span className="text-faint mr-1">{s.num}</span>
              {s.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 border border-hair px-3 py-1.5 mono text-xs text-dim sm:flex">
            <span
              className={`h-2 w-2 rounded-full ${
                profile.availableForWork ? 'bg-emerald-400' : 'bg-rose-400'
              }`}
              aria-hidden="true"
            />
            <span>{profile.availableForWork ? 'Available for work' : 'Not available'}</span>
            <span className="text-faint">|</span>
            <span suppressHydrationWarning>{time}</span>
          </div>

          <button
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center border border-hair text-dim hover:text-current"
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={onOpenPalette}
            className="hidden h-9 items-center gap-1 border border-hair px-2 mono text-xs text-faint hover:text-dim sm:flex"
          >
            <Command size={12} />
            <span>K</span>
          </button>

          <button
            className="flex h-9 w-9 items-center justify-center border border-hair lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="mono text-xs">{open ? 'X' : '☰'}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-hair bg-panel px-5 py-3 lg:hidden" aria-label="Mobile navigation">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="block w-full py-2 text-left mono text-sm text-dim"
            >
              <span className="text-faint mr-2">{s.num}</span>
              {s.label}
            </button>
          ))}
          <div className="mt-2 flex items-center gap-2 pt-2 border-t border-hair mono text-xs text-dim">
            <span
              className={`h-2 w-2 rounded-full ${
                profile.availableForWork ? 'bg-emerald-400' : 'bg-rose-400'
              }`}
            />
            {profile.availableForWork ? 'Available for work' : 'Not available'} · {time}
          </div>
        </nav>
      )}
    </header>
  )
}
