import { useRef, useState, useEffect } from "react";
import { projects } from "../data/projects";
import { Heading, Text } from "./core/Typography";


type Row = {
  label: string;
  title: string;
  description: string;
  items: typeof projects;
};

const rows: Row[] = [
  {
    label: "01 — Brand Identity",
    title: "Brand Identity",
    description: "Logos, visual systems and complete identities.",
    items: projects.filter((p) =>
      ["Brand Identity", "Visual Identity"].includes(p.category)
    ),
  },
  {
    label: "02 — Social Media Design",
    title: "Social Media Design",
    description: "Posts, carousels and digital banners.",
    items: projects.filter((p) => p.category === "Social Media"),
  },
  {
    label: "03 — Event Design",
    title: "Event Design",
    description: "Posters, signage and physical supports.",
    items: projects.filter((p) =>
      ["Event Branding", "Event Design"].includes(p.category)
    ),
  },
  {
    label: "04 — Digital Marketing",
    title: "Digital Marketing",
    description: "Thumbnails, ads and promotional visuals.",
    items: projects.filter((p) => p.category === "Content Design"),
  },
];

function HorizontalRow({ row }: { row: Row }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // duplicate items for a smoother feel if too few
  const items = row.items.length < 4 ? [...row.items, ...row.items, ...row.items] : row.items;

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollerRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollerRef.current.offsetLeft);
    setScrollLeft(scrollerRef.current.scrollLeft);
  };
  const onMouseLeave = () => setIsDown(false);
  const onMouseUp = () => setIsDown(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollerRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    scrollerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 500, behavior: "smooth" });
  };

  return (
    <div className="group/row relative">
      <div className="mx-auto max-w-400 px-6 md:px-10 mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-yellow mb-3">{row.label}</p>
          <h3 className="font-display text-3xl md:text-5xl tracking-tight">{row.title}</h3>
          <p className="text-light/60 text-sm md:text-base mt-2 max-w-md">{row.description}</p>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="h-11 w-11 rounded-full border border-light/15 hover:border-yellow hover:text-yellow text-light/70 transition-all flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="h-11 w-11 rounded-full border border-light/15 hover:border-yellow hover:text-yellow text-light/70 transition-all flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className={`flex gap-6 overflow-x-auto scroll-smooth pb-6 px-6 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDown ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {items.map((p, i) => (
          <figure
            key={`${p.slug}-${i}`}
            className="group/card relative shrink-0 w-[78vw] sm:w-[55vw] md:w-[38vw] lg:w-[28vw] xl:w-[24vw]"
          >
            <div className="relative aspect-4/5 overflow-hidden bg-light/3">
              <img
                src={p.image}
                alt={p.client}
                draggable={false}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover/card:scale-[1.05] select-none"
              />
              {/* subtle yellow glow on hover */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 80px 0 color-mix(in oklab, var(--yellow) 25%, transparent)",
                }}
              />
              <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-[0.25em] text-light/80 mix-blend-difference">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{p.year}</span>
              </div>
            </div>
            <figcaption className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-light/40 mb-1">{p.category}</p>
                <p className="font-display text-base md:text-lg text-light">{p.client}</p>
              </div>
              <span className="text-light/40 group-hover/card:text-yellow group-hover/card:translate-x-1 transition-all font-display text-lg">
                ↗
              </span>
            </figcaption>
          </figure>
        ))}
        <div className="shrink-0 w-6 md:w-10" />
      </div>
    </div>
  );
}

export function SelectedWorks() {
  // hide rows that have no items
  const visibleRows = rows.filter((r) => r.items.length > 0);

  // simple in-view reveal for the heading
  const headRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!headRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.2 }
    );
    obs.observe(headRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-32 md:py-40 border-t border-light/10 bg-black text-light overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full opacity-[0.08] blur-[140px]"
        style={{ background: "radial-gradient(circle, var(--yellow) 0%, transparent 70%)" }}
      />

      <div
        ref={headRef}
        className={`relative mx-auto max-w-400 px-6 md:px-10 grid grid-cols-12 gap-6 mb-20 md:mb-28 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="col-span-12 md:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.3em] text-light/50 mb-6">— Portfolio</p>
          <Heading as="h2" className="font-bold">
            Selected <span className="text-yellow">Visual</span> Works.
          </Heading>
        </div>
        <div className="col-span-12 md:col-span-5 md:pt-6">
          <Text className="text-light/65 max-w-md">
            A curated selection of branding, social media and visual identity projects — built for founders, finance, sport and culture.
          </Text>
        </div>
      </div>

      <div className="space-y-24 md:space-y-32">
        {visibleRows.map((row) => (
          <HorizontalRow key={row.label} row={row} />
        ))}
      </div>
    </section>
  );
}
