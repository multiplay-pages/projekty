import { Calculator, FileText, Table, GitBranch, Wrench, BookOpen } from "lucide-react";

const resources = [
  {
    icon: Calculator,
    title: "Kalkulator",
    description: "Interaktywne narzędzie do konfiguracji oferty i podglądu cen w czasie rzeczywistym.",
    accent: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: BookOpen,
    title: "Strona wiedzy",
    description: "Przejrzysty opis procedury, procesu lub zestawu reguł biznesowych.",
    accent: "bg-sky-50 text-sky-600",
  },
  {
    icon: Table,
    title: "Tabela interaktywna",
    description: "Tabela z etapami, filtrami i statusami — do śledzenia procesów krok po kroku.",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    icon: GitBranch,
    title: "Diagram Figma",
    description: "Wizualny schemat procesu lub przepływu — link do projektu w Figma.",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    icon: Wrench,
    title: "Aplikacja wewnętrzna",
    description: "Narzędzie MVP do codziennej pracy — dashboard, generator raportów itp.",
    accent: "bg-slate-50 text-slate-600",
  },
  {
    icon: FileText,
    title: "Procedura",
    description: "Formalny opis postępowania — kroki, role, terminy i wymagane dokumenty.",
    accent: "bg-blue-50 text-blue-600",
  },
];

export function HowToUseSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-14 text-center">
          <h2 className="section-heading mb-3">Jak korzystać z&nbsp;hubu</h2>
          <p className="section-subheading mx-auto max-w-md">
            Każdy zasób ma swój typ — oto krótkie wyjaśnienie, co znajdziesz w&nbsp;poszczególnych kategoriach.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((item) => (
            <div
              key={item.title}
              className="card-static flex items-start gap-4 p-6"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.accent}`}>
                <item.icon className="h-[18px] w-[18px]" />
              </div>
              <div>
                <h3 className="mb-1 text-[14px] font-bold text-card-foreground">{item.title}</h3>
                <p className="text-[12px] leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
