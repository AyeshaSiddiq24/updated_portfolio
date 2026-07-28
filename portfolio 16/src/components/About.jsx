import { about, profile } from '../data/content'

function Headline({ text }) {
  const emphasisPhrases = ['break at 2am', 'trust', 'production']
  const match = emphasisPhrases.find((p) => text.toLowerCase().includes(p.toLowerCase()))

  if (match) {
    const idx = text.toLowerCase().indexOf(match.toLowerCase())
    const before = text.slice(0, idx)
    const hit = text.slice(idx, idx + match.length)
    const after = text.slice(idx + match.length)
    return (
      <>
        {before}
        <span className="accent font-black">{hit}</span>
        {after}
      </>
    )
  }

  const words = text.trim().split(' ')
  const last = words.pop()
  return (
    <>
      {words.join(' ')} <span className="accent font-black">{last}</span>
    </>
  )
}

export default function About() {
  return (
    <section id="about" className="border-b border-hair">
      {/* Continuously scrolling "focus areas" ticker — mixed case, matches original */}
      <div className="overflow-hidden border-b border-hair py-4">
        <div className="marquee-track">
          {[...about.tags, ...about.tags].map((tag, i) => (
            <span
              key={i}
              className="flex flex-none items-center gap-2 px-6 mono text-xs tracking-widest text-dim"
            >
              <span className="accent">◆</span> {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="mono text-xs uppercase tracking-widest text-faint">// About</div>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-medium leading-[1.15] sm:text-5xl">
              <Headline text={about.lead} />
            </h2>

            <div className="mt-10 space-y-5 text-base leading-relaxed text-dim">
              {about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative h-full min-h-[420px] lg:min-h-0">
            <div className="absolute inset-0 overflow-hidden border border-hair bg-panel">
              <img
                src={about.photo}
                alt={`${profile.name} at graduation`}
                className="h-full w-full object-cover"
                style={{ objectPosition: '50% 78%' }}
                loading="lazy"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-hair bg-ink/70 px-4 py-2 mono text-xs text-dim backdrop-blur">
              <span>NODE::{profile.firstName}.{profile.lastName}</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> ONLINE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
