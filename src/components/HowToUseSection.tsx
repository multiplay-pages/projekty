import { resourceTypes } from "@/data/project-config";
import { SectionHeader } from "./SectionHeader";

export function HowToUseSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-10">
        <div className="mb-12">
          <SectionHeader
            title="Jak korzystać z&nbsp;hubu"
            subtitle="Każdy zasób ma swój typ — oto krótkie wyjaśnienie, co znajdziesz w poszczególnych kategoriach."
            centered
          />
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceTypes.map((item) => (
            <div
              key={item.title}
              className="card-static flex items-start gap-4 p-6"
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.iconStyle}`}>
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
