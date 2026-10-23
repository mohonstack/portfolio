import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import { marqueeTech } from "@/data/site";

export default function Home() {
  return (
    <main id="main" className="page">
      <Hero />
      <TechMarquee items={marqueeTech} className="marquee--band" />
      <About />
      <Skills />
      <Projects limit={3} />
      <Process />
      <Contact />
    </main>
  );
}
