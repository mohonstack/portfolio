import PageHeader from "@/components/PageHeader";
import Projects from "@/components/Projects";

export const metadata = {
  title: "Projects",
  description:
    "Deployed web applications by Md. Mohon — FitLog, CGPA Calculator, Bangla News 24 and Daily Bazar, built with Next.js, React and MongoDB.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="page">
      <PageHeader
        eyebrow="Projects"
        title="Things I’ve designed, built and shipped."
        intro="Real, deployed applications — not tutorials. Every screenshot below is the live product, with the repository one click away."
      />

      <Projects withHeader={false} />
    </main>
  );
}
