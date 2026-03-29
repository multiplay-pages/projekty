import { Calculator, FileText, Table, GitBranch, Wrench } from "lucide-react";
import { projects, categoryLabels } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

const categoryConfig: {
  key: ProjectCategory;
  icon: React.ElementType;
  color: string;
}[] = [
  { key: "kalkulatory", icon: Calculator, color: "bg-emerald-50 text-emerald-600" },
  { key: "procedury", icon: FileText, color: "bg-blue-50 text-blue-600" },
  { key: "tabele", icon: Table, color: "bg-amber-50 text-amber-600" },
  { key: "schematy", icon: GitBranch, color: "bg-violet-50 text-violet-600" },
  { key: "narzedzia", icon: Wrench, color: "bg-slate-100 text-slate-600" },
];

const categoryDescriptions: Record<ProjectCategory, string> = {
  kalkulatory: "Interaktywne narzędzia do wyceny ofert, pakietów i usług.",
  procedury: "Opisy procesów, procedur i wymagań formalnych.",
  tabele: "Tabele z etapami, statusami i parametrami procesów.",
  schematy: "Wizualne diagramy i schematy procesowe w Figma.",
  narzedzia: "Wewnętrzne aplikacje wspierające codzienną pracę.",
};

export function CategoryOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Kategorie zasobów
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Projekty pogrupowane według typu — łatwo znajdziesz to, czego szukasz.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categoryConfig.map(({ key, icon: Icon, color }) => {
            const count = projects.filter((p) => p.category === key).length;
            return (
              <div
                key={key}
                className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center card-hover"
              >
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 text-sm font-bold text-card-foreground">
                  {categoryLabels[key]}
                </h3>
                <p className="mb-3 text-xs leading-relaxed text-muted-foreground">
                  {categoryDescriptions[key]}
                </p>
                <span className="text-xs font-medium text-primary">
                  {count} {count === 1 ? "projekt" : count < 5 ? "projekty" : "projektów"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
