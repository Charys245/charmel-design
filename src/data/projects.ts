import kp from "@/assets/work-kp.jpg";
import continium from "@/assets/work-continium.jpg";
import sevenz from "@/assets/work-sevenz.jpg";
import bodygoal from "@/assets/work-bodygoal.jpg";
import renaissance from "@/assets/work-renaissance.jpg";
import scaj from "@/assets/work-scaj.jpg";
import crypto from "@/assets/work-crypto.jpg";
import youtube from "@/assets/work-youtube.jpg";

export type Project = {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  image: string;
  size: "lg" | "md" | "sm";
};

export const projects: Project[] = [
  { slug: "sci-kp-capital", client: "SCI KP Capital", title: "A discreet identity for a private investment vehicle.", category: "Brand Identity", year: "2024", image: kp, size: "lg" },
  { slug: "continium-capital", client: "Continium Capital", title: "Architectural minimalism for modern finance.", category: "Brand Identity", year: "2024", image: continium, size: "md" },
  { slug: "sevenz", client: "SevenZ", title: "Bold sportswear identity built for impact.", category: "Brand Identity", year: "2023", image: sevenz, size: "md" },
  { slug: "bodygoal", client: "Bodygoal", title: "Wellness brand with quiet confidence.", category: "Visual Identity", year: "2023", image: bodygoal, size: "lg" },
  { slug: "renaissance-entrepreneuriale", client: "Renaissance Entrepreneuriale", title: "Event branding for a leadership summit.", category: "Event Branding", year: "2024", image: renaissance, size: "md" },
  { slug: "scaj", client: "SCAJ", title: "A coffee festival, fully art-directed.", category: "Event Design", year: "2023", image: scaj, size: "md" },
  { slug: "crypto-keen", client: "Crypto Keen", title: "Editorial social system for a finance brand.", category: "Social Media", year: "2024", image: crypto, size: "md" },
  { slug: "youtube-thumbnails", client: "300+ Thumbnails", title: "High-CTR thumbnails for top creators.", category: "Content Design", year: "2020 — Now", image: youtube, size: "md" },
];
