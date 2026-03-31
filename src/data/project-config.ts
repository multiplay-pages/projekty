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
  kalkulatory: "Kalkulatory",
  procedury: "Procedury",
  tabele: "Tabele procesowe",
  schematy: "Schematy",
  narzedzia: "Narzędzia",
};

export const statusLabels: Record<ProjectStatus, string> = {
  aktywny: "Gotowy",
  "w-budowie": "W przygotowaniu",
  planowany: "Planowany",
};

export const typeLabels: Record<ProjectType, string> = {
  kalkulator: "Kalkulator",
  strona: "Procedura",
  tabela: "Tabela",
  figma: "Diagram",
  aplikacja: "Narzędzie",
};

// ─── Type-specific UX metadata ──────────────────────────

export const typeCTA: Record<ProjectType, { label: string; verb: string }> = {
  kalkulator: { label: "Konfiguruj ofertę", verb: "Otwórz kalkulator" },
  strona: { label: "Przeczytaj", verb: "Otwórz procedurę" },
  tabela: { label: "Zobacz tabelę", verb: "Otwórz tabelę" },
  figma: { label: "Zobacz schemat", verb: "Otwórz w Figma" },
  aplikacja: { label: "Uruchom", verb: "Otwórz narzędzie" },
};

export const typeHint: Record<ProjectType, string> = {
  kalkulator: "Interaktywna konfiguracja",
  strona: "Opis procedury",
  tabela: "Dane i statusy",
  figma: "Diagram w Figma",
  aplikacja: "Narzędzie wewnętrzne",
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
  { key: "kalkulatory", icon: Calculator, iconStyle: "bg-emerald-50 text-emerald-600", description: "Narzędzia do składania ofert — wybierz parametry i zobacz cenę." },
  { key: "procedury", icon: FileText, iconStyle: "bg-blue-50 text-blue-600", description: "Opisy procesów krok po kroku — role, terminy, wymagania." },
  { key: "tabele", icon: Table, iconStyle: "bg-amber-50 text-amber-700", description: "Tabele z etapami, statusami i odpowiedzialnościami." },
  { key: "schematy", icon: GitBranch, iconStyle: "bg-violet-50 text-violet-600", description: "Wizualne diagramy procesów i przepływów w Figma." },
  { key: "narzedzia", icon: Wrench, iconStyle: "bg-slate-100 text-slate-600", description: "Aplikacje do codziennej pracy — dashboardy, generatory, eksporty." },
];

// HowToUse resource type descriptions
export const resourceTypes: {
  icon: ElementType;
  title: string;
  description: string;
  iconStyle: string;
}[] = [
  { icon: Calculator, title: "Kalkulator", description: "Wybierz parametry oferty i zobacz cenę w czasie rzeczywistym. Do samodzielnej konfiguracji pakietów.", iconStyle: "bg-emerald-50 text-emerald-600" },
  { icon: BookOpen, title: "Procedura", description: "Opis procesu z podziałem na kroki, role i terminy. Do sprawdzenia, jak coś zrobić.", iconStyle: "bg-sky-50 text-sky-600" },
  { icon: Table, title: "Tabela procesowa", description: "Etapy procesu w formie tabeli z filtrami i statusami. Do śledzenia postępu.", iconStyle: "bg-amber-50 text-amber-600" },
  { icon: GitBranch, title: "Diagram", description: "Schemat wizualny procesu lub przepływu w Figma. Do szybkiego zrozumienia całości.", iconStyle: "bg-violet-50 text-violet-600" },
  { icon: Wrench, title: "Narzędzie wewnętrzne", description: "Aplikacja do konkretnego zadania — dashboard, generator raportów, eksport danych.", iconStyle: "bg-slate-100 text-slate-600" },
  { icon: FileText, title: "Strona wiedzy", description: "Zestawienie reguł, wymagań lub wyjaśnień. Do szybkiego odnalezienia odpowiedzi.", iconStyle: "bg-blue-50 text-blue-600" },
];

// ─── Ordered keys for filter UI ─────────────────────────

export const allCategories = Object.keys(categoryLabels) as ProjectCategory[];
export const allStatuses = Object.keys(statusLabels) as ProjectStatus[];
