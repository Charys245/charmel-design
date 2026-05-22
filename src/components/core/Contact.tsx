import { motion } from "framer-motion";
import { Container } from "./Container";
import { Heading, Text } from "./Typography";
import { useT } from "../../i18n/LanguageContext";

function Contact() {
  const { t } = useT();
  const WHATSAPP_URL = "https://wa.me/22901660118";

  return (
    <Container className="bg-surface">
      <section id="contact" className=" text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          {/* Côté gauche - Titre */}
          <div>
            <Heading as="h1" className="text-white font-bold">
              {t("contact.title")}{" "}
              <span className="text-yellow">{t("contact.title.em")}</span>
            </Heading>
          </div>

          {/* Côté droit - Informations de contact */}
          <div className="space-y-4 md:space-y-10">
            {/* Email */}
            <div>
              <p className="eyebrow text-white/50 mb-2">{t("contact.email")}</p>
              <a
                href="mailto:ccharmel11@gmail.com"
                className="text-xl md:text-2xl text-white hover:text-yellow transition-colors"
              >
                ccharmel11@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div>
              <p className="eyebrow text-white/50 mb-2">{t("contact.whatsapp")}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl md:text-2xl text-white hover:text-yellow transition-colors"
              >
                +229 01 66 01 66 18
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="eyebrow text-white/50 mb-2">{t("contact.social")}</p>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/charmel_tobou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.behance.net/charmeltobou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow transition-colors"
                >
                  Behance
                </a>
              </div>
            </div>

            {/* Bouton WhatsApp */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-yellow text-black px-8 py-3 md:py-4 rounded font-bold tracking-wider uppercase transition-shadow hover:shadow-[0_10px_40px_rgba(255,215,0,0.3)]"
              >
                <svg
                  className="w-5 h-5 transition-transform group-hover:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <Text>{t("contact.cta")}</Text>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Contact;
