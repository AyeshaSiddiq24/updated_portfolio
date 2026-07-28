import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Home, User, Briefcase, FolderKanban, Award, Mail,
  Download, Copy, Github, Linkedin, Sun, Moon, Check,
} from 'lucide-react'
import { profile } from '../data/content'
import { generateResumePdf } from '../utils/generateResume'

export default function CommandPalette({ open, onClose, theme, onToggleTheme }) {
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)
  const inputRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const commands = useMemo(
    () => [
      { label: 'Go to Home', icon: Home, action: () => scrollTo('home') },
      { label: 'Go to About', icon: User, action: () => scrollTo('about') },
      { label: 'Go to Experience', icon: Briefcase, action: () => scrollTo('experience') },
      { label: 'Go to Projects', icon: FolderKanban, action: () => scrollTo('projects') },
      { label: 'Go to Skills', icon: Award, action: () => scrollTo('skills') },
      { label: 'Go to Contact', icon: Mail, action: () => scrollTo('contact') },
      { label: 'Download Resume (PDF)', icon: Download, action: () => generateResumePdf() },
      {
        label: 'Copy Email Address',
        icon: copied ? Check : Copy,
        action: async () => {
          await navigator.clipboard.writeText(profile.email)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        },
        keepOpen: true,
      },
      { label: 'Open GitHub', icon: Github, action: () => window.open(`https://${profile.github}`, '_blank') },
      { label: 'Open LinkedIn', icon: Linkedin, action: () => window.open(`https://${profile.linkedin}`, '_blank') },
      {
        label: theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode',
        icon: theme === 'dark' ? Sun : Moon,
        action: onToggleTheme,
        keepOpen: true,
      },
    ],
    [copied, theme]
  )

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const run = (cmd) => {
    cmd.action()
    if (!cmd.keepOpen) onClose()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg border border-hair bg-panel shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-hair px-4 py-3">
          <span className="mono text-xs text-faint">&gt;</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command..."
            className="flex-1 bg-transparent mono text-sm text-current outline-none placeholder:text-faint"
          />
          <span className="mono text-xs text-faint">ESC</span>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <div className="px-3 py-6 text-center mono text-xs text-faint">No matching commands</div>
          )}
          {filtered.map((cmd) => {
            const Icon = cmd.icon
            return (
              <button
                key={cmd.label}
                onClick={() => run(cmd)}
                className="flex w-full items-center gap-3 px-3 py-2.5 text-left mono text-sm text-dim hover:bg-white/[0.04] hover:text-current"
              >
                <Icon size={14} className="flex-none accent" />
                {cmd.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
