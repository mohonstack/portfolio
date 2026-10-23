import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ExternalLinkIcon, RepoIcon, ArrowRightIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";

function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal as="article" className="project-card" delay={delay}>
      <div className="project-card__media">
        <Image
          className="project-card__img"
          src={project.image}
          alt={project.imageAlt}
          width={1280}
          height={800}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <span className="project-card__tag">{project.tagline}</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__features">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <ul className="project-card__tech">
          {project.tech.map((tech) => (
            <li className="tech-tag" key={tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__links">
          {project.liveUrl ? (
            <a
              className="link-arrow"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              className="link-arrow"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RepoIcon />
              GitHub Repository
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects({ limit, withHeader = true }) {
  const visible = limit ? projects.slice(0, limit) : projects;

  return (
    <section
      className="section section--alt"
      id="projects"
      aria-labelledby={withHeader ? "projects-title" : undefined}
      aria-label={withHeader ? undefined : "Projects"}
    >
      <div className="container">
        {withHeader ? (
          <div className="section-head">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="section-title" id="projects-title">
              Things I&apos;ve designed, built and shipped.
            </h2>
            <p className="section-intro">
              Real, deployed applications &mdash; not tutorials. Every screenshot
              below is the live product.
            </p>
          </div>
        ) : null}

        <div className="projects__grid">
          {visible.map((project, i) => (
            <ProjectCard project={project} key={project.id} delay={(i % 2) * 100} />
          ))}
        </div>

        {limit && projects.length > limit ? (
          <Reveal className="section-more">
            <Link className="link-arrow" href="/projects">
              View all {projects.length} projects
              <ArrowRightIcon />
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
