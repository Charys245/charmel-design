import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, ShieldCheck, Zap, Globe, Award } from "lucide-react";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
}

interface MetricCardProps {
  category: string;
  title: string;
  value: number;
  suffix: string;
  detail: string;
  icon: React.ElementType;
}

/**
 * Composant de compteur animé
 */
const AnimatedCounter = ({ target, duration = 1500 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={countRef}>{count}</span>;
};

/**
 * Carte de métrique individuelle
 */
const MetricCard = ({ category, title, value, suffix, detail, icon: Icon } : MetricCardProps) => {
  return (
    <div className="group relative bg-[#141414] border border-[#222] hover:border-yellow p-8 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-2">
      <div className="flex justify-between items-start mb-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">{category}</p>
        <Icon className="w-4 h-4 text-gray-600 group-hover:text-yellow transition-colors" />
      </div>

      <div className="flex items-baseline mb-2">
        <span className="text-5xl font-extrabold tracking-tighter text-yellow">
          <AnimatedCounter target={value} />
        </span>
        <span className="text-4xl font-extrabold text-yellow">{suffix}</span>
      </div>

      <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">{title}</h3>

      <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-70 transition-all duration-500 ease-in-out overflow-hidden mt-0 group-hover:mt-4">
        <p className="text-xs leading-relaxed text-gray-300 border-l border-yellow/30 pl-3">
          {detail}
        </p>
      </div>
    </div>
  );
};

/**
 * Composant Principal
 */
export default function ImpactSection() {
  const metrics = [
    {
      category: "Portée Contenu",
      title: "Miniatures YouTube",
      value: 300,
      suffix: "+",
      detail: "Augmentation moyenne du CTR de 14% sur 5 chaînes majeures (Tech & Lifestyle).",
      icon: TrendingUp,
    },
    {
      category: "Conseil",
      title: "Entrepreneurs Accompagnés",
      value: 15,
      suffix: "+",
      detail:
        "Stratégie visuelle de bout en bout pour des startups, du stade de l'idée à la série A.",
      icon: Users,
    },
    {
      category: "Stratégie de Marque",
      title: "Identités Visuelles",
      value: 42,
      suffix: "",
      detail:
        "Création de langages visuels uniques incluant logos, typographies et chartes graphiques.",
      icon: ShieldCheck,
    },
    {
      category: "Événementiel",
      title: "Événements Majeurs",
      value: 8,
      suffix: "",
      detail:
        "Graphismes environnementaux et assets digitaux pour des conférences de 5000+ personnes.",
      icon: Globe,
    },
    {
      category: "Succès Client",
      title: "Taux de Rétention",
      value: 95,
      suffix: "%",
      detail:
        "Pourcentage de clients revenant pour un second projet au cours de la même année fiscale.",
      icon: Award,
    },
    {
      category: "Flux de Travail",
      title: "Vitesse d'Exécution",
      value: 24,
      suffix: "h",
      detail:
        "Délai moyen pour la livraison des premiers concepts visuels sur les packs standards.",
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-ink text-white p-8 md:p-20 selection:bg-yellow selection:text-black font-['Inter']">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-yellow shadow-[0_0_10px_#E2FF00]"></div>
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-yellow">
              Indicateurs de Performance
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 font-['Space_Grotesk']">
            Impact <span className="text-yellow">Mesurable.</span>
          </h1>

          <p className="max-w-md text-gray-400 text-sm leading-relaxed">
            Le design est plus qu'une esthétique ; c'est un levier de croissance. Voici comment mon
            travail s'est traduit en résultats concrets pour mes clients.
          </p>
        </header>

        {/* Grille de Métriques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((item, index) => (
            <MetricCard key={index} {...item} />
          ))}
        </div>

        {/* Pied de page */}
        <footer className="mt-20 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-[10px] uppercase tracking-widest font-medium">
            Données basées sur les projets 2023—2025
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-[#666]">
            <span className="hover:text-yellow cursor-pointer transition-colors">Case Studies</span>
            <span className="hover:text-yellow cursor-pointer transition-colors">Contact</span>
          </div>
        </footer>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Space+Grotesk:wght@500;700&display=swap');
      `}</style>
    </div>
  );
}
