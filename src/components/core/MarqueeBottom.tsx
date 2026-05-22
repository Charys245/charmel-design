import React from "react";
import { useT } from "../../i18n/LanguageContext";

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-12">
      {children}
      <span className="text-yellow text-lg">✴</span>
    </span>
  );
}

const MarqueeBottom = () => {
  const { t } = useT();

  return (
    <div>
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
    </div>
  );
};

export default MarqueeBottom;
