# Hans Angelo Amponin — Developer Portfolio

A modern, animated single-page portfolio built with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. It showcases my work, skills, and experience as a Frontend Developer, with a glassmorphic dark UI, motion-driven sections, and a working contact form.

<p align="left">
  <img alt="React"        src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img alt="TypeScript"   src="https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite"         src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
</p>

🔗 **Live Demo:** _add your deployed URL here_ &nbsp;•&nbsp; 💻 **Repo:** [github.com/Solitae21/hans-portfolio-website](https://github.com/Solitae21/hans-portfolio-website)

---

## ✨ Features

- **Animated, single-page experience** — six sections (Hero, About, Skills, Projects, Experience, Contact) with scroll-reveal transitions powered by Framer Motion.
- **Typing-effect hero** that cycles through multiple taglines.
- **Sticky navbar** with active-section highlighting as you scroll, plus a scroll-progress indicator.
- **Glassmorphic UI** — reusable glass cards, gradient text, and animated badges.
- **Working contact form** — client-side validation with email delivery via [EmailJS](https://www.emailjs.com/) (no backend required).
- **Accessibility-aware motion** — respects the user's `prefers-reduced-motion` setting.
- **SEO & social ready** — Open Graph meta tags, descriptive `<title>`, and theme color.
- **Performance-minded build** — code-split `react` and `framer-motion` vendor chunks, `esnext` target.
- **Content-driven** — all copy lives in typed data files under [`src/data/`](src/data/), so updating the site never means touching component code.

---

## 🛠 Tech Stack

| Area         | Technologies                                                        |
| ------------ | ------------------------------------------------------------------- |
| **Framework** | React 19, TypeScript 6                                              |
| **Build**     | Vite 8                                                              |
| **Styling**   | Tailwind CSS v4 (CSS-first config), `clsx` + `tailwind-merge`       |
| **Animation** | Framer Motion v12                                                   |
| **Icons**     | lucide-react v1 (with inline brand SVGs)                            |
| **Forms**     | @emailjs/browser                                                    |
| **Tooling**   | ESLint, TypeScript ESLint, React Hooks/Refresh plugins             |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.19+ (or 22.12+) — required by Vite 8
- **npm** (or your preferred package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/Solitae21/hans-portfolio-website.git
cd hans-portfolio-website

# Install dependencies
npm install

# Start the dev server (opens http://localhost:3000)
npm run dev
```

---

## 🔧 Environment Variables

The contact form sends email through EmailJS. Create a `.env` file in the project root with your EmailJS credentials:

```ini
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The app runs without these — the form simply won't deliver messages until they're set. Grab your keys from the [EmailJS dashboard](https://dashboard.emailjs.com/).

---

## 📜 Available Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR on port `3000`.   |
| `npm run build`   | Type-check (`tsc -b`) and build for production.      |
| `npm run preview` | Preview the production build locally.                |
| `npm run lint`    | Lint the codebase with ESLint.                       |

---

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets (favicon, project images, resume)
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   │   └── ui/             # Reusable primitives (GlassCard, Button, GradientText…)
│   ├── data/               # Content: personal, skills, projects, experience
│   ├── hooks/              # useTypingEffect, useScrollProgress, useActiveSection…
│   ├── types/              # Shared TypeScript types
│   ├── utils/              # cn() helper, constants
│   ├── App.tsx             # Section composition
│   └── main.tsx            # App entry point
├── index.html
└── vite.config.ts          # Vite config, '@' → ./src alias, manual chunks
```

---

## 🎨 Making It Your Own

All content is centralized in [`src/data/`](src/data/) — edit these files to personalize the site without touching any components:

- [`personal.ts`](src/data/personal.ts) — name, taglines, bio, stats, and social links
- [`skills.ts`](src/data/skills.ts) — skill groups and proficiency levels
- [`projects.ts`](src/data/projects.ts) — portfolio projects (title, description, tech, links)
- [`experience.ts`](src/data/experience.ts) — work history and education

The `@` path alias maps to `src/`, so imports look like `import { personal } from '@/data/personal'`.

---

## 📦 Deployment

This is a fully static site — deploy the production build to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages):

```bash
npm run build      # outputs to dist/
```

Point your host at the `dist/` folder and remember to set the `VITE_EMAILJS_*` environment variables in its dashboard.

---

## 👤 Author

**Hans Angelo Amponin** — Frontend Developer · Meycauayan, Bulacan, Philippines

- GitHub: [@Solitae21](https://github.com/Solitae21)
- LinkedIn: [hans-angelo-amponin](https://linkedin.com/in/hans-angelo-amponin-057b78277)
- Email: [hansamponin@gmail.com](mailto:hansamponin@gmail.com)

---

<p align="center"><em>Built with React, TypeScript, and a lot of coffee ☕</em></p>
