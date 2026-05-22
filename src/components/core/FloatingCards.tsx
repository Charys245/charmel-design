import work1 from "@/assets/images/charte/bodygoal/presentation-logo/charte graphique BODYGOAL copie_page-0025.webp";
import work3 from "@/assets/images/MiniatureYoutube/_3 JOURS pour GÉRER une FRIPERIE.webp";
import work4 from "@/assets/images/Visuel/Free_Book_Mockup_2.webp";
import work5 from "@/assets/images/event/scaj/bloc-notes1.webp";

import work2 from "@/assets/images/charte/SCI KP/tasse.webp";
// import work2 from "@/assets/images/MiniatureYoutube/INTOXICATION_ALIMENTAIRE_V2.webp";

function Badge({
  className,
  letter,
  dark = false,
}: {
  className: string;
  letter: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`absolute z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-lg font-serif-italic ring-4 ring-background ${className} ${
        dark ? "text-ink" : "text-yellow"
      }`}
    >
      {letter}
    </div>
  );
}

const FloatingCards = () => {
  const cards = [
    {
      img: work1,
      title: "Premium Brand",
      date: "Identity · 2026",
      scale: "scale-90",
      opacity: "opacity-40",
      offset: "translate-y-10",
      float: "float-c",
      z: 10,
    },
    {
      img: work2,
      title: "Premium Brand",
      date: "Mug · 2025",
      scale: "scale-95",
      opacity: "opacity-100",
      offset: "translate-y-4",
      float: "float-a",
      z: 20,
    },
    {
      img: work3,
      title: "Youtube Thumbnails",
      date: "Youtube · 2025",
      scale: "scale-110",
      opacity: "opacity-100",
      offset: "-translate-y-4",
      float: "float-b",
      z: 30,
    },
    {
      img: work4,
      title: "Editorial",
      date: "Print · 2025",
      scale: "scale-95",
      opacity: "opacity-100",
      offset: "translate-y-4",
      float: "float-a",
      z: 20,
    },
    {
      img: work5,
      title: "Event Visual",
      date: "Event · 2025",
      scale: "scale-90",
      opacity: "opacity-40",
      offset: "translate-y-10",
      float: "float-c",
      z: 10,
    },
  ];

  return (
    <section className="bg-black">
      <div className=" relative mt-6 md:mt-12 max-w-6xl mx-auto h- [560px]">
        {/* Floating circular accents (like flags) */}
        {/* <Badge className="left-[18%] top-[6%] bg-ink float-b" letter="c" /> */}
      {/* <Badge className="right-[20%] top-[2%] bg-yellow float-a" letter="t" dark /> */}
      {/* <Badge className="left-[8%] bottom-[8%] bg-yellow float-a" letter="✦" dark /> */}
      <Badge className="right-[10%] bottom-[14%] bg-ink float-c" letter="◆" />
      {/* <Badge className="left-[42%] -top-2 bg-ink float-c small" letter="" /> */}

        <div className="flex items-end justify-center gap-3 sm:gap-5 h-full">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`relative ${c.opacity} ${c.scale} ${c.offset} ${c.float} transition-all`}
              style={{ zIndex: c.z }}
            >
              <div className="w-37.5 sm:w-45 md:w-52.5 rounded-[28px] overflow-hidden bg-black shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] border border-black/5">
                <div className="relative aspect-9/16 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    width={210}
                    height={373}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-linear-to-t from-black/85 via-black/40 to-transparent">
                    <div className="text-white text-sm font-semibold leading-tight">
                      {c.title} ›
                    </div>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-full px-2 py-0.5 text-[10px] text-white/90">
                      {c.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FloatingCards;
