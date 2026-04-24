import { Link } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

// export const Route = createFileRoute("/services")({
//   head: () => ({
//     meta: [
//       { title: "Services — Brand, Identity, Print, Events" },
//       { name: "description", content: "Brand identity design, social media systems, print branding and event visual identity for ambitious companies." },
//       { property: "og:title", content: "Services — Brand, Identity, Print, Events" },
//       { property: "og:description", content: "Brand identity, social design, print and event branding." },
//     ],
//   }),
//   component: Services,
// });

const services = [
  {
    n: "01",
    title: "Brand Identity Design",
    body: "Logo systems, naming, visual languages and brand guidelines built to last decades, not seasons.",
    deliverables: [
      "Logo & monogram suite",
      "Type & color systems",
      "Brand guidelines book",
      "Brand applications",
    ],
  },
  {
    n: "02",
    title: "Social Media Design",
    body: "Editorial content systems for brands that want to look like a magazine, not a meme page.",
    deliverables: [
      "Templates & frameworks",
      "Content art direction",
      "Carousel design",
      "Brand consistency audit",
    ],
  },
  {
    n: "03",
    title: "Print & Physical Branding",
    body: "Stationery, packaging, signage and merchandise — the tangible expression of your identity.",
    deliverables: ["Stationery suite", "Packaging design", "Signage systems", "Merchandise & swag"],
  },
  {
    n: "04",
    title: "Event Visual Identity",
    body: "End-to-end art direction for conferences, festivals and gatherings — from poster to print to stage.",
    deliverables: [
      "Event identity & key visual",
      "Print collateral & signage",
      "Stage & screen graphics",
      "Social campaign assets",
    ],
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-16 md:pb-24">
        <div className="mx-auto max-w-400 px-6 md:px-10">
          <p className="eyebrow text-ink/60 mb-8">— Capabilities</p>
          <h1 className="display-xl text-[clamp(3rem,10vw,10rem)]">
            What we <em className="not-italic text-yellow/90">do.</em>
          </h1>
          <p className="mt-10 max-w-xl text-ink/70 text-lg">
            Four core practices. One standard: visual systems engineered to compete at the highest
            level.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-400 px-6 md:px-10">
          <div className="border-t border-ink/20">
            {services.map((s) => (
              <div
                key={s.n}
                className="grid grid-cols-12 gap-6 py-12 md:py-16 border-b border-ink/20 group"
              >
                <span className="col-span-2 md:col-span-1 eyebrow text-ink/50">{s.n}</span>
                <div className="col-span-10 md:col-span-5">
                  <h2 className="font-display text-3xl md:text-5xl tracking-tight group-hover:text-yellow transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-ink/70 mt-4 max-w-md">{s.body}</p>
                </div>
                <ul className="col-span-12 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:pl-12">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-ink/80">
                      <span className="text-yellow mt-1.5 text-xs">●</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-24 md:py-32">
        <div className="mx-auto max-w-400 px-6 md:px-10 text-center">
          <p className="eyebrow text-yellow mb-6">— Process</p>
          <p className="font-display text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Discover · Strategize · Design · Deliver. Every project, every time.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-12 bg-yellow text-ink px-7 py-4 hover:bg-cream transition-colors"
          >
            Start a brief <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default Services;
