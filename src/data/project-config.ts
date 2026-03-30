import { Calculator, FileText, Table, GitBranch, Wrench, BookOpen } from "lucide-react";
import type { ElementType } from "react";

// ─── Types ───────────────────────────────────────────────

export type ProjectCategory =
  | "kalkulatory"
  | "procedury"
  | "tabele"
  | "schematy"
  | "narzedzia";

export type ProjectStatus = "aktywny" | "w-budowie" | "planowany";
export type ProjectType = "kalkulator" | "strona" | "tabela" | "figma" | "aplikacja";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  type: ProjectType;
  status: ProjectStatus;
  tags: string[];
  url: string;
  featured: boolean;
}

// ─── Labels (UI strings) ────────────────────────────────

export const categoryLabels: Record<ProjectCategory, string> = {
  kalkulatory: "Kalkulatory ofert",
  procedury: "Procedury i procesy",
  tabele: "Interaktywne tabele",
  schematy: "Schematy i diagramy",
  narzedzia: "Narzędzia wewnętrzne",
};

export const statusLabels: Record<ProjectStatus, string> = {
  aktywny: "Aktywny",
  "w-budowie": "W budowie",
  planowany: "Planowany",
};

export const typeLabels: Record<ProjectType, string> = {
  kalkulator: "Kalkulator",
  strona: "Strona",
  tabela: "Tabela",
  figma: "Figma",
  aplikacja: "Aplikacja",
};

// ─── Type-specific UX metadata ──────────────────────────

export const typeCTA: Record<ProjectType, { label: string; verb: string }> = {
  kalkulator: { label: "Konfiguruj ofertę", verb: "Otwórz kalkulator" },
  strona: { label: "Czytaj procedurę", verb: "Otwórz stronę" },
  tabela: { label: "Przeglądaj tabelę", verb: "Otwórz tabelę" },
  figma: { label: "Zobacz diagram", verb: "Otwórz w Figma" },
  aplikacja: { label: "Uruchom narzędzie", verb: "Otwórz aplikację" },
};

export const typeHint: Record<ProjectType, string> = {
  kalkulator: "Interaktywna konfiguracja",
  strona: "Dokumentacja procesowa",
  tabela: "Dane i statusy",
  figma: "Schemat wizualny",
  aplikacja: "Narzędzie operacyjne",
};

// ─── Visual config (icons, colors, badge variants) ──────

export const typeIconMap: Record<ProjectType, ElementType> = {
  kalkulator: Calculator,
  strona: FileText,
  tabela: Table,
  figma: GitBranch,
  aplikacja: Wrench,
};

export const typeIconStyle: Record<ProjectType, string> = {
  kalkulator: "bg-emerald-50 text-emerald-600",
  strona: "bg-blue-50 text-blue-600",
  tabela: "bg-amber-50 text-amber-700",
  figma: "bg-violet-50 text-violet-600",
  aplikacja: "bg-slate-100 text-slate-600",
};

export const statusBadgeVariant: Record<ProjectStatus, "success" | "warning" | "secondary"> = {
  aktywny: "success",
  "w-budowie": "warning",
  planowany: "secondary",
};

// Category visual config used by CategoryOverview
export const categoryConfig: {
  key: ProjectCategory;
  icon: ElementType;
  iconStyle: string;
  description: string;
}[] = [
  { key: "kalkulatory", icon: Calculator, iconStyle: "bg-emerald-50 text-emerald-600", description: "Interaktywne narzędzia do wyceny ofert, pakietów i usług." },
  { key: "procedury", icon: FileText, iconStyle: "bg-blue-50 text-blue-600", description: "Opisy procesów, procedur i wymagań formalnych." },
  { key: "tabele", icon: Table, iconStyle: "bg-amber-50 text-amber-700", description: "Tabele z etapami, statusami i parametrami procesów." },
  { key: "schematy", icon: GitBranch, iconStyle: "bg-violet-50 text-violet-600", description: "Wizualne diagramy i schematy procesowe w Figma." },
  { key: "narzedzia", icon: Wrench, iconStyle: "bg-slate-100 text-slate-600", description: "Aplikacje wspierające codzienną pracę zespołu." },
];

// HowToUse resource type descriptions
export const resourceTypes: {
  icon: ElementType;
  title: string;
  description: string;
  iconStyle: string;
}[] = [
  { icon: Calculator, title: "Kalkulator", description: "Interaktywne narzędzie do konfiguracji oferty i podglądu cen w czasie rzeczywistym.", iconStyle: "bg-emerald-50 text-emerald-600" },
  { icon: BookOpen, title: "Strona wiedzy", description: "Przejrzysty opis procedury, procesu lub zestawu reguł biznesowych.", iconStyle: "bg-sky-50 text-sky-600" },
  { icon: Table, title: "Tabela interaktywna", description: "Tabela z etapami, filtrami i statusami — do śledzenia procesów krok po kroku.", iconStyle: "bg-amber-50 text-amber-600" },
  { icon: GitBranch, title: "Diagram Figma", description: "Wizualny schemat procesu lub przepływu — link do projektu w Figma.", iconStyle: "bg-violet-50 text-violet-600" },
  { icon: Wrench, title: "Aplikacja wewnętrzna", description: "Narzędzie MVP do codziennej pracy — dashboard, generator raportów itp.", iconStyle: "bg-slate-100 text-slate-600" },
  { icon: FileText, title: "Procedura", description: "Formalny opis postępowania — kroki, role, terminy i wymagane dokumenty.", iconStyle: "bg-blue-50 text-blue-600" },
];

// ─── Ordered keys for filter UI ─────────────────────────

export const allCategories = Object.keys(categoryLabels) as ProjectCategory[];
export const allStatuses = Object.keys(statusLabels) as ProjectStatus[];
