import { ArrowUpRight } from "lucide-react";
import work1 from "@/assets/work-renaissance.webp";
import work2 from "@/assets/work-youtube.webp";
import work3 from "@/assets/work-crypto.webp";
import work4 from "@/assets/work-sevenz.webp";
import { Heading, Text } from "./core/Typography";
import { useT } from "../i18n/LanguageContext";
import FloatingCards from "./core/FloatingCards";

export function V3Hero() {
  const { t } = useT();
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-foreground">
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

      {/* Hero content */}
      <section className="relative z-10 grid grid-cols-1 items-center gap-12 py-0 pb-24 pt-12 lg:grid-cols-12 lg:gap-8 lg:pb-32 lg:pt-36 px-8 md:px-16 xl:px-43 2xl:px-56">
        {/* LEFT — text */}
        <div className="lg:col-span-7">
          <div className="mb-16"></div>

          <Heading
            as="h1"
            className="animate-hero-rise font-bold text-white"
            style={{ animationDelay: "0.15s" }}
          >
            {t("v2hero.headline.1")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow ">{t("v2hero.headline.2")}</span>
            </span>{" "}
            <br className="hidden sm:block" />
            {t("v2hero.headline.3")} <br className="hidden sm:block" />
            {t("v2hero.headline.4")} <span className="text-yellow">{t("v2hero.headline.5")}</span>
          </Heading>

          <Text
            className="animate-hero-rise mt-5 md:mt-8 max-w-xl text-white/60"
            style={{ animationDelay: "0.3s" }}
          >
            {t("v2hero.subtitle")}
          </Text>

          <div
            className="animate-hero-rise mt-6 md:mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="work"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-3 hover:shadow-(--shadow-yellow) bg-yellow "
            >
              {t("v2hero.cta.work")}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-yellow"
            >
              {t("v2hero.cta.project")}
            </a>
          </div>
        </div>

        {/* RIGHT — visual collage */}
        <div className="relative lg:col-span-5">
          <div
            className="animate-hero-rise relative aspect-4/5 w-full lg:max-w-120"
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
              Designer
            </div>
          </div>

          <FloatingCards />
        </div>
      </section>

      {/* Marquee bottom */}
      <div className="relative z-10 border-y border-white/20 bg-black py-5 backdrop-blur overflow-hidden">
        <div className="flex marquee-container">
          {/* Duplicate content for seamless loop */}
          {[0, 1].map((groupIndex) => (
            <div
              key={groupIndex}
              className="flex shrink-0 items-center gap-12 pr-12 font-display text-sm font-medium uppercase tracking-widest text-white/60"
            >
              <Tag>{t("v2hero.tag.identity")}</Tag>
              <Tag>{t("v2hero.tag.logo")}</Tag>
              <Tag>{t("v2hero.tag.social")}</Tag>
              <Tag>{t("v2hero.tag.event")}</Tag>
              <Tag>{t("v2hero.tag.direction")}</Tag>
              <Tag>{t("v2hero.tag.print")}</Tag>
            </div>
          ))}
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
      <span className="text-yellow text-lg">✴</span>
    </span>
  );
}
