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
  // No resume file is configured yet. Add "/assets/resume.pdf" here and the
  // navigation will render a Resume button automatically.
  resume: null,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React 19",
      "Next.js App Router",
      "Tailwind CSS v4",
      "DaisyUI",
      "Responsive UI",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express 5",
      "Next.js Route Handlers",
      "REST APIs",
      "Middleware",
      "Environment config",
    ],
  },
  {
    title: "Database & Authentication",
    items: [
      "MongoDB",
      "Better Auth",
      "Mongo Auth Adapter",
      "Session handling",
      "localStorage persistence",
    ],
  },
  {
    title: "Tools & Deployment",
    items: ["Git", "GitHub", "Vercel", "ESLint", "npm", "Turbopack"],
  },
];

export const processSteps = [
  {
    title: "Understand",
    description: "Clarify the real problem, the users and the constraints.",
  },
  {
    title: "Plan",
    description: "Map the data, routes and UI structure before writing code.",
  },
  {
    title: "Build",
    description: "Ship clean, component-driven code in small iterations.",
  },
  {
    title: "Test",
    description: "Check states, edge cases and responsive layouts as I go.",
  },
  {
    title: "Deploy",
    description: "Push to Vercel, verify in production and iterate.",
  },
];
