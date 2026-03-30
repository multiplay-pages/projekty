import { ArrowRight, ExternalLink, Settings, BookOpen, BarChart3, Eye, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/project-config";
import {
  statusLabels,
  typeLabels,
  categoryLabels,
  typeIconMap,
  typeIconStyle,
  statusBadgeVariant,
  typeCTA,
  typeHint,
} from "@/data/project-config";

// ─── Type-specific CTA icons ────────────────────────────

const ctaIconMap: Record<Project["type"], React.ElementType> = {
  kalkulator: Settings,
  strona: BookOpen,
  tabela: BarChart3,
  figma: ExternalLink,
  aplikacja: Rocket,
};

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

function ProjectTags({ tags, limit = 3 }: { tags: string[]; limit?: number }) {
  if (tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.slice(0, limit).map((tag) => (
        <span
          key={tag}
          className="rounded-md bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

// ─── Featured card ──────────────────────────────────────

export function FeaturedProjectCard({ project }: { project: Project }) {
  const CtaIcon = ctaIconMap[project.type];

  return (
    <a
      href={project.url}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/20 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.1),0_4px_16px_-4px_rgba(0,0,0,0.06)]"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-primary" />

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        {/* Header: icon + badges */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <ProjectIcon type={project.type} size="lg" />
          <div className="flex flex-col items-end gap-1.5">
            <Badge variant={statusBadgeVariant[project.status]} className="text-[11px] font-semibold">
              {statusLabels[project.status]}
            </Badge>
            <span className="text-[10px] font-medium text-muted-foreground/70">
              {typeHint[project.type]}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2.5 text-[19px] font-extrabold leading-snug text-card-foreground transition-colors duration-300 group-hover:text-primary">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mb-5 text-[14px] leading-[1.65] text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-6">
          <ProjectTags tags={project.tags} limit={4} />
        </div>

        {/* CTA footer */}
        <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-5">
          <span className="text-[12px] font-medium text-muted-foreground">
            {categoryLabels[project.category]}
          </span>
          <div className="flex items-center gap-2 text-[13px] font-semibold text-primary transition-all duration-300 group-hover:gap-3">
            {typeCTA[project.type].verb}
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/8 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
              <CtaIcon className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

// ─── Compact card (grid) ────────────────────────────────

export function ProjectCard({ project }: { project: Project }) {
  const CtaIcon = ctaIconMap[project.type];

  return (
    <a
      href={project.url}
      className="group card-elevated flex flex-col p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <ProjectIcon type={project.type} />
        <Badge variant={statusBadgeVariant[project.status]} className="text-[10px] font-medium shrink-0">
          {statusLabels[project.status]}
        </Badge>
      </div>

      {/* Type hint */}
      <div className="mb-1.5 flex items-center gap-2">
        <Badge variant="outline" className="text-[10px] font-medium">
          {typeLabels[project.type]}
        </Badge>
        <span className="text-[10px] text-muted-foreground/70">
          {typeHint[project.type]}
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

      <div className="mt-auto flex items-center gap-1.5 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-[13px] font-semibold text-primary">
        <CtaIcon className="h-3.5 w-3.5" />
        {typeCTA[project.type].label}
      </div>
    </a>
  );
}
