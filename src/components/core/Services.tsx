import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Heading, Text } from "./Typography";
import { useT } from "../../i18n/LanguageContext";

function Services() {
  const { t } = useT();

  const services = [
    {
      n: "01",
      titleKey: "services.01.title" as const,
      bodyKey: "services.01.body" as const,
      deliverableKeys: [
        "services.01.d1" as const,
        "services.01.d2" as const,
        "services.01.d3" as const,
        "services.01.d4" as const,
      ],
    },
    {
      n: "02",
      titleKey: "services.02.title" as const,
      bodyKey: "services.02.body" as const,
      deliverableKeys: [
        "services.02.d1" as const,
        "services.02.d2" as const,
        "services.02.d3" as const,
        "services.02.d4" as const,
      ],
    },
    {
      n: "03",
      titleKey: "services.03.title" as const,
      bodyKey: "services.03.body" as const,
      deliverableKeys: [
        "services.03.d1" as const,
        "services.03.d2" as const,
        "services.03.d3" as const,
        "services.03.d4" as const,
      ],
    },
    {
      n: "04",
      titleKey: "services.04.title" as const,
      bodyKey: "services.04.body" as const,
      deliverableKeys: [
        "services.04.d1" as const,
        "services.04.d2" as const,
        "services.04.d3" as const,
        "services.04.d4" as const,
      ],
    },
  ];

  return (
    <Container className="bg-black">
      <section id="services" className="bg-black text-light">

        <section className="pb-12 md:pb-16">
          <div className="mx-auto max-w-400">
            <Heading as="h1" className="font-bold">
              {t("services.title")} <span className="text-yellow">{t("services.title.em")}</span>
            </Heading>
            <Text className="mt-6 md:mt-8 max-w-xl text-light/70">
              {t("services.intro")}
            </Text>
          </div>
        </section>

        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-400">
            <div className="border-t border-light/20">
              {services.map((s) => (
                <div
                  key={s.n}
                  className="grid grid-cols-12 gap-6 py-12 md:py-16 border-b border-light/20 group"
                >
                  <span className="col-span-2 md:col-span-1 eyebrow text-light/50">{s.n}</span>
                  <div className="col-span-10 md:col-span-5">
                    <h2 className="font-display text-3xl md:text-5xl tracking-tight group-hover:text-yellow transition-colors">
                      {t(s.titleKey)}
                    </h2>
                    <p className="text-light/70 mt-4 max-w-md">{t(s.bodyKey)}</p>
                  </div>
                  <ul className="col-span-12 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 md:pl-12">
                    {s.deliverableKeys.map((key) => (
                      <li key={key} className="flex items-start gap-3 text-light/80">
                        <span className="text-yellow mt-1.5 text-xs">●</span>
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black text-light">

          <div className="mx-auto max-w-400 text-center">
            <p className="eyebrow text-yellow mb-6">{t("services.process")}</p>
            <p className="font-display text-3xl md:text-5xl max-w-4xl mx-auto leading-tight">
              {t("services.process.text")}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-12 bg-yellow text-black px-7 py-4 hover:bg-light transition-colors"
            >
              {t("services.cta")} <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </section>
    </Container>
  );
}

export default Services;
