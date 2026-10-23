# MOHON.DEV — Md. Mohon Portfolio

A premium, dark-themed developer portfolio for **Md. Mohon**, a junior full-stack
web developer from Bangladesh. Built with Next.js and a hand-written global CSS
design system — no CSS framework, no styling surprises.

**Live site:** https://github.com/mohonstack/portfolio

---

## Features

- **Multi-page routing** — Home, About, Skills, Projects and Contact each get
  their own URL, metadata and active-nav state.
- **Download CV button** — in the navbar, hero, contact panel and footer; wired
  to `public/assets/Md_Mohon_Professional_CV.pdf` via `siteConfig.resume`.
- **Technology icons** — official brand marks (Simple Icons, CC0) for the whole
  stack, tinted with each brand's color until hovered.
- **Animations** — staggered hero entrance, scroll-reveal sections
  (IntersectionObserver + CSS transitions), an infinite tech marquee and subtle
  card / icon hover motion. All disabled under `prefers-reduced-motion`.
- **Premium dark design** — near-black background, white / soft-grey typography,
  a single restrained lime accent, subtle borders and tasteful hover states.
- **Fully responsive** — verified at 360px, 390px, 768px, 1024px and 1440px
  with no horizontal overflow.
- **Mobile navigation** — working drawer with Escape-to-close and scroll lock.
- **Real project screenshots** — every featured project shows an actual capture
  of the deployed app.
- **Accessible** — semantic HTML, skip link, visible focus states, labelled
  sections, and `prefers-reduced-motion` support.
- **SEO basics** — per-page metadata, Open Graph / Twitter cards, keywords and an
  inline favicon.
- **Self-hosted fonts** — Inter and JetBrains Mono served from `/public/fonts`,
  so the build never depends on an external font CDN.

## Routes

| Route | Notes |
| --- | --- |
| `/` | Hero + tech marquee, About, Skills, featured projects, Process, Contact |
| `/about` | Bio, quick facts, process and a Download CV call to action |
| `/skills` | Tech marquee plus the full icon-tagged skill grid |
| `/projects` | All projects with live demo and repository links |
| `/contact` | Email, GitHub, LinkedIn and Download CV |
| Navbar | Route links with active state, GitHub + LinkedIn, **Download CV** |
| Footer | Brand, route links, **Download CV**, socials, copyright |

## Tech stack

- [Next.js 16](https://nextjs.org/) — App Router, static rendering
- [React 19](https://react.dev/)
- **Plain global CSS** — design tokens, Flexbox and CSS Grid
- JavaScript / JSX (no TypeScript)

## Project structure

```
portfolio/
├── public/
│   ├── assets/          # Project screenshots, portrait + Md_Mohon_Professional_CV.pdf
│   └── fonts/           # Self-hosted Inter + JetBrains Mono (woff2)
└── src/
    ├── app/
    │   ├── globals.css  # ← the entire design system
    │   ├── layout.jsx   # metadata, stylesheet, shared Navbar + Footer
    │   ├── page.jsx     # home route
    │   ├── about/       # /about route
    │   ├── skills/      # /skills route
    │   ├── projects/    # /projects route
    │   ├── contact/     # /contact route
    │   ├── not-found.jsx
    │   └── icon.svg
    ├── components/      # Navbar, Hero, About, Skills, Projects, Process, Contact,
    │                    # Footer, Icons, TechIcons, TechMarquee, Reveal, PageHeader
    └── data/
        ├── site.js      # profile, CV path, routes, skills (with icon keys), process
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

- **`src/data/site.js`** — name, email, GitHub / LinkedIn URLs, CV path
  (`siteConfig.resume`), route links, skill groups (each item optionally takes
  an `icon` key matching a brand icon in `TechIcons.jsx`), the marquee list and
  process steps.
- **`src/data/projects.js`** — each project's title, description, screenshot,
  tech badges, features, live demo and repository links.
- **`src/components/TechIcons.jsx`** — the brand-icon registry (SVG path +
  brand color). Add a key here to use a new icon in `site.js`.

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
