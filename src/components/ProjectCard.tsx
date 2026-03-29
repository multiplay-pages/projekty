import { ArrowRight, Calculator, FileText, Table, GitBranch, Wrench, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import { statusLabels, typeLabels, categoryLabels } from "@/data/projects";

const typeIcons: Record<string, React.ElementType> = {
  kalkulator: Calculator,
  strona: FileText,
  tabela: Table,
  figma: GitBranch,
  aplikacja: Wrench,
};

const statusVariants: Record<string, "success" | "warning" | "secondary"> = {
  aktywny: "success",
  "w-budowie": "warning",
  planowany: "secondary",
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const Icon = typeIcons[project.type] || FileText;
  const statusVariant = statusVariants[project.status] || "secondary";

  return (
    <div
      className={`group relative flex flex-col rounded-xl border border-border bg-card p-6 card-hover ${
        featured ? "md:flex-row md:items-center md:gap-8 md:p-8" : ""
      }`}
    >
      {/* Icon */}
      <div
        className={`mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground ${
          featured ? "md:mb-0 md:h-16 md:w-16" : ""
        }`}
      >
        <Icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Badges row */}
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant={statusVariant} className="text-[11px]">
            {statusLabels[project.status]}
          </Badge>
          <Badge variant="outline" className="text-[11px]">
            {typeLabels[project.type]}
          </Badge>
          <span className="text-xs text-muted-foreground">
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`mb-1 font-bold text-card-foreground ${
            featured ? "text-xl" : "text-base"
          }`}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={`mb-4 text-muted-foreground leading-relaxed ${
            featured ? "text-sm" : "text-sm line-clamp-2"
          }`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="mt-auto">
          <Button
            variant="ghost"
            size="sm"
            className="group/btn -ml-2 text-primary hover:text-primary"
            asChild
          >
            <a href={project.url}>
              {project.type === "figma" ? (
                <>
                  Otwórz w Figma <ExternalLink className="ml-1 h-3.5 w-3.5" />
                </>
              ) : (
                <>
                  Otwórz{" "}
                  <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </>
              )}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
