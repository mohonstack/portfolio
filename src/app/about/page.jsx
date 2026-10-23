import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import { ArrowRightIcon, FileDownIcon } from "@/components/Icons";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "About",
  description:
    "Who Md. Mohon is — a computer science student and self-taught full-stack web developer from Bangladesh who learns by building.",
};

export default function AboutPage() {
  return (
    <main id="main" className="page">
      <PageHeader
        eyebrow="About"
        title="Learning in public, building things that work."
        intro="A computer science student and self-taught full-stack developer from Bangladesh — most of my time goes into turning ideas into practical web applications, breaking them, and putting them back together better than before."
      />

      <About withHeader={false} />

      <Process />

      <section className="section">
        <div className="container">
          <Reveal className="cta-band">
            <div>
              <h2 className="cta-band__title">
                Want the short version?
              </h2>
              <p className="cta-band__text">
                My CV has the full summary — skills, projects and how to reach
                me — in one printable page.
              </p>
            </div>
            <div className="cta-band__actions">
              <a
                className="btn btn--primary"
                href={siteConfig.resume}
                download={siteConfig.resumeFileName}
              >
                <FileDownIcon className="icon-down" />
                Download CV
              </a>
              <Link className="btn btn--ghost" href="/contact">
                Contact me
                <ArrowRightIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
