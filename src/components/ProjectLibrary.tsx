import { useState, useMemo } from "react";
import { Search, Star, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { projects, categoryLabels, statusLabels } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import type { ProjectCategory, ProjectStatus } from "@/data/projects";

const allCategories = Object.keys(categoryLabels) as ProjectCategory[];
const allStatuses = Object.keys(statusLabels) as ProjectStatus[];

export function ProjectLibrary() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<ProjectStatus | null>(null);
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      const matchesStatus = !selectedStatus || p.status === selectedStatus;
      const matchesFeatured = !featuredOnly || p.featured;
      return matchesSearch && matchesCategory && matchesStatus && matchesFeatured;
    });
  }, [search, selectedCategory, selectedStatus, featuredOnly]);

  const hasActiveFilters = selectedCategory || selectedStatus || featuredOnly;

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedStatus(null);
    setFeaturedOnly(false);
    setSearch("");
  };

  return (
    <section id="projekty" className="py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-12">
          <div className="mb-3 h-1 w-10 rounded-full bg-gradient-primary" />
          <h2 className="section-heading mb-2">Wszystkie projekty</h2>
          <p className="section-subheading">
            Przeglądaj pełną bibliotekę kalkulatorów, procedur, tabel i narzędzi.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground/60" />
            <Input
              placeholder="Szukaj projektu po nazwie, opisie lub tagu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-13 rounded-xl border-border bg-card pl-11 pr-4 text-[15px] shadow-sm focus-visible:ring-primary/20 focus-visible:ring-offset-0 focus-visible:border-primary/40"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Category filters */}
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`rounded-lg px-3.5 py-2 text-[12px] font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border border-border text-foreground/70 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}

            <div className="h-5 w-px bg-border mx-0.5 hidden sm:block" />

            {/* Status filters */}
            {allStatuses.map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatus(selectedStatus === st ? null : st)}
                className={`rounded-lg px-3 py-2 text-[12px] font-semibold transition-all duration-200 ${
                  selectedStatus === st
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border border-border text-foreground/70 hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {statusLabels[st]}
              </button>
            ))}

            <div className="h-5 w-px bg-border mx-0.5 hidden sm:block" />

            <button
              onClick={() => setFeaturedOnly(!featuredOnly)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[12px] font-semibold transition-all duration-200 ${
                featuredOnly
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-foreground/70 hover:border-primary/30 hover:text-foreground"
              }`}
            >
              <Star className="h-3 w-3" />
              Wyróżnione
            </button>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[12px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-3 w-3" />
                Wyczyść
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
          <div className="card-static px-8 py-20 text-center border-dashed">
            <p className="text-lg font-semibold text-foreground">Brak wyników</p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Spróbuj zmienić kryteria wyszukiwania lub filtry.
            </p>
            <Button variant="outline" size="sm" className="mt-5" onClick={clearFilters}>
              Wyczyść filtry
            </Button>
          </div>
        )}

        <p className="mt-8 text-center text-[13px] text-muted-foreground">
          Wyświetlono {filtered.length} z {projects.length} projektów
        </p>
      </div>
    </section>
  );
}
