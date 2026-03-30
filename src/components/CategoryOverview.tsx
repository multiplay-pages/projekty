import { projects } from "@/data/projects";
import { categoryConfig, categoryLabels } from "@/data/project-config";
import { SectionHeader } from "./SectionHeader";

export function CategoryOverview() {
  return (
    <section className="py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-12">
          <SectionHeader
            title="Kategorie zasobów"
            subtitle="Projekty pogrupowane według typu — łatwo znajdziesz to, czego szukasz."
            centered
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {categoryConfig.map(({ key, icon: Icon, iconStyle, description }) => {
            const count = projects.filter((p) => p.category === key).length;
            return (
              <div
                key={key}
                className="group card-elevated flex flex-col items-center px-5 py-7 text-center"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${iconStyle} transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1 text-[13px] font-bold text-card-foreground leading-snug">
                  {categoryLabels[key]}
                </h3>
                <p className="mb-4 text-[11px] leading-relaxed text-muted-foreground">
                  {description}
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
