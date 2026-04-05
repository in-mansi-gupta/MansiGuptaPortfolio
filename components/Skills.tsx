'use client'
import { useEffect, useRef } from 'react'

const SKILL_GROUPS = [
  {
    category: 'Backend & Languages',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: 'Java', level: 5 },
      { name: 'Node.js', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'JavaScript', level: 4 },
      { name: 'SQL', level: 5 },
      { name: 'Spring Boot', level: 4 },
      { name: 'Express.js', level: 4 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
    skills: [
      { name: 'AWS Kinesis', level: 4 },
      { name: 'AWS Glue', level: 4 },
      { name: 'Docker', level: 4 },
      { name: 'Kubernetes', level: 3 },
      { name: 'Terraform', level: 3 },
      { name: 'Jenkins', level: 4 },
      { name: 'Git', level: 5 },
    ],
  },
  {
    category: 'Frontend',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    skills: [
      { name: 'React.js', level: 4 },
      { name: 'Vue.js', level: 3 },
      { name: 'Next.js', level: 3 },
      { name: 'Tailwind CSS', level: 4 },
    ],
  },
  {
    category: 'Core Concepts',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    skills: [
      { name: 'Distributed Systems', level: 5 },
      { name: 'Event-Driven Architecture', level: 5 },
      { name: 'System Design', level: 4 },
      { name: 'API Security / OAuth2', level: 4 },
      { name: 'Caching Strategies', level: 4 },
      { name: 'Performance Optimization', level: 5 },
      { name: 'Microservices', level: 4 },
    ],
  },
]

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="h-1.5 w-5 rounded-full transition-all"
          style={{
            backgroundColor: i <= level ? 'var(--accent)' : 'var(--surface)',
            opacity: i <= level ? 1 : 1,
          }}
        />
      ))}
    </div>
  )
}

export default function Skills() {
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
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 reveal">
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: "'JetBrains Mono', monospace" }}
          >
            005 · Skills
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
            What I work with
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.category}
              className="reveal rounded-2xl border p-6"
              style={{
                borderColor: 'var(--border)',
                backgroundColor: 'var(--bg)',
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}
                >
                  {group.icon}
                </div>
                <h3
                  className="font-semibold text-sm"
                  style={{ fontFamily: "'Syne', sans-serif", color: 'var(--text-primary)', fontWeight: 700 }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-4">
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-secondary)', minWidth: 0, fontWeight: 500 }}
                    >
                      {skill.name}
                    </span>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extra: Proficiency legend */}
        <div
          className="mt-8 reveal flex flex-wrap items-center gap-6 justify-center"
          style={{ transitionDelay: '0.3s' }}
        >
          {[
            { dots: 3, label: 'Proficient' },
            { dots: 4, label: 'Advanced' },
            { dots: 5, label: 'Expert' },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2.5">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-1.5 w-4 rounded-full"
                    style={{ backgroundColor: i <= l.dots ? 'var(--accent)' : 'var(--surface)' }}
                  />
                ))}
              </div>
              <span className="text-xs" style={{ color: 'var(--text-tertiary)', fontFamily: "'JetBrains Mono', monospace" }}>
                {l.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
