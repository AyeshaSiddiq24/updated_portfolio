import { useState } from 'react'
import { Download, Copy, Check, Linkedin, Github, Mail } from 'lucide-react'
import { contact, profile } from '../data/content'
import { generateResumePdf } from '../utils/generateResume'

function Row({ label, value, href, icon, action }) {
  const [copied, setCopied] = useState(false)

  const handleAction = async () => {
    if (action === 'copy') {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    }
  }

  const content = (
    <>
      <div>
        <div className="mono text-xs text-faint">// {label}</div>
        <div className="mt-1 break-all mono text-sm sm:text-base">{value}</div>
      </div>
      <span className="flex h-9 w-9 flex-none items-center justify-center border border-hair text-dim">
        {action === 'copy' ? (copied ? <Check size={14} /> : <Copy size={14} />) : icon}
      </span>
    </>
  )

  if (action === 'copy') {
    return (
      <button
        onClick={handleAction}
        className="flex w-full items-center justify-between gap-4 border-b border-hair px-6 py-5 text-left last:border-b-0 hover:bg-white/[0.02]"
      >
        {content}
      </button>
    )
  }

  return (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="flex items-center justify-between gap-4 border-b border-hair px-6 py-5 last:border-b-0 hover:bg-white/[0.02]"
    >
      {content}
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="border-b border-hair">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-5xl font-black leading-[0.95] sm:text-6xl">
            Get in
            <br />
            Touch<span className="accent">.</span>
          </h2>
          <p className="mt-8 max-w-md text-xl leading-relaxed text-dim">{contact.lead}</p>
        </div>

        <div className="border border-hair">
          <button
            onClick={generateResumePdf}
            className="flex w-full items-center justify-between gap-4 border-b border-hair px-6 py-5 text-left hover:bg-white/[0.02]"
          >
            <div>
              <div className="mono text-xs text-faint">// RESUME</div>
              <div className="mt-1 mono text-sm sm:text-base">{profile.resumeFileName}</div>
            </div>
            <span className="flex items-center gap-2 border border-hair px-3 py-2 mono text-xs text-dim">
              <Download size={14} /> DOWNLOAD
            </span>
          </button>

          <Row label="EMAIL" value={profile.email} action="copy" />
          <Row
            label="LINKEDIN"
            value={profile.linkedin}
            href={`https://${profile.linkedin}`}
            icon={<Linkedin size={14} />}
          />
          <Row
            label="GITHUB"
            value={profile.github}
            href={`https://${profile.github}`}
            icon={<Github size={14} />}
          />
          <Row label="EMAIL" value="Compose new" href={`mailto:${profile.email}`} icon={<Mail size={14} />} />
        </div>
      </div>
    </section>
  )
}
