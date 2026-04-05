'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* Left — label */}
          <div className="md:col-span-2 reveal">
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
            >
              001 · About
            </span>
            <h2
              className="mt-3 font-display font-bold"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Backend engineer.
              <br />
              Systems thinker.
            </h2>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: '4+', label: 'Years of experience' },
                { value: '50%', label: 'Query time reduction' },
                { value: '60%', label: 'Manual effort saved' },
                { value: '~1B', label: 'Users impacted' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border"
                  style={{
                    backgroundColor: 'var(--surface)',
                    borderColor: 'var(--border)',
                  }}
                >
                  <div
                    className="font-display font-bold text-2xl"
                    style={{ color: 'var(--accent)', fontFamily: "'Syne', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{ color: 'var(--text-tertiary)', fontWeight: 500 }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — story */}
          <div className="md:col-span-3 reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="space-y-5" style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
              <p>
                I&apos;m a software engineer specializing in backend systems and distributed
                architecture, with 4+ years of experience across product and platform engineering.
                My focus is on systems that are observable, reliable, and built to scale.
              </p>
              <p>
                Currently at{' '}
                <span
                  className="font-semibold px-1.5 py-0.5 rounded"
                  style={{
                    color: 'var(--text-primary)',
                    backgroundColor: 'var(--surface)',
                    border: '1px solid var(--border)',
                  }}
                >
                  Booking Holdings (Booking.com)
                </span>{' '}
                in Bangalore, I engineer the experimentation infrastructure that enables
                A/B testing and data-driven product decisions at global scale. I work on
                event-driven pipelines using{' '}
                <code
                  className="font-mono text-sm px-1.5 py-0.5 rounded"
                  style={{ backgroundColor: 'var(--surface)', color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Node.js + AWS Kinesis
                </code>{' '}
                and have built OAuth2-based auth systems that standardize secure service
                communication across internal platforms.
              </p>
              <p>
                Before that, at Mobileum, I worked across the full backend lifecycle — from
                SQL optimization and memory efficiency to legacy refactoring and real-time
                API design. I reduced query execution time by half and improved backend memory
                usage by 35% through disciplined performance engineering.
              </p>
              <p>
                I&apos;m currently working on an AI Developer Assistant using RAG architecture
                for semantic code search — combining my interest in LLMs with practical
                developer tooling.
              </p>
              <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                I&apos;m actively looking for backend / platform engineering roles and am open to relocation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
