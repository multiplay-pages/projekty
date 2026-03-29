import { projects } from "@/data/projects";
import { FeaturedProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="wyrozniione" className="py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-10">
          <SectionHeader
            title="Wyróżnione projekty"
            subtitle="Najważniejsze narzędzia i zasoby w bieżącym użyciu."
            accent
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
          {featured.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
