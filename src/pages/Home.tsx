import { V2Hero } from "../components/V2Hero";
import ImpactSection from "../components/ImpactSection";
import DesignGallery from "../components/DesignGallery";
import Contact from "../components/core/Contact";
import Services from "../components/core/Services";
import Testimonials from "../components/core/Testimonials";
import AboutSection from "../components/core/AboutSection";
import { SEO } from "../components/core/SEO";
import TestSection from "../components/core/TestSection";
import FloatingCards from "../components/core/FloatingCards";
import MarqueeBottom from "../components/core/MarqueeBottom";

function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <SEO
        title="Brand Designer"
        description="Brand Designer & Graphiste indépendant — Identités visuelles audacieuses pour fondateurs ambitieux, entreprises et événements."
        ogTitle="Brand Designer · Identités Visuelles"
        ogDescription="Graphiste indépendant créant des identités visuelles audacieuses qui vendent."
      />

      {/* <TestSection /> */}

      <V2Hero />
      {/* <MarqueeBottom />
      <FloatingCards /> */}
      <ImpactSection />
      <Services />
      <DesignGallery />
      <AboutSection />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
