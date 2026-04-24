import { useState } from "react";
import { X, Maximize2, ZoomIn } from "lucide-react";

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
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    {
      title: "Branding & Identity",
      direction: "left",
      items: [
        {
          id: 1,
          title: "Lumina Tech",
          sub: "Brand System",
          img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 2,
          title: "Naturale",
          sub: "Visual Identity",
          img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 3,
          title: "Apex Dynamics",
          sub: "Logo Design",
          img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 4,
          title: "Velvet Co.",
          sub: "Packaging",
          img: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 5,
          title: "Solstice",
          sub: "Style Guide",
          img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
        },
      ],
    },
    {
      title: "Posters & Event Design",
      direction: "right",
      items: [
        {
          id: 6,
          title: "Berlin Echo",
          sub: "Music Festival",
          img: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 7,
          title: "Glow 2024",
          sub: "Art Exhibition",
          img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 8,
          title: "Motion Theory",
          sub: "Conference",
          img: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 9,
          title: "Retro Future",
          sub: "Cinema Poster",
          img: "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 10,
          title: "Urban Pulse",
          sub: "Street Event",
          img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
        },
      ],
    },
    {
      title: "Social Media & Digital",
      direction: "left",
      items: [
        {
          id: 11,
          title: "Nike Concept",
          sub: "Instagram Campaign",
          img: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 12,
          title: "Crypto UI",
          sub: "Digital Ads",
          img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 13,
          title: "Vogue Story",
          sub: "Social Layout",
          img: "https://images.unsplash.com/photo-1523381235312-3a1647fa9921?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 14,
          title: "Zen App",
          sub: "Carousel Design",
          img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=1200",
        },
        {
          id: 15,
          title: "Hyper Focus",
          sub: "YouTube Thumbnail",
          img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-yellow-400 selection:text-black">
      {/* Header */}
      <header className="px-8 pt-20 pb-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            DESIGN GALLERY
          </h1>
          <p className="text-zinc-500 max-w-lg text-lg border-l border-yellow-400 pl-6">
            Une vitrine immersive de systèmes de marque, de visuels d'événements et de récits
            numériques. Faites défiler pour explorer l'archive visuelle.
          </p>
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
              <p className="text-yellow-400 font-mono text-sm tracking-widest uppercase mb-1">
                {selectedImage.sub}
              </p>
              <h2 className="text-4xl font-bold tracking-tight">{selectedImage.title}</h2>
            </div>
          </div>
        </div>
      )}

      {/* Footer info */}
      <footer className="fixed bottom-8 right-8 pointer-events-none z-10">
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <span>{activeItem ? `Focus: ${activeItem}` : "Survolez pour inspecter"}</span>
          <div className="w-12 h-px bg-zinc-800"></div>
          <span>Archive 2024</span>
        </div>
      </footer>

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
      {/* <div className="px-8 mb-6 flex items-end justify-between max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
          {category.title}
        </h2>
        <div className="h-px grow mx-8 bg-zinc-900"></div>
      </div> */}

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
                      <p className="text-yellow-400 text-xs font-mono mb-2 tracking-widest">
                        {item.sub}
                      </p>
                      {/* <h3 className="text-3xl font-bold tracking-tight">{item.title}</h3> */}
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
