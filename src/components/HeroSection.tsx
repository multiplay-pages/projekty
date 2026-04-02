import { ArrowDown, Calculator, FileText, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import multiplayLogo from "@/assets/multiplay-logo.png";

const quickLinks = [
  { label: "Główne narzędzia", anchor: "wyrozniione", icon: LayoutGrid },
  { label: "Indeks zasobów", anchor: "wszystkie-zasoby", icon: Calculator },
  { label: "Typy zasobów", anchor: "jak-korzystac", icon: FileText },
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-35"
          style={{ background: "radial-gradient(circle, hsl(138 40% 90%) 0%, transparent 65%)" }}
        />
        <div
          className="absolute -left-24 bottom-0 h-96 w-96 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, hsl(138 35% 92%) 0%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(hsl(220 25% 14%) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 pb-16 pt-24 sm:px-8 lg:px-10 lg:pb-20 lg:pt-36">
        <div className="mx-auto max-w-[44rem] text-center">
          {/* Multiplay logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={multiplayLogo}
              alt="Multiplay"
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* Headline */}
          <h1 className="mb-5 text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[3.75rem]">
            Narzędzia
            <br />
            <span className="text-gradient-primary">i&nbsp;zasoby operacyjne</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-lg text-[16px] leading-[1.7] text-muted-foreground sm:text-[17px]">
            Kalkulatory ofert, procedury i&nbsp;strony pomocnicze zespołu
            Multiplay — zebrane w&nbsp;jednym miejscu.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollTo("wyrozniione")}
              className="h-[52px] rounded-xl px-9 text-[15px] font-semibold"
            >
              Zobacz narzędzia
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={() => scrollTo("wszystkie-zasoby")}
              className="h-[52px] rounded-xl px-9 text-[15px] font-semibold"
            >
              Szukaj w indeksie
            </Button>
          </div>
        </div>

        {/* Quick-nav strip */}
        <div className="mx-auto mt-12 max-w-2xl">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {quickLinks.map(({ label, anchor, icon: Icon }) => (
              <button
                key={anchor}
                onClick={() => scrollTo(anchor)}
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-[13px] font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-primary-light hover:text-foreground sm:text-[13.5px]"
              >
                <Icon className="h-3.5 w-3.5 text-primary/60 transition-colors group-hover:text-primary" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(100 8% 97%))" }}
      />
    </section>
  );
}
