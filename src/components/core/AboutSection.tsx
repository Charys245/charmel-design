import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import charmelImage from "@/assets/images/charmelImage.webp";
import { Container } from "./Container";
import { Heading } from "./Typography";
import { ArrowUpRight } from "lucide-react";
import { useT } from "../../i18n/LanguageContext";

/**
 * About Section
 * - Uses design system colors: black, light, yellow, muted-foreground
 * - Typography: Space Grotesk (display), DM Sans (sans), Instrument Serif (serif)
 */

const AboutSection = () => {
  const { t } = useT();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const revealScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  const nameParts = t("about.name").split(" ");

  return (
    <Container className="bg-black min-h-screen w-full overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <section
          ref={containerRef}
          id="a-propos"
          className="relative w-full flex flex-col md:flex-row items-center justify-center py-20 md:py-0"
        >
          {/* Main Content Container - Asymmetric Grid */}
          <div className="relative w-full grid grid-cols-12 gap-4 items-center">
            {/* 1. THE CROPPED PORTRAIT */}
            <div className="col-span-12 md:col-start-1 md:col-span-6 relative z-10">
              <motion.div
                style={{ scale: revealScale }}
                className="relative aspect-3/4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
              >
                {/* The Reveal Overlay */}
                <motion.div
                  initial={{ height: "100%" }}
                  animate={isInView ? { height: 0 } : { height: "100%" }}
                  transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                  className="absolute inset-0 bg-black z-20"
                />

                <motion.img
                  style={{ y: imgY }}
                  src={charmelImage}
                  alt="Charmel Tobou - Graphic Designer & Creative Developer"
                  className="w-full h-[120%] object-cover object-center"
                />
              </motion.div>
            </div>

            {/* 2. FLOATING TEXT BLOCK */}
            <motion.div
              style={{ y: textY }}
              className="col-span-12 md:col-start-8 md:col-span-4 mt-12 md:mt-0 z-30"
            >
              <div className="space-y-8">
                {/* Designer Name */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Heading as="h2" className="text-light font-bold">
                    {nameParts[0]} <br />
                    {nameParts[1]}
                  </Heading>
                  <p className="eyebrow text-muted-foreground mt-3">
                    {t("about.role")}
                  </p>
                  <div className="h-px w-12 bg-light/20 mt-4" />
                </motion.div>

                {/* Short Intro */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="text-light/80 text-sm md:text-base leading-relaxed max-w-xs md:max-w-lg"
                >
                  {t("about.intro")} {t("about.philosophy")}
                </motion.p>

                {/* Stats & Location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="flex gap-8"
                >
                  <div>
                    <span className="text-light text-lg font-display">5+</span>
                    <p className="eyebrow text-muted-foreground mt-1">{t("about.years")}</p>
                  </div>
                  <div>
                    <span className="text-light text-lg font-display">{t("about.location")}</span>
                    <p className="eyebrow text-muted-foreground mt-1">{t("about.country")}</p>
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="pt-4"
                >
                  <a
                    href="work"
                    className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-3 hover:shadow-(--shadow-yellow) bg-yellow"
                  >
                    {t("v2hero.cta.work")}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default AboutSection;
