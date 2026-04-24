import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { Link } from "react-router-dom";
import { SelectedWorks } from "../components/SelectedWorks";
import { SiteFooter } from "../components/SiteFooter";

// export const Route = createFileRoute("/lab")({
//   head: () => ({
//     meta: [
//       { title: "Lab — Designing Brands for the Digital World" },
//       { name: "description", content: "Modern brand identity & digital visual design — a futuristic showcase by TOBOU Charmel." },
//       { property: "og:title", content: "Lab — Designing Brands for the Digital World" },
//       { property: "og:description", content: "Modern brand identity & digital visual design — a futuristic showcase." },
//     ],
//   }),
//   component: Lab,
// });

function Lab() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const px = (mouse.x - 0.5) * 2; // -1..1
  const py = (mouse.y - 0.5) * 2;

  return (
    <div className="min-h-screen bg-ink text-cream">
      <SiteHeader forceDark />

      <section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden flex items-center pt-32 pb-24"
      >
        {/* Dynamic yellow light follows cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute w-[80vw] h-[80vw] rounded-full opacity-40 blur-[120px] transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, var(--yellow) 0%, transparent 60%)",
            top: `${20 + py * 8}%`,
            left: `${30 + px * 12}%`,
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.15}px)`,
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-40 w-[50vw] h-[50vw] rounded-full opacity-20 blur-[140px]"
          style={{ background: "radial-gradient(circle, var(--yellow) 0%, transparent 70%)" }}
        />

        {/* Grid overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--cream) 1px, transparent 1px), linear-gradient(90deg, var(--cream) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />

        {/* Floating 3D shapes */}
        <div
          aria-hidden
          className="absolute top-24 right-[8%] w-32 h-32 md:w-48 md:h-48 transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${px * 30}px, ${py * 30 - scrollY * 0.25}px) rotate(${
              px * 20
            }deg)`,
          }}
        >
          <div className="w-full h-full rounded-full border border-yellow/40 backdrop-blur-sm bg-yellow/5" />
          <div className="absolute inset-4 rounded-full border border-yellow/20" />
          <div className="absolute inset-10 rounded-full bg-yellow/30 blur-xl" />
        </div>

        <div
          aria-hidden
          className="absolute bottom-32 left-[6%] w-24 h-24 md:w-36 md:h-36 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-px * 40}px, ${-py * 25 - scrollY * 0.15}px) rotate(${
              -px * 15 + 45
            }deg)`,
          }}
        >
          <div className="w-full h-full border border-cream/20 backdrop-blur-md bg-cream/5 rotate-12" />
        </div>

        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow shadow-[0_0_40px_10px_var(--yellow)] transition-all duration-500"
          style={{
            transform: `translate(${px * 100 - 50}%, ${py * 100 - 50}%)`,
          }}
        />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-400 px-6 md:px-10 w-full grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-9">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/50 mb-10 reveal">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow shadow-[0_0_12px_var(--yellow)] animate-pulse" />
              Lab · Digital Edition · 2025
            </p>

            <h1
              className="font-display font-medium leading-[0.9] tracking-[-0.04em] text-[clamp(2.75rem,9vw,9.5rem)] reveal"
              style={{
                animationDelay: "0.1s",
                transform: `translate(${px * 6}px, ${py * 4}px)`,
                textShadow: "0 0 60px rgba(0,0,0,0.4)",
                transition: "transform 0.5s ease-out",
              }}
            >
              Designing brands
              <br />
              for the{" "}
              <span className="relative inline-block">
                <span
                  className="relative z-10 text-yellow"
                  style={{ textShadow: "0 0 30px var(--yellow), 0 0 80px var(--yellow)" }}
                >
                  digital
                </span>
              </span>{" "}
              world.
            </h1>

            <p
              className="mt-10 text-cream/70 text-lg md:text-xl font-light tracking-wide reveal"
              style={{ animationDelay: "0.3s" }}
            >
              Graphic Designer <span className="text-yellow">·</span> Brand Identity{" "}
              <span className="text-yellow">·</span> Digital Visuals
            </p>

            <div
              className="mt-12 flex flex-wrap items-center gap-6 reveal"
              style={{ animationDelay: "0.45s" }}
            >
              <Link
                to="/work"
                className="group relative inline-flex items-center gap-3 bg-yellow text-ink px-8 py-4 font-medium overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_-5px_var(--yellow)] hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">View Projects</span>
                <span
                  aria-hidden
                  className="relative transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                to="/contact"
                className="text-sm text-cream/70 hover:text-yellow border-b border-cream/20 hover:border-yellow pb-1 transition-colors"
              >
                Or start a conversation ↗
              </Link>
            </div>
          </div>

          {/* Right meta column */}
          <aside
            className="hidden md:block col-span-3 text-right space-y-6 reveal"
            style={{
              animationDelay: "0.5s",
              transform: `translateY(${-scrollY * 0.1}px)`,
            }}
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-2">Coords</p>
              <p className="font-mono text-xs text-cream/80">
                {(mouse.x * 100).toFixed(1)} / {(mouse.y * 100).toFixed(1)}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-2">Status</p>
              <p className="font-mono text-xs text-yellow">● Online</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-2">Index</p>
              <p className="font-display text-3xl">001</p>
            </div>
          </aside>
        </div>

        {/* Bottom ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-cream/10 bg-ink/40 backdrop-blur-md">
          <div className="mx-auto max-w-400 px-6 md:px-10 py-4 flex justify-between items-center text-[11px] uppercase tracking-[0.25em] text-cream/50">
            <span>Scroll to explore</span>
            <span className="hidden md:inline animate-pulse">▼</span>
            <span>TOBOU Charmel — Independent Designer</span>
          </div>
        </div>
      </section>

      {/* Following showcase strip */}
      <section className="py-32 border-t border-cream/10 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, var(--yellow) 0%, transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-400 px-6 md:px-10 grid grid-cols-12 gap-8">
          <p className="col-span-12 md:col-span-3 text-xs uppercase tracking-[0.3em] text-yellow">
            — Capabilities
          </p>
          <div className="col-span-12 md:col-span-9">
            <p className="font-display text-3xl md:text-5xl leading-tight">
              Brand systems engineered for screens, scale and speed — built where{" "}
              <span className="text-yellow">design meets digital</span>.
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-3 mt-12 text-cream/80 hover:text-yellow border-b border-cream/20 hover:border-yellow pb-1 transition-colors"
            >
              See selected projects ↗
            </Link>
          </div>
        </div>
      </section>

      <SelectedWorks />

      <SiteFooter />
    </div>
  );
}

export default Lab;
