import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { ProjectModal } from "../components/ProjectModal";
import { projects, filterOptions, type Category, type Project } from "../data/projects";
import { Container } from "../components/core/Container";
import { Heading, Text } from "../components/core/Typography";
import { useT } from "../i18n/LanguageContext";
import { SEO } from "../components/core/SEO";

function Work() {
  const { t } = useT();
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((p) => p.filterCategory === activeFilter);

  const handleProjectClick = (project: Project) => {
    if (project.hasDetail && project.gallery && project.gallery.length > 0) {
      // Trouver l'index de l'image cliquée dans la galerie
      const index = project.gallery.indexOf(project.image);
      setStartIndex(index >= 0 ? index : 0);
      setSelectedProject(project);
    }
  };

  return (
    <div className="min-h-screen bg-black text-light">
      <SEO
        title="Projets"
        description="Portfolio de projets — Identités visuelles, branding événementiel et design digital pour entrepreneurs, finance, sport et culture."
        ogTitle="Projets · Charmel Tobou"
        ogDescription="Découvrez mes réalisations en design d'identité visuelle et branding."
      />
      <SiteHeader />

      <Container>
        <section className="pt-20 lg:pt-0 pb-8">
          <div className="">
            <Heading
              as="h1"
              className="font-bold reveal"
              style={{ animationDelay: "0.1s" }}
            >
              {t("workpage.title")}
            </Heading>
            <Text
              className="mt-4 md:mt-6 max-w-xl md:max-w-2xl text-light/70 reveal"
              style={{ animationDelay: "0.25s" }}
            >
              {t("workpage.subtitle")}
            </Text>
          </div>
        </section>

        {/* Filters - Sticky */}
        <div className="sticky top-18 z-40 bg-black/95 backdrop-blur-sm py-4 -mx-8 px-8 md:-mx-16 md:px-16 xl:-mx-43 xl:px-43 2xl:-mx-56 2xl:px-56 border-b border-white/10">
          <div className="flex flex-wrap gap-3 reveal" style={{ animationDelay: "0.35s" }}>
            {filterOptions.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                  activeFilter === filter.value
                    ? "bg-yellow text-black"
                    : "bg-light/10 text-light/70 hover:bg-light/20"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <section className="">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {filteredProjects.map((p, i) => (
              <article
                key={p.slug}
                onClick={() => handleProjectClick(p)}
                className={`group ${
                  p.filterCategory === "banner"
                    ? "col-span-12"
                    : p.size === "lg"
                    ? "col-span-12 md:col-span-8"
                    : p.size === "sm"
                    ? "col-span-12 md:col-span-4"
                    : "col-span-12 md:col-span-4"
                } ${p.filterCategory !== "banner" && i % 3 === 1 ? "md:mt-24" : ""} ${
                  p.hasDetail ? "cursor-pointer" : ""
                }`}
              >
                <div className="relative overflow-hidden bg-light/5">
                  <div
                    className={`${
                      p.filterCategory === "banner" ? "aspect-3/1" : "aspect-4/5"
                    } overflow-hidden`}
                  >
                    <img
                      src={p.image}
                      alt={p.client}
                      loading="lazy"
                      width={1200}
                      height={p.filterCategory === "banner" ? 400 : 1500}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between text-light mix-blend-difference">
                    <span className="eyebrow">
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(filteredProjects.length).padStart(2, "0")}
                    </span>
                    <span className="eyebrow">{p.year}</span>
                  </div>
                  {/* Overlay hint for projects with gallery */}
                  {p.hasDetail && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium text-sm tracking-wide">
                        {t("workpage.view")}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <p className="eyebrow text-light/50 mb-2">{p.category}</p>
                    <h3 className="font-display text-xl md:text-2xl">{p.client}</h3>
                    <p className="text-light/60 mt-2 max-w-md text-sm">{p.title}</p>
                  </div>
                  {p.hasDetail && (
                    <span className="font-display text-xl opacity-50 group-hover:opacity-100 group-hover:text-yellow group-hover:translate-x-1 transition-all">
                      +
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        startIndex={startIndex}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Work;
