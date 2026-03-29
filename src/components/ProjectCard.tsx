import { ArrowRight, Calculator, FileText, Table, GitBranch, Wrench, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

const iconAccents: Record<string, string> = {
  kalkulator: "bg-emerald-50 text-emerald-600",
  strona: "bg-blue-50 text-blue-600",
  tabela: "bg-amber-50 text-amber-700",
  figma: "bg-violet-50 text-violet-600",
  aplikacja: "bg-slate-50 text-slate-600",
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const Icon = typeIcons[project.type] || FileText;
  const statusVariant = statusVariants[project.status] || "secondary";
  const iconColor = iconAccents[project.type] || "bg-accent text-accent-foreground";

  if (featured) {
    return (
      <a
        href={project.url}
        className="group card-elevated flex flex-col overflow-hidden sm:flex-row sm:items-stretch"
      >
        {/* Left accent strip */}
        <div className="hidden sm:block w-1 shrink-0 bg-gradient-primary rounded-l-2xl" />

        <div className="flex flex-1 flex-col gap-5 p-7 sm:flex-row sm:items-center sm:gap-7 sm:p-8">
          {/* Icon */}
          <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconColor}`}>
            <Icon className="h-6 w-6" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Badges */}
            <div className="mb-2.5 flex flex-wrap items-center gap-2">
              <Badge variant={statusVariant} className="text-[11px] font-medium">
                {statusLabels[project.status]}
              </Badge>
              <Badge variant="outline" className="text-[11px] font-medium">
                {typeLabels[project.type]}
              </Badge>
            </div>

            <h3 className="mb-1.5 text-lg font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-[13px] leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tags */}
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden sm:flex shrink-0 items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a
      href={project.url}
      className="group card-elevated flex flex-col p-6"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconColor}`}>
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <Badge variant={statusVariant} className="text-[10px] font-medium">
          {statusLabels[project.status]}
        </Badge>
      </div>

      <div className="mb-1.5 flex items-center gap-2">
        <Badge variant="outline" className="text-[10px] font-medium">
          {typeLabels[project.type]}
        </Badge>
        <span className="text-[11px] text-muted-foreground">
          {categoryLabels[project.category]}
        </span>
      </div>

      <h3 className="mb-1.5 text-[15px] font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>

      <p className="mb-4 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="mb-5 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action hint */}
      <div className="mt-auto flex items-center gap-1.5 text-[13px] font-semibold text-primary opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        {project.type === "figma" ? (
          <>Otwórz w Figma <ExternalLink className="h-3.5 w-3.5" /></>
        ) : (
          <>Otwórz <ArrowRight className="h-3.5 w-3.5" /></>
        )}
      </div>
    </a>
  );
}
