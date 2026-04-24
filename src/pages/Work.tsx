// import { createFileRoute } from "@tanstack/react-router";
// import { SiteHeader } from "@/components/SiteHeader";
// import { SiteFooter } from "@/components/SiteFooter";
// import { projects } from "@/data/projects";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { projects } from "../data/projects";

// export const Route = createFileRoute("/work")({
//   head: () => ({
//     meta: [
//       { title: "Selected Work — Studio" },
//       { name: "description", content: "A curated archive of brand identities, event designs and visual systems crafted for ambitious clients." },
//       { property: "og:title", content: "Selected Work — Studio" },
//       { property: "og:description", content: "A curated archive of brand identities, event designs and visual systems." },
//     ],
//   }),
//   component: Work,
// });

function Work() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-16 md:pb-24">
        <div className="mx-auto max-w-400 px-6 md:px-10">
          <p className="eyebrow text-ink/60 mb-8 reveal">— Archive · 2020 → 2025</p>
          <h1
            className="display-xl text-[clamp(3rem,11vw,11rem)] reveal"
            style={{ animationDelay: "0.1s" }}
          >
            Selected <em className="not-italic text-yellow/90">Works.</em>
          </h1>
          <p
            className="mt-10 max-w-xl text-ink/70 text-lg reveal"
            style={{ animationDelay: "0.25s" }}
          >
            A curated selection of identity systems, event branding and digital design built for
            founders, finance, sport and culture.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto max-w-400 px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10">
          {projects.map((p, i) => (
            <article
              key={p.slug}
              className={`group ${
                p.size === "lg" ? "col-span-12 md:col-span-8" : "col-span-12 md:col-span-4"
              } ${i % 3 === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden bg-ink/5">
                <div className="aspect-4/5 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.client}
                    loading="lazy"
                    width={1200}
                    height={1500}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute top-4 left-4 right-4 flex justify-between text-cream mix-blend-difference">
                  <span className="eyebrow">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </span>
                  <span className="eyebrow">{p.year}</span>
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <p className="eyebrow text-ink/50 mb-2">{p.category}</p>
                  <h3 className="font-display text-xl md:text-2xl">{p.client}</h3>
                  <p className="text-ink/60 mt-2 max-w-md text-sm">{p.title}</p>
                </div>
                <span className="font-display text-xl opacity-50 group-hover:opacity-100 group-hover:text-yellow group-hover:translate-x-1 transition-all">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default Work;
