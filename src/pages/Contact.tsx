import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Let's build something impactful" },
//       { name: "description", content: "Start a brand identity, event or design project with the studio. Currently booking Q3." },
//       { property: "og:title", content: "Contact — Let's build something impactful" },
//       { property: "og:description", content: "Start a brand identity or event project with the studio." },
//     ],
//   }),
//   component: Contact,
// });

function Contact() {
  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col">
      <SiteHeader />

      <section className="flex-1 pt-40 md:pt-48 pb-24">
        <div className="mx-auto max-w-400 px-6 md:px-10">
          <p className="eyebrow text-ink/60 mb-8">— Get in touch</p>
          <h1 className="display-xl text-[clamp(2.5rem,10vw,10rem)] max-w-6xl">
            Let&apos;s build something{" "}
            <em className="not-italic relative inline-block">
              <span className="relative z-10">impactful.</span>
              <span
                className="absolute inset-x-0 bottom-2 h-6 md:h-12 bg-yellow z-0"
                aria-hidden
              />
            </em>
          </h1>

          <div className="mt-20 grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <p className="eyebrow text-ink/50 mb-3">Direct</p>
              <a
                href="mailto:hello@studio.design"
                className="font-display text-3xl md:text-4xl block hover:text-yellow transition-colors"
              >
                hello@studio.design
              </a>
              <p className="mt-12 eyebrow text-ink/50 mb-3">Response</p>
              <p className="text-ink/70">Within 24 hours, weekdays.</p>
              <p className="mt-12 eyebrow text-ink/50 mb-3">Availability</p>
              <p className="text-ink/70">Booking new projects for Q3 — 2 slots remaining.</p>
            </div>

            <form
              className="col-span-12 md:col-span-7 grid grid-cols-2 gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="col-span-1">
                <label className="eyebrow text-ink/50 block mb-2">Name</label>
                <input className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-yellow transition-colors" />
              </div>
              <div className="col-span-1">
                <label className="eyebrow text-ink/50 block mb-2">Company</label>
                <input className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-yellow transition-colors" />
              </div>
              <div className="col-span-2">
                <label className="eyebrow text-ink/50 block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-yellow transition-colors"
                />
              </div>
              <div className="col-span-2">
                <label className="eyebrow text-ink/50 block mb-2">Project Type</label>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Brand Identity", "Social Design", "Print", "Event", "Other"].map((t) => (
                    <button
                      type="button"
                      key={t}
                      className="px-4 py-2 text-sm border border-ink/30 hover:bg-ink hover:text-cream transition-colors"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <label className="eyebrow text-ink/50 block mb-2">Tell us about it</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-ink/30 py-3 focus:outline-none focus:border-yellow transition-colors resize-none"
                />
              </div>
              <button className="col-span-2 mt-6 inline-flex items-center justify-center gap-3 bg-ink text-cream px-7 py-4 hover:bg-yellow hover:text-ink transition-colors">
                Send brief <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default Contact;
