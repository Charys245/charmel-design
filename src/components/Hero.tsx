
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HEADLINE = ["I DESIGN", "VISUAL IDENTITIES", "THAT SELL."];

function GlitchWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span
        className="inline-block animate-[heroReveal_1.1s_cubic-bezier(0.22,1,0.36,1)_both]"
        style={{ animationDelay: `${delay}s` }}
      >
        {text.split("").map((c, i) => (
          <span
            key={i}
            className="inline-block hover:text-yellow hover:-translate-y-1 transition-all duration-300"
            style={{ transitionDelay: `${i * 15}ms` }}
          >
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </span>
    </span>
  );
}

export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }) + " LOCAL",
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen bg-ink text-cream overflow-hidden grain pt-32 md:pt-36 pb-16">
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[60vw] h-[60vw] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--yellow) 0%, transparent 60%)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--yellow) 0%, transparent 70%)" }}
      />

      {/* Top meta strip */}
      <div className="relative mx-auto max-w-400 px-6 md:px-10 flex justify-between items-center text-cream/50 text-xs eyebrow">
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow animate-pulse" />
          Available for Q3
        </span>
        <span className="hidden md:inline">{time}</span>
        <span>Portfolio · v.2025</span>
      </div>

      {/* HEADLINE */}
      <div className="relative mx-auto max-w-400 px-6 md:px-10 mt-16 md:mt-20">
        <h1 className="font-display font-bold uppercase leading-[0.85] tracking-[-0.04em] text-[clamp(3rem,13vw,13rem)]">
          <span className="block">
            <GlitchWord text={HEADLINE[0]} delay={0.05} />
          </span>
          <span className="block md:pl-[10%]">
            <GlitchWord text={HEADLINE[1]} delay={0.2} />
          </span>
          <span className="block">
            <span className="inline-flex items-baseline gap-4 md:gap-8">
              <span
                aria-hidden
                className="inline-block h-3 md:h-6 w-16 md:w-32 bg-yellow translate-y-[-0.2em] animate-[heroReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.6s_both]"
              />
              <span className="text-yellow">
                <GlitchWord text={HEADLINE[2]} delay={0.4} />
              </span>
            </span>
          </span>
        </h1>

        {/* Subtitle + CTAs */}
        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow text-cream/50 mb-3">— Profile</p>
            <p className="font-display text-xl md:text-2xl text-cream/90">
              Brand Designer <span className="text-yellow">•</span> Graphic Designer{" "}
              <span className="text-yellow">•</span> Visual Storyteller
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 flex flex-wrap gap-4 md:justify-end">
            <Link
              to="/work"
              className="group relative inline-flex items-center gap-3 bg-yellow text-ink px-7 py-4 font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-5px_var(--yellow)]"
            >
              <span className="absolute inset-0 bg-cream translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative">Explore Work</span>
              <span aria-hidden className="relative transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border border-cream/30 text-cream px-7 py-4 font-medium hover:border-yellow hover:text-yellow hover:shadow-[0_0_30px_-10px_var(--yellow)] transition-all duration-300"
            >
              <span>Contact Me</span>
              <span aria-hidden className="transition-transform group-hover:rotate-45">↗</span>
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-px bg-cream/10 border-y border-cream/10">
          {[
            { k: "5+", v: "Years designing" },
            { k: "40+", v: "Brands shipped" },
            { k: "300+", v: "Thumbnails" },
            { k: "12", v: "Industries" },
          ].map((s) => (
            <div key={s.v} className="bg-ink p-5 md:p-7 hover:bg-yellow hover:text-ink transition-colors duration-500 group">
              <p className="font-display text-3xl md:text-5xl">{s.k}</p>
              <p className="text-xs md:text-sm text-cream/50 group-hover:text-ink/70 mt-2">{s.v}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes heroReveal {
          0%   { transform: translateY(110%); opacity: 0; }
          60%  { opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
