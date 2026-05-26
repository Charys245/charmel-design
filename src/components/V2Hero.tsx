import { ArrowUpRight } from "lucide-react";
import { Heading, Text } from "./core/Typography";
import { useT } from "../i18n/LanguageContext";
import FloatingCards from "./core/FloatingCards";

export function V2Hero() {
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
      <section className="relative z-10 grid grid-cols-1 items-center gap-12 py-0 pb-12 pt-12  lg:gap-8 lg:pt-20 px-8 md:px-16 xl:px-43 2xl:px-56">

        {/* LEFT — text */}
        <div className="text-center flex justify-center flex-col items-center">
          <div className="mb-16"></div>

          <Heading
            as="h1"
            className="animate-hero-rise font-bold text-white text-center"
            style={{ animationDelay: "0.15s" }}
          >
            {t("v2hero.headline.1")}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-yellow ">{t("v2hero.headline.2")}</span>
            </span>{" "}
            <br className="hidden sm:block" />
            {t("v2hero.headline.3")} 
            <br className="hidden sm:block" />
            {t("v2hero.headline.4")} <span className="text-yellow">{t("v2hero.headline.5")}</span>
          </Heading>

          <Text
            className="animate-hero-rise mt-4 max-w-2xl text-white/60"
            style={{ animationDelay: "0.3s" }}
          >
            {t("v2hero.subtitle")}
          </Text>

          <div
            className="animate-hero-rise mt-6 flex flex-wrap items-center justify-center gap-4"
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

        <FloatingCards />
      </section>

      {/* Marquee bottom */}
      <div className="relative z-10 border-y border-white/20 bg-black py-5 backdrop-blur overflow-hidden">
        <div className="flex marquee-tags">
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
