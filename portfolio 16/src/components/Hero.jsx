import { useRef, useState } from 'react'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { profile } from '../data/content'
import TerminalLog from './TerminalLog'

export default function Hero() {
  const nameRef = useRef(null)
  const [glow, setGlow] = useState({ x: 0, y: 0, visible: false })

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMouseMove = (e) => {
    const rect = nameRef.current.getBoundingClientRect()
    setGlow({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    })
  }

  return (
    <section id="home" className="relative overflow-hidden border-b border-hair pt-32">
      <div className="absolute right-6 top-24 mono text-xs tracking-widest text-dim sm:right-10">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 align-middle" />
        AVAILABLE FOR WORK
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8">
        <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-8 lg:grid-cols-[300px_1fr] lg:gap-12">
          <TerminalLog />

          <div>
            <div className="mb-6 flex items-center gap-3 mono text-xs uppercase tracking-widest text-dim">
              <span className="h-px w-8 bg-current opacity-40" />
              {profile.role}
            </div>

            <h1
              ref={nameRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setGlow((g) => ({ ...g, visible: false }))}
              className="relative select-none overflow-visible font-display font-black uppercase leading-[0.85] tracking-tight"
              style={{ fontSize: 'clamp(2.75rem, 9vw, 7.5rem)' }}
            >
              {/* Soft glow that follows the cursor while hovering the name */}
              <span
                className="pointer-events-none absolute -z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-200 sm:h-72 sm:w-72"
                style={{
                  left: glow.x,
                  top: glow.y,
                  opacity: glow.visible ? 0.25 : 0,
                  background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />
              <span className="relative block accent">{profile.firstName}</span>
              <span className="relative block text-outline">{profile.lastName}</span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-3 mono text-sm">
              {profile.focusAreas.map((tag, i) => (
                <span
                  key={tag}
                  className={`flex items-center gap-2 border border-hair px-4 py-2 ${
                    i === 0 ? 'accent' : 'text-dim'
                  }`}
                >
                  {i === 0 && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
                  {tag}
                </span>
              ))}
              <span className="text-faint">// focus areas</span>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-dim sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('projects')}
                className="border border-accent bg-accent/90 px-6 py-3 mono text-sm font-medium hover:bg-accent"
                style={{ color: '#05070a' }}
              >
                VIEW PROJECTS ↓
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 border border-hair px-6 py-3 mono text-sm text-dim hover:text-current"
              >
                <Mail size={14} /> CONTACT
              </button>
              <a
                href={`https://${profile.github}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-hair text-dim hover:text-current"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-hair text-dim hover:text-current"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="flex h-11 w-11 items-center justify-center border border-hair text-dim hover:text-current"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              onClick={() => scrollTo('about')}
              className="mt-24 flex flex-col items-center gap-2 mono text-xs tracking-widest text-faint hover:text-dim"
            >
              <ArrowDown size={14} />
              SCROLL_TO_DECODE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
