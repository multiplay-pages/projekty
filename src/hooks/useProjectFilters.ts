import { useState, useMemo, useCallback } from "react";
import type { Project, ProjectCategory, ProjectStatus } from "@/data/project-config";

interface ProjectFilters {
  search: string;
  category: ProjectCategory | null;
  status: ProjectStatus | null;
  featuredOnly: boolean;
}

function matchesSearch(project: Project, query: string): boolean {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    project.title.toLowerCase().includes(q) ||
    project.description.toLowerCase().includes(q) ||
    project.tags.some((t) => t.toLowerCase().includes(q))
  );
}

export function useProjectFilters(projects: Project[]) {
  const [filters, setFilters] = useState<ProjectFilters>({
    search: "",
    category: null,
    status: null,
    featuredOnly: false,
  });

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (!matchesSearch(p, filters.search)) return false;
      if (filters.category && p.category !== filters.category) return false;
      if (filters.status && p.status !== filters.status) return false;
      if (filters.featuredOnly && !p.featured) return false;
      return true;
    });
  }, [projects, filters]);

  const setSearch = useCallback((search: string) => {
    setFilters((prev) => ({ ...prev, search }));
  }, []);

  const toggleCategory = useCallback((category: ProjectCategory) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === category ? null : category,
    }));
  }, []);

  const toggleStatus = useCallback((status: ProjectStatus) => {
    setFilters((prev) => ({
      ...prev,
      status: prev.status === status ? null : status,
    }));
  }, []);

  const toggleFeatured = useCallback(() => {
    setFilters((prev) => ({ ...prev, featuredOnly: !prev.featuredOnly }));
  }, []);

  const clearAll = useCallback(() => {
    setFilters({ search: "", category: null, status: null, featuredOnly: false });
  }, []);

  const hasActiveFilters = !!(filters.category || filters.status || filters.featuredOnly);

  return {
    filters,
    filtered,
    setSearch,
    toggleCategory,
    toggleStatus,
    toggleFeatured,
    clearAll,
    hasActiveFilters,
    totalCount: projects.length,
  };
}
