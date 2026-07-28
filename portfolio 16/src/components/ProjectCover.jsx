import { useState } from 'react'
import {
  Network, FileText, Bot, Shield, Stethoscope,
  BarChart3, Library, ShoppingCart, Hospital,
} from 'lucide-react'

const ICONS = {
  network: Network,
  fileText: FileText,
  bot: Bot,
  shield: Shield,
  stethoscope: Stethoscope,
  barChart: BarChart3,
  library: Library,
  shoppingCart: ShoppingCart,
  hospital: Hospital,
}

function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

function generateNodes(seed, count = 14) {
  const rand = seededRandom(seed)
  const nodes = []
  for (let i = 0; i < count; i++) {
    nodes.push({ x: 8 + rand() * 84, y: 8 + rand() * 84, r: 1.4 + rand() * 2.2 })
  }
  return nodes
}

function nearestPairs(nodes, maxLinks = 16) {
  const links = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      links.push({ i, j, dist: Math.sqrt(dx * dx + dy * dy) })
    }
  }
  links.sort((a, b) => a.dist - b.dist)
  return links.slice(0, maxLinks)
}

function GenerativeCover({ icon, seed }) {
  const Icon = ICONS[icon] || Network
  const nodes = generateNodes(seed)
  const links = nearestPairs(nodes)

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(143,176,218,0.16), transparent 60%), linear-gradient(160deg, #0d1622, #060a10)',
      }}
    >
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-70">
        {links.map((l, i) => (
          <line key={i} x1={nodes[l.i].x} y1={nodes[l.i].y} x2={nodes[l.j].x} y2={nodes[l.j].y} stroke="var(--accent)" strokeWidth="0.15" opacity="0.35" />
        ))}
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r * 0.35} fill="var(--accent)" opacity="0.7" />
        ))}
      </svg>
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-hair bg-panel/80 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
        <Icon size={26} strokeWidth={1.3} className="accent" />
      </div>
    </div>
  )
}

export default function ProjectCover({ cover, icon, title, seed = 1 }) {
  const [failed, setFailed] = useState(false)
  const hasCover = cover && !failed

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-hair bg-panel">
      {hasCover ? (
        <img
          src={cover}
          alt={title}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <GenerativeCover icon={icon} seed={seed} />
      )}
    </div>
  )
}
