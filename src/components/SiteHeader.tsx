import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { TranslationKey } from "../i18n/translations";
import { useT } from "../i18n/LanguageContext";

const links: { href: string; key: TranslationKey }[] = [
  { href: "#services", key: "nav.services" },
  { href: "#projets", key: "nav.projets" },
  { href: "#a-propos", key: "nav.about" },
  { href: "#contact", key: "nav.contact" },
];

const scrollToElement = (href: string) => {
  if (href === "#top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const el = document.querySelector(href);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }
};

export function SiteHeader({ forceDark = false }: { forceDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, toggle } = useT();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // Si on n'est pas sur la page d'accueil, naviguer vers l'accueil avec l'ancre
      navigate("/" + href);
    } else {
      // Si on est sur la page d'accueil, scroll vers la section
      scrollToElement(href);
    }
  };

  useEffect(() => {
    // Scroll vers l'ancre après navigation
    if (location.pathname === "/" && location.hash) {
      setTimeout(() => scrollToElement(location.hash), 100);
    }
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = forceDark && !scrolled;
  const textBase = dark ? "text-white hover:text-light" : "text-white hover:text-light";
  // const activeText = dark ? "text-light font-medium" : "text-black font-medium";
  const wordmarkColor = dark ? "text-yellow" : "text-white";

  const langBtnBase =
    "inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] border transition-colors";
  const langBtnDark = "border-white/50 text-white/80 hover:border-yellow hover:text-yellow";
  const langBtnLight = "border-white/50 text-white/80 hover:border-yellow hover:te xt-black";

  return (
    <header
      className={`fixed bg-black top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md border-b border-white/10" : "text-wh ite"
      }`}
    >
      <div className="mx-auto flex max-w -400 items-center justify-between px-8 md:px-16 xl:px-43 2xl:px-56 py-5">
        <Link to="/" className="flex items-center gap-2 group">
          {/* <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow group-hover:scale-125 transition-transform" /> */}
          <span
            className={`font-display text-base font-semibold tracking-tight ${
              scrolled ? "text-white" : wordmarkColor
            }`}
          >
            Charmel {" "} <span className="text-yellow">TOBOU</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleScrollTo(e, l.href)}
              className={`relative px-4 py-2 text-sm transition-colors cursor-pointer ${
                scrolled ? "text-white/70 hover:text-yellow" : textBase
              }`}
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className={`cursor-pointer ${langBtnBase} ${
              scrolled ? langBtnLight : dark ? langBtnDark : langBtnLight
            }`}
          >
            <span className={lang === "en" ? "text-yellow" : "text-white"}>EN</span>
            <span className="opacity-70">/</span>
            <span className={lang === "fr" ? "text-yellow" : ""}>FR</span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className={`inline-flex items-center gap-2 px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
              dark
                ? "bg-yellow text-black hover:bg-light"
                : "bg- border border-yellow text-yellow hover:bg-yellow hover:text-black"
            }`}
          >
            {t("header.cta")}
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className={`${langBtnBase} ${dark && !scrolled ? langBtnDark : langBtnLight}`}
          >
            {lang.toUpperCase()}
          </button>
          <button
            className="flex flex-col gap-2 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span
              className={`h-px w-6 transition-transform duration-300 bg-white ${
                open ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 transition-transform duration-300 bg-white ${
                open ? "translate-y-[-4.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                handleScrollTo(e, l.href);
                setOpen(false);
              }}
              className="font-display text-3xl text-white hover:text-yellow transition-colors"
            >
              {t(l.key)}
            </a>
          ))}

          <div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:gap-3 hover:shadow-(--shadow-yellow) bg-yellow "
            >
              {t("v2hero.cta.project")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
