import About from "@/components/About";
import { Contact, Footer } from "@/components/Contact";
import Faq from "@/components/Faq";
import FeaturedProjects from "@/components/FeaturedProjects";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Experience, Process, Services, TechStack, Testimonials } from "@/components/Sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Services />
        <TechStack />
        <Experience />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
