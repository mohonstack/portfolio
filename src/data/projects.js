// ---------------------------------------------------------------------------
// Featured projects.
// All live URLs and repositories below are the real, configured ones.
// To change a link or an image, edit it here — nothing else needs to change.
// ---------------------------------------------------------------------------

export const projects = [
  {
    id: "fitlog",
    title: "FitLog",
    tagline: "Fitness & workout tracking",
    description:
      "A dark, no-nonsense gym companion. Browse a library of twelve lifts, open a workout for full instructions, then build today's plan or a saved list — all persisted locally so the session survives a reload.",
    image: "/assets/fitlog.png",
    imageAlt: "FitLog workout library showing exercise cards with muscle-group tags",
    tech: ["Next.js 14", "React 18", "Tailwind CSS", "REST API", "localStorage"],
    features: [
      "Searchable, sortable workout library with detail pages",
      "My Plan view with exercises, minutes and calories summaries",
      "Plan and saved lists persisted in localStorage",
    ],
    liveUrl: "https://fitlog-assignment-dusky.vercel.app/",
    repoUrl: "https://github.com/mohonstack/fitlog",
  },
  {
    id: "cgpa-calculator",
    title: "CGPA Calculator",
    tagline: "Student GPA / CGPA calculator",
    description:
      "A fast, privacy-first calculator that turns a marksheet into an instant SGPA and a weighted cumulative CGPA on the standard 4.00 grade point scale — no account, no server round trip.",
    image: "/assets/cgpa-calculator.png",
    imageAlt: "CGPA Calculator landing page with the Calculate Your CGPA headline",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS v4"],
    features: [
      "Subject-wise grades with credit-weighted SGPA / CGPA maths",
      "Editable subjects per year and semester",
      "Results tracked locally in the browser",
    ],
    liveUrl: "https://cgpa-calculator-rw2j.vercel.app/",
    repoUrl: "https://github.com/mohonstack/CGPA-calculator",
  },

  {
    id: "daily-bazar",
    title: "Daily Bazar",
    tagline: "Bengali daily market-price app",
    description:
      "Daily market prices in Bengali for rice, lentils, oil, vegetables, fish, meat, eggs and spices — with a live price ticker, per-item change indicators and market-wise average, minimum and maximum rates.",
    image: "/assets/daily-bazar.png",
    imageAlt: "Daily Bazar homepage showing today's market prices in Bengali",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "DaisyUI", "HeroUI", "MongoDB", "Better Auth"],
    features: [
      "Category navigation with a live up / down price ticker",
      "Market-wise detail with average, minimum and maximum rates",
      "Sign in and sign up backed by Better Auth",
    ],
    liveUrl: "https://daily-bazar-dun.vercel.app/",
    repoUrl: "https://github.com/mohonstack/Daily-Bazar",
  },
    {
    id: "bangla-news-24",
    title: "Bangla News 24",
    tagline: "Bengali-language news platform",
    description:
      "A modern Bengali news platform with a lead story, category sections, a most-read sidebar and category navigation — backed by MongoDB with authenticated accounts.",
    image: "/assets/bangla-news-24.jpg",
    imageAlt: "Bangla News 24 brand banner reading সংবাদপ্রদান",
    tech: ["Next.js 16", "React 19", "Tailwind CSS v4", "DaisyUI", "Better Auth", "MongoDB"],
    features: [
      "Lead story plus category news grids and most-read sidebar",
      "Category navigation in Bengali",
      "Accounts and sessions via Better Auth on MongoDB",
    ],
    // The repository lists this deployment as its homepage. It was returning a
    // "deployment not found" 404 at the time of writing — re-deploy or update
    // the link here if the address changes.
    liveUrl: "https://bangla-news-gamma.vercel.app",
    repoUrl: "https://github.com/mohonstack/bangla_news",
  },
];
