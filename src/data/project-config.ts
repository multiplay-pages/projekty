import { Calculator, FileText, Table, GitBranch, Wrench, BookOpen } from "lucide-react";
import type { ElementType } from "react";

// ─── Types ───────────────────────────────────────────────

export type ProjectCategory =
  | "kalkulatory"
  | "procedury"
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
  preview?: string;
}

// ─── Labels (UI strings) ────────────────────────────────

export const categoryLabels: Record<ProjectCategory, string> = {
  kalkulatory: "Kalkulatory ofert",
  procedury: "Procedury i procesy",
  narzedzia: "Narzędzia",
};

export const statusLabels: Record<ProjectStatus, string> = {
  aktywny: "Aktywny",
  "w-budowie": "W przygotowaniu",
  planowany: "Planowany",
};

export const typeLabels: Record<ProjectType, string> = {
  kalkulator: "Kalkulator",
  strona: "Strona / narzędzie",
  tabela: "Tabela",
  figma: "Diagram",
  aplikacja: "Narzędzie",
};

// ─── Type-specific UX metadata ──────────────────────────

export const typeCTA: Record<ProjectType, { label: string; verb: string }> = {
  kalkulator: { label: "Otwórz kalkulator", verb: "Otwórz kalkulator" },
  strona: { label: "Otwórz stronę", verb: "Otwórz stronę" },
  tabela: { label: "Otwórz tabelę", verb: "Otwórz tabelę" },
  figma: { label: "Otwórz schemat", verb: "Otwórz w Figma" },
  aplikacja: { label: "Otwórz narzędzie", verb: "Otwórz narzędzie" },
};

export const typeHint: Record<ProjectType, string> = {
  kalkulator: "Interaktywna konfiguracja",
  strona: "Strona informacyjna",
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
  { key: "kalkulatory", icon: Calculator, iconStyle: "bg-emerald-50 text-emerald-600", description: "Kalkulatory do konfiguracji ofert i prezentacji cen." },
  { key: "procedury", icon: FileText, iconStyle: "bg-blue-50 text-blue-600", description: "Opisy procedur, komunikatów i procesów obsługowych." },
  { key: "narzedzia", icon: Wrench, iconStyle: "bg-slate-100 text-slate-600", description: "Narzędzia operacyjne i strony wspierające codzienną pracę." },
];

// HowToUse resource type descriptions
export const resourceTypes: {
  icon: ElementType;
  title: string;
  description: string;
  iconStyle: string;
}[] = [
  { icon: Calculator, title: "Kalkulator oferty", description: "Interaktywna konfiguracja oferty z podglądem ceny — do samodzielnej prezentacji klientowi.", iconStyle: "bg-emerald-50 text-emerald-600" },
  { icon: BookOpen, title: "Procedura", description: "Opis procedury krok po kroku — co zrobić, jakie komunikaty wysłać, jakie zasady obowiązują.", iconStyle: "bg-sky-50 text-sky-600" },
  { icon: Wrench, title: "Narzędzie / strona", description: "Strona ofertowa, narzędzie wspierające lub baza wiedzy — do szybkiego użycia w pracy.", iconStyle: "bg-slate-100 text-slate-600" },
];

// ─── Ordered keys for filter UI ─────────────────────────

export const allCategories = Object.keys(categoryLabels) as ProjectCategory[];
export const allStatuses = Object.keys(statusLabels) as ProjectStatus[];
