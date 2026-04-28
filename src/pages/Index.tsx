import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { StatsBand } from "@/components/sections/StatsBand";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Leo Carter — Building Digital Experiences";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Leo Carter — senior product designer & engineer crafting elegant SaaS, web apps, and digital experiences.");
  }, []);

  return (
    <main id="home" className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Projects />
      <Services />
      <StatsBand />
      <Process />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
