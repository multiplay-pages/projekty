import { Calculator, FileText, Table, GitBranch, Wrench, BookOpen } from "lucide-react";

const resources = [
  {
    icon: Calculator,
    title: "Kalkulator",
    description: "Interaktywne narzędzie do konfiguracji oferty i podglądu cen w czasie rzeczywistym.",
  },
  {
    icon: BookOpen,
    title: "Strona wiedzy",
    description: "Przejrzysty opis procedury, procesu lub zestawu reguł biznesowych.",
  },
  {
    icon: Table,
    title: "Tabela interaktywna",
    description: "Tabela z etapami, filtrami i statusami — do śledzenia procesów krok po kroku.",
  },
  {
    icon: GitBranch,
    title: "Diagram Figma",
    description: "Wizualny schemat procesu lub przepływu — link do projektu w Figma.",
  },
  {
    icon: Wrench,
    title: "Aplikacja wewnętrzna",
    description: "Narzędzie MVP do codziennej pracy — dashboard, generator raportów itp.",
  },
  {
    icon: FileText,
    title: "Procedura",
    description: "Formalny opis postępowania — kroki, role, terminy i wymagane dokumenty.",
  },
];

export function HowToUseSection() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">
            Jak korzystać z&nbsp;hubu
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Każdy zasób ma swój typ — oto krótkie wyjaśnienie, co znajdziesz w poszczególnych kategoriach.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <item.icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold text-card-foreground">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
