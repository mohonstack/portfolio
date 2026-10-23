import PageHeader from "@/components/PageHeader";
import Skills from "@/components/Skills";
import TechMarquee from "@/components/TechMarquee";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { ArrowRightIcon, FileDownIcon } from "@/components/Icons";
import { marqueeTech, siteConfig } from "@/data/site";

export const metadata = {
  title: "Skills",
  description:
    "Technologies Md. Mohon works with — React, Next.js, Node.js, MongoDB, Tailwind CSS and the tools behind every deployed project.",
};

export default function SkillsPage() {
  return (
    <main id="main" className="page">
      <PageHeader
        eyebrow="Skills"
        title="The stack behind everything I ship."
        intro="JavaScript and React at the core, Next.js across the full stack, MongoDB underneath — plus the tooling that keeps it all shipping."
      />

      <TechMarquee items={marqueeTech} />

      <Skills withHeader={false} />

      <section className="section section--alt">
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <h2 className="cta-band__title">Skills are only half the story.</h2>
              <p className="cta-band__text">
                Every technology above is something I have already used to
                design, build and deploy a real project. See them in action.
              </p>
            </div>
            <div className="cta-band__actions">
              <Link className="btn btn--primary" href="/projects">
                View my work
                <ArrowRightIcon />
              </Link>
              <a
                className="btn btn--ghost"
                href={siteConfig.resume}
                download={siteConfig.resumeFileName}
              >
                <FileDownIcon className="icon-down" />
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
