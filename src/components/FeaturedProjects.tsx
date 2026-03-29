import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="wyrozniione" className="py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-12">
          <div className="mb-3 h-1 w-10 rounded-full bg-gradient-primary" />
          <h2 className="section-heading mb-2">Wyróżnione projekty</h2>
          <p className="section-subheading">
            Najważniejsze narzędzia i zasoby w bieżącym użyciu.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
