import { Link } from "react-router-dom";
import { Heading } from "./core/Typography";
import { useT } from "../i18n/LanguageContext";

export function SiteFooter() {
  const { t } = useT();

  return (
    <footer className="bg-black text-light relative overflow-hidden">
      <section className="px-8 md:px-16 xl:px-43 2xl:px-56">
        <div className="mx-auto max-w-400 pt-24 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <Heading as="h2" className="text-light font-bold">
                {t("ft.title")} <br className="hidden lg:block " />
                <span className="text-yellow">{t("ft.title.em")}</span>
              </Heading>
              <a
                href="mailto:ccharmel11@gmail.com"
                className="inline-flex items-center gap-3 mt-4 md:mt-10 text-light border-b border-light/30 pb-2 hover:text-yellow hover:border-yellow transition-colors"
              >
                <span className="text-lg">ccharmel11@gmail.com</span>
                <span aria-hidden>↗</span>
              </a>
            </div>

            <div className="md:col-span-5 grid grid-cols-2 gap-8">
              <div>
                <p className="eyebrow text-light/40 mb-4">{t("ft.nav")}</p>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="#services" className="hover:text-yellow transition-colors">
                      {t("ft.services")}
                    </a>
                  </li>

                  <li>
                    <Link to="/" className="hover:text-yellow transition-colors">
                      {t("ft.projects")}
                    </Link>
                  </li>

                  <li>
                    <a href="#projets" className="hover:text-yellow transition-colors">
                      {t("ft.about")}
                    </a>
                  </li>

                  <li>
                    <a href="#contact" className="hover:text-yellow transition-colors">
                      {t("ft.contact")}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="eyebrow text-light/40 mb-4">{t("ft.elsewhere")}</p>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a
                      href="https://www.facebook.com/charmelcayrlus"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/charmel_tobou/"
                      className="hover:text-yellow transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.behance.net/charmeltobou"
                      className="hover:text-yellow transition-colors"
                    >
                      Behance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-24 pt-8 border-t border-light/15 flex flex-col md:flex-row justify-between gap-4 text-xs text-light/50">
            <p>
              © {new Date().getFullYear()} {t("ft.copy")}
            </p>
            <p>{t("ft.availability")}</p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-t border-light/10">
        <div className="marquee-container whitespace-nowrap py-8 flex gap-16 font-display text-[18vw] leading-none text-light/5 font-bold">
          <span>{t("ft.marquee")}</span>
          <span>{t("ft.marquee")}</span>
        </div>
      </div>
    </footer>
  );
}
