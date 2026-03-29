import { Search, Star, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FilterChip } from "./FilterChip";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { categoryLabels, statusLabels, allCategories, allStatuses } from "@/data/project-config";
import { useProjectFilters } from "@/hooks/useProjectFilters";

export function ProjectLibrary() {
  const {
    filters,
    filtered,
    setSearch,
    toggleCategory,
    toggleStatus,
    toggleFeatured,
    clearAll,
    hasActiveFilters,
    totalCount,
  } = useProjectFilters(projects);

  return (
    <section id="projekty" className="py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-12">
          <SectionHeader
            title="Wszystkie projekty"
            subtitle="Przeglądaj pełną bibliotekę kalkulatorów, procedur, tabel i narzędzi."
            accent
          />
        </div>

        {/* Search */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground/60" />
            <Input
              placeholder="Szukaj projektu po nazwie, opisie lub tagu..."
              value={filters.search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-13 rounded-xl border-border bg-card pl-11 pr-4 text-[15px] shadow-sm focus-visible:ring-primary/20 focus-visible:ring-offset-0 focus-visible:border-primary/40"
            />
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap items-center gap-2">
            {allCategories.map((cat) => (
              <FilterChip
                key={cat}
                label={categoryLabels[cat]}
                active={filters.category === cat}
                onClick={() => toggleCategory(cat)}
              />
            ))}

            <div className="h-5 w-px bg-border mx-0.5 hidden sm:block" />

            {allStatuses.map((st) => (
              <FilterChip
                key={st}
                label={statusLabels[st]}
                active={filters.status === st}
                onClick={() => toggleStatus(st)}
              />
            ))}

            <div className="h-5 w-px bg-border mx-0.5 hidden sm:block" />

            <FilterChip
              label="Wyróżnione"
              active={filters.featuredOnly}
              onClick={toggleFeatured}
              icon={<Star className="h-3 w-3" />}
            />

            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[12px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-3 w-3" />
                Wyczyść filtry
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            hasFilters={hasActiveFilters || !!filters.search}
            onClear={clearAll}
          />
        )}

        <p className="mt-8 text-center text-[13px] text-muted-foreground">
          {filtered.length === totalCount
            ? `${totalCount} projektów`
            : `${filtered.length} z ${totalCount} projektów`}
        </p>
      </div>
    </section>
  );
}

// ─── Empty state ────────────────────────────────────────

function EmptyState({ hasFilters, onClear }: { hasFilters: boolean; onClear: () => void }) {
  return (
    <div className="card-static border-dashed px-8 py-20 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
        <Search className="h-6 w-6 text-muted-foreground" />
      </div>
      <p className="text-lg font-semibold text-foreground">
        {hasFilters ? "Brak wyników dla wybranych filtrów" : "Brak projektów"}
      </p>
      <p className="mt-1.5 text-sm text-muted-foreground">
        {hasFilters
          ? "Spróbuj zmienić kryteria wyszukiwania lub wyczyść filtry."
          : "Dodaj pierwszy projekt, aby rozpocząć."}
      </p>
      {hasFilters && (
        <Button variant="outline" size="sm" className="mt-5" onClick={onClear}>
          Wyczyść wszystkie filtry
        </Button>
      )}
    </div>
  );
}
