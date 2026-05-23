import { useState, useEffect, useRef } from "react";
import { TrendingUp, Users, ShieldCheck, Zap, Globe, Award } from "lucide-react";
import { Container } from "./core/Container";
import { Heading, Text } from "./core/Typography";
import { useT } from "../i18n/LanguageContext";

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
const MetricCard = ({ category, title, value, suffix, detail, icon: Icon }: MetricCardProps) => {
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
  const { t } = useT();

  const metrics = [
    {
      category: t("impact.1.category"),
      title: t("impact.1.title"),
      value: 300,
      suffix: "+",
      detail: t("impact.1.detail"),
      icon: TrendingUp,
    },
    {
      category: t("impact.2.category"),
      title: t("impact.2.title"),
      value: 15,
      suffix: "+",
      detail: t("impact.2.detail"),
      icon: Users,
    },
    {
      category: t("impact.3.category"),
      title: t("impact.3.title"),
      value: 20,
      suffix: "",
      detail: t("impact.3.detail"),
      icon: ShieldCheck,
    },
    {
      category: t("impact.4.category"),
      title: t("impact.4.title"),
      value: 8,
      suffix: "",
      detail: t("impact.4.detail"),
      icon: Globe,
    },
    {
      category: t("impact.5.category"),
      title: t("impact.5.title"),
      value: 95,
      suffix: "%",
      detail: t("impact.5.detail"),
      icon: Award,
    },
    {
      category: t("impact.6.category"),
      title: t("impact.6.title"),
      value: 24,
      suffix: "h",
      detail: t("impact.6.detail"),
      icon: Zap,
    },
  ];

  return (
    <Container className="bg-black bord er borde r-red-700 ">
      <section className="bord er bo rder-red-700  text-white ">
        <div className="max- w- 6xl mx -auto">
          {/* En-tête */}
          <header className="mb-10 md:mb-20">
            {/* <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-yellow shadow-[0_0_10px_#E2FF00]"></div>
              <span className="text-xs uppercase tracking-[0.4em] font-bold text-yellow">
                Indicateurs de Performance
              </span>
            </div> */}

            <Heading as="h1" className="font-bold mb-6">
              {t("impact.title")} <span className="text-yellow">{t("impact.title.em")}</span>
            </Heading>

            <Text className="max-w-md text-gray-400">
              {t("impact.description")}
            </Text>
          </header>

          {/* Grille de Métriques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {metrics.map((item, index) => (
              <MetricCard key={index} {...item} />
            ))}
          </div>

          {/* Pied de page */}
          {/* <footer className="mt-20 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-[10px] uppercase tracking-widest font-medium">
            Données basées sur les projets 2023—2025
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest text-[#666]">
            <span className="hover:text-yellow cursor-pointer transition-colors">Case Studies</span>
            <span className="hover:text-yellow cursor-pointer transition-colors">Contact</span>
          </div>
        </footer> */}
        </div>

        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Space+Grotesk:wght@500;700&display=swap');
      `}</style>
      </section>
    </Container>
  );
}
