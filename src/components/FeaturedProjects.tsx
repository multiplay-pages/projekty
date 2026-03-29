import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="wyrozniione" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Wyróżnione projekty
          </h2>
          <p className="text-muted-foreground">
            Najważniejsze narzędzia i zasoby w bieżącym użyciu.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
