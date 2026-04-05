'use client'
import { useEffect, useRef } from 'react'

export default function Contact() {
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
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal max-w-2xl">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            007 · Contact
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
            Let&apos;s build something together
          </h2>
          <p className="mt-4 mb-10" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            I&apos;m actively looking for backend / platform engineering roles.
            I&apos;m open to relocation and excited to bring my distributed systems and
            event-driven architecture experience to an international tech team.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:in.mansi.gupta@gmail.com"
              className="reveal flex items-center gap-4 p-5 rounded-2xl border card-hover transition-all"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--surface)',
                textDecoration: 'none',
                transitionDelay: '0.05s',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}>Email</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  in.mansi.gupta@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/mansi-gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal flex items-center gap-4 p-5 rounded-2xl border card-hover transition-all"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--surface)',
                textDecoration: 'none',
                transitionDelay: '0.1s',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs mb-0.5" style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}>LinkedIn</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  linkedin.com/in/mansi-gupta
                </div>
              </div>
            </a>
          </div>

          {/* Relocation badge */}
          <div
            className="reveal inline-flex items-center gap-3 px-5 py-3 rounded-2xl border"
            style={{
              borderColor: '#059669' + '55',
              backgroundColor: '#059669' + '11',
              transitionDelay: '0.15s',
            }}
          >
            <div>
              <div className="text-sm font-semibold" style={{ color: '#059669' }}>
                Open to relocation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
