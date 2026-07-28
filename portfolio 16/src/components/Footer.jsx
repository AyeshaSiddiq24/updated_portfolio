import { useEffect, useState } from 'react'
import { profile, footer } from '../data/content'

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

export default function Footer() {
  const time = useUtcClock()
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.getElementById(id.replace('#', ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold">
            <span className="flex h-6 w-6 items-center justify-center border border-hair text-xs accent">
              {profile.firstName[0]}
            </span>
            {profile.name}
          </div>
          <p className="mt-4 max-w-xs text-sm text-dim">{footer.blurb}</p>
        </div>

        <div>
          <div className="mono text-xs uppercase tracking-widest text-faint">// NAVIGATE</div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {footer.navigate.map(([label, href]) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                className="text-left mono text-sm text-dim hover:text-current"
              >
                &gt; {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mono text-xs uppercase tracking-widest text-faint">// SYSTEM_STATUS</div>
          <div className="mt-4 space-y-2 mono text-sm text-dim">
            <div className="flex justify-between gap-4">
              <span>SYS_TIME</span>
              <span suppressHydrationWarning>{time}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>STATUS</span>
              <span className="accent">OPERATIONAL</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>BUILD</span>
              <span>{footer.build}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-hair px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 mono text-xs text-faint sm:flex-row">
          <span>
            © {year} {profile.name} | AI/ML Engineer | Built with React.
          </span>
          <span>&gt; end_of_transmission_</span>
        </div>
      </div>
    </footer>
  )
}
