import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/project-config";
import {
  statusLabels,
  typeLabels,
  categoryLabels,
  typeIconMap,
  typeIconStyle,
  statusBadgeVariant,
} from "@/data/project-config";

// ─── Shared sub-components ──────────────────────────────

function ProjectIcon({ type, size = "sm" }: { type: Project["type"]; size?: "sm" | "lg" }) {
  const Icon = typeIconMap[type];
  const style = typeIconStyle[type];
  const sizeClasses = size === "lg" ? "h-14 w-14 rounded-2xl" : "h-11 w-11 rounded-xl";
  const iconSize = size === "lg" ? "h-6 w-6" : "h-[18px] w-[18px]";
  return (
    <div className={`flex shrink-0 items-center justify-center ${sizeClasses} ${style}`}>
      <Icon className={iconSize} />
    </div>
  );
}

function ProjectBadges({ project, showCategory = false }: { project: Project; showCategory?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant={statusBadgeVariant[project.status]} className="text-[11px] font-medium">
        {statusLabels[project.status]}
      </Badge>
      <Badge variant="outline" className="text-[11px] font-medium">
        {typeLabels[project.type]}
      </Badge>
      {showCategory && (
        <span className="text-[11px] text-muted-foreground">
          {categoryLabels[project.category]}
        </span>
      )}
    </div>
  );
}

function ProjectTags({ tags, limit = 3 }: { tags: string[]; limit?: number }) {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.slice(0, limit).map((tag) => (
        <span
          key={tag}
          className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectActionHint({ type }: { type: Project["type"] }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
      {type === "figma" ? (
        <>Otwórz w Figma <ExternalLink className="h-3.5 w-3.5" /></>
      ) : (
        <>Otwórz <ArrowRight className="h-3.5 w-3.5" /></>
      )}
    </span>
  );
}

// ─── Featured card ──────────────────────────────────────

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      className="group card-elevated flex flex-col overflow-hidden sm:flex-row sm:items-stretch"
    >
      <div className="hidden sm:block w-1 shrink-0 bg-gradient-primary rounded-l-2xl" />

      <div className="flex flex-1 flex-col gap-5 p-7 sm:flex-row sm:items-center sm:gap-7 sm:p-8">
        <ProjectIcon type={project.type} size="lg" />

        <div className="flex-1 min-w-0">
          <div className="mb-2.5">
            <ProjectBadges project={project} />
          </div>

          <h3 className="mb-1.5 text-lg font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-3.5">
            <ProjectTags tags={project.tags} limit={4} />
          </div>
        </div>

        <div className="hidden sm:flex shrink-0 items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </a>
  );
}

// ─── Compact card (grid) ────────────────────────────────

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      className="group card-elevated flex flex-col p-6"
    >
      <div className="mb-4 flex items-start justify-between">
        <ProjectIcon type={project.type} />
        <Badge variant={statusBadgeVariant[project.status]} className="text-[10px] font-medium">
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

      <div className="mb-5">
        <ProjectTags tags={project.tags} />
      </div>

      <div className="mt-auto opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <ProjectActionHint type={project.type} />
      </div>
    </a>
  );
}
