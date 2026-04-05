'use client'
import { useEffect, useRef } from 'react'

const EXPERIENCES = [
  {
    company: 'Booking Holdings (Booking.com)',
    role: 'Software Developer I',
    period: 'Nov 2025 – Present',
    location: 'Bangalore, India',
    highlight: true,
    problem:
      'The experimentation platform serving millions of product decisions lacked standardized authentication between internal services and had no automated lifecycle management for stale experiments.',
    built: [
      'Designed and implemented OAuth2-based auth (ET Auth) for API gateways, establishing secure service-to-service communication standards across internal platforms',
      'Built ET-Hunter: an automation system that detects inactive/stopped experiments, triggers code cleanup, and auto-generates merge requests — eliminating manual overhead',
      'Designing event-driven pipelines using Node.js and AWS (Kinesis/Glue) to enable scalable, decoupled producer-consumer architecture for high-volume experimentation events',
    ],
    impact: [
      { metric: '60%', desc: 'Reduction in manual developer effort via ET-Hunter automation' },
      { metric: 'Millions', desc: 'Users impacted across global markets through experimentation scale' },
      { metric: 'Standardized', desc: 'OAuth2 auth across all internal platform services' },
    ],
    stack: ['Node.js', 'AWS Kinesis', 'AWS Glue', 'OAuth2', 'Java', 'TypeScript'],
  },
  {
    company: 'Mobileum (SIGOS)',
    role: 'Software Developer',
    period: 'Apr 2024 – Oct 2025',
    location: 'Bangalore, India',
    highlight: false,
    problem:
      'Legacy backend suffered from slow query execution (400ms+), high memory pressure, and manual monitoring — creating reliability risk and high operational overhead.',
    built: [
      'Optimized critical SQL queries with lazy loading — cut execution time from 400ms to 200ms',
      'Designed and deployed REST APIs for real-time data processing with meaningful performance gains',
      'Migrated build infrastructure from Ant to Maven, unblocking CI speed improvements',
      'Introduced KPI dashboards and alerting thresholds to replace reactive manual monitoring',
    ],
    impact: [
      { metric: '50%', desc: 'Reduction in query execution time (400ms → 200ms)' },
      { metric: '35%', desc: 'Improvement in backend memory usage' },
      { metric: '40%', desc: 'Faster build time after Ant → Maven migration' },
      { metric: '30%', desc: 'Reduction in manual monitoring intervention' },
    ],
    stack: ['Java', 'Spring Boot', 'SQL', 'REST APIs', 'Maven', 'Docker'],
  },
  {
    company: 'Mobileum (SIGOS)',
    role: 'Associate Software Developer',
    period: 'Dec 2021 – Mar 2024',
    location: 'Bangalore, India',
    highlight: false,
    problem:
      'Low unit test coverage (20%) created code fragility, and frontend components were slowing page load due to monolithic rendering patterns.',
    built: [
      'Developed reusable Vue.js component library, reducing redundant frontend code and improving render performance',
      'Drove test coverage from 20% to 65% through systematic unit testing across critical paths',
      'Delivered multiple features end-to-end within agile sprint cycles',
      'Collaborated cross-functionally to improve API integration and UI performance',
    ],
    impact: [
      { metric: '40%', desc: 'Frontend load time reduction via reusable component architecture' },
      { metric: '65%', desc: 'Unit test coverage (up from 20%)' },
      { metric: '20%', desc: 'Reduction in support tickets from production issue resolution' },
    ],
    stack: ['Vue.js', 'Java', 'REST APIs', 'JavaScript'],
  },
]

export default function Experience() {
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
    <section id="experience" className="py-24 px-6" ref={ref} style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            002 · Experience
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
            Where I&apos;ve built
          </h2>
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border overflow-hidden"
              style={{
                borderColor: exp.highlight ? 'var(--accent)' : 'var(--border)',
                backgroundColor: 'var(--bg)',
                transitionDelay: `${i * 0.08}s`,
                boxShadow: exp.highlight ? '0 0 0 1px var(--accent)' : 'none',
              }}
            >
              {exp.highlight && (
                <div
                  className="px-6 py-2 text-xs font-mono flex items-center gap-2"
                  style={{
                    backgroundColor: 'var(--accent)',
                    color: '#fff',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Current role
                </div>
              )}

              <div className="p-7">
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-3 mb-6">
                  <div>
                    <h3
                      className="font-display font-bold text-lg"
                      style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text-primary)' }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 mt-1">
                      <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{exp.company}</span>
                      <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>·</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</span>
                    </div>
                  </div>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full border font-mono"
                    style={{
                      borderColor: 'var(--border)',
                      color: 'var(--text-secondary)',
                      backgroundColor: 'var(--surface)',
                      fontFamily: "'JetBrains Mono', monospace",
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Content grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Problem */}
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-3 font-mono"
                      style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Problem
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                      {exp.problem}
                    </p>
                  </div>

                  {/* Built */}
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-3 font-mono"
                      style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      What was built
                    </div>
                    <ul className="space-y-2">
                      {exp.built.map((b, j) => (
                        <li
                          key={j}
                          className="text-sm flex gap-2"
                          style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}
                        >
                          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }}>→</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div>
                    <div
                      className="text-xs uppercase tracking-widest mb-3 font-mono"
                      style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Impact
                    </div>
                    <div className="space-y-3">
                      {exp.impact.map((imp, j) => (
                        <div key={j} className="flex gap-3 items-start">
                          <span
                            className="font-mono font-bold text-sm shrink-0"
                            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {imp.metric}
                          </span>
                          <span className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                            {imp.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-6 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                  {exp.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
