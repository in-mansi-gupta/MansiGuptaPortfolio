'use client'
import { useEffect, useRef } from 'react'

const PINNED_REPOS = [
  {
    name: 'ai-dev-assistant',
    description: 'RAG-based developer assistant for semantic code search and contextual insights using vector embeddings and LLM APIs.',
    language: 'TypeScript',
    stars: 0,
    forks: 0,
    topics: ['rag', 'llm', 'vector-db', 'nodejs'],
    url: 'https://github.com/in-mansi-gupta/ai-dev-assistant',
  },
  {
    name: 'event-streaming-platform',
    description: 'System design and implementation of a scalable producer-consumer event streaming architecture using AWS Kinesis.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
    topics: ['aws-kinesis', 'event-driven', 'distributed-systems'],
    url: 'https://github.com/in-mansi-gupta',
  },
  {
    name: 'oauth2-api-gateway',
    description: 'OAuth2 Client Credentials flow implementation for standardized service-to-service authentication in microservices.',
    language: 'Java',
    stars: 0,
    forks: 0,
    topics: ['oauth2', 'api-gateway', 'spring-boot', 'security'],
    url: 'https://github.com/in-mansi-gupta',
  },
]

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Java: '#b07219',
  Python: '#3572A5',
  Go: '#00ADD8',
}

export default function GitHub() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="github"
      className="py-24 px-6"
      ref={ref}
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            006 · GitHub
          </span>
          <h2
            className="mt-3 font-display font-bold"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Open source &amp; personal work
          </h2>
        </div>

        {/* Pinned repos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {PINNED_REPOS.map((repo, i) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal card-hover block rounded-2xl border p-5 transition-all"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg)',
                textDecoration: 'none',
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              {/* Repo icon + name */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-tertiary)' }}>
                    <path d="M3 3h18v18H3zM9 9h6M9 12h6M9 15h4"/>
                  </svg>
                  <span
                    className="font-mono text-sm font-semibold"
                    style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {repo.name}
                  </span>
                </div>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-tertiary)' }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </div>

              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {repo.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: LANG_COLORS[repo.language] || '#888' }}
                  />
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}>
                    {repo.language}
                  </span>
                </div>
                <div className="flex items-center gap-1" style={{ color: 'var(--text-tertiary)' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <span className="text-xs font-mono" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{repo.stars}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal text-center" style={{ transitionDelay: '0.2s' }}>
          <a
            href="https://github.com/in-mansi-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-medium transition-all"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-secondary)',
              backgroundColor: 'var(--surface)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--accent)'
              el.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.color = 'var(--text-secondary)'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
