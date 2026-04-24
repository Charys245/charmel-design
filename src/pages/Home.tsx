import { Link } from "react-router-dom";
// import { EditorialHero } from "../components/EditorialHero";
// import { Hero } from "../components/Hero";
// import { projects } from "../data/projects";
import { V2Hero } from "../components/V2Hero";
import Contact from "../components/Contact";
import ImpactSection from "../components/ImpactSection";
import WorkSelection from "../components/WorkSelection";
import DesignGallery from "../components/DesignGallery";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "Brand Designer · Visual Identities That Sell" },
//       { name: "description", content: "Independent brand & graphic designer crafting bold visual identities for ambitious founders, capital firms and events." },
//       { property: "og:title", content: "Brand Designer · Visual Identities That Sell" },
//       { property: "og:description", content: "Independent brand & graphic designer crafting bold visual identities that sell." },
//     ],
//   }),
//   component: Index,
// });

function Home() {
  // const featured = projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-cream text-ink">
      {/* <SiteHeader forceDark /> */}
      {/* <Hero /> */}

      <V2Hero />
      <ImpactSection />
      <WorkSelection />
      {/* <EditorialHero /> */}

      {/* MANIFESTO */}
      {/* <section className="bg-ink text-cream py-32 md:py-44 relative overflow-hidden border-t border-cream/10">
        <div className="mx-auto max-w-400 px-6 md:px-10 grid grid-cols-12 gap-6">
          <p className="eyebrow text-yellow col-span-12 md:col-span-3">— Manifesto</p>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
              I don&apos;t make logos. I build <span className="text-yellow">brand systems</span> —
              visual languages that scale across products, campaigns and decades. Every identity I
              ship is a strategic asset, engineered for clarity, distinctiveness and longevity.
            </p>
            <Link
              to="/studio"
              className="inline-flex items-center gap-3 mt-12 text-cream/80 hover:text-yellow border-b border-cream/20 hover:border-yellow pb-1 transition-all"
            >
              <span>Read my approach</span> <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </section> */}

      {/* SERVICES TEASER */}
      <section className="bg-ink text-cream py-24 md:py-32">
        <div className="mx-auto max-w-400 px-6 md:px-10">
          <p className="eyebrow text-yellow mb-6">— Capabilities</p>
          <h2 className="display-xl text-[clamp(2.5rem,7vw,6rem)] text-cream mb-16 max-w-4xl">
            From strategy to <em className="not-italic text-yellow">execution.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-cream/15 border-y border-cream/15">
            {[
              { n: "01", t: "Brand Identity", d: "Logos, systems, guidelines, naming." },
              { n: "02", t: "Social Media Design", d: "Editorial templates, content systems." },
              { n: "03", t: "Print & Physical", d: "Stationery, packaging, signage." },
              { n: "04", t: "Event Visuals", d: "Posters, signage, full event identity." },
            ].map((s) => (
              <div
                key={s.n}
                className="group p-8 md:p-10 hover:bg-yellow hover:text-ink transition-colors duration-500 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="eyebrow opacity-60">{s.n}</span>
                  <span className="opacity-60 group-hover:rotate-45 transition-transform duration-500">
                    ↗
                  </span>
                </div>
                <p className="font-display text-2xl md:text-3xl mb-2">{s.t}</p>
                <p className="text-sm opacity-70">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-cream/80 hover:text-yellow border-b border-cream/20 hover:border-yellow pb-1 transition-all"
            >
              All services <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <DesignGallery />

      <Contact />
    </div>
  );
}

export default Home;
