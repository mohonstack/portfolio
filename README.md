# MOHON.DEV — Md. Mohon Portfolio

A premium, dark-themed developer portfolio for **Md. Mohon**, a junior full-stack
web developer from Bangladesh. Built with Next.js and a hand-written global CSS
design system — no CSS framework, no styling surprises.

**Live site:** https://github.com/mohonstack/portfolio

---

## Features

- **Premium dark design** — near-black background, white / soft-grey typography,
  a single restrained lime accent, subtle borders and tasteful hover states.
- **Fully responsive** — verified at 360px, 390px, 768px, 1024px and 1440px
  with no horizontal overflow.
- **Mobile navigation** — working drawer with Escape-to-close and scroll lock.
- **Real project screenshots** — every featured project shows an actual capture
  of the deployed app.
- **Accessible** — semantic HTML, skip link, visible focus states, labelled
  sections, and `prefers-reduced-motion` support.
- **SEO basics** — page metadata, Open Graph / Twitter cards, keywords and an
  inline favicon.
- **Self-hosted fonts** — Inter and JetBrains Mono served from `/public/fonts`,
  so the build never depends on an external font CDN.

## Sections

| Section | Notes |
| --- | --- |
| Navigation | `MOHON.DEV` brand, About / Skills / Projects / Contact, GitHub + LinkedIn |
| Hero | Headline, intro, **Explore My Work** and **Contact Me** buttons, code-window design element |
| About | Photo, learning-by-building focus, quick facts — no invented experience |
| Skills | Frontend · Backend · Database & Auth · Tools & Deployment |
| Featured Projects | FitLog, CGPA Calculator, Bangla News 24, Daily Bazar |
| Development Process | Understand → Plan → Build → Test → Deploy |
| Contact | Email, GitHub and LinkedIn — no fake contact form |
| Footer | Brand, section links, socials, copyright |

## Tech stack

- [Next.js 16](https://nextjs.org/) — App Router, static rendering
- [React 19](https://react.dev/)
- **Plain global CSS** — design tokens, Flexbox and CSS Grid
- JavaScript / JSX (no TypeScript)

## Project structure

```
portfolio/
├── public/
│   ├── assets/          # Real screenshots of each featured project + portrait
│   └── fonts/           # Self-hosted Inter + JetBrains Mono (woff2)
└── src/
    ├── app/
    │   ├── globals.css  # ← the entire design system
    │   ├── layout.jsx   # metadata + stylesheet import
    │   ├── page.jsx     # composes all sections
    │   └── icon.svg
    ├── components/      # Navbar, Hero, About, Skills, Projects, Process, Contact, Footer, Icons
    └── data/
        ├── site.js      # profile, social links, skills, process steps
        └── projects.js  # ← all project images, URLs and copy
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Editing content

Everything editable lives in two files:

- **`src/data/site.js`** — name, email, GitHub / LinkedIn URLs, skill groups,
  process steps. Set `resume: "/assets/resume.pdf"` and a Resume button appears
  in the navigation automatically.
- **`src/data/projects.js`** — each project's title, description, screenshot,
  tech badges, features, live demo and repository links.

Project images are referenced as `/assets/filename.png` (public assets are not
prefixed with `/public`).

## Verification

The production build was checked in a real browser at every breakpoint above:

- `npm run build` — clean, all routes static
- Zero console errors and zero failed requests
- All project images load through Next's image optimizer
- No horizontal overflow at any width

## License

MIT — feel free to use this as a starting point for your own portfolio.
