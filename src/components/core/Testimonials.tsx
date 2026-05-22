import { useEffect, useState } from "react";
import { CheckCheck, MessageSquareQuote } from "lucide-react";
import { Container } from "./Container";
import { Heading } from "./Typography";
import { useT } from "../../i18n/LanguageContext";

const Testimonials = () => {
  const { t } = useT();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      id: 1,
      nameKey: "testimonials.1.name" as const,
      roleKey: "testimonials.1.role" as const,
      messageKey: "testimonials.1.message" as const,
      time: "10:24",
      size: "large",
    },
    {
      id: 2,
      nameKey: "testimonials.2.name" as const,
      roleKey: "testimonials.2.role" as const,
      messageKey: "testimonials.2.message" as const,
      time: "11:05",
      size: "small",
    },
    {
      id: 3,
      nameKey: "testimonials.3.name" as const,
      roleKey: "testimonials.3.role" as const,
      messageKey: "testimonials.3.message" as const,
      time: "14:45",
      size: "medium",
    },
    {
      id: 4,
      nameKey: "testimonials.4.name" as const,
      roleKey: "testimonials.4.role" as const,
      messageKey: "testimonials.4.message" as const,
      time: "16:12",
      size: "medium",
    },
    {
      id: 5,
      nameKey: "testimonials.5.name" as const,
      roleKey: "testimonials.5.role" as const,
      messageKey: "testimonials.5.message" as const,
      time: "09:30",
      size: "small",
    },
    {
      id: 6,
      nameKey: "testimonials.6.name" as const,
      roleKey: "testimonials.6.role" as const,
      messageKey: "testimonials.6.message" as const,
      time: "18:18",
      size: "large",
    },
  ];

  const getGridSpan = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 lg:col-span-2 row-span-2";
      case "medium":
        return "md:col-span-1 row-span-2";
      default:
        return "md:col-span-1 row-span-1";
    }
  };

  return (
    <Container className="min-h-screen bg-surface">
      <div className="  text-zinc-100 font-display selection:bg-yellow-400 selection:text-black">
        {/* Header Section */}
        <div className="mb-8 md:mb-20">
          <Heading as="h1" className="animate-hero-rise font-bold text-white">
            {t("testimonials.title")} <br className="hidden sm:block" />
            <span className="relative z-10 text-yellow">{t("testimonials.title.em")}</span>
          </Heading>
        </div>

        {/* Testimonials Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`group relative flex flex-col justify-between p-8 rounded-[2rem] bg-[#161616] border border-zinc-800/50 hover:border-yellow-500/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl ${getGridSpan(
                item.size,
              )}`}
            >
              {/* Background Decorative Quote */}
              <div className="absolute top-6 right-8 text-zinc-800/20 group-hover:text-yellow-500/5 transition-colors duration-500">
                <MessageSquareQuote size={48} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-zinc-700 to-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400">
                    {t(item.nameKey)
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide">{t(item.nameKey)}</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      {t(item.roleKey)}
                    </p>
                  </div>
                </div>

                <p
                  className={`text-zinc-300 leading-relaxed font-light ${
                    item.size === "large" ? "text-xl" : "text-base"
                  }`}
                >
                  "{t(item.messageKey)}"
                </p>
              </div>

              <div className="mt-8 flex items-center justify-end gap-2">
                <span className="text-[10px] text-zinc-600 font-mono italic">{item.time}</span>
                <CheckCheck size={14} className="text-yellow-500 opacity-80" />
              </div>
            </div>
          ))}

          {/* Call to Action Bubble */}
          <div className="md:col-span-1 lg:col-span-1 row-span-1 flex flex-col items-center justify-center p-8 rounded-[2rem] border-2 border-dashed border-zinc-800 hover:border-yellow-500/50 transition-colors duration-500 group cursor-pointer">
            <p className="text-zinc-500 text-sm mb-4 group-hover:text-yellow-500 transition-colors">
              {t("testimonials.cta")}
            </p>
            <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors">
              {t("testimonials.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
