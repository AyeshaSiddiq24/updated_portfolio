import { Award } from 'lucide-react'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="border-b border-hair">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-5xl font-black sm:text-6xl">
            Skills &amp; Certifications<span className="accent">.</span>
          </h2>
          <p className="max-w-sm text-lg text-dim sm:text-right">{skills.lead}</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-2 mono text-xs uppercase tracking-widest text-dim">
              <Award size={14} className="accent" /> // CORE_SKILLS
            </div>
            <div className="space-y-4">
              {skills.categories.map((cat) => (
                <div key={cat.title} className="border border-hair p-6">
                  <h3 className="text-lg font-bold">{cat.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="border border-hair px-3 py-1.5 mono text-xs text-dim">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2 mono text-xs uppercase tracking-widest text-dim">
              <Award size={14} className="accent" /> // CERTIFICATIONS
            </div>
            <div className="space-y-4">
              {skills.certifications.map((c) => (
                <div key={c.title} className="flex gap-4 border border-hair p-6">
                  <div className="flex h-10 w-10 flex-none items-center justify-center border border-hair accent">
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold">{c.title}</h4>
                    <div className="mt-1 mono text-xs text-dim">{c.issuer}</div>
                    <div className="mt-1 mono text-xs text-faint">{c.tags}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
