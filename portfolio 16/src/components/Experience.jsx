import { Briefcase, GraduationCap } from 'lucide-react'
import { experience, experienceMetrics } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-hair">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-5xl font-black sm:text-6xl">
          Experience<span className="accent">.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-dim">A timeline of my professional journey and contributions.</p>

        <div className="mt-12 grid grid-cols-2 border border-hair sm:grid-cols-4">
          {experienceMetrics.map((m, i) => (
            <div
              key={m.label}
              className={`p-6 ${i % 2 === 0 ? 'bg-panel/40' : ''} ${i > 0 ? 'border-l border-hair' : ''}`}
            >
              <div className="mono text-xs text-faint">// METRIC</div>
              <div className="mt-2 text-3xl font-bold sm:text-4xl">{m.value}</div>
              <div className="mt-1 mono text-xs text-dim">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 mono text-sm text-dim">&gt; cat /var/log/career.timeline</div>

        <div className="mt-8 space-y-14 border-l pl-12 sm:pl-16" style={{ borderColor: 'var(--text-dim)' }}>
          {experience.map((item, i) => (
            <div key={i} className="relative grid gap-2 sm:grid-cols-[170px_1fr] sm:gap-10">
              <span className="absolute -left-[45px] -top-1 flex h-8 w-8 items-center justify-center border border-hair bg-panel sm:-left-[53px]">
                {item.type === 'job' ? <Briefcase size={14} /> : <GraduationCap size={14} />}
              </span>

              <div className="mono text-xs text-dim">
                <div>{item.range}</div>
                <div>{item.location}</div>
              </div>

              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">
                  {item.title} <span className="text-faint">—</span> <span className="text-dim">{item.company}</span>
                </h3>

                {item.stats && (
                  <div className="mt-4 flex flex-wrap gap-6">
                    {item.stats.map((s) => (
                      <div key={s.label} className="border-l pl-3" style={{ borderColor: 'var(--text-dim)' }}>
                        <div className="text-2xl font-bold">{s.value}</div>
                        <div className="mono text-xs text-dim">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-4 max-w-3xl text-base leading-relaxed text-dim">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
