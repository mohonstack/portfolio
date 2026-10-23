// ---------------------------------------------------------------------------
// Central configuration for the portfolio.
// Every URL, link and label lives here so it is trivial to edit.
// ---------------------------------------------------------------------------

export const siteConfig = {
  brand: "MOHON.DEV",
  name: "Md. Mohon",
  role: "Junior Full-Stack Web Developer",
  location: "Bangladesh",
  email: "mohondigitalmarketer@gmail.com",
  socials: {
    github: "https://github.com/mohonstack",
    linkedin: "https://www.linkedin.com/in/md-mohonofficial/",
  },
  // Served from /public/assets — the nav renders a Download CV button for it.
  resume: "/assets/Md_Mohon_Professional_CV.pdf",
  resumeFileName: "Md_Mohon_Professional_CV.pdf",
};

// One entry per route of the site. The navbar highlights the active one.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

// Each item: label is required, `icon` references a key in TechIcons.jsx
// (skip it for concepts that have no brand mark, e.g. "REST APIs").
export const skillGroups = [
  {
    title: "Frontend",
    items: [
      { label: "HTML5", icon: "html5" },
      { label: "CSS3", icon: "css3" },
      { label: "JavaScript (ES6+)", icon: "javascript" },
      { label: "React 19", icon: "react" },
      { label: "Next.js App Router", icon: "nextdotjs" },
      { label: "Tailwind CSS v4", icon: "tailwindcss" },
      { label: "DaisyUI", icon: "daisyui" },
      { label: "Responsive UI" },
    ],
  },
  {
    title: "Backend",
    items: [
      { label: "Node.js", icon: "nodedotjs" },
      { label: "Express 5", icon: "express" },
      { label: "Next.js Route Handlers", icon: "nextdotjs" },
      { label: "REST APIs" },
      { label: "Middleware" },
      { label: "Environment config" },
    ],
  },
  {
    title: "Database & Authentication",
    items: [
      { label: "MongoDB", icon: "mongodb" },
      { label: "Better Auth" },
      { label: "Mongo Auth Adapter", icon: "mongodb" },
      { label: "Session handling" },
      { label: "localStorage persistence" },
    ],
  },
  {
    title: "Tools & Deployment",
    items: [
      { label: "Git", icon: "git" },
      { label: "GitHub", icon: "github" },
      { label: "Vercel", icon: "vercel" },
      { label: "ESLint", icon: "eslint" },
      { label: "npm", icon: "npm" },
      { label: "Turbopack", icon: "turborepo" },
    ],
  },
];

// The animated icon strip that runs under the hero / on the skills page.
export const marqueeTech = [
  { label: "HTML5", icon: "html5" },
  { label: "CSS3", icon: "css3" },
  { label: "JavaScript", icon: "javascript" },
  { label: "TypeScript", icon: "typescript" },
  { label: "React", icon: "react" },
  { label: "Next.js", icon: "nextdotjs" },
  { label: "Tailwind CSS", icon: "tailwindcss" },
  { label: "DaisyUI", icon: "daisyui" },
  { label: "Node.js", icon: "nodedotjs" },
  { label: "Express", icon: "express" },
  { label: "MongoDB", icon: "mongodb" },
  { label: "Git", icon: "git" },
  { label: "GitHub", icon: "github" },
  { label: "Vercel", icon: "vercel" },
  { label: "ESLint", icon: "eslint" },
  { label: "npm", icon: "npm" },
  { label: "Turbopack", icon: "turborepo" },
];

export const processSteps = [
  {
    title: "Understand",
    icon: "understand",
    description: "Clarify the real problem, the users and the constraints.",
  },
  {
    title: "Plan",
    icon: "plan",
    description: "Map the data, routes and UI structure before writing code.",
  },
  {
    title: "Build",
    icon: "build",
    description: "Ship clean, component-driven code in small iterations.",
  },
  {
    title: "Test",
    icon: "test",
    description: "Check states, edge cases and responsive layouts as I go.",
  },
  {
    title: "Deploy",
    icon: "deploy",
    description: "Push to Vercel, verify in production and iterate.",
  },
];
