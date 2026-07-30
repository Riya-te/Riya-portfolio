import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { GitHubSection } from "@/components/portfolio/GitHubSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riya Kumari — DevOps Engineer & Full Stack Developer" },
      { name: "description", content: "Portfolio of Riya Kumari — DevOps Engineer & Full Stack Developer specialising in AWS, Kubernetes, Docker, Terraform, Jenkins, React, and Node.js." },
      { property: "og:title", content: "Riya Kumari — DevOps Engineer & Full Stack Developer" },
      { property: "og:description", content: "Building scalable cloud infrastructure, automated CI/CD, and modern full-stack applications." },
      { property: "og:url", content: "https://riya-devspace.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://riya-devspace.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
