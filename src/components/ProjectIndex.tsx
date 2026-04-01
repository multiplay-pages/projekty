import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/data/projects";
import {
  statusLabels,
  typeLabels,
  typeCTA,
  typeIconMap,
  typeIconStyle,
  statusBadgeVariant,
  categoryLabels,
} from "@/data/project-config";
import { useState, useMemo } from "react";
import type { Project } from "@/data/project-config";

function matchesSearch(project: Project, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    project.title.toLowerCase().includes(q) ||
    project.description.toLowerCase().includes(q) ||
    project.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function ProjectIndex() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () => projects.filter((p) => matchesSearch(p, search)),
    [search]
  );

  return (
    <section id="projekty" className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-8">
          <SectionHeader
            title="Indeks zasobów"
            subtitle="Szybkie wyszukiwanie wśród wszystkich narzędzi i zasobów."
            accent
          />
        </div>

        {/* Search */}
        <div className="mb-6 max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground/50" />
            <Input
              placeholder="Szukaj po nazwie lub tagu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 rounded-xl border-border bg-card pl-11 pr-10 text-[15px] shadow-sm focus-visible:ring-primary/20 focus-visible:ring-offset-0 focus-visible:border-primary/40"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Compact list */}
        {filtered.length > 0 ? (
          <div className="rounded-2xl border border-border bg-card overflow-hidden divide-y divide-border">
            {filtered.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-card px-8 py-16 text-center">
            <p className="text-[15px] font-semibold text-foreground">
              Brak wyników dla „{search}"
            </p>
            <p className="mt-1.5 text-[13px] text-muted-foreground">
              Spróbuj innego słowa kluczowego.
            </p>
            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-4 text-[13px] font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Wyczyść wyszukiwanie
            </button>
          </div>
        )}

        <p className="mt-4 text-[12px] text-muted-foreground">
          {filtered.length === projects.length
            ? `${projects.length} zasobów`
            : `${filtered.length} z ${projects.length} zasobów`}
        </p>
      </div>
    </section>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const Icon = typeIconMap[project.type];
  const iconStyle = typeIconStyle[project.type];

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 transition-colors hover:bg-muted/40"
    >
      {/* Icon */}
      <div className={`flex shrink-0 items-center justify-center h-10 w-10 rounded-xl ${iconStyle}`}>
        <Icon className="h-[18px] w-[18px]" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-[14px] font-bold text-card-foreground leading-snug group-hover:text-primary transition-colors truncate">
            {project.title}
          </h3>
          <Badge variant={statusBadgeVariant[project.status]} className="text-[10px] font-medium shrink-0">
            {statusLabels[project.status]}
          </Badge>
        </div>
        <p className="mt-0.5 text-[12px] text-muted-foreground truncate hidden sm:block">
          {categoryLabels[project.category]} · {typeLabels[project.type]}
        </p>
      </div>

      {/* CTA */}
      <span className="shrink-0 text-[12px] font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
        {typeCTA[project.type].label} →
      </span>
    </a>
  );
}
