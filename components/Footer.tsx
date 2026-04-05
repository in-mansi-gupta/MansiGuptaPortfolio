'use client'

export default function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
        <div>
          <span
            className="font-display font-bold text-sm"
            style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text-primary)', letterSpacing: '0.08em' }}
          >
            MANSI GUPTA
          </span>
          <span className="ml-3 text-xs" style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}>
            Backend Engineer · Bangalore
          </span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/in-mansi-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors"
            style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-tertiary)')}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mansi-gupta-04-03/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs transition-colors"
            style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-tertiary)')}
          >
            LinkedIn
          </a>
          <a
            href="mailto:in.mansi.gupta@gmail.com"
            className="text-xs transition-colors"
            style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-tertiary)')}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
