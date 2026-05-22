import { useEffect, useState, useCallback } from "react";

interface Project {
  slug: string;
  client: string;
  title: string;
  category: string;
  filterCategory: string;
  year: string;
  image: string;
  size: "lg" | "md" | "sm";
  gallery?: string[];
  hasDetail: boolean;
}

interface ProjectModalProps {
  project: Project | null;
  startIndex?: number;
  onClose: () => void;
}

export function ProjectModal({ project, startIndex = 0, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const images = project?.gallery || [];
  const isBanner = project?.filterCategory === "banner";

  const nextImage = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  useEffect(() => {
    if (!project) return;
    setCurrentIndex(startIndex);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, startIndex, onClose, nextImage, prevImage]);

  if (!project || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 cursor-pointer"
        aria-label="Fermer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Project info */}
      <div className="absolute top-6 left-6 text-white z-50">
        <p className="eyebrow text-white/60 mb-1">{project.category}</p>
        <h2 className="font-display text-2xl md:text-3xl">{project.client}</h2>
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm z-50">
        {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors z-50 cursor-pointer"
            aria-label="Image précédente"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-colors z-50 cursor-pointer"
            aria-label="Image suivante"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      {/* Image */}
      <div
        className={`relative w-full flex items-center justify-center ${
          isBanner ? "px-8 md:px-16 pb-32" : "h-full pt-24 px-16 md:px-24 pb-40"
        }`}
      >
        <img
          src={images[currentIndex]}
          alt={`${project.client} - ${currentIndex + 1}`}
          onClick={(e) => e.stopPropagation()}
          className={`cursor-default ${
            isBanner
              ? "w-full max-w-6xl rounded-lg shadow-2xl"
              : "max-w-full max-h-full object-contain"
          }`}
        />
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 max-w-[80vw] overflow-x-auto pb-2 z-50">
          {images.map((img: string, idx: number) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`shrink-0 cursor-pointer ${
                isBanner ? "w-24 h-8" : "w-16 h-16"
              } rounded overflow-hidden border-2 transition-all ${
                idx === currentIndex
                  ? "border-yellow opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
