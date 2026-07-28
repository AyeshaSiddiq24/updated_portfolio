import { terminalLines } from '../data/content'

export default function TerminalLog() {
  const doubled = [...terminalLines, ...terminalLines]
  return (
    <div
      className="relative hidden overflow-hidden opacity-40 md:block"
      aria-hidden="true"
    >
      <div className="terminal-log terminal-log-inner absolute inset-0">
        {doubled.map((line, i) => (
          <div key={i} className="pr-6">
            <span className="text-faint">&gt; </span>
            {line}
          </div>
        ))}
      </div>
    </div>
  )
}
