import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = !selectedCategory || p.category === selectedCategory;
      const matchesStatus = !selectedStatus || p.status === selectedStatus;
      const matchesFeatured = !featuredOnly || p.featured;
      return matchesSearch && matchesCategory && matchesStatus && matchesFeatured;
    });
  }, [search, selectedCategory, selectedStatus, featuredOnly]);

  const activeFilters = [selectedCategory, selectedStatus, featuredOnly].filter(Boolean).length;

  return (
    <section id="projekty" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Wszystkie projekty
          </h2>
          <p className="text-muted-foreground">
            Przeglądaj pełną bibliotekę kalkulatorów, procedur, tabel i narzędzi.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Szukaj projektu po nazwie, opisie lub tagu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-12 pl-10 text-base bg-card"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 text-sm text-muted-foreground mr-2">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filtry{activeFilters > 0 && ` (${activeFilters})`}:
            </div>

            {/* Category filters */}
            {allCategories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                className="h-8 text-xs"
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
              >
                {categoryLabels[cat]}
              </Button>
            ))}

            <div className="h-5 w-px bg-border mx-1 hidden sm:block" />

            {/* Status filters */}
            {allStatuses.map((st) => (
              <Badge
                key={st}
                variant={selectedStatus === st ? "default" : "outline"}
                className="cursor-pointer text-xs"
                onClick={() => setSelectedStatus(selectedStatus === st ? null : st)}
              >
                {statusLabels[st]}
              </Badge>
            ))}

            <div className="h-5 w-px bg-border mx-1 hidden sm:block" />

            {/* Featured toggle */}
            <Button
              variant={featuredOnly ? "default" : "outline"}
              size="sm"
              className="h-8 text-xs"
              onClick={() => setFeaturedOnly(!featuredOnly)}
            >
              <Star className="mr-1 h-3 w-3" />
              Wyróżnione
            </Button>
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
          <div className="rounded-xl border border-dashed border-border bg-card px-8 py-16 text-center">
            <p className="text-lg font-medium text-foreground">Brak wyników</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Spróbuj zmienić kryteria wyszukiwania lub filtry.
            </p>
          </div>
        )}

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Wyświetlono {filtered.length} z {projects.length} projektów
        </p>
      </div>
    </section>
  );
}
