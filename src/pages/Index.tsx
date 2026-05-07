import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { StatsBand } from "@/components/sections/StatsBand";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.description"));
  }, [t]);

  return (
    <main id="home" className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Services />
      <StatsBand />
      <Process />
      <About />
      {/* <Testimonials /> */}
      <FAQ />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
