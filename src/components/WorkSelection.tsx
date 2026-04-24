import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ArrowDown, ChevronRight } from "lucide-react";

interface ProjectSectionProps {
  project: (typeof PROJECTS)[0];
  isOpen: boolean;
  onOpen: (project: (typeof PROJECTS)[0] | null) => void;
  onClose: () => void;
}

// Données des projets basées sur tes thématiques
const PROJECTS = [
  {
    id: "p1",
    title: "METRO-V",
    category: "Urbanisme • Transport",
    description: "Optimisation des flux de mobilité douce en milieu urbain dense.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2000",
    details: {
      case: "Analyse des flux de passagers sur 24 mois pour réduire les temps d'attente de 15% via une interface prédictive.",
      goals:
        "Centraliser les données du MCVT pour offrir une vision temps réel de la saturation du réseau.",
      results: "+250k Utilisateurs actifs",
      entity: "Ministère du Cadre de Vie et des Transports (MCVT)",
    },
  },
  {
    id: "p2",
    title: "KINETIC",
    category: "Énergie • Dashboard",
    description: "Visualisation interactive de la consommation énergétique nationale.",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000",
    details: {
      case: "Création d'un dashboard de pilotage pour le Ministère de l'Énergie permettant de suivre l'adoption des énergies renouvelables.",
      goals: "Intégration de capteurs IoT et rendu 3D des grilles de distribution.",
      results: "98% de précision",
      entity: "Ministère de l'Énergie",
    },
  },
  {
    id: "p3",
    title: "AGRI-TECH",
    category: "Agriculture • Innovation",
    description: "Monitorage intelligent des rendements agricoles par satellite.",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2000",
    details: {
      case: "Soutenir la souveraineté alimentaire en fournissant aux agriculteurs des données météo précises.",
      goals: "Développé avec le Ministère de l'Agriculture pour la gestion des intrants.",
      results: "12 Régions couvertes",
      entity: "Ministère de l'Agriculture",
    },
  },
  {
    id: "p4",
    title: "ECO-TRACK",
    category: "Économie • Gouvernance",
    description: "Plateforme de transparence budgétaire et de suivi des investissements.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000",
    details: {
      case: "Permettre aux citoyens de suivre l'allocation des budgets publics et l'avancement des chantiers.",
      goals: "Projet piloté par le Ministère des Finances pour renforcer la confiance.",
      results: "Audit Open Data",
      entity: "Ministère des Finances",
    },
  },
  {
    id: "p5",
    title: "HEAL-OS",
    category: "Santé • Analyse",
    description: "Cartographie prédictive des besoins sanitaires régionaux.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000",
    details: {
      case: "Répartir les ressources médicales de manière équitable sur le territoire.",
      goals: "Interface cartographique couplée à une IA pour identifier les zones de tension.",
      results: "Planification Stratégique",
      entity: "Ministère de la Santé",
    },
  },
];

const ProjectSection = ({ project, isOpen, onOpen }: ProjectSectionProps) => {
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
      className={`relative h-screen w-full flex items-center justify-center overflow-hidden sticky top-0 transition-all duration-700 ${
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
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
                  Étude de Cas
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">{project.details.case}</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold">
                  Objectifs
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">{project.details.goals}</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-white/40 mb-4 font-bold">
                  Résultats
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
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[1000] mix-blend-difference">
        <div className="text-xl font-bold tracking-tighter">STUDIO.SELECT</div>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
          <span className="cursor-pointer hover:opacity-50 transition-opacity">Work</span>
          <span className="cursor-pointer hover:opacity-50 transition-opacity">About</span>
          <span className="cursor-pointer hover:opacity-50 transition-opacity">Contact</span>
        </div>
      </nav> */}

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
            <X size={14} /> Retour à la galerie
          </motion.button>
        )}
      </AnimatePresence>

      {/* Intro Section */}
      <section className="h-screen flex flex-col justify-center px-10 md:px-32 relative z-50">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs uppercase tracking-[0.4em] mb-6 opacity-60"
        >
          Curated Showcase — 2024
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-[10vw] font-bold leading-[0.85] tracking-tighter font-serif italic"
        >
          Selected <br /> Work
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center gap-4 text-xs uppercase tracking-widest"
        >
          <span>Scroll pour explorer</span>
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
          />
        ))}
      </main>

      {/* Footer Section */}
      <footer className="h-screen flex flex-col items-center justify-center bg-white text-black text-center p-10 relative z-60">
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
      </footer>
    </div>
  );
}
