import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projekty")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatured = () => {
    document.getElementById("wyrozniione")?.scrollIntoView({ behavior: "smooth" });
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
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(hsl(220 25% 14%) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-5 pb-20 pt-24 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
        <div className="mx-auto max-w-[44rem] text-center">
          {/* Pill badge */}
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border/80 bg-card/80 px-5 py-2.5 text-[13px] font-semibold text-muted-foreground backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Zasoby operacyjne w jednym miejscu
          </div>

          {/* Headline */}
          <h1 className="mb-5 text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-[3.25rem] lg:text-[3.75rem]">
            Kalkulatory, procedury
            <br />
            <span className="text-gradient-primary">i&nbsp;narzędzia zespołu</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-lg text-[16px] leading-[1.7] text-muted-foreground sm:text-[17px]">
            Wszystko, czego potrzebujesz do codziennej pracy — oferty, procesy,
            tabele i&nbsp;schematy w&nbsp;jednym miejscu.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToProjects}
              className="h-[52px] rounded-xl px-9 text-[15px] font-semibold"
            >
              Przeglądaj projekty
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={scrollToFeatured}
              className="h-[52px] rounded-xl px-9 text-[15px] font-semibold"
            >
              Wyróżnione narzędzia
            </Button>
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
