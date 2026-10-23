import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Md. Mohon — open to internships, junior full-stack roles and freelance web development work.",
};

export default function ContactPage() {
  return (
    <main id="main" className="page">
      <PageHeader
        eyebrow="Contact"
        title="Let’s build something together."
        intro="Have a role, an internship or an idea you'd like a hand with? The fastest way to reach me is email — I read every message."
      />

      <Contact withHeader={false} />
    </main>
  );
}
