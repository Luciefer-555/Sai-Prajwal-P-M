import { Background } from "@/components/background";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="w-full bg-background relative">
      {/* Fixed Background */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <Background src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alt-g7Cv2QzqL3k6ey3igjNYkM32d8Fld7.mp4" placeholder="/alt-placeholder.png" />
      </div>

      {/* Content Wrapper - Scrollable Over Background */}
      <div className="relative z-10 w-full">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-sides">
          <Hero />
        </section>

        {/* About Section */}
        <section className="relative py-24 lg:py-32 px-sides">
          <About />
        </section>

        {/* Projects Section */}
        <section className="relative py-24 lg:py-32 px-sides" id="projects">
          <Projects />
        </section>

        {/* Skills Section */}
        <section className="relative py-24 lg:py-32 px-sides">
          <Skills />
        </section>

        {/* Contact Section */}
        <section className="relative py-24 lg:py-32 px-sides" id="contact">
          <Contact />
        </section>

        {/* Footer Section */}
        <footer className="relative py-12 px-sides border-t border-border/20">
          <Footer />
        </footer>
      </div>
    </main>
  );
}
