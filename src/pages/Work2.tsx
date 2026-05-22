import React, { useState, useEffect } from "react";
import { ArrowUpRight, Filter, Menu, X } from "lucide-react";

// Définition du type pour un projet
export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  image: string;
  size: "lg" | "md" | "sm";
};

// Données typées
const projects: Project[] = [
  {
    slug: "sci-kp-capital",
    client: "SCI KP Capital",
    title: "Une identité discrète pour un véhicule d'investissement privé.",
    category: "Identité de Marque",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    size: "lg",
  },
  {
    slug: "continium-capital",
    client: "Continium Capital",
    title: "Minimalisme architectural pour la finance moderne.",
    category: "Identité de Marque",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    size: "md",
  },
  {
    slug: "sevenz",
    client: "SevenZ",
    title: "Identité sportswear audacieuse conçue pour l'impact.",
    category: "Identité de Marque",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    size: "md",
  },
  {
    slug: "bodygoal",
    client: "Bodygoal",
    title: "Marque de bien-être avec une confiance sereine.",
    category: "Identité Visuelle",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    size: "lg",
  },
  {
    slug: "renaissance-entrepreneuriale",
    client: "Renaissance Entrepreneuriale",
    title: "Branding d'événement pour un sommet sur le leadership.",
    category: "Branding d'Événement",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    size: "md",
  },
  {
    slug: "scaj",
    client: "SCAJ",
    title: "Un festival du café, entièrement dirigé artistiquement.",
    category: "Design d'Événement",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    size: "md",
  },
  {
    slug: "crypto-keen",
    client: "Crypto Keen",
    title: "Système social éditorial pour une marque de finance.",
    category: "Réseaux Sociaux",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1621761126066-6ec581561571?auto=format&fit=crop&q=80&w=800",
    size: "md",
  },
  {
    slug: "youtube-thumbnails",
    client: "300+ Miniatures",
    title: "Miniatures à haut taux de clic pour les créateurs.",
    category: "Design de Contenu",
    year: "2020 — Présent",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
    size: "md",
  },
];

const categories: string[] = ["Tous", ...Array.from(new Set(projects.map((p) => p.category)))];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const sizeClasses: Record<Project["size"], string> = {
    lg: "col-span-full md:col-span-2 aspect-[16/10]",
    md: "col-span-full md:col-span-1 aspect-square",
    sm: "col-span-full md:col-span-1 aspect-[4/3]",
  };

  return (
    <div
      className={`relative overflow-hidden group cursor-pointer bg-neutral-100 rounded-sm transition-all duration-700 ease-in-out ${
        sizeClasses[project.size]
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.image}
        alt={project.client}
        loading="lazy"
        className={`w-full h-full object-cover transition-transform duration-1000 ${
          isHovered ? "scale-105" : "scale-100"
        }`}
      />

      {/* Superposition (Overlay) */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex justify-between items-end transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="text-white max-w-[80%]">
            <span className="text-xs font-mono uppercase tracking-widest opacity-80 block mb-2">
              {project.category}
            </span>
            <h3 className="text-xl md:text-2xl font-light leading-tight mb-2">{project.client}</h3>
            <p className="text-sm opacity-90 font-light italic">{project.title}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20">
            <ArrowUpRight className="text-white w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Informations persistantes pour mobile */}
      <div className="md:hidden p-4 bg-white border-t border-neutral-100">
        <h3 className="font-medium text-neutral-900">{project.client}</h3>
        <p className="text-xs text-neutral-500">
          {project.category} • {project.year}
        </p>
      </div>
    </div>
  );
};

const Work: React.FC = () => {
  const [filter, setFilter] = useState<string>("Tous");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (filter === "Tous") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === filter));
    }
  }, [filter]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center text-white">
        <div className="text-2xl font-bold tracking-tighter">STUDIO.</div>

        {/* Navigation Desktop */}
        <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest">
          <a href="#" className="hover:opacity-50 transition-opacity">
            Travaux
          </a>
          <a href="#" className="hover:opacity-50 transition-opacity">
            À propos
          </a>
          <a href="#" className="hover:opacity-50 transition-opacity">
            Contact
          </a>
        </div>

        {/* Menu Mobile Trigger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* En-tête (Hero) */}
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-7xl">
        <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-[0.9] mb-8">
          Créer des identités <br />
          <span className="text-neutral-400">pour les visionnaires.</span>
        </h1>

        {/* Barre de filtrage */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-16 border-b border-neutral-100 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-400 mr-4">
            <Filter size={14} /> Filtrer
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm tracking-tight transition-all relative ${
                filter === cat ? "text-neutral-900" : "text-neutral-400 hover:text-neutral-600"
              }`}
            >
              {cat}
              {filter === cat && (
                <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-neutral-900" />
              )}
            </button>
          ))}
        </div>
      </header>

      {/* Grille de projets */}
      <main className="px-6 md:px-12 pb-24 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)
          ) : (
            <div className="col-span-full py-20 text-center text-neutral-400 italic">
              Aucun projet trouvé dans cette catégorie.
            </div>
          )}
        </div>
      </main>

      {/* Pied de page (Footer) */}
      <footer className="px-6 md:px-12 py-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm font-mono text-neutral-400 uppercase tracking-widest text-center md:text-left">
          © 2024 Portfolio — Construit avec précision
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="underline-offset-4 hover:underline">
            Instagram
          </a>
          <a href="#" className="underline-offset-4 hover:underline">
            LinkedIn
          </a>
          <a href="#" className="underline-offset-4 hover:underline">
            Dribbble
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Work;
