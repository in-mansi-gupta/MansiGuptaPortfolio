'use client'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 max-w-6xl mx-auto"
      id="hero"
    >
      <div
        className={`transition-all duration-700 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {/* Status badge */}
        <div className="mb-10 flex items-center gap-2">
          <span
            className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border"
            style={{
              backgroundColor: 'var(--surface)',
              borderColor: 'var(--border)',
              color: 'var(--text-secondary)',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to relocation.
          </span>
        </div>

        {/* Name & title */}
        <h1
          className="font-display font-bold leading-none mb-4"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          Mansi Gupta
        </h1>

        <div
          className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-6"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'var(--text-secondary)',
            fontWeight: 600,
          }}
        >
          <span>Software Engineer</span>
          <span style={{ color: 'var(--border)' }}>|</span>
          <span style={{ color: 'var(--accent)' }}>Backend &amp; Distributed Systems</span>
        </div>

        <p
          className="max-w-xl mb-3 font-body"
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          Building scalable systems and event-driven architectures.
          <br />
          Currently at{' '}
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
            Booking Holdings
          </span>{' '}
          engineering experimentation platforms that shape decisions for{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 500 }}>
            millions of users
          </span>{' '}
          globally.
        </p>

        <p
          className="max-w-xl mb-10 font-body text-sm"
          style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
        >
          Java · Node.js · AWS · Distributed Systems · 4+ years
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="https://drive.google.com/file/d/1vRLyAPo1ZR899nrYW_UOCo8AxNxyp3Ey/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: 'var(--accent)',
              color: '#fff',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = '0.9')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = '1')
            }
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            View Resume
          </a>

          <a
            href="https://github.com/in-mansi-gupta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--surface)',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--accent)'
              el.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.color = 'var(--text-primary)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mansi-gupta-04-03/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--surface)',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--accent)'
              el.style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--border)'
              el.style.color = 'var(--text-primary)'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: 'var(--text-tertiary)', fontSize: '0.6rem' }}
        >
          scroll
        </span>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" style={{ color: 'var(--text-tertiary)' }}>
          <rect x="1" y="1" width="10" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="6" cy="6" r="1.5" fill="currentColor" className="animate-bounce"/>
        </svg>
      </div>
    </section>
  )
}
