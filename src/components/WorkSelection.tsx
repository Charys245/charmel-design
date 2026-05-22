import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ArrowDown } from "lucide-react";
import { Heading } from "./core/Typography";
import { useT } from "../i18n/LanguageContext";

// Images
import cc1 from "@/assets/images/charte/Continium Capital/continium-capital.webp";
import yt_friperie from "@/assets/images/MiniatureYoutube/_3 JOURS pour GÉRER une FRIPERIE.webp";
import bodygoal from "@/assets/images/charte/bodygoal/presentation-logo/charte graphique BODYGOAL copie_page-0025.webp";
import messi from "@/assets/images/MiniatureYoutube/Messi VS Maradonna__.webp";
import scaj from "@/assets/images/event/scaj/bloc-notes1.webp";

interface ProjectSectionProps {
  project: (typeof PROJECTS)[0];
  isOpen: boolean;
  onOpen: (project: (typeof PROJECTS)[0] | null) => void;
  onClose: () => void;
}

// Données des projets
const PROJECTS = [
  {
    id: "p1",
    title: "Continium Capital",
    category: "Identité de marque • Finance",
    description: "Minimalisme architectural pour la finance moderne.",
    image: cc1,
    details: {
      case: "Création d'une identité visuelle complète pour une société d'investissement moderne.",
      goals: "Refléter la stabilité, la confiance et l'innovation dans le secteur financier.",
      results: "Identité complète",
      entity: "Continium Capital",
    },
  },
  {
    id: "p2",
    title: "3 Jours pour Gérer une Friperie",
    category: "YouTube • Miniature",
    description: "Design de miniature à fort taux de clics.",
    image: yt_friperie,
    details: {
      case: "Création d'une miniature accrocheuse pour maximiser le taux de clics.",
      goals: "Attirer l'attention et communiquer le message en une fraction de seconde.",
      results: "+15% CTR",
      entity: "Créateur YouTube",
    },
  },
  {
    id: "p3",
    title: "BodyGoal",
    category: "Identité de marque • Wellness",
    description: "Marque wellness avec une confiance discrète.",
    image: bodygoal,
    details: {
      case: "Création d'une identité visuelle complète pour une marque de bien-être.",
      goals: "Refléter l'énergie, la santé et la confiance.",
      results: "Identité complète",
      entity: "BodyGoal",
    },
  },
  {
    id: "p4",
    title: "Messi VS Maradona",
    category: "YouTube • Miniature",
    description: "Miniature à fort taux de clics pour contenu football.",
    image: messi,
    details: {
      case: "Miniature captivante pour un débat légendaire.",
      goals: "Maximiser le taux de clics avec un visuel impactant.",
      results: "+20% CTR",
      entity: "Créateur YouTube",
    },
  },
  {
    id: "p5",
    title: "SCAJ",
    category: "Design événementiel • Print",
    description: "Bloc-notes pour événement professionnel.",
    image: scaj,
    details: {
      case: "Design de supports print pour un événement.",
      goals: "Créer une cohérence visuelle sur tous les supports.",
      results: "Branding complet",
      entity: "SCAJ",
    },
  },
];

const ProjectSection = ({ project, isOpen, onOpen, t }: ProjectSectionProps & { t: (key: any) => string }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animation de parallaxe pour l'image
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.3, 1.5]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const yText = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [100, 0, -100]);

  return (
    <section
      ref={containerRef}
      className={`relative h-screen w-full flex items-center justify-center overflow-hidden stic ky top-0 transition-all duration-700 ${
        isOpen ? "z-100" : "z-10"
      }`}
      onClick={() => !isOpen && onOpen(project)}
    >
      {/* Background Visual */}
      <motion.div style={{ scale: isOpen ? 1 : scale }} className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-screen object-cover transition-all duration-1000 ${
            isOpen ? "brightness-[0.2]" : "brightness-[0.4]"
          }`}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: isOpen ? -200 : yText, opacity: isOpen ? 1 : opacity }}
        className="relative z-20 text-center px-6 max-w-4xl cursor-pointer"
      >
        <span className="block text-xs uppercase tracking-[0.4em] mb-4 opacity-80 text-white">
          {project.category}
        </span>
        <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-6">
          {project.title}
        </h2>
        <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto">{project.description}</p>
      </motion.div>

      {/* Deep Dive Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "circOut" }}
            className="absolute bottom-0 left-0 w-full p-10 md:p-20 z-30 bg-linear-to-t from-black via-black/90 to-transparent"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left max-w-7xl mx-auto">
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold">
                  {t("work.case")}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">{project.details.case}</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold">
                  {t("work.goals")}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">{project.details.goals}</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold">
                  {t("work.results")}
                </h3>
                <p className="text-2xl font-serif italic text-white mb-1">
                  {project.details.results}
                </p>
                <p className="text-[10px] uppercase text-white/30">{project.details.entity}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default function WorkSelection() {
  const { t } = useT();
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  // Verrouiller le scroll quand un projet est ouvert
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <section id="projets" className="bg-surface min-h-screen text-white selection:bg-white selection:text-black">
      {/* Bouton Fermer */}
      <AnimatePresence>
        {selectedProject && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setSelectedProject(null)}
            className="fixed top-8 right-8 z-2000 bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 text-xs font-bold uppercase tracking-widest shadow-2xl transition-transform hover:scale-105 active:scale-95"
          >
            <X size={14} /> {t("work.back")}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Intro Section */}
      <section className="h-screen flex flex-col justify-center px-8 md:px-16 xl:px-43 2xl:px-56 relative z-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Heading as="h1" className="font-bold">
            {t("work.title")} <br /> {t("work.title.em")}
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center gap-4 text-xs uppercase tracking-widest"
        >
          <span>{t("work.scroll")}</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.div>
      </section>

      {/* Gallery */}
      <main className="relative">
        {PROJECTS.map((project) => (
          <ProjectSection
            key={project.id}
            project={project}
            isOpen={selectedProject?.id === project.id}
            onOpen={setSelectedProject}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        ))}
      </main>

      {/* CTA Section */}
      {/* <section className="h-s creen flex flex-col items-center justify-center relative z-60">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Heading as="h2" className="font-bold text-white mb-8">
            Voir tous les <span className="text-yellow">projets.</span>
          </Heading>
          <Link
            to="/work"
            className="group inline-flex items-center gap-3 bg-yellow text-black px-8 py-4 font-bold uppercase tracking-wider transition-all hover:bg-white"
          >
            Tous les projets
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section> */}

      {/* Footer Section */}
      {/* <footer className="h-screen flex flex-col items-center justify-center bg-white text-black text-center p-10 relative z-60">
        <motion.h2
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          className="text-6xl md:text-[8vw] font-bold tracking-tighter leading-none mb-10"
        >
          Bâtissons <br /> le futur.
        </motion.h2>
        <p className="max-w-xl text-lg text-black/50 mb-12">
          Nos solutions transforment la donnée complexe en action gouvernementale concrète.
        </p>
        <button className="group flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
          Lancer un projet{" "}
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <div className="absolute bottom-10 text-[10px] uppercase tracking-widest text-black/30 font-bold">
          © 2024 Studio Select — Digital Governance Specialists
        </div>
      </footer> */}
    </section>
  );
}
