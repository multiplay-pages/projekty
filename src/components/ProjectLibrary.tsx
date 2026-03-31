import { Search, Star, X, SlidersHorizontal } from "lucide-react";
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

  const activeFilterCount =
    (filters.category ? 1 : 0) +
    (filters.status ? 1 : 0) +
    (filters.featuredOnly ? 1 : 0);

  // Count projects per category for chips
  const categoryCounts = allCategories.reduce((acc, cat) => {
    acc[cat] = projects.filter((p) => p.category === cat).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section id="projekty" className="py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-10">
          <SectionHeader
            title="Biblioteka zasobów"
            subtitle="Pełna lista kalkulatorów, procedur, tabel i narzędzi — filtruj lub szukaj po nazwie."
            accent
          />
        </div>

        {/* Search & Filters */}
        <div className="mb-8 rounded-2xl border border-border bg-card p-5 sm:p-6">
          {/* Search */}
          <div className="relative mb-5">
            <Search className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground/50" />
            <Input
              placeholder="Szukaj projektu po nazwie, opisie lub tagu..."
              value={filters.search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 rounded-xl border-border bg-background pl-11 pr-4 text-[15px] shadow-sm focus-visible:ring-primary/20 focus-visible:ring-offset-0 focus-visible:border-primary/40"
            />
          </div>

          {/* Filter rows */}
          <div className="space-y-3">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                <SlidersHorizontal className="h-3 w-3" />
                Kategoria
              </span>
              {allCategories.map((cat) => (
                <FilterChip
                  key={cat}
                  label={categoryLabels[cat]}
                  active={filters.category === cat}
                  onClick={() => toggleCategory(cat)}
                  count={categoryCounts[cat]}
                />
              ))}
            </div>

            {/* Status + Featured */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                Status
              </span>
              {allStatuses.map((st) => (
                <FilterChip
                  key={st}
                  label={statusLabels[st]}
                  active={filters.status === st}
                  onClick={() => toggleStatus(st)}
                />
              ))}

              <div className="h-5 w-px bg-border mx-1 hidden sm:block" />

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
                  className="ml-1 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-medium text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-colors"
                >
                  <X className="h-3 w-3" />
                  Wyczyść ({activeFilterCount})
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results summary */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-[13px] text-muted-foreground">
            {filtered.length === totalCount ? (
              <>Wyświetlanie <span className="font-semibold text-foreground">{totalCount}</span> projektów</>
            ) : (
              <>
                <span className="font-semibold text-foreground">{filtered.length}</span> z{" "}
                <span className="font-semibold text-foreground">{totalCount}</span> projektów
              </>
            )}
          </p>
          {(hasActiveFilters || filters.search) && (
            <button
              type="button"
              onClick={clearAll}
              className="text-[12px] font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Pokaż wszystko
            </button>
          )}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            hasFilters={hasActiveFilters || !!filters.search}
            searchQuery={filters.search}
            onClear={clearAll}
          />
        )}
      </div>
    </section>
  );
}

function EmptyState({
  hasFilters,
  searchQuery,
  onClear,
}: {
  hasFilters: boolean;
  searchQuery: string;
  onClear: () => void;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-card px-8 py-20 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
        <Search className="h-7 w-7 text-muted-foreground/60" />
      </div>
      <p className="text-lg font-bold text-foreground">
        {searchQuery
          ? `Brak wyników dla „${searchQuery}"`
          : hasFilters
            ? "Brak projektów dla wybranych filtrów"
            : "Brak projektów"}
      </p>
      <p className="mx-auto mt-2 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
        {hasFilters
          ? "Spróbuj zmienić kryteria wyszukiwania, wybrać inną kategorię lub wyczyść wszystkie filtry."
          : "Dodaj pierwszy projekt, aby rozpocząć."}
      </p>
      {hasFilters && (
        <Button variant="outline" size="sm" className="mt-6 rounded-full" onClick={onClear}>
          <X className="mr-1.5 h-3.5 w-3.5" />
          Wyczyść wszystkie filtry
        </Button>
      )}
    </div>
  );
}
