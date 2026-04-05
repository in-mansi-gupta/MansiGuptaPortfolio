# Mansi Gupta — Portfolio

**Live portfolio for a backend/distributed systems engineer targeting roles.**

Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Statically exported for zero-cost deployment on GitHub Pages.

---

## ✦ Features

- **7 sections**: Hero, About, Experience, Projects, Architecture, Skills, Contact
- **Dark mode** with OS preference detection + manual toggle (persisted to localStorage)
- **Scroll-reveal animations** via IntersectionObserver (no heavy libraries)
- **Expandable project cards** with inline architecture diagrams
- **Interactive system architecture viewer** with design principle callouts
- **Skill proficiency bars** organized by category
- **Fully responsive** — mobile, tablet, desktop
- **SEO-ready** with metadata and Open Graph tags
- **Custom fonts**: Syne (display) + Outfit (body) + JetBrains Mono (code/accents)

---

## ⚡ Quickstart

```bash
# 1. Install dependencies
npm install

# 2. Run local dev server
npm run dev
# → Open http://localhost:3000

# 3. Build static export
npm run build
# → Output in /out folder
```

---

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── globals.css          # CSS variables, fonts, base styles
│   ├── layout.tsx           # Root layout with dark mode init script
│   └── page.tsx             # Main page — assembles all sections
│
├── components/
│   ├── Navbar.tsx            # Sticky nav with dark mode toggle + mobile menu
│   ├── Hero.tsx              # Name, title, subtitle, CTA buttons
│   ├── About.tsx             # Story + stat grid
│   ├── Experience.tsx        # Role cards with Problem/Built/Impact columns
│   ├── Projects.tsx          # Expandable project cards with arch diagrams
│   ├── Architecture.tsx      # System design viewer with layered diagrams
│   ├── Skills.tsx            # Categorized skills with proficiency bars
│   ├── GitHub.tsx            # Pinned repo cards
│   ├── Contact.tsx           # Email + LinkedIn + relocation badge
│   └── Footer.tsx            # Simple footer with links
│
├── public/
│   └── resume.pdf           # ← ADD YOUR RESUME HERE
│
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions auto-deploy workflow
│
├── next.config.js            # Static export config
├── tailwind.config.js        # Theme: fonts, colors, animations
├── tsconfig.json
└── package.json
```

---

## 🎨 Design Tokens

| Token | Light | Dark |
|-------|-------|------|
| Background | `#f8f8f5` | `#0d0d0f` |
| Surface | `#eaeae5` | `#1c1c1f` |
| Border | `#e2e2dc` | `#27272a` |
| Accent | `#2563eb` | `#60a5fa` |
| Text Primary | `#18181b` | `#fafaf9` |
| Text Secondary | `#52525b` | `#a1a1aa` |

To change the accent color, update `--accent` and `--accent-dark` in `app/globals.css`.

---

## 🏗️ Tech Stack

| Tech | Purpose |
|------|---------|
| Next.js 14 | Framework with `output: 'export'` for static generation |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling + custom theme |
| Syne | Display font (headings) |
| Outfit | Body font |
| JetBrains Mono | Code / monospace accents |
| IntersectionObserver | Scroll-reveal animations (no library) |
| localStorage | Dark mode persistence |
| GitHub Actions | CI/CD to GitHub Pages |

---

## 📄 License

MIT — feel free to use as a template. Attribution appreciated but not required.
