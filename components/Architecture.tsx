'use client'
import { useEffect, useRef, useState } from 'react'

const SYSTEMS = [
  {
    id: 'event-driven',
    title: 'Event-Driven Experimentation Platform',
    description:
      'At Booking Holdings, I designed and am building a decoupled, event-driven architecture for the A/B testing platform. The key challenge: allowing multiple services to react to experiment lifecycle events (start, stop, full-on) without tight coupling.',
    principles: [
      { name: 'Decoupling', desc: 'Producers emit events without knowing consumers — services evolve independently' },
      { name: 'Durability', desc: 'Events persisted in Kinesis ensure no data loss on consumer failure' },
      { name: 'Scalability', desc: 'Consumer groups scale horizontally; partitioning ensures ordered processing per experiment' },
      { name: 'Observability', desc: 'CloudWatch dashboards + alerting thresholds for DLQ depth and consumer lag' },
    ],
    diagram: [
      {
        row: 'Producers',
        nodes: ['Experiment Service', 'Feature Flag Service', 'Analytics Service'],
        color: '#2563eb',
      },
      {
        row: 'Event Bus',
        nodes: ['AWS Kinesis Stream (Partitioned by Experiment ID)'],
        color: '#7c3aed',
      },
      {
        row: 'Consumers',
        nodes: ['Code Cleanup Worker', 'Notification Service', 'Reporting Aggregator'],
        color: '#059669',
      },
      {
        row: 'Failure Handling',
        nodes: ['Dead Letter Queue (DLQ)', 'Retry Processor', 'Alert System'],
        color: '#dc2626',
      },
    ],
  },
  {
    id: 'auth',
    title: 'OAuth2 Service-to-Service Auth',
    description:
      'Standardizing secure API-to-API communication across internal platforms using the OAuth2 Client Credentials flow. Before this, services used ad-hoc auth mechanisms making security audits difficult.',
    principles: [
      { name: 'Zero Trust', desc: 'Every service-to-service call requires a valid JWT — no implicit trust' },
      { name: 'Centralized Auth', desc: 'Single identity provider issues tokens; rotating credentials without code changes' },
      { name: 'Scoped Access', desc: 'Tokens carry scopes limiting which APIs each service can call' },
      { name: 'Auditability', desc: 'All auth events logged for security review and compliance' },
    ],
    diagram: [
      {
        row: 'Service A (Client)',
        nodes: ['Requests token from Auth Server', 'Attaches Bearer JWT to API calls'],
        color: '#2563eb',
      },
      {
        row: 'Auth Server',
        nodes: ['Validates client credentials', 'Issues scoped JWT (TTL: 5min)', 'Token introspection endpoint'],
        color: '#7c3aed',
      },
      {
        row: 'Service B (Resource)',
        nodes: ['Validates JWT signature', 'Checks scopes vs required', 'Processes or rejects request'],
        color: '#059669',
      },
    ],
  },
]

export default function Architecture() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const sys = SYSTEMS[active]

  return (
    <section
      id="architecture"
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
            004 · Architecture
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
            How I think about systems
          </h2>
          <p className="mt-3 max-w-xl" style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Good architecture is intentional — every design decision trades off complexity,
            reliability, and maintainability. Here are two systems I&apos;ve designed or built.
          </p>
        </div>

        {/* System selector */}
        <div className="flex gap-3 mb-8 reveal" style={{ transitionDelay: '0.05s' }}>
          {SYSTEMS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className="px-4 py-2 rounded-lg text-sm border transition-all"
              style={{
                borderColor: active === i ? 'var(--accent)' : 'var(--border)',
                backgroundColor: active === i ? 'var(--accent-soft)' : 'var(--surface)',
                color: active === i ? 'var(--accent)' : 'var(--text-secondary)',
                fontWeight: active === i ? 600 : 400,
              }}
            >
              {s.title.split(' ').slice(0, 2).join(' ')}...
            </button>
          ))}
        </div>

        {/* System card */}
        <div
          className="reveal rounded-2xl border overflow-hidden"
          style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)', transitionDelay: '0.1s' }}
        >
          <div className="p-7">
            <h3
              className="font-display font-bold text-xl mb-3"
              style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text-primary)' }}
            >
              {sys.title}
            </h3>
            <p className="text-sm mb-6 max-w-2xl" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              {sys.description}
            </p>

            {/* Architecture diagram */}
            <div
              className="rounded-xl border p-6 mb-6 overflow-x-auto"
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}
            >
              <div
                className="text-xs font-mono mb-4"
                style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                // System diagram
              </div>
              <div className="space-y-5 min-w-max">
                {sys.diagram.map((layer, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className="w-28 text-xs font-mono font-semibold text-right shrink-0"
                      style={{ color: layer.color, fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {layer.row}
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--text-tertiary)', flexShrink: 0 }}>
                      <polyline points="9 18 15 12 9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <div className="flex flex-wrap gap-2">
                      {layer.nodes.map((node, j) => (
                        <span
                          key={j}
                          className="px-3 py-2 rounded-lg text-xs font-medium border"
                          style={{
                            borderColor: layer.color + '44',
                            backgroundColor: layer.color + '11',
                            color: layer.color,
                          }}
                        >
                          {node}
                        </span>
                      ))}
                    </div>
                    {i < sys.diagram.length - 1 && (
                      <svg
                        width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="var(--text-tertiary)" strokeWidth="2"
                        className="absolute"
                        style={{ display: 'none' }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Design principles */}
            <div
              className="text-xs uppercase tracking-widest mb-4 font-mono"
              style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
            >
              Design Principles
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sys.principles.map((p, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border"
                  style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
                >
                  <div
                    className="text-sm font-semibold mb-1.5"
                    style={{ color: 'var(--accent)', fontFamily: "'Syne', sans-serif" }}
                  >
                    {p.name}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
