import { Github } from 'lucide-react'
import { projects } from '../data/content'
import ProjectCover from './ProjectCover'

export default function Projects() {
  return (
    <section id="projects" className="border-b border-hair">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="font-display text-5xl font-black sm:text-6xl">
            Projects<span className="accent">.</span>
          </h2>
          <p className="max-w-sm text-lg text-dim sm:text-right">
            Showcase of technical implementations in AI and Data Engineering.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col border border-hair bg-panel/30 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_12px_40px_-12px_rgba(143,176,218,0.25)]"
            >
              <ProjectCover cover={p.cover} icon={p.icon} title={p.title} seed={i + 1} />

              <div className="flex-1 p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-1 mono text-xs accent">{p.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-dim">{p.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="border border-hair px-2.5 py-1 mono text-[11px] text-dim">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={p.source}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border-t border-hair py-3 mono text-xs text-dim transition-colors hover:text-current"
              >
                <Github size={13} /> SOURCE ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
