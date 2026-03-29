import { Calculator, FileText, Table, GitBranch, Wrench } from "lucide-react";
import { projects, categoryLabels } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

const categoryConfig: {
  key: ProjectCategory;
  icon: React.ElementType;
  iconBg: string;
}[] = [
  { key: "kalkulatory", icon: Calculator, iconBg: "bg-emerald-50 text-emerald-600" },
  { key: "procedury", icon: FileText, iconBg: "bg-blue-50 text-blue-600" },
  { key: "tabele", icon: Table, iconBg: "bg-amber-50 text-amber-700" },
  { key: "schematy", icon: GitBranch, iconBg: "bg-violet-50 text-violet-600" },
  { key: "narzedzia", icon: Wrench, iconBg: "bg-slate-50 text-slate-600" },
];

const categoryDescriptions: Record<ProjectCategory, string> = {
  kalkulatory: "Interaktywne narzędzia do wyceny ofert, pakietów i usług.",
  procedury: "Opisy procesów, procedur i wymagań formalnych.",
  tabele: "Tabele z etapami, statusami i parametrami procesów.",
  schematy: "Wizualne diagramy i schematy procesowe w Figma.",
  narzedzia: "Aplikacje wspierające codzienną pracę zespołu.",
};

export function CategoryOverview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-14 text-center">
          <h2 className="section-heading mb-3">Kategorie zasobów</h2>
          <p className="section-subheading mx-auto max-w-md">
            Projekty pogrupowane według typu — łatwo znajdziesz to, czego szukasz.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {categoryConfig.map(({ key, icon: Icon, iconBg }) => {
            const count = projects.filter((p) => p.category === key).length;
            return (
              <div
                key={key}
                className="group card-elevated flex flex-col items-center px-5 py-8 text-center"
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-sm font-bold text-card-foreground leading-snug">
                  {categoryLabels[key]}
                </h3>
                <p className="mb-4 text-[12px] leading-relaxed text-muted-foreground">
                  {categoryDescriptions[key]}
                </p>
                <span className="mt-auto inline-flex items-center rounded-full bg-primary/8 px-3 py-1 text-[11px] font-semibold text-primary">
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
