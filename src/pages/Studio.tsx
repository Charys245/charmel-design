import { Link } from "react-router-dom";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

// export const Route = createFileRoute("/studio")({
//   head: () => ({
//     meta: [
//       { title: "Studio — About & Approach" },
//       { name: "description", content: "An independent brand designer building visual systems for ambitious companies. Strategy-led, craft-obsessed." },
//       { property: "og:title", content: "Studio — About & Approach" },
//       { property: "og:description", content: "Strategy-led, craft-obsessed brand design for ambitious companies." },
//     ],
//   }),
//   component: Studio,
// });

const timeline = [
  {
    year: "2020",
    title: "Freelance Graphic Designer",
    body: "Started independent practice — branding for founders & creators.",
  },
  {
    year: "2022",
    title: "ComeUp Designer",
    body: "Top-rated designer on the platform, shipping 200+ premium projects.",
  },
  {
    year: "2023",
    title: "Lead Designer · Events",
    body: "Art direction for Renaissance Entrepreneuriale and SCAJ festival.",
  },
  {
    year: "2024",
    title: "Brand Systems for Capital",
    body: "Identities for SCI KP Capital and Continium Capital.",
  },
  { year: "2025", title: "Studio Era", body: "Now operating as a full brand & identity studio." },
];

function Studio() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteHeader />

      <section className="pt-40 md:pt-48 pb-20 md:pb-28">
        <div className="mx-auto max-w-400 px-6 md:px-10">
          <p className="eyebrow text-ink/60 mb-8">— The Studio</p>
          <h1 className="display-xl text-[clamp(2.5rem,9vw,9rem)] max-w-6xl">
            A design practice for <em className="not-italic text-yellow/90">brand builders.</em>
          </h1>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-400 px-6 md:px-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow text-ink/50 mb-4">Vision</p>
            <p className="font-display text-2xl leading-tight">
              A new generation of design — strategic, editorial, built to scale.
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-6 text-ink/75 text-lg leading-relaxed">
            <p>
              I work at the intersection of <strong className="text-ink">strategy and craft</strong>
              . I treat brand as infrastructure — the foundation every product, campaign and
              conversation builds on.
            </p>
            <p>
              From early-stage founders to capital firms and cultural events, I design visual
              systems that hold up under scale, scrutiny and time. No templates. No trends. Just
              clear thinking, made visible.
            </p>
            <p>Trusted by 40+ clients across finance, sport, wellness, crypto and entertainment.</p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-ink text-cream py-24 md:py-32">
        <div className="mx-auto max-w-400 px-6 md:px-10">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="eyebrow text-yellow mb-4">— Trajectory</p>
              <h2 className="display-xl text-[clamp(2.5rem,6vw,5rem)] text-cream">
                Five years, one obsession.
              </h2>
            </div>
          </div>
          <div className="border-t border-cream/15">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className="grid grid-cols-12 gap-6 py-8 md:py-10 border-b border-cream/15 group hover:bg-yellow hover:text-ink transition-colors duration-500 px-2 -mx-2 cursor-default"
              >
                <span className="col-span-2 md:col-span-1 eyebrow opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 md:col-span-2 font-display text-2xl">{t.year}</span>
                <p className="col-span-12 md:col-span-4 font-display text-2xl">{t.title}</p>
                <p className="col-span-12 md:col-span-5 opacity-70 group-hover:opacity-100 max-w-md">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-400 px-6 md:px-10 text-center">
          <p className="eyebrow text-ink/60 mb-6">— Currently</p>
          <p className="font-display text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
            Booking new <span className="text-yellow">brand identity</span> projects for Q3 —
            limited slots.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-ink text-cream px-7 py-4 hover:bg-yellow hover:text-ink transition-colors"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}


export default Studio;