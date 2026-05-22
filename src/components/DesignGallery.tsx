import { useState } from "react";
import { X, Maximize2, ZoomIn, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading, Text } from "./core/Typography";

// Branding & Identity images
import continium from "@/assets/images/charte/Continium Capital/continium-capital.webp";
import bodygoal from "@/assets/images/charte/bodygoal/presentation-logo/charte graphique BODYGOAL copie_page-0025.webp";
import sciKp from "@/assets/images/charte/SCI KP/Mock.webp";
import delet from "@/assets/images/charte/Delet/DELET_charte_graphique_page-0001.webp";
import sevenz from "@/assets/images/charte/SevenZ/SevenZ_2.webp";

// Event images
import re2025 from "@/assets/images/event/RE-2025/V2-OFFICIEL-RE-2025-ALL-PRICE.webp";
import re2026 from "@/assets/images/event/RE-2026/Theme-RE-2K26.webp";
import scaj from "@/assets/images/event/scaj/bloc-notes1.webp";
import reseautage from "@/assets/images/event/resautage/RESEAUTAGE-IMPACT-RE-23.webp";
import didos from "@/assets/images/event/didos-atelier/affiche-dido's-au-programme.webp";

// YouTube thumbnails
import messi from "@/assets/images/MiniatureYoutube/Messi VS Maradonna__.webp";
import friperie from "@/assets/images/MiniatureYoutube/_3 JOURS pour GÉRER une FRIPERIE.webp";
import intoxication from "@/assets/images/MiniatureYoutube/INTOXICATION_ALIMENTAIRE_V2.webp";
import explose from "@/assets/images/MiniatureYoutube/explose.webp";
import linkedin from "@/assets/images/MiniatureYoutube/__Comment modifier ses photos directement sur Linkedin.webp";

type GalleryItem = { id: number; title: string; sub: string; img: string };

type Category = {
  title: string;
  direction: string;
  items: GalleryItem[];
};

interface ScrollingRowProps {
  category: Category;
  onItemHover: (title: string | null) => void;
  onSelectImage: (item: GalleryItem) => void;
}

const DesignGallery = () => {
  const [__activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories: Category[] = [
    {
      title: "Branding & Identity",
      direction: "left",
      items: [
        { id: 1, title: "Continium Capital", sub: "Identité de marque", img: continium },
        { id: 2, title: "BodyGoal", sub: "Charte graphique", img: bodygoal },
        { id: 3, title: "SCI KP", sub: "Identité visuelle", img: sciKp },
        { id: 4, title: "Delet", sub: "Logo Design", img: delet },
        { id: 5, title: "SevenZ", sub: "Identité de marque", img: sevenz },
      ],
    },
    {
      title: "Posters & Event Design",
      direction: "right",
      items: [
        { id: 6, title: "Réseautage Impact 2025", sub: "Événement", img: re2025 },
        { id: 7, title: "Réseautage Impact 2026", sub: "Événement", img: re2026 },
        { id: 8, title: "SCAJ", sub: "Design événementiel", img: scaj },
        { id: 9, title: "Réseautage", sub: "Accompagnement", img: reseautage },
        { id: 10, title: "Dido's Atelier", sub: "Programme", img: didos },
      ],
    },
    {
      title: "Social Media & Digital",
      direction: "left",
      items: [
        { id: 11, title: "Messi VS Maradona", sub: "Miniature YouTube", img: messi },
        { id: 12, title: "Gérer une Friperie", sub: "Miniature YouTube", img: friperie },
        { id: 13, title: "Intoxication Alimentaire", sub: "Miniature YouTube", img: intoxication },
        { id: 14, title: "Explose", sub: "Miniature YouTube", img: explose },
        { id: 15, title: "Photos LinkedIn", sub: "Miniature YouTube", img: linkedin },
      ],
    },
  ];

  return (
    <div id='projets' className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-yellow-400 selection:text-black">
      {/* Header */}
      <header className="px-8 md:px-16 xl:px-43 2xl:px-56 pt-20 pb-12">
        <div>
          <Heading as="h1" className="font-bold mb-6">
            DESIGN <span className="text-yellow">GALLERY</span>
          </Heading>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <Text className="text-zinc-500 max-w-lg border-l border-yellow pl-6">
              Une vitrine immersive de systèmes de marque, de visuels d'événements et de récits
              numériques. Faites défiler pour explorer l'archive visuelle.
            </Text>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-3 hover:shadow-[0_10px_40px_rgba(255,215,0,0.3)] bg-yellow shrink-0"
            >
              Voir les travaux
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <main className="pb-32 overflow-hidden">
        {categories.map((cat, idx) => (
          <ScrollingRow
            key={idx}
            category={cat}
            onItemHover={setActiveItem}
            onSelectImage={setSelectedImage}
          />
        ))}
      </main>

      {/* Lightbox / Modale d'agrandissement */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-yellow-400 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} strokeWidth={1.5} />
          </button>

          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6">
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center animate-in slide-in-from-bottom-4 duration-500 delay-150">
              <p className="text-yellow font-mono text-sm tracking-widest uppercase mb-2">
                {selectedImage.sub}
              </p>
              <Heading as="h2" className="font-bold">{selectedImage.title}</Heading>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { animation: scroll-left 40s linear infinite; }
        .animate-scroll-right { animation: scroll-right 40s linear infinite; }
        .pause-animation:hover .animate-scroll-left,
        .pause-animation:hover .animate-scroll-right {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

const ScrollingRow = ({ category, onItemHover, onSelectImage }: ScrollingRowProps) => {
  const items = [...category.items, ...category.items];
  const scrollClass =
    category.direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="mb-8 group pause-animation">
      <div className="relative flex overflow-hidden">
        <div className={`flex gap-8 px-4 ${scrollClass}`}>
          {items.map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              onMouseEnter={() => onItemHover(item.title)}
              onMouseLeave={() => onItemHover(null)}
              onClick={() => onSelectImage(item)}
              className="relative shrink-0 w-112.5 aspect-4/5 md:w-150 md:aspect-16/10 bg-zinc-900 overflow-hidden rounded-sm cursor-none group/item transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/item:scale-105"
              />

              {/* Custom Cursor Overlay Effect */}
              <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                <div className="bg-yellow-400 text-black p-4 rounded-full transform scale-50 group-hover/item:scale-100 transition-transform duration-500 shadow-xl">
                  <ZoomIn size={24} />
                </div>
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 z-20">
                <div className="translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-yellow text-xs font-mono mb-2 tracking-widest uppercase">
                        {item.sub}
                      </p>
                    </div>
                    <div className="p-3 border border-white/20 rounded-full bg-white/10 backdrop-blur-md">
                      <Maximize2 size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border border-yellow-400/0 group-hover/item:border-yellow-400/30 transition-colors duration-500 pointer-events-none z-30"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignGallery;
