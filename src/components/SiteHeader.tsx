
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { TranslationKey } from "../i18n/translations";
import { useT } from "../i18n/LanguageContext";

const links: { to: string; key: TranslationKey }[] = [
  { to: "/", key: "nav.index" },
  { to: "/work", key: "nav.work" },
  { to: "/studio", key: "nav.studio" },
  { to: "/services", key: "nav.services" },
  { to: "/contact", key: "nav.contact" },
];

export function SiteHeader({ forceDark = false }: { forceDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, lang, toggle } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = forceDark && !scrolled;
  const textBase = dark ? "text-cream/70 hover:text-cream" : "text-ink/70 hover:text-ink";
  // const activeText = dark ? "text-cream font-medium" : "text-ink font-medium";
  const wordmarkColor = dark ? "text-cream" : "text-ink";

  const langBtnBase =
    "inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] border transition-colors";
  const langBtnDark = "border-cream/30 text-cream/80 hover:border-yellow hover:text-yellow";
  const langBtnLight = "border-ink/25 text-ink/70 hover:border-ink hover:text-ink";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-400 items-center justify-between px-6 md:px-10 py-5">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-yellow group-hover:scale-125 transition-transform" />
          <span className={`font-display text-base font-semibold tracking-tight ${scrolled ? "text-ink" : wordmarkColor}`}>
            Studio<span className="text-yellow">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 text-sm transition-colors ${scrolled ? "text-ink/70 hover:text-ink" : textBase}`}
              // activeProps={{ className: scrolled ? "text-ink font-medium" : activeText }}
              // activeOptions={{ exact: l.to === "/" }}
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle language"
            className={`${langBtnBase} ${scrolled ? langBtnLight : dark ? langBtnDark : langBtnLight}`}
          >
            <span className={lang === "en" ? "text-yellow" : ""}>EN</span>
            <span className="opacity-40">/</span>
            <span className={lang === "fr" ? "text-yellow" : ""}>FR</span>
          </button>

          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              dark ? "bg-yellow text-ink hover:bg-cream" : "bg-ink text-cream hover:bg-yellow hover:text-ink"
            }`}
          >
            {t("header.cta")}
            <span aria-hidden>→</span>
          </Link>
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
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`h-px w-6 transition-transform ${dark && !scrolled ? "bg-cream" : "bg-ink"} ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-px w-6 transition-opacity ${dark && !scrolled ? "bg-cream" : "bg-ink"} ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-6 transition-transform ${dark && !scrolled ? "bg-cream" : "bg-ink"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-ink/10 px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-ink"
            >
              {t(l.key)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
