'use client'
import { useEffect, useRef, useState } from 'react'

const PROJECTS = [
  {
    id: 'rag-assistant',
    title: 'AI Developer Assistant',
    subtitle: 'RAG-Based Semantic Code Search',
    status: 'In Progress',
    problem:
      'Large codebases suffer from discoverability problems. Developers spend significant time searching for relevant functions, patterns, and context — a problem that keyword search cannot solve well. Semantic understanding of code is needed.',
    architecture: [
      { step: '01', label: 'Code Ingestion', desc: 'Source files indexed by microservice worker' },
      { step: '02', label: 'Embedding Pipeline', desc: 'Code chunks → vector embeddings via LLM API' },
      { step: '03', label: 'Vector Store', desc: 'Embeddings stored and indexed for similarity search' },
      { step: '04', label: 'Query Engine', desc: 'User query → semantic retrieval → context assembly' },
      { step: '05', label: 'LLM Response', desc: 'Context-aware answer with code references' },
    ],
    stack: ['Node.js', 'LLM APIs', 'Vector DB', 'Docker', 'Microservices'],
    features: [
      'Semantic code search across large repositories using vector embeddings',
      'Retrieval-Augmented Generation for context-aware developer recommendations',
      'Scalable code ingestion pipeline with chunking and indexing',
      'Microservices architecture with independent ingestion, retrieval, and generation services',
    ],
    challenges: [
      {
        challenge: 'Chunking strategy for code files',
        solution: 'Implemented AST-aware chunking to preserve semantic boundaries at function/class level rather than character-based splits',
      },
      {
        challenge: 'Retrieval relevance',
        solution: 'Combined vector similarity with metadata filtering (language, file type, recency) to improve precision of retrieved context',
      },
    ],
    github: 'https://github.com/in-mansi-gupta/ai-dev-assistant',
    demo: null,
    featured: true,
  },
  {
    id: 'event-streaming',
    title: 'Event Streaming Platform',
    subtitle: 'Distributed Producer-Consumer Architecture',
    status: 'System Design',
    problem:
      'Tightly coupled services create fragility at scale — one failing consumer blocks producers, and scaling individual components is difficult. An event-driven platform decouples production from consumption and enables independent scaling.',
    architecture: [
      { step: '01', label: 'Producers', desc: 'Multiple services emit domain events to the bus' },
      { step: '02', label: 'Event Bus', desc: 'Kafka-style persistent, ordered event stream' },
      { step: '03', label: 'Partitioning', desc: 'Events partitioned by key for ordering guarantees' },
      { step: '04', label: 'Consumer Groups', desc: 'Independent consumer groups with offset management' },
      { step: '05', label: 'Dead Letter Queue', desc: 'Failed events routed for inspection and replay' },
    ],
    stack: ['Node.js', 'AWS Kinesis', 'AWS Glue', 'DynamoDB', 'Lambda', 'CloudWatch'],
    features: [
      'Decoupled producers and consumers with guaranteed event delivery',
      'Horizontal consumer scaling via consumer group partitioning',
      'At-least-once delivery with idempotent consumer design',
      'Dead letter queue for failed event inspection and replay',
      'Observable system with CloudWatch metrics and tracing',
    ],
    challenges: [
      {
        challenge: 'Ensuring ordering at scale',
        solution: 'Partition events by entity ID (e.g., experiment ID) to maintain per-entity ordering while allowing parallel processing across partitions',
      },
      {
        challenge: 'Consumer failure handling',
        solution: 'Implemented exponential backoff with DLQ routing — failed events are inspected without blocking the stream',
      },
    ],
    github: 'https://github.com/in-mansi-gupta',
    demo: null,
    featured: false,
  },
]

function ArchDiagram({ steps }: { steps: typeof PROJECTS[0]['architecture'] }) {
  return (
    <div className="my-5 p-5 rounded-xl border overflow-x-auto" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="text-xs font-mono mb-4" style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}>
        // Architecture flow
      </div>
      <div className="flex items-start gap-1 min-w-max">
        {steps.map((s, i) => (
          <div key={i} className="flex items-start gap-1">
            <div className="flex flex-col items-center">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold"
                style={{ backgroundColor: 'var(--accent)', color: '#fff', fontFamily: "'JetBrains Mono', monospace" }}
              >
                {s.step}
              </div>
              <div className="mt-2 text-center" style={{ width: '80px' }}>
                <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{s.label}</div>
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-tertiary)', lineHeight: 1.4 }}>{s.desc}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="mt-3 flex items-center" style={{ color: 'var(--text-tertiary)' }}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                  <path d="M0 6h16M12 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState<string | null>('rag-assistant')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.05 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            003 · Projects
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
            What I&apos;ve shipped
          </h2>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((proj, i) => (
            <div
              key={proj.id}
              className="reveal rounded-2xl border overflow-hidden"
              style={{
                borderColor: proj.featured ? 'var(--accent)' : 'var(--border)',
                backgroundColor: 'var(--bg)',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {/* Card header */}
              <button
                className="w-full text-left p-7 flex flex-wrap justify-between items-start gap-4"
                onClick={() => setExpanded(expanded === proj.id ? null : proj.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3
                      className="font-display font-bold text-xl"
                      style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text-primary)' }}
                    >
                      {proj.title}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-mono"
                      style={{
                        backgroundColor: proj.status === 'In Progress' ? 'var(--accent-soft)' : 'var(--surface)',
                        color: proj.status === 'In Progress' ? 'var(--accent)' : 'var(--text-tertiary)',
                        fontFamily: "'JetBrains Mono', monospace",
                        border: '1px solid var(--border)',
                      }}
                    >
                      {proj.status}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{proj.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {proj.stack.slice(0, 4).map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                    {proj.stack.length > 4 && (
                      <span className="tag">+{proj.stack.length - 4}</span>
                    )}
                  </div>
                </div>
                <div
                  className="text-xs flex items-center gap-1.5 font-mono mt-1"
                  style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {expanded === proj.id ? 'collapse' : 'expand'}
                  <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ transform: expanded === proj.id ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </div>
              </button>

              {/* Expanded content */}
              {expanded === proj.id && (
                <div className="px-7 pb-7" style={{ borderTop: '1px solid var(--border)' }}>
                  <div className="pt-6 grid md:grid-cols-2 gap-8">
                    {/* Left: Problem + Architecture */}
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest mb-2 font-mono"
                        style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Problem
                      </div>
                      <p className="text-sm mb-5" style={{ color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                        {proj.problem}
                      </p>

                      <div
                        className="text-xs uppercase tracking-widest mb-2 font-mono"
                        style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Architecture
                      </div>
                      <ArchDiagram steps={proj.architecture} />
                    </div>

                    {/* Right: Features + Challenges */}
                    <div>
                      <div
                        className="text-xs uppercase tracking-widest mb-2 font-mono"
                        style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Key Features
                      </div>
                      <ul className="space-y-2 mb-6">
                        {proj.features.map((f, j) => (
                          <li
                            key={j}
                            className="text-sm flex gap-2"
                            style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}
                          >
                            <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div
                        className="text-xs uppercase tracking-widest mb-3 font-mono"
                        style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Challenges &amp; Solutions
                      </div>
                      <div className="space-y-3">
                        {proj.challenges.map((c, j) => (
                          <div
                            key={j}
                            className="p-4 rounded-xl border"
                            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}
                          >
                            <div
                              className="text-xs font-mono font-semibold mb-1"
                              style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
                            >
                              ⚠ {c.challenge}
                            </div>
                            <div className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                              {c.solution}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-6 pt-5" style={{ borderTop: '1px solid var(--border)' }}>
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border transition-colors"
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
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm border"
                        style={{ borderColor: 'var(--accent)', color: 'var(--accent)', backgroundColor: 'var(--accent-soft)' }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
