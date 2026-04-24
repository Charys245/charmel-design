import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-bodygoal.jpg";
import work2 from "@/assets/work-bodygoal.jpg";
import work3 from "@/assets/work-bodygoal.jpg";
import work4 from "@/assets/work-bodygoal.jpg";

export function V2Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-foreground">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(var(--hero-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid-line) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* Yellow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/3 h-125 w-125 rounded-full bg-primary/10 blur-3xl"
      />

      {/* Top nav */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-sm bg-primary" />
          <span className="font-display text-lg font-bold tracking-tight">
            studio<span className="text-primary">.</span>
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary md:inline-flex"
        >
          Let's talk
        </a>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-12 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-32 lg:pt-20">
        {/* LEFT — text */}
        <div className="lg:col-span-7">
          <div className="mb-16"></div>

          <h1
            className="animate-hero-rise font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl xl:text-[88px] text-white"
            style={{ animationDelay: "0.15s" }}
          >
            I design{" "}
            <span className="relative inline-block">
              <span className="relative z-10">visuals</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 z-0 h-3 bg-primary/80 lg:bottom-2 lg:h-4"
              />
            </span>{" "}
            that help <br className="hidden sm:block" />
            brands <span className="text-yellow">grow.</span>
          </h1>

          <p
            className="animate-hero-rise mt-8 max-w-xl text-base text-white/60 sm:text-lg"
            style={{ animationDelay: "0.3s" }}
          >
            Brand Designer & Graphic Designer — building logos, social media systems, and event
            visuals that turn attention into trust.
          </p>

          <div
            className="animate-hero-rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-3 hover:shadow-(--shadow-yellow) bg-yellow "
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-yellow"
            >
              Start a project
            </a>
          </div>

          {/* <div
            className="animate-hero-rise mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
            style={{ animationDelay: "0.6s" }}
          >
            <Stat value="80+" label="Brands" />
            <Stat value="6yrs" label="Experience" />
            <Stat value="100%" label="On time" />
          </div> */}
        </div>

        {/* RIGHT — visual collage */}
        <div className="relative lg:col-span-5">
          <div
            className="animate-hero-rise relative mx-auto aspect-4/5 w-full max-w-120"
            style={{ animationDelay: "0.35s" }}
          >
            {/* Main image */}
            <div className="absolute left-0 top-0 h-[62%] w-[62%] overflow-hidden rounded-2xl border border-border shadow-2xl animate-float-slow">
              <img
                src={work1}
                alt="Brand identity design — logo system"
                width={768}
                height={960}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Top-right image */}
            <div
              className="absolute right-0 top-[8%] h-[38%] w-[42%] overflow-hidden rounded-2xl border border-border shadow-xl animate-float-slow"
              style={{ animationDelay: "1.5s" }}
            >
              <img
                src={work2}
                alt="Social media design"
                width={768}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom-right image */}
            <div
              className="absolute bottom-0 right-[4%] h-[48%] w-[55%] overflow-hidden rounded-2xl border border-border shadow-2xl animate-float-slow"
              style={{ animationDelay: "2.5s" }}
            >
              <img
                src={work3}
                alt="Event poster design"
                width={768}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Bottom-left image */}
            <div
              className="absolute bottom-[6%] left-[2%] h-[34%] w-[38%] overflow-hidden rounded-2xl border border-border shadow-xl animate-float-slow"
              style={{ animationDelay: "0.8s" }}
            >
              <img
                src={work4}
                alt="Brand stationery"
                width={768}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Yellow accent badge */}
            <div className="absolute -right-4 top-1/2 z-10 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-center text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-(--shadow-yellow) md:-right-6 md:h-24 md:w-24 md:text-xs">
              Brand
              <br />
              Studio
            </div>
          </div>
        </div>
      </div>

      {/* Marquee bottom */}
      <div className="relative z-10 border-y border-white/20 bg-ink py-5 backdrop-blur">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12 font-display text-sm font-medium uppercase tracking-widest text-white/60 ">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <Tag>Brand Identity</Tag>
                <Tag>Logo Design</Tag>
                <Tag>Social Media</Tag>
                <Tag>Event Visuals</Tag>
                <Tag>Art Direction</Tag>
                <Tag>Print</Tag>
              </span>
            ))}
          </div>

          <div
            aria-hidden
            className="flex shrink-0 animate-marquee items-center gap-12 pr-12 font-display text-sm font-medium uppercase tracking-widest text-white/60"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center gap-12">
                <Tag>Brand Identity</Tag>
                <Tag>Logo Design</Tag>
                <Tag>Social Media</Tag>
                <Tag>Event Visuals</Tag>
                <Tag>Art Direction</Tag>
                <Tag>Print</Tag>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// function Stat({ value, label }: { value: string; label: string }) {
//   return (
//     <div>
//       <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">{value}</div>
//       <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
//     </div>
//   );
// }

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-12">
      {children}
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
    </span>
  );
}
